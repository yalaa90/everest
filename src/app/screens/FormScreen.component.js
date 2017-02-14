"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbsFormScreen_1 = require('./AbsFormScreen');
var FormScreen = (function (_super) {
    __extends(FormScreen, _super);
    function FormScreen(_formService) {
        _super.call(this);
        this._formService = _formService;
        this.isList = true;
    }
    FormScreen.prototype.submitForm = function (form) {
        var url = this.url + "save";
        var model = this._formService.getFormModel(form);
        this._formService.save(url, model);
    };
    FormScreen.prototype.reset = function (form) {
        debugger;
        if (this.isList == false) {
            form.reset();
        }
        else {
            var url = this.url + this.id + "/delete";
            this._formService.deleteRecord(url);
        }
    };
    FormScreen.prototype.changeShowType = function () {
        this.isList = !this.isList;
        if (this.isList)
            this.fetchData();
    };
    FormScreen.prototype.fetchData = function () {
        var _this = this;
        if (this.isList == false) {
            var url = this.url + this.id + "/show";
            this._formService.getOneModel(url, this);
        }
        else {
            var url = this.url + "show";
            this._formService._httpServices.getHttpService(url, null).subscribe(function (res) { return _this.dataSource = res; });
        }
    };
    FormScreen.prototype.onRecordDbClick = function (grid) {
        this.id = grid.data.id;
        this.isList = false;
        this.fetchData();
    };
    FormScreen.prototype.ngAfterContentInit = function () {
        this.fetchData();
    };
    FormScreen.prototype.onRecordSeleced = function (grid) {
        this.id = grid.data.id;
    };
    return FormScreen;
}(AbsFormScreen_1.AbsFormScreen));
exports.FormScreen = FormScreen;
//# sourceMappingURL=FormScreen.component.js.map