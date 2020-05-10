import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import { StoreStateType } from "../../store/reducers/StateType";
import { IOrder } from "../../Types/Types";

const orders = () => {

	const dispatch = useDispatch();
	const onfetchOrders =  useCallback((token: string, userId: string) => dispatch(actions.fetchOrders(token, userId)), []);

	
	const orders = useSelector<StoreStateType, IOrder[]>(state => state.order.orders);
	const loading = useSelector<StoreStateType, boolean>(state => state.order.loading);
	const token = useSelector<StoreStateType, string | null>(state => state.auth.token) ?? "";
	const userId = useSelector<StoreStateType, string | null>(state => state.auth.userId) ?? "";


	useEffect(() => {
		onfetchOrders(token, userId);
	}, [onfetchOrders, token, userId]);

	let ordersElement: JSX.Element[] = [<Spinner key={"Spinner"}/>];

	if(!loading) {
		ordersElement = orders.map(order =>
			<Order 
				key={order.id}
				ingredients={order.ingredients}
				price={order.price}
			/>
		);
	}

	return (
		<div>
			{ordersElement}
		</div>
	);
};



export default withErrorHandler(orders, axios);