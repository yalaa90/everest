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
var I18N = (function () {
    function I18N() {
        this.wolves = 0;
        this.gender = 'f';
        this.fly = true;
        this.logo = 'https://angular.io/resources/images/logos/angular2/angular.png';
    }
    I18N.prototype.inc = function (i) {
        this.wolves = Math.min(5, Math.max(0, this.wolves + i));
    };
    I18N.prototype.male = function () { this.gender = 'm'; };
    I18N.prototype.female = function () { this.gender = 'f'; };
    I18N = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'incom',
            templateUrl: 'i18n.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], I18N);
    return I18N;
}());
exports.I18N = I18N;
//# sourceMappingURL=i18n.component.js.map