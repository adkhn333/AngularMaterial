System.register(['@angular/core', '@angular2-material/button/button', '@angular2-material/list/list', '@angular2-material/icon/icon'], function(exports_1, context_1) {
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
    var core_1, button_1, list_1, icon_1;
    var ListDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            }],
        execute: function() {
            ListDemo = (function () {
                function ListDemo() {
                    this.items = [
                        'Pepper',
                        'Salt',
                        'Paprika'
                    ];
                    this.contacts = [
                        { name: 'Nancy', headline: 'Software engineer' },
                        { name: 'Mary', headline: 'TPM' },
                        { name: 'Bobby', headline: 'UX designer' }
                    ];
                    this.messages = [
                        {
                            from: 'Nancy',
                            subject: 'Brunch?',
                            message: 'Did you want to go on Sunday? I was thinking that might work.',
                            image: 'https://angular.io/resources/images/bios/julie-ralph.jpg'
                        },
                        {
                            from: 'Mary',
                            subject: 'Summer BBQ',
                            message: 'Wish I could come, but I have some prior obligations.',
                            image: 'https://angular.io/resources/images/bios/juleskremer.jpg'
                        },
                        {
                            from: 'Bobby',
                            subject: 'Oui oui',
                            message: 'Do you have Paris reservations for the 15th? I just booked!',
                            image: 'https://angular.io/resources/images/bios/jelbourn.jpg'
                        }
                    ];
                    this.links = [
                        { name: 'Inbox' },
                        { name: 'Outbox' },
                        { name: 'Spam' },
                        { name: 'Trash' }
                    ];
                    this.thirdLine = false;
                    this.infoClicked = false;
                }
                ListDemo = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'list-demo',
                        templateUrl: 'list-demo.html',
                        styleUrls: ['list-demo.css'],
                        directives: [list_1.MD_LIST_DIRECTIVES, button_1.MdButton, icon_1.MdIcon]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListDemo);
                return ListDemo;
            }());
            exports_1("ListDemo", ListDemo);
        }
    }
});
//# sourceMappingURL=list-demo.js.map