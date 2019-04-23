import {
    VIDEO_FETCH_REQUEST,
    VIDEO_GET_SUCCESS,
    VIDEO_GET_FAILURE
} from './actionTypes';
import * as API from '../../constants/api';
import axios from 'axios';


export const getVideoList = (isRefresh) => {
    return (dispatch) => {
        if (isRefresh) {
            returnToDispatch(dispatch, VIDEO_FETCH_REQUEST)
        }
        axios({
            method: 'get',
            url: API.GET_ALL_VIDEO_URL,
            headers: {
                'Content-Type': 'Application/json',
            }
        }).then((response) => {
            returnToDispatch(dispatch, VIDEO_GET_SUCCESS, response.data.videos)
        }).catch((error) => {
            returnToDispatch(dispatch, VIDEO_GET_FAILURE)
        })
    }
}

returnToDispatch = (dispatch, type, payload) => {
    dispatch({
        type: type,
        payload: payload
    })
}