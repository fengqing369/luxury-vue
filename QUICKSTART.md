# 快速启动指南

## 一、启动项目（推荐方式）

```bash
# 1. 进入项目目录
cd luxury-vue

# 2. 安装依赖（首次运行）
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器自动打开
# http://localhost:3000
```

## 二、开发命令速查

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（热更新） |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |

## 三、页面导航

| 页面 | URL | 说明 |
|------|-----|------|
| 首页 | `#/` | 主页 |
| 高古瓷 | `#/ceramic` | 点击"高古瓷"卡片 |
| 高古玉 | `#/jade` | 点击"高古玉"卡片 |
| 青铜器 | `#/bronze` | 点击"青铜器"卡片 |
| 古字画 | `#/calligraphy` | 点击"古字画"卡片 |

## 四、文件修改位置

### 修改藏品信息

```
src/pages/CeramicDetail.vue     # 高古瓷
src/pages/JadeDetail.vue        # 高古玉
src/pages/BronzeDetail.vue      # 青铜器
src/pages/CalligraphyDetail.vue # 古字画
```

在对应文件中找到 `const xxx = ref([...])` 数组，修改藏品数据。

### 修改首页内容

打开 `src/pages/HomePage.vue`：

```vue
<!-- 修改导航链接 -->
<a href="#collection">珍品收藏</a>

<!-- 修改品牌信息 -->
<span class="font-serif...">雅萃阁</span>
```

### 修改路由

打开 `src/main.js`：

```javascript
const routes = [
  { path: '/', component: HomePage },
  // 添加新路由
  { path: '/new-page', component: NewPage },
]
```

### 修改联系方式

在 `src/pages/HomePage.vue` 底部找到社交媒体图标区域。

## 五、添加真实图片

### 1. 创建图片目录

```bash
mkdir -p public/images/{ceramics,jade,bronze,calligraphy}
```

### 2. 放入图片文件

```
public/images/
├── ceramics/
│   ├── tang-sancai.jpg
│   ├── ru-yao.jpg
│   └── ...
├── jade/
│   ├── shang-dragon.jpg
│   └── ...
├── bronze/
│   └── ...
└── calligraphy/
    └── ...
```

### 3. 修改详情页代码

在详情页中，将 SVG 替换为图片：

```vue
<!-- 原代码 -->
<div class="product-image ...">
  <svg class="w-20 h-20 ...">...</svg>
</div>

<!-- 修改为 -->
<div class="product-image ...">
  <img :src="`/images/ceramics/${ceramic.image}`" :alt="ceramic.name">
</div>
```

### 4. 更新数据

在藏品数据中添加图片文件名：

```javascript
{
  id: 1,
  name: '唐三彩骆驼载乐俑',
  image: 'tang-sancai.jpg',  // 新增
  // ... 其他字段
}
```

## 六、常见问题快速解决

### 页面空白或黑屏？

```bash
# 1. 确保已安装依赖
npm install

# 2. 重启开发服务器
npm run dev

# 3. 清除浏览器缓存
# Chrome: Ctrl+Shift+Delete
```

### 端口被占用？

修改 `vite.config.js` 中的端口号：

```javascript
server: {
  port: 8888,  // 改为其他端口
  open: true
}
```

### npm install 报错？

```bash
# 清除缓存后重试
rm -rf node_modules package-lock.json
npm install
```

### 热更新不生效？

```bash
# 重启服务器
# Ctrl+C 停止
# npm run dev 重新启动
```

## 七、项目结构速查

```
luxury-vue/
├── public/              # 静态资源（图片放这里）
├── src/
│   ├── main.js         # 路由配置
│   ├── App.vue         # 根组件
│   └── pages/          # 页面文件
│       ├── HomePage.vue
│       ├── CeramicDetail.vue
│       ├── JadeDetail.vue
│       ├── BronzeDetail.vue
│       └── CalligraphyDetail.vue
├── index.html          # HTML 入口
├── vite.config.js      # Vite 配置
└── package.json        # 依赖配置
```

## 八、数据字段说明

### 藏品数据字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| id | Number | 藏品编号 | 1 |
| name | String | 藏品名称 | '唐三彩骆驼载乐俑' |
| dynasty | String | 朝代 | '唐代' |
| year | String | 年代 | '公元618-907年' |
| description | String | 藏品描述 | '此件唐三彩...' |
| size | String | 尺寸 | '高58cm 长42cm' |
| provenance | String | 来源 | '西安出土' |
| price | String | 价格 | '¥ 2,800,000' |
| featured | Boolean | 镇馆之宝 | true |
| image | String | 图片文件名 | 'tang-sancai.jpg' |

## 九、部署上线

```bash
# 1. 构建项目
npm run build

# 2. dist 目录就是生产文件
# 可部署到任何静态网站托管服务

# Vercel 部署
npm i -g vercel
vercel

# Netlify 部署
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

**完整文档** → 查看 `README.md`
