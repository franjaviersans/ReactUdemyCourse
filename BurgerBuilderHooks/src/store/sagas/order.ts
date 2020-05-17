import { put } from "redux-saga/effects";

import axios from "../../axios-orders";
import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

export function* purchaseBurgerSaga(action: actionTypes.OrderPurchaseAction) {
  //dispatch action to change loading value
  yield put(actions.purchaseBurgerStart());

  try {
    //send data to server
    const response = yield axios.post("/orders.json?auth=" + action.token, action.orderData);
    //dispatch action to indicate that there has been a success post
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (err) {
    yield put(actions.purchaseBurgerFail());
  }
}

export function* fetchOrdersSaga(action: actionTypes.OrderFetchAction) {
  //dispatch action to change loading value
  yield put(actions.fetchOrdersStart());

  const queryParams = "?auth=" + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';

  try {
    const res = yield axios.get("./orders.json" + queryParams);
    const fetchedOrders = [];

    for (const key in res.data) {
      if (!!key) {
        fetchedOrders.push({
          ...res.data[key],
          id: key,
        });
      }
    }

    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail());
  }
}

/*

export function* logoutSaga(action) {

	yield localStorage.removeItem('token');
	yield localStorage.removeItem('expirationDate');
	yield localStorage.removeItem('userId');

	yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000);
	yield put(actions.logout());
}

export function* authUserSaga(action) {
	yield put(actions.authStart());

	//necessary data
	const authData = {
		email: action.email,
		password: action.password,
		returnSecureToken: true,
	};

	//url for singup
	let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCQiVOjLfDich4A-nY-72yoaLmDQn8yy8c';

	//url for singin
	if(!action.isSignUp) url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCQiVOjLfDich4A-nY-72yoaLmDQn8yy8c'; 

	try{
		//asynch call to the rest server
		const response = yield axios.post(url, authData);


		const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
		//store in local store for persistence auth value
		yield localStorage.setItem('token', response.data.idToken);
		yield localStorage.setItem('expirationDate', expirationDate);
		yield localStorage.setItem('userId', response.data.localId);


		yield put(actions.authSuccess(response.data.idToken, response.data.localId));
		yield put(actions.checkAuthTimeout(response.data.expiresIn));		
	} catch(err) {
		yield put(actions.authFail(err.response.data.error)) ;
	}
}


export function* authCheckStateSaga(action){
	const token = yield localStorage.getItem( 'token');
	if(!token){
		yield put(actions.logout());	
	}else{
		const expirationDate = yield new Date(localStorage.getItem('expirationDate'));

		if(expirationDate > new Date()){

			const userId = yield localStorage.getItem('userId');

			yield put(actions.authSuccess(token, userId));
			//time in milliseconds
			yield put(actions.checkAuthTimeout(
				(expirationDate.getTime() - new Date().getTime())/1000)
			);

		}else{
			yield put(actions.logout());
		}
	}
}*/
