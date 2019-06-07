# TimeCat-Vue

## 介绍

时光猫

## 项目说明

#### 1. 前后端分离开发模式
- **前端**：Vue + Webpack+ iView
- **后端**：Bomb

#### 2. 项目用到技术、框架与插件
[Vue.js](https://github.com/vuejs)
[webpack](https://github.com/webpack)
[iView](https://github.com/iview/iview)
[Tinymce](https://github.com/tinymce/tinymce)
[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

## 目录结构

```
│  .babelrc
│  .editorconfig
│  .postcssrc.js
│  .gitignore
│  index.html // 首页入口文件
│  package.json
│  README.md
│
├─src
│  │  main.js // 项目入口js
│  │  app.js // 根组件
│  │
│  ├─assets // 资源目录，这里的资源会被wabpack构建
│  ├─api // api接口文件
│  ├─theme // iView主题样式
│  ├─store  应用级数据（state）
│  │
│  ├─mock // 测试数据
│  │    city.json // 省市数据
│  │    data.json // 部分模拟数据
│  │
│  ├─components // 功能组件
│  │  |
│  │  ├─Common // 通用组件
│  │  ├─Image // 图片相关组件
│  │  ├─Input // 信息输入相关组件
│  │  ├─Sidebar // 侧边栏相关组件
│  │  └─Table // 表格相关组件
│  │
│  ├─pages // 页面组件
│  │  |   Main.vue // 主框架
│  │  |
│  │  ├─Components // 组件展示相关页面
│  │  ├─Error // 错误页面
│  │  ├─Examplese // 操作示例相关页面
│  │  ├─Home // 管理后台主页
│  │  ├─Login // 登录相关页面
│  │  └─Profile // 个人信息相关页面
│  │
│  ├─mixins // 混合模块
│  │    city_select.js // 城市联级选择
│  │    email_complete.js // 文章管理
│  │    page.js // 页码配置
│  │    table_operate.js // 表格操作
│  │    table_query.js // 表格查询
│  │    upload_img.js // 上传图片
│  │
│  ├─common // 通用js模块
│  │    common.js // 通用工具
│  │    important.js // 封装一些重要函数
│  │    table_setting.js // 封装一些iView表格按钮渲染
│  │    validate.js // 封装一些iView表单验证方法
│  │
│  ├─bmob
|  |    bmob-server.js // 封装bomb请求函数
│  │
│  └─router
│       index.js // 路由配置
│
├─static // 静态资源
│
├─config // 配置目录，包括端口号
│
└─build // 项目构建(webpack)相关代码
```

## 本地运行
1. 安装前台依赖
> npm install
2. 运行前台项目
> npm run dev
3. 访问地址：http://localhost:6060

## 项目打包
> npm run build
