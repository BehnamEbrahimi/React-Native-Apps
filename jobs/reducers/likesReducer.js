import _ from 'lodash';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], { type, payload }) {
  switch (type) {
    case CLEAR_LIKED_JOBS:
      return [];
    case LIKE_JOB:
      return _.uniqBy([payload, ...state], 'jobkey');
    default:
      return state;
  }
}
