import { LOGIN } from './types';
import backend from '../apis/backend';

// Login
export const login = formData => async dispatch => {
  const { data: token } = await backend.post('/signin', formData);
  // set token in local storage

  dispatch({
    type: LOGIN,
    payload: { user, email: formData.email }
  });
};
