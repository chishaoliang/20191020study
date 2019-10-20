!(function(e, t) {
     let XzpTreeselect = t();
		 
	Xzp.component('treeselect', XzpTreeselect.Treeselect);
	
})(window, (function() {
    return (function(e) {
        var t = {};
        function n(i) {
            if (t[i]) return t[i].exports;
            var s = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(s.exports, s, s.exports, n),
            s.l = !0,
            s.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        },
        n.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        n.n = function(e) {
            var t = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return n.d(t, "a", t),
            t
        },
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        n.p = "/",
        n(n.s = 1)
    })([(function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = t.length,
            i = e.length;
            if (i > n) return ! 1;
            if (i === n) return e === t;
            e: for (var s = 0,
            o = 0; s < i; s++) {
                for (var r = e.charCodeAt(s); o < n;) if (t.charCodeAt(o++) === r) continue e;
                return ! 1
            }
            return ! 0
        }
    }), (function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0),
        s = n.n(i),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        };
        var r = c,
        a = c;
        function l(e) {
            return function(t) {
                if ("mousedown" === t.type && 0 === t.button) {
                    for (var n = arguments.length,
                    i = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
                    e.call.apply(e, [this, t].concat(i))
                }
            }
        }
        function c() {}
        function u(e) {
            return null != e && ("object" === (void 0 === e ? "undefined": o(e)) || "function" == typeof e) && "function" == typeof e.then
        }
        function d() {
            return Object.create(null)
        }
        function h(e) {
            return null != e && "object" === (void 0 === e ? "undefined": o(e)) && Object.getPrototypeOf(e) === Object.prototype
        }
        function p(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function f(e) {
            for (var t = arguments.length,
            n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            for (var s = 0; s < n.length; s++) {
                var o = n[s];
                for (var r in o) p(o, r) && (e[r] = o[r])
            }
            return e
        }
        function v(e, t) {
            if (null == t);
            else if (h(t)) for (var n = Object.keys(t), i = 0, s = n.length; i < s; i++) o = e,
            r = n[i],
            h(l = t[n[i]]) ? (o[r] || (o[r] = {}), v(o[r], l)) : o[r] = l;
            else a();
            var o, r, l;
            return e
        }
        function g(e) {
            return e[e.length - 1]
        }
        function _(e, t, n) {
            for (var i = 0,
            s = e.length; i < s; i++) if (t.call(n, e[i], i, e)) return e[i]
        }
        var m = 8,
        O = 13,
        b = 27,
        N = 35,
        y = 36,
        C = 37,
        S = 38,
        E = 39,
        x = 40,
        w = 46,
        D = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        L = (function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                    i = !0,
                    s = !1,
                    o = void 0;
                    try {
                        for (var r, a = e[Symbol.iterator](); ! (i = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                    } catch(e) {
                        s = !0,
                        o = e
                    } finally {
                        try { ! i && a.
                            return && a.
                            return ()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        })();
        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function M(e) {
            if (Array.isArray(e)) {
                for (var t = 0,
                n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function A(e, t) {
            for (var n = 0;;) {
                if (e.level < n) return - 1;
                if (t.level < n) return 1;
                if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];
                n++
            }
        }
        var k, B = {
            provide: function() {
                return {
                    instance: this,
                    UNCHECKED: 0,
                    INDETERMINATE: 1,
                    CHECKED: 2
                }
            },
            props: {
                alwaysOpen: {
                    type: Boolean,
                default:
                    !1
                },
                autofocus: {
                    type: Boolean,
                default:
                    !1
                },
                autoFocus: {
                    type: Boolean,
                default:
                    !1
                },
                autoLoadRootOptions: {
                    type: Boolean,
                default:
                    !0
                },
                backspaceRemoves: {
                    type: Boolean,
                default:
                    !0
                },
                beforeClearAll: {
                    type: Function,
                default:
                    (k = !0,
                    function() {
                        return k
                    })
                },
                branchNodesFirst: {
                    type: Boolean,
                default:
                    !1
                },
                clearable: {
                    type: Boolean,
                default:
                    !0
                },
                clearAllText: {
                    type: String,
                default:
                    "Clear all"
                },
                clearOnSelect: {
                    type: Boolean,
                default:
                    !1
                },
                clearValueText: {
                    type: String,
                default:
                    "Clear value"
                },
                closeOnSelect: {
                    type: Boolean,
                default:
                    !0
                },
                defaultExpandLevel: {
                    type: Number,
                default:
                    0
                },
                deleteRemoves: {
                    type: Boolean,
                default:
                    !0
                },
                delimiter: {
                    type: String,
                default:
                    ","
                },
                disableBranchNodes: {
                    type: Boolean,
                default:
                    !1
                },
                disabled: {
                    type: Boolean,
                default:
                    !1
                },
                disableFuzzyMatching: {
                    type: Boolean,
                default:
                    !1
                },
                searchNested: {
                    type: Boolean,
                default:
                    !1
                },
                escapeClearsValue: {
                    type: Boolean,
                default:
                    !0
                },
                flat: {
                    type: Boolean,
                default:
                    !1
                },
                id: {
                default:
                    null
                },
                joinValues: {
                    type: Boolean,
                default:
                    !1
                },
                limit: {
                    type: Number,
                default:
                    1 / 0
                },
                limitText: {
                    type: Function,
                default:
                    function(e) {
                        return "and " + e + " more"
                    }
                },
                loading: {
                    type: Boolean,
                default:
                    !1
                },
                loadingText: {
                    type: String,
                default:
                    "Loading..."
                },
                loadOptions: {
                    type: Function
                },
                maxHeight: {
                    type: Number,
                default:
                    300
                },
                multiple: {
                    type: Boolean,
                default:
                    !1
                },
                name: {
                    type: String
                },
                noChildrenText: {
                    type: String,
                default:
                    "No sub-options."
                },
                noOptionsText: {
                    type: String,
                default:
                    "No options available."
                },
                noResultsText: {
                    type: String,
                default:
                    "No results found..."
                },
                normalizer: {
                    type: Function,
                default:
                    function(e) {
                        return e
                    }
                },
                openDirection: {
                    type: String,
                default:
                    "auto"
                },
                openOnClick: {
                    type: Boolean,
                default:
                    !0
                },
                openOnFocus: {
                    type: Boolean,
                default:
                    !1
                },
                options: {
                    type: Array
                },
                placeholder: {
                    type: String,
                default:
                    "Select..."
                },
                required: {
                    type: Boolean,
                default:
                    !1
                },
                retryText: {
                    type: String,
                default:
                    "Retry?"
                },
                retryTitle: {
                    type: String,
                default:
                    "Click to retry"
                },
                searchable: {
                    type: Boolean,
                default:
                    !0
                },
                showCount: {
                    type: Boolean,
                default:
                    !1
                },
                showCountOf: {
                    type: String,
                default:
                    "ALL_CHILDREN",
                    validator: function(e) {
                        return - 1 !== ["ALL_CHILDREN", "ALL_DESCENDANTS", "LEAF_CHILDREN", "LEAF_DESCENDANTS"].indexOf(e)
                    }
                },
                showCountOnSearch: null,
                sortValueBy: {
                    type: String,
                default:
                    "ORDER_SELECTED",
                    validator: function(e) {
                        return - 1 !== ["ORDER_SELECTED", "LEVEL", "INDEX"].indexOf(e)
                    }
                },
                tabIndex: {
                    type: Number,
                default:
                    0
                },
                value: null,
                valueConsistsOf: {
                    type: String,
                default:
                    "BRANCH_PRIORITY",
                    validator: function(e) {
                        return - 1 !== ["ALL", "BRANCH_PRIORITY", "LEAF_PRIORITY", "ALL_WITH_INDETERMINATE"].indexOf(e)
                    }
                },
                valueFormat: {
                    type: String,
                default:
                    "id"
                }
            },
            data: function() {
                return {
                    normalizedOptions: null,
                    selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
                    nodeCheckedStateMap: d(),
                    nodeMap: d(),
                    selectedNodeMap: d(),
                    isFocused: !1,
                    isOpen: !1,
                    rootOptionsLoaded: !1,
                    loadingRootOptions: !1,
                    loadingRootOptionsError: "",
                    noSearchResults: !0,
                    searchingCount: d(),
                    searching: !1,
                    searchQuery: "",
                    current: null,
                    lastScrollPosition: 0,
                    optimizedHeight: 0,
                    prefferedOpenDirection: "below"
                }
            },
            computed: {
                selectedNodes: function() {
                    return this.selectedNodeIds.map(this.getNode)
                },
                internalValue: function() {
                    var e = this,
                    t = void 0;
                    return this.single || this.flat || "ALL" === this.valueConsistsOf ? t = this.selectedNodeIds.slice() : "BRANCH_PRIORITY" === this.valueConsistsOf ? t = this.selectedNodeIds.filter((function(t) {
                        var n = e.getNode(t);
                        return !! n.isRootNode || !e.isSelected(n.parentNode)
                    })) : "LEAF_PRIORITY" === this.valueConsistsOf ? t = this.selectedNodeIds.filter((function(t) {
                        var n = e.getNode(t);
                        return !! n.isLeaf || 0 === n.children.length
                    })) : "ALL_WITH_INDETERMINATE" === this.valueConsistsOf && (t = Object.keys(this.nodeCheckedStateMap).filter((function(t) {
                        var n = e.nodeCheckedStateMap[t];
                        return 2 === n || 1 === n
                    }))),
                    "LEVEL" === this.sortValueBy ? t.sort((function(t, n) {
                        return (function(e, t) {
                            return e.level !== t.level ? e.level - t.level: A(e, t)
                        })(e.getNode(t), e.getNode(n))
                    })) : "INDEX" === this.sortValueBy && t.sort((function(t, n) {
                        return A(e.getNode(t), e.getNode(n))
                    })),
                    t
                },
                hasValue: function() {
                    return this.internalValue.length > 0
                },
                hasUndisabledValue: function() {
                    return this.hasValue && this.internalValue.map(this.getNode).some((function(e) {
                        return ! e.isDisabled
                    }))
                },
                single: function() {
                    return ! this.multiple
                },
                visibleValue: function() {
                    return this.internalValue.map(this.getNode).slice(0, this.limit)
                },
                visibleOptionIds: function() {
                    var e = this,
                    t = [];
                    return this.traverseAllNodesByIndex((function(n) {
                        if ((!e.searching || n.isMatched || n.isBranch && n.hasMatchedChild) && t.push(n.id), n.isBranch && !e.shouldExpand(n)) return ! 1
                    })),
                    t
                },
                hasVisibleOptions: function() {
                    return !! this.rootOptionsLoaded && ( !! this.normalizedOptions.length && (!this.searching || this.normalizedOptions.some((function(e) {
                        return e.isMatched || e.isBranch && e.hasMatchedChild
                    }))))
                },
                hasExceededLimit: function() {
                    return this.internalValue.length > this.limit
                },
                shouldShowX: function() {
                    return this.clearable && !this.disabled && this.hasUndisabledValue
                },
                showCountOnSearchComputed: function() {
                    return "boolean" == typeof this.showCountOnSearch ? this.showCountOnSearch: this.showCount
                },
                hasBranchNodes: function() {
                    return this.normalizedOptions.some((function(e) {
                        return e.isBranch
                    }))
                },
                firstVisibleOption: function() {
                    return this.normalizedOptions.length ? this.searching ? _(this.normalizedOptions, (function(e) {
                        return e.isMatched || e.isBranch && e.hasMatchedChild
                    })) : this.normalizedOptions[0] : null
                }
            },
            watch: {
                alwaysOpen: function(e) {
                    e ? this.openMenu() : this.closeMenu()
                },
                disabled: function(e) {
                    e && this.isOpen && this.closeMenu(),
                    e || this.isOpen || !this.alwaysOpen || this.openMenu()
                },
                flat: function() {
                    this.initialize(this.options)
                },
                internalValue: function() {
                    this.$emit("input", this.getValue(), this.id)
                },
                multiple: function(e) {
                    e && this.buildNodeCheckedStateMap()
                },
                searchQuery: (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    n = void 0,
                    i = void 0,
                    s = void 0,
                    o = void 0;
                    function r() {
                        var a = Date.now() - o;
                        a < t && a >= 0 ? n = setTimeout(r, t - a) : (n = null, e.apply(s, i), s = i = null)
                    }
                    return function() {
                        s = this;
                        for (var e = arguments.length,
                        a = Array(e), l = 0; l < e; l++) a[l] = arguments[l];
                        i = a,
                        o = Date.now(),
                        n || (n = setTimeout(r, t))
                    }
                })((function() {
                    this.handleSearch(),
                    this.$emit("search-change", this.searchQuery, this.id)
                }), 200),
                value: function() {
                    var e = this.extractCheckedNodeIdsFromValue(); (function(e, t) {
                        if (e.length !== t.length) return ! 0;
                        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return ! 0;
                        return ! 1
                    })(e, this.internalValue) && (this.selectedNodeIds = e, this.completeSelectedNodeIdList(), this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap())
                }
            },
            methods: {
                verifyProps: function() {
                    var e = this;
                    r((function() {
                        return ! 1 === e.autofocus
                    }), (function() {
                        return "`autofocus` prop is deprecated. Use `autoFocus` instead."
                    })),
                    null != this.options || this.loadOptions || r((function() {
                        return ! 1
                    }), (function() {
                        return "Are you meant to dynamically load options? You need to use `loadOptions` prop."
                    }))
                },
                resetFlags: function() {
                    this._blurOnSelect = !1,
                    this._wasClickedOnValueItem = !1
                },
                initialize: function(e) {
                    if (Array.isArray(e)) {
                        var t = this.nodeMap;
                        this.nodeMap = d(),
                        this.keepDataOfSelectedNodes(t),
                        this.normalizedOptions = this.normalize(null, e, t),
                        this.completeSelectedNodeIdList(),
                        this.buildSelectedNodeMap(),
                        this.buildNodeCheckedStateMap(),
                        this.rootOptionsLoaded = !0
                    } else this.normalizedOptions = []
                },
                getValue: function() {
                    var e = this;
                    if ("id" === this.valueFormat) return this.multiple ? this.internalValue.slice() : this.internalValue[0];
                    var t = this.internalValue.map((function(t) {
                        return e.getNode(t).raw
                    }));
                    return this.multiple ? t: t[0]
                },
                getNode: function(e) {
                    return r((function() {
                        return null != e
                    }), (function() {
                        return "Invalid node id: " + e
                    })),
                    null == e ? null: e in this.nodeMap ? this.nodeMap[e] : this.createFallbackNode(e)
                },
                createFallbackNode: function(e) {
                    var t = this.extractNodeFromValue(e),
                    n = {
                        id: e,
                        label: this.enhancedNormalizer(t).label || e + " (unknown)",
                        ancestors: [],
                        parentNode: null,
                        isFallbackNode: !0,
                        isRootNode: !0,
                        isLeaf: !0,
                        isBranch: !1,
                        isDisabled: !1,
                        index: [ - 1],
                        level: 0,
                        raw: t
                    };
                    return this.$set(this.nodeMap, e, n),
                    n
                },
                extractCheckedNodeIdsFromValue: function() {
                    var e = this;
                    return null == this.value ? [] : "id" === this.valueFormat ? this.multiple ? this.value.slice() : [this.value] : (this.multiple ? this.value: [this.value]).map((function(t) {
                        return e.enhancedNormalizer(t)
                    })).map((function(e) {
                        return e.id
                    }))
                },
                extractNodeFromValue: function(e) {
                    var t = this,
                    n = {
                        id: e
                    };
                    return "id" === this.valueFormat ? n: _(this.multiple ? Array.isArray(this.value) ? this.value: [] : this.value ? [this.value] : [], (function(n) {
                        return n && t.enhancedNormalizer(n).id === e
                    })) || n
                },
                completeSelectedNodeIdList: function() {
                    var e = this,
                    t = this.selectedNodeIds.slice();
                    this.selectedNodeIds = [],
                    this.nodeCheckedStateMap = d(),
                    this.selectedNodeMap = d(),
                    t.forEach((function(t) { - 1 === e.selectedNodeIds.indexOf(t) && e._selectNode(e.getNode(t), {
                            ignoreDisabled: !0
                        })
                    }))
                },
                keepDataOfSelectedNodes: function(e) {
                    var t = this;
                    this.selectedNodeIds.forEach((function(n) {
                        if (e[n]) {
                            var i = f({},
                            e[n], {
                                isFallbackNode: !0
                            });
                            t.$set(t.nodeMap, n, i)
                        }
                    }))
                },
                isSelected: function(e) {
                    return ! 0 === this.selectedNodeMap[e.id]
                },
                checkIfBranchNode: function(e) {
                    r((function() {
                        return e && e.isBranch
                    }), (function() {
                        return "Expected a branch node, instead got: " + e
                    }))
                },
                stringifyValue: function(e) {
                    return "string" == typeof e ? e: null !== e && JSON.stringify(e) || ""
                },
                traverseDescendantsBFS: function(e, t) {
                    if (e.isBranch) for (var n = e.children.slice(); n.length;) {
                        var i = n[0];
                        i.isBranch && n.push.apply(n, M(i.children)),
                        t(i),
                        n.shift()
                    }
                },
                traverseDescendantsDFS: function(e, t) {
                    var n = this;
                    e.isBranch && e.children.forEach((function(e) {
                        n.traverseDescendantsDFS(e, t),
                        t(e)
                    }))
                },
                traverseAncestors: function(e, t) {
                    var n = e.parentNode;
                    null !== n && (t(n), this.traverseAncestors(n, t))
                },
                traverseAllNodesDFS: function(e) {
                    var t = this;
                    this.normalizedOptions.forEach((function(n) {
                        t.traverseDescendantsDFS(n, e),
                        e(n)
                    }))
                },
                traverseAllNodesByIndex: function(e) { ! (function t(n) {
                        n.isBranch && n.children.forEach((function(n) { ! 1 !== e(n) && t(n)
                        }))
                    })({
                        isBranch: !0,
                        children: this.normalizedOptions
                    })
                },
                toggleClickOutsideEvent: function(e) {
                    e ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1)
                },
                focusInput: function() {
                    this.$refs.value.focusInput()
                },
                blurInput: function() {
                    this.$refs.value.blurInput()
                },
                handleMouseDown: l((function(e) { (e.preventDefault(), e.stopPropagation(), this.disabled) || (this.$refs.value.$el.contains(e.target) && (!this.isOpen || this.searchable || this._wasClickedOnValueItem ? this.isOpen || !this.openOnClick && !this.isFocused || this.openMenu() : this.closeMenu()), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags())
                })),
                handleMouseDownOnClear: l((function(e) {
                    var t = this;
                    e.stopPropagation(),
                    e.preventDefault();
                    var n = this.beforeClearAll(),
                    i = function(e) {
                        e && t.clear(),
                        t.focusInput()
                    };
                    u(n) ? n.then(i) : setTimeout((function() {
                        return i(n)
                    }), 0)
                })),
                handleMouseDownOnArrow: l((function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.focusInput(),
                    this.toggleMenu()
                })),
                handleClickOutside: function(e) {
                    this.$refs.wrapper && !this.$refs.wrapper.contains(e.target) && (this.blurInput(), this.closeMenu())
                },
                handleSearch: function() {
                    var e = this;
                    if (this.searchQuery) {
                        this.searching = !0,
                        this.noSearchResults = !0,
                        this.traverseAllNodesDFS((function(t) {
                            var n;
                            t.isBranch && (t.isExpandedOnSearch = !1, t.showAllChildrenOnSearch = !1, t.hasMatchedChild = !1, e.$set(e.searchingCount, t.id, (I(n = {},
                            "ALL_CHILDREN", 0), I(n, "ALL_DESCENDANTS", 0), I(n, "LEAF_CHILDREN", 0), I(n, "LEAF_DESCENDANTS", 0), n)))
                        }));
                        var t = this.searchQuery.trim().toLocaleLowerCase(),
                        n = t.replace(/\s+/g, " ").split(" ");
                        this.traverseAllNodesDFS((function(i) {
                            var o = void 0; (o = e.searchNested && n.length > 1 ? i.isMatched = n.every((function(e) {
                                return - 1 !== i.nestedSearchLabel.indexOf(e)
                            })) : i.isMatched = e.disableFuzzyMatching ? -1 !== i.lowerCasedLabel.indexOf(t) : s()(t, i.lowerCasedLabel)) && (e.noSearchResults = !1, i.ancestors.forEach((function(t) {
                                return e.searchingCount[t.id].ALL_DESCENDANTS++
                            })), i.isLeaf && i.ancestors.forEach((function(t) {
                                return e.searchingCount[t.id].LEAF_DESCENDANTS++
                            })), null !== i.parentNode && (e.searchingCount[i.parentNode.id].ALL_CHILDREN += 1, i.isLeaf && (e.searchingCount[i.parentNode.id].LEAF_CHILDREN += 1))),
                            (o || i.isBranch && i.isExpandedOnSearch) && null !== i.parentNode && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedChild = !0)
                        }))
                    } else this.searching = !1;
                    this.resetHighlightedOptionWhenNecessary(!0)
                },
                shouldExpand: function(e) {
                    return this.searching ? e.isExpandedOnSearch: e.isExpanded
                },
                isAllAncestorsExpanded: function(e) {
                    var t = this;
                    return e.ancestors.every((function(e) {
                        return t.shouldExpand(e)
                    }))
                },
                shouldOptionBeIncludedInSearchResult: function(e) {
                    return !! e.isMatched || (!(!e.isBranch || !e.hasMatchedChild) || !(e.isRootNode || !e.parentNode.showAllChildrenOnSearch))
                },
                shouldShowOptionInMenu: function(e) {
                    return ! ((! (arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && !e.isRootNode && !this.isAllAncestorsExpanded(e)) && !(this.searching && !this.shouldOptionBeIncludedInSearchResult(e))
                },
                setCurrentHighlightedOption: function(e) {
                    if (e) {
                        this.current = e.id;
                        var t, n, i, s, o, r = this.$el.querySelector('.Xzp-treeselect__option[data-id="' + e.id + '"]');
                        r && (t = this.$refs.menu, n = r, i = t.getBoundingClientRect(), s = n.getBoundingClientRect(), o = n.offsetHeight / 3, s.bottom + o > i.bottom ? t.scrollTop = Math.min(n.offsetTop + n.clientHeight - t.offsetHeight + o, t.scrollHeight) : s.top - o < i.top && (t.scrollTop = Math.max(n.offsetTop - o, 0)))
                    }
                },
                resetHighlightedOptionWhenNecessary: function() { ! (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && null != this.current && this.shouldShowOptionInMenu(this.getNode(this.current)) || (this.setCurrentHighlightedOption(this.firstVisibleOption), this.setMenuScrollPosition(0))
                },
                highlightFirstOption: function() {
                    if (this.hasVisibleOptions) {
                        var e = this.visibleOptionIds[0];
                        this.setCurrentHighlightedOption(this.getNode(e)),
                        this.setMenuScrollPosition(0)
                    }
                },
                highlightPrevOption: function() {
                    if (this.hasVisibleOptions) {
                        var e = this.visibleOptionIds.indexOf(this.current) - 1;
                        if ( - 1 === e) return this.highlightLastOption();
                        this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]))
                    }
                },
                highlightNextOption: function() {
                    if (this.hasVisibleOptions) {
                        var e = this.visibleOptionIds.indexOf(this.current) + 1;
                        if (e === this.visibleOptionIds.length) return this.highlightFirstOption();
                        this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]))
                    }
                },
                highlightLastOption: function() {
                    if (this.hasVisibleOptions) {
                        var e = g(this.visibleOptionIds);
                        this.setCurrentHighlightedOption(this.getNode(e)),
                        this.setMenuScrollPosition(1 / 0)
                    }
                },
                closeMenu: function() { ! this.isOpen || !this.disabled && this.alwaysOpen || (this.saveMenuScrollPosition(), this.isOpen = !1, this.toggleClickOutsideEvent(!1), this.searchQuery = "", this.$emit("close", this.getValue(), this.id))
                },
                openMenu: function() {
                    this.disabled || this.isOpen || (this.isOpen = !0, this.$nextTick(this.adjustMenuOpenDirection), this.$nextTick(this.restoreMenuScrollPosition), this.rootOptionsLoaded || this.loadRootOptions(), this.toggleClickOutsideEvent(!0), this.resetHighlightedOptionWhenNecessary(), this.$emit("open", this.id))
                },
                toggleMenu: function() {
                    this.isOpen ? this.closeMenu() : this.openMenu()
                },
                toggleExpanded: function(e) {
                    this.checkIfBranchNode(e),
                    this.searching ? (e.isExpandedOnSearch = !e.isExpandedOnSearch, e.isExpandedOnSearch && (e.showAllChildrenOnSearch = !0)) : e.isExpanded = !e.isExpanded
                },
                buildSelectedNodeMap: function() {
                    var e = d();
                    this.selectedNodeIds.forEach((function(t) {
                        e[t] = !0
                    })),
                    this.selectedNodeMap = e
                },
                buildNodeCheckedStateMap: function() {
                    var e = this,
                    t = d();
                    this.multiple && (this.selectedNodes.forEach((function(n) {
                        t[n.id] = 2,
                        e.flat || e.traverseAncestors(n, (function(n) {
                            e.isSelected(n) || (t[n.id] = 1)
                        }))
                    })), this.traverseAllNodesDFS((function(e) {
                        e.id in t || (t[e.id] = 0)
                    }))),
                    this.nodeCheckedStateMap = t
                },
                enhancedNormalizer: function(e) {
                    return f({},
                    e, this.normalizer(e, this.id))
                },
                normalize: function(e, t, n) {
                    var i = this,
                    s = t.map((function(e) {
                        return [i.enhancedNormalizer(e), e]
                    })).map((function(t, s) {
                        var o = L(t, 2),
                        a = o[0],
                        l = o[1];
                        i.checkDuplication(a),
                        i.verifyNodeShape(a);
                        var c = a.id,
                        u = a.label,
                        h = a.children,
                        p = a.isDefaultExpanded,
                        f = null === e,
                        v = f ? 0 : e.level + 1,
                        g = Array.isArray(h) || null === h,
                        _ = !g,
                        m = !!a.isDisabled || !i.flat && !f && e.isDisabled,
                        O = u.toLocaleLowerCase(),
                        b = f ? O: e.nestedSearchLabel + " " + O,
                        N = i.$set(i.nodeMap, c, d());
                        if (i.$set(N, "id", c), i.$set(N, "label", u), i.$set(N, "level", v), i.$set(N, "ancestors", f ? [] : e.ancestors.concat(e)), i.$set(N, "index", (f ? [] : e.index).concat(s)), i.$set(N, "parentNode", e), i.$set(N, "lowerCasedLabel", O), i.$set(N, "nestedSearchLabel", b), i.$set(N, "isDisabled", m), i.$set(N, "isMatched", !1), i.$set(N, "isBranch", g), i.$set(N, "isLeaf", _), i.$set(N, "isRootNode", f), i.$set(N, "raw", l), g) {
                            var y, C = Array.isArray(h);
                            i.$set(N, "isLoaded", C),
                            i.$set(N, "isPending", !1),
                            i.$set(N, "isExpanded", "boolean" == typeof p ? p: v < i.defaultExpandLevel),
                            i.$set(N, "hasMatchedChild", !1),
                            i.$set(N, "hasDisabledDescendants", !1),
                            i.$set(N, "isExpandedOnSearch", !1),
                            i.$set(N, "showAllChildrenOnSearch", !1),
                            i.$set(N, "loadingChildrenError", ""),
                            i.$set(N, "count", (I(y = {},
                            "ALL_CHILDREN", 0), I(y, "ALL_DESCENDANTS", 0), I(y, "LEAF_CHILDREN", 0), I(y, "LEAF_DESCENDANTS", 0), y)),
                            i.$set(N, "children", C ? i.normalize(N, h, n) : []),
                            C || "function" == typeof i.loadOptions ? !C && N.isExpanded && i.loadChildrenOptions(N) : r((function() {
                                return ! 1
                            }), (function() {
                                return "Unloaded branch node detected. `loadOptions` prop is required to load its children."
                            }))
                        }
                        if (N.ancestors.forEach((function(e) {
                            return e.count.ALL_DESCENDANTS++
                        })), _ && N.ancestors.forEach((function(e) {
                            return e.count.LEAF_DESCENDANTS++
                        })), null !== e && (e.count.ALL_CHILDREN += 1, _ && (e.count.LEAF_CHILDREN += 1)), m && N.ancestors.forEach((function(e) {
                            return e.hasDisabledDescendants = !0
                        })), n && n[c]) {
                            var S = n[c];
                            S.isBranch && N.isBranch && (N.isExpanded = S.isExpanded, N.isExpandedOnSearch = S.isExpandedOnSearch, N.isPending = S.isPending, N.loadingChildrenError = S.loadingChildrenError)
                        }
                        return N
                    }));
                    if (this.branchNodesFirst) {
                        var o = s.filter((function(e) {
                            return e.isBranch
                        })),
                        a = s.filter((function(e) {
                            return e.isLeaf
                        }));
                        s = o.concat(a)
                    }
                    return s
                },
                loadRootOptions: function() {
                    var e = this;
                    this.callLoadOptionsProp({
                        action: "LOAD_ROOT_OPTIONS",
                        isPending: function() {
                            return e.loadingRootOptions
                        },
                        start: function() {
                            e.loadingRootOptions = !0,
                            e.loadingRootOptionsError = ""
                        },
                        succeed: function() {
                            e.rootOptionsLoaded = !0
                        },
                        fail: function(t) {
                            e.loadingRootOptionsError = t.message || String(t)
                        },
                        end: function() {
                            e.loadingRootOptions = !1
                        }
                    })
                },
                loadChildrenOptions: function(e) {
                    var t = this,
                    n = e.id,
                    i = e.raw;
                    this.callLoadOptionsProp({
                        action: "LOAD_CHILDREN_OPTIONS",
                        args: {
                            parentNode: i
                        },
                        isPending: function() {
                            return t.getNode(n).isPending
                        },
                        start: function() {
                            t.getNode(n).isPending = !0,
                            t.getNode(n).loadingChildrenError = ""
                        },
                        succeed: function() {
                            t.getNode(n).isLoaded = !0
                        },
                        fail: function(e) {
                            t.getNode(n).loadingChildrenError = e.message || String(e)
                        },
                        end: function() {
                            t.getNode(n).isPending = !1
                        }
                    })
                },
                callLoadOptionsProp: function(e) {
                    var t = e.action,
                    n = e.args,
                    i = e.isPending,
                    s = e.start,
                    o = e.succeed,
                    r = e.fail,
                    a = e.end;
                    if (this.loadOptions && !i()) {
                        var l, c, d = (l = function(e) {
                            e ? r(e) : o(),
                            a()
                        },
                        c = void 0,
                        function() {
                            return l.called ? c: (l.called = !0, c = l.apply(void 0, arguments))
                        });
                        s();
                        var h = this.loadOptions(D({
                            id: this.id,
                            action: t
                        },
                        n, {
                            callback: d
                        }));
                        u(h) && h.then((function() {
                            d()
                        }), (function(e) {
                            d(e)
                        }))
                    }
                },
                checkDuplication: function(e) {
                    var t = this;
                    r((function() {
                        return ! (e.id in t.nodeMap && !t.nodeMap[e.id].isFallbackNode)
                    }), (function() {
                        return "Detected duplicate presence of node id " + JSON.stringify(e.id) + '. Their labels are "' + t.nodeMap[e.id].label + '" and "' + e.label + '" respectively.'
                    }))
                },
                verifyNodeShape: function(e) {
                    r((function() {
                        return ! (void 0 === e.children && !0 === e.isBranch)
                    }), (function() {
                        return "Are you meant to declares an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
                    }))
                },
                select: function(e) {
                    if (!this.disabled && !e.isDisabled) {
                        this.single && this.clear();
                        var t = this.multiple && !this.flat ? 0 === this.nodeCheckedStateMap[e.id] : !this.isSelected(e);
                        t ? this._selectNode(e) : this._deselectNode(e),
                        this.buildSelectedNodeMap(),
                        this.buildNodeCheckedStateMap(),
                        t ? this.$emit("select", e.raw, this.id) : this.$emit("deselect", e.raw, this.id),
                        this.searching && t && (this.single || this.clearOnSelect) && (this.searchQuery = ""),
                        this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0))
                    }
                },
                clear: function() {
                    var e = this;
                    this.hasValue && (this.selectedNodeIds = this.multiple ? this.selectedNodeIds.filter((function(t) {
                        return e.getNode(t).isDisabled
                    })) : [], this.buildSelectedNodeMap(), this.buildNodeCheckedStateMap())
                },
                _selectNode: function(e) {
                    var t = this,
                    n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ignoreDisabled,
                    i = void 0 !== n && n;
                    if (this.single || this.flat || this.disableBranchNodes) this.addValue(e);
                    else if ((e.isLeaf || e.isBranch && (!e.hasDisabledDescendants || i)) && this.addValue(e), e.isBranch && this.traverseDescendantsBFS(e, (function(e) {
                        e.isDisabled && !i || t.addValue(e)
                    })), e.isLeaf || e.isBranch && (!e.hasDisabledDescendants || i)) for (var s = e; ! s.isRootNode;) {
                        if (! (s = s.parentNode).children.every(this.isSelected)) break;
                        this.addValue(s)
                    }
                },
                _deselectNode: function(e) {
                    var t = this;
                    if (this.single || this.flat || this.disableBranchNodes) this.removeValue(e);
                    else {
                        var n = !1;
                        switch (e.isBranch && this.traverseDescendantsDFS(e, (function(e) {
                            e.isDisabled || (t.removeValue(e), n = !0)
                        })), !0) {
                        case e.isLeaf:
                        case n:
                        case 0 === e.children.length: this.removeValue(e);
                            for (var i = e; ! i.isRootNode && (i = i.parentNode, this.isSelected(i));) this.removeValue(i)
                        }
                    }
                },
                addValue: function(e) {
                    this.selectedNodeIds.push(e.id),
                    this.selectedNodeMap[e.id] = !0
                },
                removeValue: function(e) {
                    var t, n, i;
                    t = this.selectedNodeIds,
                    n = e.id,
                    -1 !== (i = t.indexOf(n)) && t.splice(i, 1),
                    delete this.selectedNodeMap[e.id]
                },
                removeLastValue: function() {
                    if (this.hasValue) {
                        if (this.single) return this.clear();
                        var e = g(this.internalValue),
                        t = this.getNode(e);
                        this.select(t)
                    }
                },
                setMenuScrollPosition: function(e) {
                    this.$refs.menu ? (e === 1 / 0 && (e = this.$refs.menu.scrollHeight), this.$refs.menu.scrollTop = e) : this.lastScrollPosition = e
                },
                saveMenuScrollPosition: function() {
                    this.$refs.menu && (this.lastScrollPosition = this.$refs.menu.scrollTop)
                },
                restoreMenuScrollPosition: function() {
                    this.$refs.menu && this.setMenuScrollPosition(this.lastScrollPosition)
                },
                adjustMenuOpenDirection: function() {
                    if ("undefined" != typeof window) {
                        var e = this.$el.getBoundingClientRect(),
                        t = e.top,
                        n = window.innerHeight - e.bottom,
                        i = n > this.maxHeight,
                        s = e.top > 0 && window.innerHeight - e.top > 40;
                        switch (!0) {
                        case i:
                        case n > t: case ! s: case "below" === this.openDirection: case "bottom" === this.openDirection: this.prefferedOpenDirection = "below",
                            this.optimizedHeight = Math.max(Math.min(n - 40, this.maxHeight), this.maxHeight);
                            break;
                        default:
                            this.prefferedOpenDirection = "above",
                            this.optimizedHeight = Math.min(t - 40, this.maxHeight)
                        }
                    }
                }
            },
            created: function() {
                var e = this;
                this.verifyProps(),
                this.resetFlags(),
                this.initialize(this.options),
                this.$watch("options", (function() {
                    return e.initialize(e.options)
                }), {
                    deep: !0
                })
            },
            mounted: function() { (this.autoFocus || this.autofocus) && this.$refs.value.focusInput(),
                !this.rootOptionsLoaded && this.autoLoadRootOptions && this.loadRootOptions(),
                this.alwaysOpen && this.openMenu()
            },
            destroyed: function() {
                this.toggleClickOutsideEvent(!1)
            }
        };
        function R(e, t, n, i, s, o, r, a) {
            var l, c = "function" == typeof e ? e.options: e;
            if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = "data-v-" + o), r ? (l = function(e) { (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __Xzp_SSR_CONTEXT__ || (e = __Xzp_SSR_CONTEXT__),
                s && s.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(r)
            },
            c._ssrRegister = l) : s && (l = a ?
            function() {
                s.call(this, this.$root.$options.shadowRoot)
            }: s), l) if (c.functional) {
                c._injectStyles = l;
                var u = c.render;
                c.render = function(e, t) {
                    return l.call(t),
                    u(e, t)
                }
            } else {
                var d = c.beforeCreate;
                c.beforeCreate = d ? [].concat(d, l) : [l]
            }
            return {
                exports: e,
                options: c
            }
        }
        var T = R({
            name: "Xzp-treeselect--hidden-field",
            inject: ["instance"],
            props: {
                stringifiedValue: {
                    type: String,
                    required: !0
                }
            }
        },
        (function() {
            var e = this.$createElement;
            return (this._self._c || e)("input", {
                attrs: {
                    type: "hidden",
                    name: this.instance.name,
                    disabled: this.instance.disabled
                },
                domProps: {
                    value: this.stringifiedValue
                }
            })
        }), [], !1, null, null, null).exports,
        V = {
            computed: {
                limitText: function() {
                    var e = this.instance.internalValue.length - this.instance.limit;
                    return this.instance.limitText(e)
                }
            },
            methods: {
                focusInput: function() {
                    this.$refs.input.focus()
                },
                blurInput: function() {
                    this.$refs.input.blur()
                },
                handleMouseDownOnValueItem: l((function(e, t) {
                    this._wasClickedOnValueItem = !0,
                    this.instance.select(t)
                }))
            }
        },
        $ = R({
            name: "Xzp-treeselect--placeholder",
            inject: ["instance"]
        },
        (function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                staticClass: "Xzp-treeselect__placeholder Xzp-treeselect-helper-zoom-effect-off"
            },
            [this._t("placeholder", [this._v(this._s(this.instance.placeholder))])], 2)
        }), [], !1, null, null, null).exports,
        F = [O, N, y, C, S, E, x],
        H = R({
            name: "Xzp-treeselect--input",
            inject: ["instance"],
            data: function() {
                return {
                    inputWidth: 5
                }
            },
            computed: {
                needsAutoSize: function() {
                    return this.instance.searchable && !this.instance.disabled && this.instance.multiple
                }
            },
            updated: function() {
                this.needsAutoSize && this.updateInputWidth()
            },
            methods: {
                focus: function() {
                    this.instance.disabled || this.$refs.input && this.$refs.input.focus()
                },
                blur: function() {
                    this.$refs.input && this.$refs.input.blur()
                },
                onFocus: function() {
                    this.instance.isFocused = !0,
                    this.instance.openOnFocus && this.instance.openMenu()
                },
                onBlur: function() {
                    document.activeElement !== this.instance.$refs.menu ? (this.instance.isFocused = !1, this.instance.closeMenu()) : this.focus()
                },
                onInput: function(e) {
                    this.instance.searchQuery = e.target.value
                },
                onKeyDown: function(e) {
                    if (! (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
                        var t = "which" in e ? e.which: e.keyCode;
                        if (!this.instance.isOpen && -1 !== F.indexOf(t)) return this.instance.openMenu();
                        switch (t) {
                        case m:
                            this.instance.backspaceRemoves && !this.instance.searchQuery.length && this.instance.removeLastValue();
                            break;
                        case O:
                            e.preventDefault();
                            var n = this.instance.getNode(this.instance.current);
                            if (n.isBranch && this.instance.disableBranchNodes) return;
                            this.instance.select(n);
                            break;
                        case b:
                            this.instance.searchQuery.length ? this.instance.searchQuery = "": this.instance.isOpen ? this.instance.closeMenu() : this.instance.escapeClearsValue && this.instance.clear();
                            break;
                        case N:
                            e.preventDefault(),
                            this.instance.highlightLastOption();
                            break;
                        case y:
                            e.preventDefault(),
                            this.instance.highlightFirstOption();
                            break;
                        case C:
                            var i = this.instance.getNode(this.instance.current);
                            i.isBranch && this.instance.shouldExpand(i) ? (e.preventDefault(), this.instance.toggleExpanded(i)) : !i.isRootNode && (i.isLeaf || i.isBranch && !this.instance.shouldExpand(i)) && (e.preventDefault(), this.instance.setCurrentHighlightedOption(i.parentNode));
                            break;
                        case S:
                            e.preventDefault(),
                            this.instance.highlightPrevOption();
                            break;
                        case E:
                            var s = this.instance.getNode(this.instance.current);
                            s.isBranch && !this.instance.shouldExpand(s) && (e.preventDefault(), this.instance.toggleExpanded(s));
                            break;
                        case x:
                            e.preventDefault(),
                            this.instance.highlightNextOption();
                            break;
                        case w:
                            this.instance.deleteRemoves && !this.instance.searchQuery.length && this.instance.removeLastValue();
                            break;
                        default:
                            this.instance.openMenu()
                        }
                    }
                },
                onMouseDown: function(e) {
                    this.instance.searchQuery.length && e.stopPropagation()
                },
                renderInputContainer: function(e) {
                    var t = {
                        class: "Xzp-treeselect__input-container"
                    },
                    n = [];
                    return this.instance.searchable && !this.instance.disabled && (n.push(this.renderInput(e)), this.needsAutoSize && n.push(this.renderSizer(e))),
                    this.instance.searchable || v(t, {
                        on: {
                            focus: this.onFocus,
                            blur: this.onBlur,
                            keydown: this.onKeyDown
                        },
                        ref: "input"
                    }),
                    this.instance.searchable || this.instance.disabled || v(t, {
                        attrs: {
                            tabIndex: this.instance.tabIndex
                        }
                    }),
                    e("div", t, n)
                },
                renderInput: function(e) {
                    return e("input", {
                        class: "Xzp-treeselect__input",
                        attrs: {
                            type: "text",
                            autocomplete: "off",
                            tabIndex: this.instance.tabIndex,
                            required: this.instance.required && !this.instance.hasValue
                        },
                        domProps: {
                            value: this.instance.searchQuery
                        },
                        style: {
                            width: this.needsAutoSize ? this.inputWidth + "px": null
                        },
                        on: {
                            focus: this.onFocus,
                            input: this.onInput,
                            blur: this.onBlur,
                            keydown: this.onKeyDown,
                            mousedown: this.onMouseDown
                        },
                        ref: "input"
                    })
                },
                renderSizer: function(e) {
                    return e("div", {
                        class: "Xzp-treeselect__sizer",
                        domProps: {
                            textContent: this.instance.searchQuery
                        },
                        ref: "sizer"
                    })
                },
                updateInputWidth: function() {
                    this.inputWidth = Math.max(5, this.$refs.sizer.scrollWidth + 15)
                }
            },
            render: function(e) {
                return this.renderInputContainer(e)
            }
        },
        void 0, void 0, !1, null, null, null).exports,
        P = R({
            name: "Xzp-treeselect--x"
        },
        (function() {
            var e = this.$createElement,
            t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 348.333 348.333"
                }
            },
            [t("path", {
                attrs: {
                    d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
                }
            })])
        }), [], !1, null, null, null).exports,
        z = R({
            name: "Xzp-treeselect--multi-value",
            components: {
                Placeholder: $,
                SearchInput: H,
                DeleteIcon: P
            },
            mixins: [V],
            inject: ["instance"]
        },
        (function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "Xzp-treeselect__value-container"
            },
            [n("transition-group", {
                staticClass: "Xzp-treeselect__multi-value",
                attrs: {
                    tag: "div",
                    name: "Xzp-treeselect__multi-value-item--transition",
                    appear: ""
                }
            },
            [e._l(e.instance.visibleValue, (function(t) {
                return [n("div", {
                    key: "value-" + t.id,
                    staticClass: "Xzp-treeselect__multi-value-item-container"
                },
                [n("div", {
                    class: ["Xzp-treeselect__multi-value-item", {
                        "Xzp-treeselect__multi-value-item-disabled": t.isDisabled
                    }],
                    on: {
                        mousedown: function(n) {
                            e.handleMouseDownOnValueItem(n, t)
                        }
                    }
                },
                [n("span", {
                    staticClass: "Xzp-treeselect__multi-value-label"
                },
                [e._v(e._s(t.label))]), n("span", {
                    staticClass: "Xzp-treeselect__icon Xzp-treeselect__value-remove"
                },
                [n("delete-icon")], 1)])])]
            })), e.instance.hasExceededLimit ? n("div", {
                key: "limit-tip",
                staticClass: "Xzp-treeselect__limit-tip Xzp-treeselect-helper-zoom-effect-off"
            },
            [n("span", {
                staticClass: "Xzp-treeselect__limit-tip-text"
            },
            [e._v(e._s(e.limitText))])]) : e._e(), e.instance.hasValue || e.instance.searchQuery ? e._e() : n("placeholder", {
                key: "placeholer"
            }), n("search-input", {
                key: "input",
                ref: "input"
            })], 2)], 1)
        }), [], !1, null, null, null).exports,
        j = R({
            name: "Xzp-treeselect--single-value",
            components: {
                Placeholder: $,
                SearchInput: H
            },
            mixins: [V],
            inject: ["instance"]
        },
        (function() {
            var e = this.$createElement,
            t = this._self._c || e;
            return t("div", {
                staticClass: "Xzp-treeselect__value-container"
            },
            [this.instance.hasValue && !this.instance.searchQuery ? t("div", {
                staticClass: "Xzp-treeselect__single-value"
            },
            [this._v("\n    " + this._s(this.instance.selectedNodes[0].label) + "\n  ")]) : this.instance.searchQuery ? this._e() : t("placeholder"), t("search-input", {
                key: "input",
                ref: "input"
            })], 1)
        }), [], !1, null, null, null).exports,
        Q = {
            props: {
                node: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                checkedState: function() {
                    return this.instance.nodeCheckedStateMap[this.node.id]
                },
                shouldExpand: function() {
                    return !! this.node.isBranch && this.instance.shouldExpand(this.node)
                },
                shouldShowCount: function() {
                    return !! this.node.isBranch && (this.instance.searching ? this.instance.showCountOnSearchComputed: this.instance.showCount)
                },
                count: function() {
                    return this.shouldShowCount ? this.instance.searching ? this.instance.searchingCount[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf] : NaN
                },
                shouldShowArrorPlaceholder: function() {
                    return ! this.node.isBranch && (this.node.isLeaf && this.instance.hasBranchNodes)
                }
            },
            watch: {
                shouldExpand: function(e) { ! 0 !== e || this.node.isLoaded || this.instance.loadChildrenOptions(this.node)
                }
            },
            methods: {
                handleMouseDownOnOption: l((function() {
                    this.node.isBranch && this.instance.disableBranchNodes ? this.instance.toggleExpanded(this.node) : this.instance.select(this.node)
                })),
                handleMouseDownOnOptionArrow: l((function() {
                    this.instance.toggleExpanded(this.node)
                })),
                setCurrentHighlightedOption: function() {
                    this.instance.setCurrentHighlightedOption(this.node)
                }
            }
        },
        K = R({
            name: "Xzp-treeselect--tip",
            props: {
                type: {
                    type: String,
                    required: !0
                },
                icon: {
                    type: String,
                    required: !0
                }
            }
        },
        (function() {
            var e = this.$createElement,
            t = this._self._c || e;
            return t("div", {
                class: "Xzp-treeselect__tip Xzp-treeselect__" + this.type + "-tip"
            },
            [t("div", {
                staticClass: "Xzp-treeselect__icon-container"
            },
            [t("span", {
                class: "Xzp-treeselect__icon-" + this.icon
            })]), t("span", {
                class: "Xzp-treeselect__tip-text Xzp-treeselect__" + this.type + "-tip-text"
            },
            [this._t("default")], 2)])
        }), [], !1, null, null, null).exports,
        W = R({
            name: "Xzp-treeselect--arrow"
        },
        (function() {
            var e = this.$createElement,
            t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 292.362 292.362"
                }
            },
            [t("path", {
                attrs: {
                    d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
                }
            })])
        }), [], !1, null, null, null).exports,
        q = R({
            name: "Xzp-treeselect",
            components: {
                HiddenField: T,
                MultiValue: z,
                SingleValue: j,
                TreeselectOption: R({
                    name: "Xzp-treeselect--option",
                    inject: ["instance", "UNCHECKED", "INDETERMINATE", "CHECKED"],
                    components: {
                        Tip: K,
                        ArrowIcon: W
                    },
                    mixins: [Q]
                },
                (function() {
                    var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                    return n("div", {
                        staticClass: "Xzp-treeselect__list-item",
                        class: "Xzp-treeselect__indent-level-" + e.node.level
                    },
                    [n("div", {
                        class: ["Xzp-treeselect__option", {
                            "Xzp-treeselect__option--disabled": e.node.isDisabled,
                            "Xzp-treeselect__option--selected": e.instance.isSelected(e.node),
                            "Xzp-treeselect__option--highlight": e.instance.current === e.node.id,
                            "Xzp-treeselect__option--matched": e.instance.searching && e.node.isMatched,
                            "Xzp-treeselect__option--hide": !e.instance.shouldShowOptionInMenu(e.node, !1)
                        }],
                        attrs: {
                            "data-id": e.node.id
                        },
                        on: {
                            mouseenter: function(t) {
                                return t.target !== t.currentTarget ? null: e.setCurrentHighlightedOption(t)
                            }
                        }
                    },
                    [e.shouldShowArrorPlaceholder ? n("div", {
                        staticClass: "Xzp-treeselect__option-arrow-placeholder"
                    },
                    [e._v(" ")]) : e.node.isBranch ? n("div", {
                        staticClass: "Xzp-treeselect__option-arrow-container",
                        on: {
                            mousedown: e.handleMouseDownOnOptionArrow
                        }
                    },
                    [n("transition", {
                        attrs: {
                            name: "Xzp-treeselect__option-arrow--prepare",
                            appear: ""
                        }
                    },
                    [n("arrow-icon", {
                        class: ["Xzp-treeselect__option-arrow", {
                            "Xzp-treeselect__option-arrow--rotated": e.shouldExpand
                        }]
                    })], 1)], 1) : e._e(), n("div", {
                        staticClass: "Xzp-treeselect__label-container",
                        on: {
                            mousedown: e.handleMouseDownOnOption
                        }
                    },
                    [!e.instance.multiple || e.instance.disableBranchNodes && !e.node.isLeaf ? e._e() : n("div", {
                        staticClass: "Xzp-treeselect__checkbox-container"
                    },
                    [n("span", {
                        class: ["Xzp-treeselect__checkbox", {
                            "Xzp-treeselect__checkbox--checked": e.checkedState === e.CHECKED,
                            "Xzp-treeselect__checkbox--indeterminate": e.checkedState === e.INDETERMINATE,
                            "Xzp-treeselect__checkbox--unchecked": e.checkedState === e.UNCHECKED,
                            "Xzp-treeselect__checkbox--disabled": e.node.isDisabled
                        }]
                    },
                    [n("span", {
                        staticClass: "Xzp-treeselect__check-mark"
                    }), n("span", {
                        staticClass: "Xzp-treeselect__minus-mark"
                    })])]), e._t("option-label", null, {
                        node: e.node,
                        shouldShowCount: e.shouldShowCount,
                        count: e.count,
                        labelClassName: "Xzp-treeselect__label",
                        countClassName: "Xzp-treeselect__count"
                    })], 2)]), n("transition", {
                        attrs: {
                            name: "Xzp-treeselect__list--transition"
                        }
                    },
                    [e.shouldExpand ? n("div", {
                        staticClass: "Xzp-treeselect__list"
                    },
                    [e.node.isLoaded ? [e.node.children.length ? e._l(e.node.children, (function(t) {
                        return n("Xzp-treeselect--option", {
                            key: t.id,
                            attrs: {
                                node: t
                            },
                            scopedSlots: e._u([{
                                key: "option-label",
                                fn: function(t) {
                                    var n = t.node,
                                    i = t.shouldShowCount,
                                    s = t.count,
                                    o = t.labelClassName,
                                    r = t.countClassName;
                                    return [e._t("option-label", null, {
                                        node: n,
                                        shouldShowCount: i,
                                        count: s,
                                        labelClassName: o,
                                        countClassName: r
                                    })]
                                }
                            }])
                        })
                    })) : n("tip", {
                        attrs: {
                            type: "no-children",
                            icon: "warning"
                        }
                    },
                    [e._v(e._s(e.instance.noChildrenText))])] : e.node.isPending ? n("tip", {
                        attrs: {
                            type: "loading",
                            icon: "loader"
                        }
                    },
                    [e._v(e._s(e.instance.loadingText))]) : e.node.loadingChildrenError ? n("tip", {
                        attrs: {
                            type: "error",
                            icon: "error"
                        }
                    },
                    [e._v("\n        " + e._s(e.node.loadingChildrenError) + "\n        "), n("a", {
                        staticClass: "Xzp-treeselect__retry",
                        attrs: {
                            title: e.instance.retryTitle
                        },
                        on: {
                            click: function(t) {
                                e.instance.loadChildrenOptions(e.node)
                            }
                        }
                    },
                    [e._v("\n          " + e._s(e.instance.retryText) + "\n        ")])]) : e._e()], 2) : e._e()])], 1)
                }), [], !1, null, null, null).exports,
                Tip: K,
                ArrowIcon: W,
                DeleteIcon: P
            },
            mixins: [B]
        },
        (function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                ref: "wrapper",
                class: ["Xzp-treeselect", {
                    "Xzp-treeselect--single": e.single,
                    "Xzp-treeselect--multi": e.multiple,
                    "Xzp-treeselect--searchable": e.searchable,
                    "Xzp-treeselect--disabled": e.disabled,
                    "Xzp-treeselect--focused": e.isFocused,
                    "Xzp-treeselect--has-value": e.hasValue,
                    "Xzp-treeselect--open": e.isOpen,
                    "Xzp-treeselect--open-above": "above" === e.prefferedOpenDirection,
                    "Xzp-treeselect--open-below": "below" === e.prefferedOpenDirection,
                    "Xzp-treeselect--branch-nodes-disabled": e.disableBranchNodes
                }],
                on: {
                    mousedown: e.handleMouseDown
                }
            },
            [e.name && e.hasValue ? [e.single ? n("HiddenField", {
                attrs: {
                    "stringified-value": e.stringifyValue(e.internalValue[0])
                }
            }) : e.joinValues ? n("HiddenField", {
                attrs: {
                    "stringified-value": e.internalValue.map(e.stringifyValue).join(e.delimiter)
                }
            }) : e._l(e.internalValue, (function(t, i) {
                return n("HiddenField", {
                    key: i,
                    attrs: {
                        "stringified-value": e.stringifyValue(t)
                    }
                })
            }))] : e._e(), n("div", {
                staticClass: "Xzp-treeselect__control"
            },
            [e.single ? n("single-value", {
                ref: "value"
            }) : n("multi-value", {
                ref: "value"
            }), e.shouldShowX ? n("div", {
                staticClass: "Xzp-treeselect__x-container",
                attrs: {
                    title: e.multiple ? e.clearAllText: e.clearValueText
                },
                on: {
                    mousedown: e.handleMouseDownOnClear
                }
            },
            [n("delete-icon", {
                staticClass: "Xzp-treeselect__x"
            })], 1) : e._e(), e.isOpen && e.alwaysOpen ? e._e() : n("div", {
                staticClass: "Xzp-treeselect__control-arrow-container",
                on: {
                    mousedown: e.handleMouseDownOnArrow
                }
            },
            [n("arrow-icon", {
                class: ["Xzp-treeselect__control-arrow", {
                    "Xzp-treeselect__control-arrow--rotated": e.isOpen
                }]
            })], 1)], 1), n("transition", {
                attrs: {
                    name: "Xzp-treeselect__menu--transition"
                }
            },
            [e.isOpen ? n("div", {
                ref: "menu",
                staticClass: "Xzp-treeselect__menu",
                style: {
                    maxHeight: e.optimizedHeight + "px"
                }
            },
            [e.rootOptionsLoaded ? [e.searching && e.noSearchResults ? n("tip", {
                attrs: {
                    type: "no-results",
                    icon: "warning"
                }
            },
            [e._v(e._s(e.noResultsText))]) : 0 === e.normalizedOptions.length ? n("tip", {
                attrs: {
                    type: "no-options",
                    icon: "warning"
                }
            },
            [e._v(e._s(e.noOptionsText))]) : n("div", {
                staticClass: "Xzp-treeselect__list"
            },
            e._l(e.normalizedOptions, (function(t) {
                return n("treeselect-option", {
                    key: t.id,
                    attrs: {
                        node: t
                    },
                    scopedSlots: e._u([{
                        key: "option-label",
                        fn: function(t) {
                            var i = t.node,
                            s = t.shouldShowCount,
                            o = t.count,
                            r = t.labelClassName,
                            a = t.countClassName;
                            return [e._t("option-label", [n("label", {
                                class: r
                            },
                            [e._v("\n                  " + e._s(i.label) + "\n                  "), s ? n("span", {
                                class: a
                            },
                            [e._v("(" + e._s(o) + ")")]) : e._e()])], {
                                node: i,
                                shouldShowCount: s,
                                count: o,
                                labelClassName: r,
                                countClassName: a
                            })]
                        }
                    }])
                })
            })))] : [e.loading || e.loadingRootOptions ? n("tip", {
                attrs: {
                    type: "loading",
                    icon: "loader"
                }
            },
            [e._v(e._s(e.loadingText))]) : e.loadingRootOptionsError ? n("tip", {
                attrs: {
                    type: "error",
                    icon: "error"
                }
            },
            [e._v("\n          " + e._s(e.loadingRootOptionsError) + "\n          "), n("a", {
                staticClass: "Xzp-treeselect__retry",
                attrs: {
                    title: e.retryTitle
                },
                on: {
                    click: e.loadRootOptions
                }
            },
            [e._v("\n            " + e._s(e.retryText) + "\n          ")])]) : e._e()]], 2) : e._e()])], 2)
        }), [], !1, null, null, null).exports;
        n(3);
        n.d(t, "__esModule", (function() {
            return U
        })),
        n.d(t, "VERSION", (function() {
            return Y
        })),
        n.d(t, "Treeselect", (function() {
            return q
        })),
        n.d(t, "treeselectMixin", (function() {
            return B
        })),
        n.d(t, "optionMixin", (function() {
            return Q
        })),
        n.d(t, "valueMixin", (function() {
            return V
        })),
        n.d(t, "LOAD_ROOT_OPTIONS", (function() {
            return "LOAD_ROOT_OPTIONS"
        })),
        n.d(t, "LOAD_CHILDREN_OPTIONS", (function() {
            return "LOAD_CHILDREN_OPTIONS"
        })),
        n.d(t, "ASYNC_SEARCH", (function() {
            return "ASYNC_SEARCH"
        }));
        t.
    default = q;
        var U = !0,
        Y = "0.0.28"
    }),
    , (function(e, t, n) {})])
}));