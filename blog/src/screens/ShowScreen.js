import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

const ShowScreen = ({ post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Create', {
            id: navigation.getParam('id')
          })
        }>
        <FontAwesome name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.blog.posts.find(
      post => post.id === ownProps.navigation.getParam('id')
    )
  };
};

export default connect(mapStateToProps)(ShowScreen);
