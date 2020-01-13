import { FETCH_JOBS } from '../actions/types';

export default function(state = [], { type, payload }) {
  switch (type) {
    case FETCH_JOBS:
      return payload;
    default:
      return state;
  }
}
