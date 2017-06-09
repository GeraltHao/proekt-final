"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("angularfire2/database");
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.remove = new core_1.EventEmitter(false);
        this.update = new core_1.EventEmitter(false);
    }
    return TaskListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "filter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", database_1.FirebaseListObservable)
], TaskListComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskListComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskListComponent.prototype, "update", void 0);
TaskListComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'task-list',
        styles: [
            require('./task-list.scss')
        ],
        template: "\n    <ul class=\"task-filters\">\n      <li><a [class.active]=\"!filter\" [routerLink]=\"['/tasks']\">\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435</a></li>\n      <li><a [class.active]=\"filter === 'false'\" [routerLink]=\"['/tasks', {completed: false}]\">\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435</a></li>\n      <li><a [class.active]=\"filter === 'true'\" [routerLink]=\"['/tasks', {completed: true}]\">\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435</a></li>\n    </ul>\n    \n    <div class=\"task-list\">\n      <task-item\n        *ngFor=\"let task of tasks | async\"\n        [task]=\"task\"\n        (remove)=\"remove.emit(task)\"\n        (update)=\"update.emit({task: task, changes: $event})\"></task-item>\n    </div>\n  "
    })
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.js.map