import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookPath = environment.apiUrl + 'api/Book/GetBooks';
  private deleteBookPath = environment.apiUrl + 'api/Book/DeleteBook/';
  constructor(private http: HttpClient, private authService: AuthService) { }

  createBook(book){
    console.log("siemes")
  }

  getBooks():Observable<IBookViewModel[]>{
    return this.http.get(this.bookPath).pipe(map((book: IBookViewModel[]) => book));;
  }

  deleteBook(bookId){
    return this.http.delete(this.deleteBookPath + bookId);
  }
}
