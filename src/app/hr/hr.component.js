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
var core_1 = require('@angular/core');
var FormScreen_component_1 = require('../screens/FormScreen.component');
var HRTest = (function (_super) {
    __extends(HRTest, _super);
    function HRTest() {
        _super.apply(this, arguments);
    }
    HRTest.prototype.ngOnInit = function () {
        console.log(this.model[0].formUrl);
    };
    HRTest = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hr-test',
            template: "\n<form #form=\"ngForm\">\n  \n</form>\n \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HRTest);
    return HRTest;
}(FormScreen_component_1.FormScreen));
exports.HRTest = HRTest;
//# sourceMappingURL=hr.component.js.map