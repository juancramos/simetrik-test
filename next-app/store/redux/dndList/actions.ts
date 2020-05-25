import { Action } from 'redux';
import { DND_LIST_ACTIONS } from './types';

// Action Creator
interface Insert extends Action {
  type: DND_LIST_ACTIONS.INSERT;
  columnName: string;
}

interface Delete extends Action {
  type: DND_LIST_ACTIONS.DELETE;
  columnName: string;
}

export type DndAction = Insert | Delete;
