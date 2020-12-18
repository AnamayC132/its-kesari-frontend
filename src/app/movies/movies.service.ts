import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from '../movies/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl="https://spring-boot-entertainment.herokuapp.com"
  constructor(private http : HttpClient) { }


  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseUrl+"/movies");

  }
}
