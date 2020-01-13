import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../actions/types';

export default function(state = { token: '' }, { type, payload }) {
  switch (type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: '' };
    default:
      return state;
  }
}
