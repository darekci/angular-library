export class DataTableConfiguration<T> {
  data: T[];
  globalFilterFields: string[];
  dataTableType: DataTableType;
  rows: number;
}

export class DataTableType {
  columns: DataTableColumn[];
  rowActions: DataTableRowAction[];
}

export class DataTableColumn {
  title: string;
  dataProperty: string;
  dataType: DataTableColumnType;
}

export class DataTableRowAction {
  icon: string;
  actionType: DataTableRowActionType;
}

export const enum DataTableColumnType {
  DATA = 'data',
  ACTIONS = 'actions',
}

export enum DataTableRowActionType {
  EDIT = 'edit',
  DELETE = 'delete',
}
