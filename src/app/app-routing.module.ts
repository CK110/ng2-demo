import {RouterModule, Router} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {Angular2Component} from "./angular2/angular2";
import {NG2AsyncPipe} from "./angular2/common/pipes/async_pipe/async_pipe";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'angular2',
        pathMatch:'full'
      },
      { path: 'angular2',
        component: Angular2Component,
        children:[
          {
            path: '',
            redirectTo: 'asyncpipe',
            pathMatch: 'full'
          },
          {
            path: 'asyncpipe',
            component: NG2AsyncPipe
          }
        ]
      }
    ]),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
