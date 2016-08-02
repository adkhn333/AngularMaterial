// TODO(kara): Revisit why error messages are not being properly set.
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var MdError;
    return {
        setters:[],
        execute: function() {
            /**
             * Wrapper around Error that sets the error message.
             */
            MdError = (function (_super) {
                __extends(MdError, _super);
                function MdError(value) {
                    _super.call(this);
                    _super.prototype.message = value;
                }
                return MdError;
            }(Error));
            exports_1("MdError", MdError);
        }
    }
});
//# sourceMappingURL=error.js.map