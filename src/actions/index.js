import axios from "axios";
export const GET_NEW_ACTIVITY = "GET_NEW_ACTIVITY";
export const IS_FETCHING = "IS_FETCHING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const getActivity = () => dispatch => {
    dispatch(isFetching(false))
    axios.get('')
        .then((res) => {
            const activity = res.
            dispatch(getSuccess)
        }, (error) => {
            const message = error.message
            dispatch(getError(message))
        })
        return({type: GET_NEW_ACTIVITY, payload: {data: 'hello'}});
}

const isFetching = (isFetching) => {
    return ({type: IS_FETCHING, payload: isFetching})
}

const getSuccess = (activity) => {
    return ({type: GET_SUCCESS, payload: activity})
}

const getError = (message) => {
    return ({type: GET_ERROR, payload: message})
}