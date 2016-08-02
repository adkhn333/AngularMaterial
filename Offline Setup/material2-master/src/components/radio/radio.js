System.register(['@angular/core', '@angular/common', './radio_dispatcher'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, radio_dispatcher_1;
    var MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, _uniqueIdCounter, MdRadioChange, MdRadioGroup, MdRadioButton, MD_RADIO_DIRECTIVES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
                exports_1({
                    "MdRadioDispatcher": radio_dispatcher_1_1["MdRadioDispatcher"]
                });
            }],
        execute: function() {
            /**
             * Provider Expression that allows md-radio-group to register as a ControlValueAccessor. This
             * allows it to support [(ngModel)] and ngControl.
             */
            MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return MdRadioGroup; }),
                multi: true
            });
            // TODO(mtlin):
            // Ink ripple is currently placeholder.
            // Determine motion spec for button transitions.
            // Design review.
            // RTL
            // Support forms API.
            // Use ChangeDetectionStrategy.OnPush
            _uniqueIdCounter = 0;
            /** A simple change event emitted by either MdRadioButton or MdRadioGroup. */
            MdRadioChange = (function () {
                function MdRadioChange() {
                }
                return MdRadioChange;
            }());
            exports_1("MdRadioChange", MdRadioChange);
            MdRadioGroup = (function () {
                function MdRadioGroup() {
                    /**
                     * Selected value for group. Should equal the value of the selected radio button if there *is*
                     * a corresponding radio button with a matching value. If there is *not* such a corresponding
                     * radio button, this value persists to be applied in case a new radio button is added with a
                     * matching value.
                     */
                    this._value = null;
                    /** The HTML name attribute applied to radio buttons in this group. */
                    this._name = null;
                    /** Disables all individual radio buttons assigned to this group. */
                    this._disabled = false;
                    /** The currently selected radio button. Should match value. */
                    this._selected = null;
                    /** Whether the `value` has been set to its initial value. */
                    this._isInitialized = false;
                    /** Change event subscription set up by registerOnChange (ControlValueAccessor). */
                    this._changeSubscription = null;
                    /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
                    this.onTouched = function () { };
                    /** Event emitted when the group value changes. */
                    this.change = new core_1.EventEmitter();
                    /** Child radio buttons. */
                    this._radios = null;
                }
                Object.defineProperty(MdRadioGroup.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (value) {
                        this._name = value;
                        this._updateChildRadioNames();
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Propagate name attribute to radio buttons. */
                MdRadioGroup.prototype._updateChildRadioNames = function () {
                    var _this = this;
                    (this._radios || []).forEach(function (radio) {
                        radio.name = _this._name;
                    });
                };
                Object.defineProperty(MdRadioGroup.prototype, "disabled", {
                    get: function () {
                        return this._disabled;
                    },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this._disabled = (value != null && value !== false) ? true : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdRadioGroup.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (newValue) {
                        if (this._value != newValue) {
                            // Set this before proceeding to ensure no circular loop occurs with selection.
                            this._value = newValue;
                            this._updateSelectedRadioFromValue();
                            // Only fire a change event if this isn't the first time the value is ever set.
                            if (this._isInitialized) {
                                this._emitChangeEvent();
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdRadioGroup.prototype, "selected", {
                    get: function () {
                        return this._selected;
                    },
                    set: function (selected) {
                        this._selected = selected;
                        this.value = selected ? selected.value : null;
                        if (selected && !selected.checked) {
                            selected.checked = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Initialize properties once content children are available.
                 * This allows us to propagate relevant attributes to associated buttons.
                 * @internal
                 */
                MdRadioGroup.prototype.ngAfterContentInit = function () {
                    if (!this._name) {
                        this.name = "md-radio-group-" + _uniqueIdCounter++;
                    }
                    // Mark this component as initialized in AfterContentInit because the initial value can
                    // possibly be set by NgModel on MdRadioGroup, and it is possible that the OnInit of the
                    // NgModel occurs *after* the OnInit of the MdRadioGroup.
                    this._isInitialized = true;
                };
                /**
                 * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
                 * radio buttons upon their blur.
                 * @internal
                 */
                MdRadioGroup.prototype.touch = function () {
                    if (this.onTouched) {
                        this.onTouched();
                    }
                };
                /** Updates the `selected` radio button from the internal _value state. */
                MdRadioGroup.prototype._updateSelectedRadioFromValue = function () {
                    var _this = this;
                    // If the value already matches the selected radio, no dothing.
                    var isAlreadySelected = this._selected != null && this._selected.value == this._value;
                    if (this._radios != null && !isAlreadySelected) {
                        var matchingRadio = this._radios.filter(function (radio) { return radio.value == _this._value; })[0];
                        if (matchingRadio) {
                            this.selected = matchingRadio;
                        }
                        else if (this.value == null) {
                            this.selected = null;
                            this._radios.forEach(function (radio) { radio.checked = false; });
                        }
                    }
                };
                /** Dispatch change event with current selection and group value. */
                MdRadioGroup.prototype._emitChangeEvent = function () {
                    var event = new MdRadioChange();
                    event.source = this._selected;
                    event.value = this._value;
                    this.change.emit(event);
                };
                /**
                 * Implemented as part of ControlValueAccessor.
                 * @internal
                 */
                MdRadioGroup.prototype.writeValue = function (value) {
                    this.value = value;
                };
                /**
                 * Implemented as part of ControlValueAccessor.
                 * @internal
                 */
                MdRadioGroup.prototype.registerOnChange = function (fn) {
                    if (this._changeSubscription) {
                        this._changeSubscription.unsubscribe();
                    }
                    this._changeSubscription = this.change.subscribe(function (changeEvent) {
                        fn(changeEvent.value);
                    });
                };
                /**
                 * Implemented as part of ControlValueAccessor.
                 * @internal
                 */
                MdRadioGroup.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MdRadioGroup.prototype, "change", void 0);
                __decorate([
                    core_1.ContentChildren(core_1.forwardRef(function () { return MdRadioButton; })), 
                    __metadata('design:type', core_1.QueryList)
                ], MdRadioGroup.prototype, "_radios", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdRadioGroup.prototype, "name", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdRadioGroup.prototype, "disabled", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdRadioGroup.prototype, "value", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdRadioGroup.prototype, "selected", null);
                MdRadioGroup = __decorate([
                    core_1.Directive({
                        selector: 'md-radio-group',
                        providers: [MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                        host: {
                            'role': 'radiogroup',
                        },
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdRadioGroup);
                return MdRadioGroup;
            }());
            exports_1("MdRadioGroup", MdRadioGroup);
            MdRadioButton = (function () {
                function MdRadioButton(radioGroup, radioDispatcher) {
                    // Assertions. Ideally these should be stripped out by the compiler.
                    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
                    var _this = this;
                    this.radioDispatcher = radioDispatcher;
                    /** Whether this radio is checked. */
                    this._checked = false;
                    /** Value assigned to this radio.*/
                    this._value = null;
                    /** Event emitted when the group value changes. */
                    this.change = new core_1.EventEmitter();
                    this.radioGroup = radioGroup;
                    radioDispatcher.listen(function (id, name) {
                        if (id != _this.id && name == _this.name) {
                            _this.checked = false;
                        }
                    });
                }
                Object.defineProperty(MdRadioButton.prototype, "inputId", {
                    get: function () {
                        return this.id + "-input";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdRadioButton.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (newCheckedState) {
                        if (newCheckedState) {
                            // Notify all radio buttons with the same name to un-check.
                            this.radioDispatcher.notify(this.id, this.name);
                        }
                        if (newCheckedState != this._checked) {
                            this._emitChangeEvent();
                        }
                        this._checked = newCheckedState;
                        if (newCheckedState && this.radioGroup && this.radioGroup.value != this.value) {
                            this.radioGroup.selected = this;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdRadioButton.prototype, "value", {
                    /** MdRadioGroup reads this to assign its own value. */
                    get: function () {
                        return this._value;
                    },
                    set: function (value) {
                        if (this._value != value) {
                            if (this.radioGroup != null && this.checked) {
                                this.radioGroup.value = value;
                            }
                            this._value = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdRadioButton.prototype, "disabled", {
                    get: function () {
                        return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
                    },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this._disabled = (value != null && value !== false) ? true : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** @internal */
                MdRadioButton.prototype.ngOnInit = function () {
                    // All radio buttons must have a unique id.
                    if (!this.id) {
                        this.id = "md-radio-" + _uniqueIdCounter++;
                    }
                    // If the radio is inside of a radio group and it matches that group's value upon
                    // initialization, start off as checked.
                    if (this.radioGroup && this.radioGroup.value === this._value) {
                        this.checked = true;
                    }
                };
                /** Dispatch change event with current value. */
                MdRadioButton.prototype._emitChangeEvent = function () {
                    var event = new MdRadioChange();
                    event.source = this;
                    event.value = this._value;
                    this.change.emit(event);
                };
                /** @internal */
                MdRadioButton.prototype.onClick = function (event) {
                    if (this.disabled) {
                        event.preventDefault();
                        event.stopPropagation();
                        return;
                    }
                    if (this.radioGroup != null) {
                        // Propagate the change one-way via the group, which will in turn mark this
                        // button as checked.
                        this.radioGroup.selected = this;
                        this.radioGroup.touch();
                    }
                    else {
                        this.checked = true;
                    }
                };
                /**
                 * We use a hidden native input field to handle changes to focus state via keyboard navigation,
                 * with visual rendering done separately. The native element is kept in sync with the overall
                 * state of the component.
                 * @internal
                 */
                MdRadioButton.prototype.onInputFocus = function () {
                    this._isFocused = true;
                };
                /** @internal */
                MdRadioButton.prototype.onInputBlur = function () {
                    this._isFocused = false;
                    if (this.radioGroup) {
                        this.radioGroup.touch();
                    }
                };
                /**
                 * Checks the radio due to an interaction with the underlying native <input type="radio">
                 * @internal
                 */
                MdRadioButton.prototype.onInputChange = function () {
                    this.checked = true;
                    if (this.radioGroup) {
                        this.radioGroup.touch();
                    }
                };
                __decorate([
                    core_1.HostBinding('class.md-radio-focused'), 
                    __metadata('design:type', Boolean)
                ], MdRadioButton.prototype, "_isFocused", void 0);
                __decorate([
                    core_1.HostBinding('id'),
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdRadioButton.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdRadioButton.prototype, "name", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MdRadioButton.prototype, "change", void 0);
                __decorate([
                    core_1.HostBinding('class.md-radio-checked'),
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdRadioButton.prototype, "checked", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MdRadioButton.prototype, "value", null);
                __decorate([
                    core_1.HostBinding('class.md-radio-disabled'),
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdRadioButton.prototype, "disabled", null);
                MdRadioButton = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'md-radio-button',
                        templateUrl: 'radio.html',
                        styleUrls: ['radio.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        host: {
                            '(click)': 'onClick($event)'
                        }
                    }),
                    __param(0, core_1.Optional()), 
                    __metadata('design:paramtypes', [MdRadioGroup, radio_dispatcher_1.MdRadioDispatcher])
                ], MdRadioButton);
                return MdRadioButton;
            }());
            exports_1("MdRadioButton", MdRadioButton);
            exports_1("MD_RADIO_DIRECTIVES", MD_RADIO_DIRECTIVES = [MdRadioGroup, MdRadioButton]);
        }
    }
});
//# sourceMappingURL=radio.js.map