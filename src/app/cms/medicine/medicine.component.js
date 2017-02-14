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
var medicine_service_1 = require('./medicine.service');
var FormScreen_component_1 = require('../../screens/FormScreen.component');
var MedicineComponent = (function (_super) {
    __extends(MedicineComponent, _super);
    function MedicineComponent(_medicineService) {
        _super.call(this, _medicineService);
        this._medicineService = _medicineService;
        this.diseaseType = ['مرض1', 'مرض2'];
        this.medicineTypeItems = ['اقراص', 'حقن', 'مشروب'];
        console.log("MedicineComponent " + _medicineService);
        this.columns = [
            { field: 'code', header: 'code', filter: true },
            { field: 'name', header: 'name' },
            { field: 'mobile', header: 'mobile' }
        ];
        this.dataSource = [{ code: '1', name: 'name1' }, { code: '1', name: 'name1' }, { code: '1', name: 'name1' }, { code: '1', name: 'name1' }];
        this.url = "http://localhost:8080/HRMAPI/test/";
    }
    MedicineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'medicine',
            templateUrl: 'medicine.component.html'
        }), 
        __metadata('design:paramtypes', [medicine_service_1.MedicineService])
    ], MedicineComponent);
    return MedicineComponent;
}(FormScreen_component_1.FormScreen));
exports.MedicineComponent = MedicineComponent;
//# sourceMappingURL=medicine.component.js.map