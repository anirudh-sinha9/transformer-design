import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: './modules/landing/landing.module#LandingModule'
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
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
