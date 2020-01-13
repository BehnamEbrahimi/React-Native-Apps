import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/es/constants';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], { type, payload }) {
  switch (type) {
    case REHYDRATE:
      return payload.likedJobs || [];
    case CLEAR_LIKED_JOBS:
      return [];
    case LIKE_JOB:
      return _.uniqBy([payload, ...state], 'jobkey');
    default:
      return state;
  }
}
