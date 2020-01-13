import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { tryLocalSignin } from '../actions/authActions';

const FacebookLoginScreen = ({ tryLocalSignin }) => {
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default connect(null, { tryLocalSignin })(FacebookLoginScreen);
