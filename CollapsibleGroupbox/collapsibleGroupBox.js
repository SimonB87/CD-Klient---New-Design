var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var collapsibleGroupBox;
        (function (collapsibleGroupBox) {
            if (ko && !ko.components.isRegistered('collapsible-group-box')) {
                ko.components.register('collapsible-group-box', {
                    viewModel: {
                        createViewModel: function (params, componentInfo) { return new sffw.components.collapsibleGroupBox.CollapsibleGroupBoxModel(params, componentInfo); }
                    },
                    template: "\n            <div data-bind=\"visible: isVisible, css: cssClass\">\n                <fieldset data-bind=\"css:{ 'cgb-collapsed' : !isCollapsed() }\">\n                    <legend data-bind=\"click: onToggleCollapseClick\"><span data-bind=\"css: (isCollapsed == true || !isCollapsed() ? collapsedIcClass : nonCollapsedIcClass)\"></span><span data-bind=\"text: caption\"></span></legend>\n                    <div data-bind=\"visible: isCollapsed\">\n                        <!-- ko template: { nodes: $componentTemplateNodes, data: ctx } --><!-- /ko -->\n                    </div>\n                </fieldset>\n            </div>"
                });
            }
        })(collapsibleGroupBox = components.collapsibleGroupBox || (components.collapsibleGroupBox = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var collapsibleGroupBox;
        (function (collapsibleGroupBox) {
            var CollapsibleGroupBoxModel = /** @class */ (function () {
                function CollapsibleGroupBoxModel(params, componentInfo) {
                    this.collapsedIcClass = ko.observable('fa fa-caret-up');
                    this.nonCollapsedIcClass = ko.observable('fa fa-caret-down');
                    this.cssClass = ko.observable('cgb cgb-default');
                    this.caption = params.caption;
                    this.collapseActionHandler = params.OnCollapseClick;
                    if (_.isUndefined(params.isVisible)) {
                        this.isVisible = ko.observable(false);
                    }
                    else {
                        this.isVisible = params.isVisible;
                    }
                    if (typeof params.collapsedIconClass !== 'undefined' && params.collapsedIconClass !== null && params.collapsedIconClass !== '') {
                        this.collapsedIcClass(params.collapsedIconClass);
                    }
                    if (typeof params.nonCollapsedIconClass !== 'undefined' && params.nonCollapsedIconClass !== null && params.nonCollapsedIconClass !== '') {
                        this.nonCollapsedIcClass(params.nonCollapsedIconClass);
                    }
                    if (params.cssClass && params.cssClass.length > 0) {
                        this.cssClass(params.cssClass);
                    }
                    this.isCollapsed = params.isCollapsed || ko.observable(false);
                    this.ctx = params.$parentData;
                    this.onToggleCollapseClick = this.toggleCollapse;
                }
                CollapsibleGroupBoxModel.prototype.toggleCollapse = function (data, event) {
                    data.isCollapsed(!data.isCollapsed());
                    if (this.collapseActionHandler) {
                        this.collapseActionHandler();
                    }
                };
                return CollapsibleGroupBoxModel;
            }());
            collapsibleGroupBox.CollapsibleGroupBoxModel = CollapsibleGroupBoxModel;
        })(collapsibleGroupBox = components.collapsibleGroupBox || (components.collapsibleGroupBox = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
