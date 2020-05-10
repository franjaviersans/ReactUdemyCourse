import * as actionTypes from "./actionTypes";
import { IErrorMessage } from "../../Types/Types";

export const authStart = (): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (idToken: string, userId: string): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
  };
};

export const authFail = (error: IErrorMessage): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = (): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = (): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime: number): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const auth = (email: string, password: string, isSignUp: boolean): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp,
  };
};

export const setAuthRedirectPath = (path: string): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = (): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};
