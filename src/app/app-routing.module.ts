import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then((m) => m.BooksModule),
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
