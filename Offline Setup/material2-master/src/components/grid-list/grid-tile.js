System.register(['@angular/core', './grid-list'], function(exports_1, context_1) {
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
    var core_1, grid_list_1;
    var MdGridTile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_list_1_1) {
                grid_list_1 = grid_list_1_1;
            }],
        execute: function() {
            MdGridTile = (function () {
                function MdGridTile(_renderer, element) {
                    this._renderer = _renderer;
                    this._rowspan = 1;
                    this._colspan = 1;
                    this._element = element.nativeElement;
                }
                Object.defineProperty(MdGridTile.prototype, "rowspan", {
                    get: function () {
                        return this._rowspan;
                    },
                    set: function (value) {
                        this._rowspan = grid_list_1.coerceToNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdGridTile.prototype, "colspan", {
                    get: function () {
                        return this._colspan;
                    },
                    set: function (value) {
                        this._colspan = grid_list_1.coerceToNumber(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Sets the style of the grid-tile element.  Needs to be set manually to avoid
                 * "Changed after checked" errors that would occur with HostBinding.
                 * @internal
                 */
                MdGridTile.prototype.setStyle = function (property, value) {
                    this._renderer.setElementStyle(this._element, property, value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdGridTile.prototype, "rowspan", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdGridTile.prototype, "colspan", null);
                MdGridTile = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'md-grid-tile',
                        host: { 'role': 'listitem' },
                        templateUrl: 'grid-tile.html',
                        styleUrls: ['grid-list.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
                ], MdGridTile);
                return MdGridTile;
            }());
            exports_1("MdGridTile", MdGridTile);
        }
    }
});
//# sourceMappingURL=grid-tile.js.map