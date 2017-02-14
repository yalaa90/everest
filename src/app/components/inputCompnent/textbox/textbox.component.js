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
var TextBox = (function () {
    function TextBox() {
        this.readOnly = false;
        this.hidden = false;
        ///methods
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(TextBox.prototype, "textValue", {
        get: function () {
            return this._textValue;
        },
        set: function (val) {
            this._textValue = val;
            this.propagateChange(this._textValue);
        },
        enumerable: true,
        configurable: true
    });
    TextBox.prototype.doit = function () {
        // console.log("value= " + this.textValue);
    };
    TextBox.prototype.dochange = function (event) {
        this.textValue = event.target.value;
    };
    TextBox.prototype.writeValue = function (value) {
        this.textValue = value;
    };
    TextBox.prototype._keypressNumber = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        // console.log(inputChar, e.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    TextBox.prototype._keypressDate = function (event) {
        var pattern = /[0-9\.\\\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        // console.log(inputChar, e.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    TextBox.prototype.registerOnChange = function (fn) {
        // console.log("registerOnChange " + fn);
        this.propagateChange = fn;
    };
    TextBox.prototype.registerOnTouched = function (fn) { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBox.prototype, "key", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBox.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextBox.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBox.prototype, "inputType", void 0);
    __decorate([
        core_1.Input('textValue'), 
        __metadata('design:type', Object)
    ], TextBox.prototype, "_textValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBox.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBox.prototype, "cols", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBox.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBox.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBox.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TextBox.prototype, "radioItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TextBox.prototype, "selectItems", void 0);
    TextBox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'text-box',
            templateUrl: "textbox.component.html",
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return TextBox; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TextBox);
    return TextBox;
}());
exports.TextBox = TextBox;
//# sourceMappingURL=textbox.component.js.map