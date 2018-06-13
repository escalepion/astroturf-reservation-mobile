import {
    GET_AREA_LIST,
    SET_AREA_LOADING_SPINNER
} from '../actions/types';

const INITIAL_STATE = {
    areaList: [],
    areaListLoadingSpinner: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_AREA_LIST:
            return { ...state, areaList: action.payload };
        case SET_AREA_LOADING_SPINNER:
            return {...state, areaListLoadingSpinner: action.payload };
        default:
            return state;
    }
};
