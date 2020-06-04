import {takeEvery, call, fork} from 'redux-saga/effects';
import { GET_LOCAL_WEATHER } from '../actions/constants';
import * as api from '../api';

function* getWeather(){
	try{
		// Begin by getting a user's location (long and lat)
		const result = yield call(api.getLocation);
		console.log(result);
	}catch(e){
	}
}

function* watchGetUsersRequest(){
	yield takeEvery(GET_LOCAL_WEATHER, getWeather);
}

const weatherSagas = [
	fork(watchGetUsersRequest)
]

export default weatherSagas;