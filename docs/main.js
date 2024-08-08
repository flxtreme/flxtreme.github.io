"use strict";
(self["webpackChunkflxtreme_github_io"] = self["webpackChunkflxtreme_github_io"] || []).push([["main"],{

/***/ 2881:
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/enums */ 5774);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  redirectTo: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.RouteNames.HOME,
  pathMatch: 'full'
}, {
  path: '',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./flxtremee/flxtremee.module */ 7377)).then(app => app.FlxtremeeModule)
}, {
  path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.RouteNames.LOGIN,
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.RouteNames.ERROR,
  component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent
}, {
  path: '**',
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/spinner/spinner.component */ 2925);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor() {
    this.title = 'flxtreme.github.io';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner")(1, "router-outlet");
      }
    },
    dependencies: [_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _flxtremee_flxtremee_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flxtremee/flxtremee.module */ 7377);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing-module */ 2881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _flxtremee_flxtremee_module__WEBPACK_IMPORTED_MODULE_3__.FlxtremeeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _flxtremee_flxtremee_module__WEBPACK_IMPORTED_MODULE_3__.FlxtremeeModule]
  });
})();

/***/ }),

/***/ 5774:
/*!************************************!*\
  !*** ./src/app/constants/enums.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteNames": () => (/* binding */ RouteNames)
/* harmony export */ });
var RouteNames;
(function (RouteNames) {
  RouteNames["ROOT"] = "";
  RouteNames["LOGIN"] = "login";
  RouteNames["HOME"] = "home";
  RouteNames["ERROR"] = "error";
})(RouteNames || (RouteNames = {}));

/***/ }),

/***/ 9983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorComponent {
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    decls: 2,
    vars: 0,
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9647:
/*!*******************************************************!*\
  !*** ./src/app/flxtremee/flxtremee-routing-module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlxtremeeRoutingModule": () => (/* binding */ FlxtremeeRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enums */ 5774);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 9818);
/* harmony import */ var _flxtremee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flxtremee.component */ 9017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _flxtremee_component__WEBPACK_IMPORTED_MODULE_2__.FlxtremeeComponent,
  children: [{
    path: '',
    redirectTo: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.RouteNames.HOME,
    pathMatch: 'full'
  }, {
    path: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.RouteNames.HOME,
    component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
    canActivate: []
  }]
}];
class FlxtremeeRoutingModule {
  static #_ = this.ɵfac = function FlxtremeeRoutingModule_Factory(t) {
    return new (t || FlxtremeeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: FlxtremeeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FlxtremeeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 9017:
/*!**************************************************!*\
  !*** ./src/app/flxtremee/flxtremee.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlxtremeeComponent": () => (/* binding */ FlxtremeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FlxtremeeComponent {
  static #_ = this.ɵfac = function FlxtremeeComponent_Factory(t) {
    return new (t || FlxtremeeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FlxtremeeComponent,
    selectors: [["app-flxtremee"]],
    decls: 2,
    vars: 0,
    consts: [[1, "flxtremee-app-container"]],
    template: function FlxtremeeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbHh0cmVtZWUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmx4dHJlbWVlL2ZseHRyZW1lZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7377:
/*!***********************************************!*\
  !*** ./src/app/flxtremee/flxtremee.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlxtremeeModule": () => (/* binding */ FlxtremeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _flxtremee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flxtremee.component */ 9017);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 9818);
/* harmony import */ var _flxtremee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flxtremee-routing-module */ 9647);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class FlxtremeeModule {
  static #_ = this.ɵfac = function FlxtremeeModule_Factory(t) {
    return new (t || FlxtremeeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: FlxtremeeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _flxtremee_routing_module__WEBPACK_IMPORTED_MODULE_2__.FlxtremeeRoutingModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FlxtremeeModule, {
    declarations: [_flxtremee_component__WEBPACK_IMPORTED_MODULE_0__.FlxtremeeComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _flxtremee_routing_module__WEBPACK_IMPORTED_MODULE_2__.FlxtremeeRoutingModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule]
  });
})();

/***/ }),

/***/ 9818:
/*!**************************************************!*\
  !*** ./src/app/flxtremee/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 2,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmx4dHJlbWVlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoginComponent {
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 2,
    vars: 0,
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 2,
    vars: 0,
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner/spinner.component */ 2925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ComponentsModule {
  static #_ = this.ɵfac = function ComponentsModule_Factory(t) {
    return new (t || ComponentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ComponentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent]
  });
})();

/***/ }),

/***/ 2925:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utility.service */ 3796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class SpinnerComponent {
  constructor(utilityService) {
    this.utilityService = utilityService;
    this.loading$ = this.utilityService.loading$;
  }
  static #_ = this.ɵfac = function SpinnerComponent_Factory(t) {
    return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SpinnerComponent,
    selectors: [["app-spinner"]],
    decls: 2,
    vars: 3,
    consts: [["class", "spinner-container", 4, "ngIf"], [1, "spinner-container"], [1, "spinner"]],
    template: function SpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: [".spinner-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}\n.spinner-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid;\n  border-color: #FF3D00 transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxlQUFBO0VBQUEsUUFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0VBQUEsV0FBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEseURBQUE7RUFBQTtBQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQUNKO0FBRUU7RUFDRTtJQUNFLHVCQUFBO0VBQUo7RUFFRTtJQUNFLHlCQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItY29udGFpbmVyIHtcclxuICBAYXBwbHkgYmctd2hpdGUgYmctb3BhY2l0eS0yMCBmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcjtcclxuXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGM0QwMCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfSBcclxuICAgIFxyXG4gICAgICBcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsZUFBQTtFQUFBLFFBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtFQUFBLFdBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLHlEQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUFDSjtBQUVFO0VBQ0U7SUFDRSx1QkFBQTtFQUFKO0VBRUU7SUFDRSx5QkFBQTtFQUFKO0FBQ0Y7QUFVQSxvekNBQW96QyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgQGFwcGx5IGJnLXdoaXRlIGJnLW9wYWNpdHktMjAgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXI7XHJcblxyXG4gIC5zcGlubmVyIHtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRjNEMDAgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH0gXHJcbiAgICBcclxuICAgICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3796:
/*!****************************************************!*\
  !*** ./src/app/shared/services/utility.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityService": () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class UtilityService {
  constructor() {
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loading$ = this.loadingSubject.asObservable();
  }
  /**
   * Start loading
   */
  startLoading() {
    this.loadingSubject.next(true);
  }
  /**
   * Stops loading
   */
  stopLoading() {
    this.loadingSubject.next(false);
  }
  /**
   * Handle loading with parameter
   * @param {boolean} loading
   */
  setLoading(loading) {
    this.loadingSubject.next(loading);
  }
  static #_ = this.ɵfac = function UtilityService_Factory(t) {
    return new (t || UtilityService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UtilityService,
    factory: UtilityService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule],
    exports: [_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map