import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Index from '../screens/Index';
import AddArea from '../screens/AddArea';
import AreaDetail from '../screens/AreaDetail';

import SignUp from '../screens/auth/Signup';
import LogIn from '../screens/auth/LogIn';
import SignOut from '../screens/auth/SignOut';

export const LoggedIn = StackNavigator({
    Index: { 
        screen: Index,
        navigationOptions: {
            title: 'Sahalar',
            headerLeft: null
        }
    },
    AddArea: { 
        screen: AddArea,
        navigationOptions: {
            title: 'Saha Ekle'
        }
    },
    AreaDetail: { 
        screen: AreaDetail,
        navigationOptions: {
            title: 'Saha reservasyonlar'
        }
    }
    });

    export const DrawNav = DrawerNavigator(
    {
        LoggedMain: {
        path: '/',
        screen: LoggedIn,
        navigationOptions: {
            drawerLabel: 'Main'
        }
        },
        SignOut: {
        path: '/sent',
        screen: SignOut,
        navigationOptions: {
            drawerLabel: 'Sign Out'
        }
        },
    },
    {
        initialRouteName: 'LoggedMain',
        contentOptions: {
        activeTintColor: '#e91e63',
        },
    }
    );

    export const LoggedOut = StackNavigator({
        LogIn: {
            screen: LogIn,
            navigationOptions: {
                title: 'Log In'
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'Sign Up'
            }
        }
    });

    export const createRootNavigator = (signedIn = false) => {
        return StackNavigator(
          {
            SignedIn: {
                screen: DrawNav,
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
