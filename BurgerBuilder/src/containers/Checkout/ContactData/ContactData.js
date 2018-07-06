import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name',
				},	
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a non-empty name',
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street',
				},	
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a non-empty street',
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code',
				},	
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5,
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a ZIP code of 5 characters',
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country',
				},	
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a non-empty country',
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-Mail',
				},	
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false,
				errorMessage: 'Please enter a non-empty email',
			},
			deliveryMethod:  {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'fastest', displayValue: 'Fastest'},
						{value: 'cheapest', displayValue: 'Cheapest'},
					]
				},	
				value: 'fastest',
				valid: true,
			},
		},
		formIsValid: false,
	}

	orderHandler = (event) => {
		//sent contact data to server
		event.preventDefault();

		const formData = {};

		for(let formElementIdentifier in this.state.orderForm){
			formData[formElementIdentifier]	 = this.state.orderForm[formElementIdentifier].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			orderData: formData,	
		}


		//call action
		this.props.onOrderBurger(order);
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

		return isValid;
	}

	inputChangedHandler = (event, inputIdentifier) =>{
		const updateOrderForm = {
			...this.state.orderForm
		};

		//to deep copy the nested object
		const updateFormElement = {
			...updateOrderForm[inputIdentifier]
		};

		//change value
		updateFormElement.value = event.target.value;
		//validate the values
		updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation);
		updateFormElement.touched = true;
		updateOrderForm[inputIdentifier] = updateFormElement;


		let formIsValid = true;

		for(let inputIdentifiers in updateOrderForm){
			formIsValid	 = formIsValid && updateOrderForm[inputIdentifiers].valid;
		}

		//two way binding
		this.setState({
			orderForm: updateOrderForm,
			formIsValid: formIsValid,
		});

		
	}

	render(){

		const fromElementsArray = [];
		
		for(let key in this.state.orderForm) {
			fromElementsArray.push({
				id: key,
				config: this.state.orderForm[key],
			})
		}
		
		//render every input element
		let form = (
			<form onSubmit={this.orderHandler}>
				{fromElementsArray.map( formElement => (
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
					))}
				<Button  disabled={!this.state.formIsValid}
					btnType='Success'>
					ORDER
				</Button>
			</form>
		);

		if(this.props.loading){
			form = <Spinner />	
		}
		
		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		totalPrice: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData,axios));