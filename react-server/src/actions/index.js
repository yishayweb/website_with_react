import axios from 'axios';

export const SIGNUP = "signup";
export const LOGIN = "login";
export const UPDATE_USER_CREDIT = "update_user_credit";

export const signup = (user_obj, history) => async dispatch => {
  try {
    const res = await axios.post('/users', user_obj, { headers: { 'Content-Type': 'application/json' } });
    console.log(res);
    if (res.status === 201) {
      dispatch({ type: SIGNUP, payload: res.data.token });
      history.push('/home');
      localStorage.setItem('user_token', res.data.token);
    }
  }
  catch(e) {
    console.log(e);
  }
}

export const login = (user_obj, history) => async dispatch => {
  try {
    const res = await axios.post('/users/login', user_obj, { headers: { 'Content-Type': 'application/json' } });
    console.log(res);
    if (res.status === 200) {
      dispatch({ type: LOGIN, payload: res.data.token });
      history.push('/home');
      localStorage.setItem('user_token', res.data.token);
    }
  }
  catch(e) {
    console.log(e);
  }
}

export const isLoggedIn = (callback) => async dispatch => {
  console.log(localStorage.getItem('user_token'));
  var headers = {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('user_token')}}

  var request = axios.get('/users/me', headers);
  request.then(({data, status}) => {
    if (status === 200) {
      console.log(data);
      callback(true);
    }
  }).catch((error) => {
    console.log(error);
    callback(false);
  });
}

export const handleToken = token => async dispatch => {
  var headers = {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('user_token')}}
  const res = await axios.post('/users/stripe', token, headers);

  dispatch({ type: UPDATE_USER_CREDIT, payload: res.data });
};
