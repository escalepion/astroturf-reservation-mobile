import {
    GET_AREA_LIST
} from '../actions/types';

const INITIAL_STATE = {
    areaList: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_AREA_LIST:
            return { ...state, areaList: action.payload };
        default:
            return state;
    }
};
