import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Aux from '../../hoc/AuxHOC/AuxHOC';
import Burger from '../../components/Burger/Burger';
import BuildControls, { Disabled } from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from  '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import { IngredientTypes, IIngredient } from '../../Types/Types';
import { StoreStateType } from '../../store/reducers/StateType';


const burgerBuilder: React.FunctionComponent<RouteComponentProps> = props => {
	const [purchasing, setPurchasing] = useState(false);

	const dispatch = useDispatch();

	const onIngredientAdded =  (ingName: IngredientTypes) => dispatch(actions.addIngredient(ingName));
	const onIngredientRemoved =  (ingName: IngredientTypes) => dispatch(actions.removeIngredient(ingName));
	const onInitIngredients =  useCallback(() => dispatch(actions.initIngredients()), []);
	const onInitPurchase =  () => dispatch(actions.purchaseInit());
	const onSetAuthRedirectPath =  (path: string) => dispatch(actions.setAuthRedirectPath(path));
	
	const ingredients = useSelector<StoreStateType, IIngredient>(state => state.burgerBuilder.ingredients);
	const totalPrice = useSelector<StoreStateType, number>(state => state.burgerBuilder.totalPrice);
	const error = useSelector<StoreStateType, boolean>(state => state.burgerBuilder.error);
	const isAuth = useSelector<StoreStateType, boolean>(state => state.auth.token !== null);
	
	

	useEffect(() => {
		onInitIngredients();
	}, [onInitIngredients]);

	const updatePurchaseState = (ingredients: IIngredient) => {
		const sum = Object.keys(ingredients)
					.map(ig => {
						const igKey = ig as IngredientTypes;
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

	const disabledInfo: Disabled = {};

	for(let key in ingredients){
		const igKey = key as IngredientTypes;
		disabledInfo[igKey] = ingredients[igKey] <= 0;
	}

	let orderSummary = null;
	let burger = error ? <p>{"Ingredients can't be loaded!"}</p> : <Spinner />;


	if (ingredients){
		burger = (
			<Aux>
				<Burger ingredients={ingredients}/>
				<BuildControls 
					ingredientAdded={(ing: IngredientTypes) => onIngredientAdded(ing)}
					ingredientRemove={(ing: IngredientTypes) => onIngredientRemoved(ing)}
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