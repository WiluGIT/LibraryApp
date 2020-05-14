import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { map } from 'rxjs/operators';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookPath = environment.apiUrl + 'api/Book/GetBooks';
  private deleteBookPath = environment.apiUrl + 'api/Book/DeleteBook/';
  private createBookPath = environment.apiUrl + 'api/Book/AddBook';
  private addAuthorToBookPath = environment.apiUrl + 'api/AuthorBook/AddAuthorToBook/'
  private deleteAuthorFromBookPath = environment.apiUrl + 'api/AuthorBook/DeleteAuthorFromBook/';
  constructor(private http: HttpClient, private authService: AuthService) { }

  createBook(book:IBookViewModel){
    return this.http.post(this.createBookPath, book);
  }
  addAuthorToBook(authorId, bookId){
    return this.http.post(this.addAuthorToBookPath + authorId + "/" + bookId,null);
  }


  getBooks():Observable<IBookAuthorViewModel[]>{
    return this.http.get(this.bookPath).pipe(map((book: IBookAuthorViewModel[]) => book));;
  }

  deleteBook(bookId){
    return this.http.delete(this.deleteBookPath + bookId);
  }
  deleteAuthorFromBook(authorId,bookId){
    return this.http.post(this.deleteAuthorFromBookPath + authorId + "/" + bookId,null);
  }
}
