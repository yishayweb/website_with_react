import { combineReducers } from 'redux';
import reducerUser from './reducerUser';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  user: reducerUser,
  form: reduxForm
});
