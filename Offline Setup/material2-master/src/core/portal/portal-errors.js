System.register(['../errors/error'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var error_1;
    var MdComponentPortalAttachedToDomWithoutOriginError, MdNullPortalError, MdPortalAlreadyAttachedError, MdPortalHostAlreadyDisposedError, MdUnknownPortalTypeError, MdNullPortalHostError, MdNoPortalAttachedError;
    return {
        setters:[
            function (error_1_1) {
                error_1 = error_1_1;
            }],
        execute: function() {
            /** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
            MdComponentPortalAttachedToDomWithoutOriginError = (function (_super) {
                __extends(MdComponentPortalAttachedToDomWithoutOriginError, _super);
                function MdComponentPortalAttachedToDomWithoutOriginError() {
                    _super.call(this, 'A ComponentPortal must have an origin set when attached to a DomPortalHost ' +
                        'because the DOM element is not part of the Angular application context.');
                }
                return MdComponentPortalAttachedToDomWithoutOriginError;
            }(error_1.MdError));
            exports_1("MdComponentPortalAttachedToDomWithoutOriginError", MdComponentPortalAttachedToDomWithoutOriginError);
            /** Exception thrown when attempting to attach a null portal to a host. */
            MdNullPortalError = (function (_super) {
                __extends(MdNullPortalError, _super);
                function MdNullPortalError() {
                    _super.call(this, 'Must provide a portal to attach');
                }
                return MdNullPortalError;
            }(error_1.MdError));
            exports_1("MdNullPortalError", MdNullPortalError);
            /** Exception thrown when attempting to attach a portal to a host that is already attached. */
            MdPortalAlreadyAttachedError = (function (_super) {
                __extends(MdPortalAlreadyAttachedError, _super);
                function MdPortalAlreadyAttachedError() {
                    _super.call(this, 'Host already has a portal attached');
                }
                return MdPortalAlreadyAttachedError;
            }(error_1.MdError));
            exports_1("MdPortalAlreadyAttachedError", MdPortalAlreadyAttachedError);
            /** Exception thrown when attempting to attach a portal to an already-disposed host. */
            MdPortalHostAlreadyDisposedError = (function (_super) {
                __extends(MdPortalHostAlreadyDisposedError, _super);
                function MdPortalHostAlreadyDisposedError() {
                    _super.call(this, 'This PortalHost has already been disposed');
                }
                return MdPortalHostAlreadyDisposedError;
            }(error_1.MdError));
            exports_1("MdPortalHostAlreadyDisposedError", MdPortalHostAlreadyDisposedError);
            /** Exception thrown when attempting to attach an unknown portal type. */
            MdUnknownPortalTypeError = (function (_super) {
                __extends(MdUnknownPortalTypeError, _super);
                function MdUnknownPortalTypeError() {
                    _super.call(this, 'Attempting to attach an unknown Portal type. ' +
                        'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
                }
                return MdUnknownPortalTypeError;
            }(error_1.MdError));
            exports_1("MdUnknownPortalTypeError", MdUnknownPortalTypeError);
            /** Exception thrown when attempting to attach a portal to a null host. */
            MdNullPortalHostError = (function (_super) {
                __extends(MdNullPortalHostError, _super);
                function MdNullPortalHostError() {
                    _super.call(this, 'Attmepting to attach a portal to a null PortalHost');
                }
                return MdNullPortalHostError;
            }(error_1.MdError));
            exports_1("MdNullPortalHostError", MdNullPortalHostError);
            /** Exception thrown when attempting to detach a portal that is not attached. */
            MdNoPortalAttachedError = (function (_super) {
                __extends(MdNoPortalAttachedError, _super);
                function MdNoPortalAttachedError() {
                    _super.call(this, 'Attmepting to detach a portal that is not attached to a host');
                }
                return MdNoPortalAttachedError;
            }(error_1.MdError));
            exports_1("MdNoPortalAttachedError", MdNoPortalAttachedError);
        }
    }
});
//# sourceMappingURL=portal-errors.js.map