import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actionTypes';

const intialState = {
  loading: false,
  userData: {},
  error: null
}

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        userData: {},
        loading: false
      };
    default:
      return state
  }
}


