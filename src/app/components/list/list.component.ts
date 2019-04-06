import { Component, Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();

  handleDelete(theApt: object){
    //console.log(theApt);
    this.deleteEvt.emit(theApt);
  }
  
}
