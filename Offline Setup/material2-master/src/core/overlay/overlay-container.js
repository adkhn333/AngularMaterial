System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Create the overlay container element, which is simply a div
     * with the 'md-overlay-container' class on the document body.
     */
    function createOverlayContainer() {
        var container = document.createElement('div');
        container.classList.add('md-overlay-container');
        document.body.appendChild(container);
        return container;
    }
    exports_1("createOverlayContainer", createOverlayContainer);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=overlay-container.js.map