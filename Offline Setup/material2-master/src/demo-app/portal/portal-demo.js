System.register(['@angular/core', '@angular2-material/core/portal/portal-directives', '@angular2-material/core/portal/portal'], function(exports_1, context_1) {
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
    var core_1, portal_directives_1, portal_directives_2, core_2, core_3, portal_1;
    var PortalDemo, ScienceJoke;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (portal_directives_1_1) {
                portal_directives_1 = portal_directives_1_1;
                portal_directives_2 = portal_directives_1_1;
            },
            function (portal_1_1) {
                portal_1 = portal_1_1;
            }],
        execute: function() {
            PortalDemo = (function () {
                function PortalDemo() {
                }
                Object.defineProperty(PortalDemo.prototype, "programmingJoke", {
                    get: function () {
                        return this.templatePortals.first;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PortalDemo.prototype, "mathJoke", {
                    get: function () {
                        return this.templatePortals.last;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PortalDemo.prototype, "scienceJoke", {
                    get: function () {
                        return new portal_1.ComponentPortal(ScienceJoke);
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_2.ViewChildren(portal_directives_2.TemplatePortalDirective), 
                    __metadata('design:type', core_3.QueryList)
                ], PortalDemo.prototype, "templatePortals", void 0);
                PortalDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'portal-demo',
                        templateUrl: 'portal-demo.html',
                        styleUrls: ['portal-demo.css'],
                        directives: [portal_directives_2.TemplatePortalDirective, portal_directives_1.PortalHostDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PortalDemo);
                return PortalDemo;
            }());
            exports_1("PortalDemo", PortalDemo);
            ScienceJoke = (function () {
                function ScienceJoke() {
                }
                ScienceJoke = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'science-joke',
                        template: "<p> 100 kilopascals go into a bar. </p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScienceJoke);
                return ScienceJoke;
            }());
        }
    }
});
//# sourceMappingURL=portal-demo.js.map