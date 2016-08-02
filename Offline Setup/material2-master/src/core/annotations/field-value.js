System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Annotation Factory that allows HTML style boolean attributes. For example,
     * a field declared like this:
    
     * @Directive({ selector: 'component' }) class MyComponent {
     *   @Input() @BooleanFieldValueFactory() myField: boolean;
     * }
     *
     * You could set it up this way:
     *   <component myField>
     * or:
     *   <component myField="">
     */
    function booleanFieldValueFactory() {
        return function booleanFieldValueMetadata(target, key) {
            var defaultValue = target[key];
            var localKey = "__md_private_symbol_" + key;
            target[localKey] = defaultValue;
            Object.defineProperty(target, key, {
                get: function () { return this[localKey]; },
                set: function (value) {
                    this[localKey] = value != null && "" + value !== 'false';
                }
            });
        };
    }
    return {
        setters:[],
        execute: function() {
            exports_1("BooleanFieldValue", booleanFieldValueFactory);
        }
    }
});
//# sourceMappingURL=field-value.js.map