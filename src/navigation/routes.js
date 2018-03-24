import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Index from '../screens/Index';

export const LoggedIn = StackNavigator({
    Index: { 
        screen: Index,
        navigationOptions: {
            title: 'Sahalar'
        }
    }
    });

    export const LoggedOut = StackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Giriş'
            }
        }
    });

    export const createRootNavigator = (signedIn = false) => {
        return StackNavigator(
          {
            SignedIn: {
              screen: LoggedIn,
              navigationOptions: {
                gesturesEnabled: false
              }
            },
            SignedOut: {
              screen: LoggedOut,
              navigationOptions: {
                gesturesEnabled: false
              }
            }
          },
          {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
          }
        );
      };
