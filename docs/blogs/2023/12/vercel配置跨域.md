---
title: Vercel 配置跨域
description: 部署前端项目到Vercel，解决跨域的问题
author: yalis
date: 2023-12-28 15:44:25
categories:
  - vercel
tags:
  - vercel
lastUpdated: true
showComment: true
---

# Vercel 配置跨域

## 1. 安装依赖

```bash
npm install http-proxy-middleware
```

## 2. 创建配置文件

在项目根目录下创建 vercel.json 文件，配置路由重写规则：

```json
{
  "rewrites": [
    {
      "source": "/douyin/(.*)",
      "destination": "/api/proxy"
    }
  ]
}
```

其中 `source` 是匹配的路径，`destination` 是重定向的路径，这里重定向到 `/api/proxy`， 这个路径就是我们在根目录下创建的 `api/proxy.js` 文件。

以下是一个用于解决跨域问题的 Vercel function，使用了 `http-proxy-middleware` 库。

```javascript
import { createProxyMiddleware } from 'http-proxy-middleware'

export default async function handler(req, res) {
  // 判断请求路径是否以 '/douyin' 开头，设置代理目标
  const target = req.url.startsWith('/douyin') ? 'https://www.douyin.com' : ''

  if (target) {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // 创建代理并等待完成
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
    // 如果没有找到匹配的路径，返回 404
    res.statusCode = 404
    res.end('Not Found')
  }
}
```

通过以上步骤，你可以成功部署前端项目到 Vercel 并解决跨域问题。请根据实际情况调整路径和配置。
