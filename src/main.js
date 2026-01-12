import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// Pages
import HomePage from './pages/HomePage.vue'
import CeramicDetail from './pages/CeramicDetail.vue'
import JadeDetail from './pages/JadeDetail.vue'
import BronzeDetail from './pages/BronzeDetail.vue'
import CalligraphyDetail from './pages/CalligraphyDetail.vue'
import ItemDetail from './pages/ItemDetail.vue'
import StoryPage from './pages/StoryPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactPage from './pages/ContactPage.vue'
import AdminPage from './pages/AdminPage.vue'

// Routes
const routes = [
    { path: '/before', component: HomePage },
    // 复数形式路由（主要使用）
    { path: '/before/ceramics', component: CeramicDetail },
    { path: '/before/jades', component: JadeDetail },
    { path: '/before/bronzes', component: BronzeDetail },
    { path: '/before/calligraphies', component: CalligraphyDetail },
    // 单数形式路由（重定向到复数形式，确保兼容性）
    { path: '/before/ceramic', redirect: '/before/ceramics' },
    { path: '/before/jade', redirect: '/before/jades' },
    { path: '/before/bronze', redirect: '/before/bronzes' },
    { path: '/before/calligraphy', redirect: '/before/calligraphies' },
    // 新增页面路由
    { path: '/before/story', component: StoryPage },
    { path: '/before/services', component: ServicesPage },
    { path: '/before/contact', component: ContactPage },
    // 管理员页面路由
    { path: '/before/admin', component: AdminPage },
    // 详情页路由
    { path: '/before/:type/:id', component: ItemDetail },
    // 兼容旧路由（没有before前缀的详情页路由）
    { path: '/:type/:id', component: ItemDetail },
    // 重定向根路径到before前缀
    { path: '/', redirect: '/before' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
