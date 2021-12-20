import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http:HttpClient) { }
  
  public register(user:User):Observable<any>{
return this.http.post<any>("https://its-backend.herokuapp.com/register",user);
  }
  public payNow(orders:Orders):Observable<any>{
    return this.http.post<any>("https://its-backend.herokuapp.com/placedOrderNow",orders);
      }
  public getProducts():Observable<any>{
    return this.http.get<any>("https://its-backend.herokuapp.com/getProducts");
      }
      public getUserByEmail(email:String):Observable<any>{
        return this.http.get<any>("https://its-backend.herokuapp.com/getUserByName/"+email);
          }
}

