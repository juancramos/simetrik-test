import { combineReducers } from 'redux';
import searchListReducer from './searchList/reducers';
import selectedListReducer from './selectedList/reducers';

const rootReducer = combineReducers({
  searchListReducer,
  selectedListReducer,
});

export default rootReducer;
