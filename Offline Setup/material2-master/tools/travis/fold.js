System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function encode(str) {
        return str.replace(/\W/g, '-').replace(/-$/, '');
    }
    function travisFoldStart(name) {
        if (process.env['TRAVIS']) {
            console.log('travis_fold:start:' + encode(name));
        }
        return function () {
            if (process.env['TRAVIS']) {
                console.log('travis_fold:end:' + encode(name));
            }
        };
    }
    exports_1("travisFoldStart", travisFoldStart);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=fold.js.map