import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ProviderApp from './ProviderApp';

import reducers from './src/reducers';

console.ignoredYellowBox = ['Setting a timer'];

class App extends React.Component {
  render() {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <ProviderApp />
      </Provider>
    );
  }
}

export default App;
