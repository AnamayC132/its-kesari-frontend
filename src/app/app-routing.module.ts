import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { GamingComponent } from './gaming/gaming.component';
import { MoviesComponent } from './movies/movies.component';
import { ProfileComponent } from './profile/profile.component';
import { ArtCategoryComponent } from './art-gallery/art-category/art-category.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'art', component: ArtGalleryComponent, children: [
      { path: 'automobile', component: ArtCategoryComponent },
      { path: 'caricatures', component: ArtCategoryComponent },
      { path: 'doodles', component: ArtCategoryComponent },
      { path: 'abstract', component: ArtCategoryComponent },
      { path: 'posters', component: ArtCategoryComponent },
      { path: 'portraits', component: ArtCategoryComponent },
    ]
  },
  { path: 'entertainment', component: MoviesComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'profile', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
