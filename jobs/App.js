import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import ResolveAuthScreen from './screens/ResolveAuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

import { setNavigator } from './navigationRef';

const switchNavigator = createSwitchNavigator({
  welcome: WelcomeScreen,
  ResolveAuth: ResolveAuthScreen,
  mainFlow: createBottomTabNavigator(
    {
      map: {
        screen: MapScreen,
        navigationOptions: {
          title: 'Location',
          tabBarIcon: <FontAwesome name="location-arrow" size={20} />
        }
      },
      deck: {
        screen: DeckScreen,
        navigationOptions: {
          title: 'Rate',
          tabBarIcon: (
            <MaterialCommunityIcons name="gesture-swipe-horizontal" size={20} />
          )
        }
      },
      reviewSettingsFlow: createStackNavigator(
        {
          review: {
            screen: ReviewScreen,
            navigationOptions: {
              title: ''
            }
          },
          settings: SettingsScreen
        },
        {
          navigationOptions: {
            title: 'Saved Jobs',
            tabBarIcon: <FontAwesome name="th-list" size={20} />
          }
        }
      )
    },
    {
      tabBarOptions: {
        labelStyle: { fontSize: 14 }
      }
    }
  )
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
