import { FETCH_JOBS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_JOBS:
      console.log('Payload: ', action.payload.data);
      return [action.payload.data];
  }
  return state;
}