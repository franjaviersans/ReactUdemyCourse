import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

	const dispatch = useDispatch();

	const onIngredientAdded =  (ingName) => dispatch(actions.addIngredient(ingName));
	const onIngredientRemoved =  (ingName) => dispatch(actions.removeIngredient(ingName));
	const onInitIngredients =  useCallback((ingName) => dispatch(actions.initIngredients(ingName)), []);
	const onInitPurchase =  () => dispatch(actions.purchaseInit());
	const onSetAuthRedirectPath =  (path) => dispatch(actions.setAuthRedirectPath(path));
	
	const ingredients = useSelector(state => state.burgerBuilder.ingredients);
	const totalPrice = useSelector(state => state.burgerBuilder.totalPrice);
	const error = useSelector(state => state.burgerBuilder.error);
	const isAuth = useSelector(state => state.auth.token !== null);
	
	

	useEffect(() => {
		onInitIngredients();
	}, [onInitIngredients]);

	const updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
					.map(igKey => {
						return ingredients[igKey];
					})
					.reduce((sum, el) => sum + el,0);;

		return sum > 0;
	}

	const purchasehandler = () => {
		if(isAuth){
			setPurchasing(true);
		}else{
			onSetAuthRedirectPath('/checkout');
			props.history.push('/auth');	
		}
	}

	const purchaseCancelHandler = () => {
		setPurchasing(false);
	}

	const purchaseContinuehandler = () => {
		onInitPurchase();
		props.history.push('/checkout');
	}

	const disabledInfo = {
		...ingredients
	};

	for(let key in disabledInfo){
		disabledInfo[key] = disabledInfo[key] <= 0;
	}

	let orderSummary = null;
	let burger = error ? <p>{"Ingredients can't be loaded!"}</p> : <Spinner />;


	if (ingredients){
		burger = (
			<Aux>
				<Burger ingredients={ingredients}/>
				<BuildControls 
					ingredientAdded={(ing) => onIngredientAdded(ing)}
					ingredientRemove={(ing) => onIngredientRemoved(ing)}
					disabled={disabledInfo}
					price={totalPrice}
					purchasable={updatePurchaseState(ingredients)}
					ordered={purchasehandler}
					isAuth={isAuth}
					/>
			</Aux>
				);

		orderSummary = (
			<OrderSummary 
				purchaseCancelled={purchaseCancelHandler}
				purchaseContinued={purchaseContinuehandler}
				ingredients={ingredients}
				price={totalPrice}
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

export default withErrorHandler(burgerBuilder, axios);