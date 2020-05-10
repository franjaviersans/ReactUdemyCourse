import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';
import { IOrder } from '../../Types/Types';


export type OrderStoreState ={
	loading: boolean,
	orders: IOrder[],
	purchased: boolean,
}

const initialState = {
	loading: false,
	orders: [],
	purchased: false,
};


//actions for reducer
const purchaseInit = (state: OrderStoreState) => {
	return updateObject(state, {purchased: false});
}

const fetchOrderStart = (state: OrderStoreState,) => {
	return updateObject(state, {loading: true});
}

const fetchOrderSuccess = (state: OrderStoreState, action: actionTypes.OrderFetchSuccesAction) => {
	return updateObject(state, {
		orders: action.orders,
		loading: false,
	});
}

const fetchOrdersFail = (state: OrderStoreState) => {
	return updateObject(state, {loading: false});
}


const purchaseBurgerFail = (state: OrderStoreState) => {
	return updateObject(state, {loading: false});
}

const purchaseBurgerSuccess = (state: OrderStoreState, action: actionTypes.OrderPurchaseSuccessAction) => {
	const newOrder = updateObject( action.orderData, {id: action.orderId});

	return updateObject(state, {
		loading: false,
		orders: state.orders.concat(newOrder),
		purchased: true,
	});
}

const purchaseBurgerStart = (state: OrderStoreState) => {
	return updateObject(state, {loading: true});
}
//end actions for reducer

const reducer = (state: OrderStoreState = initialState, action: actionTypes.OrderActionTypes) =>{
	switch(action.type){
		case(actionTypes.PURCHASE_BURGER_START): return purchaseBurgerStart(state);
		case(actionTypes.PURCHASE_BURGER_SUCCESS): return purchaseBurgerSuccess(state, action);
		case(actionTypes.PURCHASE_BURGER_FAIL): return purchaseBurgerFail(state);
		case(actionTypes.PURCHASE_INIT): return purchaseInit(state);
		case(actionTypes.FETCH_ORDERS_START): return fetchOrderStart(state);
		case(actionTypes.FETCH_ORDERS_SUCCESS): return fetchOrderSuccess(state, action);
		case(actionTypes.FETCH_ORDERS_FAIL): return fetchOrdersFail(state);
		default: return state;
	}
};

export default reducer;

