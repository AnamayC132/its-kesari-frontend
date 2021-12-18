import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  public login(user:User):Observable<any>{
return this.http.post<any>("http://192.168.0.104:8080/login",user);
  }
}
