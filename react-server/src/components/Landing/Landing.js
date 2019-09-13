import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Link,
  Redirect
} from 'react-router-dom'
import { isLoggedIn } from '../../actions';
import './landing.css';


class Landing extends Component {
  state = {isLoggedIn: "unknown"}

  componentDidMount() {
    setTimeout(() => this.props.isLoggedIn((isLoggedIn) => this.loginValidatorCallback(isLoggedIn)), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoggedIn && !this.state.isLoggedIn) {
      this.props.history.push("/");
    }
  }

  loginValidatorCallback(isLoggedIn) {
    if (isLoggedIn) {
      this.setState ({ isLoggedIn: true });
    }
    else {
      this.props.history.push("/");
    }
  }

  logOut() {
    var headers = {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('user_token')}}

    var request = axios.get('/users/logout', headers);
    request.then(({data, status}) => {
      if (status === 200) {
        console.log(data);
        this.setState({ isLoggedIn: false });
        //localStorage.removeItem('user_token');
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    console.log(this.props.user);
    if (this.state.isLoggedIn === "unknown") {
      return (
        <div className="landing-main-div">
          Loading...
        </div>
      );
    }
    return (
      <div className="landing-main-div">
        Landing
        <button onClick={() => this.logOut()}>Log Out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps, { isLoggedIn })(Landing);
