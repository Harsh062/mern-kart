import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import { onSignUp } from '../state/actions/auth';

class Signup extends Component {
    state = {
      email: '',
      password: ''
    } 
    onFieldChange = (ev) => {
      this.setState({
        [ev.target.name]: ev.target.value
      })
    }
    onSignUp = () => {
      const { email, password } = this.state;
      const signUpObj = {
        email,
        password
      }
      this.props.onSignUp(signUpObj);
    }
    render() {
        return (
            <Grid>
              <Row>
              <Col xs={6}>
              
            <Row>
              <Col xs={8}>
                Sign up
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <input type="email" name="email" placeholder="Email" onChange={(event) => this.onFieldChange(event)} className="fullWidth"/>
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <input type="password" name="password" placeholder="Password" className="fullWidth" onChange={(event) => this.onFieldChange(event)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <button onClick={this.onSignUp}>Sign up</button>
              </Col>
            </Row>
            </Col>
            <Col xs={6}>
              <button><a href="/auth/google">Sign up with Google</a></button>
            </Col>
          </Row>
          </Grid>
        )
    }
}

const mapDispacthToProps = dispatch => {
  return bindActionCreators({ onSignUp }, dispatch);
}


export default connect(null, mapDispacthToProps)(Signup);