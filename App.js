import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/reducers';

import Index from './src/screens/Index';

export default class App extends React.Component {
  render() {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Index />
      </Provider>
    );
  }
}

