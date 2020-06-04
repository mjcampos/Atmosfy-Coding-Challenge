import {take, call, fork} from 'redux-saga/effects';
import { GET_LOCAL_WEATHER } from '../actions/constants';
import * as api from '../api';

function* getWeather(coord){
	try{
		// Begin by getting a user's location (long and lat)
		const result = yield call(api.getWeather, coord);
		console.log(result.data);
	}catch(e){
	}
}

function* watchGetUsersRequest(){
	while(true) {
		var {payload} = yield take(GET_LOCAL_WEATHER);
		yield call(getWeather, payload);
	}
}

const weatherSagas = [
	fork(watchGetUsersRequest)
]

export default weatherSagas;