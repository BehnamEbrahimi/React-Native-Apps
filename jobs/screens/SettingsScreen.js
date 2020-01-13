import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { logout } from '../actions';

const SettingsScreen = ({ logout }) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
};

export default connect(null, { logout })(SettingsScreen);
