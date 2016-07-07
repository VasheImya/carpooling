import React from 'react';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware  } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';
import _ from 'lodash';

export function configureStore({ initialState, history }) {
    let reducer = {
        ...reducers
    };

    if (history) {
        reducer = {
            ...reducer,
            routing: routerReducer
        };
    }

  reducer = combineReducers(reducer);

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...(_.compact([thunkMiddleware, history && routerMiddleware(history)])))
    )
  );

  return store;
}
