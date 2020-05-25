import { createStore } from 'redux';
import rootReducer from './redux';
import { DndListState } from './redux/dndList/types';

export interface GlobalState {
  dndListReducer: DndListState;
}

const store = createStore(rootReducer);

export default store;
