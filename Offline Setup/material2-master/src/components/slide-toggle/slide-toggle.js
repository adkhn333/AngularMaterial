System.register(['@angular/core', '@angular/common', '@angular2-material/core/annotations/field-value'], function(exports_1, context_1) {
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
    var core_1, common_1, field_value_1;
    var MD_SLIDE_TOGGLE_VALUE_ACCESSOR, nextId, MdSlideToggle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (field_value_1_1) {
                field_value_1 = field_value_1_1;
            }],
        execute: function() {
            exports_1("MD_SLIDE_TOGGLE_VALUE_ACCESSOR", MD_SLIDE_TOGGLE_VALUE_ACCESSOR = {
                provide: common_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return MdSlideToggle; }),
                multi: true
            });
            // Increasing integer for generating unique ids for slide-toggle components.
            nextId = 0;
            MdSlideToggle = (function () {
                function MdSlideToggle(_elementRef, _renderer) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._renderer = _renderer;
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                    // A unique id for the slide-toggle. By default the id is auto-generated.
                    this._uniqueId = "md-slide-toggle-" + ++nextId;
                    this._checked = false;
                    this.disabled = false;
                    this.name = null;
                    this.id = this._uniqueId;
                    this.tabIndex = 0;
                    this.ariaLabel = null;
                    this.ariaLabelledby = null;
                    this._change = new core_1.EventEmitter();
                    this.change = this._change.asObservable();
                    // Returns the unique id for the visual hidden input.
                    this.getInputId = function () { return ((_this.id || _this._uniqueId) + "-input"); };
                }
                /**
                 * The onChangeEvent method will be also called on click.
                 * This is because everything for the slide-toggle is wrapped inside of a label,
                 * which triggers a onChange event on click.
                 * @internal
                 */
                MdSlideToggle.prototype.onChangeEvent = function () {
                    if (!this.disabled) {
                        this.toggle();
                    }
                };
                /**
                 * Implemented as part of ControlValueAccessor.
                 * @internal
                 */
                MdSlideToggle.prototype.writeValue = function (value) {
                    this.checked = value;
                };
                /**
                 * Implemented as part of ControlValueAccessor.
                 * @internal
                 */
                MdSlideToggle.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                /**
                 * Implemented as part of ControlValueAccessor.
                 * @internal
                 */
                MdSlideToggle.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                Object.defineProperty(MdSlideToggle.prototype, "checked", {
                    get: function () {
                        return !!this._checked;
                    },
                    set: function (value) {
                        if (this.checked !== !!value) {
                            this._checked = value;
                            this.onChange(this._checked);
                            this._change.emit(this._checked);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdSlideToggle.prototype, "color", {
                    get: function () {
                        return this._color;
                    },
                    set: function (value) {
                        this._updateColor(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                MdSlideToggle.prototype.toggle = function () {
                    this.checked = !this.checked;
                };
                MdSlideToggle.prototype._updateColor = function (newColor) {
                    this._setElementColor(this._color, false);
                    this._setElementColor(newColor, true);
                    this._color = newColor;
                };
                MdSlideToggle.prototype._setElementColor = function (color, isAdd) {
                    if (color != null && color != '') {
                        this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
                    }
                };
                __decorate([
                    core_1.Input(),
                    field_value_1.BooleanFieldValue(), 
                    __metadata('design:type', Boolean)
                ], MdSlideToggle.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdSlideToggle.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdSlideToggle.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MdSlideToggle.prototype, "tabIndex", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdSlideToggle.prototype, "ariaLabel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdSlideToggle.prototype, "ariaLabelledby", void 0);
                __decorate([
                    core_1.Output('change'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MdSlideToggle.prototype, "_change", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdSlideToggle.prototype, "checked", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdSlideToggle.prototype, "color", null);
                MdSlideToggle = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'md-slide-toggle',
                        host: {
                            '[class.md-checked]': 'checked',
                            '[class.md-disabled]': 'disabled',
                            '(click)': 'onTouched()'
                        },
                        templateUrl: 'slide-toggle.html',
                        styleUrls: ['slide-toggle.css'],
                        providers: [MD_SLIDE_TOGGLE_VALUE_ACCESSOR],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MdSlideToggle);
                return MdSlideToggle;
            }());
            exports_1("MdSlideToggle", MdSlideToggle);
        }
    }
});
//# sourceMappingURL=slide-toggle.js.map