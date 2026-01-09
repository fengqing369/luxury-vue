<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.push('/')
}

// Ancient calligraphy and painting collection
const artworks = ref([
    {
        id: 1,
        name: '宋徽宗瑞鹤图卷',
        dynasty: '北宋',
        year: '公元1112年',
        description: '宋徽宗赵佶亲笔绘制，描绘群鹤盘旋宫殿之上，祥云缭绕，寓意吉祥。笔墨精细，色彩绚丽，是宋代院体画的巅峰之作，体现"皇帝艺术"的独特魅力。',
        size: '纵51cm 横138.2cm',
        provenance: '清宫旧藏',
        price: '¥ 8,800,000',
        featured: true,
        imageGradient: 'from-stone-700/50 to-stone-800/50'
    },
    {
        id: 2,
        name: '黄庭坚松风阁诗卷',
        dynasty: '北宋',
        year: '公元1102年',
        description: '黄庭坚行书代表作，笔势纵横，结体奇险，是"宋四家"之一黄庭坚晚年精品。用笔沉着痛快，变化多端，充分体现其"字中有笔，如禅家句中有眼"的书法理念。',
        size: '纵32.8cm 横219.2cm',
        provenance: '传世有序',
        price: '¥ 3,200,000',
        featured: true,
        imageGradient: 'from-amber-900/40 to-orange-900/40'
    },
    {
        id: 3,
        name: '王羲之兰亭序拓本',
        dynasty: '东晋（唐摹）',
        year: '公元353年（唐摹本）',
        description: '王羲之《兰亭序》被誉为"天下第一行书"，原作已佚。此为唐代摹本，笔法精妙，字形妍美，虽为摹本，仍可见右军书法之神采，是研究晋代书法的珍贵资料。',
        size: '纵24.5cm 横69.9cm',
        provenance: '历代名家递藏',
        price: '¥ 5,600,000',
        featured: true,
        imageGradient: 'from-yellow-900/40 to-amber-900/40'
    },
    {
        id: 4,
        name: '唐寅庐山观瀑图轴',
        dynasty: '明代',
        year: '公元1500年',
        description: '唐寅（伯虎）山水画精品，描绘庐山瀑布之壮观景象。笔墨苍劲，构图奇巧，诗书画印完美结合，是吴门画派代表作品，体现明代文人画的艺术水准。',
        size: '纵150cm 横80cm',
        provenance: '苏州私家旧藏',
        price: '¥ 1,680,000',
        featured: false,
        imageGradient: 'from-slate-800/50 to-gray-900/50'
    },
    {
        id: 5,
        name: '八大山人鱼鸭图卷',
        dynasty: '清代',
        year: '公元1685年',
        description: '八大山人朱耷是明皇室后裔，亡国之痛使其画风孤傲冷峻。此图绘鱼鸭数只，笔墨简练，造型奇特，体现"白眼看人"的独特风格，是清代写意画的杰作。',
        size: '纵30cm 横200cm',
        provenance: '江西名门旧藏',
        price: '¥ 2,200,000',
        featured: false,
        imageGradient: 'from-gray-800/50 to-zinc-900/50'
    },
    {
        id: 6,
        name: '郑板桥竹石图轴',
        dynasty: '清代',
        year: '公元1750年',
        description: '郑板桥以"三绝"（诗书画）闻名，此幅竹石图竹叶疏密有致，瘦石挺立，题诗意味深长。书法隶楷参半，自创"六分半书"，是扬州八怪的代表作品。',
        size: '纵130cm 横70cm',
        provenance: '江南藏家旧藏',
        price: '¥ 880,000',
        featured: false,
        imageGradient: 'from-emerald-900/40 to-green-900/40'
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
                        <span class="font-serif font-semibold text-lg tracking-wider">古字画珍品</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-gradient pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="liquid-blob w-96 h-96 bg-stone-600/30 top-20 -left-48"></div>
            <div class="liquid-blob w-80 h-80 bg-gray-600/30 bottom-20 -right-40" style="animation-delay: 2s;"></div>

            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
                        <div class="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium tracking-widest text-gold-400">笔墨丹青 · 艺术瑰宝</span>
                    </div>
                    <h1 class="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-stone-50 leading-tight mb-6">
                        古字画
                        <span class="gold-shimmer">收藏鉴赏</span>
                    </h1>
                    <p class="text-stone-400 text-lg max-w-3xl mx-auto">
                        中国古字画是中华文明的璀璨明珠，包括书法与绘画两大类。
                        从晋唐到明清，名家辈出，风格多样。书法有楷、行、草、隶、篆五体；
                        绘画有人物、山水、花鸟三大科。每一件传世作品都是艺术与历史的完美结合。
                    </p>
                </div>

                <!-- Featured Stats -->
                <div class="grid sm:grid-cols-3 gap-6 mt-12">
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">100+</div>
                        <div class="text-stone-400 text-sm">馆藏精品</div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">晋-清</div>
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
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">书法鉴赏</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    中国书法有篆、隶、楷、行、草五体。秦篆古朴，汉隶雄强，魏碑方正，唐楷严谨，
                                    行书流畅，草书奔放。鉴赏书法要看笔法（中锋、侧锋）、结体（字的结构）、章法（整体布局）。
                                    晋人尚韵，唐人尚法，宋人尚意，各具特色。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">绘画鉴赏</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    中国画主要有人物、山水、花鸟三大科。技法有工笔、写意、白描等。
                                    山水画有青绿山水、水墨山水之分。鉴赏要看笔墨（线条、墨色）、构图（布局）、意境（内在含义）。
                                    宋画写实，元画抒情，明清画派别林立，风格多样。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">印章题跋</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    古字画上的收藏印、题跋是鉴别真伪和传承的重要依据。
                                    历代名家藏印（如乾隆御览之宝）、题跋可追溯作品的流传过程。
                                    同时要注意印章的真伪、题跋的字体风格是否符合时代特征。
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
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看笔墨</h4>
                                    <p class="text-stone-400 text-sm">真品笔墨自然流畅，仿品往往呆板生硬</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">2</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看纸绢</h4>
                                    <p class="text-stone-400 text-sm">古纸绢有岁月痕迹，新纸绢则显得鲜亮</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">3</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看印章</h4>
                                    <p class="text-stone-400 text-sm">印章印色自然，印文清晰，印泥色暗入纸</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">4</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">查著录</h4>
                                    <p class="text-stone-400 text-sm">查证是否见于权威著录，展览出版记录</p>
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
                        v-for="artwork in artworks"
                        :key="artwork.id"
                        class="product-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
                    >
                        <div class="aspect-[4/3] bg-gradient-to-br relative overflow-hidden" :class="artwork.imageGradient">
                            <div class="product-image absolute inset-0 flex items-center justify-center transition-transform duration-500">
                                <svg class="w-20 h-20 text-gold-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div v-if="artwork.featured" class="absolute top-4 right-4 bg-gold-600 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                                镇馆之宝
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="text-xs font-medium text-gold-400 tracking-widest mb-2">{{ artwork.dynasty }}</div>
                            <h3 class="font-serif font-semibold text-xl text-stone-50 mb-2">{{ artwork.name }}</h3>
                            <p class="text-stone-400 text-sm mb-4 line-clamp-2">{{ artwork.description }}</p>
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-stone-500">{{ artwork.size }}</span>
                                <span class="font-serif font-bold text-gold-500">{{ artwork.price }}</span>
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
