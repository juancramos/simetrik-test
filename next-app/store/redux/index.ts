import { combineReducers } from 'redux';
import searchListReducer from './searchList/reducers';

const rootReducer = combineReducers({
  searchListReducer,
});

export default rootReducer;
