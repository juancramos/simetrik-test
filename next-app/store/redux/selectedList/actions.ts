import { Action } from 'redux';
import { SELECTED_LIST_ACTIONS } from './types';

// Action Creator
interface Select extends Action {
  type: SELECTED_LIST_ACTIONS.SELECT;
  columnName: string;
}

export type selectedListAction = Select;
