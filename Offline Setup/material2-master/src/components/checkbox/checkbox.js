System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var nextId, MD_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MdCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            /**
             * Monotonically increasing integer used to auto-generate unique ids for checkbox components.
             */
            nextId = 0;
            /**
             * Provider Expression that allows md-checkbox to register as a ControlValueAccessor. This allows it
             * to support [(ngModel)] and ngControl.
             */
            MD_CHECKBOX_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return MdCheckbox; }),
                multi: true
            });
            /**
             * Represents the different states that require custom transitions between them.
             */
            (function (TransitionCheckState) {
                /** The initial state of the component before any user interaction. */
                TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
                /** The state representing the component when it's becoming checked. */
                TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
                /** The state representing the component when it's becoming unchecked. */
                TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
                /** The state representing the component when it's becoming indeterminate. */
                TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
            })(TransitionCheckState || (TransitionCheckState = {}));
            /**
             * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
             * and exposes a similar API. An MdCheckbox can be either checked, unchecked, indeterminate, or
             * disabled. Note that all additional accessibility attributes are taken care of by the component,
             * so there is no need to provide them yourself. However, if you want to omit a label and still
             * have the checkbox be accessible, you may supply an [aria-label] input.
             * See: https://www.google.com/design/spec/components/selection-controls.html
             */
            MdCheckbox = (function () {
                function MdCheckbox(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
                     * take precedence so this may be omitted.
                     */
                    this.ariaLabel = '';
                    /**
                     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
                     */
                    this.ariaLabelledby = null;
                    /** A unique id for the checkbox. If one is not supplied, it is auto-generated. */
                    this.id = "md-checkbox-" + ++nextId;
                    /** Whether or not the checkbox should come before or after the label. */
                    this.align = 'start';
                    /**
                     * Whether the checkbox is disabled. When the checkbox is disabled it cannot be interacted with.
                     * The correct ARIA attributes are applied to denote this to assistive technology.
                     */
                    this.disabled = false;
                    /**
                     * The tabindex attribute for the checkbox. Note that when the checkbox is disabled, the attribute
                     * on the host element will be removed. It will be placed back when the checkbox is re-enabled.
                     */
                    this.tabindex = 0;
                    /** Name value will be applied to the input element if present */
                    this.name = null;
                    /** Event emitted when the checkbox's `checked` value changes. */
                    this.change = new core_1.EventEmitter();
                    /** Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor. */
                    this.onTouched = function () { };
                    /** Whether the `checked` state has been set to its initial value. */
                    this._isInitialized = false;
                    this._currentAnimationClass = '';
                    this._currentCheckState = TransitionCheckState.Init;
                    this._checked = false;
                    this._indeterminate = false;
                    this._changeSubscription = null;
                    this.hasFocus = false;
                }
                Object.defineProperty(MdCheckbox.prototype, "inputId", {
                    /** ID to be applied to the `input` element */
                    get: function () {
                        return "input-" + this.id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdCheckbox.prototype, "checked", {
                    /**
                     * Whether the checkbox is checked. Note that setting `checked` will immediately set
                     * `indeterminate` to false.
                     */
                    get: function () {
                        return this._checked;
                    },
                    set: function (checked) {
                        if (checked != this.checked) {
                            this._indeterminate = false;
                            this._checked = checked;
                            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
                            // Only fire a change event if this isn't the first time the checked property is ever set.
                            if (this._isInitialized) {
                                this.change.emit(this._checked);
                            }
                        }
                        this._isInitialized = true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdCheckbox.prototype, "indeterminate", {
                    /**
                     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
                     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
                     * checkable items. Note that whenever `checked` is set, indeterminate is immediately set to
                     * false. This differs from the web platform in that indeterminate state on native
                     * checkboxes is only remove when the user manually checks the checkbox (rather than setting the
                     * `checked` property programmatically). However, we feel that this behavior is more accommodating
                     * to the way consumers would envision using this component.
                     */
                    get: function () {
                        return this._indeterminate;
                    },
                    set: function (indeterminate) {
                        this._indeterminate = indeterminate;
                        if (this._indeterminate) {
                            this._transitionCheckState(TransitionCheckState.Indeterminate);
                        }
                        else {
                            this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Implemented as part of ControlValueAccessor. */
                MdCheckbox.prototype.writeValue = function (value) {
                    this.checked = !!value;
                };
                /** Implemented as part of ControlValueAccessor. */
                MdCheckbox.prototype.registerOnChange = function (fn) {
                    if (this._changeSubscription) {
                        this._changeSubscription.unsubscribe();
                    }
                    this._changeSubscription = this.change.subscribe(fn);
                };
                /** Implemented as part of ControlValueAccessor. */
                MdCheckbox.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                MdCheckbox.prototype._transitionCheckState = function (newState) {
                    var oldState = this._currentCheckState;
                    var renderer = this._renderer;
                    var elementRef = this._elementRef;
                    if (oldState === newState) {
                        return;
                    }
                    if (this._currentAnimationClass.length > 0) {
                        renderer.setElementClass(elementRef.nativeElement, this._currentAnimationClass, false);
                    }
                    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
                    this._currentCheckState = newState;
                    if (this._currentAnimationClass.length > 0) {
                        renderer.setElementClass(elementRef.nativeElement, this._currentAnimationClass, true);
                    }
                };
                /**
                 * Informs the component when the input has focus so that we can style accordingly
                 * @internal
                 */
                MdCheckbox.prototype.onInputFocus = function () {
                    this.hasFocus = true;
                };
                /**
                 * Informs the component when we lose focus in order to style accordingly
                 * @internal
                 */
                MdCheckbox.prototype.onInputBlur = function () {
                    this.hasFocus = false;
                    this.onTouched();
                };
                /**
                 * Toggles the `checked` value between true and false
                 */
                MdCheckbox.prototype.toggle = function () {
                    this.checked = !this.checked;
                };
                /**
                 * Event handler for checkbox input element.  Toggles checked state if element is not disabled.
                 * @param event
                 * @internal
                 */
                MdCheckbox.prototype.onInteractionEvent = function (event) {
                    if (this.disabled) {
                        event.stopPropagation();
                    }
                    else {
                        this.toggle();
                    }
                };
                MdCheckbox.prototype._getAnimationClassForCheckStateTransition = function (oldState, newState) {
                    var animSuffix;
                    switch (oldState) {
                        case TransitionCheckState.Init:
                            // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                            // [checked] bound to it.
                            if (newState === TransitionCheckState.Checked) {
                                animSuffix = 'unchecked-checked';
                            }
                            else {
                                return '';
                            }
                            break;
                        case TransitionCheckState.Unchecked:
                            animSuffix = newState === TransitionCheckState.Checked ?
                                'unchecked-checked' : 'unchecked-indeterminate';
                            break;
                        case TransitionCheckState.Checked:
                            animSuffix = newState === TransitionCheckState.Unchecked ?
                                'checked-unchecked' : 'checked-indeterminate';
                            break;
                        case TransitionCheckState.Indeterminate:
                            animSuffix = newState === TransitionCheckState.Checked ?
                                'indeterminate-checked' : 'indeterminate-unchecked';
                    }
                    return "md-checkbox-anim-" + animSuffix;
                };
                __decorate([
                    core_1.Input('aria-label'), 
                    __metadata('design:type', String)
                ], MdCheckbox.prototype, "ariaLabel", void 0);
                __decorate([
                    core_1.Input('aria-labelledby'), 
                    __metadata('design:type', String)
                ], MdCheckbox.prototype, "ariaLabelledby", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdCheckbox.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdCheckbox.prototype, "align", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdCheckbox.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MdCheckbox.prototype, "tabindex", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdCheckbox.prototype, "name", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MdCheckbox.prototype, "change", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdCheckbox.prototype, "checked", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdCheckbox.prototype, "indeterminate", null);
                MdCheckbox = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'md-checkbox',
                        templateUrl: 'checkbox.html',
                        styleUrls: ['checkbox.css'],
                        host: {
                            '[class.md-checkbox-indeterminate]': 'indeterminate',
                            '[class.md-checkbox-checked]': 'checked',
                            '[class.md-checkbox-disabled]': 'disabled',
                            '[class.md-checkbox-align-end]': 'align == "end"',
                            '[class.md-checkbox-focused]': 'hasFocus',
                        },
                        providers: [MD_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                        encapsulation: core_1.ViewEncapsulation.None,
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
                ], MdCheckbox);
                return MdCheckbox;
            }());
            exports_1("MdCheckbox", MdCheckbox);
        }
    }
});
//# sourceMappingURL=checkbox.js.map