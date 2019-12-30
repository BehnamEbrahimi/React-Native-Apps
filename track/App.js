import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListDetailFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default () => {
  return (
    <Provider store={store}>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
