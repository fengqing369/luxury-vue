<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.push('/')
}

// High ancient jade collection
const jades = ref([
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
    },
    {
        id: 3,
        name: '良渚文化玉琮',
        dynasty: '新石器时代',
        year: '公元前3300-2300年',
        description: '良渚玉琮是史前文明的重要见证，外方内圆，象征"天圆地方"。此玉琮纹饰精美，神人兽面纹线条流畅，是良渚玉器巅峰之作。',
        size: '高8.5cm 射径9cm',
        provenance: '浙江余杭出土',
        price: '¥ 5,800,000',
        featured: true,
        imageGradient: 'from-emerald-800/50 to-green-900/50'
    },
    {
        id: 4,
        name: '唐玉飞天佩',
        dynasty: '唐代',
        year: '公元618-907年',
        description: '唐代玉器受佛教影响，飞天题材盛行。此佩飞天体态优美，飘带飞扬，雕工精细，体现了盛唐时期的艺术风格。',
        size: '长7cm 宽5cm',
        provenance: '西安窑藏出土',
        price: '¥ 1,280,000',
        featured: false,
        imageGradient: 'from-amber-900/40 to-yellow-900/40'
    },
    {
        id: 5,
        name: '红山文化玉猪龙',
        dynasty: '新石器时代',
        year: '公元前4700-2900年',
        description: '红山文化玉猪龙是史前玉器的标志性器物，猪首龙身，造型独特。此件玉质温润，打磨精细，是红山文化的代表性作品。',
        size: '高10cm',
        provenance: '内蒙古赤峰出土',
        price: '¥ 4,200,000',
        featured: true,
        imageGradient: 'from-green-900/50 to-emerald-900/50'
    },
    {
        id: 6,
        name: '清乾隆白玉佛手',
        dynasty: '清代',
        year: '公元1736-1795年',
        description: '乾隆时期玉雕工艺达到顶峰。此佛手以新疆和田白玉雕成，造型逼真，枝叶缠绕，寓意"福寿"，是清代玉雕精品。',
        size: '长12cm',
        provenance: '宫廷造办处',
        price: '¥ 980,000',
        featured: false,
        imageGradient: 'from-stone-100/30 to-stone-200/30'
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
