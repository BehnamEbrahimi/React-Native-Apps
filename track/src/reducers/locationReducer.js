import {
  CHANGE_NAME,
  START_RECORDING,
  STOP_RECORDING,
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  RESET,
  TRACK_SAVED
} from '../actions/types';

export default function(
  state = {
    name: '',
    recording: false,
    locations: [],
    currentLocation: null
  },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: payload };

    case START_RECORDING:
      return { ...state, recording: true };

    case STOP_RECORDING:
      return { ...state, recording: false };

    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, payload] };

    case CHANGE_NAME:
      return { ...state, name: payload };

    case RESET:
      return { ...state, name: '', locations: [] };

    case TRACK_SAVED:
      return { ...state, locations: [] };

    default:
      return state;
  }
}
