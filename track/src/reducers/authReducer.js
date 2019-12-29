import { LOGIN } from '../actions/types';

export default function(
  state = {
    user: null,
    isLoggedIn: null
  },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, user: payload.email };

    default:
      return state;
  }
}
