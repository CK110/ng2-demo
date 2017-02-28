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
    ZMenuModule,
    SectionModule,
    MarkdownToHtmlModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
