import {
    VIDEO_FETCH_REQUEST,
    VIDEO_GET_SUCCESS,
    VIDEO_GET_FAILURE
} from './actionTypes';

const intialState = {
    loading: false,
    videoList: [],
    error: null
}

export default (state = intialState, action) => {
    console.log('coming into reducer')
    switch (action.type) {
        case VIDEO_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case VIDEO_GET_SUCCESS:
            return {
                ...state,
                videoList: action.payload,
                loading: false
            };
        case VIDEO_GET_FAILURE:
            return {
                ...state,
                videoList: {},
                loading: false
            };
        default:
            return state
    }
}


