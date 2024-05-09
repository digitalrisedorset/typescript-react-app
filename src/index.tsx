import React from "react";
import {createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import {reducers} from "./reducers";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const store = createStore(reducers, applyMiddleware(thunk))

root.render(
    <Provider store={store}>
        <App color="red" />
    </Provider>)

