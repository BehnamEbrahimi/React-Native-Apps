import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { addPost, editPost } from '../actions/blogActions';

const CreateScreen = ({ addPost, editPost, navigation, postToEdit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setBody(postToEdit.body);
    }
  }, []);

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Body:</Text>
      <TextInput style={styles.input} value={body} onChangeText={setBody} />
      <Button
        title={!postToEdit ? 'Add Post' : 'Edit Post'}
        onPress={() => {
          !postToEdit
            ? addPost(
                {
                  title,
                  body
                },
                () => {
                  navigation.navigate('Index');
                }
              )
            : editPost(
                postToEdit.id,
                {
                  title,
                  body
                },
                () => {
                  navigation.pop();
                }
              );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    postToEdit: state.blog.posts.find(
      post => post.id === ownProps.navigation.getParam('id')
    )
  };
};

export default connect(mapStateToProps, { addPost, editPost })(CreateScreen);
