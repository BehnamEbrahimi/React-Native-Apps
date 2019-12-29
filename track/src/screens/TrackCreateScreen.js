import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
// import {  } from '../actions';

const TrackCreateScreen = ({}) => {
  return (
    <View>
      <Text>TrackCreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, {})(TrackCreateScreen);
