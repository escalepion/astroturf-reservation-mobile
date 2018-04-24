import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import ContactsReducer from './contacts_reducer';

export default combineReducers({
    form,
    contacts: ContactsReducer
    });
