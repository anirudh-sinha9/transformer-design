import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingContainerComponent } from './components/landing-container/landing-container.component';

@NgModule({
  declarations: [LandingComponent, HeaderComponent, FooterComponent, LandingContainerComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
