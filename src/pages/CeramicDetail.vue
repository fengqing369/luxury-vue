<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import DetailPageTemplate from '../components/DetailPageTemplate.vue'
import ProductCard from '../components/ProductCard.vue'
import { getCollectionItems } from '../services/api'

const router = useRouter()

// 加载状态
const loading = ref(false)
// 错误信息
const error = ref('')
// 高古瓷藏品列表
const ceramics = ref([])

/**
 * 从后端API获取高古瓷藏品列表
 */
const getCeramics = async () => {
    loading.value = true
    error.value = ''
    try {
        // 调用后端API获取高古瓷数据
        const data = await getCollectionItems('ceramics')
        
        // 按id字段排序，确保图片按顺序显示
        ceramics.value = data.sort((a, b) => a.id - b.id)
    } catch (errorMsg) {
        console.error('获取高古瓷列表失败:', errorMsg)
        // 设置错误信息
        error.value = `获取数据失败：${errorMsg.message}`
        // 清空数据列表
        ceramics.value = []
    } finally {
        loading.value = false
    }
}

// 返回首页
const goBack = () => {
    router.push('/before')
}

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // 组件挂载后调用API获取数据
    getCeramics()
})
</script>

<template>
    <DetailPageTemplate 
        title="高古瓷珍品" 
        heroBadge="千年窑火 · 传世珍品"
        heroTitle="高古瓷"
        heroDescription="高古瓷指元代以前的瓷器，以唐三彩、宋代五大名窑（汝、官、哥、钧、定）为代表。每一件都承载着深厚的历史文化底蕴，是中国古代陶瓷艺术的巅峰之作。"
        :stats="[
            { value: '50+', label: '馆藏精品' },
            { value: '唐-元', label: '年代跨度' },
            { value: '100%', label: '真品保证' }
        ]"
        :loading="loading"
        :error="error"
        :items="ceramics"
        @back="goBack"
        @retry="getCeramics"
    >
        <!-- 鉴赏知识和收藏要点内容 -->
        <template #knowledge>
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
        </template>

        <!-- 藏品列表内容 -->
        <template #items>
            <ProductCard 
                v-for="item in ceramics" 
                :key="item.id" 
                :item="item" 
                type="ceramics"
            />
        </template>
    </DetailPageTemplate>
</template>

<style scoped>
/* 组件样式已通过父组件和子组件实现，这里可以添加页面特定的样式 */
</style>