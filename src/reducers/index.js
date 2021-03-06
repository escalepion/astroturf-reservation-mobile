import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import ContactsReducer from './contacts_reducer';
import ReservationsReducer from './reservations_reducer';
import AreaListReducer from './areas_reducer';
import AuthReducer from './auth_reducer';

export default combineReducers({
    form,
    contacts: ContactsReducer,
    reservations: ReservationsReducer,
    auth: AuthReducer,
    areas: AreaListReducer
    });
