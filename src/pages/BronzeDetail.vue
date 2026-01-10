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
// 青铜器藏品列表
const bronzes = ref([])

/**
 * 从后端API获取青铜器藏品列表
 */
const getBronzes = async () => {
    loading.value = true
    error.value = ''
    try {
        // 调用后端API获取青铜器数据
        const response = await fetch('http://localhost:3003/api/bronze')
        
        // 检查响应状态
        if (!response.ok) {
            throw new Error(`HTTP错误！状态码：${response.status}`)
        }
        
        const data = await response.json()
        // 将返回的数据赋值给bronzes
        bronzes.value = data
    } catch (errorMsg) {
        console.error('获取青铜器列表失败:', errorMsg)
        // 设置错误信息
        error.value = `获取数据失败：${errorMsg.message}`
        // 如果API请求失败，使用mock数据作为备用
        bronzes.value = [
            {
                id: 1,
                name: '商代兽面纹鼎',
                dynasty: '商代晚期',
                year: '公元前1300-1046年',
                description: '此鼎立耳，深腹，三柱足。腹部饰兽面纹，云雷纹衬地，纹饰精美。铸工精湛，保存完好，是商代青铜礼器的代表作。',
                size: '高24cm 口径18cm',
                provenance: '安阳殷墟出土',
                price: '¥ 8,800,000',
                featured: true,
                imageGradient: 'from-cyan-900/50 to-blue-900/50'
            },
            {
                id: 2,
                name: '西周毛公鼎',
                dynasty: '西周晚期',
                year: '公元前9世纪',
                description: '毛公鼎是西周青铜器的代表作，腹内铸有铭文499字，是现存铭文最长的青铜器。记述周宣王告诫毛公之事，书法精美，史料价值极高。',
                size: '高53.8cm 口径47cm',
                provenance: '陕西岐山出土',
                price: '¥ 12,000,000',
                featured: true,
                imageGradient: 'from-blue-900/50 to-indigo-900/50'
            }
        ]
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // 组件挂载后调用API获取数据
    getBronzes()
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
                        <span class="font-serif font-semibold text-lg tracking-wider">青铜器珍品</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-gradient pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="liquid-blob w-96 h-96 bg-cyan-600/30 top-20 -left-48"></div>
            <div class="liquid-blob w-80 h-80 bg-blue-600/30 bottom-20 -right-40" style="animation-delay: 2s;"></div>

            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
                        <div class="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium tracking-widest text-gold-400">国之重器 · 青铜文明</span>
                    </div>
                    <h1 class="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-stone-50 leading-tight mb-6">
                        青铜器
                        <span class="gold-shimmer">收藏鉴赏</span>
                    </h1>
                    <p class="text-stone-400 text-lg max-w-3xl mx-auto">
                        中国青铜时代始于夏代，盛于商周。青铜器不仅是礼乐器皿，更是权力与地位的象征。
                        器身上的铭文（金文）是研究古代历史的第一手资料，具有极高的历史和艺术价值。
                    </p>
                </div>

                <!-- Featured Stats -->
                <div class="grid sm:grid-cols-3 gap-6 mt-12">
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">60+</div>
                        <div class="text-stone-400 text-sm">馆藏珍品</div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">商-战国</div>
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
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">青铜器分类</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    青铜器按用途可分为礼器（食器、酒器、水器、乐器）、兵器、工具、车马器等。
                                    食器有鼎、鬲、簋；酒器有爵、觚、尊、卣；水器有盘、匜；乐器有钟、镈等。不同等级使用不同数量的礼器，体现严格的等级制度。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">铭文价值</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    青铜器铭文又称金文，是铸或刻在青铜器上的文字。商代铭文简短，多记族徽、祖先名；
                                    西周铭文渐长，记册命、战争、赏赐等史事；战国铭文内容丰富，有记事、法律、度量衡等。
                                    铭文是研究古代历史的重要史料。
                                </p>
                            </div>
                            <div class="glass-card rounded-2xl p-6">
                                <h3 class="font-serif font-semibold text-xl text-gold-500 mb-3">纹饰艺术</h3>
                                <p class="text-stone-400 leading-relaxed">
                                    商周青铜器纹饰丰富，有兽面纹（饕餮纹）、龙纹、凤鸟纹、蝉纹、蚕纹等。
                                    商代纹饰神秘威严，周代趋于秩序化，春秋战国纹饰更加生动活泼。
                                    纹饰反映了当时的宗教信仰和审美观念。
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
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看造型</h4>
                                    <p class="text-stone-400 text-sm">真品造型比例协调，仿品往往比例失调</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">2</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看锈色</h4>
                                    <p class="text-stone-400 text-sm">古铜锈色自然入骨，层次分明，仿锈浮于表面</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">3</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">看铸工</h4>
                                    <p class="text-stone-400 text-sm">古铜铸工痕迹自然，垫片、范线清晰可见</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-gold-500 font-bold">4</span>
                                </div>
                                <div>
                                    <h4 class="font-serif font-semibold text-stone-50 mb-1">查铭文</h4>
                                    <p class="text-stone-400 text-sm">真品铭文笔法古朴有力，伪铭呆板无力</p>
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
                    <button @click="getBronzes" class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/30">
                        重试
                    </button>
                </div>

                <!-- 数据列表 -->
                <div v-else>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            v-for="bronze in bronzes"
                            :key="bronze.id"
                            class="product-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <div class="aspect-[4/3] bg-gradient-to-br relative overflow-hidden" :class="bronze.imageGradient">
                                <div class="product-image absolute inset-0 flex items-center justify-center transition-transform duration-500">
                                    <svg class="w-20 h-20 text-gold-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div v-if="bronze.featured" class="absolute top-4 right-4 bg-gold-600 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                                    镇馆之宝
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="text-xs font-medium text-gold-400 tracking-widest mb-2">{{ bronze.dynasty }}</div>
                                <h3 class="font-serif font-semibold text-xl text-stone-50 mb-2">{{ bronze.name }}</h3>
                                <p class="text-stone-400 text-sm mb-4 line-clamp-2">{{ bronze.description }}</p>
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-stone-500">{{ bronze.size }}</span>
                                    <span class="font-serif font-bold text-gold-500">{{ bronze.price }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 空数据提示 -->
                    <div v-if="bronzes.length === 0" class="text-center py-20">
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
