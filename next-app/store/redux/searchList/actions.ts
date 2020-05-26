import { Action } from 'redux';
import { SEARCH_LIST_ACTIONS } from './types';

// Action Creator
interface Insert extends Action {
  type: SEARCH_LIST_ACTIONS.INSERT;
  columnName: string;
}

interface Delete extends Action {
  type: SEARCH_LIST_ACTIONS.DELETE;
  columnName: string;
}

export type SearchListAction = Insert | Delete;
