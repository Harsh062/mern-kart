import React, { Component, Fragment } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import { Home } from './components/Home';
import { Header } from './shared/Header';
import { logout } from './state/actions/auth';
import Signup from './containers/Signup';
import { LoadingIndicator } from './shared/LoadingIndicator';
import Dashboard from './containers/Dashboard';

class App extends Component {

  logoutHandler = () => {
    this.props.logout();
  }

 render() {
   const { user, signUpPending, signUpError, signUpComplete } = this.props;
   const isLoggedIn = signUpComplete;
   return (
     <div className="App">
       <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={this.logoutHandler}
        />
       <LoadingIndicator busy={signUpPending} />
       {
         signUpComplete && <Redirect to="/dashboard" />
       }
       {
         !signUpComplete && !signUpPending && <Redirect to="/home" />
       }
       <Switch>
             <Route path='/signup' component={Signup} />
             <Route path='/dashboard' component={Dashboard} />
             <Route path='/home' component={Home} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);


