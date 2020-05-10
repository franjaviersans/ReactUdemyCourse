
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button, { ButtonType } from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';
import { StoreStateType } from '../../store/reducers/StateType';
import { AuthStoreState } from '../../store/reducers/auth';
import { IElementConfig, IFormControl } from '../../Types/Types';

type Controls = {
	email: IFormControl;
	password: IFormControl;
}

type FormElement = {
	id: keyof Controls;
	config: IFormControl
}

const auth: React.FunctionComponent  = () => {
	const [isSignUp, setIsSignUp] = useState<boolean>(false);
	const [controls, setControls] = useState<Controls>({
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
			},
			valid: false,
			touched: false,
			errorMessage: 'Please enter a non-empty e-mail address',
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
			errorMessage: "Please enter a non-empty password (6 characters minimum)",
		},
	});

	
	const dispatch = useDispatch();

	const onAuth  = (email: string, password: string, isSignUp: boolean) => dispatch(actions.auth(email, password, isSignUp));
	const onSetAuthRedirectPath =  useCallback(() => dispatch(actions.setAuthRedirectPath('/')), []);

	const loading = useSelector<StoreStateType, boolean>(state => state.auth.loading);
	const error = useSelector<StoreStateType, {message:string} | null>(state => state.auth.error);
	const isAuth = useSelector<StoreStateType, boolean>(state => state.auth.token !== null);
	const buildingBurger = useSelector<StoreStateType, boolean>(state => state.burgerBuilder.building);
	const authRedirectPath = useSelector<StoreStateType, string>(state => state.auth.authRedirectPath);


	useEffect(() => {
		if(!buildingBurger && authRedirectPath !== '/'){
			onSetAuthRedirectPath();
		}
	}, [onSetAuthRedirectPath, buildingBurger, authRedirectPath]);


	const inputChangedHandler = (event: React.ChangeEvent, controlName: keyof Controls) => {
		const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
		const updateControls = updateObject(controls, {
			[controlName]: updateObject(controls[controlName], {
				value: inputEvent.target.value,
				valid: checkValidity(inputEvent.target.value, controls[controlName].validation),
				touched: true,
			}),
		});
		setControls(updateControls);
	}

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		onAuth(controls.email.value, controls.password.value, isSignUp);
	}

	const siwtchAuthModeHandler = () =>{
		setIsSignUp(!isSignUp);
	}
	
	const fromElementsArray: FormElement [] = [];
		
	for(let key in controls) {
		const controlkey = key as keyof Controls;
		fromElementsArray.push({
			id: controlkey,
			config: controls[controlkey],
		})
	}

	let form: JSX.Element[] = fromElementsArray.map((formElement: FormElement) : JSX.Element => (
		<Input 
			key={formElement.id}
			elementType={formElement.config.elementType}
			elementConfig={formElement.config.elementConfig}
			value={formElement.config.value}
			invalid={!formElement.config.valid}
			shouldValidate={!!formElement.config.validation}
			touched={formElement.config.touched}
			errorMessage={formElement.config.errorMessage}
			changed={(event) => inputChangedHandler(event, formElement.id)}
			/>
	));

	if(loading){
		form = [<Spinner key={"Spinner"}/>]
	}

	let errorMessage = null;

	if(!!error){
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
				<Button btnType={ButtonType.Success}>
					{"SUBMIT"}
				</Button>
			</form>
			<Button 
				clicked={siwtchAuthModeHandler}
				btnType={ButtonType.Danger}>
				{`SWITCH TO ${isSignUp?"SIGNIN": "SIGNUP"}`} 
			</Button>
		</div>
	);
}

export default auth;