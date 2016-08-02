System.register(['@angular/core', '@angular2-material/input/input', '@angular2-material/button/button', '@angular2-material/card/card', '@angular2-material/checkbox/checkbox', '@angular2-material/icon/icon', '@angular2-material/toolbar/toolbar'], function(exports_1, context_1) {
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
    var core_1, input_1, button_1, card_1, checkbox_1, icon_1, toolbar_1;
    var max, InputDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            }],
        execute: function() {
            max = 5;
            InputDemo = (function () {
                function InputDemo() {
                    this.items = [
                        { value: 10 },
                        { value: 20 },
                        { value: 30 },
                        { value: 40 },
                        { value: 50 },
                    ];
                }
                InputDemo.prototype.addABunch = function (n) {
                    for (var x = 0; x < n; x++) {
                        this.items.push({ value: ++max });
                    }
                };
                InputDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'input-demo',
                        templateUrl: 'input-demo.html',
                        styleUrls: ['input-demo.css'],
                        directives: [card_1.MdCard, checkbox_1.MdCheckbox, button_1.MdButton, icon_1.MdIcon, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputDemo);
                return InputDemo;
            }());
            exports_1("InputDemo", InputDemo);
        }
    }
});
//# sourceMappingURL=input-demo.js.map