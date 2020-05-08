import { put }  from 'redux-saga/effects';

import * as actions from '../actions';
import axios from '../../axios-orders';

export function* initIngredientSaga(action) { 
	try{
		const response = yield axios.get('https://react-my-burger-3b4f9.firebaseio.com/ingredients.json');
		yield put(actions.setIngredients(response.data));
	} catch (error) {
		yield put(actions.fetchIngredientFailed());
	}	
}