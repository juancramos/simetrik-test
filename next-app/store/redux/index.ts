import { combineReducers } from 'redux';
import searchListReducer from './searchList/reducers';
import selectedListReducer from './selectedList/reducers';
import selectedOrderReducer from './selectedOrder/reducers';

const rootReducer = combineReducers({
  searchListReducer,
  selectedListReducer,
  selectedOrderReducer,
});

export default rootReducer;
