import { Component, OnInit } from '@angular/core';

import { BookDto } from '../../models/book.dto';
import { BooksService } from '../../services/books.service';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  private subscription = new Subscription();

  books: BookDto[];

  clonedBooks: { [s: number]: BookDto } = {};

  constructor(
    private service: BooksService,
    private confirmationService: ConfirmationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  private loadBooks(): void {
    this.subscription.add(
      this.service.getAllBooks().subscribe((books) => {
        this.books = books;
      })
    );
  }

  deleteBook(book: BookDto) {
    this.service.deleteBook(book.id).subscribe(
      () => {
        this.toastr.success('Book deleted');
        this.loadBooks();
      },
      () => this.toastr.error('Error while deleting Book')
    );
  }

  onRowEditInit(book: BookDto): void {
    this.clonedBooks[book.id] = { ...book };
  }

  onRowEditSave(book: BookDto): void {
    delete this.clonedBooks[book.id];

    const editedBook = { ...book, publishYear: +book.publishYear };

    this.service.editBook(editedBook).subscribe(
      () => {
        this.toastr.success(`Book ${book.title} updated`);
        this.loadBooks();
      },
      () => this.toastr.error('Error while updating book')
    );
  }

  onRowEditCancel(book: BookDto, index: number): void {
    this.books[index] = this.clonedBooks[book.id];
    delete this.clonedBooks[book.id];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
