System.register(['@angular2-material/core/errors/error'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var error_1;
    var MdGridListColsError, MdGridTileTooWideError, MdGridListBadRatioError;
    return {
        setters:[
            function (error_1_1) {
                error_1 = error_1_1;
            }],
        execute: function() {
            /**
             * Exception thrown when cols property is missing from grid-list
             */
            MdGridListColsError = (function (_super) {
                __extends(MdGridListColsError, _super);
                function MdGridListColsError() {
                    _super.call(this, "md-grid-list: must pass in number of columns. Example: <md-grid-list cols=\"3\">");
                }
                return MdGridListColsError;
            }(error_1.MdError));
            exports_1("MdGridListColsError", MdGridListColsError);
            /**
             * Exception thrown when a tile's colspan is longer than the number of cols in list
             */
            MdGridTileTooWideError = (function (_super) {
                __extends(MdGridTileTooWideError, _super);
                function MdGridTileTooWideError(cols, listLength) {
                    _super.call(this, "Tile with colspan " + cols + " is wider than grid with cols=\"" + listLength + "\".");
                }
                return MdGridTileTooWideError;
            }(error_1.MdError));
            exports_1("MdGridTileTooWideError", MdGridTileTooWideError);
            /**
             * Exception thrown when an invalid ratio is passed in as a rowHeight
             */
            MdGridListBadRatioError = (function (_super) {
                __extends(MdGridListBadRatioError, _super);
                function MdGridListBadRatioError(value) {
                    _super.call(this, "md-grid-list: invalid ratio given for row-height: \"" + value + "\"");
                }
                return MdGridListBadRatioError;
            }(error_1.MdError));
            exports_1("MdGridListBadRatioError", MdGridListBadRatioError);
        }
    }
});
//# sourceMappingURL=grid-list-errors.js.map