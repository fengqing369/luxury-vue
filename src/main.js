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

// Routes
const routes = [
    { path: '/', component: HomePage },
    // 复数形式路由（主要使用）
    { path: '/ceramics', component: CeramicDetail },
    { path: '/jades', component: JadeDetail },
    { path: '/bronzes', component: BronzeDetail },
    { path: '/calligraphies', component: CalligraphyDetail },
    // 单数形式路由（重定向到复数形式，确保兼容性）
    { path: '/ceramic', redirect: '/ceramics' },
    { path: '/jade', redirect: '/jades' },
    { path: '/bronze', redirect: '/bronzes' },
    { path: '/calligraphy', redirect: '/calligraphies' },
    // 新增页面路由
    { path: '/story', component: StoryPage },
    { path: '/services', component: ServicesPage },
    { path: '/contact', component: ContactPage },
    // 详情页路由
    { path: '/:type/:id', component: ItemDetail },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
