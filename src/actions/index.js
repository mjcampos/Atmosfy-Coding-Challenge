import {GET_LOCAL_WEATHER, GET_LOCAL_WEATHER_SUCCESS} from './constants';

export const getLocalWeather = ({lat, lon}) => ({
	type: GET_LOCAL_WEATHER,
	payload: {
		lat,
		lon
	}
});

export const getLocalWeatherSuccess = data => ({
	type: GET_LOCAL_WEATHER_SUCCESS,
	data
})