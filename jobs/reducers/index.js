import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import likesReducer from './likesReducer';

export default combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
  likedJobs: likesReducer
});
