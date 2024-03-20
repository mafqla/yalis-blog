import { defineComponent, ref, watchEffect, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const hot_boom = "/assets/hot_boom.IwQj6To9.png";
const hot_first = "/assets/hot_first.alPlMmXE.png";
const hot_hot = "data:image/png;base64,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";
const hot_exclusive = "/assets/hot_exclusive.CNbVGZLl.png";
const hot_new = "data:image/png;base64,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";
const hotup = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHDSURBVHgB7ZhNTsJAGIbf6Z8hMbELTVzWCxhJ1LXcAE5gPIpH8AicQDkBrHUBN7BLjRq7MMFQ2nEmZBICUvq1MykJ82xKptPhfeh05qOAxWKxWPYZRun883xyEXgYio8hzBBjjl5w/TEpe4EDAr6HR5gLL4mw+IFKQxJgZsNXgiSQc34Pw3DOHyj9Sc+AZPpyfAPGIpiA87h19TnCPkG+A2Xh4zBM4d+KOZq4SAesnSQwgBGB6TiMHO4PmVxVFsQZSzutdhJDM9oF/gmvMCKhVaAgvEK7hDaBEuEVWiW0CBDCK7RJ1BaoEF6hRYK0E69SEL7Mkhm54lo5BmpQWaAoPM/Z3Wp/0dbDulhtiUoCReFnc3Ry11krhwN3NpHnoFmCLLAt/GFBLS/PFUnI3RtEKtwB/6ZKeEWRRJq5XRAhCzhZvvrFpcMrNkk4gfcNImSBg8uvJ/FEqpqdHF6hJLj8GykQx753/j4Akcr7gJyvmyrM6fhUzOnsdbnNZ+kZ27DmF421jcrLqM7yuM5YtTayXcAKNI0VaBor0DRWoGmMCLTab7E4jJaaYmbgnZDEgyFE7dP7hd91gSMfaR8Wi8Vi2UX+AAYb2/7dslumAAAAAElFTkSuQmCC";
const hot_top1 = "data:image/png;base64,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";
const hot_top2 = "data:image/png;base64,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";
const hot_top3 = "data:image/png;base64,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";
const defalutParams = {
  device_platform: "webapp",
  aid: 6383,
  pc_client_type: 1,
  version_code: 170400,
  version_name: "17.4.0",
  cookie_enabled: true,
  screen_width: 1707,
  screen_height: 1067,
  browser_language: "zh-CN",
  browser_platform: "Win32",
  browser_name: "Edge",
  browser_version: "117.0.2045.43",
  browser_online: true,
  engine_name: "Blink",
  engine_version: "117.0.0.0",
  os_name: "Windows",
  os_version: "10",
  cpu_core_num: 12,
  device_memory: 8,
  platform: "PC",
  downlink: 10,
  effective_type: "4g",
  round_trip_time: 50,
  webid: "7249371961804539404",
  msToken: "RaRu2BQmC7h4AI0gXOxEQuN0qVQFpjm9D9rLBkebl19zcaCXiHbU9Xu6LEwxvVATs4n8MBZaXs0fgra13T5_G5zIZoaQC5pJfBjoiIVmxIdd0cQFsm8gaXhwe3jZk03_iTWKOw==",
  "X-Bogus": "DFSzswVOng2AN96rtO8uLUteJnxH"
};
const service = axios.create({
  baseURL: "/douyin",
  // api的base_url
  timeout: 5e3
  // 请求超时时间
});
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
  }
);
function getParams(boardType, boardSubType) {
  return {
    channel: "channel_pc_web",
    source: 6,
    board_type: boardType,
    board_sub_type: boardSubType,
    ...defalutParams
  };
}
const url = "/aweme/v1/web/hot/search/list/";
const hotParams = getParams(0, "");
const hot = () => {
  return service.get(url, { params: hotParams });
};
const entertainmentParams = getParams(2, 2);
const entertainment = () => {
  return service.get(url, { params: entertainmentParams });
};
const societyParams = getParams(2, 4);
const society = () => {
  return service.get(url, { params: societyParams });
};
const challengeParams = getParams(2, "hotspot_challenge");
const challenge = () => {
  return service.get(url, { params: challengeParams });
};
const height = 660;
var douyin_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "douyin",
  __ssrInlineRender: true,
  setup(__props) {
    const listData = ref([]);
    const imgTypeToSrc = {
      4: hot_boom,
      5: hot_first,
      3: hot_hot,
      8: hot_exclusive,
      1: hot_new
    };
    const getTagSrc = (id) => {
      return imgTypeToSrc[id];
    };
    const getImgSrc = (id) => {
      if (id === 1) {
        return hot_top1;
      } else if (id === 2) {
        return hot_top2;
      } else if (id === 3) {
        return hot_top3;
      }
    };
    const titleItems = ["抖音热榜", "娱乐榜", "社会榜", "挑战榜"];
    const selectedIndex = ref(0);
    watchEffect(async () => {
      if (selectedIndex.value === 0) {
        listData.value = (await hot()).data.word_list;
      } else if (selectedIndex.value === 1) {
        listData.value = (await entertainment()).data.word_list;
      } else if (selectedIndex.value === 2) {
        listData.value = (await society()).data.word_list;
      } else if (selectedIndex.value === 3) {
        listData.value = (await challenge()).data.word_list;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "hot-item",
        style: { height: `${height}px` }
      }, _attrs))} data-v-1fa7052c><div class="hot-item-main" data-v-1fa7052c><div class="hot-item-blank" data-v-1fa7052c></div><div class="hot-item-content" data-v-1fa7052c><div class="hot-item-content-title" data-v-1fa7052c><!--[-->`);
      ssrRenderList(titleItems, (item, index) => {
        _push(`<div class="${ssrRenderClass({
          "hot-item-content-title-item": true,
          selected: selectedIndex.value === index
        })}" data-v-1fa7052c>${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div><div class="hot-itme-line" data-v-1fa7052c></div><div class="hot-item-list" data-v-1fa7052c><ul class="hot-item-list-content hotChangableList" data-v-1fa7052c><!--[-->`);
      ssrRenderList(listData.value, (item, index) => {
        _push(`<li class="hot-item-list-content-item" data-v-1fa7052c><div class="hot-item-list-content-text listStyle" data-v-1fa7052c>`);
        if (item.hot_value === 0) {
          _push(`<img${ssrRenderAttr("src", unref(hotup))} alt="" data-v-1fa7052c>`);
        } else {
          _push(`<!---->`);
        }
        if (item.position <= 3) {
          _push(`<img${ssrRenderAttr("src", getImgSrc(item.position))} alt="" data-v-1fa7052c>`);
        } else {
          _push(`<!---->`);
        }
        if (item.position > 3) {
          _push(`<div class="hot-box-num" data-v-1fa7052c>${ssrInterpolate(item.position)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="hot-item-list-content-item-title-content" data-v-1fa7052c><div class="custom-link" data-v-1fa7052c><a${ssrRenderAttr("href", `https://www.douyin.com/hot/${item.sentence_id}`)} class="custom-title active" target="_blank" data-v-1fa7052c><h3 data-v-1fa7052c>${ssrInterpolate(item.word)}</h3></a><img${ssrRenderAttr("src", getTagSrc(item.label))} alt="" data-v-1fa7052c></div><div class="hot-du" style="${ssrRenderStyle(item.hot_value !== 0 ? null : { display: "none" })}" data-v-1fa7052c><span class="hot-num" data-v-1fa7052c>${ssrInterpolate(item.hot_value >= 1e4 ? (item.hot_value / 1e4).toFixed(1) + "万" : item.hot_value)}</span><span data-v-1fa7052c>热度</span></div></div></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
});
const _sfc_setup = douyin_vue_vue_type_script_setup_true_lang_default.setup;
douyin_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/hot/douyin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Douyin = /* @__PURE__ */ _export_sfc(douyin_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1fa7052c"]]);
export {
  Douyin as D
};
