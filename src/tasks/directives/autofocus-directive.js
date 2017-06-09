"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AutoFocusDirective = (function () {
    function AutoFocusDirective(element) {
        this.element = element;
    }
    AutoFocusDirective.prototype.ngOnInit = function () {
        this.element.nativeElement.focus();
    };
    return AutoFocusDirective;
}());
AutoFocusDirective = __decorate([
    core_1.Directive({
        selector: '[autoFocus]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AutoFocusDirective);
exports.AutoFocusDirective = AutoFocusDirective;
//# sourceMappingURL=autofocus-directive.js.map