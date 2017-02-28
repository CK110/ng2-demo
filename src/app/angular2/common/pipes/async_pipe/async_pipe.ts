import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'ng2-async-pipe',
    templateUrl: './async_pipe.html'
})
export class NG2AsyncPipe implements OnInit {

  items1= Observable.interval(1000)
    .scan((acc, cur)=>[cur, ...acc].slice(0, 5), []);

  items2 = [];


  constructor() {
    this.newSeq()
  }

  ngOnInit() {
  }


  newSeq() {

    // generate a random color
    let color = '#' + Math.random().toString(16).slice(-6);

    console.log(Math.random().toString(16));
    console.log(Math.random().toString(16).slice(-6));

    Observable.interval(1000)
      .scan((acc, num)=>[{num, color }, ...acc].slice(0, 5), [])
      .subscribe(items => this.items2 = items);
  }


  test(){

  }

}
