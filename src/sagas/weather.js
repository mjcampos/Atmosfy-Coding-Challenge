import {take, call, fork, put} from 'redux-saga/effects';
import { getLocalWeatherSuccess } from '../actions';
import { GET_LOCAL_WEATHER } from '../actions/constants';
import * as api from '../api';

function* getWeather(coord){
	try{
		var result, weather, icon;
		
		// Check if results have an icon URL. If not then call the API again
		do {
			// Begin by getting a user's location (long and lat)
			result = yield call(api.getWeather, coord);
			weather = result.data.weather[0];
			icon = weather.icon
		} while(!icon)

		console.log(result.data);

		// API weather is returned as celsius, need to pass to action in both celsius and fahrenheit
		var celsius = result.data.main.temp;
		var fahrenheit = (celsius * (9/5)) + 32;

		yield put(getLocalWeatherSuccess({
			celsius_temp: celsius,
			fahrenheit_temp: fahrenheit,
			description: weather.description,
			main: weather.main,
			icon: icon,
			country: result.data.sys.country,
			city: result.data.name
		}))
	}catch(e){
		console.log("error", e);
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