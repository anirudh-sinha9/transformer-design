import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ROUTING} from "../constants/routing";

const routes: Routes = [
  {
    path: ROUTING.LANDING.DEFAULT,
    loadChildren: './modules/landing/landing.module#LandingModule'
  },
  {
    path: ROUTING.USER.DEFAULT,
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: ROUTING.DESIGN.DEFAULT,
    loadChildren: './modules/design/design.module#DesignModule'
  },
  {
    path: ROUTING.DISTRIBUTION.DEFAULT,
    loadChildren: './modules/distribution/distribution.module#DistributionModule'
  },

  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

// './customers/customers.module#CustomersModule'
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
