import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import './config';

import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import RestorePasswordScreen from './src/components/RestorePasswordScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  RestorePassword: RestorePasswordScreen
});

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
