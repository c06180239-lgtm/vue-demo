# 拾光集 · Vue 3 电商交互练习 Demo

一个使用 Vue 3、Vite 和原生 CSS 构建的纯前端电商风格展示项目。项目仅用于页面与交互练习，不连接后端，不创建真实账户，不支持下单或支付。

## 启动项目

```bash
npm install
npm run dev
```

在终端显示的本地地址打开页面即可。生产构建可使用 `npm run build`，本地预览可使用 `npm run preview`。

## 项目结构

```text
src/
├── App.vue                   页面状态、商品演示数据与购物车
├── main.js                   Vue 应用入口
├── style.css                 全局样式与响应式布局
├── components/
│   ├── SiteHeader.vue         顶部导航
│   ├── HeroBanner.vue         自动轮播 Banner
│   ├── ProductCard.vue        商品卡片与图片预览入口
│   └── CartDrawer.vue         购物车抽屉、数量与价格汇总
└── views/
    └── AuthView.vue           登录、注册表单
```

商品图片由 Unsplash 图片地址加载，需要联网查看图片。所有商品、登录和购物车数据仅保存在页面运行时内存中。
