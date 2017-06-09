"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var auth_1 = require("angularfire2/auth");
var database_1 = require("angularfire2/database");
var firebaseConfig = {
    apiKey: 'AIzaSyDVQ-j0Y14eKtt4Y1gmBhk8Sn67ijWzNGQ',
    authDomain: 'proekt-final.firebaseapp.com',
    databaseURL: 'https://proekt-final.firebaseio.com',
    storageBucket: 'proekt-final.appspot.com'
};
var FirebaseModule = (function () {
    function FirebaseModule() {
    }
    return FirebaseModule;
}());
FirebaseModule = __decorate([
    core_1.NgModule({
        imports: [
            auth_1.AngularFireAuthModule,
            database_1.AngularFireDatabaseModule,
            angularfire2_1.AngularFireModule.initializeApp(firebaseConfig, 'proekt-final')
        ]
    })
], FirebaseModule);
exports.FirebaseModule = FirebaseModule;
//# sourceMappingURL=index.js.map