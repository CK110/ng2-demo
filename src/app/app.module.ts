import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ZHeaderModule} from "./component/header/header";
import {ZMenuModule} from "./component/menu/menu";

import {ANGULAR2_DEMO_ARRAY} from "./angular2/index";
import {SectionModule} from "./component/section/section";
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import {MaterialModule} from "@angular/material";
import {RXJS_DEMO_ARRAY} from "./rxjs/index";

let All_Declarations =[
  ANGULAR2_DEMO_ARRAY,
  RXJS_DEMO_ARRAY
]

@NgModule({
  declarations: [
    AppComponent,
    All_Declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ZHeaderModule,
    ZMenuModule,
    SectionModule,
    MarkdownToHtmlModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
