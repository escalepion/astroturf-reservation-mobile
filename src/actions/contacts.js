import firebase from 'firebase';
import {
    GET_FULL_CONTACT_LIST
} from './types';

export const getFullContacts = () => {
    return (dispatch) => {
        firebase.database().ref('contactList')
            .on('value', snapshot => {
                dispatch({ type: GET_FULL_CONTACT_LIST, payload: snapshot.val() });
            });
    };
}

