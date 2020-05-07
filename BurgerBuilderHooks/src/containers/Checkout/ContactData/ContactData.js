import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';

const contactData = props => {
	const [orderForm, setOrderForm] = useState({
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
	
	const [formIsValid, setFormIsValid] = useState(false); 

	const orderHandler = (event) => {
		//sent contact data to server
		event.preventDefault();

		const formData = {};

		for(let formElementIdentifier in orderForm){
			formData[formElementIdentifier]	 = orderForm[formElementIdentifier].value;
		}

		const order = {
			ingredients: props.ingredients,
			price: props.totalPrice,
			orderData: formData,	
			userId: props.userId,
		}


		//call action
		props.onOrderBurger(order, props.token);
	}

	const inputChangedHandler = (event, inputIdentifier) =>{
	
		//to deep copy the nested object
		const updateFormElement = updateObject(orderForm[inputIdentifier], {
			value: event.target.value,
			valid: checkValidity(event.target.value, orderForm[inputIdentifier].validation),
			touched: true,
		});
		
		const updateOrderForm = updateObject(orderForm, {
			[inputIdentifier]: updateFormElement,
		});


		let formIsValid = true;

		for(let inputIdentifiers in updateOrderForm){
			formIsValid	 = formIsValid && updateOrderForm[inputIdentifiers].valid;
		}

		setOrderForm(updateOrderForm);
		setFormIsValid(formIsValid);
	}
	
	const fromElementsArray = [];
		
	for(let key in orderForm) {
		fromElementsArray.push({
			id: key,
			config: orderForm[key],
		})
	}
	
	//render every input element
	let form = (
		<form onSubmit={orderHandler}>
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
					changed={(event) => inputChangedHandler(event, formElement.id)}
					/>
				))}
			<Button  disabled={!formIsValid}
				btnType='Success'>
				{"ORDER"}
			</Button>
		</form>
	);

	if(props.loading){
		form = <Spinner />	
	}
	
	return (
		<div className={classes.ContactData}>
			<h4>{"Enter your Contact Data"}</h4>
			{form}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		totalPrice: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId,
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(contactData,axios));