import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-comp',
    template: `
      <div style="width: 100%;height: 30px;border: 1px solid red">
        
          
      </div>
      
    `,
    // styles:[`
    //     :host {
    //         display:inline-block;
    //         width: 50px;
    //     }
    //
    // `]
  host: {
    '[class.ui-host]': 'true'
  }
})
export class SetHostStyleComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
