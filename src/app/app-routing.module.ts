import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './modules/books/pages/book-list/book-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
