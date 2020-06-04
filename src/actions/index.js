import {GET_LOCAL_WEATHER} from './constants';

export const getLocalWeather = ({lat, lon}) => ({
	type: GET_LOCAL_WEATHER,
	payload: {
		lat,
		lon
	}
});