import {GET_GREETING, POST_GREETING} from './actions';

const greetingReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_GREETING:
            return {
                ...state,
                greeting: action.payload,
            };
        case POST_GREETING:
            return {
                ...state,
                greeting: action.payload,
            };
        default:
            return state;
    }
}

export default greetingReducer;