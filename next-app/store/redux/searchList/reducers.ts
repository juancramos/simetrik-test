import { SEARCH_LIST_ACTIONS, SearchListState } from './types';
import { SearchListAction } from './actions';

const initialState = {
  columnNames: [
    'SKT_ID', 'ORDER_IR', 'CREATION_DATE', 'TOTAL_AMOUNT', 'TOTAL_ITEMS',
    'USER_ID', 'GATEWAY_REFERENCE', 'STATUS', 'BIN', 'LAST4',
  ],
};

const searchListReducer = (state = initialState, action: SearchListAction): SearchListState => {
  switch (action.type) {
    case SEARCH_LIST_ACTIONS.INSERT:
      return { ...state, columnNames: [...state.columnNames, action.columnName] };
    case SEARCH_LIST_ACTIONS.DELETE:
      const cols = state.columnNames.filter((name: string) =>
        name !== action.columnName);
      return { ...state, columnNames: [...cols] };
    default:
      return { ...state };
  }
};

export default searchListReducer;
