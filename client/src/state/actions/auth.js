import * as actions from './actionTypes';
import { signUp, logoutService } from '../../services/authService';

const onSignUp = signUpObj => ({
    type: actions.SIGNUP,
    payload: signUp(signUpObj)
});

const logout = () => ({
    type: actions.LOGOUT,
    payload: logoutService()
});

export {
    onSignUp,
    logout
};

