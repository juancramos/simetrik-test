import { DND_LIST_ACTIONS, DndListState } from './types';
import { DndAction } from './actions';

const initialState = {
  columnNames: [
    'SKT_ID', 'ORDER_IR', 'CREATION_DATE', 'TOTAL_AMOUNT', 'TOTAL_ITEMS',
    'USER_ID', 'GATEWAY_REFERENCE', 'STATUS', 'BIN', 'LAST4',
  ],
};

const dndListReducer = (state = initialState, action: DndAction): DndListState => {
  switch (action.type) {
    case DND_LIST_ACTIONS.INSERT:
      return { ...state, columnNames: [...state.columnNames, action.columnName] };
    case DND_LIST_ACTIONS.DELETE:
      const cols = state.columnNames.filter((name: string) =>
        name !== action.columnName);
      return { ...state, columnNames: [...cols] };
    default:
      return { ...state };
  }
};

export default dndListReducer;
