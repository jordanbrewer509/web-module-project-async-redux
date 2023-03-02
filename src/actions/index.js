import axios from "axios";

export const GET_NEW_ACTIVITY = "GET_NEW_ACTIVITY";
export const IS_FETCHING = "IS_FETCHING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const GET_IMAGE = "GET_IMAGE";
export const IS_FETCHING_IMAGE = "IS_FETCHING_IMAGE";
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS";
export const GET_IMAGE_ERROR = "GET_IMAGE_ERROR";

export const getActivity = () => dispatch => {
    dispatch(isFetching(true))
    axios.get('https://www.boredapi.com/api/activity')
        .then((res) => {
            console.log(res.data)
            const activity = {
                name: res.data.activity,
                type: res.data.type,
                participants: res.data.participants,
                accessibility: res.data.accessibility
            }
            dispatch(getSuccess(activity))
            dispatch(getImage())
        }, (error) => {
            const message = error.message
            dispatch(getError(message))
        })
        return({type: GET_NEW_ACTIVITY, payload: {data: 'hello'}});
}

const isFetching = (isFetching) => {
    console.log('isFetching')
    return ({type: IS_FETCHING, payload: isFetching})
}

const getSuccess = (activity) => {
    return ({type: GET_SUCCESS, payload: activity})
}

const getError = (message) => {
    return ({type: GET_ERROR, payload: message})
}

export const getImage = () => dispatch => {
    const randomIdGen = Math.floor(Math.random() * 201)
    dispatch(isFetchingImage(true))
    dispatch(getImageSuccess(`https://picsum.photos/id/${randomIdGen}/942/408`))
}

const isFetchingImage = (isFetchingImage) => {
    console.log('isFetchingImage')
    return({type: IS_FETCHING_IMAGE, payload: isFetchingImage})
}

const getImageSuccess = (image) => {
    return ({type: GET_IMAGE_SUCCESS, payload: image})
}

const getImageError = (message) => {
    return({type: GET_IMAGE_ERROR, payload: message})
}