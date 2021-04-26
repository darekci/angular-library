import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { CommonModule } from '@angular/common';
import { LibrarySharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [BookListComponent, AddBookComponent, BookFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    LibrarySharedModule,
    BooksRoutingModule,
    ReactiveFormsModule,
  ],
})
export class BooksModule {}
