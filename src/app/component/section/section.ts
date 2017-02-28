import {Component, OnInit, NgModule, Input, trigger, state, style, transition, animate} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'z-demo',
  template: '<ng-content></ng-content>'
})
export class ZDemoComponent {}

@Component({
  selector: 'z-markdown',
  template: '<ng-content></ng-content>'
})
export class ZMarkdownComponent {}


@Component({
    selector: 'z-section',
    templateUrl: 'section.html',
    styleUrls: ['./section.css']
})
export class ZSectionComponent implements OnInit {

  protected hoverToggler: boolean;

  @Input() collapsed: boolean = true;

  @Input() title:string;


  constructor(){

  }

  ngOnInit() { }


  toggle(event) {
    if(this.collapsed){
      this.collapsed = false
    }else{
      this.collapsed = true;
    }
    event.preventDefault();
  }

}


@NgModule({
  imports: [CommonModule],
  exports: [ZSectionComponent,ZDemoComponent,ZMarkdownComponent],
  declarations: [ZSectionComponent,ZDemoComponent,ZMarkdownComponent]
})
export class SectionModule {

}
