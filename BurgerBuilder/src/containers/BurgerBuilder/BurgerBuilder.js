import React, {Component } from 'react';

import Aux from '../../hoc/AuxHOC/AuxHOC';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

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
		loading: false,
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
		// alert('You continue!');

		this.setState({
			loading: true,
		});

		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer:{
				name: 'Fran',
				address:{
					street: 'Santa Fe',
					zipCode: '1080',
					country: 'Venezuela',
				},
				email: 'aa@gmail.com'
			},
			deliveryMethod: 'fastest',
		}
		axios.post('/orders.json', order)
			.then(response => {
				this.setState({
					loading: false,
					purchasing: false,
				});
			})
			.catch(error => {
				this.setState({
					loading: false,
					purchasing: false,
				});
			});
	}

	render () {

		const disabledInfo = {
			...this.state.ingredients
		};

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = <OrderSummary 
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinuehandler}
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						/>;

		if(this.state.loading){
			orderSummary = <Spinner/ >;
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
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