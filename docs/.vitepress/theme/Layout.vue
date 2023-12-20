<template>
  <Layout>
    <template #doc-footer-before>
      <ClientOnly>
        <Copyright
          v-if="
            (frontmatter?.aside ?? true) &&
            (frontmatter?.showArticleMetadata ?? true) &&
            !frontmatter.authorLink
          "
          :key="md5(page.relativePath)"
        />
      </ClientOnly>
    </template>
    <template #layout-bottom>
      <!-- 
      1. hasSidebar: 如果当前页面有侧边栏，就不显示footer
      2. theme.footerConfig?.showFooter ?? true: 如果在config.js中配置了footerConfig.showFooter为false，就不显示footer
      3. frontmatter?.showFooter ?? true: 如果在当前页面的frontmatter中配置了showFooter为false，就不显示footer
    -->
      <Footer
        v-if="
          !hasSidebar &&
          (theme.footerConfig?.showFooter ?? true) &&
          (frontmatter?.showFooter ?? true)
        "
      />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import md5 from 'blueimp-md5'
import Copyright from './components/layout/Copyright.vue'
import Footer from './components/layout/Footer.vue'

const { Layout } = DefaultTheme
const { page, theme, frontmatter } = useData()

const hasSidebar = computed(() => {
  return (
    frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
  )
})
</script>
<style scoped lang="scss"></style>
