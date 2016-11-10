import axios from 'axios';

const ROOT_URL = `https://www.devex.com/api/public/search/jobs`;

export const FETCH_JOBS = 'FETCH_JOBS';

export function fetchJobs(term) {
  const url = `${ROOT_URL}?filter[keywords][]=${term}`;
  const request = axios.get(url);

  return {
    type: FETCH_JOBS,
    payload: request,
  };
}
