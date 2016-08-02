System.register(['@angular/core', '@angular/router', '@angular2-material/core/rtl/dir', '@angular2-material/button/button', '@angular2-material/sidenav/sidenav', '@angular2-material/list/list', '@angular2-material/icon/icon', '@angular2-material/toolbar/toolbar', '../card/card-demo', '../button/button-demo', '../icon/icon-demo', '../radio/radio-demo', '../sidenav/sidenav-demo', '../progress-bar/progress-bar-demo', '../progress-circle/progress-circle-demo', '../checkbox/checkbox-demo', '../portal/portal-demo', '../toolbar/toolbar-demo', '../overlay/overlay-demo', '../list/list-demo', '../input/input-demo', '../live-announcer/live-announcer-demo', '../gestures/gestures-demo', '../grid-list/grid-list-demo', '../tab-group/tab-group-demo', '../slide-toggle/slide-toggle-demo'], function(exports_1, context_1) {
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
    var core_1, router_1, dir_1, button_1, sidenav_1, list_1, icon_1, toolbar_1, card_demo_1, button_demo_1, icon_demo_1, radio_demo_1, sidenav_demo_1, progress_bar_demo_1, progress_circle_demo_1, checkbox_demo_1, portal_demo_1, toolbar_demo_1, overlay_demo_1, list_demo_1, input_demo_1, live_announcer_demo_1, gestures_demo_1, grid_list_demo_1, tab_group_demo_1, slide_toggle_demo_1;
    var Home, DemoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dir_1_1) {
                dir_1 = dir_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (card_demo_1_1) {
                card_demo_1 = card_demo_1_1;
            },
            function (button_demo_1_1) {
                button_demo_1 = button_demo_1_1;
            },
            function (icon_demo_1_1) {
                icon_demo_1 = icon_demo_1_1;
            },
            function (radio_demo_1_1) {
                radio_demo_1 = radio_demo_1_1;
            },
            function (sidenav_demo_1_1) {
                sidenav_demo_1 = sidenav_demo_1_1;
            },
            function (progress_bar_demo_1_1) {
                progress_bar_demo_1 = progress_bar_demo_1_1;
            },
            function (progress_circle_demo_1_1) {
                progress_circle_demo_1 = progress_circle_demo_1_1;
            },
            function (checkbox_demo_1_1) {
                checkbox_demo_1 = checkbox_demo_1_1;
            },
            function (portal_demo_1_1) {
                portal_demo_1 = portal_demo_1_1;
            },
            function (toolbar_demo_1_1) {
                toolbar_demo_1 = toolbar_demo_1_1;
            },
            function (overlay_demo_1_1) {
                overlay_demo_1 = overlay_demo_1_1;
            },
            function (list_demo_1_1) {
                list_demo_1 = list_demo_1_1;
            },
            function (input_demo_1_1) {
                input_demo_1 = input_demo_1_1;
            },
            function (live_announcer_demo_1_1) {
                live_announcer_demo_1 = live_announcer_demo_1_1;
            },
            function (gestures_demo_1_1) {
                gestures_demo_1 = gestures_demo_1_1;
            },
            function (grid_list_demo_1_1) {
                grid_list_demo_1 = grid_list_demo_1_1;
            },
            function (tab_group_demo_1_1) {
                tab_group_demo_1 = tab_group_demo_1_1;
            },
            function (slide_toggle_demo_1_1) {
                slide_toggle_demo_1 = slide_toggle_demo_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    <p>Welcome to the development demos for Angular Material 2!</p>\n    <p>Open the sidenav to select a demo. </p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
            DemoApp = (function () {
                function DemoApp() {
                }
                DemoApp = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'demo-app',
                        providers: [],
                        templateUrl: 'demo-app.html',
                        styleUrls: ['demo-app.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            dir_1.Dir,
                            button_1.MdButton,
                            icon_1.MdIcon,
                            sidenav_1.MD_SIDENAV_DIRECTIVES,
                            list_1.MD_LIST_DIRECTIVES,
                            toolbar_1.MdToolbar,
                        ],
                        pipes: []
                    }),
                    router_1.Routes([
                        new router_1.Route({ path: '/', component: Home }),
                        new router_1.Route({ path: '/button', component: button_demo_1.ButtonDemo }),
                        new router_1.Route({ path: '/card', component: card_demo_1.CardDemo }),
                        new router_1.Route({ path: '/radio', component: radio_demo_1.RadioDemo }),
                        new router_1.Route({ path: '/sidenav', component: sidenav_demo_1.SidenavDemo }),
                        new router_1.Route({ path: '/slide-toggle', component: slide_toggle_demo_1.SlideToggleDemo }),
                        new router_1.Route({ path: '/progress-circle', component: progress_circle_demo_1.ProgressCircleDemo }),
                        new router_1.Route({ path: '/progress-bar', component: progress_bar_demo_1.ProgressBarDemo }),
                        new router_1.Route({ path: '/portal', component: portal_demo_1.PortalDemo }),
                        new router_1.Route({ path: '/overlay', component: overlay_demo_1.OverlayDemo }),
                        new router_1.Route({ path: '/checkbox', component: checkbox_demo_1.CheckboxDemo }),
                        new router_1.Route({ path: '/input', component: input_demo_1.InputDemo }),
                        new router_1.Route({ path: '/toolbar', component: toolbar_demo_1.ToolbarDemo }),
                        new router_1.Route({ path: '/icon', component: icon_demo_1.IconDemo }),
                        new router_1.Route({ path: '/list', component: list_demo_1.ListDemo }),
                        new router_1.Route({ path: '/live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemo }),
                        new router_1.Route({ path: '/gestures', component: gestures_demo_1.GesturesDemo }),
                        new router_1.Route({ path: '/grid-list', component: grid_list_demo_1.GridListDemo }),
                        new router_1.Route({ path: '/tab-group', component: tab_group_demo_1.TabGroupDemo })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], DemoApp);
                return DemoApp;
            }());
            exports_1("DemoApp", DemoApp);
        }
    }
});
//# sourceMappingURL=demo-app.js.map