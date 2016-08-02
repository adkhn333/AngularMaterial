System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PromiseCompleter;
    return {
        setters:[],
        execute: function() {
            PromiseCompleter = (function () {
                function PromiseCompleter() {
                    var _this = this;
                    this.promise = new Promise(function (res, rej) {
                        _this.resolve = res;
                        _this.reject = rej;
                    });
                }
                return PromiseCompleter;
            }());
            exports_1("PromiseCompleter", PromiseCompleter);
        }
    }
});
//# sourceMappingURL=promise-completer.js.map