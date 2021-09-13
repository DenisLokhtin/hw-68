import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './store/reducer';
import {Provider} from "react-redux";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));