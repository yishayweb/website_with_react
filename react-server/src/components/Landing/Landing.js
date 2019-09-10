import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Link,
  Redirect
} from 'react-router-dom'


class Landing extends Component {

  onButtonClick() {
    var headers = {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('user_token')}}

    var request = axios.get('/users/me', headers);
    request.then(({data, status}) => {
      if (status === 200) {
        console.log(data);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="landing-main-div">
        Landing
        <button onClick={() => this.onButtonClick()}>Click the</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps, {})(Landing);
