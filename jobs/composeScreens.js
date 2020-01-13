import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather
} from '@expo/vector-icons';

import FacebookLoginScreen from './screens/FacebookLoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const screens = createSwitchNavigator({
  welcome: WelcomeScreen,
  facebookLogin: FacebookLoginScreen,
  mainFlow: createBottomTabNavigator(
    {
      map: {
        screen: MapScreen,
        navigationOptions: {
          title: 'Map',
          tabBarIcon: ({ tintColor }) => (
            <Feather name="map" size={20} color={tintColor} />
          )
        }
      },
      deck: {
        screen: DeckScreen,
        navigationOptions: {
          title: 'Jobs',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="gesture-swipe-horizontal"
              size={20}
              color={tintColor}
            />
          )
        }
      },
      reviewSettingsFlow: createStackNavigator(
        {
          review: {
            screen: ReviewScreen,
            navigationOptions: {
              title: 'Review Jobs'
            }
          },
          settings: {
            screen: SettingsScreen,
            navigationOptions: {
              title: 'Settings'
            }
          }
        },
        {
          navigationOptions: {
            title: 'Saved Jobs',
            tabBarIcon: ({ tintColor }) => (
              <MaterialIcons name="favorite" size={20} color={tintColor} />
            )
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

export default screens;
