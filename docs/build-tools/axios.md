## 认识Axios库

**Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js**

- 功能特点：
  - 在浏览器中发送XMLHttpRequests请求
  - 在node.js中发送http请求
  - 支持Promise API
  - 拦截请求和响应
  - 转换请求和响应数据



## axios发送请求

- 支持多种请求方式

  - axios.request(config)
  - axios.get(url[, config])
  - axios.delete(url[, config])
  - axios.head(url[, config])
  - axios.options(url[, config])
  -  axios.post(url[, data[, config]])
  - axios.put(url[, data[, config]])
  -  axios.patch(url[, data[, config]])
- 发送多个请求
  - 使用axios.all,可以放入多个请求的数组
  - axios.all([]) 返回的结果是一个数组，使用axios.spread可将数组[res1,res2]展开为res1，res2



### 常见的配置选项

- `url` 是用于请求的服务器 URL 

  -  url: '/user'  

-  请求类型

  - `method` 是创建请求时使用的方法

  -  method: 'get', // 默认值   

- 请求根路径

  - `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。  

  - 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL 
  - ` baseURL: 'https://some-domain.com/api/'` 

- 请求前的数据处理

  - `transformRequest` 允许在向服务器发送前，修改请求数据  

  - 它只能用于 `PUT`, `POST` 和 `PATCH` 这几个请求方法  

  -  数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream  

  - ```js
    transformRequest: [function (data, headers) {    
        // 对发送的 data 进行任意转换处理     
        return data;  
    }],   
    ```

    

- 请求后数据处理

  - `transformResponse` 在传递给 then/catch 前，允许修改响应数据  

  - ```js
    transformResponse: [function (data) {    
        // 对接收的 data 进行任意转换处理     
        return data;  
    }],  
    ```

    

- 自定义请求头  

  - `headers: {'X-Requested-With': 'XMLHttpRequest'}`   

- URL查询对象

  - `params` 是与请求一起发送的 URL 参数  
  -  必须是一个简单对象或 URLSearchParams 对象  `params: {    ID: 12345  }`   

- 查询对象序列化函数

  - `paramsSerializer`是可选方法，主要用于序列化`params`  

  - ```js
    paramsSerializer: function (params) {    
        return Qs.stringify(params, {arrayFormat: 'brackets'})  
    }   
    ```

  - 

  - 

- request body

  - `data` 是作为请求体被发送的数据  

  - 仅适用 `PUT`, `POST`, `DELETE` 和 `PATCH` 请求方法  /

  - 在没有设置 `transformRequest` 时，则必须是以下类型之一:  

  - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams  

  - 浏览器专属: FormData, File, Blob  

  - Node 专属: Stream, Buffer

  - ```js
    data: {    
        firstName: 'Fred'  
    }
    ```

    

  - 发送请求体数据的可选语法 

  - 请求方式 post  

  - 只有 value 会被发送，key 则不会  

  - `data: 'Country=Brasil&City=Belo Horizonte'`   

- 超时设置

  - `timeout` 指定请求超时的毫秒数。  

  - 如果请求时间超过 `timeout` 的值，则请求会被中断  
  - `timeout: 1000`  默认值是 `0` (永不超时) 

## axios创建实例

- 为什么要创建axios的实例？
  - 当我们从axios模块中导入对象时，使用的实例是默认的实例；
  - 当给该实例设置一些默认配置是，这些配置就被固定下来
  - 比如某些请求需要使用特定的baseURL或者timeout

```js
const instance = axios.create({
    baseURL:"http:// 127,0,0,0.1:8080"
})
instance.post("/getUserById",{
    id:1
}).then(res=>{
    console.log("res",res)
})

const instance2 = axios.create({
    baseURL:"http:// 127,0,0,0.1:8080",
    timeout:1000,
    headers:{}
})
```



## axios的拦截器

- axios的也可以设置拦截器：拦截每次请求和响应
  - axios.interceptors.request.use(请求成功拦截，请求失败拦截)
  - axios.interceptors.response.use(响应成功拦截，响应失败拦截)

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```



## axios请求封装



```js
import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from '@/utils/auth'
import md5 from 'md5'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
      if (isCheckTimeout()) {
        // 登出操作
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
    }
    // 配置接口国际化
    config.headers['Accept-Language'] = store.getters.language
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      // 成功返回解析后的数据
      return data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理 token 超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

/**
 * 返回 Icode 的实现
 */
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default service

```



```js
class ApiReuqest{
    constructor(baseURL,timeout=1000){
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }
    
    request(config){
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    
    get(config){
        return this.request({
            ...config,method:"get"
        })
    }
    post(config){
        return this.request({
            ...config,method:"post"
        })
    }
}

export new ApiRequset()
```





### 详细ts封装axios



index.ts

```ts
import Request from './request'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/types'

export interface APIResponse<T> {
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface APIRequestConfig<T, R> extends RequestConfig<APIResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const apiRequest = <D = any, T = any>(config: APIRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<YWZResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default apiRequest
```



`request/index.ts`

```ts
import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type {
  RequestConfig,
  RequestInterceptors,
  CancelRequestSource,
} from './types'

class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors<AxiosResponse>

  /*
  存放取消方法的集合
  * 在创建请求后将取消请求方法 push 到该集合中
  * 封装一个方法，可以取消请求，传入 url: string|string[]  
  * 在请求之前判断同一URL是否存在，如果存在就取消请求
  */
  cancelRequestSourceList?: CancelRequestSource[]
  /*
  存放所有请求URL的集合
  * 请求之前需要将url push到该集合中
  * 请求完毕后将url从集合中删除
  * 添加在发送请求之前完成，删除在响应之后删除
  */
  requestUrlList?: string[]

  constructor(config: RequestConfig) {
    this.requestUrlList = []
    this.cancelRequestSourceList = []
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => res,
      (err: any) => err,
    )

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    )
    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        return res.data
      },
      (err: any) => err,
    )
  }
  /**
   * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url
      },
    ) as number
  }
  /**
   * @description: 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex(u => u === url)
    const sourceIndex = this.getSourceIndex(url)
    // 删除url和cancel方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1)
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1)
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      const url = config.url
      // url存在保存取消请求方法和当前请求url
      if (url) {
        this.requestUrlList?.push(url)
        // TODO 在axios0.22起，对CancelToken已经弃用，需要改成  AbortController 文档：https://axios-http.com/docs/cancellation
        config.cancelToken = new axios.CancelToken(c => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          })
        })
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }

          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
        .finally(() => {
          url && this.delUrl(url)
        })
    })
  }
  // 取消请求
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      // 取消单个请求
      const sourceIndex = this.getSourceIndex(url)
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]()
    } else {
      // 存在多个需要取消请求的地址
      url.forEach(u => {
        const sourceIndex = this.getSourceIndex(u)
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]()
      })
    }
  }
  // 取消全部请求
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach(source => {
      const key = Object.keys(source)[0]
      source[key]()
    })
  }
}

export default Request
export { RequestConfig, RequestInterceptors }
```



`request/types.ts`

```ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
export interface CancelRequestSource {
  [index: string]: () => void
}
```

