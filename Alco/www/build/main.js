webpackJsonp([3],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simplyMeasure_simplyMeasure__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authenticatie_authenticatie__ = __webpack_require__(39);
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
    function LoginPage(loadingCtrl, afAuth, navCtrl, navParams, alertCtrl, menuCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.user = {};
        this.menuCtrl.enable(false, 'menu');
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
    LoginPage.prototype.simplyMeasure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__simplyMeasure_simplyMeasure__["a" /* SimplyMeasurePage */]);
        this.menuCtrl.enable(false, 'menu');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\login\login.html"*/'<ion-header style="background-color:lightblue;">\n\n  <img src="assets/imgs/alcometer.png" style="padding-top:20%;">\n\n</ion-header>\n\n\n\n<h1 style="position:absolute;left:40%; top:35%;">Login</h1>\n\n\n\n<ion-list style="position:absolute; top:45%; left:20%;">\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n  <ion-label><a (click)="resetPassword()" style="font-size:10px;margin-left:7%">Forgot password?</a></ion-label>\n\n  <button style="position:absolute; top:100%; background-color:lightblue; width:100%" (click)="login(user)" ion-button>Sign in</button>\n\n</ion-list>\n\n\n\n  <button  style="background-color:lightblue; margin-top:145%;margin-left:20%; width:220px;" ion-button (click)="simplyMeasure()">Simply measure</button>\n\n  <button style="background-color:lightblue; margin-left:20.5%; width:216px;" (click)="createAccount()" ion-button>Create account</button>\n\n\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__ = __webpack_require__(39);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplyMeasurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
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
 * Generated class for the TestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SimplyMeasurePage = (function () {
    function SimplyMeasurePage(bt, navCtrl, navParams) {
        this.bt = bt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.beschrijving = "Een lekkere mojito!";
        this.resultaat = [];
        this.total = 2;
        this.maxPromille = 0.5;
        this.availableDevices = [];
    }
    SimplyMeasurePage.prototype.ionViewDidLoad = function () {
    };
    SimplyMeasurePage.prototype.onButtonClick = function () {
        //this.receiveData();
        this.meting = 0.12;
        this.total = 2;
        this.resultaat = [this.meting, this.beschrijving];
        this.donutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](document.getElementById('donutChart'), {
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
    SimplyMeasurePage.prototype.startScanning = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.bt.startScanning();
                this.availableDevices = this.bt.availableDevices;
                return [2 /*return*/];
            });
        });
    };
    SimplyMeasurePage.prototype.disconnect = function () {
        this.bt.disconnect();
    };
    SimplyMeasurePage.prototype.selectDevice = function (device) {
        this.bt.selectDevice(device);
        this.connectedDevice = this.bt.connectedDevice;
    };
    SimplyMeasurePage.prototype.receiveData = function () {
        this.bt.receiveData();
        this.meting = this.bt.meting;
    };
    SimplyMeasurePage.prototype.color = function () {
        if (this.meting < this.maxPromille)
            return 'rgb(75, 192, 192)';
        else
            return 'rgb(255, 99, 132)';
    };
    SimplyMeasurePage.prototype.label = function () {
        if (this.meting < this.maxPromille)
            return "Drive";
        else
            return 'No drive';
    };
    SimplyMeasurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simply-measure',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\simplyMeasure\simplyMeasure.html"*/'<!--\n\n  Generated template for the TestHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Measure</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button full round (click)="onButtonClick()">Click</button>\n\n  <ion-label *ngIf="meting">{{meting}}</ion-label>\n\n  <canvas id=\'donutChart\'></canvas>\n\n\n\n  <button ion-button block (click)="startScanning()">scan</button>\n\n    <ion-list-header>\n\n      availlable Devices\n\n    </ion-list-header>\n\n    <ion-item *ngFor=\'let device of availableDevices\'>\n\n      <span (click)="selectDevice(device)">\n\n        {{device.name}}\n\n      </span>\n\n    </ion-item>\n\n    <button ion-button block (click)="disconnect()">Disconnect</button>\n\n    <ion-list-header>\n\n      Connected Device\n\n    </ion-list-header>\n\n    <ion-item *ngIf="connectedDevice">\n\n      {{connectedDevice.name}}\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\simplyMeasure\simplyMeasure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SimplyMeasurePage);
    return SimplyMeasurePage;
}());

//# sourceMappingURL=simplyMeasure.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* unused harmony export matchOtherValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(83);
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
        this.email = "";
        this.changeAccountForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([matchOtherValidator('password')])],
            country: [''],
            dateOfBirth: ['']
        });
        this.fb.getUserProfile();
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalInfoPage');
        this.getProfile();
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
    PersonalInfoPage.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fb.getUserProfile().then(function (value) {
                            _this.profile = value;
                        })];
                    case 1:
                        _a.sent();
                        console.log("profile in profilePage: ", this.profile);
                        return [2 /*return*/];
                }
            });
        });
    };
    PersonalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-info',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\personal-info\personal-info.html"*/'<!--\n\n  Generated template for the PersonalInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>personalInfo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <form [formGroup]="changeAccountForm" (submit)="presentPrompt()">\n\n    <ion-list style="position:absolute; top:10%; left:20%;">\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input  type="text" formControlName="email"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating> Confirm password</ion-label>\n\n        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n\n      </ion-item>    \n\n\n\n      <ion-item>\n\n        <ion-label>Country</ion-label>\n\n        <ion-select formControlName="country">\n\n          <ion-option value="België">België</ion-option>\n\n          <ion-option value="Suomi">Suomi</ion-option>\n\n          <ion-option value="Deutschland">Deutschland</ion-option>\n\n          <ion-option value="Nederland">Nederland</ion-option>\n\n          <ion-option value="France">France</ion-option>\n\n          <ion-option value="Lëtzebuerg">Lëtzebuerg</ion-option>\n\n          <ion-option value="Portugal">Portugal</ion-option>\n\n          <ion-option value="Sverige">Sverige</ion-option>\n\n          <ion-option value="Great Britian">Great Britian</ion-option>\n\n          <ion-option value="România">România</ion-option>\n\n          <ion-option value="Italia">Italia</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n    \n\n      <ion-item>\n\n        <ion-label>Date of birth</ion-label>\n\n        <ion-datetime formControlName="dateOfBirth" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <button type="submit"  style="position:absolute; top:105%; background-color:lightblue; width:100%" ion-button [disabled]="!changeAccountForm.valid" >Save</button>\n\n      </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\personal-info\personal-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */]])
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* unused harmony export matchOtherValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticatie_authenticatie__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(70);
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
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(56);
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





var SettingsPage = (function () {
    function SettingsPage(alert, loadingCtrl, formBuilder, bt, navCtrl, navParams, fb) {
        this.alert = alert;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.bt = bt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.availableDevices = [];
        this.settingsForm = formBuilder.group({
            emergencyNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            country: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.getSettings();
    }
    SettingsPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, alert_1, error_1, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country)];
                    case 2:
                        _a.sent();
                        loading.dismiss();
                        alert_1 = this.alert.create({
                            message: "Changes saved succesfully",
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        loading.dismiss();
                        alert_2 = this.alert.create({
                            message: error_1.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_2.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
    SettingsPage.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        return [4 /*yield*/, this.fb.getSettings().then(function (value) {
                                _this.settings = value;
                                loading.dismiss();
                            })];
                    case 1:
                        _a.sent();
                        console.log("settings in settingspage: ", this.settings);
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list padding>\n\n    <button ion-button block (click)="startScanning()">scan</button>\n\n    <ion-list-header>\n\n      availlable Devices\n\n    </ion-list-header>\n\n    <ion-item *ngFor=\'let device of availableDevices\'>\n\n      <span (click)="selectDevice(device)">\n\n        {{device.name}}\n\n      </span>\n\n    </ion-item>\n\n    <button ion-button block (click)="disconnect()">Disconnect</button>\n\n    <ion-list-header>\n\n      Connected Device\n\n    </ion-list-header>\n\n    <ion-item *ngIf="connectedDevice">\n\n      {{connectedDevice.name}}\n\n    </ion-item>\n\n    <ion-spinner name="crescent" *ngIf="scanning"></ion-spinner>\n\n    \n\n  \n\n  \n\n  <form [formGroup]="settingsForm" (submit)="save()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Family emergency number</ion-label>\n\n        <ion-input  type="text" formControlName="emergencyNumber"></ion-input>\n\n      </ion-item>\n\n      \n\n  \n\n      <ion-item>\n\n        <ion-label>Current country</ion-label>\n\n        <ion-select formControlName="country">\n\n          <ion-option value="België">België</ion-option>\n\n          <ion-option value="Finland">Finland</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n    \n\n      <button type="submit"  style=" background-color:lightblue; width:100%" ion-button [disabled]="!settingsForm.valid">Save</button>\n\n      </ion-list>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(56);
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
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = (function () {
    function StatisticsPage(fb, navCtrl, navParams, loadingCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
        var loading = this.loadingCtrl.create();
        loading.present();
        this.showChart(loading);
    };
    StatisticsPage.prototype.showChart = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promille, beschrijving;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promille = [];
                        beschrijving = [];
                        return [4 /*yield*/, this.fb.getMeasurements().then(function (meting) {
                                meting.forEach(function (element) {
                                    promille.push(element.promille);
                                    beschrijving.push(element.beschrijving);
                                });
                                console.log(promille);
                            }).then(function () {
                                loading.dismiss();
                                _this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](document.getElementById('lineChart'), {
                                    type: 'line',
                                    data: {
                                        labels: beschrijving,
                                        datasets: [
                                            {
                                                label: "Alcohol promille",
                                                backgroundColor: "rgba(75,192,192,0.0)",
                                                borderColor: "rgba(75,192,192,1)",
                                                borderWidth: 2,
                                                pointRadius: 3,
                                                pointhoverRadius: 5,
                                                pointHoverBackgroundColor: 'rgb(255, 204, 0)',
                                                pointBackgroundColor: 'white',
                                                pointHitRadius: 10,
                                                spanGaps: true,
                                                lineTension: 0.3,
                                                data: promille
                                            }
                                        ]
                                    },
                                    options: {
                                        legend: {
                                            display: false
                                        },
                                        scales: {
                                            xAxes: [{
                                                    gridLines: {
                                                        display: false
                                                    },
                                                    ticks: {
                                                        display: false,
                                                    }
                                                }],
                                            yAxes: [{
                                                    ticks: {
                                                        beginAtZero: true
                                                    },
                                                }]
                                        }
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\statistics\statistics.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Statistics</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <canvas id=\'lineChart\'></canvas>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\statistics\statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-account/create-account.module": [
		704,
		2
	],
	"../pages/login/login.module": [
		420
	],
	"../pages/main/main.module": [
		421
	],
	"../pages/personal-info/personal-info.module": [
		422
	],
	"../pages/reset-password/reset-password.module": [
		423
	],
	"../pages/settings/settings.module": [
		705,
		1
	],
	"../pages/simplyMeasure/simplyMeasure.module": [
		424
	],
	"../pages/statistics/statistics.module": [
		706,
		0
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
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(268);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(143);
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(70);
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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function() { return PersonalInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_info__ = __webpack_require__(146);
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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(144);
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

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplyMeasurePageModule", function() { return SimplyMeasurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simplyMeasure__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimplyMeasurePageModule = (function () {
    function SimplyMeasurePageModule() {
    }
    SimplyMeasurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__simplyMeasure__["a" /* SimplyMeasurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simplyMeasure__["a" /* SimplyMeasurePage */]),
            ],
        })
    ], SimplyMeasurePageModule);
    return SimplyMeasurePageModule;
}());

//# sourceMappingURL=simplyMeasure.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(487);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_account_create_account__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authenticatie_authenticatie__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_simplyMeasure_simplyMeasure__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_simplyMeasure_simplyMeasure_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_reset_password_reset_password__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_main_main__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_statistics_statistics__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_personal_info_personal_info__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_bluetooth_bluetooth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_main_main_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_personal_info_personal_info_module__ = __webpack_require__(422);
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
__WEBPACK_IMPORTED_MODULE_20_firebase__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_statistics_statistics__["a" /* StatisticsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-account/create-account.module#CreateAccountPageModule', name: 'page-create-account', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'page-reset-password', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simplyMeasure/simplyMeasure.module#SimplyMeasurePageModule', name: 'SimplyMeasurePage', segment: 'simplyMeasure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_simplyMeasure_simplyMeasure_module__["SimplyMeasurePageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password_module__["ResetPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_main_main_module__["MainPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_personal_info_personal_info_module__["PersonalInfoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_simplyMeasure_simplyMeasure__["a" /* SimplyMeasurePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__ = __webpack_require__(39);
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


//import { AlertController } from 'ionic-angular';

//import { Observable } from 'rxjs/Observable';
//import firebase from 'firebase';
var FirebaseProvider = (function () {
    function FirebaseProvider(afd, auth) {
        this.afd = afd;
        this.auth = auth;
    }
    //user profile
    FirebaseProvider.prototype.getUserProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arr, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        profile = {
                            "country": String,
                            "dateOfBirth": Date,
                            "email": String
                        };
                        return [4 /*yield*/, this.auth.getCurrentuserID().then(function (id) {
                                console.log("userId in firebaseProvider: ", id);
                                _this.afd.database.ref("/userProfile/" + id + "/").on('value', function (resp) {
                                    arr = snapshotToArray(resp);
                                    profile.country = arr[0];
                                    profile.dateOfBirth = arr[1];
                                    profile.email = arr[2];
                                    console.log("profile in provider: ", profile);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, profile];
                }
            });
        });
    };
    FirebaseProvider.prototype.saveUserprofile = function (email, password, country, dateOfBirth) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user;
            return __generator(this, function (_a) {
                this.auth.getCurrentuserID().then(function (id) {
                    _this.afd.database.ref("/userProfile/" + id).update({ email: email, country: country, dateOfBirth: dateOfBirth });
                });
                user = this.auth.angularfire.auth.currentUser;
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
                return [2 /*return*/];
            });
        });
    };
    //app settings
    FirebaseProvider.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arr, settings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        settings = {
                            "country": String,
                            "emergencyNumber": Date
                        };
                        return [4 /*yield*/, this.auth.getCurrentuserID().then(function (id) {
                                console.log("userId in firebaseProvider: ", id);
                                _this.afd.database.ref("/settings/" + id + "/").on('value', function (resp) {
                                    arr = snapshotToArray(resp);
                                    settings.country = arr[0];
                                    settings.emergencyNumber = arr[1];
                                    console.log("settings in provider: ", settings);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, settings];
                }
            });
        });
    };
    FirebaseProvider.prototype.saveSettings = function (emergencyNumber, country) {
        var _this = this;
        this.auth.getCurrentuserID().then(function (id) {
            _this.afd.database.ref("/settings/" + id + "/").update({ emergencyNumber: emergencyNumber, country: country }).then(function () {
                console.log("settings saved");
            });
        });
    };
    //measurement
    FirebaseProvider.prototype.saveMeasurement = function (resultaat) {
        var _this = this;
        var data = {
            "promille": Number,
            "beschrijving": String
        };
        data.promille = resultaat[0];
        data.beschrijving = resultaat[1];
        this.auth.getCurrentuserID().then(function (id) {
            _this.afd.database.ref("/meting/" + id + "/").push(data);
        });
    };
    FirebaseProvider.prototype.getMeasurements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        return [4 /*yield*/, this.auth.getCurrentuserID().then(function (id) {
                                _this.afd.database.ref("/meting/" + id + "/").on('value', function (resp) {
                                    arr = snapshotToArray(resp);
                                    console.log("metingen in provider: ", arr);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, arr];
                }
            });
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//get data from datatbase
var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        returnArr.push(item);
    });
    console.log(returnArr);
    return returnArr;
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 296,
	"./af.js": 296,
	"./ar": 297,
	"./ar-dz": 298,
	"./ar-dz.js": 298,
	"./ar-kw": 299,
	"./ar-kw.js": 299,
	"./ar-ly": 300,
	"./ar-ly.js": 300,
	"./ar-ma": 301,
	"./ar-ma.js": 301,
	"./ar-sa": 302,
	"./ar-sa.js": 302,
	"./ar-tn": 303,
	"./ar-tn.js": 303,
	"./ar.js": 297,
	"./az": 304,
	"./az.js": 304,
	"./be": 305,
	"./be.js": 305,
	"./bg": 306,
	"./bg.js": 306,
	"./bm": 307,
	"./bm.js": 307,
	"./bn": 308,
	"./bn.js": 308,
	"./bo": 309,
	"./bo.js": 309,
	"./br": 310,
	"./br.js": 310,
	"./bs": 311,
	"./bs.js": 311,
	"./ca": 312,
	"./ca.js": 312,
	"./cs": 313,
	"./cs.js": 313,
	"./cv": 314,
	"./cv.js": 314,
	"./cy": 315,
	"./cy.js": 315,
	"./da": 316,
	"./da.js": 316,
	"./de": 317,
	"./de-at": 318,
	"./de-at.js": 318,
	"./de-ch": 319,
	"./de-ch.js": 319,
	"./de.js": 317,
	"./dv": 320,
	"./dv.js": 320,
	"./el": 321,
	"./el.js": 321,
	"./en-au": 322,
	"./en-au.js": 322,
	"./en-ca": 323,
	"./en-ca.js": 323,
	"./en-gb": 324,
	"./en-gb.js": 324,
	"./en-ie": 325,
	"./en-ie.js": 325,
	"./en-il": 326,
	"./en-il.js": 326,
	"./en-nz": 327,
	"./en-nz.js": 327,
	"./eo": 328,
	"./eo.js": 328,
	"./es": 329,
	"./es-do": 330,
	"./es-do.js": 330,
	"./es-us": 331,
	"./es-us.js": 331,
	"./es.js": 329,
	"./et": 332,
	"./et.js": 332,
	"./eu": 333,
	"./eu.js": 333,
	"./fa": 334,
	"./fa.js": 334,
	"./fi": 335,
	"./fi.js": 335,
	"./fo": 336,
	"./fo.js": 336,
	"./fr": 337,
	"./fr-ca": 338,
	"./fr-ca.js": 338,
	"./fr-ch": 339,
	"./fr-ch.js": 339,
	"./fr.js": 337,
	"./fy": 340,
	"./fy.js": 340,
	"./gd": 341,
	"./gd.js": 341,
	"./gl": 342,
	"./gl.js": 342,
	"./gom-latn": 343,
	"./gom-latn.js": 343,
	"./gu": 344,
	"./gu.js": 344,
	"./he": 345,
	"./he.js": 345,
	"./hi": 346,
	"./hi.js": 346,
	"./hr": 347,
	"./hr.js": 347,
	"./hu": 348,
	"./hu.js": 348,
	"./hy-am": 349,
	"./hy-am.js": 349,
	"./id": 350,
	"./id.js": 350,
	"./is": 351,
	"./is.js": 351,
	"./it": 352,
	"./it.js": 352,
	"./ja": 353,
	"./ja.js": 353,
	"./jv": 354,
	"./jv.js": 354,
	"./ka": 355,
	"./ka.js": 355,
	"./kk": 356,
	"./kk.js": 356,
	"./km": 357,
	"./km.js": 357,
	"./kn": 358,
	"./kn.js": 358,
	"./ko": 359,
	"./ko.js": 359,
	"./ky": 360,
	"./ky.js": 360,
	"./lb": 361,
	"./lb.js": 361,
	"./lo": 362,
	"./lo.js": 362,
	"./lt": 363,
	"./lt.js": 363,
	"./lv": 364,
	"./lv.js": 364,
	"./me": 365,
	"./me.js": 365,
	"./mi": 366,
	"./mi.js": 366,
	"./mk": 367,
	"./mk.js": 367,
	"./ml": 368,
	"./ml.js": 368,
	"./mn": 369,
	"./mn.js": 369,
	"./mr": 370,
	"./mr.js": 370,
	"./ms": 371,
	"./ms-my": 372,
	"./ms-my.js": 372,
	"./ms.js": 371,
	"./mt": 373,
	"./mt.js": 373,
	"./my": 374,
	"./my.js": 374,
	"./nb": 375,
	"./nb.js": 375,
	"./ne": 376,
	"./ne.js": 376,
	"./nl": 377,
	"./nl-be": 378,
	"./nl-be.js": 378,
	"./nl.js": 377,
	"./nn": 379,
	"./nn.js": 379,
	"./pa-in": 380,
	"./pa-in.js": 380,
	"./pl": 381,
	"./pl.js": 381,
	"./pt": 382,
	"./pt-br": 383,
	"./pt-br.js": 383,
	"./pt.js": 382,
	"./ro": 384,
	"./ro.js": 384,
	"./ru": 385,
	"./ru.js": 385,
	"./sd": 386,
	"./sd.js": 386,
	"./se": 387,
	"./se.js": 387,
	"./si": 388,
	"./si.js": 388,
	"./sk": 389,
	"./sk.js": 389,
	"./sl": 390,
	"./sl.js": 390,
	"./sq": 391,
	"./sq.js": 391,
	"./sr": 392,
	"./sr-cyrl": 393,
	"./sr-cyrl.js": 393,
	"./sr.js": 392,
	"./ss": 394,
	"./ss.js": 394,
	"./sv": 395,
	"./sv.js": 395,
	"./sw": 396,
	"./sw.js": 396,
	"./ta": 397,
	"./ta.js": 397,
	"./te": 398,
	"./te.js": 398,
	"./tet": 399,
	"./tet.js": 399,
	"./tg": 400,
	"./tg.js": 400,
	"./th": 401,
	"./th.js": 401,
	"./tl-ph": 402,
	"./tl-ph.js": 402,
	"./tlh": 403,
	"./tlh.js": 403,
	"./tr": 404,
	"./tr.js": 404,
	"./tzl": 405,
	"./tzl.js": 405,
	"./tzm": 406,
	"./tzm-latn": 407,
	"./tzm-latn.js": 407,
	"./tzm.js": 406,
	"./ug-cn": 408,
	"./ug-cn.js": 408,
	"./uk": 409,
	"./uk.js": 409,
	"./ur": 410,
	"./ur.js": 410,
	"./uz": 411,
	"./uz-latn": 412,
	"./uz-latn.js": 412,
	"./uz.js": 411,
	"./vi": 413,
	"./vi.js": 413,
	"./x-pseudo": 414,
	"./x-pseudo.js": 414,
	"./yo": 415,
	"./yo.js": 415,
	"./zh-cn": 416,
	"./zh-cn.js": 416,
	"./zh-hk": 417,
	"./zh-hk.js": 417,
	"./zh-tw": 418,
	"./zh-tw.js": 418
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
webpackContext.id = 665;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_bluetooth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(419);
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
    function MainPage(alertCtrl, menuCtrl, fb, Noodnummer, navCtrl, navParams, afAuth, bt) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.Noodnummer = Noodnummer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.bt = bt;
        this.beschrijving = "Een lekkere mojito!";
        this.resultaat = [];
        this.total = 2;
        this.maxPromille = 0.5;
        this.buttonClicked = false; //Whatever you want to initialise it as
        this.menuCtrl.enable(true, 'menu');
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.onButtonClick = function () {
        //this.receiveData();
        this.meting = 1.12;
        this.resultaat = [this.meting, this.beschrijving];
        this.fb.saveMeasurement(this.resultaat);
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
    MainPage.prototype.Emergency = function () {
        var _this = this;
        this.Noodnummer.callNumber("0495142810", true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () {
            console.log('Error launching dialer');
            var alert = _this.alertCtrl.create({
                message: 'Error launching dialer',
                buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
        });
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
            selector: 'page-main',template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\main\main.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Main</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n  \n\n  <canvas id=\'donutChart\'></canvas>\n\n  \n\n  <button ion-button full round (click)="onButtonClick()" >Measure!</button>\n\n  \n\n  <ion-card>\n\n    \n\n    <ion-card-content *ngIf="meting">\n\n        <ion-icon name="wine"></ion-icon>\n\n      {{meting}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <div class="bar bar-footer bar-balanced">\n\n    <button (click)=\'Emergency()\' ion-button>Emergency Call</button>\n\n  \n\n  </div>\n\n  </ion-content>'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_main__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_statistics_statistics__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_personal_info_personal_info__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authenticatie_authenticatie__ = __webpack_require__(39);
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
    function MyApp(platform, statusBar, splashScreen, fb, Auth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fb = fb;
        this.Auth = Auth;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'PersonalInfo', component: __WEBPACK_IMPORTED_MODULE_9__pages_personal_info_personal_info__["a" /* PersonalInfoPage */] },
            { title: 'Main', component: __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Statistics', component: __WEBPACK_IMPORTED_MODULE_8__pages_statistics_statistics__["a" /* StatisticsPage */] },
        ];
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */];
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
    MyApp.prototype.logout = function () {
        this.Auth.logOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\app\app.html"*/'<ion-menu [content]="content" id="menu">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Alcometer</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)= "openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n     \n\n    </ion-list>\n\n    <ion-footer class="bar-stable">\n\n      <button menuClose ion-item (click)="logout()">\n\n        <a>Logout</a>\n\n      </button>\n\n    </ion-footer>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\EA2017-2018\InternationalProject\IP18-AlcoMeter01\Alco\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_authenticatie_authenticatie__["a" /* AuthenticatieProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(288);
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
                this.bluetoothSerial.connect(device.id).subscribe(function (rspo) {
                    console.log("connected to HC-06 device", rspo);
                    _this.connectedDevice = device;
                }, function (error) {
                    console.log("error", error);
                });
                return [2 /*return*/];
            });
        });
    };
    BluetoothProvider.prototype.startScanning = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
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
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        alert_1 = this.alertCtrl.create({
                            message: error_1 + " -> Bluetooth Not Available",
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_1.present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
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

/***/ })

},[466]);
//# sourceMappingURL=main.js.map