import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookPath = environment.apiUrl + 'api/books';
  constructor(private http: HttpClient, private authService: AuthService) { }
  private headers = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
  };

  createBook(book){
    console.log("siemes")
  }
}
