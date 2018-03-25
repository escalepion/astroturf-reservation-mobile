import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase';

import { createRootNavigator } from './src/navigation/routes';
import reducers from './src/reducers';


export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBTAyusc-Qa7zmI2HWvMn17SlRh3WU8L_U',
      authDomain: 'astruturf.firebaseapp.com',
      databaseURL: 'https://astruturf.firebaseio.com',
      projectId: 'astruturf',
      storageBucket: 'astruturf.appspot.com',
      messagingSenderId: '847295546379'
    };
    firebase.initializeApp(config);
  }
  render() {
    const userLogged = true;
    const RootNavigator = createRootNavigator(userLogged);
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <RootNavigator />
      </Provider>
    );
  }
}

