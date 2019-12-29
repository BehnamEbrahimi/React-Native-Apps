import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
// import {} from '../actions';

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text>SigninScreen</Text>
      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Go to Sign Up"
      />
      <Button
        onPress={() => navigation.navigate('mainFlow')}
        title="Go to Main Flow"
      />
    </>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, {})(SigninScreen);
