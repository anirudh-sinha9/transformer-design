import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserContainerComponent} from "./components/user-container/user-container.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ROUTING} from "../../../constants/routing";

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {
        path: ROUTING.USER.LOGIN,
        component: LoginComponent
      },
      {
        path: ROUTING.USER.REGISTER,
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
