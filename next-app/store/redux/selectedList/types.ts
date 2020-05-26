// Action Types
export enum SELECTED_LIST_ACTIONS {
  SELECT = 'SELECT',
  DELETE_ALL = 'DELETE_ALL',
}

export interface SelectedListState {
  selectedNames: string[];
}
