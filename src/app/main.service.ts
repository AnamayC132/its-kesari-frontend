import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http:HttpClient) { }

  public register(user:User):Observable<any>{
return this.http.post<any>("http://192.168.0.104:8080/register",user);
  }
}

