import axios from 'axios';

export const SIGNUP = "signup";

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
