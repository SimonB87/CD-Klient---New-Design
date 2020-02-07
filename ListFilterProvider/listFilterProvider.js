var sffw;
(function (sffw) {
    var ListFilterProvider = /** @class */ (function () {
        function ListFilterProvider(LightContext, dc, args) {
            this.filterProviderName = args.name;
            this.itemsCollection = ko.observableArray([]);
        }
        ListFilterProvider.prototype.fillFromJson = function (args) {
            var data;
            try {
                data = JSON.parse(args.dataAsJson);
                var dataArray = _.find(this.itemsCollection(), function (item) {
                    return item.colName === args.columnName;
                });
                if (dataArray == null || typeof dataArray === 'undefined') {
                    var newDataArray = { colName: args.columnName, filterData: ko.observableArray(_.each(data, function (item) {
                            _.assign(item, item.hasFocus = ko.observable());
                        })) };
                    this.itemsCollection.push(newDataArray);
                }
                else {
                    dataArray.filterData(_.each(data, function (item) {
                        _.assign(item, item.hasFocus = ko.observable());
                    }));
                }
            }
            catch (err) {
                throw new Error("Failed to fill filter data " + this.filterProviderName + " from JSON.\n" + err);
            }
        };
        ListFilterProvider.prototype.getEnumFilterData = function (args) {
            if (args.columnName != null && args.columnName !== '') {
                var dataArray = _.find(this.itemsCollection(), function (item) {
                    return item.colName === args.columnName;
                });
                if (dataArray == null || typeof dataArray === 'undefined') {
                    var newDataArray = { colName: args.columnName, filterData: ko.observableArray([{ text: '', value: '', hasFocus: ko.observable() }]) };
                    this.itemsCollection.push(newDataArray);
                    return newDataArray.filterData;
                }
                else {
                    return dataArray.filterData;
                }
            }
            else {
                return null;
            }
        };
        return ListFilterProvider;
    }());
    sffw.ListFilterProvider = ListFilterProvider;
})(sffw || (sffw = {}));
if (typeof define !== 'undefined') {
    define(['runtime/data/LightContext'], function (LightContext) {
        return function (dc, args) {
            return new sffw.ListFilterProvider(LightContext.default, dc, args);
        };
    });
}
