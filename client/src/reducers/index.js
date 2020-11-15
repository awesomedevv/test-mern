import { combineReducers } from 'redux';
import connections from './connections_reducer';

const rootReducer = combineReducers({

  connections,
});

export default rootReducer;
