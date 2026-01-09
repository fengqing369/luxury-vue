<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.push('/')
}

// High ancient ceramics collection
const ceramics = ref([
    {
        id: 1,
        name: '唐三彩骆驼载乐俑',
        dynasty: '唐代',
        year: '公元618-907年',
        description: '此件唐三彩骆驼载乐俑，骆驼昂首嘶鸣，背负五位乐师，神态各异。釉色绚丽，黄、绿、白三色交相辉映，是盛唐丝绸之路文化的完美见证。',
        size: '高58cm 长42cm',
        provenance: '西安出土',
        price: '¥ 2,800,000',
        featured: true,
        imageGradient: 'from-amber-900/50 to-orange-900/50'
    },
    {
        id: 2,
        name: '宋汝窑天青釉盘',
        dynasty: '宋代',
        year: '公元960-1279年',
        description: '汝窑为宋代五大名窑之首，"天青为贵，粉青为尚，月白第一，天青未均最佳"。此盘釉色纯正，开片自然，是汝窑精品之作。',
        size: '直径17.5cm',
        provenance: '传世旧藏',
        price: '¥ 8,800,000',
        featured: true,
        imageGradient: 'from-sky-900/50 to-cyan-900/50'
    },
    {
        id: 3,
        name: '元青花鱼藻纹罐',
        dynasty: '元代',
        year: '公元1271-1368年',
        description: '元青花以"纹饰繁密、层次丰富、笔意流畅"著称。此罐绘鱼藻纹，青花发色浓艳，铁锈斑明显，是元青花典型器。',
        size: '高28cm 口径21cm',
        provenance: '景德镇窑',
        price: '¥ 5,200,000',
        featured: false,
        imageGradient: 'from-blue-900/50 to-indigo-900/50'
    },
    {
        id: 4,
        name: '明永乐青花缠枝莲纹碗',
        dynasty: '明代',
        year: '公元1403-1424年',
        description: '永乐青花"其用料浓厚，式样精妙，写生描意，无不通真"。此碗青花发色浓艳，纹饰流畅，为永乐官窑精品。',
        size: '直径16cm',
        provenance: '景德镇御窑',
        price: '¥ 1,680,000',
        featured: false,
        imageGradient: 'from-cyan-900/50 to-blue-900/50'
    },
    {
        id: 5,
        name: '清康熙釉里红龙纹梅瓶',
        dynasty: '清代',
        year: '公元1662-1722年',
        description: '釉里红创烧于元代，康熙时期达到顶峰。此瓶红色纯正，龙纹威武，是康熙釉里红的代表作。',
        size: '高35cm',
        provenance: '景德镇窑',
        price: '¥ 980,000',
        featured: false,
        imageGradient: 'from-red-900/50 to-rose-900/50'
    },
    {
        id: 6,
        name: '宋定窑白釉刻花莲纹碗',
        dynasty: '宋代',
        year: '公元960-1279年',
        description: '定窑以白瓷著称，"白如玉、薄如纸、声如磬"。此碗釉色温润，刻花精美，有"定窑花瓷瓯，颜色天下白"之美誉。',
        size: '直径19cm',
        provenance: '河北曲阳窑',
        price: '¥ 680,000',
        featured: false,
        imageGradient: 'from-stone-300/30 to-stone-400/30'
    }
])

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
                        <span class="font-serif font-semibold text-lg tracking-wider">高古瓷珍品</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-gradient pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="liquid-blob w-96 h-96 bg-amber-600/30 top-20 -left-48"></div>
            <div class="liquid-blob w-80 h-80 bg-orange-600/30 bottom-20 -right-40" style="animation-delay: 2s;"></div>

            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
                        <div class="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium tracking-widest text-gold-400">千年窑火 · 传世珍品</span>
                    </div>
                    <h1 class="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-stone-50 leading-tight mb-6">
                        高古瓷
                        <span class="gold-shimmer">收藏鉴赏</span>
                    </h1>
                    <p class="text-stone-400 text-lg max-w-3xl mx-auto">
                        高古瓷指元代以前的瓷器，以唐三彩、宋代五大名窑（汝、官、哥、钧、定）为代表。
                        每一件都承载着深厚的历史文化底蕴，是中国古代陶瓷艺术的巅峰之作。
                    </p>
                </div>

                <!-- Featured Stats -->
                <div class="grid sm:grid-cols-3 gap-6 mt-12">
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">50+</div>
                        <div class="text-stone-400 text-sm">馆藏精品</div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">唐-元</div>
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
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">唐三彩</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    唐三彩盛行于唐代，以黄、绿、白三色为主，实为多彩。主要用作明器，题材丰富，有马、骆驼、仕女等。
                                    釉色流淌自然，造型生动，反映了盛唐的繁荣与开放。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">宋代五大名窑</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    汝窑以天青釉著称，窑址在河南临汝；官窑为皇家窑场；哥窑以金丝铁线闻名；钧窑以窑变蚯蚓走泥纹独特；
                                    定窑以白瓷印花工艺精湛。五大名窑各具特色，代表了宋代制瓷的最高水平。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">元青花</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    元青花使用进口苏麻离青料，发色浓艳，有铁锈斑。纹饰繁密，层次丰富，常见龙纹、凤纹、花鸟、鱼藻等。
                                    大器多为罐、梅瓶、玉壶春瓶等。
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
                                    <h4 class="font-semibold text-stone-50 mb-1">看釉色</h4>
                                    <p class="text-stone-400 text-sm">观察釉色是否纯正自然，有无人为做旧痕迹</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">2</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-stone-50 mb-1">看胎质</h4>
                                    <p class="text-stone-400 text-sm">古瓷胎质致密，有岁月痕迹，新胎则显得生硬</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">3</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-stone-50 mb-1">看纹饰</h4>
                                    <p class="text-stone-400 text-sm">古瓷纹饰笔法流畅自然，现代仿品往往呆板</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">4</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-stone-50 mb-1">查来源</h4>
                                    <p class="text-stone-400 text-sm">选择有明确传承记录的藏品，索要权威鉴定证书</p>
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

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        v-for="ceramic in ceramics"
                        :key="ceramic.id"
                        class="product-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
                    >
                        <div class="aspect-[4/3] bg-gradient-to-br relative overflow-hidden" :class="ceramic.imageGradient">
                            <div class="product-image absolute inset-0 flex items-center justify-center transition-transform duration-500">
                                <svg class="w-20 h-20 text-gold-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div v-if="ceramic.featured" class="absolute top-4 right-4 bg-gold-600 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                                镇馆之宝
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="text-xs font-medium text-gold-400 tracking-widest mb-2">{{ ceramic.dynasty }}</div>
                            <h3 class="font-serif font-semibold text-xl text-stone-50 mb-2">{{ ceramic.name }}</h3>
                            <p class="text-stone-400 text-sm mb-4 line-clamp-2">{{ ceramic.description }}</p>
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-stone-500">{{ ceramic.size }}</span>
                                <span class="font-serif font-bold text-gold-500">{{ ceramic.price }}</span>
                            </div>
                        </div>
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
