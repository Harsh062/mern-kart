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
import Settings from './containers/Settings';

class App extends Component {
  state = {
    file: null
  };
fileChangeHandler = (ev) => {
  console.log('ev.target.files[0]:', ev.target.files[0]);
    this.setState({
      selectedFile: ev.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("name", 'Harsh');
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    console.log('fd: ', fd);
  }

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
        <input type="file" onChange={this.fileChangeHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
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
             <Route path='/settings' component={Settings} />
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


