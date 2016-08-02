System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1, core_2, core_3;
    var MdToolbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            MdToolbar = (function () {
                function MdToolbar(elementRef, renderer) {
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                }
                Object.defineProperty(MdToolbar.prototype, "color", {
                    get: function () {
                        return this._color;
                    },
                    set: function (value) {
                        this._updateColor(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                MdToolbar.prototype._updateColor = function (newColor) {
                    this._setElementColor(this._color, false);
                    this._setElementColor(newColor, true);
                    this._color = newColor;
                };
                MdToolbar.prototype._setElementColor = function (color, isAdd) {
                    if (color != null && color != '') {
                        this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdToolbar.prototype, "color", null);
                MdToolbar = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'md-toolbar',
                        templateUrl: 'toolbar.html',
                        styleUrls: ['toolbar.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef, core_2.Renderer])
                ], MdToolbar);
                return MdToolbar;
            }());
            exports_1("MdToolbar", MdToolbar);
        }
    }
});
//# sourceMappingURL=toolbar.js.map