System.register(['@angular/core', '@angular2-material/radio/radio', '@angular2-material/radio/radio_dispatcher'], function(exports_1, context_1) {
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
    var core_1, radio_1, radio_dispatcher_1;
    var RadioDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (radio_1_1) {
                radio_1 = radio_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
            }],
        execute: function() {
            RadioDemo = (function () {
                function RadioDemo() {
                    this.isDisabled = false;
                    this.favoriteSeason = 'Autumn';
                    this.seasonOptions = [
                        'Winter',
                        'Spring',
                        'Summer',
                        'Autumn',
                    ];
                }
                RadioDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'radio-demo',
                        templateUrl: 'radio-demo.html',
                        styleUrls: ['radio-demo.css'],
                        providers: [radio_dispatcher_1.MdRadioDispatcher],
                        directives: [radio_1.MdRadioButton, radio_1.MdRadioGroup]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadioDemo);
                return RadioDemo;
            }());
            exports_1("RadioDemo", RadioDemo);
        }
    }
});
//# sourceMappingURL=radio-demo.js.map