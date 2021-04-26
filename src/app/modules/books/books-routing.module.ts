import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'add',
    component: AddBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
