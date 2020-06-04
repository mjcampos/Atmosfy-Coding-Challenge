import {GET_LOCAL_WEATHER} from './constants';

export const getLocalWeather = ({latitude, longitude}) => ({
	type: GET_LOCAL_WEATHER,
	payload: {
		latitude,
		longitude
	}
});