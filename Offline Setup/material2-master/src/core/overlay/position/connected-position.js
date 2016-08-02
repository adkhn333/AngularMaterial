System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConnectionPair;
    return {
        setters:[],
        execute: function() {
            /**
             * The points of the origin element and the overlay element to connect.
             * @internal
             */
            ConnectionPair = (function () {
                function ConnectionPair(origin, overlay) {
                    this.originX = origin.originX;
                    this.originY = origin.originY;
                    this.overlayX = overlay.overlayX;
                    this.overlayY = overlay.overlayY;
                }
                return ConnectionPair;
            }());
            exports_1("ConnectionPair", ConnectionPair);
        }
    }
});
//# sourceMappingURL=connected-position.js.map