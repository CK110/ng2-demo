import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'ng2-async-pipe',
    templateUrl: './async_pipe.html'
})
export class NG2AsyncPipe implements OnInit {

  items = Observable.interval(100)
    .scan((acc, cur)=>[cur, ...acc].slice(0, 5), []);

  constructor() { }

  ngOnInit() { }


}
