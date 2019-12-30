import { AsyncStorage } from 'react-native';
import { ADD_ERROR, SIGNIN, CLEAR_ERROR_MESSAGE, SIGNOUT } from './types';
import backend from '../apis/backend';
import { navigate } from '../navigationRef';

export const signup = ({ email, password }) => async dispatch => {
  try {
    const {
      data: { token }
    } = await backend.post('/signup', { email, password });
    await AsyncStorage.setItem('token', token);
    dispatch({ type: SIGNIN, payload: token });
    navigate('TrackList');
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_ERROR,
      payload: 'Something went wrong with sign up. Please try again later.'
    });
  }
};

export const signin = ({ email, password }) => async dispatch => {
  try {
    const {
      data: { token }
    } = await backend.post('/signin', { email, password });
    await AsyncStorage.setItem('token', token);
    dispatch({ type: SIGNIN, payload: token });
    navigate('TrackList');
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_ERROR,
      payload: 'Something went wrong with sign in. Please try again later.'
    });
  }
};

export const tryLocalSignin = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: SIGNIN, payload: token });
    navigate('TrackList');
  } else {
    navigate('Signin');
  }
};

export const signout = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGNOUT });
  navigate('loginFlow');
};

export const clearErrorMessage = () => dispatch => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};
