import {take, call, fork, put} from 'redux-saga/effects';
import { getLocalWeatherSuccess } from '../actions';
import { GET_LOCAL_WEATHER } from '../actions/constants';
import * as api from '../api';

function* getWeather(coord){
	try{
		// Begin by getting a user's location (long and lat)
		const result = yield call(api.getWeather, coord);
		// console.log(result.data);

		// API weather is returned as celsius, need to pass to action in both celsius and fahrenheit
		var celsius = result.data.main.temp;
		var fahrenheit = (celsius * (9/5)) + 32;

		yield put(getLocalWeatherSuccess({
			celsius_temp: celsius,
			fahrenheit_temp: fahrenheit,
			description: result.data.weather[0].description
		}))
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