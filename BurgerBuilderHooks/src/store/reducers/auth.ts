import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

export type AuthStoreState = {
	token: string | null;
	userId: string | null;
	error: {
		message: string;
	} | null;
	loading: boolean;
	authRedirectPath: string;
}

const initialState: AuthStoreState = {
	token: null,
	userId: null,
	error: null,
	loading: false,
	authRedirectPath: '/',
};

const authSuccess= (state : AuthStoreState, action: actionTypes.AuthSuccessAction) =>{
	return updateObject(state, {
		token: action.idToken,
		userId: action.userId,
		error: null, 
		loading: false,
	});
}

const authFail = (state : AuthStoreState, action: actionTypes.AuthFailAction) =>{
	return updateObject(state, {
		error: action.error, 
		loading: false,
	});
}

const authStart = (state : AuthStoreState, action: actionTypes.AuthStartAction) =>{
	return updateObject(state, {error: null, loading: true});
}

const authLogout = (state : AuthStoreState, action: actionTypes.AuthLogoutAction) => {
	return updateObject(state, {token: null, userId: null});
}

const setAuthRedirectPath = (state : AuthStoreState, action: actionTypes.AuthAuthRedirectPathAction) =>{
	return updateObject(state, {authRedirectPath: action.path});
}



const reducer = (state : AuthStoreState = initialState, action: actionTypes.AuthActionTypes) : AuthStoreState => {
	switch (action.type) {
		case actionTypes.AUTH_START: return authStart(state, action);
		case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
		case actionTypes.AUTH_FAIL: return authFail(state, action);
		case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
		default: return state;
	}
};

export default reducer;
