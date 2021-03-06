import axios from 'axios';

export var getWeather = ({lat, lon}) => {
	return axios.get('https://fcc-weather-api.glitch.me/api/current', {
		params: {
			lat,
			lon
		}
	});
}