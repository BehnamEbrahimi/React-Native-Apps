import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
// import {  } from '../actions';

const AccountScreen = ({}) => {
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, {})(AccountScreen);
