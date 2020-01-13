import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('resolveAuth')}>
        <Text>Go to auth</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
