import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SESSION_RESTORE_REQUEST,
    SESSION_RESTORE_SUCCESS,
    SESSION_RESTORE_FAILURE,
} from './actionTypes';
import * as keys from '../../constants/keys';
import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation';



export const restoreSession = () => {
    return (dispatch) => {
        returnToDispatch(dispatch, SESSION_RESTORE_REQUEST)
        AsyncStorage.getItem(keys.ASYNC_LOGIN_DATA).then((result) => {
            let _result = JSON.parse(result)
            if (_result) {
                returnToDispatch(dispatch, SESSION_RESTORE_SUCCESS, _result)
                dispatch(NavigationActions.navigate({
                    routeName: 'Home'
                }));
            } else {
                returnToDispatch(dispatch, SESSION_RESTORE_FAILURE)
            }
        }).catch(() => {
            returnToDispatch(dispatch, SESSION_RESTORE_FAILURE)
        })
    }
}
export const login = (loginData) => {
    return (dispatch) => {
        returnToDispatch(dispatch, LOGIN_REQUEST)
        if (loginData.email === 'Admin@gmail.com' && loginData.password === '123456') {
            returnToDispatch(dispatch, LOGIN_SUCCESS)
            AsyncStorage.setItem(keys.ASYNC_LOGIN_DATA, JSON.stringify(loginData)).then((success) => {
                dispatch(NavigationActions.navigate({
                    routeName: 'Home'
                }));
            })
        } else {
            alert('Please enter valid username or password')
        }
    }
}

returnToDispatch = (dispatch, type, payload) => {
    dispatch({
        type: type,
        payload: payload
    })
}