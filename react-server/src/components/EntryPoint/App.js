import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Landing from '../Landing/Landing';
import EntryPoint from './EntryPoint';

class App extends Component {

  onButtonClick() {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDc3YTI1ZjFkODFiYjJmMjAyODFiYWYiLCJpYXQiOjE1NjgxMjE0Mzl9._zZzaepxO2ddT8MELCJ4Mm6V9wvfniosg042xyFEPUE"

    var headers = {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}}

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
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={EntryPoint} />
            <Route exact path="/home" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
