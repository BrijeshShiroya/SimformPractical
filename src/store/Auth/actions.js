import {
 LOGIN_REQUEST,
 LOGIN_SUCCESS,
 LOGIN_FAILURE
} from './actionTypes';


export const login = () => {
 return (dispatch) => {
  returnToDispatch(dispatch, LOGIN_REQUEST)
 }
}

returnToDispatch = (dispatch, type, payload) => {
 dispatch({
  type: type,
  payload: payload
 })
}