// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';

// Account Info Reducer

const initialState = {
    user: null,
    signUpPending: false,
    signUpComplete: false,
    signUpError: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGNUP_PENDING:
            console.log('SIGNUP_PENDING');
            return {
                ...state,
                user: null,
                signUpPending: true,
                signUpComplete: false,
                signUpError: null
            };
        case actions.SIGNUP_FULFILLED:
            console.log('SIGNUP_FULFILLED', action);
            return {
                ...state,
                user: action.payload,
                signUpPending: false,
                signUpComplete: true,
                signUpError: null
            };
        case actions.SIGNUP_REJECTED:
            console.log('SIGNUP_REJECTED');
            return {
                ...state,
                user: null,
                signUpPending: false,
                signUpComplete: false,
                signUpError: action.payload
            };
        case actions.LOGOUT_FULFILLED:
            console.log('LOGOUT_FULFILLED');
            return {
                ...state,
                user: null,
                signUpComplete: false
            };
        default:
            return state;
    }
};

