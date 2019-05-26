import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

const Store = createStore(myReducer, applyMiddleware(Thunk));

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
