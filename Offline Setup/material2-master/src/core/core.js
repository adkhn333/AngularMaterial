System.register(['./rtl/dir', './portal/portal', './portal/portal-directives', './gestures/MdGestureConfig'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (dir_1_1) {
                exportStar_1(dir_1_1);
            },
            function (portal_1_1) {
                exportStar_1(portal_1_1);
            },
            function (portal_directives_1_1) {
                exportStar_1(portal_directives_1_1);
            },
            function (MdGestureConfig_1_1) {
                exportStar_1(MdGestureConfig_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=core.js.map