import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 movies: Movie[];

  constructor(private movieService : MoviesService) { }

  ngOnInit(): void {
  }
 

  getMovies(): void {
    
    this.movieService.getMovies()
      .subscribe((data:Movie[]) => {
        console.log(this.movies);
        this.movies = data;
      }
        );
  }
}
