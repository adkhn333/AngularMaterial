System.register(['@angular/platform-browser-dynamic', '@angular/platform-browser', '@angular/http', '@angular/router', '@angular/core', '@angular2-material/core/overlay/overlay', '@angular2-material/core/live-announcer/live-announcer', '@angular2-material/core/overlay/overlay-container', '@angular2-material/core/gestures/MdGestureConfig', '@angular2-material/icon/icon-registry', './demo-app/demo-app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, platform_browser_1, http_1, router_1, core_1, core_2, overlay_1, live_announcer_1, overlay_container_1, MdGestureConfig_1, icon_registry_1, demo_app_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (overlay_1_1) {
                overlay_1 = overlay_1_1;
            },
            function (live_announcer_1_1) {
                live_announcer_1 = live_announcer_1_1;
            },
            function (overlay_container_1_1) {
                overlay_container_1 = overlay_container_1_1;
            },
            function (MdGestureConfig_1_1) {
                MdGestureConfig_1 = MdGestureConfig_1_1;
            },
            function (icon_registry_1_1) {
                icon_registry_1 = icon_registry_1_1;
            },
            function (demo_app_1_1) {
                demo_app_1 = demo_app_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(demo_app_1.DemoApp, [
                router_1.ROUTER_PROVIDERS,
                live_announcer_1.MdLiveAnnouncer,
                core_1.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useValue: overlay_container_1.createOverlayContainer() }),
                http_1.HTTP_PROVIDERS,
                icon_registry_1.MdIconRegistry,
                core_2.Renderer,
                core_1.provide(platform_browser_1.HAMMER_GESTURE_CONFIG, { useClass: MdGestureConfig_1.MdGestureConfig })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map