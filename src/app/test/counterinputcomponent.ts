import {Component, Input, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {FormScreenService} from '../screens/formscreen.service';
@Component({
    selector: 'counter-input',
    template:` <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CounterInputComponent),
            multi: true
        }
    ]
})
export class CounterInputComponent implements ControlValueAccessor {

    constructor(private serv: FormScreenService) {
        console.log(serv);
    }

    @Input('counterValue') _counterValue = 0;
    propagateChange = (_: any) => { };
    get counterValue() {
         
        return this._counterValue;
    }

    set counterValue(val) {
         
        this._counterValue = val;
        this.propagateChange(this._counterValue);
    }
    increment() {
        this.counterValue++;

    }

    decrement() {
        this.counterValue--;
    }

    writeValue(value: any) {
        console.log('writeValue');
        if (value !== undefined) {
            this.counterValue = value;
        }
    }
    registerOnChange(fn: any) {
        console.log('registerOnChange');
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {

    }
}