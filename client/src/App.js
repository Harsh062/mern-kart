import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Signup from './containers/Signup';
import { LoadingIndicator } from './shared/LoadingIndicator';

class App extends Component {
  render() {
    const { user, signUpPending, signUpComplete, signUpError } = this.props;

    return (
      <div className="App">
        <LoadingIndicator busy={signUpPending} />
        <NavLink to="/signup">Sign up</NavLink>
        <a href="auth/google">Sign in with google</a>
        <a href="http://localhost:5000/auth/facebook">Sign in with Facebook</a>
        <Switch>
              <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user, signUpPending, signUpComplete, signUpError } = state.authReducer;
  return {
    user, 
    signUpPending, 
    signUpComplete, 
    signUpError
  }
}


export default connect(mapStateToProps)(App);