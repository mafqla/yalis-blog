// 该服务为 vercel serve跨域处理
import { createProxyMiddleware } from 'http-proxy-middleware'
export default (req, res) => {
  let target = ''

  if (req.url.startsWith('/douyin')) {
    target = 'https://douyin.com'
  }
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/douyin/': '/'
    }
  })(req, res)
}
