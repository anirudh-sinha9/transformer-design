import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ROUTING} from "../constants/routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: 'ROUTING_CONSTANTS', useValue: ROUTING}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
