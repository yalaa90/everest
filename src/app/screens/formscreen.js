"use strict";
var FormScreenService = (function () {
    function FormScreenService() {
    }
    FormScreenService.prototype.save = function (url, model) {
        this._subscriber.postSubscriber(url, model, null);
    };
    return FormScreenService;
}());
exports.FormScreenService = FormScreenService;
//# sourceMappingURL=formscreen.js.map