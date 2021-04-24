import { CommonModule } from '@angular/common';
import { FilterService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [PanelMenuModule, TableModule],
  providers: [FilterService],
})
export class PrimeNgModule {}
