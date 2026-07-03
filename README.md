# file-server

https://z2586300277.github.io/file-server/

## 条目格式（index.js）

```js
const HOST = (window.origin + window.location.pathname).replace(/\/index.html$/, '/')

export default [
  { name: '名称', url: HOST + '/model/foo.glb', image: HOST + '/images/foo.png', type: 'model' }
]
```

本地预览需 HTTP 服务：`npx serve .`
