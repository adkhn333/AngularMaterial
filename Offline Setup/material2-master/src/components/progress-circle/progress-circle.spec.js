System.register(['@angular/core/testing', '@angular/compiler/testing', '@angular/core', '@angular/platform-browser', './progress-circle'], function(exports_1, context_1) {
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
    var testing_1, testing_2, core_1, platform_browser_1, progress_circle_1;
    var TestApp;
    function main() {
        testing_1.describe('MdProgressCircular', function () {
            var builder;
            testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                builder = tcb;
            }));
            testing_1.it('should apply a mode of "determinate" if no mode is provided.', function (done) {
                builder
                    .overrideTemplate(TestApp, '<md-progress-circle></md-progress-circle>')
                    .createAsync(TestApp)
                    .then(function (fixture) {
                    fixture.detectChanges();
                    var progressElement = getChildDebugElement(fixture.debugElement, 'md-progress-circle');
                    testing_1.expect(progressElement.componentInstance.mode).toBe('determinate');
                    done();
                });
            });
            testing_1.it('should not modify the mode if a valid mode is provided.', function (done) {
                builder
                    .overrideTemplate(TestApp, '<md-progress-circle mode="indeterminate"></md-progress-circle>')
                    .createAsync(TestApp)
                    .then(function (fixture) {
                    fixture.detectChanges();
                    var progressElement = getChildDebugElement(fixture.debugElement, 'md-progress-circle');
                    testing_1.expect(progressElement.componentInstance.mode).toBe('indeterminate');
                    done();
                });
            });
            testing_1.it('should define a default value for the value attribute', function (done) {
                builder
                    .overrideTemplate(TestApp, '<md-progress-circle></md-progress-circle>')
                    .createAsync(TestApp)
                    .then(function (fixture) {
                    fixture.detectChanges();
                    var progressElement = getChildDebugElement(fixture.debugElement, 'md-progress-circle');
                    testing_1.expect(progressElement.componentInstance.value).toBe(0);
                    done();
                });
            });
            testing_1.it('should clamp the value of the progress between 0 and 100', function (done) {
                builder
                    .overrideTemplate(TestApp, '<md-progress-circle></md-progress-circle>')
                    .createAsync(TestApp)
                    .then(function (fixture) {
                    fixture.detectChanges();
                    var progressElement = getChildDebugElement(fixture.debugElement, 'md-progress-circle');
                    var progressComponent = progressElement.componentInstance;
                    progressComponent.value = 50;
                    testing_1.expect(progressComponent.value).toBe(50);
                    progressComponent.value = 999;
                    testing_1.expect(progressComponent.value).toBe(100);
                    progressComponent.value = -10;
                    testing_1.expect(progressComponent.value).toBe(0);
                    done();
                });
            });
        });
    }
    exports_1("main", main);
    /** Gets a child DebugElement by tag name. */
    function getChildDebugElement(parent, selector) {
        return parent.query(platform_browser_1.By.css(selector));
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
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
            function (progress_circle_1_1) {
                progress_circle_1 = progress_circle_1_1;
            }],
        execute: function() {
            /** Test component that contains an MdButton. */
            TestApp = (function () {
                function TestApp() {
                }
                TestApp = __decorate([
                    core_1.Component({
                        directives: [progress_circle_1.MdProgressCircle],
                        template: '',
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestApp);
                return TestApp;
            }());
        }
    }
});
//# sourceMappingURL=progress-circle.spec.js.map