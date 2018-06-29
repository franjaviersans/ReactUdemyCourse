import React, {Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/AuxHOC/AuxHOC';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from  '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component{

	/*constructor(props){
		super(props);
		this.state = {...}
	};*/

	state = {
		purchasing: false,
	}

	componentDidMount() {
		this.props.onInitIngredients();
	}

	updatePurchaseState(ingredients){
		const sum = Object.keys(ingredients)
					.map(igKey => {
						return ingredients[igKey];
					})
					.reduce((sum, el) => sum + el,0);;

		return sum > 0;
	}

	purchasehandler = () => {
		this.setState({purchasing:true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing:false})
	}

	purchaseContinuehandler = () => {
		this.props.history.push('/checkout');
	}

	render () {

		const disabledInfo = {
			...this.props.ingredients
		};

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.props.error ? <p>Ingredients can't be loaded! </p> : <Spinner />;


		if (this.props.ingredients){
			burger = (
				<Aux>
					<Burger ingredients={this.props.ingredients}/>
					<BuildControls 
						ingredientAdded={(ing) => this.props.onIngredientAdded(ing)}
						ingredientRemove={(ing) => this.props.onIngredientRemoved(ing)}
						disabled={disabledInfo}
						price={this.props.totalPrice}
						purchasable={this.updatePurchaseState(this.props.ingredients)}
						ordered={this.purchasehandler}
						/>
				</Aux>
					);

			orderSummary = (
				<OrderSummary 
					purchaseCancelled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinuehandler}
					ingredients={this.props.ingredients}
					price={this.props.totalPrice}
					/>
				);
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.ingredients,
		totalPrice: state.totalPrice,
		error: state.error,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
		onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
		onInitIngredients: (ingName) => dispatch(burgerBuilderActions.initIngredients(ingName)),
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));