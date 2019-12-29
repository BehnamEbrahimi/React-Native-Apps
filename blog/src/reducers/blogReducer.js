import { ADD_POST, DELETE_POST, EDIT_POST, POSTS_LIST } from '../actions/types';

export default function(
  state = {
    posts: []
  },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case POSTS_LIST:
      return { ...state, posts: payload };

    case ADD_POST:
      return { ...state, posts: [...state.posts, payload] };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload)
      };

    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === payload.id ? { ...post, ...payload.post } : post
        )
      };

    default:
      return state;
  }
}
