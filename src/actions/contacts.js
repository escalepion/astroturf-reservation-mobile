import Expo from 'expo';

import {
    GET_FULL_CONTACT_LIST
} from './types';

export const getFullContacts = () => {
    return async (dispatch) => {
        // Ask for permission to query contacts.
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            // Permission was denied...
            return;
        }
        const contactList = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            // pageSize: 10,
            // pageOffset: 0,
        });
        dispatch({ type: GET_FULL_CONTACT_LIST, payload: contactList });
    }
}

