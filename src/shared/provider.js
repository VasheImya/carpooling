import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, RouterContext } from 'react-router';

import { configureStore } from './store';
import routes from './routes';

export const store = configureStore();

export const createProvider = renderProps => (
  <Provider store={store}>
    <RouterContext {...renderProps} />
  </Provider>
);
