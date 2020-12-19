import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { GamingComponent } from './gaming/gaming.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: '',   redirectTo: '/', pathMatch: 'full' },
  // {path: 'home',   component: AppComponent },
  // {path: 'home',   component: HomeComponent },
  {path: 'art',component: ArtGalleryComponent},
  {path: 'entertainment',component: MoviesComponent},
  {path: 'gaming',component: GamingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
