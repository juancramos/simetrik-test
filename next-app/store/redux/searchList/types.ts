// Action Types
export enum SEARCH_LIST_ACTIONS {
  INSERT = 'INSERT',
  DELETE = 'DELETE',
}

export interface SearchListState {
  columnNames: string[];
}
