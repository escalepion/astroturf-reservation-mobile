import {
    GET_FULL_CONTACT_LIST
} from '../actions/types';

const INITIAL_STATE = {
    contactList: undefined
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_FULL_CONTACT_LIST:
            return {...state, contactList: action.payload};
        default:
            return state;
    }
}
