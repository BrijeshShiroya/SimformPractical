import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes';
import { AsyncStorage } from 'react-native'


export const login = () => {
    return (dispatch) => {
        // returnToDispatch(dispatch, LOGIN_REQUEST)

        AsyncStorage.getItem('loginData').then((result) => {

            if (JSON.parse(result)) {
                // returnToDispatch(dispatch, LOGIN_SUCCESS, result)
                dispatch(NavigationActions.navigate('Home'));
            } else {
                // returnToDispatch(dispatch, LOGIN_FAILURE)
            }
        }).catch(() => {
            // returnToDispatch(dispatch, LOGIN_FAILURE)
        })
    }
}

returnToDispatch = (dispatch, type, payload) => {
    dispatch({
        type: type,
        payload: payload
    })
}