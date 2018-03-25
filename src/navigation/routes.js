import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Index from '../screens/Index';
import AddArea from '../screens/AddArea';

export const LoggedIn = StackNavigator({
    Index: { 
        screen: Index,
        navigationOptions: {
            title: 'Sahalar'
        }
    },
    AddArea: { 
        screen: AddArea,
        navigationOptions: {
            title: 'Saha Ekle'
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
