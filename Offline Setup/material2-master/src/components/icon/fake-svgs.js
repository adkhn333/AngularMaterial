System.register(['@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var FAKE_SVGS;
    /**
     * Returns an HTTP response for a fake SVG URL.
     */
    function getFakeSvgHttpResponse(url) {
        if (FAKE_SVGS.has(url)) {
            return new http_1.Response(new http_1.ResponseOptions({
                status: 200,
                body: FAKE_SVGS.get(url),
            }));
        }
        else {
            return new http_1.Response(new http_1.ResponseOptions({ status: 404 }));
        }
    }
    exports_1("getFakeSvgHttpResponse", getFakeSvgHttpResponse);
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            /**
             * Fake URLs and associated SVG documents used by tests.
             */
            FAKE_SVGS = (function () {
                var svgs = new Map();
                svgs.set('cat.svg', '<svg><path id="meow"></path></svg>');
                svgs.set('dog.svg', '<svg><path id="woof"></path></svg>');
                svgs.set('farm-set-1.svg', "\n      <svg>\n        <defs>\n          <g id=\"pig\"><path id=\"oink\"></path></g>\n          <g id=\"cow\"><path id=\"moo\"></path></g>\n        </defs>\n      </svg>\n  ");
                svgs.set('farm-set-2.svg', "\n      <svg>\n        <defs>\n          <g id=\"cow\"><path id=\"moo moo\"></path></g>\n          <g id=\"sheep\"><path id=\"baa\"></path></g>\n        </defs>\n      </svg>\n  ");
                svgs.set('arrow-set.svg', "\n      <svg>\n        <defs>\n          <svg id=\"left-arrow\"><path id=\"left\"></path></svg>\n          <svg id=\"right-arrow\"><path id=\"right\"></path></svg>\n        </defs>\n      </svg>\n  ");
                return svgs;
            })();
        }
    }
});
//# sourceMappingURL=fake-svgs.js.map