import { SELECTED_LIST_ACTIONS, SelectedListState } from './types';
import { selectedListAction } from './actions';

const initialState = {
  selectedNames: [],
};

const selectedListReducer = (state = initialState,
  action: selectedListAction): SelectedListState => {
  switch (action.type) {
    case SELECTED_LIST_ACTIONS.SELECT:
      const selected = state.selectedNames.includes(action.columnName);
      const newNames = selected ? state.selectedNames.filter((elem: string) =>
        elem !== action.columnName) : [...state.selectedNames, action.columnName];
      return { ...state, selectedNames: newNames };
    case SELECTED_LIST_ACTIONS.DELETE_ALL:
      return { ...state, selectedNames: [] };
    default:
      return { ...state };
  }
};

export default selectedListReducer;
