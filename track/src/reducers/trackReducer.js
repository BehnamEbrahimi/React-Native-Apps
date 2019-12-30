import { FETCH_TRACKS } from '../actions/types';

export default function(
  state = {
    tracks: []
  },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TRACKS:
      return { ...state, tracks: payload };

    default:
      return state;
  }
}
