"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AbsScreen_1 = require('./AbsScreen');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
(function (ShowType) {
    ShowType[ShowType["list"] = 0] = "list";
    ShowType[ShowType["form"] = 1] = "form";
})(exports.ShowType || (exports.ShowType = {}));
var ShowType = exports.ShowType;
var AbsFormScreen = (function (_super) {
    __extends(AbsFormScreen, _super);
    function AbsFormScreen() {
        _super.apply(this, arguments);
        this.model = [{ formUrl: 'hello' }];
    }
    AbsFormScreen.prototype.submitForm = function (form) { console.log("submitForm " + form); };
    ;
    AbsFormScreen.prototype.beforeSubmitForm = function (form) { console.log("beforeSubmitForm " + form); };
    ;
    AbsFormScreen.prototype.validate = function (form) { };
    ;
    AbsFormScreen.prototype.beforeVliadate = function (form) { };
    ;
    AbsFormScreen.prototype.changeShowType = function (list) { };
    ;
    AbsFormScreen.prototype.reset = function (form) { };
    AbsFormScreen.prototype.onLoad = function (form) { console.log(form); };
    ;
    __decorate([
        core_1.ViewChild('form'), 
        __metadata('design:type', forms_1.NgForm)
    ], AbsFormScreen.prototype, "form", void 0);
    return AbsFormScreen;
}(AbsScreen_1.AbsScreen));
exports.AbsFormScreen = AbsFormScreen;
//# sourceMappingURL=AbsFormScreen.js.map