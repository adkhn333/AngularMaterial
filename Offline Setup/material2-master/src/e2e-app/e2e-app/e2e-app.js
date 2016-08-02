System.register(['@angular/core', '@angular/router', '@angular2-material/core/rtl/dir', '@angular2-material/button/button', '@angular2-material/sidenav/sidenav', '@angular2-material/list/list', '@angular2-material/icon/icon', '@angular2-material/toolbar/toolbar', '../button/button-e2e'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dir_1, button_1, sidenav_1, list_1, icon_1, toolbar_1, button_e2e_1;
    var Home, E2EApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dir_1_1) {
                dir_1 = dir_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (button_e2e_1_1) {
                button_e2e_1 = button_e2e_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    <p>e2e website!</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
            E2EApp = (function () {
                function E2EApp() {
                }
                E2EApp = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'e2e-app',
                        providers: [],
                        templateUrl: 'e2e-app.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            dir_1.Dir,
                            button_1.MdButton,
                            icon_1.MdIcon,
                            sidenav_1.MD_SIDENAV_DIRECTIVES,
                            list_1.MD_LIST_DIRECTIVES,
                            toolbar_1.MdToolbar
                        ],
                        pipes: []
                    }),
                    router_1.Routes([
                        new router_1.Route({ path: '/', component: Home }),
                        new router_1.Route({ path: '/button', component: button_e2e_1.ButtonE2E })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], E2EApp);
                return E2EApp;
            }());
            exports_1("E2EApp", E2EApp);
        }
    }
});
//# sourceMappingURL=e2e-app.js.map