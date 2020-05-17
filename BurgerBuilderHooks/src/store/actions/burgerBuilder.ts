import * as actionTypes from "./actionTypes";
import { IIngredient, IngredientTypes } from "../../Types/Types";

export const addIngredient = (ingredientName: IngredientTypes): actionTypes.BurgerActionTypes => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const removeIngredient = (ingredientName: IngredientTypes): actionTypes.BurgerActionTypes => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const setIngredients = (ingredients: IIngredient): actionTypes.BurgerActionTypes => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientFailed = (): actionTypes.BurgerActionTypes => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED,
  };
};

export const initIngredients = (): actionTypes.BurgerActionTypes => {
  return {
    type: actionTypes.INIT_INGREDIENTS,
  };
};
