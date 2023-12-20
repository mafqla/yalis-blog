import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      dirs: ['.vitepress/theme'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ArcoResolver({
          sideEffect: true,
          resolveIcons: true
        })
      ]
    })
  ],
  build: {
    minify: 'esbuild'
  },

  esbuild: {
    drop: ['console', 'debugger'],
    format: 'esm'
  },
  ssr: { noExternal: ['@arco-design/web-vue'] },
  resolve: {
    alias: {
      mermaid: 'mermaid/dist/mermaid.esm.mjs'
    }
  }
})
