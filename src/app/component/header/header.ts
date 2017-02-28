import {Component, OnInit, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'z-header',
    templateUrl: 'header.html',
    styleUrls: ['./header.css']
})
export class ZHeader implements OnInit {
    constructor() { }

    ngOnInit() { }

}


@NgModule({
    imports:[CommonModule,RouterModule],
    exports:[ZHeader],
    declarations:[ZHeader]
})
export class ZHeaderModule {}


