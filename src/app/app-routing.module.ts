import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component'

import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { EcomComponent } from './ecom/ecom.component';
import { ScmComponent } from './scm/scm.component';
import { ErpComponent } from './erp/erp.component';
import { KmsComponent } from './kms/kms.component';
import { CrmComponent } from './crm/crm.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  
  {
    path: 'erp/:page', component: ErpComponent
  },
  {
    path: 'kms/:page', component: KmsComponent
  },
  {
    path: 'crm/:page', component: CrmComponent
  },
  {
    path: '', component: WelcomeComponent
  },
  
  { path: 'scm/:page', component: ScmComponent 
  },
  {
    path: 'login/:utype', component: LoginComponent
  },
  {
    path: 'ecom', component: EcomComponent
  },
  {
    path: 'home/:page', component: HomeComponent
  },
 
  {
    path: 'register', component: RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
