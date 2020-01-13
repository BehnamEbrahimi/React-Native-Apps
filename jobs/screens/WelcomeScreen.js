import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4', pageNo: 1 },
  { text: 'Use this to get a job', color: '#009688', pageNo: 2 },
  { text: 'Set your location, then swipe away', color: '#03A9F4', pageNo: 3 }
];

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const exec = async () => {
      const token = await AsyncStorage.getItem('fb_token');

      if (token) {
        navigation.navigate('mainFlow');
      }
    };

    exec();
  }, []);

  const onSlidesComplete = () => {
    navigation.navigate('facebookLogin');
  };

  return <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />;
};

export default WelcomeScreen;
