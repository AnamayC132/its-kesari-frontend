import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs'
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ArtServiceService } from '../app/art-gallery/art-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { GamingComponent } from './gaming/gaming.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatTooltipModule } from '@angular/material/tooltip';

import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ArtCategoryComponent } from './art-gallery/art-category/art-category.component';
import { ArtDialogComponent } from './art-gallery/art-category/art-dialog/art-dialog.component';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    ArtGalleryComponent,
    GamingComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArtCategoryComponent,
    ArtDialogComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatRippleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule
    
  ],
  providers: [
  
    ArtServiceService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
