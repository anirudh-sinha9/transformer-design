import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesignContainerComponent} from "./components/design-container/design-container.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component:DesignContainerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },

    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
