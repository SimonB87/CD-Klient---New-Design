var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var busyIndicator;
        (function (busyIndicator) {
            var BusyIndicatorModel = /** @class */ (function () {
                function BusyIndicatorModel(params, componentInfo) {
                    this.subscriptions = [];
                    this.dataContext = params.$parentData;
                    this.isVisible = params.IsVisible;
                    this.subscriptions.push(this.isVisible.subscribe(this.onVisibilityChange, this));
                    if (_.isNull(params.LoadingImageSource) || _.isUndefined(params.LoadingImageSource)) {
                        this.loadingImageSource = '';
                    }
                    else {
                        this.loadingImageSource = params.LoadingImageSource;
                    }
                    this.statusText = ko.observable('');
                    if (_.isNull(params.StatusText) || _.isUndefined(params.StatusText)) {
                        var defaultStatusText = this.dataContext.$localize('BusyIndicator$$loadingPleaseWait');
                        this.statusText(defaultStatusText);
                    }
                    else {
                        if (_.isFunction(params.StatusText)) {
                            this.statusText = params.StatusText;
                        }
                        else {
                            this.statusText(params.StatusText);
                        }
                    }
                    if (_.isNull(params.IconCssClass) || _.isUndefined(params.IconCssClass)) {
                        this.iconCssClass = 'fa fa-spinner fa-spin';
                    }
                    else {
                        this.iconCssClass = params.IconCssClass;
                    }
                }
                BusyIndicatorModel.prototype.onVisibilityChange = function (newValue) {
                    if (newValue === true) {
                        sffw.safeWriteToAriaLiveRegion(ko.unwrap(this.statusText));
                    }
                    else {
                        var loadingFinishedText = this.dataContext.$localize('BusyIndicator$$loadingIsCompleted');
                        sffw.safeWriteToAriaLiveRegion(loadingFinishedText);
                    }
                };
                BusyIndicatorModel.prototype.dispose = function () {
                    _.each(this.subscriptions, function (sub) {
                        sub.dispose();
                    });
                };
                return BusyIndicatorModel;
            }());
            busyIndicator.BusyIndicatorModel = BusyIndicatorModel;
        })(busyIndicator = components.busyIndicator || (components.busyIndicator = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
var customsExt;
(function (customsExt) {
    var components;
    (function (components) {
        var busyIndicator;
        (function (busyIndicator) {
            'use strict';
            var handlers = ko.bindingHandlers;
            handlers.fadeVisible = {
                init: function (element, valueAccessor) {
                    var value = valueAccessor();
                    $(element).toggle(ko.unwrap(value));
                },
                update: function (element, valueAccessor) {
                    var value = valueAccessor();
                    if (ko.unwrap(value)) {
                        $(element).fadeIn('fast');
                    }
                    else {
                        $(element).fadeOut('fast');
                    }
                }
            };
        })(busyIndicator = components.busyIndicator || (components.busyIndicator = {}));
    })(components = customsExt.components || (customsExt.components = {}));
})(customsExt || (customsExt = {}));
var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var busyIndicator;
        (function (busyIndicator) {
            var inContent;
            (function (inContent) {
                var BusyIndicatorModel = /** @class */ (function () {
                    function BusyIndicatorModel(params, componentInfo) {
                        this.subscriptions = [];
                        this.ctx = params.$parentData;
                        if (ko.isObservable(params.isLoading)) {
                            this.isLoading = params.isLoading;
                        }
                        else {
                            this.isLoading = ko.observable(params.isLoading);
                        }
                        this.subscriptions.push(this.isLoading.subscribe(this.onIsLoadingChange, this));
                        if (_.isNull(params.loadingImageSource) || _.isUndefined(params.loadingImageSource)) {
                            this.loadingImageSource = '';
                        }
                        else {
                            this.loadingImageSource = params.loadingImageSource;
                        }
                        if (_.isNull(params.iconCssClass) || _.isUndefined(params.iconCssClass)) {
                            this.iconCssClass = 'fa fa-spinner fa-spin';
                        }
                        else {
                            this.iconCssClass = params.iconCssClass;
                        }
                    }
                    BusyIndicatorModel.prototype.onIsLoadingChange = function (newValue) {
                        if (newValue === true) {
                            var loadingStartText = this.ctx.$localize('BusyIndicator$$loadingPleaseWait');
                            sffw.safeWriteToAriaLiveRegion(loadingStartText);
                        }
                        else {
                            var loadingFinishedText = this.ctx.$localize('BusyIndicator$$loadingIsCompleted');
                            sffw.safeWriteToAriaLiveRegion(loadingFinishedText);
                        }
                    };
                    BusyIndicatorModel.prototype.dispose = function () {
                        _.each(this.subscriptions, function (sub) {
                            sub.dispose();
                        });
                    };
                    return BusyIndicatorModel;
                }());
                inContent.BusyIndicatorModel = BusyIndicatorModel;
            })(inContent = busyIndicator.inContent || (busyIndicator.inContent = {}));
        })(busyIndicator = components.busyIndicator || (components.busyIndicator = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
var sffw;
(function (sffw) {
    var components;
    (function (components) {
        var busyIndicator;
        (function (busyIndicator) {
            if (ko && !ko.components.isRegistered('busy-indicator')) {
                ko.components.register('busy-indicator', {
                    viewModel: {
                        createViewModel: function (params, componentInfo) { return new sffw.components.busyIndicator.BusyIndicatorModel(params, componentInfo); }
                    },
                    template: "<div data-bind=\"fadeVisible: isVisible\" class=\"sffw-busy-indicator\">\n                            <div class=\"sffw-busy-indicator-content-body\">\n                                <div class=\"sffw-busy-indicator-loadingimage\">\n                                    <img data-bind=\"visible: loadingImageSource != '', attr: { 'src': loadingImageSource }\">\n                                    <i data-bind=\"visible: loadingImageSource == '', css: iconCssClass\"></i>\n                                </div>\n                                <div class=\"sffw-busy-indicator-statustext\">\n                                    <span data-bind=\"text: statusText\"></span>\n                                </div>\n                            </div>\n                        </div>"
                });
            }
            if (ko && !ko.components.isRegistered('incontent-busy-indicator')) {
                ko.components.register('incontent-busy-indicator', {
                    viewModel: {
                        createViewModel: function (params, componentInfo) { return new sffw.components.busyIndicator.inContent.BusyIndicatorModel(params, componentInfo); }
                    },
                    template: "<div class=\"sffw-incontent-wrapper\">\n                            <div data-bind=\"visible: isLoading\" class=\"sffw-incontent-busy-indicator\">\n                                <div class=\"sffw-busy-indicator-loadingimage\">\n                                    <img data-bind=\"visible: loadingImageSource != '', attr: { 'src': loadingImageSource }\">\n                                    <i data-bind=\"visible: loadingImageSource == '', css: iconCssClass\"></i>\n                                </div>\n                            </div>\n                            <!-- ko template: { nodes: $componentTemplateNodes, data: ctx } --><!-- /ko -->\n                        </div>"
                });
            }
        })(busyIndicator = components.busyIndicator || (components.busyIndicator = {}));
    })(components = sffw.components || (sffw.components = {}));
})(sffw || (sffw = {}));
var sffw;
(function (sffw) {
    function safeWriteToAriaLiveRegion(message) {
        if (message && window.sf.accessibility && window.sf.accessibility.ariaLiveRegion) {
            window.sf.accessibility.ariaLiveRegion.append(message);
        }
    }
    sffw.safeWriteToAriaLiveRegion = safeWriteToAriaLiveRegion;
})(sffw || (sffw = {}));
