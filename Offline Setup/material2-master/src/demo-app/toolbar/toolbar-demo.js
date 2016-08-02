System.register(['@angular/core', '@angular2-material/icon/icon', '@angular2-material/toolbar/toolbar'], function(exports_1, context_1) {
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
    var core_1, icon_1, toolbar_1;
    var ToolbarDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            }],
        execute: function() {
            ToolbarDemo = (function () {
                function ToolbarDemo() {
                }
                ToolbarDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'toolbar-demo',
                        templateUrl: 'toolbar-demo.html',
                        styleUrls: ['toolbar-demo.css'],
                        directives: [toolbar_1.MdToolbar, icon_1.MdIcon]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToolbarDemo);
                return ToolbarDemo;
            }());
            exports_1("ToolbarDemo", ToolbarDemo);
        }
    }
});
//# sourceMappingURL=toolbar-demo.js.map