import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData
	}
}


export const purchaseBurgerFail = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,		
		error: error,
	}
}


export const purchaseBurgerStart = () =>{
	return {
		type: actionTypes.PURCHASE_BURGER_START,		
	};
}

export const purchaseBurger = (orderData) =>{
	return dispatch => {
		//dispatch action to change loading value
		dispatch(purchaseBurgerStart());

		//send data to server
		axios.post('/orders.json', orderData)
			.then(response => {
				//dispatch action to indicate that there has been a success post
				dispatch(purchaseBurgerSuccess(response.data.name, orderData));
			})
			.catch(error => {
				dispatch(purchaseBurgerFail(error));
			});
	}
}

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT,
	};
}







export const fetchOrdersSuccess = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders,
	};
}


export const fetchOrdersFail = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error: error,
	};
}


export const fetchOrdersStart = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_START,
		error: error,
	};
}


export const fetchOrders = (orderData) =>{
	return dispatch => {
		//dispatch action to change loading value
		dispatch(fetchOrdersStart());

		axios.get('./orders.json')
			.then(res =>{
				const fetchedOrders = [];
				for( let key in res.data){
					fetchedOrders.push({
						...res.data[key],
						id: key
					})
				}

				dispatch(fetchOrdersSuccess(fetchedOrders));
			})
			.catch(err =>{
				dispatch(fetchOrdersFail(err));
			})
	}
}