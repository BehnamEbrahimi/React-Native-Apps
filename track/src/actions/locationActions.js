import {
  CHANGE_NAME,
  START_RECORDING,
  STOP_RECORDING,
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  RESET
} from './types';

export const changeName = name => dispatch => {
  dispatch({ type: CHANGE_NAME, payload: name });
};

export const startRecording = () => dispatch => {
  dispatch({ type: START_RECORDING });
};

export const stopRecording = () => dispatch => {
  dispatch({ type: STOP_RECORDING });
};

export const addLocation = (location, recording) => (dispatch, getState) => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
  if (getState().location.recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};

export const reset = () => dispatch => {
  dispatch({ type: RESET });
};
