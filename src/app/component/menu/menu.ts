import {Component, OnInit, NgModule, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'z-menu',
    templateUrl: 'menu.html',
    styleUrls: ['./menu.css']

})
export class ZMenuComponent implements OnInit {

    @Input() menus:any;

    constructor() { }

    ngOnInit() { }

}

@NgModule({
  imports:[CommonModule,RouterModule],
  exports:[ZMenuComponent],
  declarations:[ZMenuComponent]
})
export class ZMenuModule {}
