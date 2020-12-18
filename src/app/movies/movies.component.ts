import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../movies/dialog/dialog.component'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 movies: Movie[];

  constructor(private movieService : MoviesService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  
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
