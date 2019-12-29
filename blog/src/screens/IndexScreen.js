import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../actions/blogActions';

const IndexScreen = ({ posts, deletePost, getPosts, navigation }) => {
  useEffect(() => {
    getPosts();

    // with dispatch after adding a post, the following is not needed
    // const listener = navigation.addListener('didFocus', () => {
    //   getPosts();
    // });

    // return () => {
    //   // this code run whenever this component is destroyed
    //   listener.remove();
    // };
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={post => post.id}
        renderItem={({ item: post }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: post.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{post.title}</Text>
                <TouchableOpacity onPress={() => deletePost(post.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Create', { id: 'new' })}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

const mapStateToProps = state => {
  return {
    posts: state.blog.posts
  };
};

export default connect(mapStateToProps, { deletePost, getPosts })(IndexScreen);
