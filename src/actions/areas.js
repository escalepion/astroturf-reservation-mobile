import firebase from 'firebase';

import {
    GET_AREA_LIST,
    SET_AREA_LOADING_SPINNER
    } from './types';

export const fetchAreas = () => {
    return (dispatch) => {
        dispatch(setAreaLoadingSpinner(true));
        firebase.database().ref('areas')
            .on('value', snapshot => {
                let areaList = [];
                if (snapshot.val()) {
                    Object.keys(snapshot.val()).forEach((i) => { areaList.push({ ...snapshot.val()[i], id: i }); });
                }
                dispatch({ type: GET_AREA_LIST, payload: areaList });
                dispatch(setAreaLoadingSpinner(false));
            });
    };
};

export const setAreaLoadingSpinner = (loading = false) => {
    return { type: SET_AREA_LOADING_SPINNER, payload: loading };
};
