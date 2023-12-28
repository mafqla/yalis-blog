// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = (req, res) => {
  let target = ''
  if (req.url.startsWith('/douyin')) {
    target = 'https://douyin.com'
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/douyin/': '/'
    }
  })(req, res)
}
