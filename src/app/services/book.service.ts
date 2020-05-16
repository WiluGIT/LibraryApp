import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { map, filter } from 'rxjs/operators';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookPath = environment.apiUrl + 'api/Book/GetBooks';
  private getBooksParamsPath = environment.apiUrl + 'api/Book/GetBooks?'
  private deleteBookPath = environment.apiUrl + 'api/Book/DeleteBook/';
  private createBookPath = environment.apiUrl + 'api/Book/AddBook';
  private addAuthorToBookPath = environment.apiUrl + 'api/AuthorBook/AddAuthorToBook/'
  private deleteAuthorFromBookPath = environment.apiUrl + 'api/AuthorBook/DeleteAuthorFromBook/';
  private getBookPath = environment.apiUrl + 'api/Book/GetBook/';
  private updateBookPath = environment.apiUrl + 'api/Book/EditBook/';
  constructor(private http: HttpClient, private authService: AuthService) { }

  toQueryString(obj) {
    var parts = [];

    for (var prop in obj) {
      var value = obj[prop];
      if (value != null && value != undefined) {
        if (prop === "authorIds") {
          for (var val of value) {

            parts.push(encodeURIComponent(prop) + '=' + encodeURIComponent(val));
          }

        } else {
          parts.push(encodeURIComponent(prop) + '=' + encodeURIComponent(value));
        }


      }

    }

    return parts.join('&');
  }
  createBook(book: IBookViewModel) {
    return this.http.post(this.createBookPath, book);
  }
  addAuthorToBook(authorId, bookId) {
    return this.http.post(this.addAuthorToBookPath + authorId + "/" + bookId, null);
  }

  getBooks(): Observable<IBookAuthorViewModel[]> {

    return this.http.get(this.bookPath).pipe(map((book: IBookAuthorViewModel[]) => book));
  }
  getBookFilter(data) {
    console.log(this.toQueryString(data))

    return this.http.get(this.getBooksParamsPath + this.toQueryString(data)).pipe(map((book: IBookAuthorViewModel[]) => book));
  }

  getBook(bookId) {
    return this.http.get(this.getBookPath + bookId).pipe(map((book: IBookAuthorViewModel) => book));
  }

  updateBook(book: IBookViewModel) {
    return this.http.put(this.updateBookPath + book.bookId, book);
  }

  deleteBook(bookId) {
    return this.http.delete(this.deleteBookPath + bookId);
  }
  deleteAuthorFromBook(authorId, bookId) {
    return this.http.post(this.deleteAuthorFromBookPath + authorId + "/" + bookId, null);
  }
}
