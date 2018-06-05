import React, {Component } from 'react';

import Aux from '../../hoc/AuxHOC';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
		totalPrice: 4
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
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientAdded={this.addIngredientHandler}
					ingredientRemove={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}/>
			</Aux>
		);
	}
}

export default BurgerBuilder;