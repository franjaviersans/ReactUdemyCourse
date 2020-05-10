import * as actionTypes from './actionTypes';
import { IOrderFormData, IOrder } from '../../Types/Types';




export const purchaseBurgerSuccess = (id: string, orderData: IOrder): actionTypes.OrderActionTypes => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData
	}
}


export const purchaseBurgerFail = (): actionTypes.OrderActionTypes => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL
	}
}


export const purchaseBurgerStart = (): actionTypes.OrderActionTypes =>{
	return {
		type: actionTypes.PURCHASE_BURGER_START,		
	};
}

export const purchaseBurger = (orderData: IOrder, token: string): actionTypes.OrderActionTypes =>{
	return {
		type: actionTypes.PURCHASE_BURGER, 
		orderData: orderData,
		token: token,
	}
}

export const purchaseInit = (): actionTypes.OrderActionTypes => {
	return {
		type: actionTypes.PURCHASE_INIT,
	};
}







export const fetchOrdersSuccess = (orders: IOrder[]): actionTypes.OrderActionTypes => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders,
	};
}


export const fetchOrdersFail = (): actionTypes.OrderActionTypes => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
	};
}


export const fetchOrdersStart = (): actionTypes.OrderActionTypes => {
	return {
		type: actionTypes.FETCH_ORDERS_START,
	};
}


export const fetchOrders = (token: string, userId: string): actionTypes.OrderActionTypes =>{
	return {
		type: actionTypes.FETCH_ORDERS,
		token: token,
		userId: userId,
	}
}