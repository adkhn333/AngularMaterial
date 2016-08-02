System.register(['./field-value'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var field_value_1;
    var BooleanFieldValueTest;
    return {
        setters:[
            function (field_value_1_1) {
                field_value_1 = field_value_1_1;
            }],
        execute: function() {
            describe('BooleanFieldValue', function () {
                it('should work for null values', function () {
                    var x = new BooleanFieldValueTest();
                    x.field = null;
                    expect(x.field).toBe(false);
                    x.field = undefined;
                    expect(x.field).toBe(false);
                });
                it('should work for string values', function () {
                    var x = new BooleanFieldValueTest();
                    x.field = 'hello';
                    expect(x.field).toBe(true);
                    x.field = 'true';
                    expect(x.field).toBe(true);
                    x.field = '';
                    expect(x.field).toBe(true);
                    x.field = 'false';
                    expect(x.field).toBe(false);
                });
            });
            BooleanFieldValueTest = (function () {
                function BooleanFieldValueTest() {
                }
                __decorate([
                    field_value_1.BooleanFieldValue(), 
                    __metadata('design:type', Boolean)
                ], BooleanFieldValueTest.prototype, "field", void 0);
                return BooleanFieldValueTest;
            }());
        }
    }
});
//# sourceMappingURL=field-value.spec.js.map