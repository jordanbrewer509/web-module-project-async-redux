import { 
    GET_NEW_ACTIVITY,
    IS_FETCHING, 
    GET_ERROR, 
    GET_SUCCESS 
} from './../actions/index'

export const initialState = {
    activity: {
        name: '',
        type: '',
        participants: 0,
        accessibility: 0
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(GET_NEW_ACTIVITY):
            return state
        case(IS_FETCHING):
            return ({...state, payload: action.payload})
        case(GET_SUCCESS):
            return({...state, isFetching: false, payload: action.payload})
        case(GET_ERROR):
            return({...state, isFetching: false, payload: action.payload})
        default:
            return state;
    }
}
