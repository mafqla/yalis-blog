import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
// import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4002,
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
    // visualizer({
    //   filename: './node_modules/.cache/visualizer/stats.html',
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true
    // })
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
    '**/*.jpeg',
    '**/*.awebp'
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
