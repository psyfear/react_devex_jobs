import { FETCH_JOBS, FETCH_JOB } from '../actions/index';

const INITIAL_STATE = { list: [], job: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_JOB:
      return { ...state, job: action.payload.data };
    case FETCH_JOBS:
      console.log('Payload: ', action.payload.data);
      return { ...state, list: action.payload.data };
  }
  return state;
}
