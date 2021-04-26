import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './modules/books/books.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LibrarySharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    SharedModule,
    LibrarySharedModule,
    CoreModule,
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
