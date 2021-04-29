import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DataTableConfiguration } from '../../models/data-table-configuration';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent<T> {
  @Input() tableConfig: DataTableConfiguration<T>;
  @Output() onRowEdited = new EventEmitter<T>();
  @Output() onRowDeleted = new EventEmitter<T>();
  clonedRows: { [s: number]: T } = {};

  onRowEditInit(row: any): void {
    this.clonedRows[row.id] = { ...row };
  }

  onRowEditSave(row: any): void {
    delete this.clonedRows[row.id];
    this.onRowEdited.emit(row);
  }

  onRowEditCancel(row: any, index: number): void {
    this.tableConfig.data[index] = this.clonedRows[row.id];
    delete this.clonedRows[row.id];
  }

  onDeleteRow(row: any): void {
    this.onRowDeleted.emit(row);
  }
}
