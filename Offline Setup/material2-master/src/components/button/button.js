System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MdButton, MdAnchor, MD_BUTTON_DIRECTIVES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): Ink ripples.
            // TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
            // TODO(kara): Convert attribute selectors to classes when attr maps become available
            MdButton = (function () {
                function MdButton(elementRef, renderer) {
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
                    this.isKeyboardFocused = false;
                    /** Whether a mousedown has occurred on this element in the last 100ms. */
                    this.isMouseDown = false;
                }
                Object.defineProperty(MdButton.prototype, "color", {
                    get: function () {
                        return this._color;
                    },
                    set: function (value) {
                        this._updateColor(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /** @internal */
                MdButton.prototype.setMousedown = function () {
                    var _this = this;
                    // We only *show* the focus style when focus has come to the button via the keyboard.
                    // The Material Design spec is silent on this topic, and without doing this, the
                    // button continues to look :active after clicking.
                    // @see http://marcysutton.com/button-focus-hell/
                    this.isMouseDown = true;
                    setTimeout(function () { _this.isMouseDown = false; }, 100);
                };
                MdButton.prototype._updateColor = function (newColor) {
                    this._setElementColor(this._color, false);
                    this._setElementColor(newColor, true);
                    this._color = newColor;
                };
                MdButton.prototype._setElementColor = function (color, isAdd) {
                    if (color != null && color != '') {
                        this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
                    }
                };
                /** @internal */
                MdButton.prototype.setKeyboardFocus = function () {
                    this.isKeyboardFocused = !this.isMouseDown;
                };
                /** @internal */
                MdButton.prototype.removeKeyboardFocus = function () {
                    this.isKeyboardFocused = false;
                };
                MdButton = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'button[md-button], button[md-raised-button], button[md-icon-button], ' +
                            'button[md-fab], button[md-mini-fab]',
                        inputs: ['color'],
                        host: {
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '(mousedown)': 'setMousedown()',
                            '(focus)': 'setKeyboardFocus()',
                            '(blur)': 'removeKeyboardFocus()',
                        },
                        templateUrl: 'button.html',
                        styleUrls: ['button.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MdButton);
                return MdButton;
            }());
            exports_1("MdButton", MdButton);
            MdAnchor = (function (_super) {
                __extends(MdAnchor, _super);
                function MdAnchor(elementRef, renderer) {
                    _super.call(this, elementRef, renderer);
                    this._disabled = null;
                }
                Object.defineProperty(MdAnchor.prototype, "tabIndex", {
                    get: function () {
                        return this.disabled ? -1 : 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
                    get: function () {
                        return this.disabled ? 'true' : 'false';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdAnchor.prototype, "disabled", {
                    get: function () { return this._disabled; },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this._disabled = (value != null && value != false) ? true : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** @internal */
                MdAnchor.prototype.haltDisabledEvents = function (event) {
                    // A disabled button shouldn't apply any actions
                    if (this.disabled) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                };
                __decorate([
                    core_1.HostBinding('tabIndex'), 
                    __metadata('design:type', Number)
                ], MdAnchor.prototype, "tabIndex", null);
                __decorate([
                    core_1.HostBinding('attr.aria-disabled'), 
                    __metadata('design:type', String)
                ], MdAnchor.prototype, "isAriaDisabled", null);
                __decorate([
                    core_1.HostBinding('attr.disabled'),
                    core_1.Input('disabled'), 
                    __metadata('design:type', Object)
                ], MdAnchor.prototype, "disabled", null);
                MdAnchor = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab]',
                        inputs: ['color'],
                        host: {
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '(mousedown)': 'setMousedown()',
                            '(focus)': 'setKeyboardFocus()',
                            '(blur)': 'removeKeyboardFocus()',
                            '(click)': 'haltDisabledEvents($event)',
                        },
                        templateUrl: 'button.html',
                        styleUrls: ['button.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MdAnchor);
                return MdAnchor;
            }(MdButton));
            exports_1("MdAnchor", MdAnchor);
            exports_1("MD_BUTTON_DIRECTIVES", MD_BUTTON_DIRECTIVES = [MdButton, MdAnchor]);
        }
    }
});
//# sourceMappingURL=button.js.map