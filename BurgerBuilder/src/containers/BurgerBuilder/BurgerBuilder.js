import React, {Component } from 'react';

import Aux from '../../hoc/AuxHOC';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	cheese: 1.3,
	meat: 0.7,
};


class BurgerBuilder extends Component{

	/*constructor(props){
		super(props);
		this.state = {...}
	};*/

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		}, 
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
	}

	updatePurchaseState(updatedIngredients){
		const ingredients = {
			...updatedIngredients
		};
		const sum = Object.keys(ingredients)
					.map(igKey => {
						return ingredients[igKey];
					})
					.reduce((sum, el) => sum + el,0);;

		this.setState({
			purchasable: sum > 0,
		});
	}

	addIngredientHandler = (type) => {
		const count = this.state.ingredients[type] + 1;
		const updatedIngredients = {...this.state.ingredients};

		updatedIngredients[type] = count;

		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});

		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		let count = this.state.ingredients[type] - 1;
		const updatedIngredients = {...this.state.ingredients};


		if(count < 0 ) count = 0;
		updatedIngredients[type] = count;

		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});

		this.updatePurchaseState(updatedIngredients);
	}

	purchasehandler = () => {
		this.setState({purchasing:true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing:false})
	}

	purchaseContinuehandler = () => {
		alert('You continue!');
	}

	render () {

		const disabledInfo = {
			...this.state.ingredients
		};

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					<OrderSummary 
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinuehandler}
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientAdded={this.addIngredientHandler}
					ingredientRemove={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchasehandler}
					/>
			</Aux>
		);
	}
}

export default BurgerBuilder;