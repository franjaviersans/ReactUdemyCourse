import * as actionTypes from './actionTypes';


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


export const setIngredients = (ingredients) => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients,
	};
}

export const fetchIngredientFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENT_FAILED,
	};
}


export const initIngredients = () => {
	return {
		type: actionTypes.INIT_INGREDIENTS,
	};
}



