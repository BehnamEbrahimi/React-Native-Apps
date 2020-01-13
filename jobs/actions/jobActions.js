import indeed from '../apis/indeed';
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './types';

export const fetchJobs = (
  { latitude, longitude },
  callback
) => async dispatch => {
  try {
    let { data: jobs } = await indeed.get(
      `latitude=${latitude}&longitude=${longitude}`
    );
    jobs = [
      {
        jobkey: '1',
        latitude: -33.87,
        longitude: 151.2,
        jobtitle: 'Software Engineer',
        company: 'Google',
        formattedRelativeTime: '12:34 pm',
        snippet: 'Best job ever...',
        url: 'https://www.google.com'
      },
      {
        jobkey: '2',
        latitude: -33.86,
        longitude: 151.1,
        jobtitle: 'Senior Developer',
        company: 'Apple',
        formattedRelativeTime: '11:11 am',
        snippet: 'Second Best job ever...',
        url: 'https://www.apple.com'
      },
      {
        jobkey: '3',
        latitude: -33.84,
        longitude: 151.15,
        jobtitle: 'Junior Developer',
        company: 'Facebook',
        formattedRelativeTime: '00:00 am',
        snippet: 'Third Best job ever...',
        url: 'https://www.facebook.com'
      }
    ]; // to be removed
    dispatch({ type: FETCH_JOBS, payload: jobs });
    callback();
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = job => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
};
