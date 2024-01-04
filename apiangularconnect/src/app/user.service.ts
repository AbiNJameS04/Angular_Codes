import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL='http://localhost:8081/user'

  constructor(private http:HttpClient) { }

  fnAddUser(user:any)
  
  {
    return this.http.post(this.URL,user);
  }
}
