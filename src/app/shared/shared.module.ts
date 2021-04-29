import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FormToolbarComponent } from './components/form-toolbar/form-toolbar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [FormToolbarComponent, DataTableComponent],
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [PrimeNgModule, FormToolbarComponent, DataTableComponent],
})
export class LibrarySharedModule {}
