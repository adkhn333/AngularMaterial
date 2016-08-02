System.register(['@angular/core', '@angular2-material/core/overlay/overlay', '@angular2-material/core/portal/portal', '@angular2-material/core/portal/portal-directives'], function(exports_1, context_1) {
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
    var core_1, overlay_1, portal_1, portal_directives_1;
    var OverlayOrigin, OverlayDemo, RotiniPanel, SpagettiPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (overlay_1_1) {
                overlay_1 = overlay_1_1;
            },
            function (portal_1_1) {
                portal_1 = portal_1_1;
            },
            function (portal_directives_1_1) {
                portal_directives_1 = portal_directives_1_1;
            }],
        execute: function() {
            OverlayOrigin = (function () {
                function OverlayOrigin(elementRef) {
                    this.elementRef = elementRef;
                }
                OverlayOrigin = __decorate([
                    core_1.Directive({ selector: '[overlay-origin]' }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], OverlayOrigin);
                return OverlayOrigin;
            }());
            OverlayDemo = (function () {
                function OverlayDemo(overlay, viewContainerRef) {
                    this.overlay = overlay;
                    this.viewContainerRef = viewContainerRef;
                    this.nextPosition = 0;
                }
                OverlayDemo.prototype.openRotiniPanel = function () {
                    var _this = this;
                    var config = new overlay_1.OverlayState();
                    config.positionStrategy = this.overlay.position()
                        .global()
                        .left(this.nextPosition + "px")
                        .top(this.nextPosition + "px");
                    this.nextPosition += 30;
                    this.overlay.create(config).then(function (ref) {
                        ref.attach(new portal_1.ComponentPortal(RotiniPanel, _this.viewContainerRef));
                    });
                };
                OverlayDemo.prototype.openFusilliPanel = function () {
                    var _this = this;
                    var config = new overlay_1.OverlayState();
                    config.positionStrategy = this.overlay.position()
                        .global()
                        .centerHorizontally()
                        .top(this.nextPosition + "px");
                    this.nextPosition += 30;
                    this.overlay.create(config).then(function (ref) {
                        ref.attach(_this.templatePortals.first);
                    });
                };
                OverlayDemo.prototype.openSpaghettiPanel = function () {
                    var _this = this;
                    // TODO(jelbourn): separate overlay demo for connected positioning.
                    var strategy = this.overlay.position()
                        .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
                    var config = new overlay_1.OverlayState();
                    config.positionStrategy = strategy;
                    this.overlay.create(config).then(function (ref) {
                        ref.attach(new portal_1.ComponentPortal(SpagettiPanel, _this.viewContainerRef));
                    });
                };
                __decorate([
                    core_1.ViewChildren(portal_directives_1.TemplatePortalDirective), 
                    __metadata('design:type', core_1.QueryList)
                ], OverlayDemo.prototype, "templatePortals", void 0);
                __decorate([
                    core_1.ViewChild(OverlayOrigin), 
                    __metadata('design:type', OverlayOrigin)
                ], OverlayDemo.prototype, "_overlayOrigin", void 0);
                OverlayDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'overlay-demo',
                        templateUrl: 'overlay-demo.html',
                        styleUrls: ['overlay-demo.css'],
                        directives: [portal_directives_1.TemplatePortalDirective, OverlayOrigin],
                        providers: [overlay_1.OVERLAY_PROVIDERS],
                        encapsulation: core_1.ViewEncapsulation.None,
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof overlay_1.Overlay !== 'undefined' && overlay_1.Overlay) === 'function' && _a) || Object, core_1.ViewContainerRef])
                ], OverlayDemo);
                return OverlayDemo;
                var _a;
            }());
            exports_1("OverlayDemo", OverlayDemo);
            /** Simple component to load into an overlay */
            RotiniPanel = (function () {
                function RotiniPanel() {
                    this.value = 9000;
                }
                RotiniPanel = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'rotini-panel',
                        template: '<p class="demo-rotini">Rotini {{value}}</p>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RotiniPanel);
                return RotiniPanel;
            }());
            /** Simple component to load into an overlay */
            SpagettiPanel = (function () {
                function SpagettiPanel() {
                    this.value = 'Omega';
                }
                SpagettiPanel = __decorate([
                    core_1.Component({
                        selector: 'spagetti-panel',
                        template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SpagettiPanel);
                return SpagettiPanel;
            }());
        }
    }
});
//# sourceMappingURL=overlay-demo.js.map