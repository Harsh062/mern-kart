import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Signup from './containers/Signup';
import { LoadingIndicator } from './shared/LoadingIndicator';
import Dashboard from './containers/Dashboard';

class App extends Component {

 componentDidMount() {
   if (this.props.signUpComplete) {
     this.navigateToDashboard();
   }
 }

 navigateToDashboard = () => {
   this.props.history.push('/dashboard');
 }

 render() {
   const { user, signUpPending, signUpError } = this.props;

   return (
     <div className="App">
       <LoadingIndicator busy={signUpPending} />
       <NavLink to="/signup">Sign up</NavLink>
       <a href="auth/google">Sign in with google</a>
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


