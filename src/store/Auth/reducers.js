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
  console.log('coming into reducer')
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log('coming into reducer of ', action.type)
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state
  }
}


