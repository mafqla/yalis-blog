import { _ as __unplugin_components_7 } from "./ArticleMetadata.VGaQjriI.js";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import "./index.w40geAFS.js";
import "./index.tJQKWac5.js";
import "./Content.yQ4HyQxV.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
const __pageData = JSON.parse('{"title":"开篇 ｜ 使用 WebRTC 打造私有化会议系统","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/1-开篇｜使用 WebRTC 打造私有化会议系统.md","filePath":"knowledge/courses/WebRTC：实现私有化会议直播系统/1-开篇｜使用 WebRTC 打造私有化会议系统.md","lastUpdated":1704161604000}');
const _sfc_main = { name: "knowledge/courses/WebRTC：实现私有化会议直播系统/1-开篇｜使用 WebRTC 打造私有化会议系统.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = __unplugin_components_7;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="开篇-使用-webrtc-打造私有化会议系统" tabindex="-1">开篇 ｜ 使用 WebRTC 打造私有化会议系统 <a class="header-anchor" href="#开篇-使用-webrtc-打造私有化会议系统" aria-label="Permalink to &quot;开篇 ｜ 使用 WebRTC 打造私有化会议系统&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        if ((((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true)) {
          _push2(ssrRenderComponent(_component_ArticleMetadata, {
            article: _ctx.$frontmatter,
            readTime: 2,
            words: 333
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (((_c = _ctx.$frontmatter) == null ? void 0 : _c.aside) ?? true) && (((_d = _ctx.$frontmatter) == null ? void 0 : _d.showArticleMetadata) ?? true) ? (openBlock(), createBlock(_component_ArticleMetadata, {
            key: 0,
            article: _ctx.$frontmatter,
            readTime: 2,
            words: 333
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>Hello，我是 suke，之前写过一些基于 <code>WebRTC</code> 和 <code>SpringBoot</code> 组合实现单人、多人聊天系统的文章，有很多同学喜欢。所以在此，我想将 <code>WebRTC</code> 和开源界很多有影响力的流媒体服务器组合起来，去实现会议、直播等场景。</p><h2 id="为什么要实现私有会议系统" tabindex="-1">为什么要实现私有会议系统？ <a class="header-anchor" href="#为什么要实现私有会议系统" aria-label="Permalink to &quot;为什么要实现私有会议系统？&quot;">​</a></h2><p>虽说公有云已经有了各种基于 <code>WebRTC</code> 的会议服务，但是终究是公有云。可以预见，随着企业安全越来越受到重视，很多企业都想要私有部署。目前支持公有服务私有化部署的产品又很少，即使有也很昂贵。</p><p>从用户角度看，面对一个普通的会议，却需要下载不同的 App 才能与不同的客户语音视频，但凡参会人数稍微多一点，这些软件就提示用户升级到付费版本才可以，这无疑是个痛点。如果我们能够搭建一套会议系统，<strong>仅需浏览器</strong>就可以支持语音视频功能的话，那岂不是可以解决这些问题？</p><p>因此，自己实现一套私有会议系统是很有必要的，而<strong>WebRTC</strong><strong>就是首选。</strong></p><h2 id="webrtc-的优势" tabindex="-1">WebRTC 的优势 <a class="header-anchor" href="#webrtc-的优势" aria-label="Permalink to &quot;WebRTC 的优势&quot;">​</a></h2><p><code>WebRTC</code> 的诞生，就是基于浏览器的多媒体即时通信（2011 年 5 月，Google 发布了一个<strong>开源项目</strong>，用于基于浏览器的实时通信，称为 <code>WebRTC</code>。紧随其后的是 <code>IETF</code> 中相关协议的标准化工作以及 <code>W3C</code> 中的浏览器 API ），对于在 <code>Web</code> 端实现会议这个需求而言，它简直天生自带光环。</p><p>而且我们知道，<code>Web</code> 端实现会议系统的前置条件：<strong>实时双向音视频、主流浏览器支持、开发者容易入手、使用范围广且技术开源成熟，</strong>同时满足上述条件，大范围内也就 <code>WebRTC</code> 了。</p><p>不仅如此，<strong>WebRTC</strong><strong> 还具有</strong><strong>毫秒级的延迟特性</strong><strong>，</strong>这一点在直播领域尤其重要，比如有人在直播间发了一个口令红包，3 秒后你才看到发红包的画面，这时再输入口令那红包岂不是早飞了？<code>WebRTC</code> 本身就是多媒体即时通讯技术，使用 <code>WebRTC</code> 传输直播流几乎是实时传输。如果将直播流转换 <code>WebRTC</code> 拉流的方式，相当于客户端和直播服务端点对点连接，无需经过各种转换，相比于传统 <code>RTMP</code>/<code>FLV</code> 流经过 N 层 CDN 再播放延迟更低。</p><p>当然，作为开发人员，选择 <code>WebRTC</code> 还有一个原因：它在浏览器端成熟的 <code>API</code> ，我们无需多少代码就可以满足无客户端视频通话的目的。</p><p>我们前面提过，<code>WebRTC</code> 的诞生就是基于浏览器端的，因此在浏览器端的 <code> \`\`API</code> 必然是成熟的。但 <code>WebRTC</code> 并不是只能浏览器里使用。</p><p>浏览器中的 <code>API</code> 怎么来的？肯定是内核中提供的，那么内核是怎么来的？那必然不是用 <code>JavaScript</code> 写的，据我了解是用 <code>C++</code>，但 WebRTC 在浏览器端暴露出来的 API，我们是可以直接通过 <code>JavaScript</code> 访问的。其他语言也可以访问这些 <code>API</code>，比如在 <code>Java</code> 中，如果要使用 <code>WebRTC</code> 的相关 <code>API</code>，可以找谷歌开源的相关 <code>Java</code> 库，去间接地调用 <code>C++</code> 代码实现。</p><p>可以说，<code>WebRTC</code> 是将前端技术和音视频嫁接起来最佳的媒介，对于前端同学而言，学习 <code>WebRTC</code> 作为音视频入门也是很有意义的。</p><h2 id="课程设计" tabindex="-1">课程设计 <a class="header-anchor" href="#课程设计" aria-label="Permalink to &quot;课程设计&quot;">​</a></h2><p>我们小册将按照<strong>“</strong><strong>由简单场景再到复杂场景</strong><strong>”</strong>的逻辑，<strong>提供三种架构来设计实现会议系统</strong>。</p><p>虽然我们的初衷是实现一套会议系统，但当面对不同场景时，我们需要知道还有哪些更适合的方案。</p><ul><li>当会议场景只要人员<strong>点对点，或者偶尔需要少量人员多对多</strong>时，我们搭建一套简易架构，无需任何第三方服务的会议系统即可；</li><li>当会议场景<strong>基本都是多对多</strong>，而且需要实时监听用户网络状况时，上一种架构就没法满足了，我们会用第二种机构实现会议系统。</li><li><strong>其他的场景，比如</strong><strong>在</strong><strong>会议</strong><strong>或通话过程中直播某些用户的画面，</strong>像公开庭审等司法场景，那么前两种架构也无法满足我们，就需要第三种架构来现实会议系统。</li></ul><p>当然，为了实现三种不同架构的会议系统，我们也需要先了解必要的 <code>WebRTC</code> 基础知识和相关 API。另外，<code>WebRTC</code> 除了会议系统，还可以实现很多花样。基于此，我们小册将分为<strong> 五</strong> 部分。</p><ul><li><strong>基础知识</strong>：<code>WebRTC</code> 的基本认识和相关 API 学习。</li><li><strong>第一种会议系统</strong>：<code>WebRTC</code>+ 自建信令服务器实现点对点、多对多视频通话。</li><li><strong>第二种会议系统</strong>：学习开源 <code>WebRTC</code> 服务器 <code>Janus</code>，并利用其实现第二种架构的会议系统。</li><li><strong>第三种会议系统</strong>：学习开源流媒体服务器 <code>SRS</code>，并实现 <code>WebRTC</code> 推流拉流。</li><li><strong>其他场景拓展</strong>：直播、流量监控、即时通讯、网页客服、远程控制、私密放映室等都可以尝试探索。</li></ul><h2 id="你会学到什么" tabindex="-1">你会学到什么？ <a class="header-anchor" href="#你会学到什么" aria-label="Permalink to &quot;你会学到什么？&quot;">​</a></h2><ol><li>从 0 实现三套基于 <code>WebRTC</code> 的私有化会议系统；</li><li>开源 <code>WebRTC</code> 服务器 <code>Janus</code>、<code>SRS</code> 的部署及使用；</li><li><code>RTSP</code>、<code>RTMP</code> 流与 <code>WebRTC</code> 自由组合；</li><li><code>WebRTC</code> 多场景方案探索实践。</li></ol><p>通过后续课程的学习，大家可以从入门 <code>WebRTC</code> 到自己实现一套会议系统。所有课程源代码我会开放一个固定的仓库，供大家学习参考。希望大家能够动手实现，而不是简单的 CV，我会给很多基础的函数加上备注。</p><p>最后，希望每个同学能够学有所得，能够在实际工作场景中用到这些东西，哪怕是自己弄个独立会议室和朋友聊天。就算是你用不到音视频聊天，那么 <code>WebRTC</code> 作为一种新的接口数据双向实时传输方案也是可以的。</p><h2 id="小思考" tabindex="-1">小思考 <a class="header-anchor" href="#小思考" aria-label="Permalink to &quot;小思考&quot;">​</a></h2><p><code>WebRTC</code> 的会话过程和另一种协议 <code>SIP</code> 很类似，而我们日常生活中的电话呼叫就和 <code>SIP</code> 息息相关，那么 <code>SIP</code> 协议具体什么样子的呢？它是如何建立会话的呢？欢迎大家在留言区讨论。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/courses/WebRTC：实现私有化会议直播系统/1-开篇｜使用 WebRTC 打造私有化会议系统.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_______WebRTC__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_______WebRTC__________ as default
};
