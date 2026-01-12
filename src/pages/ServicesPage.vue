<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 返回首页
const goBack = () => {
    router.back()
}

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
                            <span class="text-sm font-medium">返回</span>
                        </button>
                        <span class="font-serif font-semibold text-lg tracking-wider">服务体系</span>
                        <div class="w-20"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Content Section -->
        <section class="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="glass-card rounded-3xl p-8 sm:p-12">
                    <!-- 内容区域为空 -->
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>