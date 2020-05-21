import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'connect/token';
  private registerPath = environment.apiUrl + 'api/User/AddUser';
  private dataPath = environment.apiUrl + 'connect/userinfo';
  private getUserRolePath = environment.apiUrl + 'api/Role/GetUserRole/';
  private googleTokenPath = environment.apiUrl + 'api/User/ValidateGoogleUser?tokenId=';
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  private corsOptions = {
    headers: new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set('Access-Control-Allow-Credentials', 'true')
    .set('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE')

  }
  constructor(private http:HttpClient) { }

  login(data):Observable<any>{
    let body = new URLSearchParams();
    body.set('client_id','LibraryApp');
    body.set('client_secret','secretsecretsecretsecretsecretsecretsecretsecret');
    body.set('grant_type','password');
    body.set('scope','api1 openid profile email');
    body.set('username',data.userName);
    body.set('password',data.password);

    return this.http.post(this.loginPath,body.toString(), this.options);
  }

  getIdentityServerToken(token:string){
    return this.http.get(this.googleTokenPath + token,{responseType: 'text'});
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  }

  isAdmin(){
    if(localStorage.getItem('role') ==="admin")
      return true;
    return false;
  }
  getUserInfo(){
    return this.http.get(this.dataPath);
  }
  getUserRole(userId:string){
    return this.http.get(this.getUserRolePath + userId);
  }
  saveRole(role:string){
    localStorage.setItem('role',role);
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
