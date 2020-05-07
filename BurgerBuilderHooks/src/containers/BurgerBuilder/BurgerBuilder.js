import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/AuxHOC/AuxHOC';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from  '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

const burgerBuilder = props => {
	const [purchasing, setPurchasing] = useState(false);

	useEffect(() => {
		props.onInitIngredients();
	}, []);

	const updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
					.map(igKey => {
						return ingredients[igKey];
					})
					.reduce((sum, el) => sum + el,0);;

		return sum > 0;
	}

	const purchasehandler = () => {
		if(props.isAuth){
			setPurchasing(true);
		}else{
			props.onSetAuthRedirectPath('/checkout');
			props.history.push('/auth');	
		}
	}

	const purchaseCancelHandler = () => {
		setPurchasing(false);
	}

	const purchaseContinuehandler = () => {
		props.onInitPurchase();
		props.history.push('/checkout');
	}

	const disabledInfo = {
		...props.ingredients
	};

	for(let key in disabledInfo){
		disabledInfo[key] = disabledInfo[key] <= 0;
	}

	let orderSummary = null;
	let burger = props.error ? <p>{"Ingredients can't be loaded!"}</p> : <Spinner />;


	if (props.ingredients){
		burger = (
			<Aux>
				<Burger ingredients={props.ingredients}/>
				<BuildControls 
					ingredientAdded={(ing) => props.onIngredientAdded(ing)}
					ingredientRemove={(ing) => props.onIngredientRemoved(ing)}
					disabled={disabledInfo}
					price={props.totalPrice}
					purchasable={updatePurchaseState(props.ingredients)}
					ordered={purchasehandler}
					isAuth={props.isAuth}
					/>
			</Aux>
				);

		orderSummary = (
			<OrderSummary 
				purchaseCancelled={purchaseCancelHandler}
				purchaseContinued={purchaseContinuehandler}
				ingredients={props.ingredients}
				price={props.totalPrice}
				/>
			);
	}

	return (
		<Aux>
			<Modal show={purchasing} modalClosed={purchaseCancelHandler}>
				{orderSummary}
			</Modal>
			{burger}
		</Aux>
	);
}

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		totalPrice: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error,
		isAuth: state.auth.token !== null,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
		onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
		onInitIngredients: (ingName) => dispatch(actions.initIngredients(ingName)),
		onInitPurchase: () => dispatch(actions.purchaseInit()),
		onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));