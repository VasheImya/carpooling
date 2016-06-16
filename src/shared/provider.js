import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, RouterContext, browserHistory, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import { configureStore } from './store';
import routes from './routes';

export const store = configureStore(browserHistory);
const createScrollHistory = useScroll(createBrowserHistory);
const appHistory = useRouterHistory(createScrollHistory)();
export const history = syncHistoryWithStore(appHistory, store);

export const createProvider = renderProps => (
  <Provider store={store}>
    <RouterContext {...renderProps} />
    <Router history={history} routes={routes} />
  </Provider>
);
