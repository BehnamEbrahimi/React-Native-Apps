import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ReviewScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ReviewScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <Text>Go to settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewScreen;
