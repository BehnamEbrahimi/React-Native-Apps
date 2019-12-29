import { ADD_POST, DELETE_POST, EDIT_POST, POSTS_LIST } from './types';
import backend from '../apis/backend';

// Get Posts
export const getPosts = () => async dispatch => {
  const { data: posts } = await backend.get('/posts');

  dispatch({
    type: POSTS_LIST,
    payload: posts
  });
};

// Add a Blog Post
export const addPost = (formData, callback) => async dispatch => {
  const { data: post } = await backend.post('/posts', formData);

  dispatch({
    type: ADD_POST,
    payload: post
  });

  if (callback) {
    callback(); // e.g. redirecting the user to posts list
  }
};

// Edit a Blog Post
export const editPost = (id, formData, callback) => async dispatch => {
  const { data: post } = await backend.put(`/posts/${id}`, formData);

  dispatch({
    type: EDIT_POST,
    payload: { id, post }
  });

  if (callback) {
    callback(); // e.g. redirecting the user to the previous page
  }
};

// Delete a Blog Post
export const deletePost = id => async dispatch => {
  await backend.delete(`/posts/${id}`);

  dispatch({
    type: DELETE_POST,
    payload: id
  });
};
