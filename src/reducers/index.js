import { combineReducers } from 'redux';
import JobReducer from './reducer_job';

const rootReducer = combineReducers({
  jobs: JobReducer
});

export default rootReducer;
