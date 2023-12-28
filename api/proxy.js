import { createProxyMiddleware } from 'http-proxy-middleware'

export default async function handler(req, res) {
  const target = req.url.startsWith('/douyin') ? 'https://www.douyin.com' : ''

  if (target) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    await new Promise(resolve => {
      createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
          '^/douyin/': '/'
        }
      })(req, res, resolve)
    })
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
}
