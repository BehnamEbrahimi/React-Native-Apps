import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL, LOGOUT } from './types';
import { navigate } from '../navigationRef';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    navigate('mainFlow');
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  await Facebook.initializeAsync('467574077455384');
  let { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    dispatch({ type: FACEBOOK_LOGIN_FAIL });
    return navigate('welcome');
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  navigate('mainFlow');
};

export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('fb_token');
  dispatch({ type: LOGOUT });
  navigate('facebookLogin');
};
