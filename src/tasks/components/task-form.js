"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.createTask = new core_1.EventEmitter(false);
        this.title = '';
    }
    TaskFormComponent.prototype.clear = function () {
        this.title = '';
    };
    TaskFormComponent.prototype.submit = function () {
        var title = this.title.trim();
        if (title.length) {
            this.createTask.emit(title);
        }
        this.clear();
    };
    return TaskFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskFormComponent.prototype, "createTask", void 0);
TaskFormComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'task-form',
        styles: [
            require('./task-form.scss')
        ],
        template: "\n    <form class=\"task-form\" (ngSubmit)=\"submit()\" novalidate>\n      <input\n        [(ngModel)]=\"title\"\n        (keyup.escape)=\"clear()\"\n        autocomplete=\"off\"\n        autofocus\n        class=\"task-form__input\"\n        name=\"title\"\n        placeholder=\"\u0427\u0442\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u043E?\"\n        required\n        type=\"text\">\n    </form>\n  "
    })
], TaskFormComponent);
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.js.map