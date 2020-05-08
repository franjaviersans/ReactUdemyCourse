
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';

const auth  = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [controls, setControls] = useState({
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
			errorMessage: "Please enter a non-empty name",
		},
	});

	
	const dispatch = useDispatch();

	const onAuth  = (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp));
	const onSetAuthRedirectPath =  useCallback(() => dispatch(actions.setAuthRedirectPath('/')));

	const loading = useSelector(state => state.auth.loading);
	const error = useSelector(state => state.auth.error);
	const isAuth = useSelector(state => state.auth.token !== null);
	const buildingBurger = useSelector(state => state.burgerBuilder.building);
	const authRedirectPath = useSelector(state => state.auth.authRedirectPath);


	useEffect(() => {
		if(!buildingBurger && authRedirectPath !== '/'){
			onSetAuthRedirectPath();
		}
	}, [onSetAuthRedirectPath, buildingBurger, authRedirectPath]);


	const inputChangedHandler = (event, controlName) =>{
		
		const updateControls = updateObject(controls, {
			[controlName]: updateObject(controls[controlName], {
				value: event.target.value,
				valid: checkValidity(event.target.value, controls[controlName].validation),
				touched: true,
			}),
		});
		setControls(updateControls);
	}

	const submitHandler = (event) => {
		event.preventDefault();
		onAuth(controls.email.value, controls.password.value, isSignUp);
	}

	const siwtchAuthModeHandler = () =>{
		setIsSignUp(!isSignUp);
	}
	
	const fromElementsArray = [];
		
	for(let key in controls) {
		fromElementsArray.push({
			id: key,
			config: controls[key],
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
			changed={(event) => inputChangedHandler(event, formElement.id)}
		/>
	));

	if(loading){
		form = <Spinner/>
	}

	let errorMessage = null;

	if(error){
		errorMessage = (
			<p>{error.message}</p>
		);
	}

	let authRedirect = null;

	if(isAuth){
		authRedirect = <Redirect to={authRedirectPath} />
	}

	return (
		<div className={classes.Auth}>
			{authRedirect}
			{errorMessage}
			<form onSubmit={submitHandler}>
				{form}
				<Button btnType="Success">
					SUBMIT
				</Button>
			</form>
			<Button 
				clicked={siwtchAuthModeHandler}
				btnType="Danger">
				SWITCH TO {isSignUp?"SIGNIN": "SIGNUP"}
			</Button>
		</div>
	);
}

export default auth;