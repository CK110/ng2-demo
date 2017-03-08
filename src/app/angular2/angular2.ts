import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-ng2',
    templateUrl: 'angular2.html'
})
export class Angular2Component implements OnInit {

  menus:any;

  constructor() { }

  ngOnInit() {
    this.menus=[
      // {
      //   "name": 'UI Platform of Angular2',
      //   "router": ''
      // },
      // {
      //   "name": '快速上手',
      //   "router": ''
      // },
      {
        "name": 'Demo',
        "components":[
          {
            'group':'common',
            'children':[
              {
                us_name:'asyncpipe',
                zh_name: '',
                router: '/angular2/asyncpipe'
              },
              {
                us_name:'hoststyle',
                zh_name: '设置host element style',
                router: '/angular2/hoststyle'
              }
            ]
          },
      ]}
    ];

  }

}
