import React from 'react';
import { View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { clearLikedJobs } from '../actions';

const SettingsScreen = ({ clearLikedJobs }) => {
  return (
    <Button
      title="Reset Liked Jobs"
      large
      icon={{ name: 'delete-forever' }}
      backgroundColor="#F44336"
      onPress={clearLikedJobs}
    />
  );
};

SettingsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.removeItem('fb_token');
          navigation.navigate('facebookLogin');
        }}>
        <MaterialCommunityIcons name="logout" size={30} />
      </TouchableOpacity>
    )
  };
};

export default connect(null, { clearLikedJobs })(SettingsScreen);
