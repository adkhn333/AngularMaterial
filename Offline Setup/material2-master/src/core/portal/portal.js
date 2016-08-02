System.register(['./portal-errors'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var portal_errors_1;
    var Portal, ComponentPortal, TemplatePortal, BasePortalHost;
    return {
        setters:[
            function (portal_errors_1_1) {
                portal_errors_1 = portal_errors_1_1;
            }],
        execute: function() {
            /**
             * A `Portal` is something that you want to render somewhere else.
             * It can be attach to / detached from a `PortalHost`.
             */
            Portal = (function () {
                function Portal() {
                }
                /** Attach this portal to a host. */
                Portal.prototype.attach = function (host) {
                    if (host == null) {
                        throw new portal_errors_1.MdNullPortalHostError();
                    }
                    if (host.hasAttached()) {
                        throw new portal_errors_1.MdPortalAlreadyAttachedError();
                    }
                    this._attachedHost = host;
                    return host.attach(this);
                };
                /** Detach this portal from its host */
                Portal.prototype.detach = function () {
                    var host = this._attachedHost;
                    if (host == null) {
                        throw new portal_errors_1.MdNoPortalAttachedError();
                    }
                    this._attachedHost = null;
                    return host.detach();
                };
                Object.defineProperty(Portal.prototype, "isAttached", {
                    /** Whether this portal is attached to a host. */
                    get: function () {
                        return this._attachedHost != null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the PortalHost reference without performing `attach()`. This is used directly by
                 * the PortalHost when it is performing an `attach()` or `detatch()`.
                 */
                Portal.prototype.setAttachedHost = function (host) {
                    this._attachedHost = host;
                };
                return Portal;
            }());
            exports_1("Portal", Portal);
            /**
             * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
             */
            ComponentPortal = (function (_super) {
                __extends(ComponentPortal, _super);
                function ComponentPortal(component, viewContainerRef) {
                    if (viewContainerRef === void 0) { viewContainerRef = null; }
                    _super.call(this);
                    this.component = component;
                    this.viewContainerRef = viewContainerRef;
                }
                return ComponentPortal;
            }(Portal));
            exports_1("ComponentPortal", ComponentPortal);
            /**
             * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
             */
            TemplatePortal = (function (_super) {
                __extends(TemplatePortal, _super);
                function TemplatePortal(template, viewContainerRef) {
                    _super.call(this);
                    /**
                     * Additional locals for the instantiated embedded view.
                     * These locals can be seen as "exports" for the template, such as how ngFor has
                     * index / event / odd.
                     * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
                     */
                    this.locals = new Map();
                    this.templateRef = template;
                    this.viewContainerRef = viewContainerRef;
                }
                Object.defineProperty(TemplatePortal.prototype, "origin", {
                    get: function () {
                        return this.templateRef.elementRef;
                    },
                    enumerable: true,
                    configurable: true
                });
                TemplatePortal.prototype.attach = function (host, locals) {
                    this.locals = locals == null ? new Map() : locals;
                    return _super.prototype.attach.call(this, host);
                };
                TemplatePortal.prototype.detach = function () {
                    this.locals = new Map();
                    return _super.prototype.detach.call(this);
                };
                return TemplatePortal;
            }(Portal));
            exports_1("TemplatePortal", TemplatePortal);
            /**
             * Partial implementation of PortalHost that only deals with attaching either a
             * ComponentPortal or a TemplatePortal.
             */
            BasePortalHost = (function () {
                function BasePortalHost() {
                    /** Whether this host has already been permanently disposed. */
                    this._isDisposed = false;
                }
                /** Whether this host has an attached portal. */
                BasePortalHost.prototype.hasAttached = function () {
                    return this._attachedPortal != null;
                };
                BasePortalHost.prototype.attach = function (portal) {
                    if (portal == null) {
                        throw new portal_errors_1.MdNullPortalError();
                    }
                    if (this.hasAttached()) {
                        throw new portal_errors_1.MdPortalAlreadyAttachedError();
                    }
                    if (this._isDisposed) {
                        throw new portal_errors_1.MdPortalHostAlreadyDisposedError();
                    }
                    if (portal instanceof ComponentPortal) {
                        this._attachedPortal = portal;
                        return this.attachComponentPortal(portal);
                    }
                    else if (portal instanceof TemplatePortal) {
                        this._attachedPortal = portal;
                        return this.attachTemplatePortal(portal);
                    }
                    throw new portal_errors_1.MdUnknownPortalTypeError();
                };
                BasePortalHost.prototype.detach = function () {
                    this._attachedPortal.setAttachedHost(null);
                    this._attachedPortal = null;
                    if (this._disposeFn != null) {
                        this._disposeFn();
                        this._disposeFn = null;
                    }
                    return Promise.resolve(null);
                };
                BasePortalHost.prototype.dispose = function () {
                    if (this.hasAttached()) {
                        this.detach();
                    }
                    this._isDisposed = true;
                };
                BasePortalHost.prototype.setDisposeFn = function (fn) {
                    this._disposeFn = fn;
                };
                return BasePortalHost;
            }());
            exports_1("BasePortalHost", BasePortalHost);
        }
    }
});
//# sourceMappingURL=portal.js.map