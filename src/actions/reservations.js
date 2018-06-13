import moment from 'moment';
import firebase from 'firebase';

import {
    FETCH_RESERVATIONS
} from './types';

export const fetchReservations = (areaId, date) => {
    return (dispatch) => {
        const dateRef = moment(date).format('DDMMYYYY');
        firebase.database().ref(`reservations/${areaId}/${dateRef}`)
            .on('value', snapshot => {
                dispatch({ type: FETCH_RESERVATIONS, payload: snapshot.val() });
            });
    };
};
