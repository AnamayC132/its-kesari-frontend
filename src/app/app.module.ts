import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogComponent } from './movies/dialog/dialog.component';
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ArtServiceService } from '../app/art-gallery/art-service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { GamingComponent } from './gaming/gaming.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DialogComponent,
    ArtGalleryComponent,
    GamingComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
  ],
  providers: [
    MoviesService,
    ArtServiceService,
  
  ],
  bootstrap: [HomeComponent,AppComponent]
})
export class AppModule { }
