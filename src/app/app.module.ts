import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs'

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatTooltipModule } from '@angular/material/tooltip';

import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
;
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EcomComponent } from './ecom/ecom.component';
import { ErpComponent } from './erp/erp.component';
import { ScmComponent } from './scm/scm.component';
import { KmsComponent } from './kms/kms.component';
import { CrmComponent } from './crm/crm.component';


import { EcomHeaderComponent } from './ecom-header/ecom-header.component';
import { PaymentDialogueComponent } from './payment-dialogue/payment-dialogue.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    EcomComponent,
    ErpComponent,
    ScmComponent,
    KmsComponent,
    CrmComponent,
 
   
    EcomHeaderComponent,
 
   
    PaymentDialogueComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatRippleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSnackBarModule
    
  ],
  providers: [
  
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
