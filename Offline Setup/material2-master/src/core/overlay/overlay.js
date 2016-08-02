System.register(['@angular/core', './overlay-state', '../portal/dom-portal-host', './overlay-ref', './position/overlay-position-builder', './position/viewport-ruler', './overlay-container'], function(exports_1, context_1) {
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
    var core_1, overlay_state_1, dom_portal_host_1, overlay_ref_1, overlay_position_builder_1, viewport_ruler_1;
    var OVERLAY_CONTAINER_TOKEN, nextUniqueId, defaultState, Overlay, OVERLAY_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (overlay_state_1_1) {
                overlay_state_1 = overlay_state_1_1;
                exports_1({
                    "OverlayState": overlay_state_1_1["OverlayState"]
                });
            },
            function (dom_portal_host_1_1) {
                dom_portal_host_1 = dom_portal_host_1_1;
            },
            function (overlay_ref_1_1) {
                overlay_ref_1 = overlay_ref_1_1;
                exports_1({
                    "OverlayRef": overlay_ref_1_1["OverlayRef"]
                });
            },
            function (overlay_position_builder_1_1) {
                overlay_position_builder_1 = overlay_position_builder_1_1;
            },
            function (viewport_ruler_1_1) {
                viewport_ruler_1 = viewport_ruler_1_1;
            },
            function (overlay_container_1_1) {
                exports_1({
                    "createOverlayContainer": overlay_container_1_1["createOverlayContainer"]
                });
            }],
        execute: function() {
            /** Token used to inject the DOM element that serves as the overlay container. */
            exports_1("OVERLAY_CONTAINER_TOKEN", OVERLAY_CONTAINER_TOKEN = new core_1.OpaqueToken('overlayContainer'));
            /** Next overlay unique ID. */
            nextUniqueId = 0;
            /** The default state for newly created overlays. */
            defaultState = new overlay_state_1.OverlayState();
            /**
             * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
             * used as a low-level building building block for other components. Dialogs, tooltips, menus,
             * selects, etc. can all be built using overlays. The service should primarily be used by authors
             * of re-usable components rather than developers building end-user applications.
             *
             * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
             */
            Overlay = (function () {
                function Overlay(_overlayContainerElement, _dynamicComponentLoader, _positionBuilder) {
                    this._overlayContainerElement = _overlayContainerElement;
                    this._dynamicComponentLoader = _dynamicComponentLoader;
                    this._positionBuilder = _positionBuilder;
                }
                /**
                 * Creates an overlay.
                 * @param state State to apply to the overlay.
                 * @returns A reference to the created overlay.
                 */
                Overlay.prototype.create = function (state) {
                    var _this = this;
                    if (state === void 0) { state = defaultState; }
                    return this._createPaneElement().then(function (pane) { return _this._createOverlayRef(pane, state); });
                };
                /**
                 * Returns a position builder that can be used, via fluent API,
                 * to construct and configure a position strategy.
                 */
                Overlay.prototype.position = function () {
                    return this._positionBuilder;
                };
                /**
                 * Creates the DOM element for an overlay and appends it to the overlay container.
                 * @returns Promise resolving to the created element.
                 */
                Overlay.prototype._createPaneElement = function () {
                    var pane = document.createElement('div');
                    pane.id = "md-overlay-" + nextUniqueId++;
                    pane.classList.add('md-overlay-pane');
                    this._overlayContainerElement.appendChild(pane);
                    return Promise.resolve(pane);
                };
                /**
                 * Create a DomPortalHost into which the overlay content can be loaded.
                 * @param pane The DOM element to turn into a portal host.
                 * @returns A portal host for the given DOM element.
                 */
                Overlay.prototype._createPortalHost = function (pane) {
                    return new dom_portal_host_1.DomPortalHost(pane, this._dynamicComponentLoader);
                };
                /**
                 * Creates an OverlayRef for an overlay in the given DOM element.
                 * @param pane DOM element for the overlay
                 * @param state
                 * @returns {OverlayRef}
                 */
                Overlay.prototype._createOverlayRef = function (pane, state) {
                    return new overlay_ref_1.OverlayRef(this._createPortalHost(pane), pane, state);
                };
                Overlay = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(OVERLAY_CONTAINER_TOKEN)), 
                    __metadata('design:paramtypes', [HTMLElement, core_1.DynamicComponentLoader, overlay_position_builder_1.OverlayPositionBuilder])
                ], Overlay);
                return Overlay;
            }());
            exports_1("Overlay", Overlay);
            /** Providers for Overlay and its related injectables. */
            exports_1("OVERLAY_PROVIDERS", OVERLAY_PROVIDERS = [
                viewport_ruler_1.ViewportRuler,
                overlay_position_builder_1.OverlayPositionBuilder,
                Overlay,
            ]);
        }
    }
});
//# sourceMappingURL=overlay.js.map