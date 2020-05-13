import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'connect/token';
  private registerPath = environment.apiUrl + 'api/User/AddUser';
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  constructor(private http:HttpClient) { }

  login(data):Observable<any>{
    let body = new URLSearchParams();
    body.set('client_id','LibraryApp');
    body.set('client_secret','secret');
    body.set('grant_type','password');
    body.set('scope','api1');
    body.set('username',data.userName);
    body.set('password',data.password);
    console.log(body);
    return this.http.post(this.loginPath,body.toString(), this.options);
  }

  register(data): Observable<any>{
    return this.http.post(this.registerPath,data);
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    if(this.getToken())
      return true;

    return false;
  }
}
