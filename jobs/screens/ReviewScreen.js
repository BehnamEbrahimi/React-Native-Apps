import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ReviewScreen = () => {
  return (
    <View>
      <Text>ReviewScreen</Text>
    </View>
  );
};

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <FontAwesome name="gear" size={30} />
      </TouchableOpacity>
    )
  };
};

export default ReviewScreen;
