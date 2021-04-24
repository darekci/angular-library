import { BookDto } from "../models/book.dto";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<BookDto[]> {
    return this.httpClient.get<BookDto[]>(`${environment.apiUrl}books`);
  }
}
