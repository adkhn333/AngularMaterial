System.register(['@angular/core', '@angular2-material/tab-group/tab-group', '@angular2-material/toolbar/toolbar', '@angular2-material/input/input'], function(exports_1, context_1) {
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
    var core_1, tab_group_1, toolbar_1, input_1;
    var TabGroupDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_group_1_1) {
                tab_group_1 = tab_group_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }],
        execute: function() {
            TabGroupDemo = (function () {
                function TabGroupDemo() {
                    this.tabs = [
                        { label: 'Tab One', content: 'This is the body of the first tab' },
                        { label: 'Tab Two', content: 'This is the body of the second tab' },
                        { label: 'Tab Three', content: 'This is the body of the third tab' },
                    ];
                }
                TabGroupDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'tab-group-demo',
                        templateUrl: 'tab-group-demo.html',
                        styleUrls: ['tab-group-demo.css'],
                        directives: [tab_group_1.MD_TAB_GROUP_DIRECTIVES, toolbar_1.MdToolbar, input_1.MdInput],
                        encapsulation: core_1.ViewEncapsulation.None,
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabGroupDemo);
                return TabGroupDemo;
            }());
            exports_1("TabGroupDemo", TabGroupDemo);
        }
    }
});
//# sourceMappingURL=tab-group-demo.js.map