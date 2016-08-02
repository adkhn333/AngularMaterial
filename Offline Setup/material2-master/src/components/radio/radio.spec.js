System.register(['@angular/core/testing', '@angular/common', '@angular/compiler/testing', '@angular/core', '@angular/platform-browser', './radio', './radio_dispatcher'], function(exports_1, context_1) {
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
    var testing_1, common_1, testing_2, core_1, platform_browser_1, radio_1, radio_dispatcher_1;
    var RadiosInsideRadioGroup, StandaloneRadioButtons, RadioGroupWithNgModel;
    // TODO(jelbourn): remove eveything below when Angular supports faking events.
    /**
     * Dispatches a focus change event from an element.
     * @param eventName Name of the event, either 'focus' or 'blur'.
     * @param element The element from which the event will be dispatched.
     */
    function dispatchFocusChangeEvent(eventName, element) {
        var event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
        element.dispatchEvent(event);
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (radio_1_1) {
                radio_1 = radio_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
            }],
        execute: function() {
            testing_1.describe('MdRadio', function () {
                var builder;
                var dispatcher;
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(radio_dispatcher_1.MdRadioDispatcher, { useFactory: function () {
                            dispatcher = new radio_dispatcher_1.MdRadioDispatcher();
                            return dispatcher;
                        } })
                ]; });
                testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                    builder = tcb;
                }));
                testing_1.describe('inside of a group', function () {
                    var fixture;
                    var groupDebugElement;
                    var groupNativeElement;
                    var radioDebugElements;
                    var radioNativeElements;
                    var groupInstance;
                    var radioInstances;
                    var testComponent;
                    testing_1.beforeEach(testing_1.async(function () {
                        builder.createAsync(RadiosInsideRadioGroup).then(function (f) {
                            fixture = f;
                            fixture.detectChanges();
                            testComponent = fixture.debugElement.componentInstance;
                            groupDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(radio_1.MdRadioGroup));
                            groupNativeElement = groupDebugElement.nativeElement;
                            groupInstance = groupDebugElement.injector.get(radio_1.MdRadioGroup);
                            radioDebugElements = fixture.debugElement.queryAll(platform_browser_1.By.directive(radio_1.MdRadioButton));
                            radioNativeElements = radioDebugElements.map(function (debugEl) { return debugEl.nativeElement; });
                            radioInstances = radioDebugElements.map(function (debugEl) { return debugEl.componentInstance; });
                        });
                    }));
                    testing_1.it('should set individual radio names based on the group name', function () {
                        expect(groupInstance.name).toBeTruthy();
                        for (var _i = 0, radioInstances_1 = radioInstances; _i < radioInstances_1.length; _i++) {
                            var radio = radioInstances_1[_i];
                            expect(radio.name).toBe(groupInstance.name);
                        }
                    });
                    testing_1.it('should disable click interaction when the group is disabled', function () {
                        testComponent.isGroupDisabled = true;
                        fixture.detectChanges();
                        radioNativeElements[0].click();
                        expect(radioInstances[0].checked).toBe(false);
                    });
                    testing_1.it('should disable each individual radio when the group is disabled', function () {
                        testComponent.isGroupDisabled = true;
                        fixture.detectChanges();
                        for (var _i = 0, radioInstances_2 = radioInstances; _i < radioInstances_2.length; _i++) {
                            var radio = radioInstances_2[_i];
                            expect(radio.disabled).toBe(true);
                        }
                    });
                    testing_1.it('should update the group value when one of the radios changes', function () {
                        expect(groupInstance.value).toBeFalsy();
                        radioInstances[0].checked = true;
                        fixture.detectChanges();
                        expect(groupInstance.value).toBe('fire');
                        expect(groupInstance.selected).toBe(radioInstances[0]);
                    });
                    testing_1.it('should update the group and radios when one of the radios is clicked', function () {
                        expect(groupInstance.value).toBeFalsy();
                        radioNativeElements[0].click();
                        fixture.detectChanges();
                        expect(groupInstance.value).toBe('fire');
                        expect(groupInstance.selected).toBe(radioInstances[0]);
                        expect(radioInstances[0].checked).toBe(true);
                        expect(radioInstances[1].checked).toBe(false);
                        radioNativeElements[1].click();
                        fixture.detectChanges();
                        expect(groupInstance.value).toBe('water');
                        expect(groupInstance.selected).toBe(radioInstances[1]);
                        expect(radioInstances[0].checked).toBe(false);
                        expect(radioInstances[1].checked).toBe(true);
                    });
                    testing_1.it('should check a radio upon interaction with the underlying native radio button', function () {
                        var nativeRadioInput = radioNativeElements[0].querySelector('input');
                        nativeRadioInput.click();
                        fixture.detectChanges();
                        expect(radioInstances[0].checked).toBe(true);
                        expect(groupInstance.value).toBe('fire');
                        expect(groupInstance.selected).toBe(radioInstances[0]);
                    });
                    testing_1.it('should emit a change event from radio buttons', testing_1.fakeAsync(function () {
                        expect(radioInstances[0].checked).toBe(false);
                        var changeSpy = jasmine.createSpy('radio change listener');
                        radioInstances[0].change.subscribe(changeSpy);
                        radioInstances[0].checked = true;
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(changeSpy).toHaveBeenCalled();
                        radioInstances[0].checked = false;
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(changeSpy).toHaveBeenCalledTimes(2);
                    }));
                    testing_1.it('should emit a change event from the radio group', testing_1.fakeAsync(function () {
                        expect(groupInstance.value).toBeFalsy();
                        var changeSpy = jasmine.createSpy('radio-group change listener');
                        groupInstance.change.subscribe(changeSpy);
                        groupInstance.value = 'fire';
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(changeSpy).toHaveBeenCalled();
                        groupInstance.value = 'water';
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(changeSpy).toHaveBeenCalledTimes(2);
                    }));
                    // TODO(jelbourn): test this in an e2e test with *real* focus, rather than faking
                    // a focus / blur event.
                    testing_1.it('should focus individual radio buttons', function () {
                        var nativeRadioInput = radioNativeElements[0].querySelector('input');
                        expect(nativeRadioInput.classList).not.toContain('md-radio-focused');
                        dispatchFocusChangeEvent('focus', nativeRadioInput);
                        fixture.detectChanges();
                        expect(radioNativeElements[0].classList).toContain('md-radio-focused');
                        dispatchFocusChangeEvent('blur', nativeRadioInput);
                        fixture.detectChanges();
                        expect(radioNativeElements[0].classList).not.toContain('md-radio-focused');
                    });
                    testing_1.it('should update the group and radios when updating the group value', function () {
                        expect(groupInstance.value).toBeFalsy();
                        testComponent.groupValue = 'fire';
                        fixture.detectChanges();
                        expect(groupInstance.value).toBe('fire');
                        expect(groupInstance.selected).toBe(radioInstances[0]);
                        expect(radioInstances[0].checked).toBe(true);
                        expect(radioInstances[1].checked).toBe(false);
                        testComponent.groupValue = 'water';
                        fixture.detectChanges();
                        expect(groupInstance.value).toBe('water');
                        expect(groupInstance.selected).toBe(radioInstances[1]);
                        expect(radioInstances[0].checked).toBe(false);
                        expect(radioInstances[1].checked).toBe(true);
                    });
                    testing_1.it('should deselect all of the checkboxes when the group value is cleared', function () {
                        radioInstances[0].checked = true;
                        fixture.detectChanges();
                        expect(groupInstance.value).toBeTruthy();
                        groupInstance.value = null;
                        fixture.detectChanges();
                        expect(radioInstances.every(function (radio) { return !radio.checked; })).toBe(true);
                    });
                });
                testing_1.describe('group with ngModel', function () {
                    var fixture;
                    var groupDebugElement;
                    var groupNativeElement;
                    var radioDebugElements;
                    var radioNativeElements;
                    var groupInstance;
                    var radioInstances;
                    var testComponent;
                    var groupNgControl;
                    testing_1.beforeEach(testing_1.async(function () {
                        builder.createAsync(RadioGroupWithNgModel).then(function (f) {
                            fixture = f;
                            fixture.detectChanges();
                            testComponent = fixture.debugElement.componentInstance;
                            groupDebugElement = fixture.debugElement.query(platform_browser_1.By.directive(radio_1.MdRadioGroup));
                            groupNativeElement = groupDebugElement.nativeElement;
                            groupInstance = groupDebugElement.injector.get(radio_1.MdRadioGroup);
                            groupNgControl = groupDebugElement.injector.get(common_1.NgControl);
                            radioDebugElements = fixture.debugElement.queryAll(platform_browser_1.By.directive(radio_1.MdRadioButton));
                            radioNativeElements = radioDebugElements.map(function (debugEl) { return debugEl.nativeElement; });
                            radioInstances = radioDebugElements.map(function (debugEl) { return debugEl.componentInstance; });
                        });
                    }));
                    testing_1.it('should have the correct ngControl state initially and after interaction', testing_1.fakeAsync(function () {
                        // The control should start off valid, pristine, and untouched.
                        expect(groupNgControl.valid).toBe(true);
                        expect(groupNgControl.pristine).toBe(true);
                        expect(groupNgControl.touched).toBe(false);
                        // After changing the value programmatically, the control should become dirty (not pristine),
                        // but remain untouched.
                        radioInstances[1].checked = true;
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(groupNgControl.valid).toBe(true);
                        expect(groupNgControl.pristine).toBe(false);
                        expect(groupNgControl.touched).toBe(false);
                        // After a user interaction occurs (such as a click), the control should remain dirty and
                        // now also be touched.
                        radioNativeElements[2].click();
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(groupNgControl.valid).toBe(true);
                        expect(groupNgControl.pristine).toBe(false);
                        expect(groupNgControl.touched).toBe(true);
                    }));
                    testing_1.it('should update the ngModel value when selecting a radio button', testing_1.fakeAsync(function () {
                        radioInstances[1].checked = true;
                        fixture.detectChanges();
                        testing_1.tick();
                        expect(testComponent.modelValue).toBe('chocolate');
                    }));
                });
                testing_1.describe('as standalone', function () {
                    var fixture;
                    var radioDebugElements;
                    var seasonRadioInstances;
                    var weatherRadioInstances;
                    var testComponent;
                    testing_1.beforeEach(testing_1.async(function () {
                        builder.createAsync(StandaloneRadioButtons).then(function (f) {
                            fixture = f;
                            fixture.detectChanges();
                            testComponent = fixture.debugElement.componentInstance;
                            radioDebugElements = fixture.debugElement.queryAll(platform_browser_1.By.directive(radio_1.MdRadioButton));
                            seasonRadioInstances = radioDebugElements
                                .filter(function (debugEl) { return debugEl.componentInstance.name == 'season'; })
                                .map(function (debugEl) { return debugEl.componentInstance; });
                            weatherRadioInstances = radioDebugElements
                                .filter(function (debugEl) { return debugEl.componentInstance.name == 'weather'; })
                                .map(function (debugEl) { return debugEl.componentInstance; });
                        });
                    }));
                    testing_1.it('should uniquely select radios by a name', function () {
                        seasonRadioInstances[0].checked = true;
                        weatherRadioInstances[1].checked = true;
                        fixture.detectChanges();
                        expect(seasonRadioInstances[0].checked).toBe(true);
                        expect(seasonRadioInstances[1].checked).toBe(false);
                        expect(seasonRadioInstances[2].checked).toBe(false);
                        expect(weatherRadioInstances[0].checked).toBe(false);
                        expect(weatherRadioInstances[1].checked).toBe(true);
                        expect(weatherRadioInstances[2].checked).toBe(false);
                        seasonRadioInstances[1].checked = true;
                        fixture.detectChanges();
                        expect(seasonRadioInstances[0].checked).toBe(false);
                        expect(seasonRadioInstances[1].checked).toBe(true);
                        expect(seasonRadioInstances[2].checked).toBe(false);
                        expect(weatherRadioInstances[0].checked).toBe(false);
                        expect(weatherRadioInstances[1].checked).toBe(true);
                        expect(weatherRadioInstances[2].checked).toBe(false);
                        weatherRadioInstances[2].checked = true;
                        expect(seasonRadioInstances[0].checked).toBe(false);
                        expect(seasonRadioInstances[1].checked).toBe(true);
                        expect(seasonRadioInstances[2].checked).toBe(false);
                        expect(weatherRadioInstances[0].checked).toBe(false);
                        expect(weatherRadioInstances[1].checked).toBe(false);
                        expect(weatherRadioInstances[2].checked).toBe(true);
                    });
                });
            });
            RadiosInsideRadioGroup = (function () {
                function RadiosInsideRadioGroup() {
                    this.isGroupDisabled = false;
                    this.groupValue = null;
                }
                RadiosInsideRadioGroup = __decorate([
                    core_1.Component({
                        directives: [radio_1.MD_RADIO_DIRECTIVES],
                        template: "\n  <md-radio-group [disabled]=\"isGroupDisabled\" [value]=\"groupValue\">\n    <md-radio-button value=\"fire\">Charmander</md-radio-button>\n    <md-radio-button value=\"water\">Squirtle</md-radio-button>\n    <md-radio-button value=\"leaf\">Bulbasaur</md-radio-button>\n  </md-radio-group>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadiosInsideRadioGroup);
                return RadiosInsideRadioGroup;
            }());
            StandaloneRadioButtons = (function () {
                function StandaloneRadioButtons() {
                }
                StandaloneRadioButtons = __decorate([
                    core_1.Component({
                        directives: [radio_1.MD_RADIO_DIRECTIVES],
                        template: "\n    <md-radio-button name=\"season\" value=\"spring\">Spring</md-radio-button>\n    <md-radio-button name=\"season\" value=\"summer\">Summer</md-radio-button>\n    <md-radio-button name=\"season\" value=\"autum\">Autumn</md-radio-button>\n    \n    <md-radio-button name=\"weather\" value=\"warm\">Spring</md-radio-button>\n    <md-radio-button name=\"weather\" value=\"hot\">Summer</md-radio-button>\n    <md-radio-button name=\"weather\" value=\"cool\">Autumn</md-radio-button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StandaloneRadioButtons);
                return StandaloneRadioButtons;
            }());
            RadioGroupWithNgModel = (function () {
                function RadioGroupWithNgModel() {
                }
                RadioGroupWithNgModel = __decorate([
                    core_1.Component({
                        directives: [radio_1.MD_RADIO_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n  <md-radio-group [(ngModel)]=\"modelValue\">\n    <md-radio-button value=\"vanilla\">Vanilla</md-radio-button>\n    <md-radio-button value=\"chocolate\">Chocolate</md-radio-button>\n    <md-radio-button value=\"strawberry\">Strawberry</md-radio-button>\n  </md-radio-group>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadioGroupWithNgModel);
                return RadioGroupWithNgModel;
            }());
        }
    }
});
//# sourceMappingURL=radio.spec.js.map