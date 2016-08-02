System.register(['@angular/core', '@angular2-material/core/portal/portal-directives', './tab-label', './tab-content', './tab-label-wrapper', './ink-bar'], function(exports_1, context_1) {
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
    var core_1, core_2, core_3, portal_directives_1, tab_label_1, tab_content_1, tab_label_wrapper_1, ink_bar_1;
    var nextId, MdTabGroup, MD_TAB_GROUP_DIRECTIVES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (portal_directives_1_1) {
                portal_directives_1 = portal_directives_1_1;
            },
            function (tab_label_1_1) {
                tab_label_1 = tab_label_1_1;
            },
            function (tab_content_1_1) {
                tab_content_1 = tab_content_1_1;
            },
            function (tab_label_wrapper_1_1) {
                tab_label_wrapper_1 = tab_label_wrapper_1_1;
            },
            function (ink_bar_1_1) {
                ink_bar_1 = ink_bar_1_1;
            }],
        execute: function() {
            /** Used to generate unique ID's for each tab component */
            nextId = 0;
            /**
             * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
             * animated ink-bar, keyboard navigation, and screen reader.
             * See: https://www.google.com/design/spec/components/tabs.html
             */
            MdTabGroup = (function () {
                function MdTabGroup(_zone) {
                    this._zone = _zone;
                    this.selectedIndex = 0;
                    this._focusIndex = 0;
                    this._groupId = nextId++;
                }
                /**
                 * Waits one frame for the view to update, then upates the ink bar
                 * Note: This must be run outside of the zone or it will create an infinite change detection loop
                 * @internal
                 */
                MdTabGroup.prototype.ngAfterViewChecked = function () {
                    var _this = this;
                    this._zone.runOutsideAngular(function () {
                        window.requestAnimationFrame(function () {
                            _this._updateInkBar();
                        });
                    });
                };
                /** Tells the ink-bar to align itself to the current label wrapper */
                MdTabGroup.prototype._updateInkBar = function () {
                    this._inkBar.toArray()[0].alignToElement(this._currentLabelWrapper);
                };
                Object.defineProperty(MdTabGroup.prototype, "_currentLabelWrapper", {
                    /**
                     * Reference to the current label wrapper; defaults to null for initial render before the
                     * ViewChildren references are ready.
                     */
                    get: function () {
                        return this._labelWrappers
                            ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
                            : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdTabGroup.prototype, "focusIndex", {
                    /** Tracks which element has focus; used for keyboard navigation */
                    get: function () {
                        return this._focusIndex;
                    },
                    /** When the focus index is set, we must manually send focus to the correct label */
                    set: function (value) {
                        this._focusIndex = value;
                        if (this._labelWrappers && this._labelWrappers.length) {
                            this._labelWrappers.toArray()[value].focus();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns a unique id for each tab label element
                 * @internal
                 */
                MdTabGroup.prototype.getTabLabelId = function (i) {
                    return "md-tab-label-" + this._groupId + "-" + i;
                };
                /**
                 * Returns a unique id for each tab content element
                 * @internal
                 */
                MdTabGroup.prototype.getTabContentId = function (i) {
                    return "md-tab-content-" + this._groupId + "-" + i;
                };
                /** Increment the focus index by 1; prevent going over the number of tabs */
                MdTabGroup.prototype.focusNextTab = function () {
                    if (this._labelWrappers && this.focusIndex < this._labelWrappers.length - 1) {
                        this.focusIndex++;
                    }
                };
                /** Decrement the focus index by 1; prevent going below 0 */
                MdTabGroup.prototype.focusPreviousTab = function () {
                    if (this.focusIndex > 0) {
                        this.focusIndex--;
                    }
                };
                __decorate([
                    core_3.ContentChildren(tab_label_1.MdTabLabel), 
                    __metadata('design:type', core_2.QueryList)
                ], MdTabGroup.prototype, "labels", void 0);
                __decorate([
                    core_3.ContentChildren(tab_content_1.MdTabContent), 
                    __metadata('design:type', core_2.QueryList)
                ], MdTabGroup.prototype, "contents", void 0);
                __decorate([
                    core_1.ViewChildren(tab_label_wrapper_1.MdTabLabelWrapper), 
                    __metadata('design:type', core_2.QueryList)
                ], MdTabGroup.prototype, "_labelWrappers", void 0);
                __decorate([
                    core_1.ViewChildren(ink_bar_1.MdInkBar), 
                    __metadata('design:type', core_2.QueryList)
                ], MdTabGroup.prototype, "_inkBar", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MdTabGroup.prototype, "selectedIndex", void 0);
                MdTabGroup = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'md-tab-group',
                        templateUrl: 'tab-group.html',
                        styleUrls: ['tab-group.css'],
                        directives: [portal_directives_1.PortalHostDirective, tab_label_wrapper_1.MdTabLabelWrapper, ink_bar_1.MdInkBar],
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], MdTabGroup);
                return MdTabGroup;
            }());
            exports_1("MdTabGroup", MdTabGroup);
            exports_1("MD_TAB_GROUP_DIRECTIVES", MD_TAB_GROUP_DIRECTIVES = [MdTabGroup, tab_label_1.MdTabLabel, tab_content_1.MdTabContent]);
        }
    }
});
//# sourceMappingURL=tab-group.js.map