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
var testgen_service_1 = require('./testgen.service');
var FormScreen_component_1 = require('../../screens/FormScreen.component');
var TestgenComponent = (function (_super) {
    __extends(TestgenComponent, _super);
    function TestgenComponent(_TestgenService) {
        _super.call(this, _TestgenService);
        this._TestgenService = _TestgenService;
    }
    TestgenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'testgen',
            templateUrl: 'testgen.component.html'
        }), 
        __metadata('design:paramtypes', [testgen_service_1.TestgenService])
    ], TestgenComponent);
    return TestgenComponent;
}(FormScreen_component_1.FormScreen));
exports.TestgenComponent = TestgenComponent;
//# sourceMappingURL=testgen.component.js.map