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
  private deleteUserPath = environment.apiUrl + 'api/User/DeleteUser/';
  private getUsersFilterPath = environment.apiUrl + 'api/User/GetUsers?';

  constructor(private http:HttpClient) { }
  toQueryString(obj){
    var parts=[];

    for(var prop in obj){
      var value = obj[prop];
      if(value !=null && value !=undefined)
        parts.push(encodeURIComponent(prop)+ '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }
  getUsers():Observable<IUserViewModel[]>{
    return this.http.get(this.usersPath).pipe(map((users: IUserViewModel[]) => users));
  }
  getUsersFilter(data) {

    return this.http.get(this.getUsersFilterPath + this.toQueryString(data)).pipe(map((user: IUserViewModel[]) => user));
  }
  deleteUser(id:string){
    return this.http.delete(this.deleteUserPath + id);
  }
}
