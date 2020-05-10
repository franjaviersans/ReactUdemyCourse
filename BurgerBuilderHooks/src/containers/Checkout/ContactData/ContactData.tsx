import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button, { ButtonType } from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';
import { IFormControl, ISimpleControlForm, IOrder, IIngredient, IOrderFormData } from '../../../Types/Types';
import { StoreStateType } from '../../../store/reducers/StateType';
import { type } from 'os';

type Controls = {
	name: IFormControl;
	street: IFormControl;
	zipCode: IFormControl;
	country: IFormControl;
	email: IFormControl;
	deliveryMethod: ISimpleControlForm;
}

type FormElement = {
	id: keyof Controls;
	config: IFormControl | ISimpleControlForm
}

const contactData = () => {
	const [orderForm, setOrderForm] = useState<Controls>({
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
		}
	);
	
	const [formIsValid, setFormIsValid] = useState<boolean>(false); 

	const dispatch = useDispatch();

	const onOrderBurger =  (orderData : IOrder, token: string) => dispatch(actions.purchaseBurger(orderData, token));

	const ingredients = useSelector<StoreStateType, IIngredient>(state => state.burgerBuilder.ingredients);
	const totalPrice = useSelector<StoreStateType, number>(state => state.burgerBuilder.totalPrice);
	const loading = useSelector<StoreStateType, boolean>(state => state.order.loading);
	const token = useSelector<StoreStateType, string | null>(state => state.auth.token) ?? "";
	const userId = useSelector<StoreStateType, string | null>(state => state.auth.userId) ?? "";

	const orderHandler = (event: React.FormEvent) => {
		//sent contact data to server
		event.preventDefault();

		const formData: IOrderFormData = {};

		for(let formElementIdentifier in orderForm){
			const formElementIdentifierKey = formElementIdentifier as keyof IOrderFormData;
			formData[formElementIdentifierKey]	 = orderForm[formElementIdentifierKey].value;
		}

		const order: IOrder = {
			ingredients: ingredients,
			price: totalPrice.toString(),
			orderData: formData,	
			userId: userId,
			id: ""
		}


		//call action
		onOrderBurger(order, token);
	}

	const inputChangedHandler = (event: React.ChangeEvent, inputIdentifier: keyof Controls) =>{
		const inputEvent = event as React.ChangeEvent<HTMLInputElement>;

		const validation =  'validation' in orderForm[inputIdentifier] ? 
			(orderForm[inputIdentifier] as IFormControl).validation  : undefined;

		//to deep copy the nested object
		const updateFormElement = updateObject(orderForm[inputIdentifier], {
			value: inputEvent.target.value,
			valid: checkValidity(inputEvent.target.value, validation),
			touched: true,
		});
		
		const updateOrderForm = updateObject(orderForm, {
			[inputIdentifier]: updateFormElement,
		});


		let formIsValid = true;

		for(let inputIdentifiers in updateOrderForm){
			const inputIdentifiersKey = inputIdentifiers as keyof IOrderFormData;
			formIsValid	 = formIsValid && updateOrderForm[inputIdentifiersKey].valid;
		}

		setOrderForm(updateOrderForm);
		setFormIsValid(formIsValid);
	}
	
	const fromElementsArray: FormElement []  = [];
		
	for(let key in orderForm) {
		const controlsKey = key as keyof Controls;
		fromElementsArray.push({
			id: controlsKey,
			config: orderForm[controlsKey],
		})
	}
	
	//render every input element
	let form = (
		<form onSubmit={orderHandler}>
			{fromElementsArray.map( formElement => {
				const validation =  !!(formElement.config as IFormControl).validation ? true : false;
				const touched =  (formElement.config as IFormControl).touched ? (formElement.config as IFormControl).touched  : false;
				const errorMessage =  (formElement.config as IFormControl).errorMessage ?  (formElement.config as IFormControl).errorMessage  : "";

				return <Input 
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					shouldValidate={validation}
					touched={touched}
					errorMessage={errorMessage}
					changed={(event) => inputChangedHandler(event, formElement.id)}
					/>;
			})}
			<Button  disabled={!formIsValid}
				btnType={ButtonType.Success}>
				{"ORDER"}
			</Button>
		</form>
	);

	if(loading){
		form = <Spinner />	
	}
	
	return (
		<div className={classes.ContactData}>
			<h4>{"Enter your Contact Data"}</h4>
			{form}
		</div>
	);
}


export default withErrorHandler(contactData,axios);