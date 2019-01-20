import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesignContainerComponent } from './components/design-container/design-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputSpecificationComponent } from './components/input-specification/input-specification.component';

@NgModule({
  declarations: [DesignContainerComponent, DashboardComponent, HeaderComponent, FooterComponent, InputSpecificationComponent],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
