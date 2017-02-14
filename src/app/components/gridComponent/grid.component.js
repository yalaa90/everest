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
var GridComponent = (function () {
    function GridComponent() {
        this.recordClick = new core_1.EventEmitter();
        this.recordSelected = new core_1.EventEmitter();
    }
    GridComponent.prototype.onRecordClick = function (record) {
        this.recordClick.emit(record);
    };
    GridComponent.prototype.onRecordSelected = function (record) {
        this.recordSelected.emit(record.data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GridComponent.prototype, "dataSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GridComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridComponent.prototype, "selectionMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "recordClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "recordSelected", void 0);
    GridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid',
            templateUrl: 'grid.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map