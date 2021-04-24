import { Component, OnInit } from '@angular/core';

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

  constructor(private service: BooksService) {}

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
