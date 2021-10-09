import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { GamingComponent } from './gaming/gaming.component';


import { ArtCategoryComponent } from './art-gallery/art-category/art-category.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'brand', component: ArtGalleryComponent
  },
 
  { path: 'baby1', component: GamingComponent },

  // { path: 'art/automobile', component: ArtCategoryComponent },
  // { path: 'art/caricatures', component: ArtCategoryComponent },
  // { path: 'art/doodles', component: ArtCategoryComponent },
  // { path: 'art/abstract', component: ArtCategoryComponent },
  // { path: 'art/posters', component: ArtCategoryComponent },
  // { path: 'art/portraits', component: ArtCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
