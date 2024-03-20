import { getCurrentInstance, inject, defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, computed, normalizeStyle, createElementVNode, toRefs, ref, resolveComponent, createCommentVNode, createBlock, withModifiers, withCtx, createVNode } from "vue";
const opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isNull(obj) {
  return opt.call(obj) === "[object Null]";
}
function isBoolean(obj) {
  return opt.call(obj) === "[object Boolean]";
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
}
const isComponentInstance = (value) => {
  return (value == null ? void 0 : value.$) !== void 0;
};
const configProviderInjectionKey = Symbol("ArcoConfigProvider");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const COMPONENT_PREFIX = "A";
const CLASS_PREFIX = "arco";
const GLOBAL_CONFIG_NAME = "$arco";
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
const setGlobalConfig = (app, options) => {
  var _a;
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = __spreadProps(__spreadValues({}, (_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {}), {
      classPrefix: options.classPrefix
    });
  }
};
const getPrefixCls = (componentName) => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, void 0);
  const prefix = (_c = (_b = configProvider == null ? void 0 : configProvider.prefixCls) != null ? _b : (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _c : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$3 = defineComponent({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const prefixCls = getPrefixCls("icon-hover");
    return {
      prefixCls
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([
      _ctx.prefixCls,
      {
        [`${_ctx.prefix}-icon-hover`]: _ctx.prefix,
        [`${_ctx.prefixCls}-size-${_ctx.size}`]: _ctx.size !== "medium",
        [`${_ctx.prefixCls}-disabled`]: _ctx.disabled
      }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var IconHover = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-close`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$1, 14, _hoisted_1$1);
}
var _IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const IconClose = Object.assign(_IconClose, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconClose.name, _IconClose);
  }
});
const _sfc_main$1 = defineComponent({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-loading`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3, 14, _hoisted_1);
}
var _IconLoading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const IconLoading = Object.assign(_IconLoading, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLoading.name, _IconLoading);
  }
});
const useSize = (size, { defaultValue = "medium" } = {}) => {
  const configProviderCtx = inject(configProviderInjectionKey, void 0);
  const mergedSize = computed(() => {
    var _a, _b;
    return (_b = (_a = size == null ? void 0 : size.value) != null ? _a : configProviderCtx == null ? void 0 : configProviderCtx.size) != null ? _b : defaultValue;
  });
  return {
    mergedSize
  };
};
const TAG_COLORS = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray"
];
const _sfc_main = defineComponent({
  name: "Tag",
  components: {
    IconHover,
    IconClose,
    IconLoading
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:visible": (visible) => true,
    "update:checked": (checked) => true,
    "close": (ev) => true,
    "check": (checked, ev) => true
  },
  setup(props, { emit }) {
    const { size } = toRefs(props);
    const prefixCls = getPrefixCls("tag");
    const isBuiltInColor = computed(() => props.color && TAG_COLORS.includes(props.color));
    const isCustomColor = computed(() => props.color && !TAG_COLORS.includes(props.color));
    const _visible = ref(props.defaultVisible);
    const _checked = ref(props.defaultChecked);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.visible) != null ? _a : _visible.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return props.checkable ? (_a = props.checked) != null ? _a : _checked.value : true;
    });
    const { mergedSize: _mergedSize } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "mini") {
        return "small";
      }
      return _mergedSize.value;
    });
    const handleClose = (ev) => {
      _visible.value = false;
      emit("update:visible", false);
      emit("close", ev);
    };
    const handleClick = (ev) => {
      if (props.checkable) {
        const newChecked = !computedChecked.value;
        _checked.value = newChecked;
        emit("update:checked", newChecked);
        emit("check", newChecked, ev);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-hide`]: !computedVisible.value,
        [`${prefixCls}-${props.color}`]: isBuiltInColor.value,
        [`${prefixCls}-bordered`]: props.bordered,
        [`${prefixCls}-checkable`]: props.checkable,
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-custom-color`]: isCustomColor.value
      }
    ]);
    const style = computed(() => {
      if (isCustomColor.value) {
        return {
          backgroundColor: props.color
        };
      }
      return void 0;
    });
    return {
      prefixCls,
      cls,
      style,
      computedVisible,
      computedChecked,
      handleClick,
      handleClose
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.computedVisible ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (openBlock(), createBlock(_component_icon_hover, {
      key: 1,
      role: "button",
      "aria-label": "Close",
      prefix: _ctx.prefixCls,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: withModifiers(_ctx.handleClose, ["stop"])
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "close-icon", {}, () => [
          createVNode(_component_icon_close)
        ])
      ]),
      _: 3
    }, 8, ["prefix", "class", "onClick"])) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-loading-icon`)
    }, [
      createVNode(_component_icon_loading)
    ], 2)) : createCommentVNode("v-if", true)
  ], 6)) : createCommentVNode("v-if", true);
}
var _Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Tag = Object.assign(_Tag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tag.name, _Tag);
  }
});
export {
  IconLoading as I,
  Tag as T,
  _export_sfc as _,
  isArray as a,
  isFunction as b,
  configProviderInjectionKey as c,
  isComponentInstance as d,
  isNumber as e,
  isUndefined as f,
  getPrefixCls as g,
  isNull as h,
  isString as i,
  isObject as j,
  IconHover as k,
  IconClose as l,
  getComponentPrefix as m,
  isBoolean as n,
  isEmptyObject as o,
  setGlobalConfig as s,
  useSize as u
};
