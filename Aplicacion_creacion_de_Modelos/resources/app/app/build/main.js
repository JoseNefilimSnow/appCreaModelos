webpackJsonp([3],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_odoojsonrpc__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_creation_model_creation__ = __webpack_require__(87);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, odooRpc, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.utils = utils;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.utils.presentLoading("Iniciando Sesión", 0, true);
        this.odooRpc.inicializar(this.db_odoo);
        this.odooRpc.inicioDeSesion(this.email, this.password).then(function (res) {
            if (Number(JSON.parse(res._body)['result'].partner_id)) {
                localStorage.setItem('TokenContext', JSON.stringify(JSON.parse(res._body)["result"]));
                localStorage.setItem('TokenInicioSesión', _this.db_odoo + '|' + _this.email + '|' + _this.password);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__model_creation_model_creation__["a" /* ModelCreationPage */]);
                _this.utils.dismissLoading();
            }
            else {
                _this.utils.dismissLoading();
                _this.utils.presentAlert('Error al conectar a Odoo', 'Comprueba que los daros introducidos son correctos', [{ text: 'Entendido' }]);
            }
        }).catch(function (err) {
            _this.utils.dismissLoading();
            _this.utils.presentAlert('Error al conectar a Odoo', 'Comprueba que los daros introducidos son correctos' + '\n' + 'Error: ' + err, [{ text: 'Entendido' }]);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Inicio de Sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <div>\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="text" placeholder="Base de datos de Odoo" [(ngModel)]="db_odoo" name="db_odoo" required>\n          </ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="email" placeholder="Usuario(Email)" [(ngModel)]="email" name="email" required></ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n\n        <ion-item class="border-box">\n          <ion-input type="password" [(ngModel)]="password" name="pass" placeholder="Contraseña" required></ion-input>\n        </ion-item>\n        <div class="spacer" style="height: 10px;"></div>\n        <button ion-button block round type="submit" color="primary">\n          Iniciar Sesión\n        </button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_odoojsonrpc__["a" /* odooJsonRpc */], __WEBPACK_IMPORTED_MODULE_2__providers_utils__["a" /* Utils */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelFieldsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odoojsonrpc__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_creation_model_creation__ = __webpack_require__(87);
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
 * Generated class for the ModelFieldsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModelFieldsPage = /** @class */ (function () {
    function ModelFieldsPage(navCtrl, navParams, odooRpc, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.utils = utils;
        this.esObligatorio = false;
        this.modelo_relacionado = false;
        this.campo_de_relacion = false;
        this.relacionNoRequerida = true;
        this.id_modelo = this.navParams.get('id');
    }
    ModelFieldsPage.prototype.relacionRequerida = function () {
        if (this.tipo_campo === 'many2one') {
            this.relacionNoRequerida = false;
        }
        if (this.tipo_campo === 'one2many') {
            this.relacionNoRequerida = false;
            this.campo_de_relacion = "name";
        }
    };
    ModelFieldsPage.prototype.concatenar_campos = function () {
        if (this.nombre_campo === null || this.nombre_campo === '') {
            this.utils.presentAlert('Campo introducido vacio', 'No puedes crear un campo vacio', [{
                    text: "Entendido"
                }]);
        }
        else {
            var campos = {
                model_id: this.id_modelo,
                name: 'x_' + this.nombre_campo.toLowerCase(),
                field_description: this.nombre_campo,
                ttype: this.tipo_campo,
                state: 'manual',
                relation: this.modelo_relacionado,
                relation_field: this.campo_de_relacion,
                required: this.esObligatorio
            };
            this.odooRpc.crear_campos_modulo_odoo(campos);
            this.utils.presentToast('¡Campo añadido!', 2000, true, "top");
            this.nombre_campo = "";
            this.tipo_campo = "";
            this.modelo_relacionado = false;
            this.campo_de_relacion = false;
            this.relacionNoRequerida = true;
            this.esObligatorio = false;
        }
    };
    ModelFieldsPage.prototype.crear_modulo = function () {
        this.utils.presentToast('¡Modulo Finalizado!', 2500, true, "top");
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__model_creation_model_creation__["a" /* ModelCreationPage */]);
    };
    ModelFieldsPage.prototype.descartar = function () {
        this.odooRpc.borrarInstancia('ir_model', this.id_modelo);
        this.utils.presentToast('¡Módulo descartado!', 3000, true, "top");
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__model_creation_model_creation__["a" /* ModelCreationPage */]);
    };
    ModelFieldsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-model-fields',template:/*ion-inline-start:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\pages\model-fields\model-fields.html"*/'<!--\n  Generated template for the ModelFieldsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Campos del modelo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Cabe destacar que al crear un modelo, se crean unas variables por defectos como name, id, created at y edited at, sabiendo esto, a continuacion puede añadir otros campos a el modelo crado anteriormente</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Nombre del campo" [(ngModel)]="nombre_campo"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-select [(ngModel)]="tipo_campo" (ionChange)="relacionRequerida()" placeholder="Tipo de campo" cancelText="cerrar" okText="Elegir">\n    <ion-option value="boolean">Booleano</ion-option>\n    <ion-option value="datetime">Fecha</ion-option>\n    <ion-option value="float">Decimales</ion-option>\n    <ion-option value="integer">Enteros</ion-option>\n    <ion-option value="one2many" disabled>Relación de uno a muchos</ion-option>\n    <ion-option value="many2one">Relación de muchos a uno</ion-option>\n    <ion-option value="text">Texto</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item [hidden]="relacionNoRequerida">\n    <ion-input type="text" placeholder="Modelo a relacionar" [(ngModel)]="modelo_relacionado"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>¿Es obligatorio?</ion-label>\n    <ion-checkbox [(ngModel)]="esObligatorio"></ion-checkbox>\n  </ion-item>\n  <div class="spacer" style="height: 10px;"></div>\n  <button ion-button block round (click)="concatenar_campos()" color="dark">\n    Añadir campo\n  </button>\n    <button ion-button block round (click)="crear_modulo()" color="secondary" right>\n      Finalizar\n    </button>\n    <button ion-button block round (click)="descartar()" color="danger" left>\n      Descartar\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\pages\model-fields\model-fields.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_odoojsonrpc__["a" /* odooJsonRpc */], __WEBPACK_IMPORTED_MODULE_3__providers_utils__["a" /* Utils */]])
    ], ModelFieldsPage);
    return ModelFieldsPage;
}());

//# sourceMappingURL=model-fields.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		676,
		2
	],
	"../pages/model-creation/model-creation.module": [
		677,
		1
	],
	"../pages/model-fields/model-fields.module": [
		678,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_model_creation_model_creation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_model_fields_model_fields__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_odoojsonrpc__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_utils__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_model_creation_model_creation__["a" /* ModelCreationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_model_fields_model_fields__["a" /* ModelFieldsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/model-creation/model-creation.module#ModelCreationPageModule', name: 'ModelCreationPage', segment: 'model-creation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/model-fields/model-fields.module#ModelFieldsPageModule', name: 'ModelFieldsPage', segment: 'model-fields', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_model_creation_model_creation__["a" /* ModelCreationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_model_fields_model_fields__["a" /* ModelFieldsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_odoojsonrpc__["a" /* odooJsonRpc */],
                __WEBPACK_IMPORTED_MODULE_11__providers_utils__["a" /* Utils */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Utils = /** @class */ (function () {
    function Utils(alrtCtrl, loadingCtrl, toastCtrl, actionSheetCtrl) {
        this.alrtCtrl = alrtCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    Utils.prototype.presentAlert = function (title, message, buttons, subtitle, enableBackdropDismiss, inputs) {
        var alrt = this.alrtCtrl.create({
            title: title,
            subTitle: subtitle,
            message: message,
            buttons: buttons,
            enableBackdropDismiss: enableBackdropDismiss,
            inputs: inputs
        });
        alrt.present();
    };
    Utils.prototype.presentToast = function (message, duration, dissmissOnPageChange, position, showCloseButton, closeButtonText) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            dismissOnPageChange: dissmissOnPageChange,
            duration: duration,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText
        });
        toast.present();
    };
    Utils.prototype.presentLoading = function (content, duration, dissmissOnPageChange, enableBackDropDismiss, showBackDrop, spinner) {
        this.loading = this.loadingCtrl.create({
            content: content,
            dismissOnPageChange: dissmissOnPageChange,
            duration: duration,
            enableBackdropDismiss: enableBackDropDismiss,
            showBackdrop: showBackDrop,
            spinner: spinner
        });
        this.loading.present();
    };
    Utils.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    Utils.prototype.presentActionSheet = function (buttons, title, subtitle, enableBackdropDismiss) {
        var actionCtrl = this.actionSheetCtrl.create({
            buttons: buttons,
            subTitle: subtitle,
            title: title,
            enableBackdropDismiss: enableBackdropDismiss
        });
        actionCtrl.present();
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return odooJsonRpc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var odooJsonRpc = /** @class */ (function () {
    function odooJsonRpc(http) {
        this.http = http;
        this.odoo_api = 'http://localhost:8069'; //Dirección Ip donde está la API de Odoo
        this.http = http;
    }
    // Inicio de sesión//
    /**
     * En este método inicializamos las variables de odoo con los datos pasados en la pantalla de la app.
     * @param base_de_datos Aqui se pasa la base de datos que se esta utilizando
     */
    odooJsonRpc.prototype.inicializar = function (base_de_datos) {
        this.odoo_db = base_de_datos;
    };
    /**
     * @param email Identidicador para el inicio de sesión principal.
     * @param contraseña Contraseña asosciada al identificador.
     */
    odooJsonRpc.prototype.inicioDeSesion = function (email, contraseña) {
        var parametros_inicio_sesión = {
            db: this.odoo_db,
            login: email,
            password: contraseña,
            base_location: this.odoo_api,
            context: {} //Se le pasa un contexto vacio desde la aplicacion para iniciar la sesión;
        };
        var respuesta = this.enviarPropuesta("/web/session/authenticate", parametros_inicio_sesión); // Almacenamos la respuesta de la API
        respuesta.then(function (res) {
            if (Number(JSON.parse(res._body)["result"].partner_id)) {
                var contexto_de_usuario = JSON.parse(res._body)["result"];
                contexto_de_usuario.password = contraseña;
                localStorage.setItem("token", JSON.stringify(contexto_de_usuario)); // Creamos una instancia de el contexto de usuario en un token para diferentes consultas
            }
        });
        return respuesta;
    };
    //---------------Metodo necesario para enviar las propuestas------------------//
    /**
     *
     * @param urlDeMetodo Esta variable es la extension de odoo_api (la direccion IP donde se encuentra la API) única para cada tipo de acción a realizar
     * @param parametros Variable que contiene parametros de cada metodo para enviar a la API de Odoo
     */
    odooJsonRpc.prototype.enviarPropuesta = function (urlDeMetodo, parametros) {
        var cuerpo_de_la_propuesta = {
            params: parametros
        };
        var cabecera_de_la_propuesta = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        return this.http.post(this.odoo_api + urlDeMetodo, cuerpo_de_la_propuesta, {
            headers: cabecera_de_la_propuesta
        }).toPromise();
    };
    //---------------Metodo CRUD : Instancias de modelos de Odoo------------------//
    /**
     *
     * @param modelo Modelo del cual crearemos la instancia
     * @param campos Campos requeridos para realizar la acción
     */
    odooJsonRpc.prototype.crearInstancia = function (modelo, campos) {
        var argumentos = [campos];
        return this.llamadaAlMetodo(modelo, "create", argumentos, null);
    };
    /**
     * @param modelo Modelo del cual leeremos la instancia
     * @param condicion Podemos crear una condicion usando este patron: '[[campo,operacion,valor]]' ------>
     *                  Ej: [['id','=',num]]
     * @param campos Campos que recoger de la lectura
     * @param limite Limite de valores a recoger
     * @param intervalo Intervalos en los que se muestran la respuesta
     * @param orden Orden en el que se muestran la respuesta
     */
    odooJsonRpc.prototype.leerInstancia = function (modelo, condicion, campos, limite, intervalo, orden) {
        var parametros = {
            model: modelo,
            fields: campos,
            domain: condicion,
            offset: intervalo,
            limit: limite,
            sort: orden,
            context: this.obtenerContextoDeUsuario()
        };
        return this.enviarPropuesta("/web/dataset/search_read", parametros);
    };
    /**
     * @param modelo Modelo del que editaremos la instancia
     * @param identificador Id de la instancia a editar
     * @param campos Campos de la instancia a editar
     *              (e.j)
     *              let argumentos = {
     *                 "name": "Vlp"
     *              }
     */
    odooJsonRpc.prototype.editarInstancia = function (modelo, identificador, campos) {
        var argumentos = [
            [identificador], campos
        ];
        return this.llamadaAlMetodo(modelo, "write", argumentos, null);
    };
    /**
     *
     * @param modelo Modelo del que borraremos la instancia
     * @param identificador Id de la intancia a borrar
     */
    odooJsonRpc.prototype.borrarInstancia = function (modelo, identificador) {
        var argumentos = [identificador];
        return this.llamadaAlMetodo(modelo, "unlink", argumentos, null);
    };
    //---------------Metodo LLamada a metodos del modelo y obtener el contexto ---IMPORTANTE--- ------------------//
    /**
     *
     * @param modelo Es el modelo sobre el cual realizaremos el método
     * @param metodo El metodo es una función definida por Odoo
     *                  en cada modelo de sus modulos, cada uno consta de una gran variedad y
     *                  estos realizan todo tipo de acciones sobre las instancias de los mismo
     * @param argumentos Son los campos necesarios que el modulo requiere para cada acción
     * @param objeto Son necesarios en algunos metodos para cumplimentar los metodos a realizar
     */
    odooJsonRpc.prototype.llamadaAlMetodo = function (modelo, metodo, argumentos, objeto) {
        objeto = objeto || {}; //El objeto se inicializa en si mismo o vacio depende de lo si llega por parametro o no
        var parametros = {
            model: modelo,
            method: metodo,
            args: argumentos,
            kwargs: objeto == false ? {} : objeto,
            context: this.obtenerContextoDeUsuario()
        };
        return this.enviarPropuesta("/web/dataset/call_kw", parametros);
    };
    /**
     * Este método obtiene un token, creado a la hora de iniciar sesión, que servirá como identificación a Odoo de quien está realizando las acciones.
     */
    odooJsonRpc.prototype.obtenerContextoDeUsuario = function () {
        var importar_token_de_contexto = localStorage.getItem("TokenContext");
        var datos_del_token = JSON.parse(importar_token_de_contexto);
        var contexto_del_usuario = datos_del_token["user_context"];
        return contexto_del_usuario;
    };
    //---------------Métodos de la aplicación------------------//
    /**
     * Crea el modelo de Odoo
     * @param nombre Nombre del modelo a crear
     */
    odooJsonRpc.prototype.crear_modulo_odoo = function (nombre) {
        var nombre_modelo = 'x_' + nombre.toLowerCase().replace(' ', '_');
        return this.crearInstancia('ir.model', {
            'name': nombre,
            'model': nombre_modelo,
            'state': 'manual'
        });
    };
    odooJsonRpc.prototype.crear_campos_modulo_odoo = function (campos_a_añadir) {
        this.crearInstancia('ir.model.fields', campos_a_añadir);
    };
    odooJsonRpc.prototype.obtener_estructura = function () {
        return this.leerInstancia('ir.model.fields', [['model_id', '=', 286]], [], 0, 0, '');
    };
    odooJsonRpc = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], odooJsonRpc);
    return odooJsonRpc;
}());

//# sourceMappingURL=odoojsonrpc.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelCreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_odoojsonrpc__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_fields_model_fields__ = __webpack_require__(151);
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
 * Generated class for the ModelCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModelCreationPage = /** @class */ (function () {
    function ModelCreationPage(navCtrl, navParams, odooRpc, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.odooRpc = odooRpc;
        this.utils = utils;
    }
    ModelCreationPage.prototype.boton_inutil = function () {
        this.odooRpc.obtener_estructura().then(function (res) {
            console.log(JSON.parse(res._body));
        }).catch(function (err) {
            alert(err);
        });
    };
    ModelCreationPage.prototype.crear_modelo = function () {
        var _this = this;
        this.odooRpc.crear_modulo_odoo(this.nombre_modelo).then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__model_fields_model_fields__["a" /* ModelFieldsPage */], { id: JSON.parse(res._body)['result'] });
        }).catch(function (err) {
            alert(err);
        });
    };
    ModelCreationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-model-creation',template:/*ion-inline-start:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\pages\model-creation\model-creation.html"*/'<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Crear Modelo:</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)="crear_modelo()" #registerForm="ngForm">\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="nombre_modelo" name="name" placeholder="Nombre del Modelo">\n      </ion-input>\n    </ion-item>\n    <div class="spacer" style="height: 10px;"></div>\n    <button ion-button block round type="submit" color="primary">\n      Crear Modelo\n    </button>\n  </form>\n  <button ion-button block round (click)="boton_inutil()" color="secondary">\n    Derp\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JoseDV\Desktop\Creador_Modulos_Odoo\src\pages\model-creation\model-creation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_odoojsonrpc__["a" /* odooJsonRpc */], __WEBPACK_IMPORTED_MODULE_3__providers_utils__["a" /* Utils */]])
    ], ModelCreationPage);
    return ModelCreationPage;
}());

//# sourceMappingURL=model-creation.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map