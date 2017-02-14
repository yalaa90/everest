import {Component , OnInit} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {FormScreen} from '../screens/FormScreen.component';
@Component({
    moduleId:module.id,
    selector:'hr-test',
    template:`
      <!--<form [formGroup]="form">
          <text-box inputType="textBox" formControlName="code" > </text-box>
       <input type="checkbox" formControlName="nameControl">
       {{form.nameControl}}
      </form>-->
      
      <form #form="ngForm">
      <input type="checkbox" name="check" [(ngModel)]="check">
      here is check {{check}}
  </form>
    `
})
export class HRTest   {
  form: FormGroup;
  check=false;
  code:string;
  constructor(private fb:FormBuilder) {
    this.form= fb.group({
      nameControl: '',
      code:''
    })

  }



}
