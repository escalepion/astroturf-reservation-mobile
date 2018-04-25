import moment from 'moment';
import firebase from 'firebase';

import {
    FETCH_RESERVATIONS
} from './types';

export const fetchReservations = (date) => {
    return (dispatch) => {
        const dateRef = moment(date).format('DDMMYYYY');
        firebase.database().ref(`reservations/${dateRef}`)
            .on('value', snapshot => {
                dispatch({ type: FETCH_RESERVATIONS, payload: snapshot.val() });
            });
    };
};
