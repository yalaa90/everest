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
var Surgery_service_1 = require('./Surgery.service');
var FormScreen_component_1 = require('../../screens/FormScreen.component');
var SurgeryComponent = (function (_super) {
    __extends(SurgeryComponent, _super);
    function SurgeryComponent(_SurgeryService) {
        _super.call(this, _SurgeryService);
        this._SurgeryService = _SurgeryService;
    }
    SurgeryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Surgery',
            templateUrl: 'Surgery.component.html'
        }), 
        __metadata('design:paramtypes', [Surgery_service_1.SurgeryService])
    ], SurgeryComponent);
    return SurgeryComponent;
}(FormScreen_component_1.FormScreen));
exports.SurgeryComponent = SurgeryComponent;
//# sourceMappingURL=Surgery.component.js.map