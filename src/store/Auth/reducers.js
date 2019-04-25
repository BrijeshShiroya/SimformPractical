import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SESSION_RESTORE_REQUEST,
  SESSION_RESTORE_SUCCESS,
  SESSION_RESTORE_FAILURE,
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
    case SESSION_RESTORE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SESSION_RESTORE_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false
      };
    case SESSION_RESTORE_FAILURE:
      return {
        ...state,
        userData: {},
        loading: false
      };
    default:
      return state
  }
}


