import { combineReducers } from 'redux';
import authReducer from './authReducer';
import locationReducer from './locationReducer';
import trackReducer from './trackReducer';

export default combineReducers({
  auth: authReducer,
  location: locationReducer,
  track: trackReducer
});
