// Start point for client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { renderRoutes } from "react-router-config";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>
  , document.querySelector('#root')
);