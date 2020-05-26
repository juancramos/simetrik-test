// Action Types
export enum SELECTED_ORDER_ACTIONS {
  UPDATE = 'UPDATE',
  DELETE_ALL = 'DELETE_ALL',
}

export interface SelectedOrderState {
  selectedOrder: string[];
}
