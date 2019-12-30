import backend from '../apis/backend';

import { FETCH_TRACKS } from './types';

export const fetchTracks = () => async dispatch => {
  const { data: tracks } = await backend.get('/tracks');
  dispatch({ type: FETCH_TRACKS, payload: tracks });
};

export const createTrack = (name, locations) => async dispatch => {
  await backend.post('/tracks', { name, locations });
};
