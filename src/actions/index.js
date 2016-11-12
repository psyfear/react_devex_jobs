import axios from 'axios';

const ROOT_URL = `https://develop.devex.com/api`;

export const FETCH_JOBS = 'FETCH_JOBS';
export const FETCH_JOB = 'FETCH_JOB';

export function fetchJobs(term) {
  const url = `${ROOT_URL}/public/search/jobs?filter[keywords][]=${term}`;
  const request = axios.get(url);

  return {
    type: FETCH_JOBS,
    payload: request,
  };
}

export function fetchJob(id) {
  const url = `${ROOT_URL}/jobs/${id}`;
  const request = axios({
    method: 'get',
    url: url,
    auth: {
      username: 'BOYBASTOSDABEST',
      password: '',
    },
  });

  return {
    type: FETCH_JOB,
    payload: request,
  };
}
