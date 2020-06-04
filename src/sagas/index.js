import weatherSagas from './weather';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
	yield all([
		...weatherSagas
	]);
}