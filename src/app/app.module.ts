import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ZHeaderModule} from "./component/header/header";
import {ZMenuModule} from "./component/menu/menu";

import {ANGULAR2_DEMO_ARRAY} from "./angular2/index";

@NgModule({
  declarations: [
    AppComponent,
    ANGULAR2_DEMO_ARRAY
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ZHeaderModule,
    ZMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
