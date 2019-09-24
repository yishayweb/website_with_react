import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Link,
  Redirect
} from 'react-router-dom'
import { isLoggedIn } from '../../actions';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';


class EntryPoint extends Component {
  state = {login: true}

  render() {
    if (this.state.login) {
      return (
        <LoginForm switchForm={() => this.setState({ login: false })} />
      );
    }
    return (
      <SignupForm  switchForm={() => this.setState({ login: true })} />
    );
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps, { isLoggedIn })(EntryPoint);
