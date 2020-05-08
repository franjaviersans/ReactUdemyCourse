import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const checkout = props => {

	const ingredients = useSelector(state => state.burgerBuilder.ingredients);
	const purchased = useSelector(state => state.order.purchased);

	const checkoutCancelledHandler = () => {
		props.history.goBack();
	}

	const checkoutContinuedHandler = () => {
		if(!props.history.location.pathname.includes('checkout/contact-data'))
			props.history.replace('checkout/contact-data');	
	}

	let summary = <Redirect to="/"/>;

	if(ingredients){
		const purchasedRedirect = purchased? <Redirect to="/" />: null;

		summary = 
		(
		<div>
			{purchasedRedirect}
			<CheckoutSummary 
				ingredients={ingredients}
				checkoutCancelled={checkoutCancelledHandler}
				checkoutContinued={checkoutContinuedHandler}
				/>
			<Route 
				path={props.match.path+'/contact-data'} 
				component={ContactData}
				/>
		</div>
		);
	}

	return (
		<div>
			{summary}
		</div>
	);
}

export default checkout;