import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions';

const ResolveAuthScreen = ({ facebookLogin }) => {
  useEffect(() => {
    facebookLogin();
  }, []);
  return null;
};

export default connect(null, { facebookLogin })(ResolveAuthScreen);
