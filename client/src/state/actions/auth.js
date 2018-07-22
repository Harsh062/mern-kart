import * as actions from './actionTypes';
import { signUp } from '../../services/authService';

const onSignUp = signUpObj => ({
    type: actions.SIGNUP,
    payload: signUp(signUpObj)
});

export {
    onSignUp
};

