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
        "name": 'chat demo',
        "router": '/rxjs/chatdemo'
      },

    ];

  }

}
