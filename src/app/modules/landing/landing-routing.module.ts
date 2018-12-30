import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {LandingContainerComponent} from "./components/landing-container/landing-container.component";


const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
