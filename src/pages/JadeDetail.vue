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
        const data = await getCollectionItems('jades')
        
        // 按id字段从小到大排序，确保图片按顺序显示
        jades.value = data.sort((a, b) => a.id - b.id)
    } catch (errorMsg) {
        console.error('获取高古玉列表失败:', errorMsg)
        // 设置错误信息
        error.value = `获取数据失败：${errorMsg.message}`
        // 清空数据列表
        jades.value = []
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
    getJades()
})
</script>

<template>
    <DetailPageTemplate 
        title="高古玉珍品" 
        heroBadge="温润如脂 · 传世之宝"
        heroTitle="高古玉"
        heroDescription='高古玉指汉代以前的玉器，以红山文化、良渚文化、商周玉器为代表。"君子无故，玉不去身"，玉在中国文化中象征着品德与地位，是中华文明的重要载体。'
        :stats="[
            { value: '80+', label: '馆藏精品' },
            { value: '新石器-汉', label: '年代跨度' },
            { value: '100%', label: '真品保证' }
        ]"
        :loading="loading"
        :error="error"
        :items="jades"
        @back="goBack"
        @retry="getJades"
    >
        <!-- 鉴赏知识和收藏要点内容 -->
        <template #knowledge>
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
        </template>

        <!-- 藏品列表内容 -->
        <template #items>
            <ProductCard 
                v-for="item in jades" 
                :key="item.id" 
                :item="item" 
                type="jades"
            />
        </template>
    </DetailPageTemplate>
</template>

<style scoped>
/* 组件样式已通过父组件和子组件实现，这里可以添加页面特定的样式 */
</style>