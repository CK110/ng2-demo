import {Component, OnInit, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'chat-demo',
    templateUrl: 'chat.html'
})
export class ChatDemo implements OnInit {
    constructor() { }

    ngOnInit() { }

}

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([
      {path:'',component: ChatDemo}
    ])

  ],
  declarations:[ChatDemo]
})
export class ChatDemoModule{
}
