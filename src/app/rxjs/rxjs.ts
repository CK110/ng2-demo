import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ng2',
  templateUrl: 'rxjs.html'
})
export class RxjsComponent implements OnInit {

  menus:any;

  constructor() { }

  ngOnInit() {
    this.menus=[
      {
        "name": '聊天应用 demo',
        "router": '/rxjs/chatdemo'
      },

    ];

  }

}
