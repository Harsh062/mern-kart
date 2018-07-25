import React, { Component, Fragment } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Signup from './containers/Signup';
import { LoadingIndicator } from './shared/LoadingIndicator';
import Dashboard from './containers/Dashboard';

class App extends Component {

 render() {
   const { user, signUpPending, signUpError, signUpComplete } = this.props;
   if (signUpComplete) {
     return <Redirect to="/dashboard" />
   }

   return (
     <div className="App">
       <LoadingIndicator busy={signUpPending} />
       {
         !signUpPending && !signUpComplete && 
         <Fragment>
         <NavLink to="/signup">Sign up</NavLink>
         <a href="auth/google">Sign in with google</a>
         </Fragment>
       }
       
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


