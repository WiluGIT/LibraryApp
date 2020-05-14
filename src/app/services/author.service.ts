import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthorViewModel } from '../ClientViewModels/IAuthorViewModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorsPath = environment.apiUrl + 'api/Author/GetAuthors';
  private deleteAuthorPath = environment.apiUrl + 'api/Author/DeleteAuthor/';

  constructor(private http: HttpClient) { }

  getAuthors():Observable<IAuthorViewModel[]>{
    return this.http.get(this.authorsPath).pipe(map((author: IAuthorViewModel[]) => author));

  }

  deleteAuthor(authorId){
    return this.http.delete(this.deleteAuthorPath + authorId);
  }

}
