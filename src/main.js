import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// Pages
import HomePage from './pages/HomePage.vue'
import CeramicDetail from './pages/CeramicDetail.vue'
import JadeDetail from './pages/JadeDetail.vue'
import BronzeDetail from './pages/BronzeDetail.vue'
import CalligraphyDetail from './pages/CalligraphyDetail.vue'

// Routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/ceramic', component: CeramicDetail },
    { path: '/jade', component: JadeDetail },
    { path: '/bronze', component: BronzeDetail },
    { path: '/calligraphy', component: CalligraphyDetail },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
