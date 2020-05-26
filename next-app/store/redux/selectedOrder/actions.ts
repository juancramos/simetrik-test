import { Action } from 'redux';
import { SELECTED_ORDER_ACTIONS } from './types';

// Action Creator
interface Select extends Action {
  type: SELECTED_ORDER_ACTIONS.UPDATE;
  columns: string[];
}

export type selectedOrderAction = Select;
