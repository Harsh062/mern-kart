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
            <Row className="show-grid">
              <Col xs={4} xsOffset={4}>
                Sign up
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={4} xsOffset={4}>
                <input type="text" name="email" placeholder="Email" onChange={(event) => this.onFieldChange(event)}/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={4} xsOffset={4}>
                <input type="password" name="password" placeholder="Password" onChange={(event) => this.onFieldChange(event)}/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={4} xsOffset={4}>
                <button onClick={this.onSignUp}>Sign up</button>
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