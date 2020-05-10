import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import { IIngredient } from "../../Types/Types";

export type BurgerStoreState = {
  ingredients: IIngredient;
  totalPrice: number;
  error: boolean;
  building: boolean;
};

const initialState: BurgerStoreState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES: IIngredient = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
};

//actions for reducer
const addIngredient = (state: BurgerStoreState, action: actionTypes.AddIngredientAction) => {
  const updateIngreient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updateObject(state.ingredients, updateIngreient);
  const updateState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };

  return updateObject(state, updateState);
};

const removeIngredient = (state: BurgerStoreState, action: actionTypes.BurgerRemoveIngredientAction) => {
  const updateIngreient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
  const updatedIngredients = updateObject(state.ingredients, updateIngreient);
  const updateState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };

  return updateObject(state, updateState);
};

const setIngredients = (state: BurgerStoreState, action: actionTypes.BurgerSetIngredientAction) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const fetchIngredientFailed = (state: BurgerStoreState, action: actionTypes.BurgerFetchIngredientFaileAction) => {
  return updateObject(state, { error: true });
};
//end actions for reducer

const reducer = (state = initialState, action: actionTypes.BurgerActionTypes) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENT_FAILED:
      return fetchIngredientFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
