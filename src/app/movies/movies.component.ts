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
 toggle: string="false";
  constructor(private movieService : MoviesService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  
}
flag():void{
  this.toggle="true"

}

  getMovies(): void {
    
    this.movieService.getMovies()
      .subscribe((data:Movie[]) => {
        this.movies = data;
      }
        );
  }
}
