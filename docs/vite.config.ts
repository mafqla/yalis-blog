import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  server: {
    proxy: {
      '/douyin': {
        target: 'https://www.douyin.com',
        changeOrigin: true,
        headers: {
          referer: 'https://www.douyin.com/',
          origin: 'https://www.douyin.com/'
        },
        rewrite: path => path.replace(/^\/douyin/, '')
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
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
    minify: 'esbuild',
    cssMinify: 'esbuild',
    reportCompressedSize: true
  },

  assetsInclude: [
    '**/*.png',
    '**/*.image',
    '**/*.svg',
    '**/*.ico',
    '**/*.gif',
    '**/*.jpg',
    '**/*.jpeg'
  ],
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
