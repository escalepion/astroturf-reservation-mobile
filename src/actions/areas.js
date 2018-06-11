import firebase from 'firebase';

import {
    GET_AREA_LIST
    } from './types';

export const fetchAreas = () => {
    return (dispatch) => {
        firebase.database().ref('areas')
            .on('value', snapshot => {
                let areaList = [];
                Object.keys(snapshot.val()).forEach((i) => { areaList.push({ ...snapshot.val()[i], id: i }); });
                dispatch({ type: GET_AREA_LIST, payload: areaList });
            });
    };
};
