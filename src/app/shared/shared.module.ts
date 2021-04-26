import { CommonModule } from '@angular/common';
import { FormToolbarComponent } from './components/form-toolbar/form-toolbar.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [FormToolbarComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [PrimeNgModule, FormToolbarComponent],
})
export class LibrarySharedModule {}
