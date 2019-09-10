import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { hi: ""}

  onButtonClick() {
    /*var request = axios.get('/hello');
    request.then(({data, status}) => {
      if (status === 200) {
        console.log(data);
      }
    })*/
    /*var request = axios.post('/users', {name: 'yishayf', email: 'yishayfuu@gmail.com', password: 'gbgbrrrrrrrrrr', age: 32}, {headers: {'Content-Type': 'application/json'}});
    request.then(({data, status}) => {
      if (status === 200) {
        console.log(data);
      }
    }).catch((error) => {
      console.log(error);
    });*/

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with second appxmcnjxn
          </a>
          <button onClick={() => this.onButtonClick()}>Click the {this.state.hi}</button>
        </header>
      </div>
    );
  }
}

export default App;
