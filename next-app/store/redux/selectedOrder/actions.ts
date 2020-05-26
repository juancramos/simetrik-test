import { Action } from 'redux';
import { SELECTED_ORDER_ACTIONS } from './types';

// Action Creator
interface Select extends Action {
  type: SELECTED_ORDER_ACTIONS.UPDATE;
  columns: string[];
}

interface DeleteAll extends Action {
  type: SELECTED_ORDER_ACTIONS.DELETE_ALL;
}

export type selectedOrderAction = Select | DeleteAll;
