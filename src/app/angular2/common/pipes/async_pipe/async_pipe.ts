import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';
import {Http, Response} from "@angular/http";

@Component({
    selector: 'ng2-async-pipe',
    templateUrl: './async_pipe.html'
})
export class NG2AsyncPipe implements OnInit {

  items1= Observable.interval(1000)
    .scan((acc, cur)=>[cur, ...acc].slice(0, 5), []);

  items2 = [];

  items3:Observable<any>;

  constructor(private http:Http) {
    this.newSeq()
  }

  ngOnInit() {
    this.items3= this.http.get('http://swapi.co/api/films')
      .map((response: Response) => response.json().results)
      .do(data => console.log(JSON.stringify(data)))

    // CORS
    // this.items3 = this.http.get('http://localhost:8022/async.json')
    //   .map((response: Response) => response.json().results)
    //   .do(data => console.log(JSON.stringify(data)))

  }


  newSeq() {

    // generate a random color
    let color = '#' + Math.random().toString(16).slice(-6);

    // console.log(Math.random().toString(16));
    // console.log(Math.random().toString(16).slice(-6));

    Observable.interval(1000)
      .scan((acc, num)=>[{num, color }, ...acc].slice(0, 5), [])
      .subscribe(items => this.items2 = items);
  }




}
