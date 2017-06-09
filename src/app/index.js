"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var auth_1 = require("../auth");
var firebase_1 = require("../firebase");
var tasks_1 = require("../tasks");
var app_1 = require("./components/app");
var app_header_1 = require("./components/app-header");
require("hammerjs");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_1.AppComponent
        ],
        declarations: [
            app_1.AppComponent,
            app_header_1.AppHeaderComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([], { useHash: false }),
            auth_1.AuthModule,
            firebase_1.FirebaseModule,
            animations_1.BrowserAnimationsModule,
            tasks_1.TasksModule,
            material_1.MaterialModule,
            material_1.MdToolbarModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
var PizzaPartyAppModule = (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());
exports.PizzaPartyAppModule = PizzaPartyAppModule;
//# sourceMappingURL=index.js.map