import { BookListComponent } from './pages/book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/shared/modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, PrimeNgModule],
})
export class BooksModule {}
