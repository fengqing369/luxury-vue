<script setup>
// 定义组件的props
const props = defineProps({
    // 页面标题
    title: {
        type: String,
        required: true
    },
    // 页面副标题（可选）
    subtitle: {
        type: String,
        default: ''
    },
    // 英雄区徽章文本
    heroBadge: {
        type: String,
        required: true
    },
    // 英雄区标题
    heroTitle: {
        type: String,
        required: true
    },
    // 英雄区描述
    heroDescription: {
        type: String,
        required: true
    },
    // 统计数据列表
    stats: {
        type: Array,
        default: () => []
    },
    // 加载状态
    loading: {
        type: Boolean,
        default: false
    },
    // 错误信息
    error: {
        type: String,
        default: ''
    },
    // 藏品数据列表
    items: {
        type: Array,
        default: () => []
    }
})

// 定义组件的emits
const emit = defineEmits(['back', 'retry'])

// 返回首页
const goBack = () => {
    emit('back')
}

// 重试加载数据
const retryLoading = () => {
    emit('retry')
}
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
                        <span class="font-serif font-semibold text-lg tracking-wider">{{ title }}</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero-gradient pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="liquid-blob w-96 h-96 bg-gold-600/30 top-20 -left-48"></div>
            <div class="liquid-blob w-80 h-80 bg-gold-700/30 bottom-20 -right-40" style="animation-delay: 2s;"></div>

            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8">
                        <div class="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span class="text-sm font-medium tracking-widest text-gold-400">{{ heroBadge }}</span>
                    </div>
                    <h1 class="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-stone-50 leading-tight mb-6">
                        {{ heroTitle }}
                        <span class="gold-shimmer">收藏鉴赏</span>
                    </h1>
                    <p class="text-stone-400 text-lg max-w-3xl mx-auto">
                        {{ heroDescription }}
                    </p>
                </div>

                <!-- Featured Stats -->
                <div v-if="stats.length > 0" class="grid sm:grid-cols-3 gap-6 mt-12">
                    <div v-for="(stat, index) in stats" :key="index" class="glass-card rounded-2xl p-6 text-center">
                        <div class="font-serif font-bold text-3xl text-gold-500 mb-2">{{ stat.value }}</div>
                        <div class="text-stone-400 text-sm">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Knowledge Section -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900">
            <div class="max-w-7xl mx-auto">
                <!-- 使用slot允许子组件自定义知识区内容 -->
                <slot name="knowledge"></slot>
            </div>
        </section>

        <!-- Collection Grid -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900">
            <div class="max-w-7xl mx-auto">
                <h2 class="font-serif font-bold text-3xl text-stone-50 mb-8 text-center">馆藏珍品</h2>

                <!-- 加载状态 -->
                <div v-if="loading" class="text-center py-20">
                    <div class="inline-block w-16 h-16 border-4 border-t-4 border-gold-500 border-solid rounded-full animate-spin mb-4"></div>
                    <p class="text-stone-400 text-lg">数据加载中，请稍候...</p>
                </div>

                <!-- 数据列表 -->
                <div v-else>
                    <!-- 错误提示（如果有错误信息） -->
                    <div v-if="error" class="text-center py-8">
                        <div class="inline-block w-10 h-10 text-red-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <p class="text-stone-400 text-base mb-3">{{ error }}</p>
                        <button @click="retryLoading" class="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-stone-950 font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/30">
                            重试
                        </button>
                    </div>

                    <!-- 藏品列表 -->
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- 使用slot允许子组件自定义藏品卡片 -->
                        <slot name="items" :items="items"></slot>
                    </div>

                    <!-- 空数据提示 -->
                    <div v-if="items.length === 0" class="text-center py-20">
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
/* 组件样式已通过外部样式或内联类名实现，这里可以添加组件特定的样式 */
</style>