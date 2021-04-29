import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DataTableConfiguration,
  DataTableRowActionType,
  DataTableType,
} from 'src/app/shared/models/data-table-configuration';

import { BookDto } from '../../models/book.dto';
import { BooksService } from '../../services/books.service';
import { DataTableColumnType } from 'src/app/shared/models/data-table-configuration';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  private globalFilterFields = [
    'title',
    'author',
    'isbn',
    'publisher',
    'publishYear',
  ];

  private dataTableType: DataTableType = {
    columns: [
      {
        title: 'Title',
        dataProperty: 'title',
        dataType: DataTableColumnType.DATA,
      },
      {
        title: 'Author',
        dataProperty: 'author',
        dataType: DataTableColumnType.DATA,
      },
      {
        title: 'ISBN',
        dataProperty: 'isbn',
        dataType: DataTableColumnType.DATA,
      },
      {
        title: 'Publisher',
        dataProperty: 'publisher',
        dataType: DataTableColumnType.DATA,
      },
      {
        title: 'PublishYear',
        dataProperty: 'publishYear',
        dataType: DataTableColumnType.DATA,
      },
      { title: '', dataProperty: '', dataType: DataTableColumnType.ACTIONS },
    ],
    rowActions: [
      { icon: 'pi pi-pencil', actionType: DataTableRowActionType.EDIT },
      { icon: 'pi pi-trash', actionType: DataTableRowActionType.DELETE },
    ],
  };

  private subscription = new Subscription();
  books: BookDto[] = [];
  tableConfiguration: DataTableConfiguration<BookDto>;

  @ViewChild('dataTable', { static: false })
  dataTable: DataTableComponent<BookDto>;

  constructor(private service: BooksService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.setTableConfiguration(this.books);
    this.loadBooks();
  }

  private setTableConfiguration(books: BookDto[]): void {
    this.tableConfiguration = {
      data: books,
      globalFilterFields: this.globalFilterFields,
      dataTableType: this.dataTableType,
      rows: 10,
    };
  }

  private loadBooks(): void {
    this.subscription.add(
      this.service.getAllBooks().subscribe((books) => {
        this.books = books;
        this.setTableConfiguration(books);
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

  onRowEdited(book: BookDto): void {
    const editedBook = { ...book, publishYear: +book.publishYear };

    this.service.editBook(editedBook).subscribe(
      () => {
        this.toastr.success(`Book ${book.title} updated`);
        this.loadBooks();
      },
      () => this.toastr.error('Error while updating book')
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
