"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var formscreen_service_1 = require('../screens/formscreen.service');
var CounterInputComponent = (function () {
    function CounterInputComponent(serv) {
        this.serv = serv;
        this._counterValue = 0;
        this.propagateChange = function (_) { };
        console.log(serv);
    }
    Object.defineProperty(CounterInputComponent.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(this._counterValue);
        },
        enumerable: true,
        configurable: true
    });
    CounterInputComponent.prototype.increment = function () {
        this.counterValue++;
    };
    CounterInputComponent.prototype.decrement = function () {
        this.counterValue--;
    };
    CounterInputComponent.prototype.writeValue = function (value) {
        console.log('writeValue');
        if (value !== undefined) {
            this.counterValue = value;
        }
    };
    CounterInputComponent.prototype.registerOnChange = function (fn) {
        console.log('registerOnChange');
        this.propagateChange = fn;
    };
    CounterInputComponent.prototype.registerOnTouched = function (fn) {
    };
    __decorate([
        core_1.Input('counterValue'), 
        __metadata('design:type', Object)
    ], CounterInputComponent.prototype, "_counterValue", void 0);
    CounterInputComponent = __decorate([
        core_1.Component({
            selector: 'counter-input',
            template: " <button (click)=\"increment()\">+</button>\n    {{counterValue}}\n    <button (click)=\"decrement()\">-</button>",
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CounterInputComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [formscreen_service_1.FormScreenService])
    ], CounterInputComponent);
    return CounterInputComponent;
}());
exports.CounterInputComponent = CounterInputComponent;
//# sourceMappingURL=CounterInputComponent.js.map