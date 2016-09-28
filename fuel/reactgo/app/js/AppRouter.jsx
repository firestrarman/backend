import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import Index from './containers/index';
import Login from './containers/login';
import Main from './containers/main';
import Detail from './containers/detail';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default class AppRouter extends Component {
    render () {
        return (
            <Router history = {appHistory}>
                <Route path = "/" component = {Index}>
                    <IndexRoute component = {Login} />
                    <Route path = "main" component = {Main} />
                    <Route path = "main/detail" component = {Detail} />
                </Route>
            </Router>
        );
    }
}
