"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        this.signOut = new core_1.EventEmitter(false);
    }
    return AppHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "authenticated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "signOut", void 0);
AppHeaderComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'app-header',
        styles: [
            require('./app-header.scss')
        ],
        template: "\n    <header class=\"header\">\n      <div class=\"g-row\">\n        <div class=\"g-col\">\n          <h1 class=\"header__title\">\u0418\u0414, \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442</h1>\n    \n          <ul class=\"header__links\">\n            <li *ngIf=\"authenticated\"><a class=\"header__link\" (click)=\"signOut.emit()\" href=\"#\">\u0412\u044B\u0439\u0442\u0438</a></li>\n          </ul>\n        </div>\n      </div>\n    </header>\n  "
    })
], AppHeaderComponent);
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=app-header.js.map