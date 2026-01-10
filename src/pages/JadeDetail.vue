<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.push('/')
}

// 加载状态
const loading = ref(false)
// 错误信息
const error = ref('')
// 高古玉藏品列表
const jades = ref([])

/**
 * 从后端API获取高古玉藏品列表
 */
const getJades = async () => {
    loading.value = true
    error.value = ''
    try {
        // 调用后端API获取高古玉数据
        const response = await fetch('http://localhost:3003/api/jade')
        
        // 检查响应状态
        if (!response.ok) {
            throw new Error(`HTTP错误！状态码：${response.status}`)
        }
        
        const data = await response.json()
        // 将返回的数据赋值给jades
        jades.value = data
    } catch (errorMsg) {
        console.error('获取高古玉列表失败:', errorMsg)
        // 设置错误信息
        error.value = `获取数据失败：${errorMsg.message}`
        // 如果API请求失败，使用mock数据作为备用
        jades.value = [
            {
                id: 1,
                name: '商代玉龙纹璜',
                dynasty: '商代',
                year: '公元前1600-1046年',
                description: '此玉璜呈半圆形，双面雕饰龙纹，龙身卷曲，龙口张开，形态威猛。玉质温润，沁色自然，是商代玉器的典型代表。',
                size: '长12cm 宽3.5cm',
                provenance: '安阳殷墟出土',
                price: '¥ 3,800,000',
                featured: true,
                imageGradient: 'from-emerald-900/50 to-teal-900/50'
            },
            {
                id: 2,
                name: '汉白玉蝉',
                dynasty: '汉代',
                year: '公元前206-公元220年',
                description: '汉玉蝉造型简练，线条流畅，所谓"汉八刀"工艺，寥寥数刀，神韵俱现。此件玉蝉玉质洁白，刀法犀利，为汉代玉蝉精品。',
                size: '长6.5cm',
                provenance: '传世旧藏',
                price: '¥ 680,000',
                featured: false,
                imageGradient: 'from-stone-200/40 to-stone-300/40'
            }
        ]
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // 组件挂载后调用API获取数据
    getJades()
})
</script>

<template>
    <div class="min-h-screen bg-stone-950">
        <!-- Navbar -->
        <nav class="fixed top-4 left-4 right-4 z-50">
            <div class="max-w-7xl mx-auto">
                <div class="glass-card rounded-full px-6 py-3">
                    <div class="flex items-center justify-between">
                        <button @click="goBack" class="flex items-center gap-2 text-stone-300 hover:text-gold-400 transition-colors duration-300 cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                            <span class="text-sm font-medium">返回首页</span>
                        </button>
                        <span class="font-serif font-semibold text-lg tracking-wider">高古玉珍品</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-gradient pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="liquid-blob w-96 h-96 bg-emerald-600/30 top-20 -left-48"></div>
            <div class="liquid-blob w-80 h-80 bg-teal-600/30 bottom-20 -right-40" style="animation-delay: 2s;"></div>

            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
                        <div class="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium tracking-widest text-gold-400">温润如脂 · 传世之宝</span>
                    </div>
                    <h1 class="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-stone-50 leading-tight mb-6">
                        高古玉
                        <span class="gold-shimmer">收藏鉴赏</span>
                    </h1>
                    <p class="text-stone-400 text-lg max-w-3xl mx-auto">
                        高古玉指汉代以前的玉器，以红山文化、良渚文化、商周玉器为代表。
                        "君子无故，玉不去身"，玉在中国文化中象征着品德与地位，是中华文明的重要载体。
                    </p>
                </div>

                <!-- Featured Stats -->
                <div class="grid sm:grid-cols-3 gap-6 mt-12">
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">80+</div>
                        <div class="text-stone-400 text-sm">馆藏精品</div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">新石器-汉</div>
                        <div class="text-stone-400 text-sm">年代跨度</div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">100%</div>
                        <div class="text-stone-400 text-sm">真品保证</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Knowledge Section -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 class="font-serif font-bold text-3xl text-stone-50 mb-6">鉴赏知识</h2>
                        <div class="space-y-6">
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">红山文化玉器</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    红山文化距今约5000-6000年，主要分布于内蒙古、辽宁地区。代表性器物有玉猪龙、玉钩云形器等。
                                    玉质多为岫岩玉，造型独特，线条简练，是中国史前玉器的重要代表。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">良渚文化玉器</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    良渚文化距今约4000-5000年，主要分布于浙江地区。玉琮、玉璧、玉钺是其典型器物，
                                    以精美的神人兽面纹著称，反映了当时高超的玉雕工艺和复杂的宗教信仰。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">商周玉器</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    商周时期玉器与青铜器并重，成为身份和权力的象征。礼器如圭、璧、琮、璜等有严格的等级制度。
                                    玉器纹饰有饕餮纹、龙纹、凤鸟纹等，雕工精细，体现了高超的工艺水平。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-serif font-bold text-3xl text-stone-50 mb-6">收藏要点</h2>
                        <div class="glass-card rounded-2xl p-6 space-y-4">
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">1</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-stone-50 mb-1">看玉质</h4>
                                    <p class="text-stone-400 text-sm">古玉玉质温润，有油脂光泽，新玉则显得干涩</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">2</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看沁色</h4>
                                    <p class="text-stone-400 text-sm">古玉沁色自然深入肌理，仿品沁色浮于表面</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">3</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看工法</h4>
                                    <p class="text-stone-400 text-sm">古玉工法古朴自然，手工痕迹明显，新玉多用机器</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">4</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">查传承</h4>
                                    <p class="text-stone-400 text-sm">优先选择有明确出土记录或传承有序的藏品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Collection Grid -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-950">
            <div class="max-w-7xl mx-auto">
                <h2 class="font-serif font-bold text-3xl text-stone-50 mb-8 text-center">馆藏珍品</h2>

                <!-- 加载状态 -->
                <div v-if="loading" class="text-center py-20">
                    <div class="inline-block w-16 h-16 border-4 border-t-4 border-gold-500 border-solid rounded-full animate-spin mb-4"></div>
                    <p class="text-stone-400 text-lg">数据加载中，请稍候...</p>
                </div>

                <!-- 错误提示 -->
                <div v-else-if="error" class="text-center py-20">
                    <div class="inline-block w-16 h-16 text-red-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-stone-400 text-lg mb-4">{{ error }}</p>
                    <button @click="getJades" class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/30">
                        重试
                    </button>
                </div>

                <!-- 数据列表 -->
                <div v-else>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            v-for="jade in jades"
                            :key="jade.id"
                            class="product-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <div class="aspect-[4/3] bg-gradient-to-br relative overflow-hidden" :class="jade.imageGradient">
                                <div class="product-image absolute inset-0 flex items-center justify-center transition-transform duration-500">
                                    <svg class="w-20 h-20 text-gold-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div v-if="jade.featured" class="absolute top-4 right-4 bg-gold-600 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                                    镇馆之宝
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="text-xs font-medium text-gold-400 tracking-widest mb-2">{{ jade.dynasty }}</div>
                                <h3 class="font-serif font-semibold text-xl text-stone-50 mb-2">{{ jade.name }}</h3>
                                <p class="text-stone-400 text-sm mb-4 line-clamp-2">{{ jade.description }}</p>
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-stone-500">{{ jade.size }}</span>
                                    <span class="font-serif font-bold text-gold-500">{{ jade.price }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 空数据提示 -->
                    <div v-if="jades.length === 0" class="text-center py-20">
                        <div class="inline-block w-16 h-16 text-stone-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
                                <path d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-15a3 3 0 00-3 3v9a3 3 0 003 3h15zM1.5 10.5v9a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 001.5 10.5z" />
                                <path fill-rule="evenodd" d="M3 16.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 16.5zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 4.5zm5.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm5.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="text-stone-400 text-lg">暂无藏品数据</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900">
            <div class="max-w-4xl mx-auto text-center">
                <div class="glass-card-light rounded-3xl p-8 sm:p-12">
                    <h2 class="font-serif font-bold text-3xl text-stone-50 mb-4">预约鉴赏</h2>
                    <p class="text-stone-400 mb-6">
                        如对以上藏品感兴趣，欢迎预约到馆鉴赏。我们将安排专家为您详细介绍。
                    </p>
                    <button class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-xl shadow-gold-500/30">
                        立即预约
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.hero-gradient {
    background: linear-gradient(-45deg, #0C0A09, #1C1917, #292524, #0C0A09);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.liquid-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.6;
    animation: blob 7s infinite;
}

@keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
}

.glass-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.3);
}

.glass-card-light {
    background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.3);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.1);
}

.gold-shimmer {
    background: linear-gradient(90deg, #CA8A04 0%, #FBBF24 50%, #CA8A04 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
    to { background-position: 200% center; }
}

.product-card:hover {
    transform: translateY(-10px);
}

.product-card:hover .product-image {
    transform: scale(1.05);
}
</style>
