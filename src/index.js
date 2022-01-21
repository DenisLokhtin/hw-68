import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./store/reducer";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

