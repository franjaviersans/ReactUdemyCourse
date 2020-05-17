import { IIngredient, IOrder, IErrorMessage, IngredientTypes } from "../../Types/Types";

export const INITIAL_StTATE = "";

export interface InitialState {
  type: typeof INITIAL_StTATE;
}

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const SET_INGREDIENTS = "SET_INGREDIENTS";
export const FETCH_INGREDIENT_FAILED = "FETCH_INGREDIENT_FAILED";
export const INIT_INGREDIENTS = "INIT_INGREDIENTS";

export interface AddIngredientAction {
  type: typeof ADD_INGREDIENT;
  ingredientName: IngredientTypes;
}

export interface BurgerRemoveIngredientAction {
  type: typeof REMOVE_INGREDIENT;
  ingredientName: IngredientTypes;
}

export interface BurgerSetIngredientAction {
  type: typeof SET_INGREDIENTS;
  ingredients: IIngredient;
}

export interface BurgerFetchIngredientFaileAction {
  type: typeof FETCH_INGREDIENT_FAILED;
}

export interface BurgerInitIngredientAction {
  type: typeof INIT_INGREDIENTS;
}

export type BurgerActionTypes =
  | AddIngredientAction
  | BurgerRemoveIngredientAction
  | BurgerSetIngredientAction
  | BurgerFetchIngredientFaileAction
  | BurgerInitIngredientAction
  | InitialState;

export const PURCHASE_BURGER = "PURCHASE_BURGER";
export const PURCHASE_BURGER_SUCCESS = "PURCHASE_BURGER_SUCCESS";
export const PURCHASE_BURGER_FAIL = "PURCHASE_BURGER_FAIL";
export const PURCHASE_BURGER_START = "PURCHASE_BURGER_START";
export const PURCHASE_INIT = "PURCHASE_INIT";

export const FETCH_ORDERS = "FETCH_ORDERS";
export const FETCH_ORDERS_START = "FETCH_ORDERS_START";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";

export interface OrderPurchaseAction {
  type: typeof PURCHASE_BURGER;
  orderData: IOrder;
  token: string;
}

export interface OrderPurchaseSuccessAction {
  type: typeof PURCHASE_BURGER_SUCCESS;
  orderData: IOrder;
  orderId: string;
}

export interface OrderPurchaseFailAction {
  type: typeof PURCHASE_BURGER_FAIL;
}

export interface OrderPurchaseStartAction {
  type: typeof PURCHASE_BURGER_START;
}

export interface OrderPurchaseInitAction {
  type: typeof PURCHASE_INIT;
}

export interface OrderFetchAction {
  type: typeof FETCH_ORDERS;
  token: string;
  userId: string;
}

export interface OrderFetchStartAction {
  type: typeof FETCH_ORDERS_START;
}

export interface OrderFetchSuccesAction {
  type: typeof FETCH_ORDERS_SUCCESS;
  orders: IOrder[];
}

export interface OrderFetchFailAction {
  type: typeof FETCH_ORDERS_FAIL;
}

export type OrderActionTypes =
  | OrderPurchaseAction
  | OrderPurchaseSuccessAction
  | OrderPurchaseFailAction
  | OrderPurchaseStartAction
  | OrderPurchaseInitAction
  | OrderFetchAction
  | OrderFetchStartAction
  | OrderFetchSuccesAction
  | OrderFetchFailAction
  | InitialState;

export const AUTH_CHECK_STATE = "AUTH_CHECK_STATE";
export const AUTH_USER = "AUTH_USER";
export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_CHECK_TIMEOUT = "AUTH_CHECK_TIMEOUT";
export const AUTH_INITIATE_LOGOUT = "AUTH_INITIATE_LOGOUT";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH";

export interface AuthStartAction {
  type: typeof AUTH_START;
}

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  idToken: string;
  userId: string;
}

export interface AuthFailAction {
  type: typeof AUTH_FAIL;
  error: IErrorMessage;
}

export interface AuthInitiateLogoutAction {
  type: typeof AUTH_INITIATE_LOGOUT;
}

export interface AuthLogoutAction {
  type: typeof AUTH_LOGOUT;
}

export interface AuthCheckTimeOutAction {
  type: typeof AUTH_CHECK_TIMEOUT;
  expirationTime: number;
}

export interface AuthUserAction {
  type: typeof AUTH_USER;
  email: string;
  password: string;
  isSignUp: boolean;
}

export interface AuthAuthRedirectPathAction {
  type: typeof SET_AUTH_REDIRECT_PATH;
  path: string;
}

export interface AuthCheckStateAction {
  type: typeof AUTH_CHECK_STATE;
}

export type AuthActionTypes =
  | AuthStartAction
  | AuthSuccessAction
  | AuthFailAction
  | AuthInitiateLogoutAction
  | AuthLogoutAction
  | AuthCheckTimeOutAction
  | AuthCheckStateAction
  | AuthAuthRedirectPathAction
  | AuthUserAction
  | InitialState;
