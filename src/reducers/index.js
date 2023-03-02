import { 
    GET_NEW_ACTIVITY,
    IS_FETCHING,
    IS_FETCHING_IMAGE, 
    GET_ERROR, 
    GET_SUCCESS,
    GET_IMAGE,
    GET_IMAGE_SUCCESS,
    GET_IMAGE_ERROR
} from './../actions/index'

export const initialState = {
    activity: {
        name: '',
        type: '',
        participants: 0,
        accessibility: 0
    },
    image: 'https://picsum.photos/942/408',
    isFetchingImage: false,
    imageError: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(GET_NEW_ACTIVITY):
            return state
        case(IS_FETCHING):
            return ({...state, isFetching: true, payload: action.payload})
        case(GET_SUCCESS):
            return({...state, isFetching: false, activity: action.payload})
        case(GET_ERROR):
            return({...state, isFetching: false, payload: action.payload})

        case(GET_IMAGE):
            return state
        case(IS_FETCHING_IMAGE):
            return ({...state, isFetchingImage: true, payload: action.payload})
        case(GET_IMAGE_SUCCESS):
            return ({...state, isFetchingImage: false, image: action.payload})
        case(GET_IMAGE_ERROR):
            return ({...state, isFetchingImage: false, payload: action.payload})

        default:
            return state;
    }
}
