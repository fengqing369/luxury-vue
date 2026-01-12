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
// 古字画藏品列表
const artworks = ref([])

/**
 * 从后端API获取古字画藏品列表
 */
const getArtworks = async () => {
    loading.value = true
    error.value = ''
    try {
        // 调用后端API获取古字画数据
        const data = await getCollectionItems('calligraphies')
        // 按id字段排序，确保图片按顺序显示
        artworks.value = (data || []).sort((a, b) => a.id - b.id)
    } catch (errorMsg) {
        console.error('获取古字画列表失败:', errorMsg)
        // 设置错误信息
        error.value = `获取数据失败：${errorMsg.message}`
        // 如果API请求失败，使用mock数据作为备用
        artworks.value = [
            {
                id: 1,
                name: '宋徽宗瑞鹤图卷',
                dynasty: '北宋',
                year: '公元1112年',
                description: '宋徽宗赵佶亲笔绘制，描绘群鹤盘旋宫殿之上，祥云缭绕，寓意吉祥。笔墨精细，色彩绚丽，是宋代院体画的巅峰之作，体现"皇帝艺术"的独特魅力。',
                size: '纵51cm 横138.2cm',
                provenance: '清宫旧藏',
                price: `¥ ${Math.floor(Math.random() * 10000000 + 5000000).toLocaleString()}`,
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
                price: `¥ ${Math.floor(Math.random() * 5000000 + 2000000).toLocaleString()}`,
                featured: true,
                imageGradient: 'from-amber-900/40 to-orange-900/40'
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
    getArtworks()
    
    pollingInterval = setInterval(() => {
        getArtworks()
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
        title="古字画珍品" 
        heroBadge="笔墨丹青 · 艺术瑰宝"
        heroTitle="古字画"
        heroDescription="中国古字画是中华文明的璀璨明珠，包括书法与绘画两大类。从晋唐到明清，名家辈出，风格多样。书法有楷、行、草、隶、篆五体；绘画有人物、山水、花鸟三大科。每一件传世作品都是艺术与历史的完美结合。"
        :stats="[
            { value: '100+', label: '馆藏精品' },
            { value: '晋-清', label: '年代跨度' },
            { value: '100%', label: '真品保证' }
        ]"
        :loading="loading"
        :error="error"
        :items="artworks"
        @back="goBack"
        @retry="getArtworks"
    >
        <!-- 鉴赏知识和收藏要点内容 -->
        <template #knowledge>
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
        </template>

        <!-- 藏品列表内容 -->
        <template #items="{ items }">
            <ProductCard 
                v-for="item in items" 
                :key="item.id" 
                :item="item" 
                type="calligraphies"
            />
        </template>
    </DetailPageTemplate>
</template>

<style scoped>
/* 组件样式已通过父组件和子组件实现，这里可以添加页面特定的样式 */
</style>