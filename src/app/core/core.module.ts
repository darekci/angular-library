import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../shared/modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent],
})
export class CoreModule {}
