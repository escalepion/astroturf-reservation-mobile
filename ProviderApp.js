import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { userLoggedIn, userLoggedOut, fetchCurrentUser } from './src/actions/auth';
import { createRootNavigator } from './src/navigation/routes';

class ProviderApp extends React.Component {
  state = {
    loading: true
  }
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.userLoggedIn();
        this.props.fetchCurrentUser(firebase.auth().currentUser.uid);
        this.setState({ loading: false });
      } else {
        this.props.userLoggedOut();
        this.setState({ loading: false });
      }
    });
  }
  render() {
    const RootNavigator = createRootNavigator(this.props.userLogged);
    if (this.state.loading) {
      return (
        <View>
          <Text>Yükleniyor...</Text>
        </View>
      );
    }
    return <RootNavigator />;
  }
}

function mapStateToProps(state) {
  return { userLogged: state.auth.userLogged };
}
export default connect(mapStateToProps, 
  { 
    userLoggedIn, 
    userLoggedOut, 
    fetchCurrentUser 
  })(ProviderApp);
