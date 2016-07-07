import React     from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components';
import Passanger from './pages/passanger';

export default (
    <Route name="app" component={App} path="/">
        <IndexRoute component={Passanger} />
    </Route>
);
