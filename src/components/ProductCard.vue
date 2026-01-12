<script setup>
import { useRouter } from 'vue-router'
import { getImageUrl } from '../services/api'

// 定义组件的props
const props = defineProps({
    // 藏品数据对象
    item: {
        type: Object,
        required: true
    },
    // 藏品类型，用于路由跳转
    type: {
        type: String,
        required: true
    },
    // 点击卡片时的回调函数（可选）
    onItemClick: {
        type: Function,
        default: null
    }
})

const router = useRouter()

// 点击卡片进入详情页
const handleItemClick = () => {
    if (props.onItemClick) {
        props.onItemClick(props.item)
    } else {
        // 默认跳转逻辑
        router.push(`/${props.type}/${props.item.id}`)
    }
}
</script>

<template>
    <div 
        class="product-card glass-card rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-10"
        @click="handleItemClick"
    >
        <div class="aspect-[4/3] bg-gradient-to-br relative overflow-hidden" :class="item.imageGradient">
            <div class="product-image absolute inset-0 flex items-center justify-center transition-transform duration-500">
                <img 
                    v-if="item.image" 
                    :src="getImageUrl(item.image)" 
                    :alt="item.name" 
                    class="w-full h-full object-contain"
                />
                <svg 
                    v-else 
                    class="w-20 h-20 text-gold-500/60" 
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
        <div class="p-6">
            <div class="text-xs font-medium text-gold-400 tracking-widest mb-2">{{ item.dynasty }}</div>
            <h3 class="font-serif font-semibold text-xl text-stone-50 mb-2">{{ item.name }}</h3>
            <p class="text-stone-400 text-sm mb-4 line-clamp-2">{{ item.description }}</p>
            <div class="flex items-center justify-between text-sm">
                <span class="text-stone-500">{{ item.size }}</span>
                <span class="font-serif font-bold text-gold-500">{{ item.price }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 组件样式已通过外部样式或内联类名实现，这里可以添加组件特定的样式 */
</style>