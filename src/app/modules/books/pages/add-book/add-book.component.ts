import { Component, OnInit } from '@angular/core';

import { BookDto } from '../../models/book.dto';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: BooksService
  ) {}

  onCancel(): void {
    this.router.navigate(['books']);
  }

  onSubmit(book: BookDto): void {
    this.service.addBook(book).subscribe(
      () => {
        this.toastr.success('Book has been added'),
          this.router.navigate(['books']);
      },
      () => {
        this.toastr.error('Error while adding Book');
      }
    );
  }
}
