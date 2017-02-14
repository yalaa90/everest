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
var examination_service_1 = require('./examination.service');
var FormScreen_component_1 = require('../../../screens/FormScreen.component');
var ExaminationComponent = (function (_super) {
    __extends(ExaminationComponent, _super);
    function ExaminationComponent(_examinationService) {
        _super.call(this, _examinationService);
        this._examinationService = _examinationService;
        this.note = '';
        this.periodItems = ['صباحية', 'مسائية'];
        this.examTypeItem = ['كشف', 'اعادة'];
    }
    ExaminationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'examination',
            templateUrl: 'examination.component.html'
        }), 
        __metadata('design:paramtypes', [examination_service_1.ExaminationService])
    ], ExaminationComponent);
    return ExaminationComponent;
}(FormScreen_component_1.FormScreen));
exports.ExaminationComponent = ExaminationComponent;
//# sourceMappingURL=examination.component.js.map