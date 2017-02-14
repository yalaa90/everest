import {Input} from '@angular/core';
export abstract class ABSInput {

  @Input()
  id:string;
  @Input()
  key:string;
  @Input()
  name:string;
  @Input()
  model:any;


  required:boolean;

  readOnly:boolean = false;
  hidden:boolean = false;


}
