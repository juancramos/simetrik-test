import { createStore } from 'redux';
import rootReducer from './redux';
import { SearchListState } from './redux/searchList/types';
import { SelectedListState } from './redux/selectedList/types';
import { SelectedOrderState } from './redux/selectedOrder/types';

export interface GlobalState {
  searchListReducer: SearchListState;
  selectedListReducer: SelectedListState;
  selectedOrderReducer: SelectedOrderState;
}

const store = createStore(rootReducer);

export default store;
