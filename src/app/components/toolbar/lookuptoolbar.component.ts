import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lu-bar',
  templateUrl: 'lookuptoolbar.component.html'
})
export class LookUpToolBar {


  @Output() submit = new EventEmitter();

  @Output() isList = new EventEmitter();

  @Output() delete = new EventEmitter();

  @Output() new = new EventEmitter();

  @Output() print = new EventEmitter();

  submitFn() {
    this.submit.emit();
  }

  deleteFn() {

    this.delete.emit();
  }

  newFn() {

    this.new.emit();
  }

  printFn() {

    this.print.emit();
  }

  changeShowTypeFn() {

    this.isList.emit();
  }
}
