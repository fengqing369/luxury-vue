<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getCollectionItemDetail, getImageUrl } from '../services/api'

const router = useRouter()
const route = useRoute()

// 获取路由参数
const id = computed(() => route.params.id)
const type = computed(() => route.params.type)

// 加载状态
const loading = ref(false)
// 错误信息
const error = ref('')
// 藏品详情数据
const item = ref(null)

// 返回上一页
const goBack = () => {
    router.back()
}

/**
 * 从后端API获取单个藏品详情
 */
const getItemDetail = async () => {
    loading.value = true
    error.value = ''
    try {
        // 调用后端API获取藏品详情数据
        const data = await getCollectionItemDetail(type.value, id.value)
        item.value = data || null
    } catch (errorMsg) {
        console.error('获取藏品详情失败:', errorMsg)
        // 设置错误信息
        error.value = `获取数据失败：${errorMsg.message}`
        // 如果API请求失败，使用mock数据作为备用
        item.value = {
            id: id.value,
            name: '藏品详情',
            dynasty: '明代',
            year: '公元1368-1644年',
            description: '这是一件珍贵的明代藏品，具有极高的历史和艺术价值。由于网络原因，无法获取完整的藏品信息，我们正在努力修复中。',
            size: '长20cm 宽15cm 高10cm',
            provenance: '私人收藏',
            price: '¥ 1,800,000',
            featured: true,
            imageGradient: 'from-stone-700/50 to-stone-800/50'
        }
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // 组件挂载后调用API获取数据
    getItemDetail()
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
                            <span class="text-sm font-medium">返回</span>
                        </button>
                        <span class="font-serif font-semibold text-lg tracking-wider">{{ item?.name || '藏品详情' }}</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Content Section -->
        <section class="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                <!-- 加载状态 -->
                <div v-if="loading" class="text-center py-20">
                    <div class="inline-block w-16 h-16 border-4 border-t-4 border-gold-500 border-solid rounded-full animate-spin mb-4"></div>
                    <p class="text-stone-400 text-lg">数据加载中，请稍候...</p>
                </div>

                <!-- 有数据状态 -->
                <div v-else-if="item" class="glass-card rounded-3xl p-8 sm:p-12">
                    <!-- 错误提示（如果有错误信息） -->
                    <div v-if="error" class="text-center py-6 border-b border-stone-800 mb-8">
                        <div class="inline-block w-10 h-10 text-red-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 012 2.828 9.555 9.555 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="text-stone-400 text-base mb-3">{{ error }}</p>
                        <button @click="getItemDetail" class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/30">
                            重试
                        </button>
                    </div>

                    <!-- 藏品图片 -->
                    <div class="aspect-[4/3] bg-gradient-to-br relative overflow-hidden rounded-2xl mb-8" :class="item.imageGradient">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <img 
                                v-if="item.image" 
                                :src="getImageUrl(item.image)" 
                                :alt="item.name" 
                                class="w-full h-full object-contain"
                            />
                            <svg 
                                v-else 
                                class="w-32 h-32 text-gold-500/60" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div v-if="item.featured" class="absolute top-4 right-4 bg-gold-600 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                            镇馆之宝
                        </div>
                    </div>

                    <!-- 藏品基本信息 -->
                    <div class="space-y-6">
                        <h1 class="font-serif font-bold text-3xl sm:text-4xl text-stone-50">{{ item.name }}</h1>
                        
                        <!-- 年代信息 -->
                        <div class="flex flex-wrap gap-4">
                            <div class="bg-gold-600/20 rounded-full px-5 py-2">
                                <span class="text-gold-400 font-medium">{{ item.dynasty }}</span>
                            </div>
                            <div class="bg-stone-700/50 rounded-full px-5 py-2">
                                <span class="text-stone-300">{{ item.year }}</span>
                            </div>
                        </div>

                        <!-- 价格 -->
                        <div class="text-3xl sm:text-4xl font-serif font-bold text-gold-500">
                            {{ item.price }}
                        </div>

                        <!-- 描述 -->
                        <div>
                            <h2 class="font-serif font-semibold text-2xl text-stone-50 mb-3">藏品描述</h2>
                            <p class="text-stone-300 leading-relaxed">{{ item.description }}</p>
                        </div>

                        <!-- 详细信息 -->
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-sm font-medium text-stone-400 mb-1">尺寸</h3>
                                <p class="text-stone-300">{{ item.size }}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-stone-400 mb-1">来源</h3>
                                <p class="text-stone-300">{{ item.provenance }}</p>
                            </div>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <button class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-xl shadow-gold-500/30 flex-1">
                                立即预约
                            </button>
                            <button class="border border-stone-700 hover:border-gold-500 text-stone-300 hover:text-gold-400 font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer flex-1">
                                分享藏品
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 空数据提示 -->
                <div v-else class="text-center py-20">
                    <div class="inline-block w-16 h-16 text-stone-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
                            <path d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-15a3 3 0 00-3 3v9a3 3 0 003 3h15zM1.5 10.5v9a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 001.5 10.5z" />
                            <path fill-rule="evenodd" d="M3 16.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 16.5zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 4.5zm5.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm5.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm0-6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p class="text-stone-400 text-lg">未找到该藏品信息</p>
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
/* 组件样式已通过内联类名实现，这里可以添加组件特定的样式 */
</style>