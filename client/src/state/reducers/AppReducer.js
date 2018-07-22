import { combineReducers } from 'redux';

import { AuthReducer } from './AuthReducer';

export const AppReducer = combineReducers({
    authReducer: AuthReducer
});