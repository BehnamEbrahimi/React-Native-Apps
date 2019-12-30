import {
  ADD_ERROR,
  SIGNIN,
  CLEAR_ERROR_MESSAGE,
  SIGNOUT
} from '../actions/types';

export default function(
  state = {
    token: null,
    errorMessage: ''
  },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ERROR:
      return { ...state, errorMessage: payload };

    case SIGNIN:
      return { errorMessage: '', token: payload };

    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: '' };

    case SIGNOUT:
      return { token: null, errorMessage: '' };

    default:
      return state;
  }
}
