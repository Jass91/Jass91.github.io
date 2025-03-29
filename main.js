"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor(_router) {
    this._router = _router;
    this.title = 'Thornament';
  }
  ngOnInit() {
    // TODO: permitir que a landing page ao menos mostre sem metamask
    if (!this.isWeb3ProviderAvailable()) {
      //this._router.navigate(['/no-web3-provider']);
    }
  }
  isWeb3ProviderAvailable() {
    return !!window.ethereum;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing.module */ 4215);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _features_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/auth/auth.module */ 663);
/* harmony import */ var _features_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/landing-page/landing-page.module */ 4389);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _initializers_app_initializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initializers/app.initializer */ 8339);
/* harmony import */ var _features_new_game_new_game_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/new-game/new-game.module */ 7317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);














class AppModule {
  constructor(matIconRegistry, domSanitizer) {
    const svgs = {
      psn: 'assets/icons/psn.svg',
      logo: 'assets/icons/logo.svg',
      xbox: 'assets/icons/xbox.svg',
      steam: 'assets/icons/steam.svg',
      google: 'assets/icons/google.svg',
      metamask: 'assets/icons/metamask.svg'
    };
    for (const key in svgs) {
      matIconRegistry.addSvgIcon(key, domSanitizer.bypassSecurityTrustResourceUrl(svgs[key]));
    }
  }
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      providers: [_initializers_app_initializer__WEBPACK_IMPORTED_MODULE_5__.appInitializer],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
      // core module
      _core_core_module__WEBPACK_IMPORTED_MODULE_1__.AppCoreModule,
      // routes
      _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
      // features
      _features_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule, _features_new_game_new_game_module__WEBPACK_IMPORTED_MODULE_6__.NewGameModule, _features_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_4__.LandingPageModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
    // core module
    _core_core_module__WEBPACK_IMPORTED_MODULE_1__.AppCoreModule,
    // routes
    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
    // features
    _features_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule, _features_new_game_new_game_module__WEBPACK_IMPORTED_MODULE_6__.NewGameModule, _features_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_4__.LandingPageModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 4215:
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _features_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/auth/pages/login/login.component */ 3090);
/* harmony import */ var _features_new_game_pages_new_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/new-game/pages/new-game.component */ 9135);
/* harmony import */ var _features_auth_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/auth/pages/signup/signup.component */ 6576);
/* harmony import */ var _features_landing_page_pages_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/landing-page/pages/landing-page.component */ 4015);
/* harmony import */ var _core_components_logged_in_layout_logged_in_structure_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/logged-in-layout/logged-in-structure/structure.component */ 2856);
/* harmony import */ var _core_components_logged_out_layout_logged_out_structure_structure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/logged-out-layout/logged-out-structure/structure.component */ 5736);
/* harmony import */ var _features_provider_account_pages_provider_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/provider-account/pages/provider-account.component */ 2599);
/* harmony import */ var _features_no_web3_provider_no_web3_provider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/no-web3-provider/no-web3-provider.component */ 7594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











const loggedOutRoutes = [{
  path: '',
  component: _core_components_logged_out_layout_logged_out_structure_structure_component__WEBPACK_IMPORTED_MODULE_5__.LoggedOutStructureComponent,
  children: [{
    path: '',
    component: _features_landing_page_pages_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.LandingPageComponent
  }, {
    path: 'signup',
    component: _features_auth_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupPageComponent
  }, {
    path: 'login',
    component: _features_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent
  }, {
    path: 'no-web3-provider',
    component: _features_no_web3_provider_no_web3_provider_component__WEBPACK_IMPORTED_MODULE_7__.NoWeb3ProviderComponent
  }]
}];
const loggedInRoutes = [{
  path: '',
  component: _core_components_logged_in_layout_logged_in_structure_structure_component__WEBPACK_IMPORTED_MODULE_4__.LoggedInStructureComponent,
  children: [{
    path: 'new-game',
    // TODO: seria melhor game/new?
    component: _features_new_game_pages_new_game_component__WEBPACK_IMPORTED_MODULE_1__.NewGameComponent,
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./features/new-game/new-game.module */ 7317)).then(m => m.NewGameModule)
  }, {
    path: 'accounts',
    component: _features_provider_account_pages_provider_account_component__WEBPACK_IMPORTED_MODULE_6__.ProviderAccountComponent,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_provider-account_provider-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/provider-account/provider-account.module */ 4289)).then(m => m.ProviderAccountModule)
  }]
}];
const routes = [
// Rotas para áreas não autenticadas
...loggedOutRoutes,
// Rotas para áreas autenticadas
...loggedInRoutes
// Redirecionar a rota raiz para a área não autenticada
// { path: '', redirectTo: 'a', pathMatch: 'full' },
// Redirecionar qualquer rota não encontrada para a área não autenticada
// { path: '**', redirectTo: 'a' },
];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 7248:
/*!***************************************************************************************!*\
  !*** ./src/app/core/components/logged-in-layout/logged-in-header/header.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedInHeaderComponent: () => (/* binding */ LoggedInHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);




class LoggedInHeaderComponent {
  static {
    this.ɵfac = function LoggedInHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoggedInHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoggedInHeaderComponent,
      selectors: [["app-logged-in-header"]],
      decls: 13,
      vars: 0,
      consts: [[1, "logo-container"], ["mat-button", "", "href", "#"], ["svgIcon", "logo"], [1, "menu-container"], ["mat-flat-button", "", "href", "#"]],
      template: function LoggedInHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar")(1, "div", 0)(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thornament");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Menu 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Menu 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign out");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar],
      styles: [".logo-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZXMvaGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dnZWQtaW4tbGF5b3V0L2xvZ2dlZC1pbi1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuICBcclxuLm1lbnUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHhcclxufSIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2856:
/*!*********************************************************************************************!*\
  !*** ./src/app/core/components/logged-in-layout/logged-in-structure/structure.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedInStructureComponent: () => (/* binding */ LoggedInStructureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _logged_in_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logged-in-header/header.component */ 7248);
/* harmony import */ var _logged_out_layout_logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logged-out-layout/logged-out-footer/logged-out-footer.component */ 1172);




class LoggedInStructureComponent {
  static {
    this.ɵfac = function LoggedInStructureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoggedInStructureComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoggedInStructureComponent,
      selectors: [["app-logged-in-structure"]],
      decls: 6,
      vars: 0,
      consts: [[1, "app-logged-in-header-container"], [1, "app-logged-in-content-container", "colored-container"], [1, "app-logged-in-footer-container"]],
      template: function LoggedInStructureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-logged-in-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "footer", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-logged-out-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _logged_in_header_header_component__WEBPACK_IMPORTED_MODULE_0__.LoggedInHeaderComponent, _logged_out_layout_logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_1__.LoggedOutFooterComponent],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-logged-in-content-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2dlZC1pbi1sYXlvdXQvbG9nZ2VkLWluLXN0cnVjdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFwcC1sb2dnZWQtaW4tY29udGVudC1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5hcHAtbG9nZ2VkLWluLWhlYWRlci1jb250YWluZXIge1xyXG5cclxufVxyXG5cclxuLmFwcC1sb2dnZWQtaW4tZm9vdGVyLWNvbnRhaW5lciB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1172:
/*!****************************************************************************************************!*\
  !*** ./src/app/core/components/logged-out-layout/logged-out-footer/logged-out-footer.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedOutFooterComponent: () => (/* binding */ LoggedOutFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4175);


class LoggedOutFooterComponent {
  copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  static {
    this.ɵfac = function LoggedOutFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoggedOutFooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoggedOutFooterComponent,
      selectors: [["app-logged-out-footer"]],
      decls: 35,
      vars: 1,
      consts: [[1, "section"], [1, "media-area"], [1, "media-item"], ["mat-icon-button", ""], ["src", "assets/icons/instagram.png", 1, "icon", "--gray"], ["src", "assets/icons/facebook.png", 1, "icon", "--gray"], ["src", "assets/icons/twitter.png", 1, "icon", "--gray"], ["src", "assets/icons/email.svg", 1, "icon", "email-icon"], ["mat-icon-button", "", 3, "click"], ["src", "assets/icons/copy.svg", 1, "icon", "email-icon"]],
      template: function LoggedOutFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Thornament");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Thornament is platform protocal-like that aim to allow any game to create and manage e-sports easily. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0)(6, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Keep Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2)(20, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0)(25, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1)(28, "div", 2)(29, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoggedOutFooterComponent_Template_button_click_33_listener() {
            return ctx.copyToClipboard("contact@thornament.com");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("contact@thornament.com");
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatIconButton],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  padding: 1em 5em 1em 5em;\n}\n\n.section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.media-area[_ngcontent-%COMP%] {\n  display: flex;\n}\n.media-area[_ngcontent-%COMP%]   .media-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.--gray[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n}\n\n.email-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  filter: invert(100%);\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2dlZC1vdXQtbGF5b3V0L2xvZ2dlZC1vdXQtZm9vdGVyL2xvZ2dlZC1vdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUdBO0VBQ0ksb0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFJQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMWVtIDVlbSAxZW0gNWVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAxXHJcbn1cclxuXHJcbi5tZWRpYS1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLm1lZGlhLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLi0tZ3JheSB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxufVxyXG5cclxuLmVtYWlsLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4784:
/*!*****************************************************************************************!*\
  !*** ./src/app/core/components/logged-out-layout/logged-out-header/header.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedOutHeaderComponent: () => (/* binding */ LoggedOutHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);




class LoggedOutHeaderComponent {
  constructor() {}
  static {
    this.ɵfac = function LoggedOutHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoggedOutHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoggedOutHeaderComponent,
      selectors: [["app-logged-out-header"]],
      decls: 9,
      vars: 0,
      consts: [[1, "logo-container"], ["mat-button", "", "href", "#"], ["svgIcon", "logo"], [1, "menu-container"], ["mat-flat-button", "", "href", "/login"]],
      template: function LoggedOutHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar")(1, "div", 0)(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thornament");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar],
      styles: [".logo-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZXMvaGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dnZWQtb3V0LWxheW91dC9sb2dnZWQtb3V0LWhlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4gIFxyXG4ubWVudS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweFxyXG59IiwiLmxvZ28tY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5736:
/*!***********************************************************************************************!*\
  !*** ./src/app/core/components/logged-out-layout/logged-out-structure/structure.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedOutStructureComponent: () => (/* binding */ LoggedOutStructureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logged-out-footer/logged-out-footer.component */ 1172);
/* harmony import */ var _logged_out_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logged-out-header/header.component */ 4784);




const _c0 = ["class", "structure"];
class LoggedOutStructureComponent {
  static {
    this.ɵfac = function LoggedOutStructureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoggedOutStructureComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoggedOutStructureComponent,
      selectors: [["app-logged-out", 8, "structure"]],
      attrs: _c0,
      decls: 6,
      vars: 0,
      consts: [[1, "app-logged-out-header-container"], [1, "app-logged-out-content-container", "colored-container"], [1, "app-logged-out-footer-container"]],
      template: function LoggedOutStructureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-logged-out-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "footer", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-logged-out-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_0__.LoggedOutFooterComponent, _logged_out_header_header_component__WEBPACK_IMPORTED_MODULE_1__.LoggedOutHeaderComponent],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-logged-out-header-container[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 1000;\n}\n\n.app-logged-out-content-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.app-logged-out-footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2dlZC1vdXQtbGF5b3V0L2xvZ2dlZC1vdXQtc3RydWN0dXJlL3N0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFHRSxXQUFBO0VBQ0EsYUFBQTtBQURGOztBQUtBO0VBQ0UsT0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXBwLWxvZ2dlZC1vdXQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgLy8gdG9wOiAwO1xyXG4gIC8vIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwMDsgICAgXHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uYXBwLWxvZ2dlZC1vdXQtY29udGVudC1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5hcHAtbG9nZ2VkLW91dC1mb290ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppCoreModule: () => (/* binding */ AppCoreModule)
/* harmony export */ });
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/config/config.service */ 7629);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ 4441);
/* harmony import */ var _components_logged_in_layout_logged_in_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logged-in-layout/logged-in-header/header.component */ 7248);
/* harmony import */ var _components_logged_out_layout_logged_out_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logged-out-layout/logged-out-header/header.component */ 4784);
/* harmony import */ var _components_logged_in_layout_logged_in_structure_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logged-in-layout/logged-in-structure/structure.component */ 2856);
/* harmony import */ var _components_logged_out_layout_logged_out_structure_structure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logged-out-layout/logged-out-structure/structure.component */ 5736);
/* harmony import */ var _services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/web3/web3-provider.service */ 5763);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/logging.interceptor */ 2185);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 3622);
/* harmony import */ var _components_logged_out_layout_logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/logged-out-layout/logged-out-footer/logged-out-footer.component */ 1172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);

















/*
The core functions, services, and models shared globally across the application and
didn’t have any relation to the feature module must be a part of the core module.
The singleton services should be implemented here that have to have one and only one instance per application.
The Module contains an Authentication service and static components like
 - the header,
 - footer,
 - navbar,
  - sidebar,
  - interceptors,
  - guards,
  - constants,
  - enums,
  - utils,
  - and universal models.

One must import the core module only in the app root module.
Other modules must not import the core module.
*/
class AppCoreModule {
  static {
    this.ɵfac = function AppCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppCoreModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppCoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _services_config_config_service__WEBPACK_IMPORTED_MODULE_0__["default"], _services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_6__.Web3ProviderService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.withInterceptors)([_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_7__.loggingInterceptor, _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__.authInterceptor]))],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppCoreModule, {
    declarations: [_components_logged_in_layout_logged_in_header_header_component__WEBPACK_IMPORTED_MODULE_2__.LoggedInHeaderComponent, _components_logged_out_layout_logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_9__.LoggedOutFooterComponent, _components_logged_out_layout_logged_out_header_header_component__WEBPACK_IMPORTED_MODULE_3__.LoggedOutHeaderComponent, _components_logged_in_layout_logged_in_structure_structure_component__WEBPACK_IMPORTED_MODULE_4__.LoggedInStructureComponent, _components_logged_out_layout_logged_out_structure_structure_component__WEBPACK_IMPORTED_MODULE_5__.LoggedOutStructureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule],
    exports: [_components_logged_in_layout_logged_in_header_header_component__WEBPACK_IMPORTED_MODULE_2__.LoggedInHeaderComponent, _components_logged_out_layout_logged_out_footer_logged_out_footer_component__WEBPACK_IMPORTED_MODULE_9__.LoggedOutFooterComponent, _components_logged_out_layout_logged_out_header_header_component__WEBPACK_IMPORTED_MODULE_3__.LoggedOutHeaderComponent, _components_logged_in_layout_logged_in_structure_structure_component__WEBPACK_IMPORTED_MODULE_4__.LoggedInStructureComponent, _components_logged_out_layout_logged_out_structure_structure_component__WEBPACK_IMPORTED_MODULE_5__.LoggedOutStructureComponent]
  });
})();

/***/ }),

/***/ 3622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
const userInfoStorageKey = 'USER_INFO';
function authInterceptor(req, next) {
  const rawUserInfo = localStorage.getItem(userInfoStorageKey);
  const userInfo = JSON.parse(rawUserInfo ?? '{ }');
  if (userInfo.accessToken) {
    const cloneReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userInfo.accessToken}`
      }
    });
    return next(cloneReq);
  }
  // TODO: implementar refresh e retries
  return next(req);
}

/***/ }),

/***/ 2185:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/logging.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loggingInterceptor: () => (/* binding */ loggingInterceptor)
/* harmony export */ });
function loggingInterceptor(req, next) {
  console.log(req.url);
  return next(req);
}

/***/ }),

/***/ 4441:
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/config/config.service */ 7629);
/* harmony import */ var src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/enum/user_type */ 8392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);






class AuthService {
  constructor(_http, _config) {
    this._http = _http;
    this._config = _config;
    this._userInfoStorageKey = 'USER_INFO';
  }
  get isConnected() {
    const info = localStorage.getItem(this._userInfoStorageKey);
    return !!info;
  }
  getLoginMessage() {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpRequest = _this._http.get(`${_this._config.backendBaseUrl}/api/Auth/login`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(httpRequest);
    })();
  }
  getSignupMessage() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpRequest = _this2._http.get(`${_this2._config.backendBaseUrl}/api/Auth/signup`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(httpRequest);
    })();
  }
  createPlayer(player, auth) {
    var _this3 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const suffix = player.userType == src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_2__.UserType.GameOwner ? 'owner' : 'player';
        const {
          message,
          nonce,
          timestamp,
          signature
        } = auth;
        // 4. Enviar a assinatura ao backend para validação
        const postRequest = _this3._http.post(`${_this3._config.backendBaseUrl}/api/Auth/signup/${suffix}`, {
          nonce,
          message,
          timestamp,
          signature,
          ...player
        });
        const creationResponseData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(postRequest);
        return Promise.resolve({
          status: true,
          error: undefined,
          data: creationResponseData
        });
      } catch (error) {
        const response = error;
        const apiResponse = response.error;
        return Promise.reject(apiResponse);
      }
    })();
  }
  login(auth) {
    var _this4 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          userType,
          signer,
          message,
          nonce,
          timestamp,
          signature
        } = auth;
        // 4. Enviar a assinatura ao backend para validação
        const postRequest = _this4._http.post(`${_this4._config.backendBaseUrl}/api/Auth/login`, {
          nonce,
          message,
          userType,
          timestamp,
          signature,
          wallet: signer?.toUpperCase()
        });
        const loginResponseData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(postRequest);
        localStorage.setItem(_this4._userInfoStorageKey, JSON.stringify(loginResponseData));
        return Promise.resolve({
          status: true,
          error: undefined,
          data: loginResponseData
        });
      } catch (error) {
        const response = error;
        const apiResponse = response.error;
        return Promise.reject(apiResponse);
      }
    })();
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["default"]));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7629:
/*!********************************************************!*\
  !*** ./src/app/core/services/config/config.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.development */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class ConfigService {
  get gameTokenFactoryConfig() {
    return this._config.gameTokenFactoryConfig;
  }
  get nodeBaseApiUrl() {
    return this._config.nodeBaseApiUrl;
  }
  get backendBaseUrl() {
    return this._config.backendBaseUrl;
  }
  constructor() {
    this._config = {
      ...src_environments_environment_development__WEBPACK_IMPORTED_MODULE_1__.environment,
      gameTokenFactoryConfig: undefined
    };
  }
  load(http) {
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TODO: implementar o load das configs async se necessário
      return Promise.resolve();
      // try {
      //   this._config.gameTokenFactoryConfig =
      //     await this.loadTokenfactoryContractData(http);
      // } catch (e) {
      //   console.error(e);
      //   throw e;
      // }
    })();
  }
  loadTokenfactoryContractData(http) {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        http.get(`${_this._config.nodeBaseApiUrl}/contract/GameTokenFactory/metadata`).subscribe({
          next: data => resolve({
            abi: data.abi,
            address: data.contractAddress
          }),
          error: error => reject(error)
        });
      });
    })();
  }
  static {
    this.ɵfac = function ConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5763:
/*!*************************************************************!*\
  !*** ./src/app/core/services/web3/web3-provider.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web3ProviderService: () => (/* binding */ Web3ProviderService)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ 3666);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ 1889);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ 5995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);





// o primeiro argumento do send, pode ser consultado aqui
// EIP-1193: https://eips.ethereum.org/EIPS/eip-1193
class Web3ProviderService {
  constructor(router) {
    this.router = router;
    this._provider = null;
    this._accounts = [];
    this._isAvailable = false;
    this._isAvailable = window.ethereum !== undefined;
    if (this._isAvailable) {
      this._provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);
      // Ouvir mudanças de conta (TODO: tipar)
      window.ethereum.on('accountsChanged', accounts => {
        debugger;
        this._accounts.length = 0;
        this._accounts.push(...accounts);
        // Emitir evento se necessário
      });
    }
  }
  get available() {
    return this._isAvailable;
  }
  get connected() {
    return this._accounts.length > 0;
  }
  getSigner() {
    return this._provider.getSigner();
  }
  send(command, args) {
    return this._provider.send(command, args);
  }
  chainId() {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this._isAvailable || !_this._provider) {
        _this.handleNoProvider();
        return Promise.reject(new Error('Web3 provider not available'));
      }
      const chainId = (yield _this._provider.getNetwork()).chainId;
      return Promise.resolve(Number(chainId));
    })();
  }
  currentAccount() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._isAvailable || !_this2._provider) {
        _this2.handleNoProvider();
        return Promise.reject(new Error('Web3 provider not available'));
      }
      return _this2._provider.getSigner();
    })();
  }
  connect() {
    var _this3 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._isAvailable || !_this3._provider) {
        _this3.handleNoProvider();
        return Promise.reject(new Error('Web3 provider not available'));
      }
      return _this3._provider.send('eth_requestAccounts', []).then(accounts => {
        _this3._accounts.length = 0;
        _this3._accounts.push(...(accounts || []));
        return accounts;
      }).catch(err => {
        console.error('Wallet not available', err);
        throw err;
      });
    })();
  }
  signTypedData_v4(eip721Data) {
    var _this4 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4._isAvailable || !_this4._provider) {
        _this4.handleNoProvider();
        return Promise.reject(new Error('Web3 provider not available'));
      }
      try {
        const signer = yield _this4._provider.getSigner();
        const signature = yield _this4._provider.send('eth_signTypedData_v4', [signer.address, eip721Data]);
        return signature;
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    })();
  }
  signPersonal(message) {
    var _this5 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5._isAvailable || !_this5._provider) {
        _this5.handleNoProvider();
        return Promise.reject(new Error('Web3 provider not available'));
      }
      try {
        const signer = yield _this5._provider.getSigner();
        // Converte a string em bytes e depois para hexadecimal
        const hexMessage = ethers__WEBPACK_IMPORTED_MODULE_2__.hexlify(ethers__WEBPACK_IMPORTED_MODULE_3__.toUtf8Bytes(message));
        const signature = yield _this5._provider.send('personal_sign', [hexMessage, signer.address]);
        return signature;
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    })();
  }
  handleNoProvider() {
    // Navega para a página de erro ou mostra uma mensagem
    this.router.navigate(['/no-web3-provider']);
  }
  static {
    this.ɵfac = function Web3ProviderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Web3ProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: Web3ProviderService,
      factory: Web3ProviderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1584:
/*!**********************************************************!*\
  !*** ./src/app/dto/blockchain/token_factory_contract.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenFactoryContract: () => (/* binding */ TokenFactoryContract)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 6171);

class TokenFactoryContract extends ethers__WEBPACK_IMPORTED_MODULE_0__.BaseContract {
  constructor(target, abi, runner, _deployTx) {
    super(target, abi, runner, _deployTx);
  }
}

/***/ }),

/***/ 8392:
/*!***************************************!*\
  !*** ./src/app/dto/enum/user_type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeTarget: () => (/* binding */ AttributeTarget),
/* harmony export */   AttributeType: () => (/* binding */ AttributeType),
/* harmony export */   HookType: () => (/* binding */ HookType),
/* harmony export */   UserType: () => (/* binding */ UserType)
/* harmony export */ });
var UserType;
(function (UserType) {
  UserType["Admin"] = "Admin";
  UserType["Player"] = "Player";
  UserType["GameOwner"] = "GameOwner";
})(UserType || (UserType = {}));
var HookType;
(function (HookType) {
  HookType["UserInfo"] = "UserInfo";
  HookType["NewMatch"] = "NewMatch";
  HookType["PlayReplay"] = "PlayReplay";
  HookType["MatchStatus"] = "MatchStatus";
  HookType["UserMatchStatus"] = "UserMatchStatus";
})(HookType || (HookType = {}));
var AttributeType;
(function (AttributeType) {
  AttributeType["Text"] = "Text";
  AttributeType["Number"] = "Number";
})(AttributeType || (AttributeType = {}));
var AttributeTarget;
(function (AttributeTarget) {
  AttributeTarget["Match"] = "Match";
  AttributeTarget["Player"] = "Player";
})(AttributeTarget || (AttributeTarget = {}));

/***/ }),

/***/ 663:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 3090);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/signup/signup.component */ 6576);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);












class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent, _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule],
    exports: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent, _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupPageComponent]
  });
})();

/***/ }),

/***/ 3090:
/*!**************************************************************!*\
  !*** ./src/app/features/auth/pages/login/login.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ 4441);
/* harmony import */ var src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/web3/web3-provider.service */ 5763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 6622);















function LoginPageComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Signature");
  }
}
function LoginPageComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.loginError, " ");
  }
}
class LoginPageComponent {
  //private _snackBar = inject(MatSnackBar);
  get walletConnected() {
    return !!this.loginForm.controls['wallet'].value;
  }
  // get walletFieldErrors() {
  //   return this.loginForm.controls['wallet'].errors;
  // }
  constructor(fb, _router, _snackBar, _authService, _web3Provider) {
    this.fb = fb;
    this._router = _router;
    this._snackBar = _snackBar;
    this._authService = _authService;
    this._web3Provider = _web3Provider;
    this.loginForm = this.fb.group({
      wallet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      profile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  ngOnInit() {}
  openSnackBar(message) {
    // this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
    this._snackBar.open(message, undefined, {
      duration: 3000
    });
  }
  connectWallet(event) {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const accounts = yield _this._web3Provider.connect();
        _this.loginForm.controls['wallet'].setValue(accounts[0]?.toUpperCase());
      } catch (error) {
        console.error('Wallet connection error:', error);
      }
    })();
  }
  onSubmit() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userType = _this2.loginForm.controls['profile'].value;
      const {
        message,
        nonce,
        timestamp
      } = yield _this2._authService.getLoginMessage();
      const signer = yield _this2._web3Provider.currentAccount();
      const signature = yield _this2._web3Provider.signPersonal(message);
      _this2._authService.login({
        userType,
        message: message,
        nonce: nonce,
        signer: signer.address,
        timestamp: timestamp,
        signature: signature
      }).then(r => {
        _this2._router.navigate(['new-game']);
      }).catch(({
        message,
        detail
      }) => {
        _this2.loginError = message;
        const m = message + detail.map(d => d + '\n');
        console.error(m);
        // Adiciona o erro ao controle
        // this.loginForm.controls['wallet'].setErrors({
        //   ...this.walletFieldErrors,
        //   unauthorized: message,
        // });
      });
    })();
  }
  showAlert(msg) {
    // usar algum component angular, tipo Toaster
    alert(msg);
  }
  static {
    this.ɵfac = function LoginPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_2__.Web3ProviderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 33,
      vars: 6,
      consts: [["stepper", ""], [1, "page"], [1, "form-container"], [3, "linear"], ["label", "Connect your wallet", 3, "stepControl"], [3, "formGroup"], [1, "form-title"], [1, "full-field"], ["matInput", "", "formControlName", "wallet", "placeholder", "Will be filled once you connect", 3, "readonly"], ["matSuffix", "", "mat-icon-button", "", 2, "margin-right", "10px", 3, "click"], ["svgIcon", "metamask"], [1, "button-area"], ["aria-label", "Select an profile", "formControlName", "profile"], ["value", "Player"], ["value", "GameOwner"], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["matStepLabel", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["style", "margin-top: 10px", "class", "error", 4, "ngIf"], [1, "error", 2, "margin-top", "10px"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-stepper", 3, 0)(4, "mat-step", 4)(5, "form", 5)(6, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Login with your wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "mat-form-field");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.connectWallet($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "mat-radio-group", 12)(15, "mat-radio-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Player");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-radio-button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Owner");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-step");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginPageComponent_ng_template_22_Template, 1, 0, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "You are almost done.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Please we just need you to sign a message using your wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div")(28, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Sign");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, LoginPageComponent_div_32_Template, 2, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6576:
/*!****************************************************************!*\
  !*** ./src/app/features/auth/pages/signup/signup.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageComponent: () => (/* binding */ SignupPageComponent)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ 4441);
/* harmony import */ var src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/web3/web3-provider.service */ 5763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 6622);














function SignupPageComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Personal Information");
  }
}
function SignupPageComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.signupError, " ");
  }
}
function SignupPageComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Signature");
  }
}
class SignupPageComponent {
  constructor(fb, _router, _authService, _web3Provider) {
    this.fb = fb;
    this._router = _router;
    this._authService = _authService;
    this._web3Provider = _web3Provider;
    this.stepOneForm = this.fb.group({
      wallet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      profile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    this.stepTwoForm = this.fb.group({
      taxId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
    });
    this.signatureForm = this.fb.group({
      nonce: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      timestamp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      signature: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  connectWallet(event) {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const accounts = yield _this._web3Provider.connect();
        _this.stepOneForm.controls['wallet'].setValue(accounts[0]?.toUpperCase());
      } catch (error) {
        console.error('Wallet connection error:', error);
      }
    })();
  }
  sign() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          message,
          nonce,
          timestamp
        } = yield _this2._authService.getSignupMessage();
        const signature = yield _this2._web3Provider.signPersonal(message);
        _this2.signatureForm.setValue({
          nonce,
          message,
          timestamp,
          signature
        });
      } catch (e) {
        // TODO: tratar erro
        throw e;
      }
    })();
  }
  submit() {
    var _this3 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          profile,
          wallet
        } = _this3.stepOneForm.value;
        const {
          message,
          nonce,
          timestamp,
          signature
        } = _this3.signatureForm.value;
        const createdPlayer = yield _this3._authService.createPlayer({
          ..._this3.stepTwoForm.value,
          userType: profile,
          wallet: wallet?.toUpperCase()
        }, {
          message,
          nonce,
          timestamp,
          signature
        });
        // TODO: algum toaster
        _this3._router.navigateByUrl('/login');
      } catch (e) {
        _this3.signupError = '';
      }
    })();
  }
  static {
    this.ɵfac = function SignupPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_2__.Web3ProviderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SignupPageComponent,
      selectors: [["app-signup"]],
      decls: 58,
      vars: 11,
      consts: [["stepper", ""], [1, "form-container"], [3, "linear"], ["label", "Connect your wallet", 3, "stepControl"], [3, "formGroup"], [1, "full-field"], ["matInput", "", "formControlName", "wallet", "placeholder", "Will be filled once you connect", 3, "readonly"], ["matSuffix", "", "mat-icon-button", "", 2, "margin-right", "10px", 3, "click"], ["svgIcon", "metamask"], [1, "button-area"], ["aria-label", "Select an profile", "formControlName", "profile"], ["value", "Player"], ["value", "GameOwner"], ["mat-button", "", "matStepperNext", "", 3, "disabled"], [3, "stepControl"], ["matStepLabel", ""], ["matInput", "", "formControlName", "taxId", "required", ""], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], [1, "action-container"], ["mat-button", "", "matStepperPrevious", "", 3, "disabled"], ["mat-button", "", "matStepperNext", ""], ["style", "margin-top: 10px", "class", "error", 4, "ngIf"], [2, "width", "100%", 3, "formGroup"], [2, "width", "100%"], ["matInput", "", "required", "", "readonly", "", "formControlName", "signature"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "click", "disabled"], [1, "error", 2, "margin-top", "10px"]],
      template: function SignupPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "mat-stepper", 2, 0)(3, "mat-step", 3)(4, "form", 4)(5, "div", 5)(6, "mat-form-field");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.connectWallet($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "mat-radio-group", 10)(12, "mat-radio-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Player");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-radio-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Owner");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-step", 14)(19, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignupPageComponent_ng_template_20_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5)(22, "mat-form-field")(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Tell us your Tax ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-form-field")(27, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Tell us your name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field")(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19)(35, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SignupPageComponent_div_39_Template, 2, 1, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-step");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, SignupPageComponent_ng_template_41_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "You are almost done.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Please we just need you to sign a message using your wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "form", 23)(47, "mat-form-field", 24)(48, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Signature");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 19)(52, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.sign());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Sign");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.submit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Send ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.stepOneForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.stepOneForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.stepOneForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.stepTwoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.stepTwoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.stepTwoForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signupError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signatureForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.stepOneForm.valid || !ctx.stepTwoForm.valid || !ctx.signatureForm.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5401:
/*!*****************************************************************************!*\
  !*** ./src/app/features/landing-page/components/banner/banner.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerComponent: () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4175);


class BannerComponent {
  static {
    this.ɵfac = function BannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BannerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 18,
      vars: 0,
      consts: [[1, "colored-container", "banner-container"], [1, "banner-left"], [1, "banner-content-container"], [1, "neutral-text-70"], [1, "banner-button-container"], ["mat-flat-button", "", "href", "#"], ["mat-stroked-button", "", "href", "#"], [1, "banner-right"], ["src", "https://www.toornament.com/img/prismic/d9dd15bb-2e68-4213-bd73-e001ad964ce9_0-illu-top-home.svg"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to Thornament");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6")(6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The home of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "e-sports");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " competition, where you can create or compete in tournaments for your favorite games. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create a Tournament");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Find a Tournament");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor],
      styles: [".banner-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5em;\n  padding: 1em 5em;\n  height: 500px;\n  align-items: center;\n  justify-content: space-between;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: flex-start;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-left[_ngcontent-%COMP%]   .banner-content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1em;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n.banner-container[_ngcontent-%COMP%]   .banner-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1em;\n  margin-top: 1em;\n}\n\n@media (max-width: 768px) {\n  .banner-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 1em;\n  }\n  .banner-left[_ngcontent-%COMP%], .banner-right[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media (max-width: 768px) {\n  .banner-left[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .banner-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .banner-left[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .banner-left[_ngcontent-%COMP%]   .banner-button-container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FBQ047QUFHRTtFQUNFLE9BQUE7QUFESjtBQUVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFFRTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFKRjtFQU9BO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsbUJBQUE7RUFORjtFQU9FO0lBQ0Usa0JBQUE7RUFMSjtFQVFFO0lBQ0UsdUJBQUE7RUFOSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQmFubmVyIFNlY3Rpb25cclxuLmJhbm5lci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1ZW07XHJcbiAgcGFkZGluZzogMWVtIDVlbTtcclxuICBoZWlnaHQ6IDUwMHB4OyAvLyBBbHR1cmEgZml4YSBwYXJhIG8gYmFubmVyXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy8gQ2VudHJhbGl6YSB2ZXJ0aWNhbG1lbnRlIG9zIGl0ZW5zXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvLyBFc3Bhw4PCp2FtZW50byBlbnRyZSBvcyBpdGVucyBubyBiYW5uZXJcclxuICBcclxuICAuYmFubmVyLWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvLyBBanVzdGEgYSBwb3Npw4PCp8ODwqNvIGRvIGNvbnRlw4PCumRvIMODwqAgZXNxdWVyZGFcclxuICAgIC5iYW5uZXItY29udGVudC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxZW07ICAvLyBEaXN0w4PCom5jaWEgZW50cmUgb3MgZWxlbWVudG9zIGludGVybm9zXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLXJpZ2h0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7IC8vIEdhcmFudGUgcXVlIGEgaW1hZ2VtIG9jdXBlIHRvZG8gbyBlc3Bhw4PCp28gZGlzcG9uw4PCrXZlbFxyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtOyAvLyBFc3Bhw4PCp2FtZW50byBlbnRyZSBvcyBib3TDg8K1ZXMgZSBvIGNvbnRlw4PCumRvIGFjaW1hXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBcclxuICAuYmFubmVyLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgLy8gQWp1c3RhIGEgYWx0dXJhIHBhcmEgdGVsYXMgcGVxdWVuYXNcclxuICAgIHBhZGRpbmc6IDFlbTsgLy8gTWVub3MgcGFkZGluZ1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lci1sZWZ0LCAuYmFubmVyLXJpZ2h0IHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTsgIC8vIEdhcmFudGUgcXVlIGFtYm9zIG9zIGxhZG9zIGRvIGJhbm5lciBvY3VwZW0gMTAwJSBkYSBsYXJndXJhXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgLy8gQ2VudHJhbGl6YSBvIGNvbnRlw4PCumRvXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYmFubmVyLWxlZnQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIC8vIENlbnRyYWxpemEgbyBjb250ZcODwrpkb1xyXG4gICAgaDEsIGg2IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8649:
/*!*************************************************************************!*\
  !*** ./src/app/features/landing-page/components/card/card.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class CardComponent {
  constructor() {
    this.width = undefined;
    this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  // Aplica a classe 'full' ao :host quando `width` nao tem algum valor
  get isFull() {
    return !this.width;
  }
  onCardClick(event) {
    //event.preventDefault();
    event.stopPropagation();
    if (this.id && this.onclick) {
      this.onclick.emit(this.id);
    }
  }
  static {
    this.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-landing-page-card"]],
      hostVars: 2,
      hostBindings: function CardComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", ctx.isFull);
        }
      },
      inputs: {
        id: "id",
        image: "image",
        alt: "alt",
        title: "title",
        description: "description",
        width: "width"
      },
      outputs: {
        onclick: "onclick"
      },
      decls: 8,
      vars: 7,
      consts: [[1, "card"], [1, "card-img", 2, "border-radius", "10px", 3, "click", "src"], [1, "card-description"], [1, "content"], [1, "neutral-text-1"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_1_listener($event) {
            return ctx.onCardClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width ? ctx.width : "auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx.onclick ? "pointer" : "auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        }
      },
      styles: [".full[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.card[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overflow: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KC5mdWxsKSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbi5jYXJkIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6271:
/*!***************************************************************************************!*\
  !*** ./src/app/features/landing-page/components/tournaments/tournaments.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TournamentsComponent: () => (/* binding */ TournamentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card.component */ 8649);



function TournamentsComponent_app_landing_page_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-landing-page-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onclick", function TournamentsComponent_app_landing_page_card_6_Template_app_landing_page_card_onclick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showTournamentInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", t_r3.id)("title", t_r3.title)("image", t_r3.image)("description", t_r3.description);
  }
}
class TournamentsComponent {
  constructor() {
    this.featuredTournaments = [];
  }
  showTournamentInfo(id) {
    alert(id);
    return Promise.resolve();
  }
  ngOnInit() {
    this.featuredTournaments = [
    // TODO: tipar
    {
      id: 'mario_kart_64',
      description: 'May 15, 2023',
      title: 'Mario Kart 64',
      image: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/H2x1_N64_MarioKart64.jpg'
    }, {
      id: 'fortnite',
      description: 'June 28, 2023',
      title: 'Fortnite',
      image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000010192/e187004edc284c6827155ae82d1ddf7aefc44b685ddd5bc250d5812c3753b835'
    }, {
      id: 'CODBO6',
      description: 'July 12, 2023',
      title: 'Call of Duty Black OPS 6',
      image: 'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blackops6/meta/BO6_LP-meta_image.jpg'
    }];
  }
  static {
    this.ɵfac = function TournamentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TournamentsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TournamentsComponent,
      selectors: [["app-tournaments"]],
      decls: 7,
      vars: 1,
      consts: [[1, "colored-container"], [1, "container"], [1, "content-container"], [1, "card-list"], [3, "id", "title", "image", "description", "onclick", 4, "ngFor", "ngForOf"], [3, "onclick", "id", "title", "image", "description"]],
      template: function TournamentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Featured Tournaments");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TournamentsComponent_app_landing_page_card_6_Template, 1, 4, "app-landing-page-card", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.featuredTournaments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5em;\n  padding: 5em 5em 0;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5em;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .card-list[_ngcontent-%COMP%] {\n    gap: 2em;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvdG91cm5hbWVudHMvdG91cm5hbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxtQkFBQTtFQUFGO0VBRUE7SUFDRSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNWVtO1xyXG4gIHBhZGRpbmc6IDVlbSA1ZW0gMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLy8gT3JnYW5pemEgb3MgaXRlbnMgZGUgZm9ybWEgdmVydGljYWxcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgLy8gQ2VudHJhbGl6YSBvIGNvbnRlw4PCumRvIGRhIHNlw4PCp8ODwqNvXHJcbn1cclxuXHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMS41ZW07XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxLjVlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7ICAvLyBQZXJtaXRlIHF1ZSBvcyBjYXJkcyBzZSBhanVzdGVtIGVtIG3Dg8K6bHRpcGxhcyBsaW5oYXMgc2UgbmVjZXNzw4PCoXJpb1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkLWxpc3Qge1xyXG4gICAgZ2FwOiAyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8vIENvbG9jYSBvcyBjYXJkcyBlbSB1bWEgY29sdW5hXHJcbiAgICAvLyBhcHAtbGFuZGluZy1wYWdlLWNhcmQge1xyXG4gICAgLy8gICB3aWR0aDogMjAwcHg7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7407:
/*!***********************************************************************!*\
  !*** ./src/app/features/landing-page/components/why/why.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhyComponent: () => (/* binding */ WhyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card.component */ 8649);



function WhyComponent_app_landing_page_card_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-landing-page-card", 5);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", r_r1.id)("title", r_r1.title)("image", r_r1.image)("description", r_r1.description);
  }
}
class WhyComponent {
  constructor() {
    this.whyTournamentReasons = [];
  }
  ngOnInit() {
    this.whyTournamentReasons = [
    // TODO: tipar
    {
      id: 'reason1',
      title: 'Fast and easy to use',
      description: 'Create a tournament in minutes and manage everything from brackets to scoring',
      image: 'https://cdn.usegalileo.ai/stability/de7c438a-93bf-4fe4-b565-08ff60933ca5.png'
    }, {
      id: 'reason2',
      title: 'Game-agnostic',
      description: 'Supports any game, including console, PC, and mobile titles. Choose the format and rules that suit you',
      image: 'https://cdn.usegalileo.ai/stability/de7c438a-93bf-4fe4-b565-08ff60933ca5.png'
    }, {
      id: 'reason3',
      title: 'Community driven',
      description: 'Join our community of gamers, streamers, and creators. Participate in tournaments, share content, and engage with other members',
      image: 'https://cdn.usegalileo.ai/sdxl10/3293701b-fd07-4273-abb9-44c13ef2c184.png'
    }];
  }
  static {
    this.ɵfac = function WhyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WhyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WhyComponent,
      selectors: [["app-why"]],
      decls: 10,
      vars: 1,
      consts: [[1, "inverse-colored-container"], [1, "container"], [1, "content-container"], [1, "card-list"], [3, "id", "title", "image", "description", 4, "ngFor", "ngForOf"], [3, "id", "title", "image", "description"]],
      template: function WhyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Why Tournament");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6")(6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Thornament is designed to be a fun, flexible, and inclusive platform for all types of gamers. Whether you're a competitive player, a casual fan, or a content creator, you can find or create tournaments that match your interests and skill level. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WhyComponent_app_landing_page_card_9_Template, 1, 4, "app-landing-page-card", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.whyTournamentReasons);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5em;\n  padding: 5em 5em 0;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5em;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5em;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .card-list[_ngcontent-%COMP%] {\n    gap: 2em;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvd2h5L3doeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFBO0VBQ0Y7RUFDQTtJQUNFLFFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNWVtO1xyXG4gICAgcGFkZGluZzogNWVtIDVlbSAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8vIE9yZ2FuaXphIG9zIGl0ZW5zIGRlIGZvcm1hIHZlcnRpY2FsXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgLy8gQ2VudHJhbGl6YSBvIGNvbnRlw4PCumRvIGRhIHNlw4PCp8ODwqNvXHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxLjVlbTtcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEuNWVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgIC8vIFBlcm1pdGUgcXVlIG9zIGNhcmRzIHNlIGFqdXN0ZW0gZW0gbcODwrpsdGlwbGFzIGxpbmhhcyBzZSBuZWNlc3PDg8KhcmlvXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNhcmQtbGlzdCB7XHJcbiAgICBnYXA6IDJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLy8gQ29sb2NhIG9zIGNhcmRzIGVtIHVtYSBjb2x1bmFcclxuICAgIC8vIGFwcC1sYW5kaW5nLXBhZ2UtY2FyZCB7XHJcbiAgICAvLyAgIHdpZHRoOiAyMDBweDtcclxuICAgIC8vIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4389:
/*!**************************************************************!*\
  !*** ./src/app/features/landing-page/landing-page.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingPageModule: () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _pages_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing-page.component */ 4015);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/core.module */ 8423);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ 8649);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/banner/banner.component */ 5401);
/* harmony import */ var _components_why_why_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/why/why.component */ 7407);
/* harmony import */ var _components_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tournaments/tournaments.component */ 6271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);












class LandingPageModule {
  static {
    this.ɵfac = function LandingPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: LandingPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.AppCoreModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LandingPageModule, {
    declarations: [_pages_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingPageComponent, _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent, _components_why_why_component__WEBPACK_IMPORTED_MODULE_5__.WhyComponent, _components_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_6__.TournamentsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.AppCoreModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _pages_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingPageComponent]
  });
})();

/***/ }),

/***/ 4015:
/*!***********************************************************************!*\
  !*** ./src/app/features/landing-page/pages/landing-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingPageComponent: () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/banner/banner.component */ 5401);
/* harmony import */ var _components_why_why_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/why/why.component */ 7407);
/* harmony import */ var _components_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tournaments/tournaments.component */ 6271);




class LandingPageComponent {
  static {
    this.ɵfac = function LandingPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      decls: 3,
      vars: 0,
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-banner")(1, "app-why")(2, "app-tournaments");
        }
      },
      dependencies: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_why_why_component__WEBPACK_IMPORTED_MODULE_1__.WhyComponent, _components_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_2__.TournamentsComponent],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .banner-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 1em;\n  }\n  .banner-left[_ngcontent-%COMP%], .banner-right[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    align-items: center;\n  }\n  .info-container[_ngcontent-%COMP%] {\n    padding: 2em;\n    gap: 3em;\n  }\n  .featured-card-list[_ngcontent-%COMP%], \n   .reason-card-list[_ngcontent-%COMP%] {\n    gap: 2em;\n    flex-direction: column;\n  }\n  .featured-card-list[_ngcontent-%COMP%]   app-landing-page-card[_ngcontent-%COMP%], \n   .reason-card-list[_ngcontent-%COMP%]   app-landing-page-card[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1wYWdlL3BhZ2VzL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFHQTtFQUVFO0lBQ0Usc0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBRkY7RUFLQTtJQUNFLFlBQUE7SUFDQSxRQUFBO0VBSEY7RUFNQTs7SUFFRSxRQUFBO0lBQ0Esc0JBQUE7RUFKRjtFQUtFOztJQUNFLFlBQUE7RUFGSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTsgIC8vIEdhcmFudGlyIHF1ZSBvIGhvc3Qgb2N1cGUgdG9kYSBhIGxhcmd1cmEgZGlzcG9uw4PCrXZlbFxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZpZGFkZSBwYXJhIHRlbGFzIG1lbm9yZXNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgXHJcbiAgLmJhbm5lci1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogYXV0bzsgIC8vIEFqdXN0YSBhIGFsdHVyYSBwYXJhIHRlbGFzIHBlcXVlbmFzXHJcbiAgICBwYWRkaW5nOiAxZW07IC8vIE1lbm9zIHBhZGRpbmdcclxuICB9XHJcblxyXG4gIC5iYW5uZXItbGVmdCwgLmJhbm5lci1yaWdodCB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAvLyBHYXJhbnRlIHF1ZSBhbWJvcyBvcyBsYWRvcyBkbyBiYW5uZXIgb2N1cGVtIDEwMCUgZGEgbGFyZ3VyYVxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIC8vIENlbnRyYWxpemEgbyBjb250ZcODwrpkb1xyXG4gIH1cclxuXHJcbiAgLmluZm8tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJlbTsgIC8vIFJlZHV6IG8gcGFkZGluZyBlbSB0ZWxhcyBtZW5vcmVzXHJcbiAgICBnYXA6IDNlbTsgIC8vIFJlZHV6IG8gZXNwYcODwqdhbWVudG8gZW50cmUgb3MgZWxlbWVudG9zXHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZWQtY2FyZC1saXN0LFxyXG4gIC5yZWFzb24tY2FyZC1saXN0IHtcclxuICAgIGdhcDogMmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8vIENvbG9jYSBvcyBjYXJkcyBlbSB1bWEgY29sdW5hXHJcbiAgICBhcHAtbGFuZGluZy1wYWdlLWNhcmQge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7317:
/*!******************************************************!*\
  !*** ./src/app/features/new-game/new-game.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewGameModule: () => (/* binding */ NewGameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _pages_new_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/new-game.component */ 9135);
/* harmony import */ var _services_token_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-factory.service */ 1344);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/game.service */ 5043);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);















class NewGameModule {
  static {
    this.ɵfac = function NewGameModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NewGameModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: NewGameModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_services_token_factory_service__WEBPACK_IMPORTED_MODULE_1__.TokenFactoryService, _services_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NewGameModule, {
    declarations: [_pages_new_game_component__WEBPACK_IMPORTED_MODULE_0__.NewGameComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 9135:
/*!***************************************************************!*\
  !*** ./src/app/features/new-game/pages/new-game.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewGameComponent: () => (/* binding */ NewGameComponent)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dto/enum/user_type */ 8392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ 5043);
/* harmony import */ var src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/web3/web3-provider.service */ 5763);
/* harmony import */ var _services_token_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/token-factory.service */ 1344);
/* harmony import */ var _shared_components_tag_box_tag_box_tag_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/tag-box/tag-box/tag-box.component */ 8422);
/* harmony import */ var _shared_components_object_box_object_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/object-box/object-box.component */ 8789);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);

















const _c0 = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
function NewGameComponent_ProjectionFallback_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "What is the name of your game?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NewGameComponent_ProjectionFallback_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Lets tag your game, so people can find it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-tag-box", 24);
  }
}
function NewGameComponent_ProjectionFallback_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Does your game supports Cross Play? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NewGameComponent_ProjectionFallback_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Does your game allow people to vote in case of conflict about match result? (nao lembro o que isso eh) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NewGameComponent_ProjectionFallback_48_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attr_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", attr_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attr_r2);
  }
}
function NewGameComponent_ProjectionFallback_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What player's attributes does your game support? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "object-box", 27)(3, "div", 8)(4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](8, NewGameComponent_ProjectionFallback_48_For_9_Template, 2, 2, "mat-option", 29, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.playerAttrForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r2.availableAttrTypes);
  }
}
function NewGameComponent_ProjectionFallback_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What type of matches does your game support? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-tag-box", 32);
  }
}
function NewGameComponent_ProjectionFallback_61_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attr_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", attr_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attr_r4);
  }
}
function NewGameComponent_ProjectionFallback_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What match's attributes does your game support? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "object-box", 27)(3, "div", 8)(4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](8, NewGameComponent_ProjectionFallback_61_For_9_Template, 2, 2, "mat-option", 29, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.matchAttrForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r2.availableAttrTypes);
  }
}
function NewGameComponent_ProjectionFallback_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " When is the maintence period of your game? (please, use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cron Expression");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 8)(6, "mat-form-field")(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Maintence");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function NewGameComponent_ProjectionFallback_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is the periodicity we can send messages to your game, so we can avoid struggle it? (please use a quantity followed by an unit, ex: 100/ms) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 8)(3, "mat-form-field")(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Throughput");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function NewGameComponent_ProjectionFallback_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " What is the server(s) your game is running on? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "object-box", 36)(3, "div", 8)(4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "DNS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.serversForm);
  }
}
function NewGameComponent_ProjectionFallback_87_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hook_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", hook_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](hook_r5);
  }
}
function NewGameComponent_ProjectionFallback_87_For_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const verb_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", verb_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](verb_r6);
  }
}
function NewGameComponent_ProjectionFallback_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "object-box", 38)(1, "div", 8)(2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](6, NewGameComponent_ProjectionFallback_87_For_7_Template, 2, 2, "mat-option", 29, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](12, NewGameComponent_ProjectionFallback_87_For_13_Template, 2, 2, "mat-option", 29, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.hookForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r2.availableHooks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r2.availableVerbs);
  }
}
function NewGameComponent_ProjectionFallback_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NewGameComponent_ProjectionFallback_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NewGameComponent_ProjectionFallback_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Decimals");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NewGameComponent_ProjectionFallback_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Initial Supply");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class NewGameComponent {
  get basicInfoSection() {
    return this.form.controls['basicInfoSection'];
  }
  get providerSection() {
    return this.form.controls['providerSection'];
  }
  get infraSection() {
    return this.form.controls['infraSection'];
  }
  get matchSection() {
    return this.form.controls['matchSection'];
  }
  get playerSection() {
    return this.form.controls['playerSection'];
  }
  get gameTokenSection() {
    return this.form.controls['gameTokenSection'];
  }
  get integrationSection() {
    return this.form.controls['integrationSection'];
  }
  constructor(_gameService, _formBuilder, _provider, _tokenFactoryService) {
    this._gameService = _gameService;
    this._formBuilder = _formBuilder;
    this._provider = _provider;
    this._tokenFactoryService = _tokenFactoryService;
    this.availableVerbs = ['GET', 'POST'];
    this.availableHooks = Object.values(src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_1__.HookType);
    this.availableAttrTypes = Object.values(src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_1__.AttributeType);
    this.availableAttrTargets = Object.values(src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_1__.AttributeTarget);
    this.hookForm = _formBuilder.group({
      url: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      verb: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    this.matchAttrForm = _formBuilder.group({
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    this.playerAttrForm = _formBuilder.group({
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    this.serversForm = _formBuilder.group({
      dns: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    // TODO: colocar os validadores
    this.form = this._formBuilder.group({
      accounts: [[], []],
      matchSection: this._formBuilder.group({
        matchTypes: ['', []],
        attributes: [[], []]
      }),
      playerSection: this._formBuilder.group({
        attributes: [[], []]
      }),
      gameTokenSection: this._formBuilder.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        symbol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        decimals: [18, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        initialSupply: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      }),
      basicInfoSection: this._formBuilder.group({
        name: ['', []],
        tags: [[], []],
        allowCrossplay: [false, []],
        allowPlatformVoting: [false, []]
      }),
      infraSection: this._formBuilder.group({
        servers: [[], []],
        throughput: ['', []],
        maintenceTimeCronExpr: ['', []]
      }),
      providerSection: this._formBuilder.group({
        isPSNEnabled: [false, []],
        isEpicEnabled: [false, []],
        isXboxEnabled: [false, []],
        isSteamEnabled: [false, []]
      }),
      integrationSection: this._formBuilder.group({
        hooks: [[], []]
      })
    });
  }
  ngOnInit() {
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  connect() {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.controls['accounts'].setValue(yield _this._tokenFactoryService.connect());
    })();
  }
  createGame() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        hooks
      } = _this2.integrationSection.value;
      const {
        attributes: playerAttributes
      } = _this2.playerSection.value;
      const {
        matchTypes,
        attributes: matchAttributes
      } = _this2.matchSection.value;
      const {
        name,
        tags,
        allowCrossplay,
        allowPlatformVoting
      } = _this2.basicInfoSection.value;
      const {
        servers,
        throughput,
        maintenceTimeCronExpr
      } = _this2.infraSection.value;
      const {
        isPSNEnabled,
        isEpicEnabled,
        isXboxEnabled,
        isSteamEnabled
      } = _this2.providerSection.value;
      const {
        symbol,
        decimals,
        initialSupply,
        name: tokenName
      } = _this2.gameTokenSection.value;
      const payload = {
        name,
        hooks,
        allowCrossplay,
        isEpicEnabled,
        isPSNEnabled,
        isSteamEnabled,
        isXboxEnabled,
        matchTypes,
        servers,
        tags,
        allowPlatformVoting,
        throughput,
        maintenceTimeCronExpr,
        attributes: [...matchAttributes, ...playerAttributes],
        gameToken: {
          symbol,
          decimals,
          initialSupply,
          name: tokenName
        }
      };
      _this2._gameService.create(payload).then(response => {
        return _this2._tokenFactoryService.deployToken({
          ...response.signatureResult
        });
      }).then(() => {
        // mostrar sucesso ao criar token
      }).catch(err => {
        // TODO: tratar
      });
    })();
  }
  // Apagar após testes
  loadFakeGame() {
    var _this3 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3._gameService.getFakeGame().then(response => {
        const {
          name,
          tags,
          hooks,
          servers,
          matchTypes,
          attributes,
          throughput,
          isPSNEnabled,
          isEpicEnabled,
          isXboxEnabled,
          allowCrossplay,
          isSteamEnabled,
          maintenceTimeCronExpr,
          allowPlatformVoting,
          gameToken
        } = response;
        const matchAttr = attributes.filter(a => a.target === src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_1__.AttributeTarget.Match);
        const playerAttr = attributes.filter(a => a.target === src_app_dto_enum_user_type__WEBPACK_IMPORTED_MODULE_1__.AttributeTarget.Player);
        // AJUDA: embora as linhas acimas estejam preenchidas
        // a linha abaixo nao surte efeito, o form nao preenche
        // TALVEZ TA FALTANDO PREENCHER ALGUM CAMPO
        _this3.form.patchValue({
          matchSection: {
            matchTypes,
            attributes: matchAttr
          },
          playerSection: {
            attributes: playerAttr
          },
          gameTokenSection: {
            name: gameToken.name,
            symbol: gameToken.symbol,
            decimals: gameToken.decimals,
            initialSupply: gameToken.initialSupply
          },
          basicInfoSection: {
            name,
            tags,
            allowCrossplay,
            allowPlatformVoting
          },
          infraSection: {
            servers,
            throughput,
            maintenceTimeCronExpr
          },
          providerSection: {
            isPSNEnabled,
            isEpicEnabled,
            isXboxEnabled,
            isSteamEnabled
          },
          integrationSection: {
            hooks
          }
        });
      }).catch(err => {
        // TODO: tratar
      });
    })();
  }
  static {
    this.ɵfac = function NewGameComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NewGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_3__.Web3ProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_token_factory_service__WEBPACK_IMPORTED_MODULE_4__.TokenFactoryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NewGameComponent,
      selectors: [["app-new-game"]],
      ngContentSelectors: _c0,
      decls: 109,
      vars: 22,
      consts: [["stepper", ""], [1, "page"], ["mat-button", "", 3, "click"], [1, "form-container"], [3, "linear"], ["label", "Basic Information", 3, "stepControl"], [1, "section-description"], [3, "formGroup"], [1, "full-field"], [1, "next-button-area"], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["label", "Authentication", 3, "stepControl"], ["formControlName", "isXboxEnabled"], ["formControlName", "isSteamEnabled"], ["formControlName", "isEpicEnabled"], ["formControlName", "isPSNEnabled"], ["label", "Player", 3, "stepControl"], ["label", "Match", 3, "stepControl"], ["label", "Infrasctructure", 3, "stepControl"], ["label", "Integration", 3, "stepControl"], ["label", "Token Configuration", 3, "stepControl"], ["mat-button", "", 3, "click", "disabled"], [1, "ctrl-info"], ["matInput", "", "formControlName", "name", "placeholder", "What is the name of your game"], ["label", "Tags", "formControlName", "tags", "placeholder", "Ex: Shooting"], ["formControlName", "allowCrossplay"], ["formControlName", "allowPlatformVoting"], ["matInput", "", "displayField", "name", "formControlName", "attributes", 3, "formGroup"], ["name", "type", "formControlName", "type"], [3, "value"], ["matInput", "", "name", "name", "formControlName", "name"], ["matInput", "", "name", "description", "formControlName", "description"], ["label", "Match Types", "formControlName", "matchTypes", "placeholder", "Ex: Battle Royal"], ["target", "_blank", "href", "http://www.cronmaker.com/"], ["matInput", "", "placeholder", "Ex: * * * * *", "name", "maintenceTimeCronExpr", "formControlName", "maintenceTimeCronExpr"], ["matInput", "", "name", "throughput", "placeholder", "Ex: 1000/ms", "formControlName", "throughput"], ["matInput", "", "displayField", "name", "formControlName", "servers", 3, "formGroup"], ["matInput", "", "name", "dns", "formControlName", "dns"], ["matInput", "", "formControlName", "hooks", "displayField", "type", 3, "formGroup"], ["name", "verb", "formControlName", "verb"], ["matInput", "", "name", "url", "formControlName", "url"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "symbol"], ["matInput", "", "formControlName", "decimals"], ["matInput", "", "formControlName", "initialSupply"]],
      template: function NewGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " New Game ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewGameComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.loadFakeGame());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Fill Automatically");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "mat-stepper", 4, 0)(8, "mat-step", 5)(9, "div", 6)(10, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "We need some basic information about your game");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "form", 7)(13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](14, 0, null, NewGameComponent_ProjectionFallback_14_Template, 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](16, 1, null, NewGameComponent_ProjectionFallback_16_Template, 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](18, 2, null, NewGameComponent_ProjectionFallback_18_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](20, 3, null, NewGameComponent_ProjectionFallback_20_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9)(23, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-step", 11)(26, "div", 6)(27, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " In order to user bind his account at thornament with his account inside your game, we need you to provide us some information about the providers your game supports ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "form", 7)(30, "div", 8)(31, "mat-checkbox", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Does you game supports XBOX as an authentication provider? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-checkbox", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Does you game supports Steam as an authentication provider? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-checkbox", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Does you game supports Epic Game as an authentication provider? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-checkbox", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " Does you game supports Play Station as an authentication provider? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 9)(40, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-step", 16)(43, "div", 6)(44, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " In order to execute and follow along with tournaments for your game, we need some information about player's attributes your game supports. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "form", 7)(47, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](48, 4, null, NewGameComponent_ProjectionFallback_48_Template, 18, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 9)(51, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-step", 17)(54, "div", 6)(55, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, " In order to execute and follow along with tournaments for your game, we need some information about match's attributes your game supports. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "form", 7)(58, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](59, 5, null, NewGameComponent_ProjectionFallback_59_Template, 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](61, 6, null, NewGameComponent_ProjectionFallback_61_Template, 18, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 9)(64, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "mat-step", 18)(67, "div", 6)(68, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "We need some information about your infrastructure");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "form", 7)(71, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](72, 7, null, NewGameComponent_ProjectionFallback_72_Template, 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](74, 8, null, NewGameComponent_ProjectionFallback_74_Template, 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](76, 9, null, NewGameComponent_ProjectionFallback_76_Template, 12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 9)(79, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "mat-step", 19)(82, "div", 6)(83, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, " Here you provide us information in order to integrate your game with Thornament ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "form", 7)(86, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](87, 10, null, NewGameComponent_ProjectionFallback_87_Template, 18, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 9)(90, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "mat-step", 20)(93, "div", 6)(94, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, " Now we are going to create a Crypto Coin for your game, so people will be able to create and pay to to join tournaments ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "form", 7)(97, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](98, 11, null, NewGameComponent_ProjectionFallback_98_Template, 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](100, 12, null, NewGameComponent_ProjectionFallback_100_Template, 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](102, 13, null, NewGameComponent_ProjectionFallback_102_Template, 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](104, 14, null, NewGameComponent_ProjectionFallback_104_Template, 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 9)(107, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NewGameComponent_Template_button_click_107_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.createGame());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, " Create ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("linear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.basicInfoSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.basicInfoSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.basicInfoSection.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.providerSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.providerSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.providerSection.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.playerSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.playerSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.playerSection.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.matchSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.matchSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.matchSection.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.infraSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.infraSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.infraSection.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.integrationSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.integrationSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.integrationSection.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.gameTokenSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.gameTokenSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.gameTokenSection.valid);
        }
      },
      dependencies: [_shared_components_tag_box_tag_box_tag_box_component__WEBPACK_IMPORTED_MODULE_5__.TagBoxComponent, _shared_components_object_box_object_box_component__WEBPACK_IMPORTED_MODULE_6__.ObjectBoxComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperNext, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.next-button-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbmV3LWdhbWUvcGFnZXMvbmV3LWdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtYnV0dG9uLWFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi8vIC5idXR0b24tYXJlYSB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jdHJsLWluZm8ge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIC5jaGVja2JveC1ncm91cCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gfVxyXG5cclxuLy8gZm9ybSB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogODAlO1xyXG4vLyAgICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIC5idXR0b24tZ3JvdXAge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuZm9ybS1jb250ZW50IHtcclxuLy8gICAgICAgICBmbGV4OiAxO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbi8vICAgICB3aWR0aDogMHB4O1xyXG4vLyAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4vLyAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5043:
/*!************************************************************!*\
  !*** ./src/app/features/new-game/services/game.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameService: () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/config/config.service */ 7629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class GameService {
  constructor(_http, _config) {
    this._http = _http;
    this._config = _config;
  }
  create(newGame) {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = _this._http.post(`${_this._config.backendBaseUrl}/api/game`, newGame);
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(response);
    })();
  }
  // TODO: remover após testes
  getFakeGame() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = _this2._http.get(`${_this2._config.backendBaseUrl}/api/test/game/new`);
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(response);
    })();
  }
  static {
    this.ɵfac = function GameService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["default"]));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac
    });
  }
}

/***/ }),

/***/ 1344:
/*!*********************************************************************!*\
  !*** ./src/app/features/new-game/services/token-factory.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenFactoryService: () => (/* binding */ TokenFactoryService)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/config/config.service */ 7629);
/* harmony import */ var src_app_dto_blockchain_token_factory_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/blockchain/token_factory_contract */ 1584);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ 7471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/web3/web3-provider.service */ 5763);







class TokenFactoryService {
  constructor(_http, _config, _provider) {
    this._http = _http;
    this._config = _config;
    this._provider = _provider;
  }
  checkMetamaskInstallation() {
    if (window.ethereum == undefined) {
      // TODO: talvez um toastr ou redirecionar para outra pagina
      alert('Metamask wallet is not installed');
      return false;
    }
    return true;
  }
  // TODO:
  // talvez essa parte de conectar e
  // escolher a conta possa ser outro servico
  // MetamaskService talvez
  connect() {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this.checkMetamaskInstallation()) {
          console.error('MetaMask não detectado.');
        }
        // talvez nao precise
        // as duas formas funcionam
        const accounts = yield _this._provider.send('eth_requestAccounts', []);
        // const accounts = await this.provider.listAccounts(); assim retorna JsonRPCSigner
        return accounts;
      } catch (e) {
        console.error(e);
        throw e;
      }
    })();
  }
  deployToken(data) {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            debugger;
            //TODO: talvez, antes de enviar para o blockchain, devemos validar os parametros com nosso back,
            // ele deve checar se ja existe o token por exemplo;
            const {
              to,
              name,
              owner,
              nonce,
              symbol,
              decimals,
              signature,
              contractABI,
              initialSupply,
              contractAddress
            } = data;
            // sera que o nonce precisa ser assim?
            // const bigNonce = BigInt(nonce);
            const supply = (0,ethers__WEBPACK_IMPORTED_MODULE_4__.parseUnits)(initialSupply, decimals);
            const signer = yield _this2._provider.getSigner();
            const contract = new src_app_dto_blockchain_token_factory_contract__WEBPACK_IMPORTED_MODULE_2__.TokenFactoryContract(contractAddress, contractABI, signer);
            // https://docs.ethers.org/v6/api/utils/events/
            // TODO: ta emitindo aparentemente mais de uma vez
            contract.on('SucceededDeploy', (creator, newTokenAddress) => {
              console.log(`Token criado por '${creator}' com sucesso em '${newTokenAddress}'`);
              resolve(newTokenAddress);
            });
            contract.on('FailedDeploy', (creator, reason) => {
              console.log(`Falha ao criar token por '${creator}': ${reason}`);
              reject(reason);
            });
            const estimatedGas = yield contract.create.estimateGas(nonce, name, symbol, supply, signature.r, signature.s, signature.v);
            const tx = yield contract.create(nonce, name, symbol, supply, signature.r, signature.s, signature.v, {
              gasLimit: estimatedGas
            });
            // TODO: nao sei para que usar o resultado
            yield tx.wait();
          } catch (error) {
            // TODO: nao sei se tem um jeito de mostrar um erro amigavel
            debugger;
            console.error('Erro ao deployar o token:', error);
            return reject(error);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  static {
    this.ɵfac = function TokenFactoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TokenFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_3__.Web3ProviderService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: TokenFactoryService,
      factory: TokenFactoryService.ɵfac
    });
  }
}

/***/ }),

/***/ 7594:
/*!*************************************************************************!*\
  !*** ./src/app/features/no-web3-provider/no-web3-provider.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoWeb3ProviderComponent: () => (/* binding */ NoWeb3ProviderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class NoWeb3ProviderComponent {
  static {
    this.ɵfac = function NoWeb3ProviderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NoWeb3ProviderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoWeb3ProviderComponent,
      selectors: [["app-no-web3-provider"]],
      decls: 2,
      vars: 0,
      template: function NoWeb3ProviderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please install some browser wallet like metamask or other Ethereum compatible wallet\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2599:
/*!*******************************************************************************!*\
  !*** ./src/app/features/provider-account/pages/provider-account.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProviderAccountComponent: () => (/* binding */ ProviderAccountComponent)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/config/config.service */ 7629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);







function ProviderAccountComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r1.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r1.username);
  }
}
class ProviderAccountComponent {
  constructor(_config, _httpClient) {
    this._config = _config;
    this._httpClient = _httpClient;
    this.accounts = [];
  }
  ngOnInit() {
    window.addEventListener('message', this.handleAuthResponse.bind(this), false);
  }
  ngOnDestroy() {
    window.removeEventListener('message', this.handleAuthResponse.bind(this));
  }
  steamLogin() {
    var _this = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const windowFeatures = 'width=600,height=700,resizable=yes,scrollbars=yes,status=yes';
      const url = `${_this._config.backendBaseUrl}/api/auth/steam`;
      const popup = window.open(url, 'steamWindow', windowFeatures);
      if (!popup) {
        // TODO: usar toastr ou algo assim
        alert('O popup foi bloqueado. Por favor, permita popups para este site.');
        return;
      }
    })();
  }
  psnLogin() {
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  xboxLogin() {
    var _this2 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const windowFeatures = 'width=600,height=700,resizable=yes,scrollbars=yes,status=yes';
      const url = `${_this2._config.backendBaseUrl}/api/auth/xbox`;
      const popup = window.open(url, 'steamWindow', windowFeatures);
      if (!popup) {
        // TODO: usar toastr ou algo assim
        alert('O popup foi bloqueado. Por favor, permita popups para este site.');
        return;
      }
    })();
  }
  googleLogin() {
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  handleAuthResponse(evt) {
    var _this3 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log(evt);
      const {
        success,
        name,
        payload,
        provider
      } = evt.data;
      if (name !== '3rd_auth') return;
      if (!success) {
        // TODO: mostrar algum alerta (toastr sei la)
        alert(payload);
      }
      switch (provider) {
        case 'steam':
          yield _this3.handleSteamAuthResponse(payload);
          break;
        default:
          break;
      }
    })();
  }
  handleSteamAuthResponse(payload) {
    var _this4 = this;
    return (0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        avatar,
        profileUrl,
        personaName,
        steamId
      } = payload;
      _this4.accounts.push({
        avatar,
        provider: 'steam',
        profile: profileUrl,
        providerId: steamId,
        username: personaName
      });
    })();
  }
  static {
    this.ɵfac = function ProviderAccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProviderAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProviderAccountComponent,
      selectors: [["app-provider-account"]],
      decls: 28,
      vars: 1,
      consts: [[1, "page"], [1, "action-area"], [1, "left"], ["mat-button", "", 3, "click"], ["svgIcon", "steam"], ["mat-button", "", "disabled", "", 3, "click"], ["svgIcon", "psn"], ["svgIcon", "xbox"], ["svgIcon", "google"], [1, "right"], [1, "account-list"], [4, "ngFor", "ngForOf"]],
      template: function ProviderAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Account Binding");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Providers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProviderAccountComponent_Template_button_click_7_listener() {
            return ctx.steamLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Bind your Steam account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProviderAccountComponent_Template_button_click_11_listener() {
            return ctx.psnLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Bind your PSN account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProviderAccountComponent_Template_button_click_15_listener() {
            return ctx.xboxLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Bind your XBOX");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProviderAccountComponent_Template_button_click_19_listener() {
            return ctx.googleLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Bind your Google account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Accounts");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ProviderAccountComponent_div_27_Template, 5, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.accounts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
      styles: [".action-area[_ngcontent-%COMP%] {\n  gap: 1rem;\n  height: 100%;\n  display: flex;\n  position: relative;\n}\n.action-area[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.action-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.account-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvdmlkZXItYWNjb3VudC9wYWdlcy9wcm92aWRlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRVI7QUFBSTtFQUNJLE9BQUE7RUFDQSxhQUFBO0FBRVI7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWFyZWEge1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjY291bnQtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8339:
/*!*************************************************!*\
  !*** ./src/app/initializers/app.initializer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appInitializer: () => (/* binding */ appInitializer)
/* harmony export */ });
/* harmony import */ var C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/config/config.service */ 7629);
/* harmony import */ var _core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/web3/web3-provider.service */ 5763);





function initalizeServices(http, configService, web3Provider) {
  return /*#__PURE__*/(0,C_Projetos_thornament_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    try {
      yield configService.load(http);
      // inicializa algum outro service
    } catch (e) {
      // fazer algo
      console.log(e);
    }
  });
}
const appInitializer = {
  multi: true,
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__.APP_INITIALIZER,
  deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient, _core_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["default"], _core_services_web3_web3_provider_service__WEBPACK_IMPORTED_MODULE_2__.Web3ProviderService],
  // carrega as configs async
  useFactory: initalizeServices
};

/***/ }),

/***/ 8789:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/object-box/object-box.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectBoxComponent: () => (/* binding */ ObjectBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);







const _c0 = [[["", "labelControl", ""]], "*"];
const _c1 = ["[labelControl]", "*"];
function ObjectBoxComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ObjectBoxComponent_For_4_Template_mat_chip_row_removed_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeItem(item_r2));
    })("click", function ObjectBoxComponent_For_4_Template_mat_chip_row_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.enterEditMode(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2[ctx_r2.displayField], " ");
  }
}
class ObjectBoxComponent {
  get editMode() {
    return !!this.editingItem;
  }
  constructor() {
    this.values = [];
    this.editingItem = undefined;
  }
  ngAfterContentInit() {
    this.formGroup.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.TouchedChangeEvent)).subscribe({
      next: evt => {
        if (evt.touched) this._onTouched();
      }
    });
  }
  writeValue(values) {
    if (!Array.isArray(values)) return;
    this.values = values ?? [];
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    for (const name in this.formGroup?.controls) {
      const ctrl = this.formGroup.controls[name];
      if (isDisabled) ctrl.disable({
        onlySelf: true,
        emitEvent: false
      });
    }
  }
  resetControls() {
    this.formGroup?.reset();
  }
  addItem() {
    const item = this.formGroup.value;
    const existing = this.values?.length > 0 && this.values.find(v => v[this.displayField] === item[this.displayField]);
    if (existing) {
      this.resetControls();
      return;
    }
    this.values.push({
      ...item
    });
    this._onChange(this.values);
    this.resetControls();
  }
  enterEditMode(item) {
    const obj = {
      ...item
    };
    this.editingItem = obj;
    this.formGroup.setValue(obj);
  }
  exitEditMode() {
    this.editingItem = undefined;
    this.resetControls();
  }
  updateItem() {
    const updatedValue = this.formGroup.value;
    const idx = this.values.findIndex(v => v[this.displayField] == this.editingItem[this.displayField]);
    if (idx < 0) return;
    const existing = this.values?.find(v => v[this.displayField] === updatedValue[this.displayField]);
    if (existing) {
      this.resetControls();
      return;
    }
    this.values[idx] = updatedValue;
    this._onChange(this.values);
    this.editingItem = undefined;
    this.resetControls();
  }
  removeItem(item) {
    const idx = this.values?.findIndex(v => v[this.displayField] === item[this.displayField]);
    if (idx < 0) return;
    this.values.splice(idx, 1);
    if (this._onChange) this._onChange(this.values);
  }
  static {
    this.ɵfac = function ObjectBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ObjectBoxComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ObjectBoxComponent,
      selectors: [["object-box"]],
      inputs: {
        formGroup: "formGroup",
        displayField: "displayField"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ObjectBoxComponent)
      }])],
      ngContentSelectors: _c1,
      decls: 14,
      vars: 5,
      consts: [[1, "object-box"], [1, "chips-container"], [1, "fields-container"], [1, "buttons-container"], ["mat-button", "", 3, "click", "hidden", "disabled"], ["mat-button", "", 3, "click", "hidden"], [3, "removed", "click"], ["matChipRemove", "", "aria-label", "'remove reactive form' + keyword"]],
      template: function ObjectBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](3, ObjectBoxComponent_For_4_Template, 5, 1, "mat-chip-row", null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectBoxComponent_Template_button_click_8_listener() {
            return ctx.addItem();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectBoxComponent_Template_button_click_10_listener() {
            return ctx.exitEditMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectBoxComponent_Template_button_click_12_listener() {
            return ctx.updateItem();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.values);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.editMode)("disabled", ctx.editMode || !ctx.formGroup.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editMode)("disabled", !ctx.formGroup.valid);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
      styles: [".chips-container[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb2JqZWN0LWJveC9vYmplY3QtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVpKOztBQW1CQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFoQkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1tZGMtZmlsbGVkLXRleHQtZmllbGQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1tYXQtc3lzLXN1cmZhY2UtdmFyaWFudCkpO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uZmllbGRzLWNvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4uY2hpcHMtY29udGFpbmVyIHtcclxuICAgIGdhcDogLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIFxyXG4gICAgLy8gcGFkZGluZzogLjVyZW07XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIG1hcmdpbjogLjVyZW0gMCAuNXJlbSAwO1xyXG59XHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8422:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/tag-box/tag-box/tag-box.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagBoxComponent: () => (/* binding */ TagBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ 2772);







function TagBoxComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function TagBoxComponent_For_6_Template_mat_chip_row_removed_0_listener() {
      const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.removeItem(tag_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r3, " ");
  }
}
class TagBoxComponent {
  constructor() {
    this.label = 'Items';
    this.placeholder = 'Items';
    this.items = [];
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
  }
  ngOnInit() {}
  writeValue(value) {
    this.items = value || [];
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    isDisabled ? this.control.disable() : this.control.enable();
  }
  addItem(event) {
    const input = event.input;
    const value = event.value;
    const exists = this.items.indexOf(value) >= 0;
    if (!exists) {
      this.items.push(value);
      this.onChange(this.items);
    }
    if (input) {
      input.value = '';
    }
  }
  removeItem(Item) {
    const index = this.items.indexOf(Item);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.onChange(this.items);
    }
  }
  onChange(value) {
    // O que devo fazer aqui?
  }
  onTouched() {
    // O que devo fazer aqui?
  }
  static {
    this.ɵfac = function TagBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TagBoxComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagBoxComponent,
      selectors: [["app-tag-box"]],
      inputs: {
        label: "label",
        placeholder: "placeholder"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TagBoxComponent),
        multi: true
      }
      // {
      //   provide: NG_VALIDATORS,
      //   useExisting: forwardRef(() => TagBoxComponent),
      //   multi: true,
      // },
      ])],
      decls: 8,
      vars: 4,
      consts: [["itemsGrid", ""], [3, "formControl"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor"], [3, "removed"], ["matChipRemove", ""]],
      template: function TagBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-grid", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](5, TagBoxComponent_For_6_Template, 5, 1, "mat-chip-row", null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function TagBoxComponent_Template_input_matChipInputTokenEnd_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.addItem($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const itemsGrid_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("matChipInputFor", itemsGrid_r5);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipRow, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFnLWJveC90YWctYm94L3RhZy1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gbWF0LWNoaXAtZ3JpZCB7XHJcbi8vICAgICBwYWRkaW5nOiAuNXJlbTtcclxuLy8gICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgbWFyZ2luOiAuNXJlbSAwIC41cmVtIDA7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _components_tag_box_tag_box_tag_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tag-box/tag-box/tag-box.component */ 8422);
/* harmony import */ var _components_object_box_object_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/object-box/object-box.component */ 8789);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);











/*
The components, directives, and pipes shared across various modules should be kept in a shared module.
For example, search and loaders could be used across multiple features.
The items stored in a shared module will be re-used and referenced by the components declared in other feature modules.

A Shared Module is more beneficial while working on large applications
where we consider lazy loading of the application to increase the performance and
decrease the bundle size of the application and initial build-time.
 The shared Module should not depend on any other module in the application.
Note: You must not define the services here.
Since the shared modules are imported everywhere,
it may create a new instance of the service if imported in the lazy-loaded modules.
*/
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_tag_box_tag_box_tag_box_component__WEBPACK_IMPORTED_MODULE_0__.TagBoxComponent, _components_object_box_object_box_component__WEBPACK_IMPORTED_MODULE_1__.ObjectBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule],
    exports: [_components_tag_box_tag_box_tag_box_component__WEBPACK_IMPORTED_MODULE_0__.TagBoxComponent, _components_object_box_object_box_component__WEBPACK_IMPORTED_MODULE_1__.ObjectBoxComponent]
  });
})();

/***/ }),

/***/ 3587:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  nodeBaseApiUrl: 'http://localhost:9000',
  backendBaseUrl: 'http://localhost:3000'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
// icons:
// https://iconscout.com/icons/metamask


// após transformar tudo em standalone
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter([])],
// }).catch((err) => {
// TODO: tratar melhor
// console.error(err);
// });
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
  providers: []
}).catch(err => {
  // TODO: tratar melhor
  console.error(err);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map