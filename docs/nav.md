---
title: 我的导航
showArticleMetadata: false
lastUpdated: false
editLink: false
showComment: false
hasFooter: true
outline: [2, 3, 4]
---

<script setup>
	import MNavLinks from '/.vitepress/theme/components/nav/components/MNavLinks.vue'
import { NAV_DATA } from './.vitepress/theme/components/nav/data'
</script>
<style src="./.vitepress/theme/components/nav/index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
