import { SIGNUP, LOGIN } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SIGNUP:
      return {...state, token: action.payload}
    case LOGIN:
      return {...state, token: action.payload}
    default:
      return state;
  }
}
