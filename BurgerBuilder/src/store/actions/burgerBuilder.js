import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const addIngredient = (ingredientName) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: ingredientName
	};
}


export const removeIngredient = (ingredientName) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: ingredientName
	};
}


const setIngredients = (ingredients) => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients,
	};
}

const fetchIngredientFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENT_FAILED,
	};
}


export const initIngredients = () => {
	return dispatch => {
		axios.get('https://react-my-burger-3b4f9.firebaseio.com/ingredients.json')
			.then(response => {				
				dispatch(setIngredients(response.data));
			})
			.catch(error => {
				dispatch(fetchIngredientFailed());
			});
	};
}



