import {Component, Input, OnInit, forwardRef, AfterViewInit, Provider, Renderer, ElementRef} from '@angular/core';
import {ABSInput} from '../ABSInput';
import {InputTypes} from '../InputTypes';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

@Component({

  selector: 'text-box',
  templateUrl: `./textbox.component.html`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBox),
      multi: true
    }
  ]

})
export class TextBox  extends ABSInput implements ControlValueAccessor {
  ///propties


  // @Input()
  // key:string;
  // @Input()
  // name:string;
  // @Input()
  // model:any;

  @Input()
  inputType:string;

  @Input('textValue') _textValue:any;
  pattern:string;
 /* required:boolean;

  readOnly:boolean = false;
  hidden:boolean = false;*/
  @Input() rows:number;
  @Input() cols:number;
  @Input() min:number;
  @Input() max:number;
  @Input() maxlength:number;

  @Input() radioItems:string[];

  @Input() selectItems:string[];
  ///methods

  propagateChange = (_:any) => {
  };

  get textValue() {
    return this._textValue;
  }

  set textValue(val:any) {
    this._textValue = val;
    this.propagateChange(this._textValue);
  }

  doit():void {

    // console.log("value= " + this.textValue);
  }

  dochange(event:any) {

    this.textValue = event.target.value
  }

  dochangeCheck(event:any) {

    this.textValue = event.target.checked;
  }

  writeValue(value:any):void {

    this.textValue = value;


  }

  _keypressNumber(event:any) {

    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  _keypressDate(event:any) {

    const pattern = /[0-9\.\\\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  registerOnChange(fn:(_:any) => void):void {
    // console.log("registerOnChange " + fn);
    this.propagateChange = fn;
  }

  registerOnTouched(fn:(_:any) => void):void {
  }

  checkBoxConvition() {
    if (this._textValue == 'on') this.textValue == 'True';
    else this.textValue == 'false';
  }
}
