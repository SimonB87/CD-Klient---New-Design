(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
	'use strict';
	var _ = (typeof window !== 'undefined' ? window._ : require('lodash'));

	return {
		generate: function (componentGen, def, componentWrapperTree, isDesignTime) {
		    var selectionTable, designLabel, paramsParts,
		        processBinding = componentGen.processBinding,
				generateComponentTree = componentGen.generateComponentTree,
				Columns;

			if (isDesignTime) {
				designLabel = new componentGen.Tree('span');
				designLabel.content.push({ text: 'selectionTable' + def.name });
				componentWrapperTree.content.push(designLabel);
			} else {
				selectionTable = new componentGen.Tree('sffw-selection-table');

                paramsParts = [];

				if(def.Data && def.Data.Binding) {
					paramsParts.push('Data: ' + processBinding(def.Data.Binding, null));
				}

				if (def.Index) {
					if (def.Index.Binding) {
						paramsParts.push('Index: '+ componentGen.processBinding(def.Index.Binding));
					} else {
						paramsParts.push('Index: ' + def.Index);
					}
				}

				if (typeof def.IsVisible != 'undefined') {
					if (def.Visible.Binding) {
						paramsParts.push('IsVisible: '+ componentGen.processBinding(def.IsVisible.Binding));
					} else {
						paramsParts.push('IsVisible: ' + def.IsVisible);
					}
				} else {
					paramsParts.push('IsVisible: ' + true);
				}

				if (typeof def.ShowSelector != 'undefined') {
					if (def.ShowSelector.Binding) {
						paramsParts.push('ShowSelector: '+ componentGen.processBinding(def.ShowSelector.Binding));
					} else {
						paramsParts.push('ShowSelector: ' + def.ShowSelector);
					}
				} else {
					paramsParts.push('ShowSelector: ' + true);
				}

				if (def.SelectorClass) {
					paramsParts.push('SelectorClass: \'' + def.SelectorClass.replace(/\"/g, '&quot;') + '\'');
				} else {
					paramsParts.push('SelectorClass: \'fa fa-fw fa-lg fa-caret-right\'');
				}

				if (def.SelectorWidth) {
					paramsParts.push('SelectorWidth: \'' + def.SelectorWidth.replace(/\"/g, '&quot;') + '\'');
				} else {
					paramsParts.push('SelectorWidth: \'20px\'');
				}

				if (typeof def.IsScrollable != 'undefined') {
					if (def.IsScrollable.Binding) {
						paramsParts.push('IsScrollable: '+ componentGen.processBinding(def.IsScrollable.Binding));
					} else {
						paramsParts.push('IsScrollable: ' + def.IsScrollable);
					}
				} else {
					paramsParts.push('IsScrollable: ' + false);
				}

				if (def.MaxHeight) {
					paramsParts.push('MaxHeight: \'' + def.MaxHeight.replace(/\"/g, '&quot;') + '\'');
				} else {
					paramsParts.push('MaxHeight: \'200px\'');
				}

				if (typeof def.SelectionEnabled != 'undefined') {
					if (def.SelectionEnabled.Binding) {
						paramsParts.push('SelectionEnabled: '+ componentGen.processBinding(def.SelectionEnabled.Binding));
					} else {
						paramsParts.push('SelectionEnabled: ' + def.SelectionEnabled);
					}
				} else {
					paramsParts.push('SelectionEnabled: ' + true);
				}

                if (def.Columns) {
					Columns = _.map(def.Columns, function (c) {
						var resultParts = [];

						if (c.Caption) {
							if (c.Caption.Binding) {
                                resultParts.push('Caption: '+ componentGen.processBinding(c.Caption.Binding));
							} else {
								resultParts.push('Caption: \'' + c.Caption.replace(/\"/g, '&quot;') + '\'');
							}
						}

						if (typeof c.IsVisible != 'undefined') {
							if (c.IsVisible.Binding) {
                                resultParts.push('IsVisible: '+ componentGen.processBinding(c.IsVisible.Binding));
							} else {
								resultParts.push('IsVisible: ' + c.IsVisible);
							}
						} else {
							resultParts.push('IsVisible: ' + true);
						}

						if (c.ColumnWidth) {
							resultParts.push('ColumnWidth: \'' + c.ColumnWidth + '\'');
						}

						if (c.Content) {
							selectionTable.content.push(generateComponentTree(c.Content, isDesignTime));
						}				
		
						return '{' + resultParts.join(', ') + '}';
					});

					paramsParts.push('Columns: [' + Columns.join(', ') + ']');
				}

				if (def.CssClass) {
					selectionTable.cssBinding = selectionTable.cssBinding || {};
					_.each(def.CssClass, function (c) {
						if (c.ClassName) {
							var condition;
							if (c.Condition === false) {
								condition =  c.Condition;
							} else if (c.Condition) {
								condition = c.Condition.Binding ? processBinding(c.Condition.Binding) : '\'' + c.Condition.replace(/\"/g, '&quot;') + '\'';
							} else {
								condition = true;
							}
	
							selectionTable.cssBinding[c.ClassName] = condition;
						}
					});
				}
					
				paramsParts.push('$parentData: $data');

				selectionTable.attributes.params = paramsParts.join(', ');

				if (def.OnRowClick) {
		            selectionTable.attributes.params += ', OnRowClick: ' + componentGen.processActionReference(def.OnRowClick);
		        }

				componentWrapperTree.content.push(selectionTable);
			}
		},
		gen: function (_a) {
			var cGen = _a.cGen,
				def = _a.def,
				componentWrapperTree = _a.componentWrapperTree, 
				isDesignTime = _a.isDesigntime, 
				containerEnabled = _a.containerEnabled;

		    var selectionTable, designLabel, paramsParts,
		        processBinding = cGen.processBinding,
				genComponentTree = cGen.genComponentTree,
				Columns;

			if (isDesignTime) {
				designLabel = new cGen.Tree('span');
				designLabel.content.push({ text: 'selectionTable' + def.name });
				componentWrapperTree.content.push(designLabel);
			} else {
				selectionTable = new cGen.Tree('sffw-selection-table');

                paramsParts = [];

				if(def.Data && def.Data.Binding) {
					paramsParts.push('Data: ' + processBinding(def.Data.Binding, null));
				}

				if (def.Index) {
					if (def.Index.Binding) {
						paramsParts.push('Index: '+ cGen.processBinding(def.Index.Binding));
					} else {
						paramsParts.push('Index: ' + def.Index);
					}
				}

				if (typeof def.IsVisible != 'undefined') {
					if (def.Visible.Binding) {
						paramsParts.push('IsVisible: '+ cGen.processBinding(def.IsVisible.Binding));
					} else {
						paramsParts.push('IsVisible: ' + def.IsVisible);
					}
				} else {
					paramsParts.push('IsVisible: ' + true);
				}

				if (typeof def.ShowSelector != 'undefined') {
					if (def.ShowSelector.Binding) {
						paramsParts.push('ShowSelector: '+ cGen.processBinding(def.ShowSelector.Binding));
					} else {
						paramsParts.push('ShowSelector: ' + def.ShowSelector);
					}
				} else {
					paramsParts.push('ShowSelector: ' + true);
				}

				if (def.SelectorClass) {
					paramsParts.push('SelectorClass: \'' + def.SelectorClass.replace(/\"/g, '&quot;') + '\'');
				} else {
					paramsParts.push('SelectorClass: \'fa fa-fw fa-lg fa-caret-right\'');
				}

				if (def.SelectorWidth) {
					paramsParts.push('SelectorWidth: \'' + def.SelectorWidth.replace(/\"/g, '&quot;') + '\'');
				} else {
					paramsParts.push('SelectorWidth: \'20px\'');
				}

				if (typeof def.IsScrollable != 'undefined') {
					if (def.IsScrollable.Binding) {
						paramsParts.push('IsScrollable: '+ cGen.processBinding(def.IsScrollable.Binding));
					} else {
						paramsParts.push('IsScrollable: ' + def.IsScrollable);
					}
				} else {
					paramsParts.push('IsScrollable: ' + false);
				}

				if (def.MaxHeight) {
					paramsParts.push('MaxHeight: \'' + def.MaxHeight.replace(/\"/g, '&quot;') + '\'');
				} else {
					paramsParts.push('MaxHeight: \'200px\'');
				}

				if (typeof def.SelectionEnabled != 'undefined') {
					if (def.SelectionEnabled.Binding) {
						paramsParts.push('SelectionEnabled: '+ cGen.processBinding(def.SelectionEnabled.Binding));
					} else {
						paramsParts.push('SelectionEnabled: ' + def.SelectionEnabled);
					}
				} else {
					paramsParts.push('SelectionEnabled: ' + true);
				}

                if (def.Columns) {
					var childEnabled = cGen.BindingFactory.addParentToFormPropertyBindings(containerEnabled);
					Columns = _.map(def.Columns, function (c) {
						var resultParts = [];

						if (c.Caption) {
							if (c.Caption.Binding) {
                                resultParts.push('Caption: '+ cGen.processBinding(c.Caption.Binding));
							} else {
								resultParts.push('Caption: \'' + c.Caption.replace(/\"/g, '&quot;') + '\'');
							}
						}

						if (typeof c.IsVisible != 'undefined') {
							if (c.IsVisible.Binding) {
                                resultParts.push('IsVisible: '+ cGen.processBinding(c.IsVisible.Binding));
							} else {
								resultParts.push('IsVisible: ' + c.IsVisible);
							}
						} else {
							resultParts.push('IsVisible: ' + true);
						}

						if (c.ColumnWidth) {
							resultParts.push('ColumnWidth: \'' + c.ColumnWidth + '\'');
						}

						if (c.Content) {
							selectionTable.content.push(genComponentTree({ def: c.Content, isDesignTime: isDesignTime, containerEnabled: childEnabled }));
						}				
		
						return '{' + resultParts.join(', ') + '}';
					});

					paramsParts.push('Columns: [' + Columns.join(', ') + ']');
				}

				if (def.CssClass) {
					selectionTable.cssBinding = selectionTable.cssBinding || {};
					_.each(def.CssClass, function (c) {
						if (c.ClassName) {
							var condition;
							if (c.Condition === false) {
								condition =  c.Condition;
							} else if (c.Condition) {
								condition = c.Condition.Binding ? processBinding(c.Condition.Binding) : '\'' + c.Condition.replace(/\"/g, '&quot;') + '\'';
							} else {
								condition = true;
							}
	
							selectionTable.cssBinding[c.ClassName] = condition;
						}
					});
				}
					
				paramsParts.push('$parentData: $data');

				selectionTable.attributes.params = paramsParts.join(', ');

				if (def.OnRowClick) {
		            selectionTable.attributes.params += ', OnRowClick: ' + cGen.processActionReference(def.OnRowClick);
		        }

				componentWrapperTree.content.push(selectionTable);
			}
		}
	};
});