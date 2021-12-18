import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConsumerBenefitsComponent } from './consumer-benefits/consumer-benefits.component';
import {LoginComponent} from './login/login.component'
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'brand', component: ProductDetailsComponent
  },
 
  { path: 'baby1', component: ConsumerBenefitsComponent },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'loginsuccess/:uname', component: LoginsuccessComponent
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
