import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer, client } from './reducers/index';

const defaultState = {};

const store = createStore(
	rootReducer,
	defaultState,
	compose(
	applyMiddleware(client.middleware())
	window.devToolsExtension ? window.devToolsExtension() : f => f,
		),
	);


export default store;