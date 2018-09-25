import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';

import PearsonUsers from './container/PearsonUsers';
import rootReducer from './reducer';
import { rootSaga } from './saga/rootSaga';



const saga = createSagaMiddleware();

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(saga));

saga.run(rootSaga);

ReactDOM.render((
	<Provider store={store}>
		<PearsonUsers />
	</Provider>
	),document.getElementById('root')
);

