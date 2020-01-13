import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

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

export default screens;
