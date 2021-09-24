var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var selectionTable;
        (function (selectionTable) {
            var SelectionTableColumnModel = /** @class */ (function () {
                function SelectionTableColumnModel() {
                }
                return SelectionTableColumnModel;
            }());
            selectionTable.SelectionTableColumnModel = SelectionTableColumnModel;
        })(selectionTable = components.selectionTable || (components.selectionTable = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var selectionTable;
        (function (selectionTable) {
            var SelectionTableModel = /** @class */ (function () {
                function SelectionTableModel(params, componentInfo) {
                    var _this = this;
                    this.isScrollable = ko.observable(false);
                    this.columns = [];
                    this.onRowClick = function (_data, event) {
                        _this.index(event.currentTarget.rowIndex);
                        return true;
                    };
                    if (params.Data) {
                        this.items = params.Data.$items;
                    }
                    this.index = params.Index || ko.observable();
                    // if index is not preset to some number, we set it to 1
                    // prevzato z kodu PagingRepeater ale delat to bordel pri nastaveni
                    // indexu, protoze si SF mysli ze je to UserChange
                    /*if (!_.isFinite(this.index())) {
                        this.index(1);
                    }*/
                    this.isVisible = params.IsVisible;
                    this.showSelector = params.ShowSelector;
                    this.selectorClass = params.SelectorClass;
                    this.selectorWidth = params.SelectorWidth;
                    // bacause binding style via $data.isScrollable ? 'auto' : 'unset' 
                    // can't handle both bool and observable, unlike setting css
                    // via $data.isScrollable, which works with both without any problem... grrr
                    // hence we need to convert whatever to observable here and use 
                    // $data.isScrollable() in style binding
                    if (_.isFunction(params.IsScrollable)) {
                        this.isScrollable = params.IsScrollable;
                    }
                    else {
                        this.isScrollable(params.IsScrollable);
                    }
                    this.maxHeight = params.MaxHeight;
                    this.columns = params.Columns;
                }
                return SelectionTableModel;
            }());
            selectionTable.SelectionTableModel = SelectionTableModel;
        })(selectionTable = components.selectionTable || (components.selectionTable = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var selectionTable;
        (function (selectionTable) {
            if (ko && !ko.components.isRegistered('sffw-selection-table')) {
                ko.components.register('sffw-selection-table', {
                    viewModel: {
                        createViewModel: function (params, componentInfo) { return new sffw.components.selectionTable.SelectionTableModel(params, componentInfo); }
                    },
                    template: "\n<div class=\"sffw-selectiontable-scroll\" data-bind=\"style: { 'max-height': $data.isScrollable() ? $data.maxHeight : '', 'overflow-y': $data.isScrollable() ? 'auto' : 'unset' }\">\n    <table class=\"sffw-selectiontable alternate-rows hover-highlight\" data-bind=\"visible: $data.isVisible\">\n        <thead>\n            <tr class=\"selectiontable-header-row\">\n                <!-- ko if: $data.showSelector -->\n                <th class=\"selectiontable-column selector container\" data-bind=\"style: { width: $data.selectorWidth }, css: { 'sticky-table-header': $data.isScrollable }\"></th>\n                <!-- /ko -->\n                <!-- ko foreach: columns -->\n                <th class=\"selectiontable-column container\" data-bind=\"style: { width: $data.ColumnWidth }, visible: $data.IsVisible, css: { 'sticky-table-header': $parent.isScrollable }\">\n                    <span data-bind=\"text: $data.Caption\"></span>\n                </th>\n                <!-- /ko -->\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: items -->\n            <tr class=\"selectiontable-row\" data-bind=\"click: $parent.onRowClick, css: { selected: $parent.index() == $index() + 1 }\">\n                <!-- ko if: $parent.showSelector -->\n                <td class=\"selector container\">\n                    <!-- ko if: $parent.index() == $index() + 1 -->\n                    <span data-bind=\"class: $parent.selectorClass\"></span>\n                    <!-- /ko -->\n                </td>\n                <!-- /ko -->\n                <!-- ko foreach: $parent.columns -->\n                <td class=\"container\" data-bind=\"visible: $data.IsVisible\">\n                    <!-- ko template: { nodes: [$componentTemplateNodes[$index()]], data: $parent } --><!-- /ko -->\n                </td>\n                <!-- /ko -->\n            </tr>\n            <!-- /ko -->\n        </tbody>\n    </table>\n</div>"
                });
            }
        })(selectionTable = components.selectionTable || (components.selectionTable = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
