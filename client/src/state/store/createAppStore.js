// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware, compose } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// IMPORT REDUCERS

import { AppReducer } from '../reducers/AppReducer';


// CONFIGURE STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
    const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunk, promiseMiddleware())));
    return store;
};