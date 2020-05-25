// Action Types
export enum DND_LIST_ACTIONS {
  INSERT = 'INSERT',
  DELETE = 'DELETE',
}

export interface DndListState {
  columnNames: string[];
}
