import { createStore } from 'redux';
import rootReducer from './redux';
import { SearchListState } from './redux/searchList/types';
import { SelectedListState } from './redux/selectedList/types';

export interface GlobalState {
  searchListReducer: SearchListState;
  selectedListReducer: SelectedListState;
}

const store = createStore(rootReducer);

export default store;
