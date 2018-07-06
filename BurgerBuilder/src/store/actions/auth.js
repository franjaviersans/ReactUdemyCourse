import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () =>{
	return {
		type: actionTypes.AUTH_START,
	};
}


export const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		authData: authData
	};
}


export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
}

export const auth = (email, password, isSignUp) => {
	return dispatch => {
		dispatch(authStart());

		console.log(email+" "+password);
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true,
		};

		let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCQiVOjLfDich4A-nY-72yoaLmDQn8yy8c';

		if(!isSignUp) url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCQiVOjLfDich4A-nY-72yoaLmDQn8yy8c'; 


		axios.post(url, authData)
			.then(res => {
				console.log(res);
				dispatch(authSuccess(res.data));
			})
			.catch(err => {
				console.log(err);
				dispatch(authFail(err));
			})
	};
}
