"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth-service");
var SignInComponent = (function () {
    function SignInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SignInComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.postSignIn = function () {
        this.router.navigate(['/tasks']);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        styles: [
            require('./sign-in.scss')
        ],
        template: "\n    <div class=\"g-row sign-in\">\n      <div class=\"g-col\">\n        <h1 class=\"sign-in__heading\">\u0412\u0445\u043E\u0434</h1>\n        <button class=\"sign-in__button\" (click)=\"signInWithGoogle()\" type=\"button\">\n        <img src=\"common/google.png\" width=\"35\" height=\"35\">\n        \u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google</button>\n        <button class=\"sign-in__button\" (click)=\"signInWithFacebook()\" type=\"button\">\n        <img src=\"common/facebook.png\" width=\"35\" height=\"35\">\n        \u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Facebook</button>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.js.map