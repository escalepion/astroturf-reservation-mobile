import {
    FETCH_RESERVATIONS
} from '../actions/types';

const INITIAL_STATE = {
    reservationList: undefined
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_RESERVATIONS:
            return {...state, reservationList: action.payload };
        default:
            return state;
    }
}

