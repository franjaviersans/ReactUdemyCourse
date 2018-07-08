
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component{

	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Mail Address',
				},	
				value: '',
				validation: {
					required: true,
					isEmail: true,
					touched: false,
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a non-empty name',
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password',
				},	
				value: '',
				validation: {
					required: true,
					minLength: 6,
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a non-empty name',
			},
		},
		isSignUp:true,
	}

	componentDidMount(){
		if(!this.props.buildingBurger && this.props.authRedirectPath !== '/'){
			this.props.onSetAuthRedirectPath();
		}
	}


	checkValidity(value, rules) {
		//function to check fields of the form
		let isValid = true;

		if(!rules) return isValid;

		if(rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if(rules.minLength){
			isValid = value.length >= rules.minLength  && isValid;
		}

		if(rules.maxLength){
			isValid = value.length <= rules.maxLength  && isValid;
		}

		if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

		return isValid;
	}


	inputChangedHandler = (event, controlName) =>{
		const updateControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched: true,

			}
		};

		//two way binding
		this.setState({controls: updateControls,});

		
	}

	submitHandler = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
	}

	siwthAuthModeHandler = () =>{
		this.setState ( prevState => {
			return {isSignUp: !prevState.isSignUp}
		})
	}

	render(){

		const fromElementsArray = [];
		
		for(let key in this.state.controls) {
			fromElementsArray.push({
				id: key,
				config: this.state.controls[key],
			})
		}
		
		let form = fromElementsArray.map(formElement => (
			<Input 
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				errorMessage={formElement.config.errorMessage}
				changed={(event) => this.inputChangedHandler(event, formElement.id)}
			/>
		));

		if(this.props.loading){
			form = <Spinner/>
		}

		let errorMessage = null;

		if(this.props.error){
			errorMessage = (
				<p>{this.props.error.message}</p>
			);
		}

		let authRedirect = null;

		if(this.props.isAuth){
			authRedirect = <Redirect to={this.props.authRedirectPath} />
		}

		return (
			<div className={classes.Auth}>
				{authRedirect}
				{errorMessage}
				<form onSubmit={this.submitHandler}>
					{form}
					<Button btnType="Success">
						SUBMIT
					</Button>
				</form>
				<Button 
					clicked={this.siwthAuthModeHandler}
					btnType="Danger">
					SWITCH TO {this.state.isSignUp?"SIGNIN": "SIGNUP"}
				</Button>
			</div>
		);
	}

}


const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuth: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirectPath: state.auth.authRedirectPath,
	};
}

const mapDispatchToProps = dispatch =>{
	return {
		onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);