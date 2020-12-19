import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { GamingComponent } from './gaming/gaming.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home',   component: AppComponent },
  {path: 'art',component: ArtGalleryComponent},
  {path: 'entertainment',component: MoviesComponent},
  {path: 'gaming',component: GamingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
