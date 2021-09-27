import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Map from './Map';
import HomePage from './HomePage'
import CreateAccount from './CreateAccount';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import CreateNewBus from './CreateNewBus';
import DeleteBus from './DeleteBus';
import UserDashboard from './UserDashboard';
/*
require('../assets/images/map.png')
headerBackground: (
  <Image
  style={StyleSheet.absoluteFill}
  source={{
    uri: '',
  }}
/>
),*/
const screens = {
  Map: {
    screen: Map,
    navigationOptions: {
      title: 'Map',
    },
  },
  UserDashboard: {
    screen: UserDashboard,
    navigationOptions: {
      title: 'UserDashboard',
    },
  },
  DeleteBus: {
    screen: DeleteBus,
    navigationOptions: {
      title: 'DeleteBus',
    },
  },
  CreateNewBus: {
    screen: CreateNewBus,
    navigationOptions: {
      title: 'CreateNewBus',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'HomePage',
    },
  },
  UserLogin: {
    screen: UserLogin,
    navigationOptions: {
      title: 'UserLogin',
    },
  },
  AdminLogin: {
    screen: AdminLogin,
    navigationOptions: {
      title: 'AdminLogin',
    },
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      title: 'CreateAccount',
    },
  },
};
const AppNavigator = createStackNavigator(screens, {
  initialRouteName: 'HomePage',
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    //headerTintColor: '#333333',
    // headerTitleStyle: {
    //   color: 'transparent',
    // },
    // headerBackground: (
    //   <Image
    //     style={{backgroundColor: '#73c7ab', height: 95}}
    //     source={require('../assets/map_patternd.png')}
    //   />
    // ),
  },
});

export default createAppContainer(AppNavigator);
