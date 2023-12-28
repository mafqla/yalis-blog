import { RequestHandler, createProxyMiddleware } from 'http-proxy-middleware'

const proxyMiddleware: RequestHandler = createProxyMiddleware('/douyin', {
  target: 'https://douyin.com',
  changeOrigin: true,
  pathRewrite: {
    '^/douyin/': '/'
  }
})

export default proxyMiddleware
