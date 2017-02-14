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
var HttpServices_1 = require('../services/HttpServices');
var core_1 = require('@angular/core');
var FormScreenService = (function () {
    function FormScreenService(_httpServices) {
        this._httpServices = _httpServices;
    }
    FormScreenService.prototype.save = function (url, model) {
        debugger;
        this._httpServices.postHttpService(url, model, null).subscribe();
    };
    FormScreenService.prototype.deleteRecord = function (url) {
        this._httpServices.deleteHttpService(url, null);
    };
    FormScreenService.prototype.getFormModel = function (form) {
        var model = {};
        for (var control in form.controls) {
            var value = form.controls[control].value;
            if (value) {
                model[control] = value;
            }
        }
        return model;
    };
    FormScreenService.prototype.getOneModel = function (url, form) {
        var _this = this;
        this._httpServices.getHttpService(url, null).subscribe(function (res) {
            _this.setOneModel(res, form);
        });
    };
    FormScreenService.prototype.setOneModel = function (res, form) {
        if (res) {
            for (var item in res) {
                form[item] = res[item];
            }
        }
    };
    FormScreenService.prototype.getAllModels = function (url, dataSource) {
        this._httpServices.getHttpService(url, null).subscribe(function (res) {
            dataSource = res;
        });
    };
    FormScreenService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [HttpServices_1.HttpServices])
    ], FormScreenService);
    return FormScreenService;
}());
exports.FormScreenService = FormScreenService;
//# sourceMappingURL=formscreen.service.js.map