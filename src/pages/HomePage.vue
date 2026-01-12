<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCollectionItems } from '../services/api'

const router = useRouter()

// Antique collections data
const collections = ref([
    {
        id: 'ceramics',
        name: '高古瓷',
        nameEn: 'Ancient Ceramics',
        description: '唐宋元明清各朝代精美瓷器，凝聚千年匠心',
        price: '¥ 88,000 - ¥ 2,800,000',
        badge: '珍稀',
        imageGradient: 'from-amber-900/40 to-orange-900/40'
    },
    {
        id: 'jades',
        name: '高古玉',
        nameEn: 'Ancient Jade',
        description: '商周汉唐玉器，温润如脂，传世之宝',
        price: '¥ 120,000 - ¥ 5,800,000',
        badge: '孤品',
        imageGradient: 'from-emerald-900/40 to-teal-900/40'
    },
    {
        id: 'bronzes',
        name: '青铜器',
        nameEn: 'Bronze Ware',
        description: '商周青铜礼器，铭文珍贵，历史见证',
        price: '¥ 280,000 - ¥ 12,000,000',
        badge: '馆藏级',
        imageGradient: 'from-cyan-900/40 to-blue-900/40'
    },
    {
        id: 'calligraphies',
        name: '古字画',
        nameEn: 'Ancient Calligraphy',
        description: '宋元明清名家真迹，笔墨丹青，艺术瑰宝',
        price: '¥ 68,000 - ¥ 8,800,000',
        badge: '名家',
        imageGradient: 'from-stone-800/60 to-stone-900/60'
    }
])

// Navigate to detail page
const goToDetail = (id) => {
    router.push(`/${id}`)
}

// 获取各类藏品的代表性作品
const loadFeaturedItems = async () => {
    try {
        // 这里可以根据需要加载各类藏品的代表性作品
        // 例如：const ceramics = await getCollectionItems('ceramics')
        // 然后更新collections中的数据
    } catch (error) {
        console.error('加载藏品数据失败:', error)
    }
}

onMounted(() => {
    // 加载藏品数据
    loadFeaturedItems()
    
    // Scroll reveal animation setup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    document.querySelectorAll('.elegant-line').forEach(el => observer.observe(el))
})
</script>

<template>
    <div class="min-h-screen">
        <!-- Floating Glass Navbar -->
        <nav class="fixed top-4 left-4 right-4 z-50">
            <div class="max-w-7xl mx-auto">
                <div class="glass-card rounded-full px-6 py-3">
                    <div class="flex items-center justify-between">
                        <!-- Logo -->
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
                                <span class="font-serif font-bold text-lg text-stone-950">雅</span>
                            </div>
                            <span class="font-serif font-semibold text-xl tracking-wider">雅萃阁</span>
                        </div>

                        <!-- Desktop Nav -->
                        <div class="hidden md:flex items-center gap-8">
                            <router-link to="/" class="text-sm font-medium tracking-wide text-stone-300 hover:text-gold-400 transition-colors duration-300">珍品收藏</router-link>
                            <router-link to="/story" class="text-sm font-medium tracking-wide text-stone-300 hover:text-gold-400 transition-colors duration-300">品牌故事</router-link>
                            <router-link to="/services" class="text-sm font-medium tracking-wide text-stone-300 hover:text-gold-400 transition-colors duration-300">服务体系</router-link>
                            <router-link to="/contact" class="text-sm font-medium tracking-wide text-stone-300 hover:text-gold-400 transition-colors duration-300">联系我们</router-link>
                        </div>

                        <!-- CTA -->
                        <div class="flex items-center gap-4">
                            <button class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/20">
                                预约鉴赏
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-gradient min-h-screen relative flex items-center justify-center overflow-hidden">
            <!-- Liquid Blobs -->
            <div class="liquid-blob w-96 h-96 bg-gold-600 top-20 -left-48" style="animation-delay: 0s;"></div>
            <div class="liquid-blob w-80 h-80 bg-stone-700 bottom-20 -right-40" style="animation-delay: 2s;"></div>
            <div class="liquid-blob w-72 h-72 bg-gold-700 top-1/2 left-1/2" style="animation-delay: 4s;"></div>

            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div class="text-center">
                    <!-- Badge -->
                    <div class="reveal inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
                        <div class="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium tracking-widest text-gold-400">传承中华文明 · 收藏历史瑰宝</span>
                    </div>

                    <!-- Main Headline -->
                    <h1 class="reveal font-serif font-bold text-5xl sm:text-6xl lg:text-8xl text-stone-50 leading-tight mb-6" style="transition-delay: 0.1s;">
                        传承千载
                        <br>
                        <span class="gold-shimmer">雅致天成</span>
                    </h1>

                    <!-- Subheadline -->
                    <p class="reveal text-lg sm:text-xl text-stone-400 mb-10 max-w-2xl mx-auto font-light tracking-wide" style="transition-delay: 0.2s;">
                        雅萃阁专注高古瓷、高古玉、青铜器、古字画等珍贵文物艺术品的收藏与鉴赏。每一件藏品都承载着深厚的历史文化底蕴。
                    </p>

                    <!-- CTA Buttons -->
                    <div class="reveal flex flex-col sm:flex-row items-center justify-center gap-4" style="transition-delay: 0.3s;">
                        <button @click="router.push('/ceramics')" class="group bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-xl shadow-gold-500/30 flex items-center gap-3">
                            <span>浏览珍品</span>
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </button>
                        <button class="glass-card hover:bg-white/10 text-stone-50 font-semibold px-10 py-4 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>观看介绍</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bottom Gradient Fade -->
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent"></div>
        </section>

        <!-- Collection Showcase -->
        <section id="collection" class="py-24 px-4 sm:px-6 lg:px-8 bg-stone-950">
            <div class="max-w-7xl mx-auto">
                <!-- Section Header -->
                <div class="reveal text-center mb-16">
                    <div class="elegant-line mx-auto mb-8"></div>
                    <h2 class="font-serif font-bold text-4xl sm:text-5xl text-stone-50 mb-4">
                        珍品 <span class="gold-shimmer">收藏</span>
                    </h2>
                    <p class="text-stone-400 text-lg max-w-2xl mx-auto">
                        每一件藏品都经过权威专家鉴定，确保真品珍稀
                    </p>
                </div>

                <!-- Collections Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        v-for="item in collections"
                        :key="item.id"
                        @click="goToDetail(item.id)"
                        class="reveal product-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
                    >
                        <div class="aspect-[3/4] bg-gradient-to-br relative overflow-hidden" :class="item.imageGradient">
                            <!-- Placeholder for actual image -->
                            <div class="product-image absolute inset-0 flex items-center justify-center transition-transform duration-500">
                                <div class="text-center p-6">
                                    <svg class="w-16 h-16 text-gold-500/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                    <p class="text-stone-500 text-sm">{{ item.nameEn }}</p>
                                </div>
                            </div>
                            <!-- Badge -->
                            <div class="absolute top-4 right-4 bg-gold-600/90 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                                {{ item.badge }}
                            </div>
                            <!-- Quick View Overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="w-full">
                                    <button class="w-full bg-gold-600 hover:bg-gold-500 text-stone-950 font-semibold py-3 rounded-xl transition-colors duration-300 cursor-pointer">
                                        查看详情
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="font-serif font-semibold text-xl text-stone-50 mb-2">{{ item.name }}</h3>
                            <p class="text-stone-400 text-sm mb-3 line-clamp-2">{{ item.description }}</p>
                            <div class="font-serif font-semibold text-lg text-gold-500">{{ item.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Story Section -->
        <section id="story" class="py-24 px-4 sm:px-6 lg:px-8 bg-stone-900">
            <div class="max-w-7xl mx-auto">
                <div class="reveal grid lg:grid-cols-2 gap-16 items-center">
                    <!-- Image Side -->
                    <div class="relative">
                        <div class="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                            <div class="w-full h-full rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                                <div class="text-center p-8">
                                    <svg class="w-24 h-24 text-gold-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                    <p class="font-serif text-xl text-stone-400">雅萃阁馆藏</p>
                                    <p class="text-stone-500 text-sm mt-2">专业文物鉴赏机构</p>
                                </div>
                            </div>
                        </div>
                        <!-- Floating Badge -->
                        <div class="absolute -bottom-6 -right-6 glass-card-light rounded-2xl p-6">
                            <div class="text-center">
                                <div class="font-serif font-bold text-4xl text-gold-500">20+</div>
                                <div class="text-sm text-stone-600 mt-1">年专业经验</div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Side -->
                    <div class="space-y-8">
                        <div class="elegant-line"></div>
                        <h2 class="font-serif font-bold text-4xl sm:text-5xl text-stone-50 leading-tight">
                            匠心传承
                            <span class="gold-shimmer">世代守护</span>
                        </h2>
                        <p class="text-stone-400 text-lg leading-relaxed">
                            雅萃阁创立于2003年，坐落于北京琉璃厂文化街区。二十年来，我们始终致力于中国古代艺术品的研究、收藏与传播。馆藏涵盖高古瓷、高古玉、青铜器、古字画等多个门类。
                        </p>
                        <p class="text-stone-400 text-lg leading-relaxed">
                            我们聘请国内知名文物鉴定专家组成顾问团队，每一件藏品都经过严格鉴定，确保来源清晰、传承有序。雅萃阁不仅是艺术品收藏机构，更是中华优秀传统文化的守护者与传播者。
                        </p>
                        <div class="flex items-center gap-6 pt-4">
                            <div class="text-center">
                                <div class="font-serif font-bold text-3xl text-gold-500">500+</div>
                                <div class="text-sm text-stone-500">馆藏珍品</div>
                            </div>
                            <div class="w-px h-12 bg-stone-700"></div>
                            <div class="text-center">
                                <div class="font-serif font-bold text-3xl text-gold-500">98%</div>
                                <div class="text-sm text-stone-500">客户满意度</div>
                            </div>
                            <div class="w-px h-12 bg-stone-700"></div>
                            <div class="text-center">
                                <div class="font-serif font-bold text-3xl text-gold-500">100%</div>
                                <div class="text-sm text-stone-500">真品保证</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-24 px-4 sm:px-6 lg:px-8 bg-stone-950">
            <div class="max-w-7xl mx-auto">
                <div class="reveal text-center mb-16">
                    <div class="elegant-line mx-auto mb-8"></div>
                    <h2 class="font-serif font-bold text-4xl sm:text-5xl text-stone-50 mb-4">
                        专业 <span class="gold-shimmer">服务</span>
                    </h2>
                    <p class="text-stone-400 text-lg max-w-2xl mx-auto">
                        提供全方位的古玩艺术品专业服务
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Service 1 -->
                    <div class="reveal glass-card rounded-3xl p-8 text-center hover:bg-white/5 transition-all duration-300">
                        <div class="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                        </div>
                        <h3 class="font-serif font-semibold text-2xl text-stone-50 mb-3">专家鉴定</h3>
                        <p class="text-stone-400 leading-relaxed">
                            国内权威文物鉴定专家团队，为您提供专业的艺术品鉴定服务，出具权威鉴定证书。
                        </p>
                    </div>

                    <!-- Service 2 -->
                    <div class="reveal glass-card rounded-3xl p-8 text-center hover:bg-white/5 transition-all duration-300">
                        <div class="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 class="font-serif font-semibold text-2xl text-stone-50 mb-3">收藏咨询</h3>
                        <p class="text-stone-400 leading-relaxed">
                            为收藏爱好者提供专业的收藏建议，帮助您构建有价值的艺术品收藏体系。
                        </p>
                    </div>

                    <!-- Service 3 -->
                    <div class="reveal glass-card rounded-3xl p-8 text-center hover:bg-white/5 transition-all duration-300">
                        <div class="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                            </svg>
                        </div>
                        <h3 class="font-serif font-semibold text-2xl text-stone-50 mb-3">资产配置</h3>
                        <p class="text-stone-400 leading-relaxed">
                            艺术品作为优质资产配置选择，我们提供专业的投资分析和资产配置方案。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Membership CTA -->
        <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900"></div>
            <div class="liquid-blob w-96 h-96 bg-gold-600/20 -top-48 -right-48"></div>
            <div class="liquid-blob w-80 h-80 bg-gold-700/20 -bottom-40 -left-40" style="animation-delay: 3s;"></div>

            <div class="relative z-10 max-w-5xl mx-auto">
                <div class="reveal glass-card-light rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
                    <div class="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-6 py-2 mb-8">
                        <svg class="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span class="text-sm font-medium text-gold-400 tracking-widest">VIP会员服务</span>
                    </div>

                    <h2 class="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-50 mb-6">
                        加入 <span class="gold-shimmer">雅萃阁</span>
                    </h2>
                    <p class="text-stone-400 text-lg max-w-2xl mx-auto mb-8">
                        成为VIP会员，享受优先鉴赏、专属顾问、私密看展、收藏讲座等尊贵服务。与志同道合的收藏家共同交流，开启您的艺术收藏之旅。
                    </p>

                    <div class="grid sm:grid-cols-3 gap-6 mb-10">
                        <div class="p-4">
                            <div class="font-serif font-bold text-2xl text-gold-500 mb-2">优先鉴赏</div>
                            <div class="text-sm text-stone-400">新藏品第一时间通知</div>
                        </div>
                        <div class="p-4">
                            <div class="font-serif font-bold text-2xl text-gold-500 mb-2">专属顾问</div>
                            <div class="text-sm text-stone-400">一对一专业服务</div>
                        </div>
                        <div class="p-4">
                            <div class="font-serif font-bold text-2xl text-gold-500 mb-2">私密看展</div>
                            <div class="text-sm text-stone-400">VIP专场鉴赏活动</div>
                        </div>
                    </div>

                    <button class="group bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-12 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-xl shadow-gold-500/30 inline-flex items-center gap-3">
                        <span>立即申请</span>
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-950 border-t border-stone-800">
            <div class="max-w-7xl mx-auto">
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <!-- Brand -->
                    <div class="lg:col-span-1">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center">
                                <span class="font-serif font-bold text-lg text-stone-950">雅</span>
                            </div>
                            <span class="font-serif font-semibold text-xl tracking-wider">雅萃阁</span>
                        </div>
                        <p class="text-stone-500 text-sm leading-relaxed">
                            专注中国古代艺术品收藏与鉴赏，传承中华文明，守护文化瑰宝。
                        </p>
                    </div>

                    <!-- Collections -->
                    <div>
                        <h4 class="font-serif font-semibold text-stone-50 mb-4">收藏门类</h4>
                        <ul class="space-y-3">
                            <li><a href="#" @click.prevent="goToDetail('ceramics')" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300 cursor-pointer">高古瓷器</a></li>
                            <li><a href="#" @click.prevent="goToDetail('jades')" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300 cursor-pointer">高古玉器</a></li>
                            <li><a href="#" @click.prevent="goToDetail('bronzes')" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300 cursor-pointer">青铜礼器</a></li>
                            <li><a href="#" @click.prevent="goToDetail('calligraphies')" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300 cursor-pointer">古字画</a></li>
                        </ul>
                    </div>

                    <!-- About -->
                    <div>
                        <h4 class="font-serif font-semibold text-stone-50 mb-4">关于我们</h4>
                        <ul class="space-y-3">
                            <li><router-link to="/story" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300 cursor-pointer">品牌故事</router-link></li>
                            <li><a href="#" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300">专家团队</a></li>
                            <li><a href="#" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300">服务承诺</a></li>
                            <li><router-link to="/contact" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300 cursor-pointer">联系我们</router-link></li>
                        </ul>
                    </div>

                    <!-- Contact with Chinese Social Media -->
                    <div>
                        <h4 class="font-serif font-semibold text-stone-50 mb-4">联系我们</h4>
                        <ul class="space-y-3 mb-6">
                            <li class="text-stone-500 text-sm">北京市西城区琉璃厂西街</li>
                            <li class="text-stone-500 text-sm">400-888-8888</li>
                            <li class="text-stone-500 text-sm">service@yacuige.com</li>
                        </ul>
                        <div class="flex items-center gap-4">
                            <!-- WeChat -->
                            <a href="#" class="w-10 h-10 rounded-full border border-stone-700 hover:border-green-500 hover:bg-green-500/10 flex items-center justify-center transition-all duration-300 cursor-pointer group relative">
                                <svg class="w-5 h-5 text-stone-400 group-hover:text-green-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8.5 13.5A1.5 1.5 0 1 1 10 12a1.5 1.5 0 0 1-1.5 1.5zm7 0A1.5 1.5 0 1 1 17 12a1.5 1.5 0 0 1-1.5 1.5zm-3.5-12a8.5 8.5 0 0 0-8.5 8.5c0 2.4 1 4.6 2.7 6.2l-.7 2.7 3.2-1.5c.8.2 1.6.3 2.5.3a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 12 1.5z"/>
                                </svg>
                            </a>
                            <!-- QQ -->
                            <a href="#" class="w-10 h-10 rounded-full border border-stone-700 hover:border-blue-500 hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 cursor-pointer group">
                                <svg class="w-5 h-5 text-stone-400 group-hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.5 2 2 6 2 11c0 2.8 1.4 5.3 3.7 7l-.7 2.5 3-1.5c.7.2 1.5.3 2.3.3 5.5 0 10-4 10-9s-4.5-9-10-9zm1 13h-2v-2h2v2zm0-4h-2V6h2v5z"/>
                                </svg>
                            </a>
                            <!-- Weibo -->
                            <a href="#" class="w-10 h-10 rounded-full border border-stone-700 hover:border-red-500 hover:bg-red-500/10 flex items-center justify-center transition-all duration-300 cursor-pointer group">
                                <svg class="w-5 h-5 text-stone-400 group-hover:text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.5 2a8.5 8.5 0 0 1 8.5 8.5c0 2-.7 3.8-1.8 5.2l1.5 1.5-2.8 2.8-1.5-1.5c-1.4 1.1-3.2 1.8-5.2 1.8A8.5 8.5 0 0 1 2 10.5 8.5 8.5 0 0 1 10.5 2z"/>
                                </svg>
                            </a>
                            <!-- Douyin -->
                            <a href="#" class="w-10 h-10 rounded-full border border-stone-700 hover:border-purple-500 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 cursor-pointer group">
                                <svg class="w-5 h-5 text-stone-400 group-hover:text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Bottom -->
                <div class="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p class="text-stone-500 text-sm">© 2025 雅萃阁. 保留所有权利.</p>
                    <div class="flex items-center gap-6">
                        <a href="#" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300">隐私政策</a>
                        <a href="#" class="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300">服务条款</a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Back to Top Button -->
        <button
            @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
            class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30 transition-all duration-300 cursor-pointer z-40 group"
        >
            <svg class="w-5 h-5 text-stone-950 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
        </button>
    </div>
</template>

<style scoped>
.elegant-line {
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #CA8A04, transparent);
    transition: width 1s ease-out;
}

.elegant-line.active {
    width: 100%;
}

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
</style>
