webpackJsonp([4],{

<<<<<<< HEAD
/***/ 137:
=======
/***/ 116:
>>>>>>> bluetoothConnection
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(70);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD



/**
 * Generated class for the TestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestHomePage = (function () {
    function TestHomePage(formBuilder, afAuth, navCtrl, navParams, fb) {
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.settingsForm = formBuilder.group({
            emergencyNumber: [''],
            country: ['']
        });
        this.fb.getSettings();
    }
    TestHomePage.prototype.logout = function () {
        this.afAuth.logOut();
        this.navCtrl.push('LoginPage');
    };
    TestHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestHomePage');
        console.log("profile in homepage: ", this.fb.getUserProfile());
    };
    TestHomePage.prototype.save = function () {
        this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country);
    };
    TestHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-home',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\test-home\test-home.html"*/'<!--\n\n  Generated template for the TestHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>testHome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button type="submit" (click)="logout()">Log out</button>\n\n\n\n\n\n<form [formGroup]="settingsForm" (submit)="save()">\n\n  <ion-list style="position:absolute; top:10%; left:20%;">\n\n    <ion-item>\n\n      <ion-label floating>Family emergency number</ion-label>\n\n      <ion-input  type="text" formControlName="emergencyNumber"></ion-input>\n\n    </ion-item>\n\n    \n\n\n\n    <ion-item>\n\n      <ion-label>Current country</ion-label>\n\n      <ion-select formControlName="country">\n\n        <ion-option value="België">België</ion-option>\n\n        <ion-option value="Suomi">Suomi</ion-option>\n\n        <ion-option value="Deutschland">Deutschland</ion-option>\n\n        <ion-option value="Nederland">Nederland</ion-option>\n\n        <ion-option value="France">France</ion-option>\n\n        <ion-option value="Lëtzebuerg">Lëtzebuerg</ion-option>\n\n        <ion-option value="Portugal">Portugal</ion-option>\n\n        <ion-option value="Sverige">Sverige</ion-option>\n\n        <ion-option value="Great Britian">Great Britian</ion-option>\n\n        <ion-option value="România">România</ion-option>\n\n        <ion-option value="Italia">Italia</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n  \n\n    <button type="submit"  style="position:absolute; top:105%; background-color:lightblue; width:100%" ion-button>Save</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\test-home\test-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], TestHomePage);
    return TestHomePage;
}());

//# sourceMappingURL=test-home.js.map

/***/ }),

/***/ 140:
=======
var AuthenticatieProvider = (function () {
    function AuthenticatieProvider() {
    }
    AuthenticatieProvider.prototype.LoginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthenticatieProvider.prototype.CreateNewUser = function (email, password, country, dateOfBirth) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .auth().createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/userProfile').child(newUser.uid).set({ email: email, country: country, dateOfBirth: dateOfBirth });
        });
    };
    AuthenticatieProvider.prototype.logOut = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthenticatieProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthenticatieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthenticatieProvider);
    return AuthenticatieProvider;
}());

//# sourceMappingURL=authenticatie.js.map

/***/ }),

/***/ 130:
>>>>>>> bluetoothConnection
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authenticatie_authenticatie__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_account_create_account__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(89);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(loadingCtrl, afAuth, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.LoginUser(user.email, user.password).then(function () {
                                loading.dismiss();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        loading.dismiss();
                        alert_1 = this.alertCtrl.create({
                            message: error_1.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_account_create_account__["a" /* CreateAccountPage */]);
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\login\login.html"*/'<ion-header style="background-color:lightblue;">\n\n  <img src="assets/imgs/alcometer.png" style="padding-top:20%;">\n\n</ion-header>\n\n\n\n<h1 style="position:absolute;left:40%; top:35%;">Login</h1>\n\n\n\n<ion-list style="position:absolute; top:45%; left:20%;">\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n  <ion-label><a (click)="resetPassword()" style="font-size:10px;margin-left:7%">Forgot password?</a></ion-label>\n\n  <button style="position:absolute; top:100%; background-color:lightblue; width:100%" (click)="login(user)" ion-button>Sign in</button>\n\n</ion-list>\n\n\n\n  <img src="assets/imgs/google.png" style="margin-top:145%;margin-left:20%; width:220px;height:50px;">\n\n  <button style="background-color:lightblue; margin-left:20.5%; width:216px;" (click)="createAccount()" ion-button>Create account</button>\n\n\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__ = __webpack_require__(116);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, navParams, authProvider, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['']
        });
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAccountPage');
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        this.authProvider.resetPassword(this.resetPasswordForm.value.email);
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\reset-password\reset-password.html"*/'\n\n<ion-header style="background-color:lightblue;">\n\n    <img src="assets/imgs/alcometer.png">\n\n  </ion-header>\n\n\n\n<form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n\n    <ion-list  style="position:absolute; top:45%; left:20%;">\n\n        <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input  type="text" formControlName="email"></ion-input>\n\n        </ion-item>\n\n        <button style="position:absolute; top:100%; background-color:lightblue; width:100%" ion-button>Reset Password</button>\n\n    </ion-list>\n\n    \n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BluetoothProvider = (function () {
    //private macAddress = "98:D3:31:FD:2A:CC"; mac adres van bluetoothmodule van Elke
    function BluetoothProvider(bluetoothSerial, alertCtrl) {
        var _this = this;
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        this.permissions = ["BLUETOOTH", "BLUETOOTH_ADMIN", "BLUETOOTH_PRIVILEGED"];
        this.availableDevices = [];
        this.bluetoothSerial.isEnabled().then(function () {
            console.log('hurray it bluetooth is on');
        }, function (error) {
            console.log(error);
            _this.bluetoothSerial.enable().then(function (resp) {
                console.log("bluetooth is enabled now");
            }, function (error) {
                console.log('bluetooth was not enabled');
            });
        });
    }
    BluetoothProvider.prototype.connectMAC = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bluetoothSerial.connect(device.id).subscribe(function (rspo) {
                            console.log("connected to HC-06 device", rspo);
                            _this.connectedDevice = device;
                        }, function (error) {
                            console.log("error", error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothProvider.prototype.startScanning = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scanning = true;
                        i = 0;
                        return [4 /*yield*/, this.bluetoothSerial.setDeviceDiscoveredListener().forEach(function (device) {
                                console.log(device.id);
                                _this.availableDevices[i] = device;
                                console.log("unpaired devices: " + _this.availableDevices[i].name);
                                i++;
                            })];
                    case 1:
                        _a.sent();
                        this.bluetoothSerial.discoverUnpaired();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothProvider.prototype.selectDevice = function (device) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Connect',
            message: 'Do you want to connect with?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: function () {
                        if (_this.connectedDevice != null) {
                            if (device.id == _this.connectedDevice.id) {
                                _this.bluetoothSerial.disconnect();
                            }
                        }
                        _this.connectMAC(device);
                    }
                }
            ]
        });
        alert.present();
    };
    BluetoothProvider.prototype.disconnect = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Disconnect?',
            message: 'Do you want to Disconnect?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Disconnect',
                    handler: function () {
                        _this.bluetoothSerial.disconnect();
                        _this.connectedDevice = null;
                    }
                }
            ]
        });
        alert.present();
    };
    BluetoothProvider.prototype.receiveData = function () {
        var _this = this;
        this.bluetoothSerial.readUntil(";").then(function (data) { console.log(_this.meting); _this.meting = data; });
    };
    BluetoothProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], BluetoothProvider);
    return BluetoothProvider;
}());

//# sourceMappingURL=bluetooth.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* unused harmony export matchOtherValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalInfoPage = (function () {
    function PersonalInfoPage(loadingCtrl, alert, navCtrl, navParams, formBuilder, fb, afAuth) {
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.afAuth = afAuth;
        this.changeAccountForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([matchOtherValidator('password')])],
            country: [''],
            dateOfBirth: ['']
        });
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
    };
    PersonalInfoPage.prototype.logout = function () {
        this.afAuth.logOut();
        this.navCtrl.push('LoginPage');
    };
    PersonalInfoPage.prototype.changeUser = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, error_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fb.saveUserprofile(this.changeAccountForm.value.email, this.changeAccountForm.value.password, this.changeAccountForm.value.country, this.changeAccountForm.value.dateOfBirth)];
                    case 1:
                        _a.sent();
                        loading.dismiss();
                        alert_1 = this.alert.create({
                            message: "Changes saved succesfully",
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_1.present();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        loading.dismiss();
                        alert_2 = this.alert.create({
                            message: error_1.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_2.present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PersonalInfoPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Confirm Changes',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create();
                        loading.present();
                        var user = _this.afAuth.angularfire.auth.currentUser;
                        var credential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.EmailAuthProvider.credential(user.email, data.password);
                        user.reauthenticateWithCredential(credential).then(function () {
                            _this.changeUser(loading);
                        }).catch(function (error) {
                            //console.log("authentication failure");
                            loading.dismiss();
                            var alert = _this.alert.create({
                                message: error.message,
                                buttons: [{ text: 'Ok', role: 'cancel' }]
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PersonalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-info',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\personal-info\personal-info.html"*/'<!--\n\n  Generated template for the PersonalInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>personalInfo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <button ion-button type="submit" (click)="logout()">Log out</button>\n\n\n\n  <form [formGroup]="changeAccountForm" (submit)="presentPrompt()">\n\n    <ion-list style="position:absolute; top:10%; left:20%;">\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input  type="text" formControlName="email"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating> Confirm password</ion-label>\n\n        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n\n      </ion-item>    \n\n\n\n      <ion-item>\n\n        <ion-label>Country</ion-label>\n\n        <ion-select formControlName="country">\n\n          <ion-option value="België">België</ion-option>\n\n          <ion-option value="Suomi">Suomi</ion-option>\n\n          <ion-option value="Deutschland">Deutschland</ion-option>\n\n          <ion-option value="Nederland">Nederland</ion-option>\n\n          <ion-option value="France">France</ion-option>\n\n          <ion-option value="Lëtzebuerg">Lëtzebuerg</ion-option>\n\n          <ion-option value="Portugal">Portugal</ion-option>\n\n          <ion-option value="Sverige">Sverige</ion-option>\n\n          <ion-option value="Great Britian">Great Britian</ion-option>\n\n          <ion-option value="România">România</ion-option>\n\n          <ion-option value="Italia">Italia</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n    \n\n      <ion-item>\n\n        <ion-label>Date of birth</ion-label>\n\n        <ion-datetime formControlName="dateOfBirth" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <button type="submit"  style="position:absolute; top:105%; background-color:lightblue; width:100%" ion-button  [disabled]="!changeAccountForm.valid" >Save</button>\n\n      </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\personal-info\personal-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */]])
    ], PersonalInfoPage);
    return PersonalInfoPage;
}());

function matchOtherValidator(otherControlName) {
    return function (control) {
        var otherControl = control.root.get(otherControlName);
        if (otherControl) {
            var subscription_1 = otherControl
                .valueChanges
                .subscribe(function () {
                control.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return (otherControl && control.value !== otherControl.value) ? { match: true } : null;
    };
}
//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallPage = (function () {
    function CallPage(navCtrl, navParams, Noodnummer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Noodnummer = Noodnummer;
    }
    CallPage.prototype.Emergency = function () {
        this.Noodnummer.callNumber("0495142810", true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    CallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-call',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\call\call.html"*/'<!--\n\n  Generated template for the CallPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>call</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button (click)=\'Emergency()\' ion-button>Button</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\call\call.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], CallPage);
    return CallPage;
}());

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* unused harmony export matchOtherValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_home_test_home__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAccountPage = (function () {
    function CreateAccountPage(navCtrl, navParams, authProvider, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.createAccountForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, matchOtherValidator('password')])],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            agree: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]
        });
    }
    CreateAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAccountPage');
    };
    CreateAccountPage.prototype.signUpUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.authProvider.CreateNewUser(this.createAccountForm.value.email, this.createAccountForm.value.password, this.createAccountForm.value.country, this.createAccountForm.value.dateOfBirth)
                                .then(function () {
                                loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__test_home_test_home__["a" /* TestHomePage */]);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        loading.dismiss();
                        alert_1 = this.alertCtrl.create({
                            message: error_1.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-account',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\create-account\create-account.html"*/'\n\n<ion-header style="background-color:lightblue;">\n\n  <img src="assets/imgs/alcometer.png">\n\n</ion-header>\n\n\n\n<ion-content padding class="auth-page">\n\n    <h1 style="position:absolute; left:25%; top:5%">Create Account</h1>\n\n<form [formGroup]="createAccountForm" (submit)="signUpUser()">\n\n<ion-list style="position:absolute; top:10%; left:20%;">\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input  type="email" formControlName="email" ></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" formControlName="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating> Confirm password</ion-label>\n\n    <ion-input type="password" formControlName="confirmPassword"></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Country</ion-label>\n\n    <ion-select formControlName="country">\n\n      <ion-option value="België">België</ion-option>\n\n      <ion-option value="Suomi">Suomi</ion-option>\n\n      <ion-option value="Deutschland">Deutschland</ion-option>\n\n      <ion-option value="Nederland">Nederland</ion-option>\n\n      <ion-option value="France">France</ion-option>\n\n      <ion-option value="Lëtzebuerg">Lëtzebuerg</ion-option>\n\n      <ion-option value="Portugal">Portugal</ion-option>\n\n      <ion-option value="Sverige">Sverige</ion-option>\n\n      <ion-option value="Great Britian">Great Britian</ion-option>\n\n      <ion-option value="România">România</ion-option>\n\n      <ion-option value="Italia">Italia</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Date of birth</ion-label>\n\n    <ion-datetime formControlName="dateOfBirth" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label style="font-size:0.7em;">I agree to share my information.</ion-label>\n\n    <ion-checkbox formControlName = "agree"></ion-checkbox>\n\n  </ion-item>\n\n\n\n\n\n  <button type="submit"  style="position:absolute; top:105%; background-color:lightblue; width:100%" ion-button [disabled]="!createAccountForm.valid" >Create Account</button>\n\n  </ion-list>\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\create-account\create-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

function matchOtherValidator(otherControlName) {
    return function (control) {
        var otherControl = control.root.get(otherControlName);
        if (otherControl) {
            var subscription_1 = otherControl
                .valueChanges
                .subscribe(function () {
                control.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return (otherControl && control.value !== otherControl.value) ? { match: true } : null;
    };
}
//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(formBuilder, bt, navCtrl, navParams, fb) {
        this.formBuilder = formBuilder;
        this.bt = bt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.availableDevices = [];
        this.settingsForm = formBuilder.group({
            emergencyNumber: [''],
            country: ['']
        });
        this.fb.getSettings();
        console.log("profile in settingspage: ", this.fb.getUserProfile());
    }
    SettingsPage.prototype.save = function () {
        this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country);
    };
    SettingsPage.prototype.startScanning = function () {
        this.bt.startScanning();
        this.availableDevices = this.bt.availableDevices;
    };
    SettingsPage.prototype.disconnect = function () {
        this.bt.disconnect();
    };
    SettingsPage.prototype.selectDevice = function (device) {
        this.bt.selectDevice(device);
        this.connectedDevice = this.bt.connectedDevice;
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list padding>\n\n    <button ion-button block (click)="startScanning()">scan</button>\n\n    <ion-list-header>\n\n      availlable Devices\n\n    </ion-list-header>\n\n    <ion-item *ngFor=\'let device of availableDevices\'>\n\n      <span (click)="selectDevice(device)">\n\n        {{device.name}}\n\n      </span>\n\n    </ion-item>\n\n    <button ion-button block (click)="disconnect()">Disconnect</button>\n\n    <ion-list-header>\n\n      Connected Device\n\n    </ion-list-header>\n\n    <ion-item *ngIf="connectedDevice">\n\n      {{connectedDevice.name}}\n\n    </ion-item>\n\n    <ion-spinner name="crescent" *ngIf="scanning"></ion-spinner>\n\n    \n\n  \n\n  \n\n  <form [formGroup]="settingsForm" (submit)="save()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Family emergency number</ion-label>\n\n        <ion-input  type="text" formControlName="emergencyNumber"></ion-input>\n\n      </ion-item>\n\n      \n\n  \n\n      <ion-item>\n\n        <ion-label>Current country</ion-label>\n\n        <ion-select formControlName="country">\n\n          <ion-option value="België">België</ion-option>\n\n          <ion-option value="Suomi">Suomi</ion-option>\n\n          <ion-option value="Deutschland">Deutschland</ion-option>\n\n          <ion-option value="Nederland">Nederland</ion-option>\n\n          <ion-option value="France">France</ion-option>\n\n          <ion-option value="Lëtzebuerg">Lëtzebuerg</ion-option>\n\n          <ion-option value="Portugal">Portugal</ion-option>\n\n          <ion-option value="Sverige">Sverige</ion-option>\n\n          <ion-option value="Great Britian">Great Britian</ion-option>\n\n          <ion-option value="România">România</ion-option>\n\n          <ion-option value="Italia">Italia</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n    \n\n      <button type="submit"  style="position:absolute; top:105%; background-color:lightblue; width:100%" ion-button>Save</button>\n\n      </ion-list>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = (function () {
    function StatisticsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\statistics\statistics.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Statistics</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\statistics\statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/call/call.module": [
		705,
		3
	],
	"../pages/create-account/create-account.module": [
		706,
		2
	],
	"../pages/login/login.module": [
		289
	],
	"../pages/main/main.module": [
		420
	],
	"../pages/personal-info/personal-info.module": [
		421
	],
	"../pages/reset-password/reset-password.module": [
		422
	],
	"../pages/settings/settings.module": [
		707,
		1
	],
	"../pages/statistics/statistics.module": [
		708,
		0
	],
	"../pages/test-home/test-home.module": [
		423
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthenticatieProvider = (function () {
    function AuthenticatieProvider(angularfire) {
        this.angularfire = angularfire;
    }
    AuthenticatieProvider.prototype.LoginUser = function (email, password) {
        return this.angularfire.auth.signInWithEmailAndPassword(email, password);
    };
    AuthenticatieProvider.prototype.CreateNewUser = function (email, password, country, dateOfBirth) {
        return this.angularfire
            .auth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/userProfile').child(newUser.uid).set({ email: email, country: country, dateOfBirth: dateOfBirth })
                .catch(function (error) {
                console.log("Error creating new user: ", error);
            });
        });
    };
    AuthenticatieProvider.prototype.logOut = function () {
        return this.angularfire.auth.signOut();
    };
    AuthenticatieProvider.prototype.resetPassword = function (email) {
        return this.angularfire.auth.sendPasswordResetEmail(email);
    };
    AuthenticatieProvider.prototype.getCurrentuserID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.angularfire.authState.subscribe(function (user) {
                            if (user)
                                _this.userId = user.uid;
                            else
                                _this.userId = null;
                            console.log("userId in authProvider: ", _this.userId);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.userId];
                }
            });
        });
    };
    AuthenticatieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthenticatieProvider);
    return AuthenticatieProvider;
}());

//# sourceMappingURL=authenticatie.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function() { return PersonalInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_info__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalInfoPageModule = (function () {
    function PersonalInfoPageModule() {
    }
    PersonalInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_info__["a" /* PersonalInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_info__["a" /* PersonalInfoPage */]),
            ],
        })
    ], PersonalInfoPageModule);
    return PersonalInfoPageModule;
}());

//# sourceMappingURL=personal-info.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
            ],
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestHomePageModule", function() { return TestHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_home__ = __webpack_require__(137);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_home__ = __webpack_require__(82);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestHomePageModule = (function () {
    function TestHomePageModule() {
    }
    TestHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_home__["a" /* TestHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_home__["a" /* TestHomePage */]),
            ],
        })
    ], TestHomePageModule);
    return TestHomePageModule;
}());

//# sourceMappingURL=test-home.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(486);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_call_call__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_firebase_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_create_account_create_account__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authenticatie_authenticatie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_test_home_test_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_test_home_test_home_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_reset_password_reset_password_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reset_password_reset_password__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_main_main__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_statistics_statistics__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_personal_info_personal_info__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_bluetooth_bluetooth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_main_main_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_personal_info_personal_info_module__ = __webpack_require__(421);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_firebase_firebase__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_account_create_account__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_authenticatie_authenticatie__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_test_home_test_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_test_home_test_home_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_main_main__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_statistics_statistics__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_personal_info_personal_info__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_bluetooth_bluetooth__ = __webpack_require__(265);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var firebaseConfig = {
    apiKey: "AIzaSyCGbCzagTiX3RZmGXYct2YaJSZQPMcziac",
    authDomain: "alcometer-720c2.firebaseapp.com",
    databaseURL: "https://alcometer-720c2.firebaseio.com",
    projectId: "alcometer-720c2",
    storageBucket: "alcometer-720c2.appspot.com",
    messagingSenderId: "211742343446"
};
__WEBPACK_IMPORTED_MODULE_21_firebase__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_call_call__["a" /* CallPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/call/call.module#CallPageModule', name: 'CallPage', segment: 'call', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-account/create-account.module#CreateAccountPageModule', name: 'page-create-account', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'page-reset-password', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-home/test-home.module#TestHomePageModule', name: 'TestHomePage', segment: 'test-home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_test_home_test_home_module__["TestHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_reset_password_reset_password_module__["ResetPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_main_main_module__["MainPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_personal_info_personal_info_module__["PersonalInfoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_test_home_test_home__["a" /* TestHomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_call_call__["a" /* CallPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 297,
	"./af.js": 297,
	"./ar": 298,
	"./ar-dz": 299,
	"./ar-dz.js": 299,
	"./ar-kw": 300,
	"./ar-kw.js": 300,
	"./ar-ly": 301,
	"./ar-ly.js": 301,
	"./ar-ma": 302,
	"./ar-ma.js": 302,
	"./ar-sa": 303,
	"./ar-sa.js": 303,
	"./ar-tn": 304,
	"./ar-tn.js": 304,
	"./ar.js": 298,
	"./az": 305,
	"./az.js": 305,
	"./be": 306,
	"./be.js": 306,
	"./bg": 307,
	"./bg.js": 307,
	"./bm": 308,
	"./bm.js": 308,
	"./bn": 309,
	"./bn.js": 309,
	"./bo": 310,
	"./bo.js": 310,
	"./br": 311,
	"./br.js": 311,
	"./bs": 312,
	"./bs.js": 312,
	"./ca": 313,
	"./ca.js": 313,
	"./cs": 314,
	"./cs.js": 314,
	"./cv": 315,
	"./cv.js": 315,
	"./cy": 316,
	"./cy.js": 316,
	"./da": 317,
	"./da.js": 317,
	"./de": 318,
	"./de-at": 319,
	"./de-at.js": 319,
	"./de-ch": 320,
	"./de-ch.js": 320,
	"./de.js": 318,
	"./dv": 321,
	"./dv.js": 321,
	"./el": 322,
	"./el.js": 322,
	"./en-au": 323,
	"./en-au.js": 323,
	"./en-ca": 324,
	"./en-ca.js": 324,
	"./en-gb": 325,
	"./en-gb.js": 325,
	"./en-ie": 326,
	"./en-ie.js": 326,
	"./en-il": 327,
	"./en-il.js": 327,
	"./en-nz": 328,
	"./en-nz.js": 328,
	"./eo": 329,
	"./eo.js": 329,
	"./es": 330,
	"./es-do": 331,
	"./es-do.js": 331,
	"./es-us": 332,
	"./es-us.js": 332,
	"./es.js": 330,
	"./et": 333,
	"./et.js": 333,
	"./eu": 334,
	"./eu.js": 334,
	"./fa": 335,
	"./fa.js": 335,
	"./fi": 336,
	"./fi.js": 336,
	"./fo": 337,
	"./fo.js": 337,
	"./fr": 338,
	"./fr-ca": 339,
	"./fr-ca.js": 339,
	"./fr-ch": 340,
	"./fr-ch.js": 340,
	"./fr.js": 338,
	"./fy": 341,
	"./fy.js": 341,
	"./gd": 342,
	"./gd.js": 342,
	"./gl": 343,
	"./gl.js": 343,
	"./gom-latn": 344,
	"./gom-latn.js": 344,
	"./gu": 345,
	"./gu.js": 345,
	"./he": 346,
	"./he.js": 346,
	"./hi": 347,
	"./hi.js": 347,
	"./hr": 348,
	"./hr.js": 348,
	"./hu": 349,
	"./hu.js": 349,
	"./hy-am": 350,
	"./hy-am.js": 350,
	"./id": 351,
	"./id.js": 351,
	"./is": 352,
	"./is.js": 352,
	"./it": 353,
	"./it.js": 353,
	"./ja": 354,
	"./ja.js": 354,
	"./jv": 355,
	"./jv.js": 355,
	"./ka": 356,
	"./ka.js": 356,
	"./kk": 357,
	"./kk.js": 357,
	"./km": 358,
	"./km.js": 358,
	"./kn": 359,
	"./kn.js": 359,
	"./ko": 360,
	"./ko.js": 360,
	"./ky": 361,
	"./ky.js": 361,
	"./lb": 362,
	"./lb.js": 362,
	"./lo": 363,
	"./lo.js": 363,
	"./lt": 364,
	"./lt.js": 364,
	"./lv": 365,
	"./lv.js": 365,
	"./me": 366,
	"./me.js": 366,
	"./mi": 367,
	"./mi.js": 367,
	"./mk": 368,
	"./mk.js": 368,
	"./ml": 369,
	"./ml.js": 369,
	"./mn": 370,
	"./mn.js": 370,
	"./mr": 371,
	"./mr.js": 371,
	"./ms": 372,
	"./ms-my": 373,
	"./ms-my.js": 373,
	"./ms.js": 372,
	"./mt": 374,
	"./mt.js": 374,
	"./my": 375,
	"./my.js": 375,
	"./nb": 376,
	"./nb.js": 376,
	"./ne": 377,
	"./ne.js": 377,
	"./nl": 378,
	"./nl-be": 379,
	"./nl-be.js": 379,
	"./nl.js": 378,
	"./nn": 380,
	"./nn.js": 380,
	"./pa-in": 381,
	"./pa-in.js": 381,
	"./pl": 382,
	"./pl.js": 382,
	"./pt": 383,
	"./pt-br": 384,
	"./pt-br.js": 384,
	"./pt.js": 383,
	"./ro": 385,
	"./ro.js": 385,
	"./ru": 386,
	"./ru.js": 386,
	"./sd": 387,
	"./sd.js": 387,
	"./se": 388,
	"./se.js": 388,
	"./si": 389,
	"./si.js": 389,
	"./sk": 390,
	"./sk.js": 390,
	"./sl": 391,
	"./sl.js": 391,
	"./sq": 392,
	"./sq.js": 392,
	"./sr": 393,
	"./sr-cyrl": 394,
	"./sr-cyrl.js": 394,
	"./sr.js": 393,
	"./ss": 395,
	"./ss.js": 395,
	"./sv": 396,
	"./sv.js": 396,
	"./sw": 397,
	"./sw.js": 397,
	"./ta": 398,
	"./ta.js": 398,
	"./te": 399,
	"./te.js": 399,
	"./tet": 400,
	"./tet.js": 400,
	"./tg": 401,
	"./tg.js": 401,
	"./th": 402,
	"./th.js": 402,
	"./tl-ph": 403,
	"./tl-ph.js": 403,
	"./tlh": 404,
	"./tlh.js": 404,
	"./tr": 405,
	"./tr.js": 405,
	"./tzl": 406,
	"./tzl.js": 406,
	"./tzm": 407,
	"./tzm-latn": 408,
	"./tzm-latn.js": 408,
	"./tzm.js": 407,
	"./ug-cn": 409,
	"./ug-cn.js": 409,
	"./uk": 410,
	"./uk.js": 410,
	"./ur": 411,
	"./ur.js": 411,
	"./uz": 412,
	"./uz-latn": 413,
	"./uz-latn.js": 413,
	"./uz.js": 412,
	"./vi": 414,
	"./vi.js": 414,
	"./x-pseudo": 415,
	"./x-pseudo.js": 415,
	"./yo": 416,
	"./yo.js": 416,
	"./zh-cn": 417,
	"./zh-cn.js": 417,
	"./zh-hk": 418,
	"./zh-hk.js": 418,
	"./zh-tw": 419,
	"./zh-tw.js": 419
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 666;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AlertController } from 'ionic-angular';

//import { Observable } from 'rxjs/Observable';
//import firebase from 'firebase';
var FirebaseProvider = (function () {
    function FirebaseProvider(afd, auth) {
        this.afd = afd;
        this.auth = auth;
    }
    FirebaseProvider.prototype.getUserProfile = function () {
        var arr = [];
        var profile = {
            "country": String,
            "dateOfBirth": Date,
            "email": String
        };
        var id = this.auth.getCurrentuserID();
        console.log("userId in firebaseProvider: ", id);
        this.afd.database.ref("/userProfile/" + id + "/").on('value', function (resp) {
            arr = snapshotToArray(resp);
            profile.country = arr[0];
            profile.dateOfBirth = arr[1];
            profile.email = arr[2];
            console.log("profile in provider: ", profile);
        });
        return profile;
    };
    FirebaseProvider.prototype.saveUserprofile = function (email, password, country, dateOfBirth) {
        var _this = this;
        this.auth.getCurrentuserID().then(function (id) {
            _this.afd.database.ref("/userProfile/" + id).update({ email: email, country: country, dateOfBirth: dateOfBirth });
        });
        var user = this.auth.angularfire.auth.currentUser;
        user.updatePassword(password).then(function () {
            //toast message succesfull
            console.log("password changed sucesfully");
        }).catch(function (error) {
            console.log(error);
        });
        if (email != user.email) {
            user.updateEmail(email).then(function () {
                user.sendEmailVerification().then(function () {
                    //message of succes
                    console.log("email changed succesfull");
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    FirebaseProvider.prototype.getSettings = function () {
        var arr = [];
        var settings = {
            "country": String,
            "emergencyNumber": Date
        };
        var id = this.auth.getCurrentuserID();
        console.log("userId in firebaseProvider: ", id);
        this.afd.database.ref("/settings/" + id + "/").on('value', function (resp) {
            arr = snapshotToArray(resp);
            settings.country = arr[0];
            settings.emergencyNumber = arr[1];
            console.log("settings in provider: ", settings);
        });
        return settings;
    };
    FirebaseProvider.prototype.saveSettings = function (emergencyNumber, country) {
        var _this = this;
        this.auth.getCurrentuserID().then(function (id) {
            _this.afd.database.ref("/settings/" + id + "/").update({ emergencyNumber: emergencyNumber, country: country }).then(function () {
                console.log("settings saved");
            });
        });
    };
    FirebaseProvider.prototype.saveMeasurement = function (meting) {
        var _this = this;
        this.auth.getCurrentuserID().then(function (id) {
            _this.afd.database.ref("/meting/" + id + "/").push(meting);
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        returnArr.push(item);
    });
    //console.log(returnArr);
    return returnArr;
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_main__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_statistics_statistics__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_personal_info_personal_info__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_call_call__ = __webpack_require__(165);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_account_create_account__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_test_home_test_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_statistics_statistics__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_personal_info_personal_info__ = __webpack_require__(157);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var firebaseConfig = {
    apiKey: "AIzaSyCGbCzagTiX3RZmGXYct2YaJSZQPMcziac",
    authDomain: "alcometer-720c2.firebaseapp.com",
    databaseURL: "https://alcometer-720c2.firebaseio.com",
    projectId: "alcometer-720c2",
    storageBucket: "alcometer-720c2.appspot.com",
    messagingSenderId: "211742343446"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // used for an example of ngFor and navigation
        this.pages = [
<<<<<<< HEAD
            { title: 'PersonalInfo', component: __WEBPACK_IMPORTED_MODULE_9__pages_personal_info_personal_info__["a" /* PersonalInfoPage */] },
            { title: 'Main', component: __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Statistics', component: __WEBPACK_IMPORTED_MODULE_8__pages_statistics_statistics__["a" /* StatisticsPage */] },
            { title: 'Call', component: __WEBPACK_IMPORTED_MODULE_10__pages_call_call__["a" /* CallPage */] }
=======
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Create Account', component: __WEBPACK_IMPORTED_MODULE_6__pages_create_account_create_account__["a" /* CreateAccountPage */] },
            { title: 'PersonalInfo', component: __WEBPACK_IMPORTED_MODULE_11__pages_personal_info_personal_info__["a" /* PersonalInfoPage */] },
            { title: 'Main', component: __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Statistics', component: __WEBPACK_IMPORTED_MODULE_10__pages_statistics_statistics__["a" /* StatisticsPage */] }
>>>>>>> bluetoothConnection
        ];
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                unsubscribe();
            }
            else {
<<<<<<< HEAD
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */];
=======
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_test_home_test_home__["a" /* TestHomePage */];
>>>>>>> bluetoothConnection
                unsubscribe();
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Alcometer</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)= "openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 92:
=======
/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.getUser = function () {
        return this.afd.list('/userProfile/');
    };
    FirebaseProvider.prototype.addUser = function (email) {
        this.afd.list('/userProfile/').push(email);
    };
    FirebaseProvider.prototype.removeUser = function (email) {
        this.afd.list('/userProfile/').remove(email);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestHomePage = (function () {
    function TestHomePage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestHomePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.navCtrl.push('LoginPage');
    };
    TestHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestHomePage');
    };
    TestHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-home',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\test-home\test-home.html"*/'<!--\n\n  Generated template for the TestHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>testHome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <button ion-button type="submit" (click)="logout()">Log out</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\test-home\test-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TestHomePage);
    return TestHomePage;
}());

//# sourceMappingURL=test-home.js.map

/***/ }),

/***/ 88:
>>>>>>> bluetoothConnection
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_bluetooth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_home_test_home__ = __webpack_require__(82);
>>>>>>> bluetoothConnection
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(fb, navCtrl, navParams, afAuth, bt) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
<<<<<<< HEAD
        this.afAuth = afAuth;
=======
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.createAccountForm = formBuilder.group({
            email: [''],
            password: [''],
            country: [''],
            dateOfBirth: ['']
        });
    }
    CreateAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAccountPage');
    };
    CreateAccountPage.prototype.signUpUser = function () {
        var _this = this;
        this.authProvider.CreateNewUser(this.createAccountForm.value.email, this.createAccountForm.value.password, this.createAccountForm.value.country, this.createAccountForm.value.dateOfBirth)
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__test_home_test_home__["a" /* TestHomePage */]);
        });
    };
    CreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-account',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\create-account\create-account.html"*/'\n\n<ion-header style="background-color:lightblue;">\n\n  <img src="assets/imgs/alcometer.png">\n\n</ion-header>\n\n\n\n<ion-content padding class="auth-page">\n\n    <h1 style="position:absolute; left:25%; top:5%">Create Account</h1>\n\n<form [formGroup]="createAccountForm" (submit)="signUpUser()">\n\n<ion-list style="position:absolute; top:10%; left:20%;">\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input  type="text" formControlName="email"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" formControlName="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating> Confirm password</ion-label>\n\n    <ion-input type="password" ></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Country</ion-label>\n\n    <ion-select formControlName="country">\n\n      <ion-option value="België">België</ion-option>\n\n      <ion-option value="Suomi">Suomi</ion-option>\n\n      <ion-option value="Deutschland">Deutschland</ion-option>\n\n      <ion-option value="Nederland">Nederland</ion-option>\n\n      <ion-option value="France">France</ion-option>\n\n      <ion-option value="Lëtzebuerg">Lëtzebuerg</ion-option>\n\n      <ion-option value="Portugal">Portugal</ion-option>\n\n      <ion-option value="Sverige">Sverige</ion-option>\n\n      <ion-option value="Great Britian">Great Britian</ion-option>\n\n      <ion-option value="România">România</ion-option>\n\n      <ion-option value="Italia">Italia</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Date of birth</ion-label>\n\n    <ion-datetime formControlName="dateOfBirth" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label style="font-size:0.7em;">I agree to share my information.</ion-label>\n\n    <ion-checkbox ></ion-checkbox>\n\n  </ion-item>\n\n\n\n\n\n  <button type="submit"  style="position:absolute; top:105%; background-color:lightblue; width:100%" ion-button>Create Account</button>\n\n  </ion-list>\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\create-account\create-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(bt, navCtrl, navParams) {
>>>>>>> bluetoothConnection
        this.bt = bt;
        this.total = 2;
        this.maxPromille = 0.5;
        this.buttonClicked = false; //Whatever you want to initialise it as
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.onButtonClick = function () {
        //this.receiveData();
        this.meting = 0.8;
        this.fb.saveMeasurement(this.meting);
        this.donutChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](document.getElementById('donutChart'), {
            type: 'doughnut',
            data: {
                labels: [this.label()],
                datasets: [{
                        label: '# alcohol promille',
                        data: [this.meting, this.total - this.meting],
                        backgroundColor: [
                            this.color(),
                            'rgb(255, 206, 86)'
                        ]
                    }]
            }
        });
    };
    MainPage.prototype.logout = function () {
        this.afAuth.logOut();
        this.navCtrl.push('LoginPage');
    };
    MainPage.prototype.receiveData = function () {
        this.bt.receiveData();
        this.meting = this.bt.meting;
    };
    MainPage.prototype.color = function () {
        if (this.meting < this.maxPromille)
            return 'rgb(75, 192, 192)';
        else
            return 'rgb(255, 99, 132)';
    };
    MainPage.prototype.label = function () {
        if (this.meting < this.maxPromille)
            return "Drive";
        else
            return 'No drive';
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\main\main.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Main</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<button ion-button full round (click)="onButtonClick()">Click</button>\n\n<ion-label *ngIf="meting">{{meting}}</ion-label>\n\n<canvas id=\'donutChart\'></canvas>\n\n<button ion-button type="submit" (click)="logout()">Log out</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[465]);
//# sourceMappingURL=main.js.map