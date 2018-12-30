import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [UserContainerComponent, HeaderComponent, FooterComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
