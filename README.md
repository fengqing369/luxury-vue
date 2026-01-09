# 雅萃阁 - 高端古玩艺术收藏网站

> Vue 3 + Vite 构建的古玩字画鉴赏收藏平台

## 项目简介

雅萃阁是一个专注于中国古代艺术品收藏与鉴赏的高端网站。采用 Vue 3 + Vite + Tailwind CSS 构建，运用液态玻璃（Liquid Glass）设计风格，展示高古瓷、高古玉、青铜器、古字画等珍贵文物。

### 收藏门类

- **高古瓷** - 唐三彩、宋代五大名窑、元青花等
- **高古玉** - 红山文化、良渚文化、商周玉器等
- **青铜器** - 商周礼器、兵器、铭文青铜器等
- **古字画** - 晋唐宋元明清名家书画真迹

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Node.js | v22.13.1+ | JavaScript 运行环境 |
| Vue | 3.4+ | 渐进式 JavaScript 框架 |
| Vue Router | 4.2+ | 官方路由管理器 |
| Vite | 5.0+ | 下一代前端构建工具 |
| Tailwind CSS | 3.x | 原子化 CSS 框架 |
| Composition API | - | Vue 3 组合式 API |

## 快速开始

### 环境要求

```bash
# 检查 Node.js 版本（需要 v18+）
node -v

# 检查 npm 版本
npm -v
```

### 安装依赖

```bash
# 1. 进入项目目录
cd luxury-vue

# 2. 安装项目依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:3000
```

### 开发命令

```bash
# 启动开发服务器（热更新）
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 功能特性

### 前台功能

| 功能模块 | 说明 |
|----------|------|
| 首页展示 | 液态玻璃效果 Hero 区、收藏分类展示、品牌故事 |
| 分类详情 | 四大收藏门类独立详情页，含鉴赏知识 |
| 藏品展示 | 每个分类展示 6 件珍贵藏品 |
| 鉴赏指南 | 专业的收藏知识和鉴赏要点 |
| VIP会员 | 预约鉴赏、专属服务介绍 |
| 社交媒体 | 微信、QQ、微博、抖音等中国社交平台 |

### 交互特效

- ✅ 液态玻璃卡片（Glassmorphism）
- ✅ 渐变动画背景
- ✅ 金色流光文字效果
- ✅ 平滑滚动页面切换
- ✅ 卡片悬浮动画
- ✅ 返回顶部按钮

## 目录结构

```
luxury-vue/
├── public/                       # 静态资源目录
│   └── images/                   # 图片资源
│       ├── ceramics/             # 高古瓷图片
│       ├── jade/                 # 高古玉图片
│       ├── bronze/               # 青铜器图片
│       └── calligraphy/          # 古字画图片
├── src/                          # 源代码目录
│   ├── main.js                   # 应用入口 + 路由配置
│   ├── App.vue                   # 根组件
│   └── pages/                    # 页面组件
│       ├── HomePage.vue          # 首页
│       ├── CeramicDetail.vue     # 高古瓷详情页
│       ├── JadeDetail.vue        # 高古玉详情页
│       ├── BronzeDetail.vue      # 青铜器详情页
│       └── CalligraphyDetail.vue # 古字画详情页
├── index.html                    # HTML 入口文件
├── vite.config.js                # Vite 配置文件
├── package.json                  # 项目依赖配置
├── README.md                     # 项目说明文档
└── QUICKSTART.md                 # 快速启动指南
```

## 路由说明

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 雅萃阁主页 |
| `/ceramic` | 高古瓷 | 古代陶瓷鉴赏 |
| `/jade` | 高古玉 | 古代玉器鉴赏 |
| `/bronze` | 青铜器 | 青铜礼器鉴赏 |
| `/calligraphy` | 古字画 | 书法绘画鉴赏 |

## 页面说明

### 首页 (HomePage.vue)

**区块结构：**
```
┌─────────────────────────────────┐
│     导航栏（悬浮玻璃卡片）        │
├─────────────────────────────────┤
│     Hero 区（渐变动画背景）       │
│     - 品牌标语                    │
│     - CTA 按钮                    │
├─────────────────────────────────┤
│     收藏分类（4个卡片）            │
│     - 高古瓷 / 高古玉              │
│     - 青铜器 / 古字画              │
├─────────────────────────────────┤
│     品牌故事                      │
├─────────────────────────────────┤
│     专业服务                      │
│     - 专家鉴定 / 收藏咨询          │
│     - 资产配置                     │
├─────────────────────────────────┤
│     VIP 会员招募                  │
├─────────────────────────────────┤
│     页脚（中国社交媒体图标）        │
└─────────────────────────────────┘
```

### 详情页结构

所有详情页（高古瓷、高古玉、青铜器、古字画）采用统一结构：

```
┌─────────────────────────────────┐
│     导航栏（返回首页按钮）         │
├─────────────────────────────────┤
│     Hero 区（分类介绍）            │
│     - 统计数据                    │
├─────────────────────────────────┤
│     鉴赏知识                      │
│     - 历史背景                    │
│     - 工艺特点                    │
├─────────────────────────────────┤
│     收藏要点                      │
│     - 鉴定方法                    │
│     - 注意事项                    │
├─────────────────────────────────┤
│     馆藏珍品（6件藏品展示）        │
├─────────────────────────────────┤
│     预约鉴赏 CTA                  │
└─────────────────────────────────┘
```

## 藏品数据结构

每个详情页的藏品数据格式：

```javascript
{
  id: 1,                              // 藏品编号
  name: '唐三彩骆驼载乐俑',            // 藏品名称
  dynasty: '唐代',                     // 朝代
  year: '公元618-907年',               // 年代
  description: '此件唐三彩...',        // 藏品描述
  size: '高58cm 长42cm',               // 尺寸
  provenance: '西安出土',              // 来源
  price: '¥ 2,800,000',               // 价格
  featured: true,                      // 是否镇馆之宝
  imageGradient: 'from-amber-900/50'   // 图片占位渐变色
}
```

## 设计规范

### 颜色方案

```css
/* 金色系（主色） */
--gold-400: #FBBF24
--gold-500: #F59E0B
--gold-600: #CA8A04
--gold-700: #B45309

/* 石色系（背景） */
--stone-50:  #FAFAF9
--stone-900: #1C1917
--stone-950: #0C0A09
```

### 字体搭配

```css
/* 标题字体 */
font-family: 'Cormorant', serif;

/* 正文字体 */
font-family: 'Montserrat', 'Noto Sans SC', sans-serif;
```

### 组件样式

| 组件 | 样式类 |
|------|--------|
| 玻璃卡片 | `glass-card` |
| 玻璃卡片（浅色）| `glass-card-light` |
| 金色流光文字 | `gold-shimmer` |
| 产品卡片 | `product-card` |
| 渐变背景 | `hero-gradient` |

## 开发说明

### 添加新藏品

在对应的详情页组件中，找到 `ceramics` / `jades` / `bronzes` / `artworks` 数组，添加新对象：

```javascript
// 以 CeramicDetail.vue 为例
const ceramics = ref([
  // ... 现有藏品
  {
    id: 7,
    name: '新藏品名称',
    dynasty: '朝代',
    year: '年代',
    description: '藏品描述',
    size: '尺寸',
    provenance: '来源',
    price: '价格',
    featured: false,
    imageGradient: 'from-color-900/50 to-color-900/50'
  }
])
```

### 添加真实图片

**1. 创建图片目录**

```bash
mkdir -p public/images/{ceramics,jade,bronze,calligraphy}
```

**2. 放入图片文件**

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

**3. 修改详情页代码**

在详情页组件中，将 SVG 替换为图片标签：

```vue
<!-- 原代码 -->
<div class="product-image ...">
  <svg class="w-20 h-20 ...">...</svg>
</div>

<!-- 修改为 -->
<div class="product-image ...">
  <img
    :src="`/images/ceramics/${ceramic.image}`"
    :alt="ceramic.name"
    class="w-full h-full object-cover"
  >
</div>
```

**4. 更新数据**

在藏品数据中添加图片文件名：

```javascript
{
  id: 1,
  name: '唐三彩骆驼载乐俑',
  image: 'tang-sancai.jpg',  // 新增
  // ... 其他字段
}
```

### 修改路由

在 `src/main.js` 中修改路由配置：

```javascript
const routes = [
  { path: '/', component: HomePage },
  // 添加新路由
  { path: '/new-page', component: NewPage },
]
```

### 修改样式

在组件的 `<style scoped>` 区块中添加自定义样式：

```vue
<style scoped>
.my-custom-class {
  /* 自定义样式 */
}
</style>
```

## 部署

### 构建生产版本

```bash
# 1. 构建项目
npm run build

# 2. 生成的文件在 dist 目录
```

### 部署到 Vercel

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 在项目目录执行
vercel

# 3. 按提示操作
```

### 部署到 Netlify

```bash
# 1. 构建项目
npm run build

# 2. 拖拽 dist 目录到 Netlify
# 或使用 Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 常见问题

### Q1: npm install 报错？

**A:** 清除缓存后重新安装：

```bash
# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### Q2: 页面空白或黑屏？

**A:** 检查以下几点：

1. 确保已安装依赖 `npm install`
2. 检查控制台是否有错误
3. 确保使用 `npm run dev` 启动，不要直接打开 HTML
4. 清除浏览器缓存后重试

### Q3: 端口 3000 被占用？

**A:** 修改 `vite.config.js` 中的端口号：

```javascript
server: {
  port: 8888,  // 改为其他端口
  open: true
}
```

### Q4: 如何修改默认标题？

**A:** 在 `index.html` 中修改 `<title>` 标签：

```html
<title>你的标题</title>
```

### Q5: 热更新不生效？

**A:** 重启开发服务器：

```bash
# 按 Ctrl+C 停止服务
# 重新启动
npm run dev
```

## 浏览器支持

| 浏览器 | 版本要求 |
|--------|----------|
| Chrome | 最新版 |
| Edge | 最新版 |
| Firefox | 最新版 |
| Safari | 最新版 |
| 微信浏览器 | 支持 |

## 更新日志

### v1.0.0 (2025-01-06)

- ✅ Vue 3 + Vite 项目初始化
- ✅ 首页 + 4个详情页
- ✅ 路由配置完成
- ✅ 液态玻璃设计风格
- ✅ 中国社交媒体图标
- ✅ 响应式布局适配
- ✅ npm run dev 开发模式

## 许可证

本项目仅供学习参考使用。

## 技术支持

- Node.js: https://nodejs.org/
- Vue 3: https://vuejs.org/
- Vite: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/

---

**雅萃阁** - 传承中华文明，收藏历史瑰宝
