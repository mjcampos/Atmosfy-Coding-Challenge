import {GET_LOCAL_WEATHER_SUCCESS} from '../actions/constants';

const INITIAL_STATE = {
}

function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case GET_LOCAL_WEATHER_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default reducer;