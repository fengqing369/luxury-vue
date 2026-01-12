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
        const data = await getCollectionItems('bronzes')
        // 按id字段排序，确保图片按顺序显示
        bronzes.value = (data || []).sort((a, b) => a.id - b.id)
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

// 返回首页
const goBack = () => {
    router.push('/')
}

// 设置轮询定时器，每5秒获取一次最新数据
let pollingInterval = null

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // 组件挂载后调用API获取数据
    getBronzes()
    
    pollingInterval = setInterval(() => {
        getBronzes()
    }, 5000)
})

// 组件卸载时清除定时器
onUnmounted(() => {
    if (pollingInterval) {
        clearInterval(pollingInterval)
        pollingInterval = null
    }
})
</script>

<template>
    <DetailPageTemplate 
        title="青铜器珍品" 
        heroBadge="国之重器 · 青铜文明"
        heroTitle="青铜器"
        heroDescription="中国青铜时代始于夏代，盛于商周。青铜器不仅是礼乐器皿，更是权力与地位的象征。器身上的铭文（金文）是研究古代历史的第一手资料，具有极高的历史和艺术价值。"
        :stats="[
            { value: '60+', label: '馆藏精品' },
            { value: '商-战国', label: '年代跨度' },
            { value: '100%', label: '真品保证' }
        ]"
        :loading="loading"
        :error="error"
        :items="bronzes"
        @back="goBack"
        @retry="getBronzes"
    >
        <!-- 鉴赏知识和收藏要点内容 -->
        <template #knowledge>
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
        </template>

        <!-- 藏品列表内容 -->
        <template #items="{ items }">
            <ProductCard 
                v-for="item in items" 
                :key="item.id" 
                :item="item" 
                type="bronzes"
            />
        </template>
    </DetailPageTemplate>
</template>

<style scoped>
/* 组件样式已通过父组件和子组件实现，这里可以添加页面特定的样式 */
</style>