import { Action } from 'redux';
import { SELECTED_LIST_ACTIONS } from './types';

// Action Creator
interface Select extends Action {
  type: SELECTED_LIST_ACTIONS.SELECT;
  columnName: string;
}

interface DeleteAll extends Action {
  type: SELECTED_LIST_ACTIONS.DELETE_ALL;
}

export type selectedListAction = Select | DeleteAll;
