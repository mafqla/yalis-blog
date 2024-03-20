import { c as configProviderInjectionKey, i as isString, a as isArray, b as isFunction, d as isComponentInstance, g as getPrefixCls, e as isNumber, _ as _export_sfc, I as IconLoading, u as useSize$1, f as isUndefined, h as isNull, j as isObject, k as IconHover, l as IconClose, s as setGlobalConfig, m as getComponentPrefix, n as isBoolean, T as Tag, o as isEmptyObject } from "./index.tJQKWac5.js";
import { ref, reactive, inject, computed, cloneVNode, defineComponent, watch, onMounted, onUnmounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, resolveComponent, createBlock, createCommentVNode, toRef, toRefs, createVNode, mergeProps, createTextVNode, nextTick, renderSlot, provide, Fragment, createSlots, withCtx, withModifiers, onUpdated, onBeforeUnmount, readonly, onDeactivated, Teleport, Transition, withDirectives, vShow, resolveDynamicComponent, getCurrentInstance, toDisplayString, renderList, TransitionGroup, watchEffect, isVNode } from "vue";
const calendarLang = {
  formatYear: "YYYY 年",
  formatMonth: "YYYY 年 MM 月",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日"
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    }
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日"
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日"
    }
  }
};
const lang = {
  locale: "zh-CN",
  empty: {
    description: "暂无数据"
  },
  drawer: {
    okText: "确定",
    cancelText: "取消"
  },
  popconfirm: {
    okText: "确定",
    cancelText: "取消"
  },
  modal: {
    okText: "确定",
    cancelText: "取消"
  },
  pagination: {
    goto: "前往",
    page: "页",
    countPerPage: "条/页",
    total: "共 {0} 条"
  },
  table: {
    okText: "确定",
    resetText: "重置"
  },
  upload: {
    start: "开始",
    cancel: "取消",
    delete: "删除",
    retry: "点击重试",
    buttonText: "点击上传",
    preview: "预览",
    drag: "点击或拖拽文件到此处上传",
    dragHover: "释放文件并开始上传",
    error: "上传失败"
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: "请选择日期",
      week: "请选择周",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      time: "请选择时间"
    },
    rangePlaceholder: {
      date: ["开始日期", "结束日期"],
      week: ["开始周", "结束周"],
      month: ["开始月份", "结束月份"],
      year: ["开始年份", "结束年份"],
      quarter: ["开始季度", "结束季度"],
      time: ["开始时间", "结束时间"]
    },
    selectTime: "选择时间",
    today: "今天",
    now: "此刻",
    ok: "确定"
  },
  image: {
    loading: "加载中"
  },
  imagePreview: {
    fullScreen: "全屏",
    rotateRight: "向右旋转",
    rotateLeft: "向左旋转",
    zoomIn: "放大",
    zoomOut: "缩小",
    originalSize: "原始尺寸"
  },
  typography: {
    copied: "已复制",
    copy: "复制",
    expand: "展开",
    collapse: "折叠",
    edit: "编辑"
  },
  form: {
    validateMessages: {
      required: "#{field} 是必填项",
      type: {
        string: "#{field} 不是合法的文本类型",
        number: "#{field} 不是合法的数字类型",
        boolean: "#{field} 不是合法的布尔类型",
        array: "#{field} 不是合法的数组类型",
        object: "#{field} 不是合法的对象类型",
        url: "#{field} 不是合法的 url 地址",
        email: "#{field} 不是合法的邮箱地址",
        ip: "#{field} 不是合法的 IP 地址"
      },
      number: {
        min: "`#{value}` 小于最小值 `#{min}`",
        max: "`#{value}` 大于最大值 `#{max}`",
        equal: "`#{value}` 不等于 `#{equal}`",
        range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
        positive: "`#{value}` 不是正数",
        negative: "`#{value}` 不是负数"
      },
      array: {
        length: "`#{field}` 个数不等于 #{length}",
        minLength: "`#{field}` 个数最少为 #{minLength}",
        maxLength: "`#{field}` 个数最多为 #{maxLength}",
        includes: "#{field} 不包含 #{includes}",
        deepEqual: "#{field} 不等于 #{deepEqual}",
        empty: "`#{field}` 不是空数组"
      },
      string: {
        minLength: "字符数最少为 #{minLength}",
        maxLength: "字符数最多为 #{maxLength}",
        length: "字符数必须是 #{length}",
        match: "`#{value}` 不符合模式 #{pattern}",
        uppercase: "`#{value}` 必须全大写",
        lowercase: "`#{value}` 必须全小写"
      },
      object: {
        deepEqual: "`#{field}` 不等于期望值",
        hasKeys: "`#{field}` 不包含必须字段",
        empty: "`#{field}` 不是对象"
      },
      boolean: {
        true: "期望是 `true`",
        false: "期望是 `false`"
      }
    }
  }
};
const LOCALE = ref("zh-CN");
const I18N_MESSAGES = reactive({
  "zh-CN": lang
});
const useI18n = () => {
  const configProvider = inject(configProviderInjectionKey, void 0);
  const i18nMessage = computed(() => {
    var _a;
    return (_a = configProvider == null ? void 0 : configProvider.locale) != null ? _a : I18N_MESSAGES[LOCALE.value];
  });
  const locale = computed(() => i18nMessage.value.locale);
  const transform = (key, ...args) => {
    const keyArray = key.split(".");
    let temp = i18nMessage.value;
    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key;
      }
      temp = temp[keyItem];
    }
    if (isString(temp)) {
      if (args.length > 0) {
        return temp.replace(/{(\d+)}/g, (sub, index2) => {
          var _a;
          return (_a = args[index2]) != null ? _a : sub;
        });
      }
      return temp;
    }
    return temp;
  };
  return {
    i18nMessage,
    locale,
    t: transform
  };
};
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = (
  /** @class */
  function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }()
);
var defineConfigurable = function(target2, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target2, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target2;
};
var getWindowOf = function(target2) {
  var ownerGlobal = target2 && target2.ownerDocument && target2.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target2) {
  var bbox = target2.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target2) {
  var clientWidth = target2.clientWidth, clientHeight = target2.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target2).getComputedStyle(target2);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target2)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target2) {
      return target2 instanceof getWindowOf(target2).SVGGraphicsElement;
    };
  }
  return function(target2) {
    return target2 instanceof getWindowOf(target2).SVGElement && typeof target2.getBBox === "function";
  };
}();
function isDocumentElement(target2) {
  return target2 === getWindowOf(target2).document.documentElement;
}
function getContentRect(target2) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target2)) {
    return getSVGContentRect(target2);
  }
  return getHTMLElementContentRect(target2);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = (
  /** @class */
  function() {
    function ResizeObservation2(target2) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target2;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }()
);
var ResizeObserverEntry = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserverEntry2(target2, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target: target2, contentRect });
    }
    return ResizeObserverEntry2;
  }()
);
var ResizeObserverSPI = (
  /** @class */
  function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target2) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target2 instanceof getWindowOf(target2).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target2)) {
        return;
      }
      observations.set(target2, new ResizeObservation(target2));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target2) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target2 instanceof getWindowOf(target2).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target2)) {
        return;
      }
      observations.delete(target2);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }()
);
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver$2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserver2(callback) {
      if (!(this instanceof ResizeObserver2)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver2;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver$2.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index$1 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$2;
}();
var ShapeFlags;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(ShapeFlags || (ShapeFlags = {}));
var PatchFlags;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));
const isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
const isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
const isTextChildren = (child, children) => {
  return Boolean(child && child.shapeFlag & 8);
};
const isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
const isSlotsChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 32);
};
const getFirstComponent = (children) => {
  var _a, _b;
  if (!children) {
    return void 0;
  }
  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result)
        return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children2 = (_b = (_a = child.children).default) == null ? void 0 : _b.call(_a);
      if (children2) {
        const result = getFirstComponent(children2);
        if (result)
          return result;
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child);
      if (result)
        return result;
    }
  }
  return void 0;
};
const isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
const mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props = isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
const getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray(vn)) {
    return vn;
  }
  return void 0;
};
const getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
const getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
const getAllElements = (children, includeText = false) => {
  var _a, _b;
  const results = [];
  for (const item of children != null ? children : []) {
    if (isElement(item) || isComponent(item) || includeText && isTextChildren(item, item.children)) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements((_b = (_a = item.children).default) == null ? void 0 : _b.call(_a), includeText));
    } else if (isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};
var ResizeObserver$1 = defineComponent({
  name: "ResizeObserver",
  emits: [
    "resize"
  ],
  setup(props, {
    emit,
    slots
  }) {
    let resizeObserver;
    const componentRef = ref();
    const element = computed(() => isComponentInstance(componentRef.value) ? componentRef.value.$el : componentRef.value);
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index$1((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(element, (_element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (_element)
        createResizeObserver(_element);
    });
    onMounted(() => {
      if (element.value) {
        createResizeObserver(element.value);
      }
    });
    onUnmounted(() => {
      destroyResizeObserver();
    });
    return () => {
      var _a, _b;
      const firstChild = getFirstComponent((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : []);
      if (firstChild) {
        return cloneVNode(firstChild, {
          ref: componentRef
        }, true);
      }
      return null;
    };
  }
});
const target$1 = typeof window === "undefined" ? global : window;
const raf = target$1.requestAnimationFrame;
const caf = target$1.cancelAnimationFrame;
function throttleByRaf(cb) {
  let timer = 0;
  const throttle2 = (...args) => {
    if (timer) {
      caf(timer);
    }
    timer = raf(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle2.cancel = () => {
    caf(timer);
    timer = 0;
  };
  return throttle2;
}
const NOOP = () => {
  return void 0;
};
const getDocumentSize = () => {
  const { body } = document;
  const html = document.documentElement;
  let topBody;
  try {
    const topWindow = window.top || window.self || window;
    topBody = topWindow.document.body;
  } catch {
  }
  return {
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight, (topBody == null ? void 0 : topBody.scrollHeight) || 0, (topBody == null ? void 0 : topBody.clientHeight) || 0),
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth, (topBody == null ? void 0 : topBody.scrollWidth) || 0, (topBody == null ? void 0 : topBody.clientWidth) || 0)
  };
};
const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
})();
const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
  };
})();
const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, type, handler, options = false) => {
    element.removeEventListener(type, handler, options);
  };
})();
const querySelector = (selectors, container) => {
  var _a;
  if (isServerRendering) {
    return NOOP();
  }
  return (_a = (container != null ? container : document).querySelector(selectors)) != null ? _a : void 0;
};
const getElement = (target2, container) => {
  if (isString(target2)) {
    const selector = target2[0] === "#" ? `[id='${target2.slice(1)}']` : target2;
    return querySelector(selector, container);
  }
  return target2;
};
const getRelativeRect = (target2, relative) => {
  const targetRect = target2.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();
  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height
  };
};
const _sfc_main$y = defineComponent({
  name: "IconCheckCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-check-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$e = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$e
];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$d, 14, _hoisted_1$e);
}
var _IconCheckCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCheckCircleFill.name, _IconCheckCircleFill);
  }
});
const _sfc_main$x = defineComponent({
  name: "IconExclamationCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$d = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$d
];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$c, 14, _hoisted_1$d);
}
var _IconExclamationCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamationCircleFill.name, _IconExclamationCircleFill);
  }
});
const _sfc_main$w = defineComponent({
  name: "IconCloseCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-close-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$c = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$c
];
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$b, 14, _hoisted_1$c);
}
var _IconCloseCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});
const INPUT_EVENTS = [
  "onFocus",
  "onFocusin",
  "onFocusout",
  "onBlur",
  "onChange",
  "onBeforeinput",
  "onInput",
  "onReset",
  "onSubmit",
  "onInvalid",
  "onKeydown",
  "onKeypress",
  "onKeyup",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionstart",
  "onCompositionupdate",
  "onCompositionend",
  "onSelect",
  "autocomplete",
  "autofocus",
  "maxlength",
  "minlength",
  "name",
  "pattern",
  "readonly",
  "required"
];
const _sfc_main$v = defineComponent({
  name: "FeedbackIcon",
  components: {
    IconLoading,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  props: {
    type: {
      type: String
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("feedback-icon");
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-status-${props.type}`
    ]);
    return {
      cls
    };
  }
});
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.type === "validating" ? (openBlock(), createBlock(_component_icon_loading, { key: 0 })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : createCommentVNode("v-if", true)
  ], 2);
}
var FeedbackIcon = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const Enter = {
  key: "Enter",
  code: "Enter"
};
const Backspace = {
  key: "Backspace",
  code: "Backspace"
};
var __defProp$e = Object.defineProperty;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
const omit = (object, path) => {
  const result = __spreadValues$e({}, object);
  for (const item of path) {
    if (item in result) {
      delete result[item];
    }
  }
  return result;
};
function pick(obj, keys) {
  const clone = {};
  keys.forEach((key) => {
    const k = key;
    if (key in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}
const formItemInjectionKey = Symbol("ArcoFormItemContext");
const useFormItem = ({
  size,
  disabled,
  error,
  uninject
} = {}) => {
  const formItemCtx = !uninject ? inject(formItemInjectionKey, {}) : {};
  const mergedSize = computed(() => {
    var _a;
    return (_a = size == null ? void 0 : size.value) != null ? _a : formItemCtx.size;
  });
  const mergedDisabled = computed(() => (disabled == null ? void 0 : disabled.value) || formItemCtx.disabled);
  const mergedError = computed(() => (error == null ? void 0 : error.value) || formItemCtx.error);
  const feedback = toRef(formItemCtx, "feedback");
  const eventHandlers = toRef(formItemCtx, "eventHandlers");
  return {
    formItemCtx,
    mergedSize,
    mergedDisabled,
    mergedError,
    feedback,
    eventHandlers
  };
};
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (!input.value)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (!input.value || !selectionRef.value)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (!beforeTxt || !afterTxt || !selectionStart)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
var __defProp$d = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var _Input = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    },
    inputAttrs: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "input": (value, ev) => true,
    "change": (value, ev) => true,
    "pressEnter": (ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("input");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError: _mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const [recordCursor, setCursor] = useCursor(inputRef);
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = "";
      }
    });
    let preValue = computedValue.value;
    const focused = ref(false);
    const showClearBtn = computed(() => props.allowClear && !mergedDisabled.value && Boolean(computedValue.value));
    const isComposition = ref(false);
    const compositionValue = ref("");
    const getValueLength = (value) => {
      var _a;
      if (isFunction(props.wordLength)) {
        return props.wordLength(value);
      }
      return (_a = value.length) != null ? _a : 0;
    };
    const valueLength = computed(() => getValueLength(computedValue.value));
    const mergedError = computed(() => _mergedError.value || Boolean(isObject(props.maxLength) && props.maxLength.errorOnly && valueLength.value > maxLength.value));
    const maxLengthErrorOnly = computed(() => isObject(props.maxLength) && Boolean(props.maxLength.errorOnly));
    const maxLength = computed(() => {
      if (isObject(props.maxLength)) {
        return props.maxLength.length;
      }
      return props.maxLength;
    });
    const defaultMaxLength = computed(() => {
      const bytePerChar = getValueLength("a");
      return Math.floor(maxLength.value / bytePerChar);
    });
    const updateValue = (value) => {
      var _a, _b;
      if (maxLength.value && !maxLengthErrorOnly.value && getValueLength(value) > maxLength.value) {
        value = (_b = (_a = props.wordSlice) == null ? void 0 : _a.call(props, value, maxLength.value)) != null ? _b : value.slice(0, defaultMaxLength.value);
      }
      _value.value = value;
      emit("update:modelValue", value);
    };
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const emitChange = (value, ev) => {
      var _a, _b;
      if (value !== preValue) {
        preValue = value;
        emit("change", value, ev);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      focused.value = true;
      preValue = computedValue.value;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      focused.value = false;
      emitChange(computedValue.value, ev);
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleComposition = (e) => {
      var _a, _b, _c;
      const {
        value,
        selectionStart,
        selectionEnd
      } = e.target;
      if (e.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        if (maxLength.value && !maxLengthErrorOnly.value && valueLength.value >= maxLength.value && getValueLength(value) > maxLength.value && selectionStart === selectionEnd) {
          keepControl();
          return;
        }
        updateValue(value);
        emit("input", value, e);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e);
        keepControl();
      } else {
        isComposition.value = true;
        compositionValue.value = computedValue.value + ((_c = e.data) != null ? _c : "");
      }
    };
    const keepControl = () => {
      recordCursor();
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
          setCursor();
        }
      });
    };
    const handleInput = (e) => {
      var _a, _b;
      const {
        value
      } = e.target;
      if (!isComposition.value) {
        if (maxLength.value && !maxLengthErrorOnly.value && valueLength.value >= maxLength.value && getValueLength(value) > maxLength.value && e.inputType === "insertText") {
          keepControl();
          return;
        }
        updateValue(value);
        emit("input", value, e);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e);
        keepControl();
      }
    };
    const handleClear = (ev) => {
      updateValue("");
      emitChange("", ev);
      emit("clear", ev);
    };
    const handleKeyDown = (e) => {
      const keyCode = e.key || e.code;
      if (!isComposition.value && keyCode === Enter.key) {
        emitChange(computedValue.value, e);
        emit("pressEnter", e);
      }
    };
    const outerCls = computed(() => [`${prefixCls}-outer`, `${prefixCls}-outer-size-${mergedSize.value}`, {
      [`${prefixCls}-outer-has-suffix`]: Boolean(slots.suffix),
      [`${prefixCls}-outer-disabled`]: mergedDisabled.value
    }]);
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, {
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-focus`]: focused.value
    }]);
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const mergeInputAttrs = computed(() => {
      const attrs2 = __spreadValues$d(__spreadValues$d({}, inputAttrs.value), props.inputAttrs);
      if (mergedError.value) {
        attrs2["aria-invalid"] = true;
      }
      return attrs2;
    });
    const renderInput = (hasOuter) => {
      var _a;
      return createVNode("span", mergeProps({
        "class": wrapperCls.value,
        "onMousedown": handleMousedown
      }, !hasOuter ? wrapperAttrs.value : void 0), [slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode("input", mergeProps({
        "ref": inputRef,
        "class": cls.value,
        "value": computedValue.value,
        "type": props.type,
        "placeholder": props.placeholder,
        "readonly": props.readonly,
        "disabled": mergedDisabled.value,
        "onInput": handleInput,
        "onKeydown": handleKeyDown,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onCompositionstart": handleComposition,
        "onCompositionupdate": handleComposition,
        "onCompositionend": handleComposition
      }, mergeInputAttrs.value), null), showClearBtn.value && createVNode(IconHover, {
        "prefix": prefixCls,
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(props.maxLength) && props.showWordLimit || Boolean(feedback.value)) && createVNode("span", {
        "class": [`${prefixCls}-suffix`, {
          [`${prefixCls}-suffix-has-feedback`]: feedback.value
        }]
      }, [Boolean(props.maxLength) && props.showWordLimit && createVNode("span", {
        "class": `${prefixCls}-word-limit`
      }, [valueLength.value, createTextVNode("/"), maxLength.value]), (_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    const render = () => {
      if (slots.prepend || slots.append) {
        return createVNode("span", mergeProps({
          "class": outerCls.value
        }, wrapperAttrs.value), [slots.prepend && createVNode("span", {
          "class": `${prefixCls}-prepend`
        }, [slots.prepend()]), renderInput(true), slots.append && createVNode("span", {
          "class": `${prefixCls}-append`
        }, [slots.append()])]);
      }
      return renderInput();
    };
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$u = defineComponent({
  name: "IconSearch",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-search`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$b = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", { d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485" }, null, -1);
const _hoisted_3$a = [
  _hoisted_2$b
];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$a, 14, _hoisted_1$b);
}
var _IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
const IconSearch = Object.assign(_IconSearch, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconSearch.name, _IconSearch);
  }
});
const buttonGroupInjectionKey = Symbol("ArcoButtonGroup");
const _sfc_main$t = defineComponent({
  name: "Button",
  components: {
    IconLoading
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    href: String
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const { size, disabled } = toRefs(props);
    const prefixCls = getPrefixCls("btn");
    const groupContext = inject(buttonGroupInjectionKey, void 0);
    const _size = computed(() => {
      var _a;
      return (_a = size.value) != null ? _a : groupContext == null ? void 0 : groupContext.size;
    });
    const _disabled = computed(() => Boolean(disabled.value || (groupContext == null ? void 0 : groupContext.disabled)));
    const { mergedSize: _mergedSize, mergedDisabled } = useFormItem({
      size: _size,
      disabled: _disabled
    });
    const { mergedSize } = useSize$1(_mergedSize);
    const cls = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return [
        prefixCls,
        `${prefixCls}-${(_b = (_a = props.type) != null ? _a : groupContext == null ? void 0 : groupContext.type) != null ? _b : "secondary"}`,
        `${prefixCls}-shape-${(_d = (_c = props.shape) != null ? _c : groupContext == null ? void 0 : groupContext.shape) != null ? _d : "square"}`,
        `${prefixCls}-size-${mergedSize.value}`,
        `${prefixCls}-status-${(_f = (_e = props.status) != null ? _e : groupContext == null ? void 0 : groupContext.status) != null ? _f : "normal"}`,
        {
          [`${prefixCls}-long`]: props.long,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-disabled`]: mergedDisabled.value,
          [`${prefixCls}-link`]: isString(props.href)
        }
      ];
    });
    const handleClick = (ev) => {
      if (props.disabled || props.loading) {
        ev.preventDefault();
        return;
      }
      emit("click", ev);
    };
    return {
      prefixCls,
      cls,
      mergedDisabled,
      handleClick
    };
  }
});
const _hoisted_1$a = ["href"];
const _hoisted_2$a = ["type", "disabled"];
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.href ? (openBlock(), createElementBlock("a", {
    key: 0,
    class: normalizeClass([
      _ctx.cls,
      { [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default }
    ]),
    href: _ctx.mergedDisabled || _ctx.loading ? void 0 : _ctx.href,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
        key: 0,
        spin: "true"
      })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$a)) : (openBlock(), createElementBlock("button", {
    key: 1,
    class: normalizeClass([
      _ctx.cls,
      { [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default }
    ]),
    type: _ctx.htmlType,
    disabled: _ctx.mergedDisabled,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
        key: 0,
        spin: true
      })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_2$a));
}
var _Button = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
const _sfc_main$s = defineComponent({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const { type, size, status, disabled, shape } = toRefs(props);
    const prefixCls = getPrefixCls("btn-group");
    provide(buttonGroupInjectionKey, reactive({
      type,
      size,
      shape,
      status,
      disabled
    }));
    return {
      prefixCls
    };
  }
});
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
const Button = Object.assign(_Button, {
  Group: ButtonGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Button.name, _Button);
    app.component(componentPrefix + ButtonGroup.name, ButtonGroup);
  }
});
var InputSearch = defineComponent({
  name: "InputSearch",
  props: {
    searchButton: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonProps: {
      type: Object
    }
  },
  emits: {
    search: (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      size
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-search");
    const {
      mergedSize
    } = useSize$1(size);
    const inputRef = ref();
    const handleClick = (e) => {
      if (inputRef.value.inputRef) {
        emit("search", inputRef.value.inputRef.value, e);
      }
    };
    const renderSuffix = () => {
      var _a;
      return createVNode(Fragment, null, [props.loading ? createVNode(IconLoading, null, null) : createVNode(IconHover, {
        "onClick": handleClick
      }, {
        default: () => [createVNode(IconSearch, null, null)]
      }), (_a = slots.suffix) == null ? void 0 : _a.call(slots)]);
    };
    const renderButton = () => {
      var _a;
      let _slots = {};
      if (props.buttonText || slots["button-default"] || slots["button-icon"]) {
        _slots = {
          default: (_a = slots["button-default"]) != null ? _a : props.buttonText ? () => props.buttonText : void 0,
          icon: slots["button-icon"]
        };
      } else {
        _slots = {
          icon: () => createVNode(IconSearch, null, null)
        };
      }
      return createVNode(Button, mergeProps({
        "type": "primary",
        "class": `${prefixCls}-btn`,
        "disabled": props.disabled,
        "size": mergedSize.value,
        "loading": props.loading
      }, props.buttonProps, {
        "onClick": handleClick
      }), _slots);
    };
    const render = () => createVNode(_Input, {
      "ref": inputRef,
      "class": prefixCls,
      "size": mergedSize.value,
      "disabled": props.disabled
    }, {
      prepend: slots.prepend,
      prefix: slots.prefix,
      suffix: props.searchButton ? slots.suffix : renderSuffix,
      append: props.searchButton ? renderButton : slots.append
    });
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$r = defineComponent({
  name: "IconEye",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-eye`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$9 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createElementVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$9,
  _hoisted_3$9
];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4$2, 14, _hoisted_1$9);
}
var _IconEye = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
const IconEye = Object.assign(_IconEye, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEye.name, _IconEye);
  }
});
const _sfc_main$q = defineComponent({
  name: "IconEyeInvisible",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-eye-invisible`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$8 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", { d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14" }, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createElementVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$8,
  _hoisted_3$8
];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4$1, 14, _hoisted_1$8);
}
var _IconEyeInvisible = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
const IconEyeInvisible = Object.assign(_IconEyeInvisible, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEyeInvisible.name, _IconEyeInvisible);
  }
});
const _sfc_main$p = defineComponent({
  name: "InputPassword",
  components: {
    IconEye,
    IconEyeInvisible,
    AIconHover: IconHover,
    AInput: _Input
  },
  props: {
    invisibleButton: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const inputRef = ref();
    const invisible = ref(true);
    const handleInvisible = () => {
      invisible.value = !invisible.value;
    };
    return {
      inputRef,
      invisible,
      handleInvisible
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_eye = resolveComponent("icon-eye");
  const _component_icon_eye_invisible = resolveComponent("icon-eye-invisible");
  const _component_a_icon_hover = resolveComponent("a-icon-hover");
  const _component_a_input = resolveComponent("a-input");
  return openBlock(), createBlock(_component_a_input, {
    ref: "inputRef",
    type: _ctx.invisible ? "password" : "text"
  }, createSlots({ _: 2 }, [
    _ctx.$slots.prepend ? {
      name: "prepend",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prepend")
      ])
    } : void 0,
    _ctx.$slots.prefix ? {
      name: "prefix",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prefix")
      ])
    } : void 0,
    _ctx.invisibleButton || _ctx.$slots.suffix ? {
      name: "suffix",
      fn: withCtx(() => [
        _ctx.invisibleButton ? (openBlock(), createBlock(_component_a_icon_hover, {
          key: 0,
          onClick: _ctx.handleInvisible,
          onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onMouseup: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"]))
        }, {
          default: withCtx(() => [
            !_ctx.invisible ? (openBlock(), createBlock(_component_icon_eye, { key: 0 })) : (openBlock(), createBlock(_component_icon_eye_invisible, { key: 1 }))
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "suffix")
      ])
    } : void 0,
    _ctx.$slots.append ? {
      name: "append",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "append")
      ])
    } : void 0
  ]), 1032, ["type"]);
}
var InputPassword = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
const _sfc_main$o = defineComponent({
  name: "InputGroup",
  setup() {
    const prefixCls = getPrefixCls("input-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var InputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const Input = Object.assign(_Input, {
  Search: InputSearch,
  Password: InputPassword,
  Group: InputGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Input.name, _Input);
    app.component(componentPrefix + InputGroup.name, InputGroup);
    app.component(componentPrefix + InputSearch.name, InputSearch);
    app.component(componentPrefix + InputPassword.name, InputPassword);
  }
});
var __defProp$c = Object.defineProperty;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
const getViewPortSize = () => {
  const { height, width } = getDocumentSize();
  return {
    width: Math.min(width, window.innerWidth),
    height: Math.min(height, window.innerHeight)
  };
};
const getElementScrollRect = (element, containerRect) => {
  var _a, _b;
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: (_a = element.offsetWidth) != null ? _a : element.clientWidth,
    height: (_b = element.offsetHeight) != null ? _b : element.clientHeight
  };
};
const getBoundaryPosition = (position) => {
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
};
const changePosition = (position, direction) => {
  switch (direction) {
    case "top":
      switch (position) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return position;
      }
    case "bottom":
      switch (position) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return position;
      }
    case "left":
      switch (position) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return position;
      }
    case "right":
      switch (position) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return position;
      }
    default:
      return position;
  }
};
const getFitPosition = (position, popupPosition, {
  containerRect,
  triggerRect,
  popupRect,
  offset,
  translate
}) => {
  const direction = getBoundaryPosition(position);
  const viewPortSize = getViewPortSize();
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    bottom: viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    right: viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width)
  };
  let finalPosition = position;
  if (direction === "top" && viewPortBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      popupPosition.top = -containerRect.top;
    } else {
      const fitPosition = getPopupOffset("bottom", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        finalPosition = changePosition(position, "bottom");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "bottom" && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - triggerRect.bottom > popupRect.height) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    } else {
      const fitPosition = getPopupOffset("top", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, "top");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "left" && viewPortBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      popupPosition.left = -containerRect.left;
    } else {
      const fitPosition = getPopupOffset("right", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        finalPosition = changePosition(position, "right");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "right" && viewPortBoundary.right < 0) {
    if (viewPortSize.width - triggerRect.right > popupRect.width) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    } else {
      const fitPosition = getPopupOffset("left", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, "left");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "top" || direction === "bottom") {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left;
    } else if (viewPortBoundary.right < 0) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    }
  }
  if (direction === "left" || direction === "right") {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top;
    } else if (viewPortBoundary.bottom < 0) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    }
  }
  return {
    popupPosition,
    position: finalPosition
  };
};
const getPopupOffset = (position, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0]
} = {}) => {
  var _a;
  const _translate = (_a = isArray(translate) ? translate : translate[position]) != null ? _a : [0, 0];
  switch (position) {
    case "top":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tr":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "bottom":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "bl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "br":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "left":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "lt":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "lb":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    case "right":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "rt":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "rb":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
};
const getTransformOrigin = (position) => {
  let originX = "0";
  if (["top", "bottom"].includes(position)) {
    originX = "50%";
  } else if (["left", "lt", "lb", "tr", "br"].includes(position)) {
    originX = "100%";
  }
  let originY = "0";
  if (["left", "right"].includes(position)) {
    originY = "50%";
  } else if (["top", "tl", "tr", "lt", "rt"].includes(position)) {
    originY = "100%";
  }
  return `${originX} ${originY}`;
};
const getPopupStyle = (position, containerRect, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0],
  customStyle = {},
  autoFitPosition = false
} = {}) => {
  let finalPosition = position;
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate
  });
  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      popupRect,
      triggerRect,
      offset,
      translate
    });
    popupPosition = result.popupPosition;
    finalPosition = result.position;
  }
  const style = __spreadValues$c({
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`
  }, customStyle);
  return {
    style,
    position: finalPosition
  };
};
const getArrowStyle = (position, triggerRect, popupRect, {
  customStyle = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position)) {
    let offsetLeft = Math.abs(triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft);
    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width) {
        offsetLeft = popupRect.width / 2;
      } else {
        offsetLeft = popupRect.width - 8;
      }
    }
    if (["top", "tl", "tr"].includes(position)) {
      return __spreadValues$c({
        left: `${offsetLeft}px`,
        bottom: "0",
        transform: "translate(-50%,50%) rotate(45deg)"
      }, customStyle);
    }
    return __spreadValues$c({
      left: `${offsetLeft}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  let offsetTop = Math.abs(triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop);
  if (offsetTop > popupRect.height - 8) {
    if (triggerRect.height > popupRect.height) {
      offsetTop = popupRect.height / 2;
    } else {
      offsetTop = popupRect.height - 8;
    }
  }
  if (["left", "lt", "lb"].includes(position)) {
    return __spreadValues$c({
      top: `${offsetTop}px`,
      right: "0",
      transform: "translate(50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  return __spreadValues$c({
    top: `${offsetTop}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, customStyle);
};
const isScrollElement = (element) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};
const getScrollElements = (container) => {
  var _a;
  const scrollElements = [];
  let element = container;
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = (_a = element.parentElement) != null ? _a : void 0;
  }
  return scrollElements;
};
const useFirstElement = () => {
  const children = {};
  const firstElement = ref();
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);
    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };
  onMounted(() => getFirstElement());
  onUpdated(() => getFirstElement());
  return {
    children,
    firstElement
  };
};
var ResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: [
    "resize"
  ],
  setup(props, { emit, slots }) {
    const { children, firstElement } = useFirstElement();
    let resizeObserver;
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index$1((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(firstElement, (element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (element) {
        createResizeObserver(element);
      }
    });
    onBeforeUnmount(() => {
      if (resizeObserver)
        destroyResizeObserver();
    });
    return () => {
      var _a;
      children.value = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return children.value;
    };
  }
});
function usePickSlots(slots, slotName) {
  const slot = ref(slots[slotName]);
  onUpdated(() => {
    const newSlot = slots[slotName];
    if (slot.value !== newSlot) {
      slot.value = newSlot;
    }
  });
  return slot;
}
const triggerInjectionKey = Symbol("ArcoTrigger");
const POPUP_BASE_Z_INDEX = 1e3;
const MESSAGE_BASE_Z_INDEX = 5e3;
const Z_INDEX_STEP = 1;
class PopupManager {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    };
    this.getNextZIndex = (type) => {
      const current = type === "message" ? Array.from(this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
      return current + Z_INDEX_STEP;
    };
    this.add = (type) => {
      const zIndex = this.getNextZIndex(type);
      this.popupStack[type].add(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.add(zIndex);
      }
      return zIndex;
    };
    this.delete = (zIndex, type) => {
      this.popupStack[type].delete(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.delete(zIndex);
      }
    };
    this.isLastDialog = (zIndex) => {
      if (this.popupStack.dialog.size > 1) {
        return zIndex === Array.from(this.popupStack.dialog).pop();
      }
      return true;
    };
  }
}
const popupManager = new PopupManager();
function usePopupManager(type, {
  visible,
  runOnMounted
} = {}) {
  const zIndex = ref(0);
  const open = () => {
    zIndex.value = popupManager.add(type);
  };
  const close = () => {
    popupManager.delete(zIndex.value, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return popupManager.isLastDialog(zIndex.value);
    }
    return false;
  };
  watch(() => visible == null ? void 0 : visible.value, (visible2) => {
    if (visible2) {
      open();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    onMounted(() => {
      open();
    });
    onBeforeUnmount(() => {
      close();
    });
  }
  return {
    zIndex: readonly(zIndex),
    open,
    close,
    isLastDialog
  };
}
const useResizeObserver = ({
  elementRef,
  onResize
}) => {
  let resizeObserver;
  const createResizeObserver = () => {
    if (!elementRef.value)
      return;
    resizeObserver = new index$1((entries) => {
      const entry = entries[0];
      isFunction(onResize) && onResize(entry);
    });
    resizeObserver.observe(elementRef.value);
  };
  const destroyResizeObserver = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  };
  return {
    createResizeObserver,
    destroyResizeObserver
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, {
    slots
  }) {
    const mounted = ref(false);
    onMounted(() => mounted.value = true);
    return () => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      return null;
    };
  }
});
const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = "body",
  documentContainer
}) => {
  const teleportContainer = ref(popupContainer.value);
  const containerRef = ref();
  const getContainer = () => {
    const element = getElement(popupContainer.value);
    const _teleportContainer = element ? popupContainer.value : defaultContainer;
    const _containerElement = element != null ? element : documentContainer ? document.documentElement : getElement(defaultContainer);
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer;
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement;
    }
  };
  onMounted(() => getContainer());
  watch(visible, (visible2) => {
    if (teleportContainer.value !== popupContainer.value && visible2) {
      getContainer();
    }
  });
  return {
    teleportContainer,
    containerRef
  };
};
var __defProp$b = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
const TRIGGER_EVENTS = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var _Trigger = defineComponent({
  name: "Trigger",
  inheritAttrs: false,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    alignPoint: {
      type: Boolean,
      default: false
    },
    popupHoverStay: {
      type: Boolean,
      default: true
    },
    blurToClose: {
      type: Boolean,
      default: true
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    unmountOnClose: {
      type: Boolean,
      default: true
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: false
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: false
    },
    autoFixPosition: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: false
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: false
    },
    hideEmpty: {
      type: Boolean,
      default: false
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    preventFocus: {
      type: Boolean,
      default: false
    },
    scrollToClose: {
      type: Boolean,
      default: false
    },
    scrollToCloseDistance: {
      type: Number,
      default: 0
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true,
    "show": () => true,
    "hide": () => true,
    "resize": () => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      popupContainer
    } = toRefs(props);
    const prefixCls = getPrefixCls("trigger");
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS));
    const configCtx = inject(configProviderInjectionKey, void 0);
    const triggerMethods = computed(() => [].concat(props.trigger));
    const childrenRefs = /* @__PURE__ */ new Set();
    const triggerCtx = inject(triggerInjectionKey, void 0);
    const {
      children,
      firstElement
    } = useFirstElement();
    const popupRef = ref();
    const popupVisible = ref(props.defaultPopupVisible);
    const popupPosition = ref(props.position);
    const popupStyle = ref({});
    const transformStyle = ref({});
    const arrowStyle = ref({});
    const arrowRef = ref();
    const mousePosition = ref({
      top: 0,
      left: 0
    });
    let scrollPosition = null;
    let windowScrollPosition = null;
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : popupVisible.value;
    });
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true
    });
    const {
      zIndex
    } = usePopupManager("popup", {
      visible: computedVisible
    });
    let delayTimer = 0;
    let outsideListener = false;
    let windowListener = false;
    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = 0;
      }
    };
    const updateMousePosition = (e) => {
      if (props.alignPoint) {
        const {
          pageX,
          pageY
        } = e;
        mousePosition.value = {
          top: pageY,
          left: pageX
        };
      }
    };
    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return;
      }
      const containerRect = containerRef.value.getBoundingClientRect();
      const triggerRect = props.alignPoint ? {
        top: mousePosition.value.top,
        bottom: mousePosition.value.top,
        left: mousePosition.value.left,
        right: mousePosition.value.left,
        scrollTop: mousePosition.value.top,
        scrollBottom: mousePosition.value.top,
        scrollLeft: mousePosition.value.left,
        scrollRight: mousePosition.value.left,
        width: 0,
        height: 0
      } : getElementScrollRect(firstElement.value, containerRect);
      const getPopupRect = () => getElementScrollRect(popupRef.value, containerRect);
      const popupRect = getPopupRect();
      const {
        style,
        position
      } = getPopupStyle(props.position, containerRect, triggerRect, popupRect, {
        offset: props.popupOffset,
        translate: props.popupTranslate,
        customStyle: props.popupStyle,
        autoFitPosition: props.autoFitPosition
      });
      if (props.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position)
        };
      }
      if (props.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`;
      } else if (props.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`;
      }
      if (popupPosition.value !== position) {
        popupPosition.value = position;
      }
      popupStyle.value = style;
      if (props.showArrow) {
        nextTick(() => {
          arrowStyle.value = getArrowStyle(position, triggerRect, getPopupRect(), {
            customStyle: props.arrowStyle
          });
        });
      }
    };
    const changeVisible = (visible, delay) => {
      if (visible === computedVisible.value && delayTimer === 0) {
        return;
      }
      const update = () => {
        popupVisible.value = visible;
        emit("update:popupVisible", visible);
        emit("popupVisibleChange", visible);
        if (visible) {
          nextTick(() => {
            updatePopupStyle();
          });
        }
      };
      if (!visible) {
        scrollPosition = null;
        windowScrollPosition = null;
      }
      if (delay) {
        cleanDelayTimer();
        if (visible !== computedVisible.value) {
          delayTimer = window.setTimeout(update, delay);
        }
      } else {
        update();
      }
    };
    const handleClick = (e) => {
      var _a;
      (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || computedVisible.value && !props.clickToClose) {
        return;
      }
      if (triggerMethods.value.includes("click")) {
        updateMousePosition(e);
        changeVisible(!computedVisible.value);
      } else if (triggerMethods.value.includes("contextMenu") && computedVisible.value) {
        changeVisible(false);
      }
    };
    const handleMouseEnter = (e) => {
      var _a;
      (_a = attrs.onMouseenter) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      updateMousePosition(e);
      changeVisible(true, props.mouseEnterDelay);
    };
    const handleMouseEnterWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseenter(e);
      handleMouseEnter(e);
    };
    const handleMouseLeave = (e) => {
      var _a;
      (_a = attrs.onMouseleave) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      changeVisible(false, props.mouseLeaveDelay);
    };
    const handleMouseLeaveWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseleave(e);
      handleMouseLeave(e);
    };
    const handleFocusin = (e) => {
      var _a;
      (_a = attrs.onFocusin) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      changeVisible(true, props.focusDelay);
    };
    const handleFocusout = (e) => {
      var _a;
      (_a = attrs.onFocusout) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      if (!props.blurToClose) {
        return;
      }
      changeVisible(false);
    };
    const handleContextmenu = (e) => {
      var _a;
      (_a = attrs.onContextmenu) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("contextMenu") || computedVisible.value && !props.clickToClose) {
        return;
      }
      updateMousePosition(e);
      changeVisible(!computedVisible.value);
      e.preventDefault();
    };
    const addChildRef = (ref2) => {
      childrenRefs.add(ref2);
      triggerCtx == null ? void 0 : triggerCtx.addChildRef(ref2);
    };
    const removeChildRef = (ref2) => {
      childrenRefs.delete(ref2);
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(ref2);
    };
    provide(triggerInjectionKey, reactive({
      onMouseenter: handleMouseEnterWithContext,
      onMouseleave: handleMouseLeaveWithContext,
      addChildRef,
      removeChildRef
    }));
    const removeOutsideListener = () => {
      off(document.documentElement, "mousedown", handleOutsideClick);
      outsideListener = false;
    };
    const contentSlot = usePickSlots(slots, "content");
    const hidePopup = computed(() => {
      var _a;
      return props.hideEmpty && isEmptyChildren((_a = contentSlot.value) == null ? void 0 : _a.call(contentSlot));
    });
    const handleOutsideClick = (e) => {
      var _a, _b, _c;
      if (((_a = firstElement.value) == null ? void 0 : _a.contains(e.target)) || ((_b = popupRef.value) == null ? void 0 : _b.contains(e.target))) {
        return;
      }
      for (const item of childrenRefs) {
        if ((_c = item.value) == null ? void 0 : _c.contains(e.target)) {
          return;
        }
      }
      removeOutsideListener();
      changeVisible(false);
    };
    const isExceedThreshold = (oldPosition, element) => {
      const [scrollTop, scrollLeft] = oldPosition;
      const {
        scrollTop: newScrollTop,
        scrollLeft: newScrollLeft
      } = element;
      return Math.abs(newScrollTop - scrollTop) >= props.scrollToCloseDistance || Math.abs(newScrollLeft - scrollLeft) >= props.scrollToCloseDistance;
    };
    const handleScroll = throttleByRaf((e) => {
      if (computedVisible.value) {
        if (props.scrollToClose || (configCtx == null ? void 0 : configCtx.scrollToClose)) {
          const element = e.target;
          if (!scrollPosition) {
            scrollPosition = [element.scrollTop, element.scrollLeft];
          }
          if (isExceedThreshold(scrollPosition, element)) {
            changeVisible(false);
          } else {
            updatePopupStyle();
          }
        } else {
          updatePopupStyle();
        }
      }
    });
    const removeWindowScroll = () => {
      off(window, "scroll", onWindowScroll);
      windowListener = false;
    };
    const onWindowScroll = throttleByRaf((e) => {
      const element = e.target.documentElement;
      if (!windowScrollPosition) {
        windowScrollPosition = [element.scrollTop, element.scrollLeft];
      }
      if (isExceedThreshold(windowScrollPosition, element)) {
        changeVisible(false);
        removeWindowScroll();
      }
    });
    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    };
    const onTargetResize = () => {
      handleResize();
      emit("resize");
    };
    const handlePopupMouseDown = (e) => {
      if (props.preventFocus) {
        e.preventDefault();
      }
    };
    triggerCtx == null ? void 0 : triggerCtx.addChildRef(popupRef);
    const triggerCls = computed(() => {
      return computedVisible.value ? props.openedClass : void 0;
    });
    let scrollElements;
    watch(computedVisible, (value) => {
      if (props.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        } else if (value && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
      }
      if (props.scrollToClose || (configCtx == null ? void 0 : configCtx.scrollToClose)) {
        on(window, "scroll", onWindowScroll);
        windowListener = true;
      }
      if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        } else if (scrollElements) {
          for (const item of scrollElements) {
            item.removeEventListener("scroll", handleScroll);
          }
          scrollElements = void 0;
        }
      }
      if (value) {
        mounted.value = true;
      }
    });
    watch(() => [props.autoFitPopupWidth, props.autoFitPopupMinWidth], () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const {
      createResizeObserver,
      destroyResizeObserver
    } = useResizeObserver({
      elementRef: containerRef,
      onResize: handleResize
    });
    onMounted(() => {
      createResizeObserver();
      if (computedVisible.value) {
        updatePopupStyle();
        if (props.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
        if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        }
      }
    });
    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    onDeactivated(() => {
      changeVisible(false);
    });
    onBeforeUnmount(() => {
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(popupRef);
      destroyResizeObserver();
      if (outsideListener) {
        removeOutsideListener();
      }
      if (windowListener) {
        removeWindowScroll();
      }
      if (scrollElements) {
        for (const item of scrollElements) {
          item.removeEventListener("scroll", handleScroll);
        }
        scrollElements = void 0;
      }
    });
    const mounted = ref(computedVisible.value);
    const isAnimation = ref(false);
    const onAnimationStart = () => {
      isAnimation.value = true;
    };
    const handleShow = () => {
      isAnimation.value = false;
      if (computedVisible.value) {
        emit("show");
      }
    };
    const handleHide = () => {
      isAnimation.value = false;
      if (!computedVisible.value) {
        mounted.value = false;
        emit("hide");
      }
    };
    return () => {
      var _a, _b;
      children.value = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      mergeFirstChild(children.value, {
        class: triggerCls.value,
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu
      });
      return createVNode(Fragment, null, [props.autoFixPosition ? createVNode(ResizeObserver, {
        "onResize": onTargetResize
      }, {
        default: () => [children.value]
      }) : children.value, createVNode(ClientOnly, null, {
        default: () => [createVNode(Teleport, {
          "to": teleportContainer.value,
          "disabled": !props.renderToBody
        }, {
          default: () => [(!props.unmountOnClose || computedVisible.value || mounted.value) && !hidePopup.value && createVNode(ResizeObserver, {
            "onResize": handleResize
          }, {
            default: () => [createVNode("div", mergeProps({
              "ref": popupRef,
              "class": [`${prefixCls}-popup`, `${prefixCls}-position-${popupPosition.value}`],
              "style": __spreadProps$5(__spreadValues$b({}, popupStyle.value), {
                zIndex: zIndex.value,
                pointerEvents: isAnimation.value ? "none" : "auto"
              }),
              "trigger-placement": popupPosition.value,
              "onMouseenter": handleMouseEnterWithContext,
              "onMouseleave": handleMouseLeaveWithContext,
              "onMousedown": handlePopupMouseDown
            }, popupAttrs.value), [createVNode(Transition, {
              "name": props.animationName,
              "duration": props.duration,
              "appear": true,
              "onBeforeEnter": onAnimationStart,
              "onAfterEnter": handleShow,
              "onBeforeLeave": onAnimationStart,
              "onAfterLeave": handleHide
            }, {
              default: () => {
                var _a2;
                return [withDirectives(createVNode("div", {
                  "class": `${prefixCls}-popup-wrapper`,
                  "style": transformStyle.value
                }, [createVNode("div", {
                  "class": [`${prefixCls}-content`, props.contentClass],
                  "style": props.contentStyle
                }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), props.showArrow && createVNode("div", {
                  "ref": arrowRef,
                  "class": [`${prefixCls}-arrow`, props.arrowClass],
                  "style": arrowStyle.value
                }, null)]), [[vShow, computedVisible.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Trigger = Object.assign(_Trigger, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Trigger.name, _Trigger);
  }
});
const _sfc_main$n = defineComponent({
  name: "IconEmpty",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-empty`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$7 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", { d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$7, 14, _hoisted_1$7);
}
var _IconEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
const IconEmpty = Object.assign(_IconEmpty, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEmpty.name, _IconEmpty);
  }
});
var Empty$1 = defineComponent({
  name: "Empty",
  props: {
    description: String,
    imgSrc: String,
    inConfigProvider: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("empty");
    const {
      t
    } = useI18n();
    const configCtx = inject(configProviderInjectionKey, void 0);
    return () => {
      var _a, _b, _c, _d;
      if (!props.inConfigProvider && (configCtx == null ? void 0 : configCtx.slots.empty) && !(slots.image || props.imgSrc || props.description)) {
        return configCtx.slots.empty({
          component: "empty"
        });
      }
      return createVNode("div", {
        "class": prefixCls
      }, [createVNode("div", {
        "class": `${prefixCls}-image`
      }, [(_b = (_a = slots.image) == null ? void 0 : _a.call(slots)) != null ? _b : props.imgSrc ? createVNode("img", {
        "src": props.imgSrc,
        "alt": props.description || "empty"
      }, null) : createVNode(IconEmpty, null, null)]), createVNode("div", {
        "class": `${prefixCls}-description`
      }, [(_d = (_c = slots.default) == null ? void 0 : _c.call(slots)) != null ? _d : props.description || t("empty.description")])]);
    };
  }
});
const Empty = Object.assign(Empty$1, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + Empty$1.name, Empty$1);
  }
});
const DOT_NUMBER = 5;
var DotLoading = defineComponent({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("dot-loading");
    return () => {
      const style = props.size ? {
        width: `${props.size}px`,
        height: `${props.size}px`
      } : {};
      return createVNode("div", {
        "class": prefixCls,
        "style": {
          width: props.size ? `${props.size * 7}px` : void 0,
          height: props.size ? `${props.size}px` : void 0
        }
      }, [Array(DOT_NUMBER).fill(1).map((_, index2) => createVNode("div", {
        "class": `${prefixCls}-item`,
        "key": index2,
        "style": style
      }, null))]);
    };
  }
});
var _Spin = defineComponent({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String,
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("spin");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-loading`]: props.loading,
      [`${prefixCls}-with-tip`]: props.tip && !slots.default
    }]);
    const renderIcon = () => {
      if (slots.icon) {
        const iconVNode = getFirstComponent(slots.icon());
        if (iconVNode) {
          return cloneVNode(iconVNode, {
            spin: true
          });
        }
      }
      if (slots.element) {
        return slots.element();
      }
      if (props.dot) {
        return createVNode(DotLoading, {
          "size": props.size
        }, null);
      }
      if (configCtx == null ? void 0 : configCtx.slots.loading) {
        return configCtx.slots.loading();
      }
      return createVNode(IconLoading, {
        "spin": true,
        "size": props.size
      }, null);
    };
    const renderSpinIcon = () => {
      var _a, _b, _c;
      const style = props.size ? {
        fontSize: `${props.size}px`
      } : void 0;
      const hasTip = Boolean((_a = slots.tip) != null ? _a : props.tip);
      return createVNode(Fragment, null, [!props.hideIcon && createVNode("div", {
        "class": `${prefixCls}-icon`,
        "style": style
      }, [renderIcon()]), hasTip && createVNode("div", {
        "class": `${prefixCls}-tip`
      }, [(_c = (_b = slots.tip) == null ? void 0 : _b.call(slots)) != null ? _c : props.tip])]);
    };
    return () => createVNode("div", {
      "class": cls.value
    }, [slots.default ? createVNode(Fragment, null, [slots.default(), props.loading && createVNode("div", {
      "class": `${prefixCls}-mask`
    }, [createVNode("div", {
      "class": `${prefixCls}-mask-icon`
    }, [renderSpinIcon()])])]) : renderSpinIcon()]);
  }
});
const Spin = Object.assign(_Spin, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Spin.name, _Spin);
  }
});
const _sfc_main$m = defineComponent({
  name: "Thumb",
  props: {
    data: {
      type: Object
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    alwaysShow: {
      type: Boolean,
      default: false
    },
    both: {
      type: Boolean,
      default: false
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("scrollbar");
    const visible = ref(false);
    const trackRef = ref();
    const thumbRef = ref();
    const thumbMap = computed(() => {
      if (props.direction === "horizontal") {
        return {
          size: "width",
          direction: "left",
          offset: "offsetWidth",
          client: "clientX"
        };
      }
      return {
        size: "height",
        direction: "top",
        offset: "offsetHeight",
        client: "clientY"
      };
    });
    const offset = ref(0);
    const isDragging = ref(false);
    const mouseOffset = ref(0);
    const thumbStyle = computed(() => {
      var _a, _b;
      return {
        [thumbMap.value.size]: `${(_b = (_a = props.data) == null ? void 0 : _a.thumbSize) != null ? _b : 0}px`,
        [thumbMap.value.direction]: `${offset.value}px`
      };
    });
    const handleThumbMouseDown = (ev) => {
      ev.preventDefault();
      if (thumbRef.value) {
        mouseOffset.value = ev[thumbMap.value.client] - thumbRef.value.getBoundingClientRect()[thumbMap.value.direction];
        isDragging.value = true;
        on(window, "mousemove", handleMouseMove);
        on(window, "mouseup", handleMouseUp);
        on(window, "contextmenu", handleMouseUp);
      }
    };
    const handleTrackClick = (ev) => {
      var _a, _b, _c, _d;
      ev.preventDefault();
      if (thumbRef.value) {
        const _offset = getLegalOffset(ev[thumbMap.value.client] > thumbRef.value.getBoundingClientRect()[thumbMap.value.direction] ? offset.value + ((_b = (_a = props.data) == null ? void 0 : _a.thumbSize) != null ? _b : 0) : offset.value - ((_d = (_c = props.data) == null ? void 0 : _c.thumbSize) != null ? _d : 0));
        if (_offset !== offset.value) {
          offset.value = _offset;
          emit("scroll", _offset);
        }
      }
    };
    const getLegalOffset = (offset2) => {
      if (offset2 < 0) {
        return 0;
      }
      if (props.data && offset2 > props.data.max) {
        return props.data.max;
      }
      return offset2;
    };
    const handleMouseMove = (ev) => {
      if (trackRef.value && thumbRef.value) {
        const _offset = getLegalOffset(ev[thumbMap.value.client] - trackRef.value.getBoundingClientRect()[thumbMap.value.direction] - mouseOffset.value);
        if (_offset !== offset.value) {
          offset.value = _offset;
          emit("scroll", _offset);
        }
      }
    };
    const handleMouseUp = () => {
      isDragging.value = false;
      off(window, "mousemove", handleMouseMove);
      off(window, "mouseup", handleMouseUp);
    };
    const setOffset = (_offset) => {
      if (!isDragging.value) {
        _offset = getLegalOffset(_offset);
        if (_offset !== offset.value) {
          offset.value = _offset;
        }
      }
    };
    const thumbCls = computed(() => [
      `${prefixCls}-thumb`,
      `${prefixCls}-thumb-direction-${props.direction}`,
      {
        [`${prefixCls}-thumb-dragging`]: isDragging.value
      }
    ]);
    return {
      visible,
      trackRef,
      thumbRef,
      prefixCls,
      thumbCls,
      thumbStyle,
      handleThumbMouseDown,
      handleTrackClick,
      setOffset
    };
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, null, {
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "trackRef",
        class: normalizeClass([
          `${_ctx.prefixCls}-track`,
          `${_ctx.prefixCls}-track-direction-${_ctx.direction}`
        ]),
        onMousedown: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleTrackClick && _ctx.handleTrackClick(...args), ["self"]))
      }, [
        createElementVNode("div", {
          ref: "thumbRef",
          class: normalizeClass(_ctx.thumbCls),
          style: normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.handleThumbMouseDown && _ctx.handleThumbMouseDown(...args))
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}-thumb-bar`)
          }, null, 2)
        ], 38)
      ], 34)
    ]),
    _: 1
  });
}
var Thumb = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const THUMB_MIN_SIZE = 20;
const TRACK_SIZE = 15;
const _sfc_main$l = defineComponent({
  name: "Scrollbar",
  components: {
    ResizeObserver,
    Thumb
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "embed"
    },
    outerClass: [String, Object, Array],
    outerStyle: {
      type: [String, Object, Array]
    },
    hide: {
      type: Boolean,
      default: false
    },
    disableHorizontal: {
      type: Boolean,
      default: false
    },
    disableVertical: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    scroll: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("scrollbar");
    const containerRef = ref();
    const horizontalData = ref();
    const verticalData = ref();
    const horizontalThumbRef = ref();
    const verticalThumbRef = ref();
    const _hasHorizontalScrollbar = ref(false);
    const _hasVerticalScrollbar = ref(false);
    const hasHorizontalScrollbar = computed(() => _hasHorizontalScrollbar.value && !props.disableHorizontal);
    const hasVerticalScrollbar = computed(() => _hasVerticalScrollbar.value && !props.disableVertical);
    const isBoth = ref(false);
    const getContainerSize = () => {
      var _a, _b, _c, _d, _e, _f;
      if (containerRef.value) {
        const {
          clientWidth,
          clientHeight,
          offsetWidth,
          offsetHeight,
          scrollWidth,
          scrollHeight,
          scrollTop,
          scrollLeft
        } = containerRef.value;
        _hasHorizontalScrollbar.value = scrollWidth > clientWidth;
        _hasVerticalScrollbar.value = scrollHeight > clientHeight;
        isBoth.value = hasHorizontalScrollbar.value && hasVerticalScrollbar.value;
        const horizontalTrackWidth = props.type === "embed" && isBoth.value ? offsetWidth - TRACK_SIZE : offsetWidth;
        const verticalTrackHeight = props.type === "embed" && isBoth.value ? offsetHeight - TRACK_SIZE : offsetHeight;
        const horizontalThumbWidth = Math.round(horizontalTrackWidth / Math.min(scrollWidth / clientWidth, horizontalTrackWidth / THUMB_MIN_SIZE));
        const maxHorizontalOffset = horizontalTrackWidth - horizontalThumbWidth;
        const horizontalRatio = (scrollWidth - clientWidth) / maxHorizontalOffset;
        const verticalThumbHeight = Math.round(verticalTrackHeight / Math.min(scrollHeight / clientHeight, verticalTrackHeight / THUMB_MIN_SIZE));
        const maxVerticalOffset = verticalTrackHeight - verticalThumbHeight;
        const verticalRatio = (scrollHeight - clientHeight) / maxVerticalOffset;
        horizontalData.value = {
          ratio: horizontalRatio,
          thumbSize: horizontalThumbWidth,
          max: maxHorizontalOffset
        };
        verticalData.value = {
          ratio: verticalRatio,
          thumbSize: verticalThumbHeight,
          max: maxVerticalOffset
        };
        if (scrollTop > 0) {
          const verticalOffset = Math.round(scrollTop / ((_b = (_a = verticalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1));
          (_c = verticalThumbRef.value) == null ? void 0 : _c.setOffset(verticalOffset);
        }
        if (scrollLeft > 0) {
          const horizontalOffset = Math.round(scrollLeft / ((_e = (_d = verticalData.value) == null ? void 0 : _d.ratio) != null ? _e : 1));
          (_f = horizontalThumbRef.value) == null ? void 0 : _f.setOffset(horizontalOffset);
        }
      }
    };
    onMounted(() => {
      getContainerSize();
    });
    const handleResize = () => {
      getContainerSize();
    };
    const handleScroll = (ev) => {
      var _a, _b, _c, _d, _e, _f;
      if (containerRef.value) {
        if (hasHorizontalScrollbar.value && !props.disableHorizontal) {
          const horizontalOffset = Math.round(containerRef.value.scrollLeft / ((_b = (_a = horizontalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1));
          (_c = horizontalThumbRef.value) == null ? void 0 : _c.setOffset(horizontalOffset);
        }
        if (hasVerticalScrollbar.value && !props.disableVertical) {
          const verticalOffset = Math.round(containerRef.value.scrollTop / ((_e = (_d = verticalData.value) == null ? void 0 : _d.ratio) != null ? _e : 1));
          (_f = verticalThumbRef.value) == null ? void 0 : _f.setOffset(verticalOffset);
        }
      }
      emit("scroll", ev);
    };
    const handleHorizontalScroll = (offset) => {
      var _a, _b;
      if (containerRef.value) {
        containerRef.value.scrollTo({
          left: offset * ((_b = (_a = horizontalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1)
        });
      }
    };
    const handleVerticalScroll = (offset) => {
      var _a, _b;
      if (containerRef.value) {
        containerRef.value.scrollTo({
          top: offset * ((_b = (_a = verticalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1)
        });
      }
    };
    const style = computed(() => {
      const style2 = {};
      if (props.type === "track") {
        if (hasHorizontalScrollbar.value) {
          style2.paddingBottom = `${TRACK_SIZE}px`;
        }
        if (hasVerticalScrollbar.value) {
          style2.paddingRight = `${TRACK_SIZE}px`;
        }
      }
      return [style2, props.outerStyle];
    });
    const cls = computed(() => [
      `${prefixCls}`,
      `${prefixCls}-type-${props.type}`,
      {
        [`${prefixCls}-both`]: isBoth.value
      },
      props.outerClass
    ]);
    return {
      prefixCls,
      cls,
      style,
      containerRef,
      horizontalThumbRef,
      verticalThumbRef,
      horizontalData,
      verticalData,
      isBoth,
      hasHorizontalScrollbar,
      hasVerticalScrollbar,
      handleResize,
      handleScroll,
      handleHorizontalScroll,
      handleVerticalScroll
    };
  },
  methods: {
    scrollTo(options, y) {
      var _a, _b;
      if (isObject(options)) {
        (_a = this.$refs.containerRef) == null ? void 0 : _a.scrollTo(options);
      } else if (options || y) {
        (_b = this.$refs.containerRef) == null ? void 0 : _b.scrollTo(options, y);
      }
    },
    scrollTop(top) {
      var _a;
      (_a = this.$refs.containerRef) == null ? void 0 : _a.scrollTo({
        top
      });
    },
    scrollLeft(left) {
      var _a;
      (_a = this.$refs.containerRef) == null ? void 0 : _a.scrollTo({
        left
      });
    }
  }
});
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ResizeObserver = resolveComponent("ResizeObserver");
  const _component_thumb = resolveComponent("thumb");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style)
  }, [
    createVNode(_component_ResizeObserver, { onResize: _ctx.handleResize }, {
      default: withCtx(() => [
        createElementVNode("div", mergeProps({
          ref: "containerRef",
          class: `${_ctx.prefixCls}-container`
        }, _ctx.$attrs, {
          onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
        }), [
          createVNode(_component_ResizeObserver, { onResize: _ctx.handleResize }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["onResize"])
        ], 16)
      ]),
      _: 3
    }, 8, ["onResize"]),
    !_ctx.hide && _ctx.hasHorizontalScrollbar ? (openBlock(), createBlock(_component_thumb, {
      key: 0,
      ref: "horizontalThumbRef",
      data: _ctx.horizontalData,
      direction: "horizontal",
      both: _ctx.isBoth,
      onScroll: _ctx.handleHorizontalScroll
    }, null, 8, ["data", "both", "onScroll"])) : createCommentVNode("v-if", true),
    !_ctx.hide && _ctx.hasVerticalScrollbar ? (openBlock(), createBlock(_component_thumb, {
      key: 1,
      ref: "verticalThumbRef",
      data: _ctx.verticalData,
      direction: "vertical",
      both: _ctx.isBoth,
      onScroll: _ctx.handleVerticalScroll
    }, null, 8, ["data", "both", "onScroll"])) : createCommentVNode("v-if", true)
  ], 6);
}
var _Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const Scrollbar = Object.assign(_Scrollbar, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Scrollbar.name, _Scrollbar);
  }
});
const useComponentRef = (name) => {
  const componentRef = ref();
  const getElement2 = () => {
    if (isComponentInstance(componentRef.value)) {
      return componentRef.value.$refs[name];
    }
    return componentRef.value;
  };
  const elementRef = ref();
  onMounted(() => {
    elementRef.value = getElement2();
  });
  watch([componentRef], () => {
    elementRef.value = getElement2();
  });
  return {
    componentRef,
    elementRef
  };
};
var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
const useScrollbar = (scrollbar) => {
  const displayScrollbar = computed(() => Boolean(scrollbar.value));
  const scrollbarProps = computed(() => {
    if (!scrollbar.value)
      return void 0;
    return __spreadValues$a({
      type: "embed"
    }, isBoolean(scrollbar.value) ? void 0 : scrollbar.value);
  });
  return {
    displayScrollbar,
    scrollbarProps
  };
};
const _sfc_main$k = defineComponent({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Scrollbar,
    Empty,
    Spin
  },
  props: {
    loading: Boolean,
    empty: Boolean,
    virtualList: Boolean,
    bottomOffset: {
      type: Number,
      default: 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: true
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: false
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: false
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(props, { emit, slots }) {
    var _a, _b, _c;
    const { scrollbar } = toRefs(props);
    const prefixCls = getPrefixCls("select-dropdown");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const SelectEmpty = (_c = (_b = configCtx == null ? void 0 : (_a = configCtx.slots).empty) == null ? void 0 : _b.call(_a, { component: "select" })) == null ? void 0 : _c[0];
    const { componentRef: wrapperComRef, elementRef: wrapperRef } = useComponentRef("containerRef");
    const { displayScrollbar, scrollbarProps } = useScrollbar(scrollbar);
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target;
      const bottom = scrollHeight - (scrollTop + offsetHeight);
      if (bottom <= props.bottomOffset) {
        emit("reachBottom", e);
      }
      emit("scroll", e);
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-header`]: Boolean(slots.header),
        [`${prefixCls}-has-footer`]: Boolean(slots.footer)
      }
    ]);
    return {
      prefixCls,
      SelectEmpty,
      cls,
      wrapperRef,
      wrapperComRef,
      handleScroll,
      displayScrollbar,
      scrollbarProps
    };
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_spin = resolveComponent("spin");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.$slots.header && (!_ctx.empty || _ctx.showHeaderOnEmpty) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-header`)
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createBlock(_component_spin, {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-loading`)
    }, null, 8, ["class"])) : _ctx.empty ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-empty`)
    }, [
      renderSlot(_ctx.$slots, "empty", {}, () => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.SelectEmpty ? _ctx.SelectEmpty : "Empty")))
      ])
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.virtualList && !_ctx.loading && !_ctx.empty ? renderSlot(_ctx.$slots, "virtual-list", { key: 3 }) : createCommentVNode("v-if", true),
    !_ctx.virtualList ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.displayScrollbar ? "ScrollbarComponent" : "div"), mergeProps({
      key: 4,
      ref: "wrapperComRef",
      class: `${_ctx.prefixCls}-list-wrapper`
    }, _ctx.scrollbarProps, { onScroll: _ctx.handleScroll }), {
      default: withCtx(() => [
        createElementVNode("ul", {
          class: normalizeClass(`${_ctx.prefixCls}-list`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16, ["class", "onScroll"])), [
      [vShow, !_ctx.loading && !_ctx.empty]
    ]) : createCommentVNode("v-if", true),
    _ctx.$slots.footer && (!_ctx.empty || _ctx.showFooterOnEmpty) ? (openBlock(), createElementBlock("div", {
      key: 5,
      class: normalizeClass(`${_ctx.prefixCls}-footer`)
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var SelectDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
var IconCheck = defineComponent({
  name: "IconCheck",
  render() {
    return createVNode("svg", {
      "aria-hidden": "true",
      "focusable": "false",
      "viewBox": "0 0 1024 1024",
      "width": "200",
      "height": "200",
      "fill": "currentColor"
    }, [createVNode("path", {
      "d": "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const checkboxGroupKey = Symbol("ArcoCheckboxGroup");
var _Checkbox = defineComponent({
  name: "Checkbox",
  components: {
    IconCheck,
    IconHover
  },
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    uninjectGroupContext: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      disabled,
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox");
    const checkboxRef = ref();
    const checkboxGroupCtx = !props.uninjectGroupContext ? inject(checkboxGroupKey, void 0) : void 0;
    const isGroup = (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.name) === "ArcoCheckboxGroup";
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _checked = ref(props.defaultChecked);
    const computedValue = computed(() => {
      var _a;
      return isGroup ? checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.computedValue : (_a = props.modelValue) != null ? _a : _checked.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return isArray(computedValue.value) ? computedValue.value.includes((_a = props.value) != null ? _a : true) : computedValue.value;
    });
    const mergedDisabled = computed(() => (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.disabled) || (_mergedDisabled == null ? void 0 : _mergedDisabled.value) || !computedChecked.value && (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.isMaxed));
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e) => {
      var _a, _b, _c, _d;
      const {
        checked
      } = e.target;
      let newValue = checked;
      if (isArray(computedValue.value)) {
        const set = new Set(computedValue.value);
        if (checked) {
          set.add((_a = props.value) != null ? _a : true);
        } else {
          set.delete((_b = props.value) != null ? _b : true);
        }
        newValue = Array.from(set);
      }
      _checked.value = checked;
      if (isGroup && isArray(newValue)) {
        checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.handleChange(newValue, e);
      } else {
        emit("update:modelValue", newValue);
        emit("change", newValue, e);
        (_d = (_c = eventHandlers.value) == null ? void 0 : _c.onChange) == null ? void 0 : _d.call(_c, e);
      }
      nextTick(() => {
        if (checkboxRef.value && checkboxRef.value.checked !== computedChecked.value) {
          checkboxRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-indeterminate`]: props.indeterminate,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _checked.value = false;
      }
    });
    watch(computedValue, (value) => {
      var _a;
      let checked;
      if (isArray(value)) {
        checked = value.includes((_a = props.value) != null ? _a : true);
      } else {
        checked = value;
      }
      if (_checked.value !== checked) {
        _checked.value = checked;
      }
      if (checkboxRef.value && checkboxRef.value.checked !== checked) {
        checkboxRef.value.checked = checked;
      }
    });
    return () => {
      var _a, _b, _c, _d;
      return createVNode("label", {
        "aria-disabled": mergedDisabled.value,
        "class": cls.value
      }, [createVNode("input", {
        "ref": checkboxRef,
        "type": "checkbox",
        "checked": computedChecked.value,
        "value": props.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), (_d = (_c = (_b = slots.checkbox) != null ? _b : (_a = checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.slots) == null ? void 0 : _a.checkbox) == null ? void 0 : _c({
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : createVNode(IconHover, {
        "class": `${prefixCls}-icon-hover`,
        "disabled": mergedDisabled.value || computedChecked.value
      }, {
        default: () => [createVNode("div", {
          "class": `${prefixCls}-icon`
        }, [computedChecked.value && createVNode(IconCheck, {
          "class": `${prefixCls}-icon-check`
        }, null)])]
      }), slots.default && createVNode("span", {
        "class": `${prefixCls}-label`
      }, [slots.default()])]);
    };
  }
});
var CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox-group");
    const {
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => isArray(props.modelValue) ? props.modelValue : _value.value);
    const isMaxed = computed(() => props.max === void 0 ? false : computedValue.value.length >= props.max);
    const options = computed(() => {
      var _a;
      return ((_a = props.options) != null ? _a : []).map((option) => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const handleChange = (value, e) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, e);
    };
    provide(checkboxGroupKey, reactive({
      name: "ArcoCheckboxGroup",
      computedValue,
      disabled: mergedDisabled,
      isMaxed,
      slots,
      handleChange
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-direction-${props.direction}`]);
    watch(() => props.modelValue, (curValue) => {
      if (isArray(curValue)) {
        _value.value = [...curValue];
      } else {
        _value.value = [];
      }
    });
    const renderOptions = () => {
      return options.value.map((option) => {
        const checked = computedValue.value.includes(option.value);
        return createVNode(_Checkbox, {
          "key": option.value,
          "value": option.value,
          "disabled": option.disabled || !checked && isMaxed.value,
          "indeterminate": option.indeterminate,
          "modelValue": checked
        }, {
          default: () => [slots.label ? slots.label({
            data: option
          }) : isFunction(option.label) ? option.label() : option.label]
        });
      });
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const Checkbox = Object.assign(_Checkbox, {
  Group: CheckboxGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Checkbox.name, _Checkbox);
    app.component(componentPrefix + CheckboxGroup.name, CheckboxGroup);
  }
});
const selectInjectionKey = Symbol("ArcoSelectContext");
var __defProp$9 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
const isGroupOption = (option) => {
  return isObject(option) && "isGroup" in option;
};
const isGroupOptionInfo = (option) => {
  return isObject(option) && "isGroup" in option;
};
const getValueString = (value, valueKey = "value") => String(isObject(value) ? value[valueKey] : value);
const getKeyFromValue = (value, valueKey = "value") => {
  if (isObject(value)) {
    return `__arco__option__object__${value[valueKey]}`;
  }
  if (value || isNumber(value) || isString(value) || isBoolean(value)) {
    return `__arco__option__${typeof value}-${value}`;
  }
  return "";
};
const hasEmptyStringKey = (optionInfoMap) => {
  return optionInfoMap.has(`__arco__option__string-`);
};
const createOptionInfo = (option, {
  valueKey,
  fieldNames,
  origin,
  index: index2 = -1
}) => {
  var _a;
  if (isObject(option)) {
    const value = option[fieldNames.value];
    return {
      raw: option,
      index: index2,
      key: getKeyFromValue(value, valueKey),
      origin,
      value,
      label: (_a = option[fieldNames.label]) != null ? _a : getValueString(value, valueKey),
      render: option[fieldNames.render],
      disabled: Boolean(option[fieldNames.disabled]),
      tagProps: option[fieldNames.tagProps]
    };
  }
  const raw = {
    value: option,
    label: String(option),
    disabled: false
  };
  return __spreadValues$9({
    raw,
    index: index2,
    key: getKeyFromValue(option, valueKey),
    origin
  }, raw);
};
const getOptionInfos = (options, {
  valueKey,
  fieldNames,
  origin,
  optionInfoMap
}) => {
  var _a;
  const infos = [];
  for (const item of options) {
    if (isGroupOption(item)) {
      const options2 = getOptionInfos((_a = item.options) != null ? _a : [], {
        valueKey,
        fieldNames,
        origin,
        optionInfoMap
      });
      if (options2.length > 0) {
        infos.push(__spreadProps$4(__spreadValues$9({}, item), {
          key: `__arco__group__${item.label}`,
          options: options2
        }));
      }
    } else {
      const optionInfo = createOptionInfo(item, {
        valueKey,
        fieldNames,
        origin
      });
      infos.push(optionInfo);
      if (!optionInfoMap.get(optionInfo.key)) {
        optionInfoMap.set(optionInfo.key, optionInfo);
      }
    }
  }
  return infos;
};
const getValidOptions = (optionInfos, {
  inputValue,
  filterOption
}) => {
  const travel = (optionInfos2) => {
    var _a;
    const options = [];
    for (const item of optionInfos2) {
      if (isGroupOptionInfo(item)) {
        const _options = travel((_a = item.options) != null ? _a : []);
        if (_options.length > 0) {
          options.push(__spreadProps$4(__spreadValues$9({}, item), { options: _options }));
        }
      } else if (isValidOption(item, { inputValue, filterOption })) {
        options.push(item);
      }
    }
    return options;
  };
  return travel(optionInfos);
};
const isValidOption = (optionInfo, {
  inputValue,
  filterOption
}) => {
  if (isFunction(filterOption)) {
    return !inputValue || filterOption(inputValue, optionInfo.raw);
  }
  if (filterOption) {
    return optionInfo.label.toLowerCase().includes((inputValue != null ? inputValue : "").toLowerCase());
  }
  return true;
};
const isEqualObject = (obj, other) => {
  if (!obj || !other) {
    return false;
  }
  if (obj.length !== other.length) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    const result = isEqual(obj[key], other[key]);
    if (!result)
      return false;
  }
  return true;
};
const isEqualArray = (arr, other) => {
  if (!arr || !other) {
    return false;
  }
  const { length } = arr;
  if (length !== other.length) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    const result = isEqual(arr[i], other[i]);
    if (!result)
      return false;
  }
  return true;
};
const isEqual = (a, b) => {
  const type = Object.prototype.toString.call(a);
  if (type !== Object.prototype.toString.call(b)) {
    return false;
  }
  if (type === "[object Object]") {
    return isEqualObject(a, b);
  }
  if (type === "[object Array]") {
    return isEqualArray(a, b);
  }
  if (type === "[object Function]") {
    if (a === b) {
      return true;
    }
    return a.toString() === b.toString();
  }
  return a === b;
};
const _sfc_main$j = defineComponent({
  name: "Option",
  components: {
    Checkbox
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: void 0
    },
    label: String,
    disabled: Boolean,
    tagProps: {
      type: Object
    },
    extra: {
      type: Object
    },
    index: {
      type: Number
    },
    internal: Boolean
  },
  setup(props) {
    const { disabled, tagProps: _tagProps, index: index2 } = toRefs(props);
    const prefixCls = getPrefixCls("select-option");
    const selectCtx = inject(selectInjectionKey, void 0);
    const instance = getCurrentInstance();
    const itemRef = ref();
    const tagProps = ref(_tagProps.value);
    watch(_tagProps, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        tagProps.value = cur;
      }
    });
    const textContent = ref("");
    const value = computed(() => {
      var _a, _b;
      return (_b = (_a = props.value) != null ? _a : props.label) != null ? _b : textContent.value;
    });
    const label = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : textContent.value;
    });
    const key = computed(() => getKeyFromValue(value.value, selectCtx == null ? void 0 : selectCtx.valueKey));
    const component = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.component) != null ? _a : "li";
    });
    const setTextContent = () => {
      var _a;
      if (!props.label && itemRef.value) {
        const text = (_a = itemRef.value.textContent) != null ? _a : "";
        if (textContent.value !== text) {
          textContent.value = text;
        }
      }
    };
    onMounted(() => setTextContent());
    onUpdated(() => setTextContent());
    const isSelected = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.valueKeys.includes(key.value)) != null ? _a : false;
    });
    const isActive = computed(() => (selectCtx == null ? void 0 : selectCtx.activeKey) === key.value);
    let isValid = ref(true);
    if (!props.internal) {
      const optionInfo = reactive({
        raw: {
          value,
          label,
          disabled,
          tagProps
        },
        ref: itemRef,
        index: index2,
        key,
        origin: "slot",
        value,
        label,
        disabled,
        tagProps
      });
      isValid = computed(() => isValidOption(optionInfo, {
        inputValue: selectCtx == null ? void 0 : selectCtx.inputValue,
        filterOption: selectCtx == null ? void 0 : selectCtx.filterOption
      }));
      if (instance) {
        selectCtx == null ? void 0 : selectCtx.addSlotOptionInfo(instance.uid, optionInfo);
      }
      onBeforeUnmount(() => {
        if (instance) {
          selectCtx == null ? void 0 : selectCtx.removeSlotOptionInfo(instance.uid);
        }
      });
    }
    const handleClick = (ev) => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.onSelect(key.value, ev);
      }
    };
    const handleMouseEnter = () => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey(key.value);
      }
    };
    const handleMouseLeave = () => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey();
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-active`]: isActive.value,
        [`${prefixCls}-multiple`]: selectCtx == null ? void 0 : selectCtx.multiple
      }
    ]);
    return {
      prefixCls,
      cls,
      selectCtx,
      itemRef,
      component,
      isSelected,
      isValid,
      handleClick,
      handleMouseEnter,
      handleMouseLeave
    };
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox = resolveComponent("checkbox");
  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
    ref: "itemRef",
    class: normalizeClass([_ctx.cls, { [`${_ctx.prefixCls}-has-suffix`]: Boolean(_ctx.$slots.suffix) }]),
    onClick: _ctx.handleClick,
    onMouseenter: _ctx.handleMouseEnter,
    onMouseleave: _ctx.handleMouseLeave
  }, {
    default: withCtx(() => [
      _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-icon`)
      }, [
        renderSlot(_ctx.$slots, "icon")
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.selectCtx && _ctx.selectCtx.multiple ? (openBlock(), createBlock(_component_checkbox, {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-checkbox`),
        "model-value": _ctx.isSelected,
        disabled: _ctx.disabled,
        "uninject-group-context": ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "model-value", "disabled"])) : (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(`${_ctx.prefixCls}-content`)
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ], 2)),
      _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", {
        key: 3,
        class: normalizeClass(`${_ctx.prefixCls}-suffix`)
      }, [
        renderSlot(_ctx.$slots, "suffix")
      ], 2)) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [
    [vShow, _ctx.isValid]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
var __defProp$8 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const DEFAULT_FIELD_NAMES$2 = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
const useOptions = ({
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  valueKey,
  fieldNames
}) => {
  const mergedFieldNames = computed(() => __spreadValues$8(__spreadValues$8({}, DEFAULT_FIELD_NAMES$2), fieldNames == null ? void 0 : fieldNames.value));
  const slotOptionInfoMap = reactive(/* @__PURE__ */ new Map());
  const sortedSlotOptionInfos = computed(() => Array.from(slotOptionInfoMap.values()).sort((a, b) => {
    if (isNumber(a.index) && isNumber(b.index)) {
      return a.index - b.index;
    }
    return 0;
  }));
  const propOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = options == null ? void 0 : options.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "options",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const extraOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = extraOptions == null ? void 0 : extraOptions.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "extraOptions",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const optionInfoMap = reactive(/* @__PURE__ */ new Map());
  watch([
    sortedSlotOptionInfos,
    options != null ? options : ref([]),
    extraOptions != null ? extraOptions : ref([]),
    valueKey != null ? valueKey : ref("value")
  ], () => {
    optionInfoMap.clear();
    sortedSlotOptionInfos.value.forEach((info, index2) => {
      optionInfoMap.set(info.key, __spreadProps$3(__spreadValues$8({}, info), { index: index2 }));
    });
    propOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
    extraOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
  }, { immediate: true, deep: true });
  const validOptions = computed(() => {
    var _a;
    const options2 = getValidOptions(propOptionData.value.optionInfos, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
    if ((_a = showExtraOptions == null ? void 0 : showExtraOptions.value) != null ? _a : true) {
      options2.push(...getValidOptions(extraOptionData.value.optionInfos, {
        inputValue: inputValue == null ? void 0 : inputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      }));
    }
    return options2;
  });
  const validOptionInfos = computed(() => Array.from(optionInfoMap.values()).filter((optionInfo) => {
    if (optionInfo.origin === "extraOptions" && (showExtraOptions == null ? void 0 : showExtraOptions.value) === false) {
      return false;
    }
    return isValidOption(optionInfo, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
  }));
  const enabledOptionKeys = computed(() => validOptionInfos.value.filter((optionInfo) => !optionInfo.disabled).map((info) => info.key));
  const getNextSlotOptionIndex = () => slotOptionInfoMap.size;
  const addSlotOptionInfo = (id, optionInfo) => {
    slotOptionInfoMap.set(id, optionInfo);
  };
  const removeSlotOptionInfo = (id) => {
    slotOptionInfoMap.delete(id);
  };
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  };
};
const KEYBOARD_KEY = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
};
const stringifyCodeKey = (k) => {
  return JSON.stringify({
    key: k.key,
    ctrl: Boolean(k.ctrl),
    shift: Boolean(k.shift),
    alt: Boolean(k.alt),
    meta: Boolean(k.meta)
  });
};
const getKeyDownHandler = (codeKeyMap) => {
  const map = {};
  codeKeyMap.forEach((callback, codeKey) => {
    const _codeKey = isString(codeKey) ? { key: codeKey } : codeKey;
    map[stringifyCodeKey(_codeKey)] = callback;
  });
  return (event) => {
    const key = stringifyCodeKey({
      key: event.key,
      ctrl: event.ctrlKey,
      shift: event.shiftKey,
      alt: event.altKey,
      meta: event.metaKey
    });
    const callback = map[key];
    if (callback) {
      event.stopPropagation();
      callback(event);
    }
  };
};
const useSelect = ({
  multiple,
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  component,
  valueKey,
  fieldNames,
  loading,
  popupVisible,
  valueKeys,
  dropdownRef,
  optionRefs,
  virtualListRef,
  onSelect,
  onPopupVisibleChange,
  enterToOpen = true,
  defaultActiveFirstOption
}) => {
  const {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  } = useOptions({
    options,
    extraOptions,
    inputValue,
    filterOption,
    showExtraOptions,
    valueKey,
    fieldNames
  });
  const activeKey = ref();
  watch(enabledOptionKeys, (enabledKeys) => {
    if (!activeKey.value || !enabledKeys.includes(activeKey.value)) {
      activeKey.value = enabledKeys[0];
    }
  });
  const setActiveKey = (key) => {
    activeKey.value = key;
  };
  const getNextActiveKey = (direction) => {
    const _length = enabledOptionKeys.value.length;
    if (_length === 0) {
      return void 0;
    }
    if (!activeKey.value) {
      if (direction === "down") {
        return enabledOptionKeys.value[0];
      }
      return enabledOptionKeys.value[_length - 1];
    }
    const activeIndex = enabledOptionKeys.value.indexOf(activeKey.value);
    const nextIndex = (_length + activeIndex + (direction === "up" ? -1 : 1)) % _length;
    return enabledOptionKeys.value[nextIndex];
  };
  const scrollIntoView = (key) => {
    var _a, _b;
    if (virtualListRef == null ? void 0 : virtualListRef.value) {
      virtualListRef.value.scrollTo({ key });
    }
    const optionInfo = optionInfoMap.get(key);
    const wrapperEle = (_a = dropdownRef == null ? void 0 : dropdownRef.value) == null ? void 0 : _a.wrapperRef;
    const optionEle = (_b = optionRefs == null ? void 0 : optionRefs.value[key]) != null ? _b : optionInfo == null ? void 0 : optionInfo.ref;
    if (!wrapperEle || !optionEle) {
      return;
    }
    if (wrapperEle.scrollHeight === wrapperEle.offsetHeight) {
      return;
    }
    const optionRect = getRelativeRect(optionEle, wrapperEle);
    const wrapperScrollTop = wrapperEle.scrollTop;
    if (optionRect.top < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop + optionRect.top);
    } else if (optionRect.bottom < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop - optionRect.bottom);
    }
  };
  watch(popupVisible, (visible) => {
    var _a;
    if (visible) {
      const current = valueKeys.value[valueKeys.value.length - 1];
      let _activeKey = ((_a = defaultActiveFirstOption == null ? void 0 : defaultActiveFirstOption.value) != null ? _a : true) ? enabledOptionKeys.value[0] : void 0;
      if (enabledOptionKeys.value.includes(current)) {
        _activeKey = current;
      }
      if (_activeKey !== activeKey.value) {
        activeKey.value = _activeKey;
      }
      nextTick(() => {
        if (activeKey.value) {
          scrollIntoView(activeKey.value);
        }
      });
    }
  });
  const handleKeyDown = getKeyDownHandler(/* @__PURE__ */ new Map([
    [
      KEYBOARD_KEY.ENTER,
      (e) => {
        if (!(loading == null ? void 0 : loading.value) && !e.isComposing) {
          if (popupVisible.value) {
            if (activeKey.value) {
              onSelect(activeKey.value, e);
              e.preventDefault();
            }
          } else if (enterToOpen) {
            onPopupVisibleChange(true);
            e.preventDefault();
          }
        }
      }
    ],
    [
      KEYBOARD_KEY.ESC,
      (e) => {
        if (popupVisible.value) {
          onPopupVisibleChange(false);
          e.preventDefault();
        }
      }
    ],
    [
      KEYBOARD_KEY.ARROW_DOWN,
      (e) => {
        if (popupVisible.value) {
          const next = getNextActiveKey("down");
          if (next) {
            activeKey.value = next;
            scrollIntoView(next);
          }
          e.preventDefault();
        }
      }
    ],
    [
      KEYBOARD_KEY.ARROW_UP,
      (e) => {
        if (popupVisible.value) {
          const next = getNextActiveKey("up");
          if (next) {
            activeKey.value = next;
            scrollIntoView(next);
          }
          e.preventDefault();
        }
      }
    ]
  ]));
  provide(selectInjectionKey, reactive({
    multiple,
    valueKey,
    inputValue,
    filterOption,
    component,
    valueKeys,
    activeKey,
    setActiveKey,
    onSelect,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  }));
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    activeKey,
    setActiveKey,
    addSlotOptionInfo,
    removeSlotOptionInfo,
    getNextActiveKey,
    scrollIntoView,
    handleKeyDown
  };
};
const useSize = ({
  dataKeys,
  contentRef,
  fixedSize,
  estimatedSize,
  buffer
}) => {
  const firstRangeAverageSize = ref(0);
  const sizeMap = /* @__PURE__ */ new Map();
  const total = computed(() => dataKeys.value.length);
  const start = ref(0);
  const end = computed(() => {
    const _end = start.value + buffer.value * 3;
    if (_end > total.value)
      return total.value;
    return _end;
  });
  const maxStart = computed(() => {
    const max = total.value - buffer.value * 3;
    if (max < 0)
      return 0;
    return max;
  });
  const setStart = (index2) => {
    if (index2 < 0) {
      start.value = 0;
    } else if (index2 > maxStart.value) {
      start.value = maxStart.value;
    } else {
      start.value = index2;
    }
  };
  const isFixed = ref(fixedSize.value);
  const _estimatedSize = computed(() => {
    if (estimatedSize.value !== 30) {
      return estimatedSize.value;
    }
    return firstRangeAverageSize.value || estimatedSize.value;
  });
  const setItemSize = (key, size) => {
    sizeMap.set(key, size);
  };
  const getItemSize = (index2) => {
    var _a;
    if (isFixed.value) {
      return _estimatedSize.value;
    }
    const _key = dataKeys.value[index2];
    return (_a = sizeMap.get(_key)) != null ? _a : _estimatedSize.value;
  };
  const hasItemSize = (key) => {
    return sizeMap.has(key);
  };
  onMounted(() => {
    const firstRangeTotalSize = Array.from(sizeMap.values()).reduce((pre, value) => pre + value, 0);
    if (firstRangeTotalSize > 0) {
      firstRangeAverageSize.value = firstRangeTotalSize / sizeMap.size;
    }
  });
  const getScrollOffset = (index2) => {
    if (isFixed.value) {
      return _estimatedSize.value * index2;
    }
    return getOffset(0, index2);
  };
  const getOffset = (start2, end2) => {
    let offset = 0;
    for (let i = start2; i < end2; i++) {
      offset += getItemSize(i);
    }
    return offset;
  };
  const frontPadding = computed(() => {
    if (isFixed.value) {
      return _estimatedSize.value * start.value;
    }
    return getOffset(0, start.value);
  });
  const getOffsetIndex = (scrollOffset) => {
    const isForward = scrollOffset >= frontPadding.value;
    let offset = Math.abs(scrollOffset - frontPadding.value);
    const _start = isForward ? start.value : start.value - 1;
    let offsetIndex = 0;
    while (offset > 0) {
      offset -= getItemSize(_start + offsetIndex);
      isForward ? offsetIndex++ : offsetIndex--;
    }
    return offsetIndex;
  };
  const getStartByScroll = (scrollOffset) => {
    const offsetIndex = getOffsetIndex(scrollOffset);
    const _start = start.value + offsetIndex - buffer.value;
    if (_start < 0)
      return 0;
    if (_start > maxStart.value)
      return maxStart.value;
    return _start;
  };
  const behindPadding = computed(() => {
    if (isFixed.value) {
      return _estimatedSize.value * (total.value - end.value);
    }
    return getOffset(end.value, total.value);
  });
  return {
    frontPadding,
    behindPadding,
    start,
    end,
    getStartByScroll,
    setItemSize,
    hasItemSize,
    setStart,
    getScrollOffset
  };
};
var VirtualListItem = defineComponent({
  name: "VirtualListItem",
  props: {
    hasItemSize: {
      type: Function,
      required: true
    },
    setItemSize: {
      type: Function,
      required: true
    }
  },
  setup(props, {
    slots
  }) {
    var _a;
    const key = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
    const itemRef = ref();
    const setItemSize = () => {
      var _a2, _b, _c, _d;
      const ele = (_b = (_a2 = itemRef.value) == null ? void 0 : _a2.$el) != null ? _b : itemRef.value;
      const height = (_d = (_c = ele == null ? void 0 : ele.getBoundingClientRect) == null ? void 0 : _c.call(ele).height) != null ? _d : ele == null ? void 0 : ele.offsetHeight;
      if (height) {
        props.setItemSize(key, height);
      }
    };
    onMounted(() => setItemSize());
    onBeforeUnmount(() => setItemSize());
    return () => {
      var _a2;
      const child = getFirstComponent((_a2 = slots.default) == null ? void 0 : _a2.call(slots));
      if (child) {
        return cloneVNode(child, {
          ref: itemRef
        }, true);
      }
      return null;
    };
  }
});
var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
const _sfc_main$i = defineComponent({
  name: "VirtualList",
  components: { VirtualListItem },
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    data: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 0
    },
    itemKey: {
      type: String,
      default: "key"
    },
    fixedSize: {
      type: Boolean,
      default: false
    },
    estimatedSize: {
      type: Number,
      default: 30
    },
    buffer: {
      type: Number,
      default: 10
    },
    component: {
      type: [String, Object],
      default: "div"
    },
    listAttrs: {
      type: Object
    },
    contentAttrs: {
      type: Object
    },
    paddingPosition: {
      type: String,
      default: "content"
    }
  },
  emits: {
    scroll: (ev) => true,
    reachBottom: (ev) => true
  },
  setup(props, { emit }) {
    const { data, itemKey, fixedSize, estimatedSize, buffer, height } = toRefs(props);
    const prefixCls = getPrefixCls("virtual-list");
    const mergedComponent = computed(() => {
      if (isObject(props.component)) {
        return __spreadValues$7({
          container: "div",
          list: "div",
          content: "div"
        }, props.component);
      }
      return {
        container: props.component,
        list: "div",
        content: "div"
      };
    });
    const containerRef = ref();
    const contentRef = ref();
    const style = computed(() => {
      return {
        height: isNumber(height.value) ? `${height.value}px` : height.value,
        overflow: "auto"
      };
    });
    const dataKeys = computed(() => data.value.map((item, index2) => {
      var _a;
      return (_a = item[itemKey.value]) != null ? _a : index2;
    }));
    const {
      frontPadding,
      behindPadding,
      start,
      end,
      getStartByScroll,
      setItemSize,
      hasItemSize,
      setStart,
      getScrollOffset
    } = useSize({
      dataKeys,
      contentRef,
      fixedSize,
      estimatedSize,
      buffer
    });
    const currentList = computed(() => {
      if (props.threshold && data.value.length <= props.threshold) {
        return data.value;
      }
      return data.value.slice(start.value, end.value);
    });
    const onScroll = (ev) => {
      const { scrollTop, scrollHeight, offsetHeight } = ev.target;
      const _start = getStartByScroll(scrollTop);
      if (_start !== start.value) {
        setStart(_start);
        nextTick(() => {
          scrollTo(scrollTop);
        });
      }
      emit("scroll", ev);
      const bottom = Math.floor(scrollHeight - (scrollTop + offsetHeight));
      if (bottom <= 0) {
        emit("reachBottom", ev);
      }
    };
    const scrollTo = (options) => {
      var _a, _b;
      if (containerRef.value) {
        if (isNumber(options)) {
          containerRef.value.scrollTop = options;
        } else {
          const _index = (_b = options.index) != null ? _b : dataKeys.value.indexOf((_a = options.key) != null ? _a : "");
          setStart(_index - buffer.value);
          containerRef.value.scrollTop = getScrollOffset(_index);
          nextTick(() => {
            if (containerRef.value) {
              const _scrollTop = getScrollOffset(_index);
              if (_scrollTop !== containerRef.value.scrollTop) {
                containerRef.value.scrollTop = _scrollTop;
              }
            }
          });
        }
      }
    };
    return {
      prefixCls,
      containerRef,
      contentRef,
      frontPadding,
      currentList,
      behindPadding,
      onScroll,
      setItemSize,
      hasItemSize,
      start,
      scrollTo,
      style,
      mergedComponent
    };
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VirtualListItem = resolveComponent("VirtualListItem");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.container), {
    ref: "containerRef",
    class: normalizeClass(_ctx.prefixCls),
    style: normalizeStyle(_ctx.style),
    onScroll: _ctx.onScroll
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.list), mergeProps(_ctx.listAttrs, {
        style: _ctx.paddingPosition === "list" ? {
          paddingTop: `${_ctx.frontPadding}px`,
          paddingBottom: `${_ctx.behindPadding}px`
        } : {}
      }), {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.content), mergeProps({ ref: "contentRef" }, _ctx.contentAttrs, {
            style: _ctx.paddingPosition === "content" ? {
              paddingTop: `${_ctx.frontPadding}px`,
              paddingBottom: `${_ctx.behindPadding}px`
            } : {}
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentList, (item, index2) => {
                var _a;
                return openBlock(), createBlock(_component_VirtualListItem, {
                  key: (_a = item[_ctx.itemKey]) != null ? _a : _ctx.start + index2,
                  "has-item-size": _ctx.hasItemSize,
                  "set-item-size": _ctx.setItemSize
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "item", {
                      item,
                      index: _ctx.start + index2
                    })
                  ]),
                  _: 2
                }, 1032, ["has-item-size", "set-item-size"]);
              }), 128))
            ]),
            _: 3
          }, 16, ["style"]))
        ]),
        _: 3
      }, 16, ["style"]))
    ]),
    _: 3
  }, 8, ["class", "style", "onScroll"]);
}
var VirtualList = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
const useIndex = ({
  itemRef,
  selector,
  index: index2,
  parentClassName
}) => {
  const _index = ref(-1);
  const computedIndex = computed(() => {
    var _a;
    return (_a = index2 == null ? void 0 : index2.value) != null ? _a : _index.value;
  });
  const parent = ref();
  const getParent = () => {
    var _a, _b, _c;
    let parent2 = (_b = (_a = itemRef.value) == null ? void 0 : _a.parentElement) != null ? _b : void 0;
    if (parentClassName) {
      while (parent2 && !parent2.className.includes(parentClassName)) {
        parent2 = (_c = parent2.parentElement) != null ? _c : void 0;
      }
    }
    return parent2;
  };
  const getIndex = () => {
    if (isUndefined(index2 == null ? void 0 : index2.value) && parent.value && itemRef.value) {
      const index22 = Array.from(parent.value.querySelectorAll(selector)).indexOf(itemRef.value);
      if (index22 !== _index.value) {
        _index.value = index22;
      }
    }
  };
  watch(itemRef, () => {
    if (itemRef.value && !parent.value) {
      parent.value = getParent();
    }
  });
  onMounted(() => {
    if (itemRef.value) {
      parent.value = getParent();
    }
    getIndex();
  });
  onUpdated(() => getIndex());
  return {
    computedIndex
  };
};
const _sfc_main$h = defineComponent({
  name: "IconMore",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-more`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$6 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", { d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$6,
  _hoisted_3$6
];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4, 14, _hoisted_1$6);
}
var _IconMore = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const IconMore = Object.assign(_IconMore, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMore.name, _IconMore);
  }
});
const _sfc_main$g = defineComponent({
  name: "IconDown",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-down`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$5 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M39.6 17.443 24.043 33 8.487 17.443" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$5, 14, _hoisted_1$5);
}
var _IconDown = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const IconDown = Object.assign(_IconDown, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDown.name, _IconDown);
  }
});
const useTrigger = ({
  popupVisible,
  defaultPopupVisible,
  emit
}) => {
  var _a;
  const _popupVisible = ref((_a = defaultPopupVisible == null ? void 0 : defaultPopupVisible.value) != null ? _a : false);
  const computedPopupVisible = computed(() => {
    var _a2;
    return (_a2 = popupVisible == null ? void 0 : popupVisible.value) != null ? _a2 : _popupVisible.value;
  });
  const handlePopupVisibleChange = (visible) => {
    if (visible !== computedPopupVisible.value) {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    }
  };
  watch(computedPopupVisible, (visible) => {
    if (_popupVisible.value !== visible) {
      _popupVisible.value = visible;
    }
  });
  return {
    computedPopupVisible,
    handlePopupVisibleChange
  };
};
const _sfc_main$f = defineComponent({
  name: "IconRight",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-right`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$4, 14, _hoisted_1$4);
}
var _IconRight = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const IconRight = Object.assign(_IconRight, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconRight.name, _IconRight);
  }
});
const useInput = ({
  defaultValue,
  modelValue,
  emit,
  eventName = "input",
  updateEventName = "update:modelValue",
  eventHandlers
}) => {
  var _a;
  const inputRef = ref();
  const _value = ref((_a = defaultValue == null ? void 0 : defaultValue.value) != null ? _a : "");
  const _focused = ref(false);
  const isComposition = ref(false);
  const compositionValue = ref("");
  let initialValue;
  const computedValue = computed(() => {
    var _a2;
    return (_a2 = modelValue == null ? void 0 : modelValue.value) != null ? _a2 : _value.value;
  });
  const updateValue = (value, ev) => {
    _value.value = value;
    emit(updateEventName, value);
    emit(eventName, value, ev);
  };
  const handleInput = (ev) => {
    const { value } = ev.target;
    if (!isComposition.value) {
      updateValue(value, ev);
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
        }
      });
    }
  };
  const handleChange = (ev) => {
    if (eventName === "input" && computedValue.value !== initialValue) {
      initialValue = computedValue.value;
      emit("change", computedValue.value, ev);
    }
  };
  const handleComposition = (ev) => {
    var _a2;
    const { value } = ev.target;
    if (ev.type === "compositionend") {
      isComposition.value = false;
      compositionValue.value = "";
      updateValue(value, ev);
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
        }
      });
    } else {
      isComposition.value = true;
      compositionValue.value = computedValue.value + ((_a2 = ev.data) != null ? _a2 : "");
    }
  };
  const handleFocus = (ev) => {
    var _a2, _b;
    _focused.value = true;
    initialValue = computedValue.value;
    emit("focus", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onFocus) == null ? void 0 : _b.call(_a2, ev);
  };
  const handleBlur = (ev) => {
    var _a2, _b;
    _focused.value = false;
    emit("blur", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onBlur) == null ? void 0 : _b.call(_a2, ev);
    handleChange(ev);
  };
  const handleKeyDown = (ev) => {
    const keyCode = ev.key || ev.code;
    if (!isComposition.value && keyCode === Enter.key) {
      emit("pressEnter", ev);
      handleChange(ev);
    }
  };
  const handleMousedown = (ev) => {
    if (inputRef.value && ev.target !== inputRef.value) {
      ev.preventDefault();
      inputRef.value.focus();
    }
  };
  watch(computedValue, (value) => {
    if (inputRef.value && value !== inputRef.value.value) {
      inputRef.value.value = value;
    }
  });
  return {
    inputRef,
    _value,
    _focused,
    isComposition,
    compositionValue,
    computedValue,
    handleInput,
    handleComposition,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleMousedown
  };
};
var InputLabel = defineComponent({
  name: "InputLabel",
  inheritAttrs: false,
  props: {
    modelValue: Object,
    inputValue: {
      type: String,
      default: ""
    },
    enabledInput: Boolean,
    formatLabel: Function,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String,
    error: Boolean,
    focused: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled,
      error,
      inputValue,
      uninjectFormItemContext
    } = toRefs(props);
    const prefixCls = (_a = props.baseCls) != null ? _a : getPrefixCls("input-label");
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const {
      inputRef,
      _focused,
      computedValue: computedInputValue,
      handleInput,
      handleComposition,
      handleFocus,
      handleBlur,
      handleMousedown
    } = useInput({
      modelValue: inputValue,
      emit,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers
    });
    const mergedFocused = computed(() => {
      var _a2;
      return (_a2 = props.focused) != null ? _a2 : _focused.value;
    });
    const showInput = computed(() => props.enabledInput && _focused.value || !props.modelValue);
    const formatLabel = () => {
      var _a2, _b;
      if (props.modelValue) {
        return (_b = (_a2 = props.formatLabel) == null ? void 0 : _a2.call(props, props.modelValue)) != null ? _b : props.modelValue.label;
      }
      return "";
    };
    const mergedPlaceholder = computed(() => {
      if (props.enabledInput && props.modelValue) {
        return formatLabel();
      }
      return props.placeholder;
    });
    const renderLabel = () => {
      var _a2, _b;
      if (props.modelValue) {
        return (_b = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
          data: props.modelValue
        })) != null ? _b : formatLabel();
      }
      return null;
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-search`]: props.enabledInput,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-error`]: mergedError.value
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render = () => createVNode("span", mergeProps(wrapperAttrs.value, {
      "class": cls.value,
      "title": formatLabel(),
      "onMousedown": handleMousedown
    }), [slots.prefix && createVNode("span", {
      "class": `${prefixCls}-prefix`
    }, [slots.prefix()]), createVNode("input", mergeProps(inputAttrs.value, {
      "ref": inputRef,
      "class": [`${prefixCls}-input`, {
        [`${prefixCls}-input-hidden`]: !showInput.value
      }],
      "value": computedInputValue.value,
      "readonly": !props.enabledInput,
      "placeholder": mergedPlaceholder.value,
      "disabled": mergedDisabled.value,
      "onInput": handleInput,
      "onFocus": handleFocus,
      "onBlur": handleBlur,
      "onCompositionstart": handleComposition,
      "onCompositionupdate": handleComposition,
      "onCompositionend": handleComposition
    }), null), createVNode("span", {
      "class": [`${prefixCls}-value`, {
        [`${prefixCls}-value-hidden`]: showInput.value
      }]
    }, [renderLabel()]), slots.suffix && createVNode("span", {
      "class": `${prefixCls}-suffix`
    }, [slots.suffix()])]);
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
const getValueData = (value, fieldNames) => {
  const result = [];
  for (const item of value) {
    if (isObject(item)) {
      result.push({
        raw: item,
        value: item[fieldNames.value],
        label: item[fieldNames.label],
        closable: item[fieldNames.closable],
        tagProps: item[fieldNames.tagProps]
      });
    } else if (value || isNumber(value)) {
      const raw = {
        value: item,
        label: String(item),
        closable: true
      };
      result.push(__spreadValues$6({
        raw
      }, raw));
    }
  }
  return result;
};
var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_FIELD_NAMES$1 = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var _InputTag = defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    inputValue: String,
    defaultInputValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: [Boolean, Object],
      default: false
    },
    formatTag: {
      type: Function
    },
    uniqueValue: {
      type: Boolean,
      default: false
    },
    fieldNames: {
      type: Object
    },
    baseCls: String,
    focused: Boolean,
    disabledInput: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: {
    "update:modelValue": (value) => true,
    "update:inputValue": (inputValue) => true,
    "change": (value, ev) => true,
    "inputValueChange": (inputValue, ev) => true,
    "pressEnter": (inputValue, ev) => true,
    "remove": (removed, ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      uninjectFormItemContext,
      modelValue
    } = toRefs(props);
    const prefixCls = props.baseCls || getPrefixCls("input-tag");
    const inputRef = ref();
    const mirrorRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const mergedFieldNames = computed(() => __spreadValues$5(__spreadValues$5({}, DEFAULT_FIELD_NAMES$1), props.fieldNames));
    const _focused = ref(false);
    const _value = ref(props.defaultValue);
    const _inputValue = ref(props.defaultInputValue);
    const isComposition = ref(false);
    const compositionValue = ref("");
    const retainInputValue = computed(() => {
      if (isObject(props.retainInputValue)) {
        return __spreadValues$5({
          create: false,
          blur: false
        }, props.retainInputValue);
      }
      return {
        create: props.retainInputValue,
        blur: props.retainInputValue
      };
    });
    const inputStyle = reactive({
      width: "12px"
    });
    const mergedFocused = computed(() => props.focused || _focused.value);
    const updateInputValue = (value, ev) => {
      _inputValue.value = value;
      emit("update:inputValue", value);
      emit("inputValueChange", value, ev);
    };
    const handleComposition = (ev) => {
      var _a;
      const {
        value
      } = ev.target;
      if (ev.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        updateInputValue(value, ev);
        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value;
          }
        });
      } else {
        isComposition.value = true;
        compositionValue.value = computedInputValue.value + ((_a = ev.data) != null ? _a : "");
      }
    };
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props.inputValue) != null ? _a : _inputValue.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = [];
      }
    });
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const handleInput = (ev) => {
      const {
        value
      } = ev.target;
      if (!isComposition.value) {
        updateInputValue(value, ev);
        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value;
          }
        });
      }
    };
    const valueData = computed(() => getValueData(computedValue.value, mergedFieldNames.value));
    const tags = computed(() => {
      if (props.maxTagCount > 0) {
        const invisibleTags = valueData.value.length - props.maxTagCount;
        if (invisibleTags > 0) {
          const result = valueData.value.slice(0, props.maxTagCount);
          const raw = {
            value: "__arco__more",
            label: `+${invisibleTags}...`,
            closable: false
          };
          result.push(__spreadValues$5({
            raw
          }, raw));
          return result;
        }
      }
      return valueData.value;
    });
    const updateValue = (value, ev) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (value, index2, e) => {
      var _a;
      const newValue = (_a = computedValue.value) == null ? void 0 : _a.filter((_, i) => i !== index2);
      updateValue(newValue, e);
      emit("remove", value, e);
    };
    const handleClear = (e) => {
      const newValue = [];
      updateValue(newValue, e);
      emit("clear", e);
    };
    const showClearBtn = computed(() => !mergedDisabled.value && !props.readonly && props.allowClear && Boolean(computedValue.value.length));
    const handlePressEnter = (e) => {
      var _a;
      if (computedInputValue.value) {
        e.preventDefault();
        if (props.uniqueValue && ((_a = computedValue.value) == null ? void 0 : _a.includes(computedInputValue.value))) {
          emit("pressEnter", computedInputValue.value, e);
          return;
        }
        const newValue = computedValue.value.concat(computedInputValue.value);
        updateValue(newValue, e);
        emit("pressEnter", computedInputValue.value, e);
        if (!retainInputValue.value.create) {
          updateInputValue("", e);
        }
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      _focused.value = true;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      _focused.value = false;
      if (!retainInputValue.value.blur && computedInputValue.value) {
        updateInputValue("", ev);
      }
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const getLastClosableIndex = () => {
      for (let i = valueData.value.length - 1; i >= 0; i--) {
        if (valueData.value[i].closable) {
          return i;
        }
      }
      return -1;
    };
    const handleKeyDown = (e) => {
      if (mergedDisabled.value || props.readonly) {
        return;
      }
      const keyCode = e.key || e.code;
      if (!isComposition.value && computedInputValue.value && keyCode === Enter.key) {
        handlePressEnter(e);
      }
      if (!isComposition.value && tags.value.length > 0 && !computedInputValue.value && keyCode === Backspace.key) {
        const lastIndex = getLastClosableIndex();
        if (lastIndex >= 0) {
          handleRemove(valueData.value[lastIndex].value, lastIndex, e);
        }
      }
    };
    const setInputWidth = (width) => {
      if (width > 12) {
        inputStyle.width = `${width}px`;
      } else {
        inputStyle.width = "12px";
      }
    };
    onMounted(() => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    });
    const handleResize = () => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    };
    watch(computedInputValue, (value) => {
      if (inputRef.value && !isComposition.value && value !== inputRef.value.value) {
        inputRef.value.value = value;
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-disabled-input`]: props.disabledInput,
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-readonly`]: props.readonly,
      [`${prefixCls}-has-tag`]: tags.value.length > 0,
      [`${prefixCls}-has-prefix`]: Boolean(slots.prefix),
      [`${prefixCls}-has-suffix`]: Boolean(slots.suffix) || showClearBtn.value || feedback.value,
      [`${prefixCls}-has-placeholder`]: !computedValue.value.length
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render = () => {
      var _a;
      return createVNode("span", mergeProps({
        "class": cls.value,
        "onMousedown": handleMousedown
      }, wrapperAttrs.value), [createVNode(ResizeObserver$1, {
        "onResize": handleResize
      }, {
        default: () => [createVNode("span", {
          "ref": mirrorRef,
          "class": `${prefixCls}-mirror`
        }, [tags.value.length > 0 ? compositionValue.value || computedInputValue.value : compositionValue.value || computedInputValue.value || props.placeholder])]
      }), slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode(TransitionGroup, {
        "tag": "span",
        "name": "input-tag-zoom",
        "class": `${prefixCls}-inner`
      }, {
        default: () => [tags.value.map((item, index2) => createVNode(Tag, mergeProps({
          "key": `tag-${item.value}`,
          "class": `${prefixCls}-tag`,
          "closable": !mergedDisabled.value && !props.readonly && item.closable,
          "visible": true
        }, item.tagProps, {
          "onClose": (ev) => handleRemove(item.value, index2, ev)
        }), {
          default: () => {
            var _a2, _b, _c, _d;
            return [(_d = (_c = (_a2 = slots.tag) == null ? void 0 : _a2.call(slots, {
              data: item.raw
            })) != null ? _c : (_b = props.formatTag) == null ? void 0 : _b.call(props, item.raw)) != null ? _d : item.label];
          }
        })), createVNode("input", mergeProps(inputAttrs.value, {
          "ref": inputRef,
          "key": "input-tag-input",
          "class": `${prefixCls}-input`,
          "style": inputStyle,
          "placeholder": tags.value.length === 0 ? props.placeholder : void 0,
          "disabled": mergedDisabled.value,
          "readonly": props.readonly || props.disabledInput,
          "onInput": handleInput,
          "onKeydown": handleKeyDown,
          "onFocus": handleFocus,
          "onBlur": handleBlur,
          "onCompositionstart": handleComposition,
          "onCompositionupdate": handleComposition,
          "onCompositionend": handleComposition
        }), null)]
      }), showClearBtn.value && createVNode(IconHover, {
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear,
        "onMousedown": (e) => e.stopPropagation()
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(feedback.value)) && createVNode("span", {
        "class": `${prefixCls}-suffix`
      }, [(_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const InputTag = Object.assign(_InputTag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputTag.name, _InputTag);
  }
});
var SelectView = defineComponent({
  name: "SelectView",
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    inputValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: Boolean,
      default: (props) => isArray(props.modelValue)
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["remove", "clear", "focus", "blur"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      size,
      disabled,
      error
    } = toRefs(props);
    const prefixCls = getPrefixCls("select-view");
    const {
      feedback,
      eventHandlers,
      mergedDisabled,
      mergedSize: _mergedSize,
      mergedError
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const {
      opened
    } = toRefs(props);
    const componentRef = ref();
    const inputRef = computed(() => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.inputRef;
    });
    const isEmptyValue = computed(() => props.modelValue.length === 0);
    const enabledInput = computed(() => props.allowSearch || props.allowCreate);
    const showClearBtn = computed(() => props.allowClear && !props.disabled && !isEmptyValue.value);
    const handleFocus = (ev) => {
      var _a, _b;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (tag) => {
      emit("remove", tag);
    };
    const handleClear = (ev) => {
      emit("clear", ev);
    };
    const renderIcon = () => {
      var _a, _b, _c, _d;
      if (props.loading) {
        return (_b = (_a = slots["loading-icon"]) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(IconLoading, null, null);
      }
      if (props.allowSearch && props.opened) {
        return (_d = (_c = slots["search-icon"]) == null ? void 0 : _c.call(slots)) != null ? _d : createVNode(IconSearch, null, null);
      }
      if (slots["arrow-icon"]) {
        return slots["arrow-icon"]();
      }
      return createVNode(IconDown, {
        "class": `${prefixCls}-arrow-icon`
      }, null);
    };
    const renderSuffix = () => createVNode(Fragment, null, [showClearBtn.value && createVNode(IconHover, {
      "class": `${prefixCls}-clear-btn`,
      "onClick": handleClear,
      "onMousedown": (ev) => ev.stopPropagation()
    }, {
      default: () => [createVNode(IconClose, null, null)]
    }), createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderIcon()]), Boolean(feedback.value) && createVNode(FeedbackIcon, {
      "type": feedback.value
    }, null)]);
    watch(opened, (opened2) => {
      if (!opened2 && inputRef.value && inputRef.value.isSameNode(document.activeElement)) {
        inputRef.value.blur();
      }
    });
    const cls = computed(() => [`${prefixCls}-${props.multiple ? "multiple" : "single"}`, {
      [`${prefixCls}-opened`]: props.opened,
      [`${prefixCls}-borderless`]: !props.bordered
    }]);
    const render = () => {
      if (props.multiple) {
        return createVNode(InputTag, {
          "ref": componentRef,
          "baseCls": prefixCls,
          "class": cls.value,
          "modelValue": props.modelValue,
          "inputValue": props.inputValue,
          "focused": props.opened,
          "placeholder": props.placeholder,
          "disabled": mergedDisabled.value,
          "size": mergedSize.value,
          "error": mergedError.value,
          "maxTagCount": props.maxTagCount,
          "disabledInput": !props.allowSearch && !props.allowCreate,
          "retainInputValue": true,
          "uninjectFormItemContext": true,
          "onRemove": handleRemove,
          "onFocus": handleFocus,
          "onBlur": handleBlur
        }, {
          prefix: slots.prefix,
          suffix: renderSuffix,
          tag: slots.label
        });
      }
      return createVNode(InputLabel, {
        "ref": componentRef,
        "baseCls": prefixCls,
        "class": cls.value,
        "modelValue": props.modelValue[0],
        "inputValue": props.inputValue,
        "focused": props.opened,
        "placeholder": props.placeholder,
        "disabled": mergedDisabled.value,
        "size": mergedSize.value,
        "error": mergedError.value,
        "enabledInput": enabledInput.value,
        "uninjectFormItemContext": true,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, {
        default: slots.label,
        prefix: slots.prefix,
        suffix: renderSuffix
      });
    };
    return {
      inputRef,
      handleFocus,
      handleBlur,
      render
    };
  },
  methods: {
    focus() {
      if (this.inputRef) {
        this.inputRef.focus();
      }
    },
    blur() {
      if (this.inputRef) {
        this.inputRef.blur();
      }
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$e = defineComponent({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    const prefixCls = getPrefixCls("select-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("li", {
      class: normalizeClass(`${_ctx.prefixCls}-title`)
    }, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 64);
}
var Optgroup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const target = typeof window === "undefined" ? global : window;
function debounce(callback, delay) {
  let timer = 0;
  return (...args) => {
    if (timer) {
      target.clearTimeout(timer);
    }
    timer = target.setTimeout(() => {
      timer = 0;
      callback(...args);
    }, delay);
  };
}
var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const DEFAULT_FIELD_NAMES = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var _Select = defineComponent({
  name: "Select",
  components: {
    Trigger,
    SelectView
  },
  inheritAttrs: false,
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean, Object, Array],
      default: (props) => isUndefined(props.multiple) ? "" : []
    },
    inputValue: {
      type: String
    },
    defaultInputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    placeholder: String,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: [Boolean, Object],
      default: (props) => Boolean(props.multiple)
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    popupContainer: {
      type: [String, Object]
    },
    bordered: {
      type: Boolean,
      default: true
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    unmountOnClose: {
      type: Boolean,
      default: false
    },
    filterOption: {
      type: [Boolean, Function],
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    virtualListProps: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    formatLabel: {
      type: Function
    },
    fallbackOption: {
      type: [Boolean, Function],
      default: true
    },
    showExtraOptions: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    searchDelay: {
      type: Number,
      default: 500
    },
    limit: {
      type: Number,
      default: 0
    },
    fieldNames: {
      type: Object
    },
    scrollbar: {
      type: [Boolean, Object],
      default: true
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: false
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "update:inputValue": (inputValue) => true,
    "update:popupVisible": (visible) => true,
    "change": (value) => true,
    "inputValueChange": (inputValue) => true,
    "popupVisibleChange": (visible) => true,
    "clear": (ev) => true,
    "remove": (removed) => true,
    "search": (inputValue) => true,
    "dropdownScroll": (ev) => true,
    "dropdownReachBottom": (ev) => true,
    "exceedLimit": (value, ev) => true
  },
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      options,
      filterOption,
      valueKey,
      multiple,
      popupVisible,
      showExtraOptions,
      modelValue,
      fieldNames,
      loading,
      defaultActiveFirstOption
    } = toRefs(props);
    const prefixCls = getPrefixCls("select");
    const {
      mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const component = computed(() => props.virtualListProps ? "div" : "li");
    const retainInputValue = computed(() => isObject(props.allowSearch) && Boolean(props.allowSearch.retainInputValue));
    computed(() => {
      if (isFunction(props.formatLabel)) {
        return (data) => {
          const optionInfo = optionInfoMap.get(data.value);
          return props.formatLabel(optionInfo);
        };
      }
      return void 0;
    });
    const dropdownRef = ref();
    const optionRefs = ref({});
    const virtualListRef = ref();
    const {
      computedPopupVisible,
      handlePopupVisibleChange
    } = useTrigger({
      popupVisible,
      emit
    });
    const _value = ref(props.defaultValue);
    const computedValueObjects = computed(() => {
      var _a;
      const mergedValue = (_a = props.modelValue) != null ? _a : _value.value;
      const valueArray = isArray(mergedValue) ? mergedValue : mergedValue || isNumber(mergedValue) || isString(mergedValue) || isBoolean(mergedValue) ? [mergedValue] : [];
      return valueArray.map((value) => ({
        value,
        key: getKeyFromValue(value, props.valueKey)
      }));
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = multiple.value ? [] : value;
      }
    });
    const computedValueKeys = computed(() => computedValueObjects.value.map((obj) => obj.key));
    const mergedFieldNames = computed(() => __spreadValues$4(__spreadValues$4({}, DEFAULT_FIELD_NAMES), fieldNames == null ? void 0 : fieldNames.value));
    const _selectedOption = ref();
    const getRawOptionFromValueKeys = (valueKeys) => {
      const optionMap = {};
      valueKeys.forEach((key) => {
        optionMap[key] = optionInfoMap.get(key);
      });
      return optionMap;
    };
    const updateSelectedOption = (valueKeys) => {
      _selectedOption.value = getRawOptionFromValueKeys(valueKeys);
    };
    const getFallBackOption = (value) => {
      if (isFunction(props.fallbackOption)) {
        return props.fallbackOption(value);
      }
      return {
        [mergedFieldNames.value.value]: value,
        [mergedFieldNames.value.label]: String(isObject(value) ? value[valueKey == null ? void 0 : valueKey.value] : value)
      };
    };
    const getExtraValueData = () => {
      const valueArray = [];
      const keyArray = [];
      if (props.allowCreate || props.fallbackOption) {
        for (const item of computedValueObjects.value) {
          if (!keyArray.includes(item.key) && item.value !== "") {
            const optionInfo = optionInfoMap.get(item.key);
            if (!optionInfo || optionInfo.origin === "extraOptions") {
              valueArray.push(item);
              keyArray.push(item.key);
            }
          }
        }
      }
      if (props.allowCreate && computedInputValue.value) {
        const key = getKeyFromValue(computedInputValue.value);
        if (!keyArray.includes(key)) {
          const optionInfo = optionInfoMap.get(key);
          if (!optionInfo || optionInfo.origin === "extraOptions") {
            valueArray.push({
              value: computedInputValue.value,
              key
            });
          }
        }
      }
      return valueArray;
    };
    const extraValueObjects = ref([]);
    const extraOptions = computed(() => extraValueObjects.value.map((obj) => {
      var _a;
      let optionInfo = getFallBackOption(obj.value);
      const extraOptionRawInfo = (_a = _selectedOption.value) == null ? void 0 : _a[obj.key];
      if (!isUndefined(extraOptionRawInfo) && !isEmptyObject(extraOptionRawInfo)) {
        optionInfo = __spreadValues$4(__spreadValues$4({}, optionInfo), extraOptionRawInfo);
      }
      return optionInfo;
    }));
    nextTick(() => {
      watchEffect(() => {
        var _a;
        const valueData = getExtraValueData();
        if (valueData.length !== extraValueObjects.value.length) {
          extraValueObjects.value = valueData;
        } else if (valueData.length > 0) {
          for (let i = 0; i < valueData.length; i++) {
            if (valueData[i].key !== ((_a = extraValueObjects.value[i]) == null ? void 0 : _a.key)) {
              extraValueObjects.value = valueData;
              break;
            }
          }
        }
      });
    });
    const _inputValue = ref("");
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props.inputValue) != null ? _a : _inputValue.value;
    });
    watch(computedPopupVisible, (visible) => {
      if (!visible && !retainInputValue.value && computedInputValue.value) {
        updateInputValue("");
      }
    });
    const getValueFromValueKeys = (valueKeys) => {
      var _a, _b;
      if (!props.multiple) {
        return (_b = (_a = optionInfoMap.get(valueKeys[0])) == null ? void 0 : _a.value) != null ? _b : hasEmptyStringKey(optionInfoMap) ? void 0 : "";
      }
      return valueKeys.map((key) => {
        var _a2, _b2;
        return (_b2 = (_a2 = optionInfoMap.get(key)) == null ? void 0 : _a2.value) != null ? _b2 : "";
      });
    };
    const updateValue = (valueKeys) => {
      var _a, _b;
      const value = getValueFromValueKeys(valueKeys);
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
      updateSelectedOption(valueKeys);
    };
    const updateInputValue = (inputValue) => {
      _inputValue.value = inputValue;
      emit("update:inputValue", inputValue);
      emit("inputValueChange", inputValue);
    };
    const handleSelect = (key, ev) => {
      if (props.multiple) {
        if (!computedValueKeys.value.includes(key)) {
          if (enabledOptionKeys.value.includes(key)) {
            if (props.limit > 0 && computedValueKeys.value.length >= props.limit) {
              const info = optionInfoMap.get(key);
              emit("exceedLimit", info == null ? void 0 : info.value, ev);
            } else {
              const valueKeys = computedValueKeys.value.concat(key);
              updateValue(valueKeys);
            }
          }
        } else {
          const valueKeys = computedValueKeys.value.filter((_key) => _key !== key);
          updateValue(valueKeys);
        }
        if (!retainInputValue.value) {
          updateInputValue("");
        }
      } else {
        if (key !== computedValueKeys.value[0]) {
          updateValue([key]);
        }
        if (retainInputValue.value) {
          const optionInfo = optionInfoMap.get(key);
          if (optionInfo) {
            updateInputValue(optionInfo.label);
          }
        }
        handlePopupVisibleChange(false);
      }
    };
    const handleSearch = debounce((value) => {
      emit("search", value);
    }, props.searchDelay);
    const handleInputValueChange = (inputValue) => {
      if (inputValue !== computedInputValue.value) {
        if (!computedPopupVisible.value) {
          handlePopupVisibleChange(true);
        }
        updateInputValue(inputValue);
        if (props.allowSearch) {
          handleSearch(inputValue);
        }
      }
    };
    const handleRemove = (key) => {
      const optionInfo = optionInfoMap.get(key);
      const newKeys = computedValueKeys.value.filter((_key) => _key !== key);
      updateValue(newKeys);
      emit("remove", optionInfo == null ? void 0 : optionInfo.value);
    };
    const handleClear = (e) => {
      e == null ? void 0 : e.stopPropagation();
      const newKeys = computedValueKeys.value.filter((key) => {
        var _a;
        return (_a = optionInfoMap.get(key)) == null ? void 0 : _a.disabled;
      });
      updateValue(newKeys);
      updateInputValue("");
      emit("clear", e);
    };
    const handleDropdownScroll = (e) => {
      emit("dropdownScroll", e);
    };
    const handleDropdownReachBottom = (e) => {
      emit("dropdownReachBottom", e);
    };
    const {
      validOptions,
      optionInfoMap,
      validOptionInfos,
      enabledOptionKeys,
      handleKeyDown
    } = useSelect({
      multiple,
      options,
      extraOptions,
      inputValue: computedInputValue,
      filterOption,
      showExtraOptions,
      component,
      valueKey,
      fieldNames,
      loading,
      popupVisible: computedPopupVisible,
      valueKeys: computedValueKeys,
      dropdownRef,
      optionRefs,
      virtualListRef,
      defaultActiveFirstOption,
      onSelect: handleSelect,
      onPopupVisibleChange: handlePopupVisibleChange
    });
    const selectViewValue = computed(() => {
      var _a;
      const result = [];
      for (const item of computedValueObjects.value) {
        const optionInfo = optionInfoMap.get(item.key);
        if (optionInfo) {
          result.push(__spreadProps$2(__spreadValues$4({}, optionInfo), {
            value: item.key,
            label: (_a = optionInfo == null ? void 0 : optionInfo.label) != null ? _a : String(isObject(item.value) ? item.value[valueKey == null ? void 0 : valueKey.value] : item.value),
            closable: !(optionInfo == null ? void 0 : optionInfo.disabled),
            tagProps: optionInfo == null ? void 0 : optionInfo.tagProps
          }));
        }
      }
      return result;
    });
    const getOptionContentFunc = (optionInfo) => {
      if (isFunction(slots.option)) {
        const optionSlot = slots.option;
        return () => optionSlot({
          data: optionInfo.raw
        });
      }
      if (isFunction(optionInfo.render)) {
        return optionInfo.render;
      }
      return () => optionInfo.label;
    };
    const renderOption = (optionInfo) => {
      if (isGroupOptionInfo(optionInfo)) {
        let _slot;
        return createVNode(Optgroup, {
          "key": optionInfo.key,
          "label": optionInfo.label
        }, _isSlot$1(_slot = optionInfo.options.map((child) => renderOption(child))) ? _slot : {
          default: () => [_slot]
        });
      }
      if (!isValidOption(optionInfo, {
        inputValue: computedInputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      })) {
        return null;
      }
      return createVNode(Option, {
        "ref": (ref2) => {
          if (ref2 == null ? void 0 : ref2.$el) {
            optionRefs.value[optionInfo.key] = ref2.$el;
          }
        },
        "key": optionInfo.key,
        "value": optionInfo.value,
        "label": optionInfo.label,
        "disabled": optionInfo.disabled,
        "internal": true
      }, {
        default: getOptionContentFunc(optionInfo)
      });
    };
    const renderDropDown = () => {
      return createVNode(SelectDropdown, {
        "ref": dropdownRef,
        "loading": props.loading,
        "empty": validOptionInfos.value.length === 0,
        "virtualList": Boolean(props.virtualListProps),
        "scrollbar": props.scrollbar,
        "showHeaderOnEmpty": props.showHeaderOnEmpty,
        "showFooterOnEmpty": props.showFooterOnEmpty,
        "onScroll": handleDropdownScroll,
        "onReachBottom": handleDropdownReachBottom
      }, {
        "default": () => {
          var _a, _b;
          return [...(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [], ...validOptions.value.map(renderOption)];
        },
        "virtual-list": () => createVNode(VirtualList, mergeProps(props.virtualListProps, {
          "ref": virtualListRef,
          "data": validOptions.value
        }), {
          item: ({
            item
          }) => renderOption(item)
        }),
        "empty": slots.empty,
        "header": slots.header,
        "footer": slots.footer
      });
    };
    const renderLabel = ({
      data
    }) => {
      var _a, _b, _c, _d;
      if ((slots.label || isFunction(props.formatLabel)) && data) {
        const optionInfo = optionInfoMap.get(data.value);
        if (optionInfo == null ? void 0 : optionInfo.raw) {
          return (_c = (_a = slots.label) == null ? void 0 : _a.call(slots, {
            data: optionInfo.raw
          })) != null ? _c : (_b = props.formatLabel) == null ? void 0 : _b.call(props, optionInfo.raw);
        }
      }
      return (_d = data == null ? void 0 : data.label) != null ? _d : "";
    };
    return () => createVNode(Trigger, mergeProps({
      "trigger": "click",
      "position": "bl",
      "popupOffset": 4,
      "animationName": "slide-dynamic-origin",
      "hideEmpty": true,
      "preventFocus": true,
      "autoFitPopupWidth": true,
      "autoFitTransformOrigin": true,
      "disabled": mergedDisabled.value,
      "popupVisible": computedPopupVisible.value,
      "unmountOnClose": props.unmountOnClose,
      "clickToClose": !(props.allowSearch || props.allowCreate),
      "popupContainer": props.popupContainer,
      "onPopupVisibleChange": handlePopupVisibleChange
    }, props.triggerProps), {
      default: () => {
        var _a, _b;
        return [(_b = (_a = slots.trigger) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(SelectView, mergeProps({
          "class": prefixCls,
          "modelValue": selectViewValue.value,
          "inputValue": computedInputValue.value,
          "multiple": props.multiple,
          "disabled": mergedDisabled.value,
          "error": mergedError.value,
          "loading": props.loading,
          "allowClear": props.allowClear,
          "allowCreate": props.allowCreate,
          "allowSearch": Boolean(props.allowSearch),
          "opened": computedPopupVisible.value,
          "maxTagCount": props.maxTagCount,
          "placeholder": props.placeholder,
          "bordered": props.bordered,
          "size": mergedSize.value,
          "onInputValueChange": handleInputValueChange,
          "onRemove": handleRemove,
          "onClear": handleClear,
          "onKeydown": handleKeyDown
        }, attrs), {
          "label": renderLabel,
          "prefix": slots.prefix,
          "arrow-icon": slots["arrow-icon"],
          "loading-icon": slots["loading-icon"],
          "search-icon": slots["search-icon"]
        })];
      },
      content: renderDropDown
    });
  }
});
const Select = Object.assign(_Select, {
  Option,
  OptGroup: Optgroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Select.name, _Select);
    app.component(componentPrefix + Option.name, Option);
    app.component(componentPrefix + Optgroup.name, Optgroup);
  }
});
const _sfc_main$d = defineComponent({
  name: "IconLeft",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-left`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$3 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M32 8.4 16.444 23.956 32 39.513" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$3, 14, _hoisted_1$3);
}
var _IconLeft = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const IconLeft = Object.assign(_IconLeft, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLeft.name, _IconLeft);
  }
});
const _sfc_main$c = defineComponent({
  name: "IconUp",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-up`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "M39.6 30.557 24.043 15 8.487 30.557" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$2, 14, _hoisted_1$2);
}
var _IconUp = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const IconUp = Object.assign(_IconUp, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconUp.name, _IconUp);
  }
});
var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const responsiveArray = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
const responsiveMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let subscribers = [];
let subUid = -1;
let screens = {};
const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap, breakpointChecked) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }
    subscribers.forEach((item) => {
      item.func(screens, breakpointChecked);
    });
    return true;
  },
  subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({
      token,
      func
    });
    func(screens, null);
    return token;
  },
  unsubscribe(token) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const handler = this.matchHandlers[matchMediaQuery];
      if (handler && handler.mql && handler.listener) {
        if (handler.mql.removeEventListener) {
          handler.mql.removeEventListener("change", handler.listener);
        } else {
          handler.mql.removeListener(handler.listener);
        }
      }
    });
  },
  register() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const listener = ({ matches }) => {
        this.dispatch(__spreadProps$1(__spreadValues$3({}, screens), {
          [screen]: matches
        }), screen);
      };
      const mql = window.matchMedia(matchMediaQuery);
      if (mql.addEventListener) {
        mql.addEventListener("change", listener);
      } else {
        mql.addListener(listener);
      }
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener
      };
      listener(mql);
    });
  }
};
function isResponsiveValue(val) {
  return isObject(val);
}
function useResponsiveState(val, defaultVal, fallbackToXs = false) {
  const screens2 = ref({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  const result = computed(() => {
    let res = defaultVal;
    if (isResponsiveValue(val.value)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if ((screens2.value[breakpoint] || breakpoint === "xs" && fallbackToXs) && val.value[breakpoint] !== void 0) {
          res = val.value[breakpoint];
          break;
        }
      }
    } else {
      res = val.value;
    }
    return res;
  });
  let subscribeToken = "";
  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screensVal) => {
      if (isResponsiveValue(val.value)) {
        screens2.value = screensVal;
      }
    });
  });
  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken);
    }
  });
  return result;
}
const RowContextInjectionKey = Symbol("RowContextInjectionKey");
const GridContextInjectionKey = Symbol("GridContextInjectionKey");
const GridDataCollectorInjectionKey = Symbol("GridDataCollectorInjectionKey");
const _sfc_main$b = defineComponent({
  name: "Row",
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    },
    div: {
      type: Boolean
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { gutter, align, justify, div, wrap } = toRefs(props);
    const prefixCls = getPrefixCls("row");
    const classNames = computed(() => {
      return {
        [`${prefixCls}`]: !div.value,
        [`${prefixCls}-nowrap`]: !wrap.value,
        [`${prefixCls}-align-${align.value}`]: align.value,
        [`${prefixCls}-justify-${justify.value}`]: justify.value
      };
    });
    const propGutterHorizontal = computed(() => Array.isArray(gutter.value) ? gutter.value[0] : gutter.value);
    const propGutterVertical = computed(() => Array.isArray(gutter.value) ? gutter.value[1] : 0);
    const gutterHorizontal = useResponsiveState(propGutterHorizontal, 0);
    const gutterVertical = useResponsiveState(propGutterVertical, 0);
    const styles = computed(() => {
      const result = {};
      if ((gutterHorizontal.value || gutterVertical.value) && !div.value) {
        const marginHorizontal = -gutterHorizontal.value / 2;
        const marginVertical = -gutterVertical.value / 2;
        if (marginHorizontal) {
          result.marginLeft = `${marginHorizontal}px`;
          result.marginRight = `${marginHorizontal}px`;
        }
        if (marginVertical) {
          result.marginTop = `${marginVertical}px`;
          result.marginBottom = `${marginVertical}px`;
        }
      }
      return result;
    });
    const resultGutter = computed(() => [
      gutterHorizontal.value,
      gutterVertical.value
    ]);
    provide(RowContextInjectionKey, reactive({
      gutter: resultGutter,
      div
    }));
    return {
      classNames,
      styles
    };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
function useResponsiveValue(props) {
  const value = computed(() => {
    const { val, key, xs, sm, md, lg, xl, xxl } = props.value;
    if (!xs && !sm && !md && !lg && !xl && !xxl) {
      return val;
    }
    const result = {};
    responsiveArray.forEach((breakpoint) => {
      const config = props.value[breakpoint];
      if (isNumber(config)) {
        result[breakpoint] = config;
      } else if (isObject(config) && isNumber(config[key])) {
        result[breakpoint] = config[key];
      }
    });
    return result;
  });
  return value;
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
function getAllowableFlexValue(flexValue) {
  if (isString(flexValue) && (["initial", "auto", "none"].includes(flexValue) || /^\d+$/.test(flexValue)) || isNumber(flexValue)) {
    return flexValue;
  }
  if (isString(flexValue) && /^\d+(px|em|rem|%)$/.test(flexValue)) {
    return `0 0 ${flexValue}`;
  }
  return void 0;
}
const _sfc_main$a = defineComponent({
  name: "Col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number
    },
    order: {
      type: Number
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    },
    xxl: {
      type: [Number, Object]
    },
    flex: {
      type: [Number, String]
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("col");
    const rowContext = inject(RowContextInjectionKey, {});
    const flexValue = computed(() => getAllowableFlexValue(props.flex));
    const mergeClassName = computed(() => {
      const { div } = rowContext;
      const { span: span2, offset, order, xs, sm, md, lg, xl, xxl } = props;
      const result = {
        [`${prefixCls}`]: !div,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-${span2}`]: !div && !xs && !sm && !md && !lg && !xl && !xxl,
        [`${prefixCls}-offset-${offset}`]: offset && offset > 0
      };
      const screenList = { xs, sm, md, lg, xl, xxl };
      Object.keys(screenList).forEach((screen) => {
        const screenValue = screenList[screen];
        if (screenValue && isNumber(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue}`] = true;
        } else if (screenValue && isObject(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue.span}`] = screenValue.span;
          result[`${prefixCls}-${screen}-offset-${screenValue.offset}`] = screenValue.offset;
          result[`${prefixCls}-${screen}-order-${screenValue.order}`] = screenValue.order;
        }
      });
      return result;
    });
    const classNames = computed(() => {
      return flexValue.value ? prefixCls : mergeClassName.value;
    });
    const paddingStyles = computed(() => {
      const { gutter, div } = rowContext;
      const result = {};
      if (Array.isArray(gutter) && !div) {
        const paddingHorizontal = gutter[0] && gutter[0] / 2 || 0;
        const paddingVertical = gutter[1] && gutter[1] / 2 || 0;
        if (paddingHorizontal) {
          result.paddingLeft = `${paddingHorizontal}px`;
          result.paddingRight = `${paddingHorizontal}px`;
        }
        if (paddingVertical) {
          result.paddingTop = `${paddingVertical}px`;
          result.paddingBottom = `${paddingVertical}px`;
        }
      }
      return result;
    });
    const flexStyles = computed(() => flexValue.value ? { flex: flexValue.value } : {});
    const responsiveConfig = computed(() => pick(props, responsiveArray));
    const propSpan = useResponsiveValue(computed(() => __spreadValues$2({
      val: props.span,
      key: "span"
    }, responsiveConfig.value)));
    const span = useResponsiveState(propSpan, 24, true);
    return {
      visible: computed(() => !!span.value),
      classNames,
      styles: computed(() => __spreadValues$2(__spreadValues$2({}, paddingStyles.value), flexStyles.value))
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6)) : createCommentVNode("v-if", true);
}
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
function resolveItemData(cols, props) {
  var _a, _b;
  const originSpan = (_a = props.span) != null ? _a : 1;
  const originOffset = (_b = props.offset) != null ? _b : 0;
  const offset = Math.min(originOffset, cols);
  const span = Math.min(offset > 0 ? originSpan + originOffset : originSpan, cols);
  return {
    span,
    offset,
    suffix: "suffix" in props ? props.suffix !== false : false
  };
}
function setItemVisible({
  cols,
  collapsed,
  collapsedRows,
  itemDataList
}) {
  let overflow = false;
  let displayIndexList = [];
  function isOverflow(span) {
    return Math.ceil(span / cols) > collapsedRows;
  }
  if (collapsed) {
    let spanSum = 0;
    for (let i = 0; i < itemDataList.length; i++) {
      if (itemDataList[i].suffix) {
        spanSum += itemDataList[i].span;
        displayIndexList.push(i);
      }
    }
    if (!isOverflow(spanSum)) {
      let current = 0;
      while (current < itemDataList.length) {
        const item = itemDataList[current];
        if (!item.suffix) {
          spanSum += item.span;
          if (isOverflow(spanSum)) {
            break;
          }
          displayIndexList.push(current);
        }
        current++;
      }
    }
    overflow = itemDataList.some((item, index2) => !item.suffix && !displayIndexList.includes(index2));
  } else {
    displayIndexList = itemDataList.map((_, index2) => index2);
  }
  return {
    overflow,
    displayIndexList
  };
}
const _sfc_main$9 = defineComponent({
  name: "Grid",
  props: {
    cols: {
      type: [Number, Object],
      default: 24
    },
    rowGap: {
      type: [Number, Object],
      default: 0
    },
    colGap: {
      type: [Number, Object],
      default: 0
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    collapsedRows: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const {
      cols: propCols,
      rowGap: propRowGap,
      colGap: propColGap,
      collapsedRows,
      collapsed
    } = toRefs(props);
    const cols = useResponsiveState(propCols, 24);
    const colGap = useResponsiveState(propColGap, 0);
    const rowGap = useResponsiveState(propRowGap, 0);
    const prefixCls = getPrefixCls("grid");
    const classNames = computed(() => [prefixCls]);
    const style = computed(() => [
      {
        "gap": `${rowGap.value}px ${colGap.value}px`,
        "grid-template-columns": `repeat(${cols.value}, minmax(0px, 1fr))`
      }
    ]);
    const itemDataMap = reactive(/* @__PURE__ */ new Map());
    const itemDataList = computed(() => {
      const list = [];
      for (const [index2, itemData] of itemDataMap.entries()) {
        list[index2] = itemData;
      }
      return list;
    });
    const gridContext = reactive({
      overflow: false,
      displayIndexList: [],
      cols: cols.value,
      colGap: colGap.value
    });
    watchEffect(() => {
      gridContext.cols = cols.value;
      gridContext.colGap = colGap.value;
    });
    watchEffect(() => {
      const displayInfo = setItemVisible({
        cols: cols.value,
        collapsed: collapsed.value,
        collapsedRows: collapsedRows.value,
        itemDataList: itemDataList.value
      });
      gridContext.overflow = displayInfo.overflow;
      gridContext.displayIndexList = displayInfo.displayIndexList;
    });
    provide(GridContextInjectionKey, gridContext);
    provide(GridDataCollectorInjectionKey, {
      collectItemData(index2, itemData) {
        itemDataMap.set(index2, itemData);
      },
      removeItemData(index2) {
        itemDataMap.delete(index2);
      }
    });
    return {
      classNames,
      style
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var _Grid = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const _sfc_main$8 = defineComponent({
  name: "GridItem",
  props: {
    span: {
      type: [Number, Object],
      default: 1
    },
    offset: {
      type: [Number, Object],
      default: 0
    },
    suffix: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("grid-item");
    const domRef = ref();
    const { computedIndex } = useIndex({
      itemRef: domRef,
      selector: `.${prefixCls}`
    });
    const gridContext = inject(GridContextInjectionKey, {
      overflow: false,
      displayIndexList: [],
      cols: 24,
      colGap: 0
    });
    const gridDataCollector = inject(GridDataCollectorInjectionKey);
    const visible = computed(() => {
      var _a;
      return (_a = gridContext == null ? void 0 : gridContext.displayIndexList) == null ? void 0 : _a.includes(computedIndex.value);
    });
    const { span: propSpan, offset: propOffset } = toRefs(props);
    const rSpan = useResponsiveState(propSpan, 1);
    const rOffset = useResponsiveState(propOffset, 0);
    const itemData = computed(() => resolveItemData(gridContext.cols, __spreadProps(__spreadValues$1({}, props), {
      span: rSpan.value,
      offset: rOffset.value
    })));
    const classNames = computed(() => [prefixCls]);
    const offsetStyle = computed(() => {
      const { offset, span } = itemData.value;
      const { colGap } = gridContext;
      if (offset > 0) {
        const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`;
        return {
          "margin-left": `calc((${oneSpan} * ${offset}) + ${colGap * offset}px)`
        };
      }
      return {};
    });
    const columnStart = computed(() => {
      const { suffix, span } = itemData.value;
      const { cols } = gridContext;
      if (suffix) {
        return `${cols - span + 1}`;
      }
      return `span ${span}`;
    });
    const style = computed(() => {
      const { span } = itemData.value;
      if (domRef.value) {
        return [
          {
            "grid-column": `${columnStart.value} / span ${span}`
          },
          offsetStyle.value,
          !visible.value || span === 0 ? { display: "none" } : {}
        ];
      }
      return [];
    });
    watchEffect(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector == null ? void 0 : gridDataCollector.collectItemData(computedIndex.value, itemData.value);
      }
    });
    onUnmounted(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector == null ? void 0 : gridDataCollector.removeItemData(computedIndex.value);
      }
    });
    return {
      classNames,
      style,
      domRef,
      overflow: computed(() => gridContext.overflow)
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "domRef",
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default", { overflow: _ctx.overflow })
  ], 6);
}
var GridItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const Grid = Object.assign(_Grid, {
  Row,
  Col,
  Item: GridItem,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + Row.name, Row);
    app.component(componentPrefix + Col.name, Col);
    app.component(componentPrefix + _Grid.name, _Grid);
    app.component(componentPrefix + GridItem.name, GridItem);
  }
});
function strip(num, precision) {
  if (precision === void 0) {
    precision = 15;
  }
  return +parseFloat(Number(num).toPrecision(precision));
}
function digitLength(num) {
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    }
  }
}
function createOperation(operation) {
  return function() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      nums[_i] = arguments[_i];
    }
    var first = nums[0], others = nums.slice(1);
    return others.reduce(function(prev, next) {
      return operation(prev, next);
    }, first);
  };
}
var times = createOperation(function(num1, num2) {
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
});
var plus = createOperation(function(num1, num2) {
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
});
var minus = createOperation(function(num1, num2) {
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
});
var divide = createOperation(function(num1, num2) {
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
});
function round(num, decimal) {
  var base = Math.pow(10, decimal);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  return result;
}
var _boundaryCheckingState = true;
function enableBoundaryChecking(flag) {
  if (flag === void 0) {
    flag = true;
  }
  _boundaryCheckingState = flag;
}
var index = {
  strip,
  plus,
  minus,
  times,
  divide,
  round,
  digitLength,
  float2Fixed,
  enableBoundaryChecking
};
const _sfc_main$7 = defineComponent({
  name: "IconPlus",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-plus`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M5 24h38M24 5v38" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
var _IconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const IconPlus = Object.assign(_IconPlus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconPlus.name, _IconPlus);
  }
});
const _sfc_main$6 = defineComponent({
  name: "IconMinus",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-minus`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M5 24h38" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
var _IconMinus = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const IconMinus = Object.assign(_IconMinus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMinus.name, _IconMinus);
  }
});
var __defProp = Object.defineProperty;
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
const FIRST_DELAY = 800;
const SPEED = 150;
index.enableBoundaryChecking(false);
var _InputNumber = defineComponent({
  name: "InputNumber",
  props: {
    modelValue: Number,
    defaultValue: Number,
    mode: {
      type: String,
      default: "embed"
    },
    precision: Number,
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: String,
    hideButton: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    modelEvent: {
      type: String,
      default: "change"
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    inputAttrs: {
      type: Object
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true,
    "clear": (ev) => true,
    "input": (value, inputValue, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-number");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      size,
      disabled
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const mergedPrecision = computed(() => {
      if (isNumber(props.precision)) {
        const decimal = `${props.step}`.split(".")[1];
        const stepPrecision = decimal && decimal.length || 0;
        return Math.max(stepPrecision, props.precision);
      }
      return void 0;
    });
    const getStringValue = (number) => {
      var _a2, _b;
      if (!isNumber(number)) {
        return "";
      }
      const numString = mergedPrecision.value ? number.toFixed(mergedPrecision.value) : String(number);
      return (_b = (_a2 = props.formatter) == null ? void 0 : _a2.call(props, numString)) != null ? _b : numString;
    };
    const _value = ref(getStringValue((_a = props.modelValue) != null ? _a : props.defaultValue));
    const valueNumber = computed(() => {
      var _a2, _b;
      if (!_value.value) {
        return void 0;
      }
      const number = Number((_b = (_a2 = props.parser) == null ? void 0 : _a2.call(props, _value.value)) != null ? _b : _value.value);
      return Number.isNaN(number) ? void 0 : number;
    });
    const isMin = ref(isNumber(valueNumber.value) && valueNumber.value <= props.min);
    const isMax = ref(isNumber(valueNumber.value) && valueNumber.value >= props.max);
    let repeatTimer = 0;
    const clearRepeatTimer = () => {
      if (repeatTimer) {
        window.clearTimeout(repeatTimer);
        repeatTimer = 0;
      }
    };
    const getLegalValue = (value) => {
      if (isUndefined(value)) {
        return void 0;
      }
      if (isNumber(props.min) && value < props.min) {
        value = props.min;
      }
      if (isNumber(props.max) && value > props.max) {
        value = props.max;
      }
      return isNumber(mergedPrecision.value) ? index.round(value, mergedPrecision.value) : value;
    };
    const updateNumberStatus = (number) => {
      let _isMin = false;
      let _isMax = false;
      if (isNumber(number)) {
        if (number <= props.min) {
          _isMin = true;
        }
        if (number >= props.max) {
          _isMax = true;
        }
      }
      if (isMax.value !== _isMax) {
        isMax.value = _isMax;
      }
      if (isMin.value !== _isMin) {
        isMin.value = _isMin;
      }
    };
    const handleExceedRange = () => {
      const finalValue = getLegalValue(valueNumber.value);
      const stringValue = getStringValue(finalValue);
      if (finalValue !== valueNumber.value || _value.value !== stringValue) {
        _value.value = stringValue;
      }
      emit("update:modelValue", finalValue);
    };
    watch(() => props.min, (newVal) => {
      const _isMin = isNumber(valueNumber.value) && valueNumber.value <= newVal;
      if (isMin.value !== _isMin) {
        isMin.value = _isMin;
      }
      const isExceedMinValue = isNumber(valueNumber.value) && valueNumber.value < newVal;
      if (isExceedMinValue) {
        handleExceedRange();
      }
    });
    watch(() => props.max, (newVal) => {
      const _isMax = isNumber(valueNumber.value) && valueNumber.value >= newVal;
      if (isMax.value !== _isMax) {
        isMax.value = _isMax;
      }
      const isExceedMaxValue = isNumber(valueNumber.value) && valueNumber.value > newVal;
      if (isExceedMaxValue) {
        handleExceedRange();
      }
    });
    const nextStep = (method, event) => {
      if (mergedDisabled.value || method === "plus" && isMax.value || method === "minus" && isMin.value) {
        return;
      }
      let nextValue;
      if (isNumber(valueNumber.value)) {
        nextValue = getLegalValue(index[method](valueNumber.value, props.step));
      } else {
        nextValue = props.min === -Infinity ? 0 : props.min;
      }
      _value.value = getStringValue(nextValue);
      updateNumberStatus(nextValue);
      emit("update:modelValue", nextValue);
      emit("change", nextValue, event);
    };
    const handleStepButton = (event, method, needRepeat = false) => {
      var _a2;
      event.preventDefault();
      (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
      nextStep(method, event);
      if (needRepeat) {
        repeatTimer = window.setTimeout(() => event.target.dispatchEvent(event), repeatTimer ? SPEED : FIRST_DELAY);
      }
    };
    const handleInput = (value, ev) => {
      var _a2, _b, _c, _d;
      value = value.trim().replace(/。/g, ".");
      value = (_b = (_a2 = props.parser) == null ? void 0 : _a2.call(props, value)) != null ? _b : value;
      if (isNumber(Number(value)) || /^(\.|-)$/.test(value)) {
        _value.value = (_d = (_c = props.formatter) == null ? void 0 : _c.call(props, value)) != null ? _d : value;
        updateNumberStatus(valueNumber.value);
        if (props.modelEvent === "input") {
          emit("update:modelValue", valueNumber.value);
        }
        emit("input", valueNumber.value, _value.value, ev);
      }
    };
    const handleFocus = (ev) => {
      emit("focus", ev);
    };
    const handleChange = (value, ev) => {
      const finalValue = getLegalValue(valueNumber.value);
      const stringValue = getStringValue(finalValue);
      if (finalValue !== valueNumber.value || _value.value !== stringValue) {
        _value.value = stringValue;
        updateNumberStatus(finalValue);
      }
      nextTick(() => {
        if (isNumber(props.modelValue) && props.modelValue !== finalValue) {
          _value.value = getStringValue(props.modelValue);
          updateNumberStatus(props.modelValue);
        }
      });
      emit("update:modelValue", finalValue);
      emit("change", finalValue, ev);
    };
    const handleBlur = (ev) => {
      emit("blur", ev);
    };
    const handleClear = (ev) => {
      var _a2, _b;
      _value.value = "";
      emit("update:modelValue", void 0);
      emit("change", void 0, ev);
      (_b = (_a2 = eventHandlers.value) == null ? void 0 : _a2.onChange) == null ? void 0 : _b.call(_a2, ev);
      emit("clear", ev);
    };
    const onKeyDown = getKeyDownHandler(/* @__PURE__ */ new Map([[KEYBOARD_KEY.ARROW_UP, (ev) => {
      ev.preventDefault();
      !props.readOnly && nextStep("plus", ev);
    }], [KEYBOARD_KEY.ARROW_DOWN, (ev) => {
      ev.preventDefault();
      !props.readOnly && nextStep("minus", ev);
    }]]));
    watch(() => props.modelValue, (value) => {
      if (value !== valueNumber.value) {
        _value.value = getStringValue(value);
        updateNumberStatus(value);
      }
    });
    const renderSuffix = () => {
      var _a2, _b, _c;
      if (props.readOnly) {
        return null;
      }
      return createVNode(Fragment, null, [(_a2 = slots.suffix) == null ? void 0 : _a2.call(slots), createVNode("div", {
        "class": `${prefixCls}-step`
      }, [createVNode("button", {
        "class": [`${prefixCls}-step-button`, {
          [`${prefixCls}-step-button-disabled`]: mergedDisabled.value || isMax.value
        }],
        "type": "button",
        "tabindex": "-1",
        "disabled": mergedDisabled.value || isMax.value,
        "onMousedown": (e) => handleStepButton(e, "plus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, [slots.plus ? (_b = slots.plus) == null ? void 0 : _b.call(slots) : createVNode(IconUp, null, null)]), createVNode("button", {
        "class": [`${prefixCls}-step-button`, {
          [`${prefixCls}-step-button-disabled`]: mergedDisabled.value || isMin.value
        }],
        "type": "button",
        "tabindex": "-1",
        "disabled": mergedDisabled.value || isMin.value,
        "onMousedown": (e) => handleStepButton(e, "minus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, [slots.minus ? (_c = slots.minus) == null ? void 0 : _c.call(slots) : createVNode(IconDown, null, null)])])]);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-mode-${props.mode}`, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-readonly`]: props.readOnly
    }]);
    const renderPrependButton = () => {
      return createVNode(Button, {
        "size": mergedSize.value,
        "tabindex": "-1",
        "class": `${prefixCls}-step-button`,
        "disabled": mergedDisabled.value || isMin.value,
        "onMousedown": (ev) => handleStepButton(ev, "minus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, {
        icon: () => createVNode(IconMinus, null, null)
      });
    };
    const renderAppendButton = () => {
      return createVNode(Button, {
        "size": mergedSize.value,
        "tabindex": "-1",
        "class": `${prefixCls}-step-button`,
        "disabled": mergedDisabled.value || isMax.value,
        "onMousedown": (ev) => handleStepButton(ev, "plus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, {
        icon: () => createVNode(IconPlus, null, null)
      });
    };
    const render = () => {
      const _slots = props.mode === "embed" ? {
        prepend: slots.prepend,
        prefix: slots.prefix,
        suffix: props.hideButton ? slots.suffix : renderSuffix,
        append: slots.append
      } : {
        prepend: props.hideButton ? slots.prepend : renderPrependButton,
        prefix: slots.prefix,
        suffix: slots.suffix,
        append: props.hideButton ? slots.append : renderAppendButton
      };
      return createVNode(Input, {
        "key": `__arco__${props.mode}`,
        "ref": inputRef,
        "class": cls.value,
        "type": "text",
        "allowClear": props.allowClear,
        "size": mergedSize.value,
        "modelValue": _value.value,
        "placeholder": props.placeholder,
        "disabled": mergedDisabled.value,
        "readonly": props.readOnly,
        "error": props.error,
        "inputAttrs": __spreadValues({
          "role": "spinbutton",
          "aria-valuemax": props.max,
          "aria-valuemin": props.min,
          "aria-valuenow": _value.value
        }, props.inputAttrs),
        "onInput": handleInput,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onClear": handleClear,
        "onChange": handleChange,
        "onKeydown": onKeyDown
      }, _slots);
    };
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const InputNumber = Object.assign(_InputNumber, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputNumber.name, _InputNumber);
  }
});
const _sfc_main$5 = defineComponent({
  name: "Pager",
  props: {
    pageNumber: {
      type: Number
    },
    current: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object
    },
    activeStyle: {
      type: Object
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const isActive = computed(() => props.current === props.pageNumber);
    const handleClick = (e) => {
      if (!props.disabled) {
        emit("click", props.pageNumber, e);
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-active`]: isActive.value
      }
    ]);
    const mergedStyle = computed(() => {
      return isActive.value ? props.activeStyle : props.style;
    });
    return {
      prefixCls,
      cls,
      mergedStyle,
      handleClick
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.mergedStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", { page: _ctx.pageNumber }, () => [
      createTextVNode(toDisplayString(_ctx.pageNumber), 1)
    ])
  ], 6);
}
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const getLegalPage = (page, { min, max }) => {
  if (page < min) {
    return min;
  }
  if (page > max) {
    return max;
  }
  return page;
};
const _sfc_main$4 = defineComponent({
  name: "StepPager",
  components: {
    IconLeft,
    IconRight
  },
  props: {
    pages: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const isNext = props.type === "next";
    const mergedDisabled = computed(() => {
      if (props.disabled) {
        return props.disabled;
      }
      if (!props.pages) {
        return true;
      }
      if (isNext && props.current === props.pages) {
        return true;
      }
      return !isNext && props.current <= 1;
    });
    const nextPage = computed(() => getLegalPage(props.current + (isNext ? 1 : -1), {
      min: 1,
      max: props.pages
    }));
    const handleClick = (e) => {
      if (!mergedDisabled.value) {
        emit("click", nextPage.value);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${props.type}`,
      {
        [`${prefixCls}-disabled`]: mergedDisabled.value
      }
    ]);
    return {
      prefixCls,
      cls,
      isNext,
      handleClick
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_right = resolveComponent("icon-right");
  const _component_icon_left = resolveComponent("icon-left");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.simple ? "span" : "li"), {
    class: normalizeClass(_ctx.cls),
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        type: _ctx.isNext ? "next" : "previous"
      }, () => [
        _ctx.isNext ? (openBlock(), createBlock(_component_icon_right, { key: 0 })) : (openBlock(), createBlock(_component_icon_left, { key: 1 }))
      ])
    ]),
    _: 3
  }, 8, ["class", "onClick"]);
}
var StepPager = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  name: "EllipsisPager",
  components: {
    IconMore
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 5
    },
    pages: {
      type: Number,
      required: true
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const nextPage = computed(() => getLegalPage(props.current + props.step, {
      min: 1,
      max: props.pages
    }));
    const handleClick = (e) => {
      emit("click", nextPage.value);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-ellipsis`]);
    return {
      prefixCls,
      cls,
      handleClick
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_more = resolveComponent("icon-more");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.cls),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createVNode(_component_icon_more)
    ])
  ], 2);
}
var EllipsisPager = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  name: "PageJumper",
  components: {
    InputNumber
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pages: {
      type: Number,
      required: true
    },
    size: {
      type: String
    },
    onChange: {
      type: Function
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-jumper");
    const { t } = useI18n();
    const inputValue = ref(props.simple ? props.current : void 0);
    const handleFormatter = (value) => {
      const parseIntVal = parseInt(value.toString(), 10);
      return Number.isNaN(parseIntVal) ? void 0 : String(parseIntVal);
    };
    const handleChange = (value) => {
      emit("change", inputValue.value);
      nextTick(() => {
        if (!props.simple) {
          inputValue.value = void 0;
        }
      });
    };
    watch(() => props.current, (value) => {
      if (props.simple && value !== inputValue.value) {
        inputValue.value = value;
      }
    });
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-simple`]: props.simple
      }
    ]);
    return {
      prefixCls,
      cls,
      t,
      inputValue,
      handleChange,
      handleFormatter
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_number = resolveComponent("input-number");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    !_ctx.simple ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([`${_ctx.prefixCls}-prepend`, `${_ctx.prefixCls}-text-goto`])
    }, [
      renderSlot(_ctx.$slots, "jumper-prepend", {}, () => [
        createTextVNode(toDisplayString(_ctx.t("pagination.goto")), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createVNode(_component_input_number, {
      modelValue: _ctx.inputValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
      class: normalizeClass(`${_ctx.prefixCls}-input`),
      min: 1,
      max: _ctx.pages,
      size: _ctx.size,
      disabled: _ctx.disabled,
      "hide-button": "",
      formatter: _ctx.handleFormatter,
      onChange: _ctx.handleChange
    }, null, 8, ["modelValue", "class", "max", "size", "disabled", "formatter", "onChange"]),
    _ctx.$slots["jumper-append"] ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-append`)
    }, [
      renderSlot(_ctx.$slots, "jumper-append")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.simple ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.prefixCls}-separator`)
      }, "/", 2),
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.prefixCls}-total-page`)
      }, toDisplayString(_ctx.pages), 3)
    ], 64)) : createCommentVNode("v-if", true)
  ], 2);
}
var PageJumper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "PageOptions",
  components: {
    ArcoSelect: Select
  },
  props: {
    sizeOptions: {
      type: Array,
      required: true
    },
    pageSize: Number,
    disabled: Boolean,
    size: {
      type: String
    },
    onChange: {
      type: Function
    },
    selectProps: {
      type: Object
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-options");
    const { t } = useI18n();
    const options = computed(() => props.sizeOptions.map((value) => ({
      value,
      label: `${value} ${t("pagination.countPerPage")}`
    })));
    const handleChange = (value) => {
      emit("change", value);
    };
    return {
      prefixCls,
      options,
      handleChange
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arco_select = resolveComponent("arco-select");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_arco_select, mergeProps({
      "model-value": _ctx.pageSize,
      options: _ctx.options,
      size: _ctx.size,
      disabled: _ctx.disabled
    }, _ctx.selectProps, { onChange: _ctx.handleChange }), null, 16, ["model-value", "options", "size", "disabled", "onChange"])
  ], 2);
}
var PageOptions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var _Pagination = defineComponent({
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true
    },
    current: Number,
    defaultCurrent: {
      type: Number,
      default: 1
    },
    pageSize: Number,
    defaultPageSize: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showMore: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    showPageSize: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    pageSizeProps: {
      type: Object
    },
    size: {
      type: String
    },
    pageItemStyle: {
      type: Object
    },
    activePageItemStyle: {
      type: Object
    },
    baseSize: {
      type: Number,
      default: 6
    },
    bufferSize: {
      type: Number,
      default: 2
    },
    autoAdjust: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:current": (current) => true,
    "update:pageSize": (pageSize) => true,
    "change": (current) => true,
    "pageSizeChange": (pageSize) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("pagination");
    const {
      t
    } = useI18n();
    const {
      disabled,
      pageItemStyle,
      activePageItemStyle,
      size
    } = toRefs(props);
    const {
      mergedSize
    } = useSize$1(size);
    const _current = ref(props.defaultCurrent);
    const _pageSize = ref(props.defaultPageSize);
    const computedCurrent = computed(() => {
      var _a;
      return (_a = props.current) != null ? _a : _current.value;
    });
    const computedPageSize = computed(() => {
      var _a;
      return (_a = props.pageSize) != null ? _a : _pageSize.value;
    });
    const pages = computed(() => Math.ceil(props.total / computedPageSize.value));
    const handleClick = (page) => {
      if (page !== computedCurrent.value && isNumber(page) && !props.disabled) {
        _current.value = page;
        emit("update:current", page);
        emit("change", page);
      }
    };
    const handlePageSizeChange = (pageSize) => {
      _pageSize.value = pageSize;
      emit("update:pageSize", pageSize);
      emit("pageSizeChange", pageSize);
    };
    const pagerProps = reactive({
      current: computedCurrent,
      pages,
      disabled,
      style: pageItemStyle,
      activeStyle: activePageItemStyle,
      onClick: handleClick
    });
    const getPageItemElement = (type, props2 = {}) => {
      if (type === "more") {
        return createVNode(EllipsisPager, mergeProps(props2, pagerProps), {
          default: slots["page-item-ellipsis"]
        });
      }
      if (type === "previous") {
        return createVNode(StepPager, mergeProps({
          "type": "previous"
        }, props2, pagerProps), {
          default: slots["page-item-step"]
        });
      }
      if (type === "next") {
        return createVNode(StepPager, mergeProps({
          "type": "next"
        }, props2, pagerProps), {
          default: slots["page-item-step"]
        });
      }
      return createVNode(Pager, mergeProps(props2, pagerProps), {
        default: slots["page-item"]
      });
    };
    const pageList = computed(() => {
      const pageList2 = [];
      if (pages.value < props.baseSize + props.bufferSize * 2) {
        for (let i = 1; i <= pages.value; i++) {
          pageList2.push(getPageItemElement("page", {
            key: i,
            pageNumber: i
          }));
        }
      } else {
        let left = 1;
        let right = pages.value;
        let hasLeftEllipsis = false;
        let hasRightEllipsis = false;
        if (computedCurrent.value > 2 + props.bufferSize) {
          hasLeftEllipsis = true;
          left = Math.min(computedCurrent.value - props.bufferSize, pages.value - 2 * props.bufferSize);
        }
        if (computedCurrent.value < pages.value - (props.bufferSize + 1)) {
          hasRightEllipsis = true;
          right = Math.max(computedCurrent.value + props.bufferSize, 2 * props.bufferSize + 1);
        }
        if (hasLeftEllipsis) {
          pageList2.push(getPageItemElement("page", {
            key: 1,
            pageNumber: 1
          }));
          pageList2.push(getPageItemElement("more", {
            key: "left-ellipsis-pager",
            step: -(props.bufferSize * 2 + 1)
          }));
        }
        for (let i = left; i <= right; i++) {
          pageList2.push(getPageItemElement("page", {
            key: i,
            pageNumber: i
          }));
        }
        if (hasRightEllipsis) {
          pageList2.push(getPageItemElement("more", {
            key: "right-ellipsis-pager",
            step: props.bufferSize * 2 + 1
          }));
          pageList2.push(getPageItemElement("page", {
            key: pages.value,
            pageNumber: pages.value
          }));
        }
      }
      return pageList2;
    });
    const renderPager = () => {
      if (props.simple) {
        return createVNode("span", {
          "class": `${prefixCls}-simple`
        }, [getPageItemElement("previous", {
          simple: true
        }), createVNode(PageJumper, {
          "disabled": props.disabled,
          "current": computedCurrent.value,
          "size": mergedSize.value,
          "pages": pages.value,
          "simple": true,
          "onChange": handleClick
        }, null), getPageItemElement("next", {
          simple: true
        })]);
      }
      return createVNode("ul", {
        "class": `${prefixCls}-list`
      }, [getPageItemElement("previous", {
        simple: true
      }), pageList.value, props.showMore && getPageItemElement("more", {
        key: "more",
        step: props.bufferSize * 2 + 1
      }), getPageItemElement("next", {
        simple: true
      })]);
    };
    watch(computedPageSize, (curPageSize, prePageSize) => {
      if (props.autoAdjust && curPageSize !== prePageSize && computedCurrent.value > 1) {
        const index2 = prePageSize * (computedCurrent.value - 1) + 1;
        const newPage = Math.ceil(index2 / curPageSize);
        if (newPage !== computedCurrent.value) {
          _current.value = newPage;
          emit("update:current", newPage);
          emit("change", newPage);
        }
      }
    });
    watch(pages, (curPages, prePages) => {
      if (props.autoAdjust && curPages !== prePages && computedCurrent.value > 1 && computedCurrent.value > curPages) {
        _current.value = curPages;
        emit("update:current", curPages);
        emit("change", curPages);
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-simple`]: props.simple,
      [`${prefixCls}-disabled`]: props.disabled
    }]);
    return () => {
      var _a, _b;
      if (props.hideOnSinglePage && pages.value <= 1) {
        return null;
      }
      return createVNode("div", {
        "class": cls.value
      }, [props.showTotal && createVNode("span", {
        "class": `${prefixCls}-total`
      }, [(_b = (_a = slots.total) == null ? void 0 : _a.call(slots, {
        total: props.total
      })) != null ? _b : t("pagination.total", props.total)]), renderPager(), props.showPageSize && createVNode(PageOptions, {
        "disabled": props.disabled,
        "sizeOptions": props.pageSizeOptions,
        "pageSize": computedPageSize.value,
        "size": mergedSize.value,
        "onChange": handlePageSizeChange,
        "selectProps": props.pageSizeProps
      }, null), !props.simple && props.showJumper && createVNode(PageJumper, {
        "disabled": props.disabled,
        "current": computedCurrent.value,
        "pages": pages.value,
        "size": mergedSize.value,
        "onChange": handleClick
      }, {
        "jumper-prepend": slots["jumper-prepend"],
        "jumper-append": slots["jumper-append"]
      })]);
    };
  }
});
const Pagination = Object.assign(_Pagination, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Pagination.name, _Pagination);
  }
});
const usePagination = (props, { emit }) => {
  var _a, _b;
  const _current = ref(isObject(props.paginationProps) ? (_a = props.paginationProps.defaultCurrent) != null ? _a : 1 : 1);
  const _pageSize = ref(isObject(props.paginationProps) ? (_b = props.paginationProps.defaultPageSize) != null ? _b : 10 : 10);
  const current = computed(() => {
    var _a2;
    return isObject(props.paginationProps) ? (_a2 = props.paginationProps.current) != null ? _a2 : _current.value : _current.value;
  });
  const pageSize = computed(() => {
    var _a2;
    return isObject(props.paginationProps) ? (_a2 = props.paginationProps.pageSize) != null ? _a2 : _pageSize.value : _pageSize.value;
  });
  const handlePageChange = (page) => {
    _current.value = page;
    emit("pageChange", page);
  };
  const handlePageSizeChange = (pageSize2) => {
    _pageSize.value = pageSize2;
    emit("pageSizeChange", pageSize2);
  };
  return {
    current,
    pageSize,
    handlePageChange,
    handlePageSizeChange
  };
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _List = defineComponent({
  name: "List",
  props: {
    data: {
      type: Array
    },
    size: {
      type: String,
      default: "medium"
    },
    bordered: {
      type: Boolean,
      default: true
    },
    split: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    paginationProps: {
      type: Object
    },
    gridProps: {
      type: Object
    },
    maxHeight: {
      type: [String, Number],
      default: 0
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    virtualListProps: {
      type: Object
    },
    scrollbar: {
      type: [Object, Boolean],
      default: true
    }
  },
  emits: {
    scroll: () => true,
    reachBottom: () => true,
    pageChange: (page) => true,
    pageSizeChange: (pageSize) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      scrollbar
    } = toRefs(props);
    const prefixCls = getPrefixCls("list");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const {
      componentRef,
      elementRef: listRef
    } = useComponentRef("containerRef");
    const isVirtualList = computed(() => props.virtualListProps);
    const {
      displayScrollbar,
      scrollbarProps
    } = useScrollbar(scrollbar);
    let preScrollTop = 0;
    const handleScroll = (e) => {
      const {
        scrollTop,
        scrollHeight,
        offsetHeight
      } = e.target;
      const bottom = Math.floor(scrollHeight - (scrollTop + offsetHeight));
      if (scrollTop > preScrollTop && bottom <= props.bottomOffset) {
        emit("reachBottom");
      }
      emit("scroll");
      preScrollTop = scrollTop;
    };
    onMounted(() => {
      if (listRef.value) {
        const {
          scrollTop,
          scrollHeight,
          offsetHeight
        } = listRef.value;
        if (scrollHeight <= scrollTop + offsetHeight) {
          emit("reachBottom");
        }
      }
    });
    const {
      current,
      pageSize,
      handlePageChange,
      handlePageSizeChange
    } = usePagination(props, {
      emit
    });
    const getCurrentPageItems = (data) => {
      if (!props.paginationProps) {
        return data;
      }
      if (props.paginationProps && data.length > pageSize.value) {
        const startIndex = (current.value - 1) * pageSize.value;
        return data.slice(startIndex, startIndex + pageSize.value);
      }
      return data;
    };
    const renderGridItems = (data) => {
      let _slot2;
      if (!props.gridProps) {
        return null;
      }
      const currentPageItems = getCurrentPageItems(data);
      if (props.gridProps.span) {
        const items = [];
        const rowSize = 24 / props.gridProps.span;
        for (let i = 0; i < currentPageItems.length; i += rowSize) {
          let _slot;
          const nextIndex = i + rowSize;
          const rowIndex = Math.floor(i / rowSize);
          items.push(createVNode(Grid.Row, {
            "key": rowIndex,
            "class": `${prefixCls}-row`,
            "gutter": props.gridProps.gutter
          }, _isSlot(_slot = currentPageItems.slice(i, nextIndex).map((item, index2) => {
            var _a;
            return createVNode(Grid.Col, {
              "key": `${rowIndex}-${index2}`,
              "class": `${prefixCls}-col`,
              "span": (_a = props.gridProps) == null ? void 0 : _a.span
            }, {
              default: () => {
                var _a2;
                return [isVNode(item) ? item : (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                  item,
                  index: index2
                })];
              }
            });
          })) ? _slot : {
            default: () => [_slot]
          }));
        }
        return items;
      }
      return createVNode(Grid.Row, {
        "class": `${prefixCls}-row`,
        "gutter": props.gridProps.gutter
      }, _isSlot(_slot2 = currentPageItems.map((item, index2) => createVNode(Grid.Col, mergeProps({
        "key": index2,
        "class": `${prefixCls}-col`
      }, omit(props.gridProps, ["gutter"])), {
        default: () => {
          var _a;
          return [isVNode(item) ? item : (_a = slots.item) == null ? void 0 : _a.call(slots, {
            item,
            index: index2
          })];
        }
      }))) ? _slot2 : {
        default: () => [_slot2]
      });
    };
    const renderListItems = (data) => {
      const currentPageItems = getCurrentPageItems(data);
      return currentPageItems.map((item, index2) => {
        var _a;
        return isVNode(item) ? item : (_a = slots.item) == null ? void 0 : _a.call(slots, {
          item,
          index: index2
        });
      });
    };
    const renderItems = () => {
      const data = slots.default ? getAllElements(slots.default()) : props.data;
      if (data && data.length > 0) {
        return props.gridProps ? renderGridItems(data) : renderListItems(data);
      }
      return renderEmpty();
    };
    const renderPagination = () => {
      if (!props.paginationProps) {
        return null;
      }
      const paginationProps = omit(props.paginationProps, ["current", "pageSize", "defaultCurrent", "defaultPageSize"]);
      return createVNode(Pagination, mergeProps({
        "class": `${prefixCls}-pagination`
      }, paginationProps, {
        "current": current.value,
        "pageSize": pageSize.value,
        "onChange": handlePageChange,
        "onPageSizeChange": handlePageSizeChange
      }), null);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-${props.size}`, {
      [`${prefixCls}-bordered`]: props.bordered,
      [`${prefixCls}-split`]: props.split,
      [`${prefixCls}-hover`]: props.hoverable
    }]);
    const contentStyle = computed(() => {
      if (props.maxHeight) {
        const maxHeight = isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight;
        return {
          maxHeight,
          overflowY: "auto"
        };
      }
      return void 0;
    });
    const contentCls = computed(() => [`${prefixCls}-content`, {
      [`${prefixCls}-virtual`]: isVirtualList.value
    }]);
    const virtualListRef = ref();
    const renderVirtualList = () => {
      var _a;
      const currentPageItems = getCurrentPageItems((_a = props.data) != null ? _a : []);
      return currentPageItems.length ? createVNode(VirtualList, mergeProps({
        "ref": virtualListRef,
        "class": contentCls.value,
        "data": currentPageItems
      }, props.virtualListProps, {
        "onScroll": handleScroll
      }), {
        item: ({
          item,
          index: index2
        }) => {
          var _a2;
          return (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
            item,
            index: index2
          });
        }
      }) : renderEmpty();
    };
    const renderScrollLoading = () => {
      if (slots["scroll-loading"]) {
        return createVNode("div", {
          "class": [`${prefixCls}-item`, `${prefixCls}-scroll-loading`]
        }, [slots["scroll-loading"]()]);
      }
      return null;
    };
    const renderEmpty = () => {
      var _a, _b, _c, _d, _e;
      if (slots["scroll-loading"]) {
        return null;
      }
      return (_e = (_d = (_a = slots.empty) == null ? void 0 : _a.call(slots)) != null ? _d : (_c = configCtx == null ? void 0 : (_b = configCtx.slots).empty) == null ? void 0 : _c.call(_b, {
        component: "list"
      })) != null ? _e : createVNode(Empty, null, null);
    };
    const render = () => {
      const Component = displayScrollbar.value ? Scrollbar : "div";
      return createVNode("div", {
        "class": `${prefixCls}-wrapper`
      }, [createVNode(Spin, {
        "class": `${prefixCls}-spin`,
        "loading": props.loading
      }, {
        default: () => [createVNode(Component, mergeProps({
          "ref": componentRef,
          "class": cls.value,
          "style": contentStyle.value
        }, scrollbarProps.value, {
          "onScroll": handleScroll
        }), {
          default: () => [createVNode("div", {
            "class": `${prefixCls}-content-wrapper`
          }, [slots.header && createVNode("div", {
            "class": `${prefixCls}-header`
          }, [slots.header()]), isVirtualList.value && !props.gridProps ? createVNode(Fragment, null, [renderVirtualList(), renderScrollLoading()]) : createVNode("div", {
            "role": "list",
            "class": contentCls.value
          }, [renderItems(), renderScrollLoading()]), slots.footer && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [slots.footer()])])]
        }), renderPagination()]
      })]);
    };
    return {
      virtualListRef,
      render
    };
  },
  methods: {
    scrollIntoView(options) {
      if (this.virtualListRef) {
        this.virtualListRef.scrollTo(options);
      }
    }
  },
  render() {
    return this.render();
  }
});
var ListItem = defineComponent({
  name: "ListItem",
  props: {
    actionLayout: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("list-item");
    const renderAction = () => {
      var _a;
      const actions = (_a = slots.actions) == null ? void 0 : _a.call(slots);
      if (!actions || !actions.length) {
        return null;
      }
      return createVNode("ul", {
        "class": `${prefixCls}-action`
      }, [actions.map((item, index2) => createVNode("li", {
        "key": `${prefixCls}-action-${index2}`
      }, [item]))]);
    };
    return () => {
      var _a, _b;
      return createVNode("div", {
        "role": "listitem",
        "class": prefixCls
      }, [createVNode("div", {
        "class": `${prefixCls}-main`
      }, [(_a = slots.meta) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": `${prefixCls}-content`
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), props.actionLayout === "vertical" && renderAction()]), props.actionLayout === "horizontal" && renderAction(), slots.extra && createVNode("div", {
        "class": `${prefixCls}-extra`
      }, [slots.extra()])]);
    };
  }
});
const _sfc_main = defineComponent({
  name: "ListItemMeta",
  props: {
    title: String,
    description: String
  },
  setup(props, { slots }) {
    const prefixCls = getPrefixCls("list-item-meta");
    const hasContent = Boolean(props.title || props.description || slots.title || slots.description);
    return {
      prefixCls,
      hasContent
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    _ctx.$slots.avatar ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-avatar`)
    }, [
      renderSlot(_ctx.$slots, "avatar")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.hasContent ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-content`)
    }, [
      _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-title`)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-description`)
      }, [
        renderSlot(_ctx.$slots, "description", {}, () => [
          createTextVNode(toDisplayString(_ctx.description), 1)
        ])
      ], 2)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var ListItemMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const List = Object.assign(_List, {
  Item: Object.assign(ListItem, {
    Meta: ListItemMeta
  }),
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _List.name, _List);
    app.component(componentPrefix + ListItem.name, ListItem);
    app.component(componentPrefix + ListItemMeta.name, ListItemMeta);
  }
});
export {
  Col as C,
  List as L,
  Row as R,
  Spin as S,
  ListItem as a,
  ListItemMeta as b,
  getAllElements as g
};
