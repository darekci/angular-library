import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { BookDto } from '../../models/book.dto';
import { BooksService } from '../../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  private subscription = new Subscription();

  books: BookDto[];

  constructor(
    private service: BooksService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  openNew(): void {
    console.log('new');
  }

  editBook(book: BookDto) {
    console.log(book);
  }

  deleteBook(book: BookDto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // deleted
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Book Deleted',
          life: 3000,
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
