import { createStore } from 'redux';
import rootReducer from './redux';
import { SearchListState } from './redux/searchList/types';

export interface GlobalState {
  searchListReducer: SearchListState;
}

const store = createStore(rootReducer);

export default store;
