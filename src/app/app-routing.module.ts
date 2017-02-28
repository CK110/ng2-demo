import {RouterModule, Router} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {Angular2Component} from "./angular2/angular2";

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
            redirectTo: 'install',
            pathMatch: 'full'
          },
          {
            path: 'install',
            component: Angular2Component
          }
        ]
      }
    ]),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
