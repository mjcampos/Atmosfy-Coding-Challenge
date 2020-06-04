import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}><App/></Provider>,
	document.getElementById('root')
);