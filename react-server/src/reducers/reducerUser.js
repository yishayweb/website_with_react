import { SIGNUP, LOGIN, UPDATE_USER_CREDIT } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SIGNUP:
      return {...state, token: action.payload}
    case LOGIN:
      return {...state, token: action.payload}
    case UPDATE_USER_CREDIT:
      return {...state, credit: action.payload.credits}
    default:
      return state;
  }
}
