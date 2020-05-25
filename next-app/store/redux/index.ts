import { combineReducers } from 'redux';
import dndListReducer from './dndList/reducers';

const rootReducer = combineReducers({
  dndListReducer,
});

export default rootReducer;
