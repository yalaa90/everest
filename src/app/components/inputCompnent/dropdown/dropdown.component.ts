/**
 * Created by yahia on 2/7/2017.
 */
import {Component, Input, forwardRef} from "@angular/core";
import {DROPDOWN_VALUE_ACCESSOR, Dropdown} from "primeng/primeng";
import {NG_VALUE_ACCESSOR, SelectControlValueAccessor, ControlValueAccessor} from "@angular/forms";
import {DropDownService} from "./dropdown.service";

export const DROP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DROPDOWN_VALUE_ACCESSOR),
  multi: true
}

/* NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => SelectControlValueAccessor), multi: true});*/

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR:any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};


export const _VALUE_ACCESSOR:any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownComponent),
  multi: true
};
@Component({
  selector: 'dropd',
  templateUrl: 'dropdown.component.html',
  providers: [DropDownService, _VALUE_ACCESSOR]
})
export class DropDownComponent implements ControlValueAccessor {


  @Input() items:any[];
  model;
  onChange = (_:any) => {
    debugger;
  };
  onTouched = () => {
  };

  _textValue="";

  get textValue() {
    return this._textValue;
  }

  set textValue(val:any) {
    this._textValue = val;
    this.onChange(this._textValue);

  }


  onChangeFn() {
    console.log(this.model);
  }

  writeValue(value:any):void {
    console.log("writevaue" + value);
    this.model = value;
    //this._renderer.s  etElementProperty(this._elementRef.nativeElement, 'selected', value);
  }

  registerOnChange(fn:(_:any) => {}):void {
    debugger;
    this.onChange = fn;
  }

  registerOnTouched(fn:() => {}):void {
    debugger
    this.onTouched = fn;
  }
}
