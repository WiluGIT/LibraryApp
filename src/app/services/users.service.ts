import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUserViewModel } from '../ClientViewModels/IUserVIewModel';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersPath = environment.apiUrl + 'api/User/GetUsers';

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUserViewModel[]>{
    return this.http.get(this.usersPath).pipe(map((users: IUserViewModel[]) => users));
  }
}
