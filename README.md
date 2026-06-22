# file-server

3D / 多媒体静态资源库，GitHub Pages 托管。

## 页面

| 文件 | 说明 |
|------|------|
| `index.html` | 公开列表页 |
| `admin.html` | 管理页（单文件，列表 / 新增 / 编辑，直推 GitHub） |

## 条目格式（index.js）

```js
const HOST = (window.origin + window.location.pathname).replace(/\/index.html$/, '/')

export default [
  { name: '名称', url: HOST + '/model/foo.glb', image: HOST + '/images/foo.png', type: 'model' }
]
```

本地预览需 HTTP 服务：`npx serve .`
