import { getCurrentScope, onScopeDispose, unref, toRef as toRef$1, readonly, customRef, ref, watch, onMounted, nextTick, getCurrentInstance, isRef, shallowRef, watchEffect, computed, inject, onUnmounted, reactive, markRaw, defineComponent, h } from "vue";
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"zh-CN","dir":"ltr","title":"寻觅","description":"个人博客，记录美好生活。","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"nav":[{"text":"博客","link":"/blogs/index","activeMatch":"/blogs/"},{"text":"知识库","items":[{"text":"HTML","link":"/knowledge/FrontEnd/html","activeMatch":"/knowledge/FrontEnd/html/"},{"text":"CSS","link":"/knowledge/FrontEnd/css/index","activeMatch":"/knowledge/FrontEnd/css/"},{"text":"JavaScript","link":"/knowledge/FrontEnd/javascript","activeMatch":"/knowledge/FrontEnd/javascript/"},{"text":"Vue3","link":"/knowledge/FrontEnd/vue3/01-基础/01-basicConcepts","activeMatch":"/knowledge/FrontEnd/vue3/"},{"text":"React","link":"/knowledge/FrontEnd/react","activeMatch":"/knowledge/FrontEnd/react/"},{"text":"Node","link":"/knowledge/FrontEnd/node","activeMatch":"/knowledge/FrontEnd/node/"},{"text":"TypeScript","link":"/knowledge/FrontEnd/typescript/1-get-started-quickly","activeMatch":"/knowledge/FrontEnd/typescript/"},{"text":"Webpack","link":"/knowledge/FrontEnd/build-tools","activeMatch":"/knowledge/FrontEnd/build-tools/"},{"text":"Flutter","link":"/knowledge/FrontEnd/flutter","activeMatch":"/knowledge/FrontEnd/flutter/"},{"text":"小程序","link":"/knowledge/FrontEnd/mini-program","activeMatch":"/knowledge/FrontEnd/mini-program/"},{"text":"后端","link":"/knowledge/BackEnd","activeMatch":"/knowledge/BackEnd/"},{"text":"工具","link":"/knowledge/build-tools/project-build/01-code-specification","activeMatch":"/knowledge/build-tools/"},{"text":"掘金小册","link":"/knowledge/courses/index.md","activeMatch":"/knowledge/courses/"},{"text":"其他","link":"/knowledge/other","activeMatch":"/knowledge/other/"}],"activeMatch":"/knowledge/"},{"text":"导航","link":"/nav","activeMatch":"/nav"},{"text":"标签","link":"/tags","activeMatch":"/tags"},{"text":"热搜","link":"/hot","activeMatch":"/hot"},{"text":"RSS订阅","link":"/rss-views","activeMatch":"/rss-views"},{"text":"归档","link":"/archives","activeMatch":"/archives"}],"sidebar":{"/blogs/":[{"text":"📑 我的置顶 (2篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>模板","link":"/blogs/2023/03/04/模板"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>个人 SQL 优化技巧","link":"/blogs/2023/03/04/个人SQL优化技巧"}],"collapsed":false},{"text":"2024年 (1篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>GitHub Action脚本","link":"/blogs/2024/01/06/GitHub Action 脚本"}],"collapsed":false},{"text":"2023年 (4篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>Vercel 配置跨域","link":"/blogs/2023/12/28/vercel配置跨域"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>模板","link":"/blogs/2023/03/04/模板"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>个人 SQL 优化技巧","link":"/blogs/2023/03/04/个人SQL优化技巧"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>mermaid的使用","link":"/blogs/2023/03/04/mermaid的使用"}],"collapsed":true}],"/knowledge/FrontEnd/vue3":[{"text":"基础 (14篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>vue3 基础概念","link":"/knowledge/FrontEnd/vue3/01-基础/01-basicConcepts"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>vue-cli","link":"/knowledge/FrontEnd/vue3/01-基础/02-vue-cli"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>vue基础用法与模板语法","link":"/knowledge/FrontEnd/vue3/01-基础/03-basicUsageAndTemplateSyntax"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>vue基本指令","link":"/knowledge/FrontEnd/vue3/01-基础/04-basicinStruction"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>v-bind和v-on","link":"/knowledge/FrontEnd/vue3/01-基础/05-v-bindAndv-on"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">6</div>条件渲染","link":"/knowledge/FrontEnd/vue3/01-基础/06-conditionalRendering"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">7</div>列表渲染","link":"/knowledge/FrontEnd/vue3/01-基础/07-listRendering"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">8</div>计算属性","link":"/knowledge/FrontEnd/vue3/01-基础/08-calculationProperties"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">9</div>侦听器 watch","link":"/knowledge/FrontEnd/vue3/01-基础/09-watch"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">10</div>v-model","link":"/knowledge/FrontEnd/vue3/01-基础/10-v-model"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">11</div>组件化基础","link":"/knowledge/FrontEnd/vue3/01-基础/11-componentFoundationt"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">12</div>Transition","link":"/knowledge/FrontEnd/vue3/01-基础/12-Transition"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">13</div>Composition API","link":"/knowledge/FrontEnd/vue3/01-基础/13-compositionApi"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">14</div>补充","link":"/knowledge/FrontEnd/vue3/01-基础/14-supplement"}],"collapsed":false},{"text":"相关生态 (3篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>pinia","link":"/knowledge/FrontEnd/vue3/02-相关生态/pinia"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>vue-router","link":"/knowledge/FrontEnd/vue3/02-相关生态/vue-router"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>vuex","link":"/knowledge/FrontEnd/vue3/02-相关生态/vuex"}],"collapsed":false},{"text":"hooks (1篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>useTitle","link":"/knowledge/FrontEnd/vue3/03-hooks/useTitle"}],"collapsed":true}],"/knowledge/FrontEnd/typescript":[{"text":"","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>TypeScript 快速上手","link":"/knowledge/FrontEnd/typescript/1-get-started-quickly"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>TypeScript 声明变量","link":"/knowledge/FrontEnd/typescript/2-declare-variables"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>TypeScript 常用基础类型","link":"/knowledge/FrontEnd/typescript/3-common-foundation-types"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>TypeScript 高级类型","link":"/knowledge/FrontEnd/typescript/4-advanced-type"}],"collapsed":false}],"/knowledge/build-tools":[{"text":"webpack (5篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>webpack","link":"/knowledge/build-tools/01-webpack/01-basic"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>webpack的使用步骤","link":"/knowledge/build-tools/01-webpack/02-useSteps"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>webpack的配置","link":"/knowledge/build-tools/01-webpack/03-config"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>webpack 开发服务器","link":"/knowledge/build-tools/01-webpack/04-webpackService"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>补充","link":"/knowledge/build-tools/01-webpack/05-support"}],"collapsed":false},{"text":"vite (5篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>什么是 vite","link":"/knowledge/build-tools/02-vite/01-basic"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>vite 的安装和使用","link":"/knowledge/build-tools/02-vite/02-installUse"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>vite 的支持","link":"/knowledge/build-tools/02-vite/03-support"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>vite打包项目","link":"/knowledge/build-tools/02-vite/04-build"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>ESBuild","link":"/knowledge/build-tools/02-vite/05-esBuild"}],"collapsed":false},{"text":"build (5篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>代码规范","link":"/knowledge/build-tools/project-build/01-code-specification"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>第三方库集成","link":"/knowledge/build-tools/project-build/02-third-party-library-integration"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>默认配置","link":"/knowledge/build-tools/project-build/03-default-configuration"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>Axios","link":"/knowledge/build-tools/project-build/axios"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>Babel","link":"/knowledge/build-tools/project-build/babel"}],"collapsed":false}],"/knowledge/courses":[{"text":"WebRTC：实现私有化会议直播系统 (24篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>开篇｜使用 WebRTC 打造私有化会议系统","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/1-开篇｜使用 WebRTC 打造私有化会议系统"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>基础（一）：Web 端基础 API 学习","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/2-基础（一）：Web 端基础 API 学习"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>基础（二）：WebRTC 的会话流程以及信令服务器的搭建","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/3-基础（二）：WebRTC 的会话流程以及信令服务器的搭建"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>WebRTC 实现点对点音视频以及类 IM 的即时消息发送","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/4-WebRTC 实现点对点音视频以及类 IM 的即时消息发送"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>直播实战：WebRTC 实现类教师授课的 1 对 N 模式简易直播","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/5-直播实战：WebRTC 实现类教师授课的 1 对 N 模式简易直播"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">6</div>直播实战：纯前端 + 人工智能模型实现视频虚拟背景","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/6-直播实战：纯前端 + 人工智能模型实现视频虚拟背景"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">7</div>直播实战：WebRTC + 人工智能实现直播虚拟背景","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/7-直播实战：WebRTC + 人工智能实现直播虚拟背景"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">8</div>直播实战：WebRTC 自有数据通道实现直播滚动弹幕","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/8-直播实战：WebRTC 自有数据通道实现直播滚动弹幕"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">9</div>会议实战：WebRTC 实现多房间多用户的第一种架构会议系统","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/9-会议实战：WebRTC 实现多房间多用户的第一种架构会议系统"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">10</div>会议实战：实时通话过程中音频、视频画面实时控制切换","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/10-会议实战：实时通话过程中音频、视频画面实时控制切换"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">11</div>会议优化：WebRTC 通话过程中宽带计算及网络速率优化","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/11-会议优化：WebRTC 通话过程中宽带计算及网络速率优化"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">12</div>网络配置：Coturn 网络穿透服务器的搭建及使用","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/12-网络配置：Coturn 网络穿透服务器的搭建及使用"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">13</div>WebRTC 网关初识：Janus 初识以及服务搭建","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/13-WebRTC 网关初识：Janus 初识以及服务搭建"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">14</div>WebRTC 网关：项目实战以及插件使用","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/14-WebRTC 网关：项目实战以及插件使用"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">15</div>WebRTC 网关之插件实战：点对点视频通话媒体控制以及网速监控","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/15-WebRTC 网关之插件实战：点对点视频通话媒体控制以及网速监控"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">16</div>WebRTC 网关之插件实战：实现第二种架构会议系统","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/16-WebRTC 网关之插件实战：实现第二种架构会议系统"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">17</div>WebRTC 网关：Janus 高级用法","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/17-WebRTC 网关：Janus 高级用法"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">18</div>流媒体 SRS 和 WebRTC ：初步认识 SRS 及服务搭建","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/18-流媒体 SRS 和 WebRTC ：初步认识 SRS 及服务搭建"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">19</div>SRS + WebRTC 进阶实战：推流直播","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/19-SRS + WebRTC 进阶实战：推流直播"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">20</div>SRS + WebRTC 进阶实战：搭建直播系统","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/20-SRS + WebRTC 进阶实战：搭建直播系统"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">21</div>SRS + WebRTC 进阶实战： 实现第三种架构会议系统","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/21-SRS + WebRTC 进阶实战： 实现第三种架构会议系统"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">22</div>扩展：前端多画面媒体流合并分发","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/22-扩展：前端多画面媒体流合并分发"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">23</div>扩展：会议系统普通部署实战","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/23-扩展：会议系统普通部署实战"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">24</div>扩展：会议系统容器化部署实战","link":"/knowledge/courses/WebRTC：实现私有化会议直播系统/24-扩展：会议系统容器化部署实战"}],"collapsed":true},{"text":"前端算法与数据结构面试：底层逻辑解读与大厂真题训练 (28篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>面试总有套路，算法不是玄学——写给普通人的前端算法面试攻略","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/1-面试总有套路，算法不是玄学——写给普通人的前端算法面试攻略"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>快速上手——从0到1掌握算法面试需要的数据结构（一）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/2-快速上手——从0到1掌握算法面试需要的数据结构（一）"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>快速上手——从0到1掌握算法面试需要的数据结构（二）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/3-快速上手——从0到1掌握算法面试需要的数据结构（二）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>快速上手——从0到1掌握算法面试需要的数据结构（三）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/4-快速上手——从0到1掌握算法面试需要的数据结构（三）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>递归初相见——二叉树递归遍历的三种姿势","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/5-递归初相见——二叉树递归遍历的三种姿势"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">6</div>算法的衡量——轻松理解时间复杂度与空间复杂度","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/6-算法的衡量——轻松理解时间复杂度与空间复杂度"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">7</div>数组的应用——真题归纳与解读","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/7-数组的应用——真题归纳与解读"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">8</div>字符串的应用——真题归纳与解读","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/8-字符串的应用——真题归纳与解读"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">9</div>链表的应用——真题归纳与解读","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/9-链表的应用——真题归纳与解读"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">10</div>快慢指针与多指针——玩转链表复杂操作","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/10-快慢指针与多指针——玩转链表复杂操作"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">11</div>姿势特别的链表——环形链表专题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/11-姿势特别的链表——环形链表专题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">12</div>栈与队列怎么玩（上）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/12-栈与队列怎么玩（上）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">13</div>栈与队列怎么玩（下）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/13-栈与队列怎么玩（下）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">14</div>遍历专题：DFS 与 BFS","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/14-遍历专题：DFS 与 BFS"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">15</div>场景化解读：递归与回溯思想在真题中的应用","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/15-场景化解读：递归与回溯思想在真题中的应用"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">16</div>二叉树真题归纳与解读","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/16-二叉树真题归纳与解读"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">17</div>特殊的二叉树——二叉搜索树专题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/17-特殊的二叉树——二叉搜索树专题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">18</div>特殊的二叉树——平衡二叉树专题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/18-特殊的二叉树——平衡二叉树专题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">19</div>特殊的二叉树——堆结构及其在排序中的应用","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/19-特殊的二叉树——堆结构及其在排序中的应用"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">20</div>排序算法专题（上）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/20-排序算法专题（上）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">21</div>排序算法专题（下）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/21-排序算法专题（下）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">22</div>普通人也能吃透的动态规划思想专题（上）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/22-普通人也能吃透的动态规划思想专题（上）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">23</div>普通人也能吃透的动态规划思想专题（下）","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/23-普通人也能吃透的动态规划思想专题（下）"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">24</div>大厂真题训练与解读——微软真题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/24-大厂真题训练与解读——微软真题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">25</div>大厂真题训练与解读——Google 真题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/25-大厂真题训练与解读——Google 真题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">26</div>大厂真题训练与解读——腾讯真题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/26-大厂真题训练与解读——腾讯真题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">27</div>大厂真题训练与解读——头条真题","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/27-大厂真题训练与解读——头条真题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">28</div>思维课：算法面试的评价逻辑","link":"/knowledge/courses/前端算法与数据结构面试：底层逻辑解读与大厂真题训练/28-思维课：算法面试的评价逻辑"}],"collapsed":true}],"/knowledge/FrontEnd/css":[{"text":"基础 (100篇)","items":[{"text":"<div class=\\"text-color-red mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">1</div>左边框的多种实现方式","link":"/knowledge/FrontEnd/css/1-基础/1-左边框的多种实现方式"},{"text":"<div class=\\"text-color-orange mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">2</div>条纹边框的多种实现方式","link":"/knowledge/FrontEnd/css/1-基础/2-条纹边框的多种实现方式"},{"text":"<div class=\\"text-color-yellow mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">3</div>层叠顺序（stacking level）与堆栈上下文（stacking context）知多少？","link":"/knowledge/FrontEnd/css/1-基础/3-层叠顺序（stacking level）与堆栈上下文（stacking context）知多少？"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">4</div>从倒影说起，谈谈 CSS 继承 inherit","link":"/knowledge/FrontEnd/css/1-基础/4-从倒影说起，谈谈 CSS 继承 inherit"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">5</div>单行居中显示文字，多行居左显示，最多两行超过用省略号结尾","link":"/knowledge/FrontEnd/css/1-基础/5-单行居中显示文字，多行居左显示，最多两行超过用省略号结尾"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">6</div>全兼容的多列均匀布局问题","link":"/knowledge/FrontEnd/css/1-基础/6-全兼容的多列均匀布局问题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">7</div>消失的边界线问题","link":"/knowledge/FrontEnd/css/1-基础/7-消失的边界线问题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">8</div>CSS的导航栏Tab切换方案","link":"/knowledge/FrontEnd/css/1-基础/8-CSS的导航栏Tab切换方案"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">9</div>巧妙的多列等高布局","link":"/knowledge/FrontEnd/css/1-基础/9-巧妙的多列等高布局"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">10</div>CSS 斜线的实现","link":"/knowledge/FrontEnd/css/1-基础/10-CSS 斜线的实现"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">11</div>IFC、BFC、GFC 与 FFC 知多少","link":"/knowledge/FrontEnd/css/1-基础/11-IFC、BFC、GFC 与 FFC 知多少"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">12</div>几个特殊且实用的伪类选择器","link":"/knowledge/FrontEnd/css/1-基础/12-几个特殊且实用的伪类选择器"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">13</div>引人瞩目的 CSS 自定义属性","link":"/knowledge/FrontEnd/css/1-基础/13-引人瞩目的 CSS 自定义属性"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">14</div>为何要规范 CSS 命名方式，及 BEM","link":"/knowledge/FrontEnd/css/1-基础/14-为何要规范 CSS 命名方式，及 BEM"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">15</div>reset.css 知多少","link":"/knowledge/FrontEnd/css/1-基础/15-reset.css 知多少"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">16</div>你该知道的字体 font-family","link":"/knowledge/FrontEnd/css/1-基础/16-你该知道的字体 font-family"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">17</div>再探究字体的渲染规则及fallback机制","link":"/knowledge/FrontEnd/css/1-基础/17-再探究字体的渲染规则及fallback机制"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">18</div>使用(position-sticky )实现粘性布局","link":"/knowledge/FrontEnd/css/1-基础/18-使用(position-sticky )实现粘性布局"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">19</div>深入探讨 CSS 特性检测","link":"/knowledge/FrontEnd/css/1-基础/19-深入探讨 CSS 特性检测"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">20</div>巧妙地制作背景色渐变动画","link":"/knowledge/FrontEnd/css/1-基础/20-巧妙地制作背景色渐变动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">21</div>提高 CSS 动画性能的正确姿势","link":"/knowledge/FrontEnd/css/1-基础/21-提高 CSS 动画性能的正确姿势"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">22</div>纯 CSS 方式实现 CSS 动画的暂停与播放","link":"/knowledge/FrontEnd/css/1-基础/22-纯 CSS 方式实现 CSS 动画的暂停与播放"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">23</div>谈谈 CSS 关键字 initial、inherit 、unset 和 revert","link":"/knowledge/FrontEnd/css/1-基础/23-谈谈 CSS 关键字 initial、inherit 、unset 和 revert"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">24</div>纯 CSS 实现瀑布流布局","link":"/knowledge/FrontEnd/css/1-基础/24-纯 CSS 实现瀑布流布局"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">25</div>vh、vw、vmin、vmax 知多少","link":"/knowledge/FrontEnd/css/1-基础/25-vh、vw、vmin、vmax 知多少"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">26</div>奇妙的-webkit-background-clip","link":"/knowledge/FrontEnd/css/1-基础/25-奇妙的-webkit-background-clip"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">27</div>神奇的 conic-gradient 角向渐变","link":"/knowledge/FrontEnd/css/1-基础/27-神奇的 conic-gradient 角向渐变"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">28</div>不可思议的颜色混合模式 mix-blend-mode","link":"/knowledge/FrontEnd/css/1-基础/28-不可思议的颜色混合模式 mix-blend-mode"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">29</div>不可思议的混合模式 background-blend-mode（二)","link":"/knowledge/FrontEnd/css/1-基础/29-不可思议的混合模式 background-blend-mode（二)"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">30</div>奇妙的 CSS shapes(CSS图形)","link":"/knowledge/FrontEnd/css/1-基础/30-奇妙的 CSS shapes(CSS图形)"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">31</div>纯 CSS 实现波浪效果","link":"/knowledge/FrontEnd/css/1-基础/31-纯 CSS 实现波浪效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">32</div>CSS新特性contain，控制页面的重绘与重排","link":"/knowledge/FrontEnd/css/1-基础/32-CSS新特性contain，控制页面的重绘与重排"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">33</div>fixed 定位失效","link":"/knowledge/FrontEnd/css/1-基础/33-fixed 定位失效"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">34</div>你所不知道的 CSS 动画技巧与细节","link":"/knowledge/FrontEnd/css/1-基础/34-你所不知道的 CSS 动画技巧与细节"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">35</div>你所不知道的 CSS 滤镜技巧与细节","link":"/knowledge/FrontEnd/css/1-基础/35-你所不知道的 CSS 滤镜技巧与细节"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">36</div>text-fill-color 与 color 的异同","link":"/knowledge/FrontEnd/css/1-基础/36-text-fill-color 与 color 的异同"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">37</div>两行 CSS 代码实现图片任意颜色赋色技术","link":"/knowledge/FrontEnd/css/1-基础/37-两行 CSS 代码实现图片任意颜色赋色技术"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">38</div>不可思议的CSS导航栏下划线跟随效果","link":"/knowledge/FrontEnd/css/1-基础/38-不可思议的CSS导航栏下划线跟随效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">39</div>神奇的选择器 focus-within","link":"/knowledge/FrontEnd/css/1-基础/39-神奇的选择器 focus-within"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">40</div>CSS 实现视差效果","link":"/knowledge/FrontEnd/css/1-基础/40-CSS 实现视差效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">41</div>CSS 阴影技巧与细节","link":"/knowledge/FrontEnd/css/1-基础/41-CSS 阴影技巧与细节"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">42</div>不可思议的纯 CSS 滚动进度条效果","link":"/knowledge/FrontEnd/css/1-基础/42-不可思议的纯 CSS 滚动进度条效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">43</div>探秘 flex 上下文中神奇的自动 margin","link":"/knowledge/FrontEnd/css/1-基础/43-探秘 flex 上下文中神奇的自动 margin"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">44</div>CSS 属性选择器的深入挖掘","link":"/knowledge/FrontEnd/css/1-基础/44-CSS 属性选择器的深入挖掘"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">45</div>A Guide to CSS Rules","link":"/knowledge/FrontEnd/css/1-基础/45-A Guide to CSS Rules"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">46</div>在 CSS 中使用三角函数绘制曲线图形及展示动画","link":"/knowledge/FrontEnd/css/1-基础/46-在 CSS 中使用三角函数绘制曲线图形及展示动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">47</div>使用 sroll-snap-type 优化滚动","link":"/knowledge/FrontEnd/css/1-基础/47-使用 sroll-snap-type 优化滚动"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">48</div>巧用 CSS 实现酷炫的充电动画","link":"/knowledge/FrontEnd/css/1-基础/48-巧用 CSS 实现酷炫的充电动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">49</div>巧妙实现带圆角的渐变边框","link":"/knowledge/FrontEnd/css/1-基础/49-巧妙实现带圆角的渐变边框"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">50</div>CSS 故障艺术","link":"/knowledge/FrontEnd/css/1-基础/50-CSS 故障艺术"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">51</div>51使用 display-contents 增强页面语义","link":"/knowledge/FrontEnd/css/1-基础/51使用 display-contents 增强页面语义"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">52</div>奇妙的 CSS MASK","link":"/knowledge/FrontEnd/css/1-基础/52-奇妙的 CSS MASK"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">53</div>不定宽溢出文本适配滚动","link":"/knowledge/FrontEnd/css/1-基础/53-不定宽溢出文本适配滚动"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">54</div>使用 tabindex 配合 focus-within 巧妙实现父选择器","link":"/knowledge/FrontEnd/css/1-基础/54-使用 tabindex 配合 focus-within 巧妙实现父选择器"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">55</div>使用 background 创造各种美妙的背景","link":"/knowledge/FrontEnd/css/1-基础/55-使用 background 创造各种美妙的背景"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">56</div>使用纯 CSS 实现滚动阴影效果","link":"/knowledge/FrontEnd/css/1-基础/56-使用纯 CSS 实现滚动阴影效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">57</div>探究 position-sticky 失效问题","link":"/knowledge/FrontEnd/css/1-基础/57-探究 position-sticky 失效问题"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">58</div>一行 CSS 代码的魅力","link":"/knowledge/FrontEnd/css/1-基础/58-一行 CSS 代码的魅力"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">59</div>水平垂直居中深入挖掘","link":"/knowledge/FrontEnd/css/1-基础/59-水平垂直居中深入挖掘"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">60</div>60.如何不使用 overflowhidden 实现 overflowhidden","link":"/knowledge/FrontEnd/css/1-基础/60.如何不使用 overflowhidden 实现 overflowhidden"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">61</div>61.如何使用基本 HTML 元素在边框中添加文本","link":"/knowledge/FrontEnd/css/1-基础/61.如何使用基本 HTML 元素在边框中添加文本"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">62</div>使用 CSS 创造艺术","link":"/knowledge/FrontEnd/css/1-基础/62-使用 CSS 创造艺术"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">63</div>你可能不知道的 transition 技巧与细节","link":"/knowledge/FrontEnd/css/1-基础/63-你可能不知道的 transition 技巧与细节"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">64</div>使用 mask 实现视频弹幕人物遮罩过滤","link":"/knowledge/FrontEnd/css/1-基础/64-使用 mask 实现视频弹幕人物遮罩过滤"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">65</div>巧用 -webkit-box-reflect 倒影实现各类动效","link":"/knowledge/FrontEnd/css/1-基础/65-巧用 -webkit-box-reflect 倒影实现各类动效"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">66</div>奇思妙想 CSS 文字动画","link":"/knowledge/FrontEnd/css/1-基础/66-奇思妙想 CSS 文字动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">67</div>CSS 整块文本溢出省略特性探究","link":"/knowledge/FrontEnd/css/1-基础/67-CSS 整块文本溢出省略特性探究"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">68</div>老生常谈之 n 种使用 CSS 实现三角形的技巧","link":"/knowledge/FrontEnd/css/1-基础/68-老生常谈之 n 种使用 CSS 实现三角形的技巧"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">69</div>新时代布局中一些有意思的特性","link":"/knowledge/FrontEnd/css/1-基础/69-新时代布局中一些有意思的特性"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">70</div>探秘神奇的运动路径动画 Motion Path","link":"/knowledge/FrontEnd/css/1-基础/70-探秘神奇的运动路径动画 Motion Path"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">71</div>CSS 奇思妙想  Single Div 绘图技巧","link":"/knowledge/FrontEnd/css/1-基础/71-CSS 奇思妙想  Single Div 绘图技巧"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">72</div>Web 动画原则及技巧浅析","link":"/knowledge/FrontEnd/css/1-基础/73-Web 动画原则及技巧浅析"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">73</div>巧妙的实现带圆角的三角形","link":"/knowledge/FrontEnd/css/1-基础/74-巧妙的实现带圆角的三角形"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">74</div>CSS 世界中的方位与顺序","link":"/knowledge/FrontEnd/css/1-基础/75-CSS 世界中的方位与顺序"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">75</div>科技感十足的暗黑字符雨动画","link":"/knowledge/FrontEnd/css/1-基础/76-科技感十足的暗黑字符雨动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">76</div>resize 实现强大的图片拖拽切换预览功能","link":"/knowledge/FrontEnd/css/1-基础/78-resize 实现强大的图片拖拽切换预览功能"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">77</div>仅使用 CSS 能制作出多惊艳的动画","link":"/knowledge/FrontEnd/css/1-基础/79-仅使用 CSS 能制作出多惊艳的动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">78</div>实现一个会动的鸿蒙 LOGO","link":"/knowledge/FrontEnd/css/1-基础/80-实现一个会动的鸿蒙 LOGO"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">79</div>妙用 background 实现花式文字效果","link":"/knowledge/FrontEnd/css/1-基础/81-妙用 background 实现花式文字效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">80</div>3D 穿梭效果？使用 CSS 轻松搞定","link":"/knowledge/FrontEnd/css/1-基础/82-3D 穿梭效果？使用 CSS 轻松搞定"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">81</div>巧用滤镜实现高级感拉满的文字快闪切换效果 ","link":"/knowledge/FrontEnd/css/1-基础/83-巧用滤镜实现高级感拉满的文字快闪切换效果 "},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">82</div>巧用渐变实现高级感拉满的背景光动画","link":"/knowledge/FrontEnd/css/1-基础/84-巧用渐变实现高级感拉满的背景光动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">83</div>使用 CSS 轻松实现高频出现的各类奇形怪状按钮","link":"/knowledge/FrontEnd/css/1-基础/85-使用 CSS 轻松实现高频出现的各类奇形怪状按钮"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">84</div>利用 clip-path 实现动态区域裁剪","link":"/knowledge/FrontEnd/css/1-基础/86-利用 clip-path 实现动态区域裁剪"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">85</div>CSS 实现烟雾效果","link":"/knowledge/FrontEnd/css/1-基础/87-CSS 实现烟雾效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">86</div>深入探讨 filter 与 backdrop-filter 的异同","link":"/knowledge/FrontEnd/css/1-基础/88-深入探讨 filter 与 backdrop-filter 的异同"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">87</div>妙用滤镜构建高级感拉满的磨砂玻璃渐变背景","link":"/knowledge/FrontEnd/css/1-基础/89-妙用滤镜构建高级感拉满的磨砂玻璃渐变背景"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">88</div>深入浅出 CSS 动画","link":"/knowledge/FrontEnd/css/1-基础/90-深入浅出 CSS 动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">89</div>运用 transform 导致文本模糊的现象","link":"/knowledge/FrontEnd/css/1-基础/91-运用 transform 导致文本模糊的现象"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">90</div>巧用 CSS 实现炫彩三角边框动画","link":"/knowledge/FrontEnd/css/1-基础/92-巧用 CSS 实现炫彩三角边框动画"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">91</div>渐变消失遮罩的多种实现方式","link":"/knowledge/FrontEnd/css/1-基础/93-渐变消失遮罩的多种实现方式"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">92</div>CSS font-variation 可变字体","link":"/knowledge/FrontEnd/css/1-基础/94-CSS font-variation 可变字体"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">93</div>何为 @scroll-timeline 滚动时间线","link":"/knowledge/FrontEnd/css/1-基础/95-何为 @scroll-timeline 滚动时间线"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">94</div>巧用 CSS 构建渐变彩色二维码","link":"/knowledge/FrontEnd/css/1-基础/96-巧用 CSS 构建渐变彩色二维码"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">95</div>利用混合模式，让文字智能适配背景颜色","link":"/knowledge/FrontEnd/css/1-基础/97-利用混合模式，让文字智能适配背景颜色"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">96</div>CSS 阴影进阶，实现更加的立体的阴影效果","link":"/knowledge/FrontEnd/css/1-基础/98-CSS 阴影进阶，实现更加的立体的阴影效果"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">97</div>巧用 background-clip 实现超强的文字动效","link":"/knowledge/FrontEnd/css/1-基础/99-巧用 background-clip 实现超强的文字动效"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">98</div>巧用 CSS 视差实现酷炫交互动效 ","link":"/knowledge/FrontEnd/css/1-基础/100-巧用 CSS 视差实现酷炫交互动效 "},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">99</div>有意思的鼠标跟随 3D 旋转动效","link":"/knowledge/FrontEnd/css/1-基础/101-有意思的鼠标跟随 3D 旋转动效"},{"text":"<div class=\\"text-color-gray mr-[6px]\\" style=\\"font-weight: 550; display: inline-block;\\">100</div>从表盘刻度到艺术剪纸","link":"/knowledge/FrontEnd/css/1-基础/102-从表盘刻度到艺术剪纸"}],"collapsed":true},{"text":"探索 (0篇)","items":[],"collapsed":true}]},"logo":"/logo.png","outline":{"level":"deep","label":"目录"},"darkModeSwitchLabel":"切换日光/暗黑模式","sidebarMenuLabel":"文章","returnToTopLabel":"返回顶部","lastUpdatedText":"最后更新","docFooter":{"prev":"上一篇","next":"下一篇"},"editLink":{"pattern":"https://github.com/mafqla/yalis-blog/edit/main/packages/yalispress/docs/:path","text":"不妥之处，敬请雅正"},"search":{"provider":"local"},"socialLinks":[{"icon":"github","link":"https://github.com/mafqla"}],"articleMetadataConfig":{"author":"yalis","authorLink":"/about/me","showViewCount":true},"copyrightConfig":{"license":"署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)","licenseLink":"http://creativecommons.org/licenses/by-sa/4.0/"},"commentConfig":{"type":"gitalk","showComment":true},"footerConfig":{"showFooter":true,"message":"Released under the MIT License.","icpRecordCode":false,"publicSecurityRecordCode":false,"copyright":"Copyright © 2019-2024 yalis"}},"locales":{},"scrollOffset":134,"cleanUrls":true}'));
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive2 = ref(true);
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive: isActive2 };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function watchDebounced(source, cb, options = {}) {
  const {
    debounce = 0,
    maxWait = void 0,
    ...watchOptions
  } = options;
  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: debounceFilter(debounce, { maxWait })
    }
  );
}
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    shallow = true,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
    window2.document.documentElement.addEventListener("click", noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window: window2 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window2 == null ? void 0 : window2.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window2.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString));
        window2.document.head.appendChild(style);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute2, value);
      }
      if (disableTransition) {
        window2.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e) {
    return auto;
  }
}
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => {
    if (mode.system) {
      return mode.system.value;
    } else {
      const preferredDark = usePreferredDark({ window: window2 });
      return preferredDark.value ? "dark" : "light";
    }
  });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark;
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.localStorage, options);
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, initialOverflow);
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    var _a;
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = (_a = elInitialOverflow.get(el)) != null ? _a : "";
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.sessionStorage, options);
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, behavior = "auto" } = options;
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window2.scrollX);
  const internalY = ref(window2.scrollY);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo({ left: x2, behavior });
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo({ top: y2, behavior });
    }
  });
  useEventListener(
    window2,
    "scroll",
    () => {
      internalX.value = window2.scrollX;
      internalY.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = new Set("3g2,3gp,7z,aac,abw,ai,aif,aifc,aiff,apng,arc,asf,asr,asx,au,avi,avif,axs,azw,bin,bmp,bz,bz2,c,cda,cer,class,crl,crt,csh,css,csv,dcr,der,dll,doc,docx,eot,eps,epub,exe,flac,gif,gtar,gz,gzip,ico,ics,ief,jar,jfif,jpe,jpeg,jpg,js,json,jsonld,latex,m3u,m4a,man,mdb,mht,mhtml,mid,midi,mjs,mov,mp2,mp3,mp4,mpa,mpe,mpeg,mpg,mpkg,mpp,odp,ods,odt,oga,ogg,ogv,ogx,opus,otf,p10,p12,p7b,p7c,p7m,p7r,p7s,pbm,pdf,pfx,php,pjp,pjpeg,png,ppt,pptx,ps,pub,qt,rar,roff,rtf,rtx,ser,sh,spc,svg,swf,t,tar,tcl,tex,texi,texinfo,tgz,tif,tiff,tr,ts,tsv,ttf,txt,ua,viv,vivo,vsd,vtt,wav,weba,webm,webp,woff,woff2,xbm,xhtml,xls,xlsx,xml,xul,yaml,yml,zip,conf".split(","));
function treatAsHtml(filename) {
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
function escapeRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    updateHistory(href);
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
              }
              if (target) {
                scrollTo$1(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link = e.target.closest("a");
      if (link && !link.closest(".vp-raw") && (link instanceof SVGElement || !link.download)) {
        const { target } = link;
        const { href, origin, pathname, hash, search } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const currentUrl = window.location;
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && treatAsHtml(pathname)) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
            }
            if (hash) {
              scrollTo$1(link, hash, link.classList.contains("header-anchor"));
            } else {
              updateHistory(href);
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      await loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
      (_a = router.onAfterRouteChanged) == null ? void 0 : _a.call(router, location.href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo$1(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function updateHistory(href) {
  if (inBrowser && normalizeHref(href) !== normalizeHref(location.href)) {
    history.replaceState({ scrollPosition: window.scrollY }, document.title);
    history.pushState(null, "", href);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
export {
  useLocalStorage as A,
  watchDebounced as B,
  Content as C,
  useEventListener as D,
  EXTERNAL_URL_RE as E,
  escapeRegExp as F,
  RouterSymbol as R,
  useData as a,
  inBrowser as b,
  isActive as c,
  useMediaQuery as d,
  useRoute as e,
  onClickOutside as f,
  getScrollOffset as g,
  onKeyStroke as h,
  isExternal as i,
  useWindowScroll as j,
  useScrollLock as k,
  createTitle as l,
  mergeHead as m,
  initData as n,
  onContentUpdated as o,
  pathToFile as p,
  dataSymbol as q,
  createRouter as r,
  siteDataRef as s,
  treatAsHtml as t,
  useRouter as u,
  unrefElement as v,
  withBase as w,
  tryOnScopeDispose as x,
  computedAsync as y,
  useSessionStorage as z
};
