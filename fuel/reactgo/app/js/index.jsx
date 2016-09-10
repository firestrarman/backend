import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import promise from 'es6-promise';
promise.polyfill();
import fetch from 'isomorphic-fetch';

import AppRouter from './AppRouter';

import store from "./redux/store";

render(
    <Provider store = {store}>
        <AppRouter />
    </Provider>,
    document.querySelector('#main')
);
