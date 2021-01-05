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
    path: 'art', component: ArtGalleryComponent
  },
  { path: 'entertainment', component: MoviesComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'art/automobile', component: ArtCategoryComponent },
  { path: 'art/caricatures', component: ArtCategoryComponent },
  { path: 'art/doodles', component: ArtCategoryComponent },
  { path: 'art/abstract', component: ArtCategoryComponent },
  { path: 'art/posters', component: ArtCategoryComponent },
  { path: 'art/portraits', component: ArtCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
