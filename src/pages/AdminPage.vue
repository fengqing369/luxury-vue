<script setup>
import { ref, onMounted } from 'vue'
import { getUploadedImages, getImageUrl } from '../services/api'
import axios from 'axios'

// 图片列表
const images = ref([])
// 加载状态
const loading = ref(false)
// 错误信息
const error = ref('')
// 上传文件列表
const fileList = ref([])
// 上传对话框可见性
const uploadDialogVisible = ref(false)
// 上传进度
const uploadProgress = ref(0)

/**
 * 从后端获取上传的图片列表
 */
const fetchImages = async () => {
  loading.value = true
  error.value = ''
  try {
    const data = await getUploadedImages()
    images.value = data || []
  } catch (err) {
    console.error('获取图片列表失败:', err)
    error.value = `获取图片列表失败：${err.message}`
    images.value = []
  } finally {
    loading.value = false
  }
}

/**
 * 处理图片上传
 */
const handleUpload = async (files) => {
  if (files.length === 0) return
  
  loading.value = true
  error.value = ''
  uploadProgress.value = 0
  
  try {
    // 创建FormData对象，用于上传图片
    const formData = new FormData()
    // 将文件添加到FormData中
    files.forEach(file => {
      formData.append('image', file)
    })
    
    // 发送POST请求到后台上传API
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        // 计算上传进度百分比
        if (progressEvent.total) {
          uploadProgress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        }
      }
    })
    
    if (response.data.success) {
      // 上传成功，刷新图片列表
      await fetchImages()
      uploadDialogVisible.value = false
      fileList.value = []
      uploadProgress.value = 0
    } else {
      // 上传失败，显示错误信息
      error.value = response.data.message || '图片上传失败'
    }
  } catch (err) {
    // 捕获异常，显示错误信息
    console.error('图片上传失败:', err)
    error.value = `图片上传失败：${err.message}`
  } finally {
    loading.value = false
  }
}

/**
 * 处理图片删除
 */
const handleDelete = async (image) => {
  loading.value = true
  error.value = ''
  
  try {
    // 从image对象中获取filename
    const filename = image.filename
    
    if (filename) {
      // 发送DELETE请求到后台删除API
      const response = await axios.delete(`/api/upload/${filename}`)
      
      if (response.data.success) {
        // 删除成功，刷新图片列表
        await fetchImages()
      } else {
        // 删除失败，显示错误信息
        error.value = response.data.message || '图片删除失败'
      }
    }
  } catch (err) {
    // 捕获异常，显示错误信息
    console.error('图片删除失败:', err)
    error.value = `图片删除失败：${err.message}`
  } finally {
    loading.value = false
  }
}

// 组件挂载后加载图片列表
onMounted(() => {
  fetchImages()
})
</script>

<template>
  <div class="admin-page container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-stone-50 mb-8">前台图片管理</h1>
    
    <!-- 错误信息 -->
    <div v-if="error" class="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6">
      {{ error }}
    </div>
    
    <!-- 添加图片按钮 -->
    <div class="mb-6">
      <button 
        @click="uploadDialogVisible = true"
        class="bg-gold-600 text-stone-950 px-6 py-2 rounded-lg hover:bg-gold-500 transition-colors font-medium"
      >
        添加图片
      </button>
    </div>
    
    <!-- 图片列表 -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="image in images" :key="image.filename" class="glass-card rounded-2xl overflow-hidden">
        <div class="aspect-square relative">
          <img 
            :src="getImageUrl(image.path)" 
            :alt="image.filename" 
            class="w-full h-full object-cover"
          />
          <button 
            @click="handleDelete(image)"
            class="absolute top-2 right-2 bg-red-600/80 text-stone-50 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            title="删除图片"
          >
            ×
          </button>
        </div>
        <div class="p-4">
          <p class="text-sm text-stone-400 truncate">{{ image.filename }}</p>
          <p class="text-xs text-stone-500">{{ image.path }}</p>
        </div>
      </div>
    </div>
    
    <!-- 空状态 -->
    <div v-if="images.length === 0 && !loading" class="text-center py-12 text-stone-400">
      <p>暂无上传的图片</p>
    </div>
    
    <!-- 加载状态 -->
    <div v-if="loading" class="text-center py-12 text-stone-400">
      <p>加载中...</p>
    </div>
    
    <!-- 上传对话框 -->
    <div v-if="uploadDialogVisible" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div class="bg-stone-900 rounded-2xl p-6 w-full max-w-md">
        <h2 class="text-xl font-bold text-stone-50 mb-4">上传图片</h2>
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          @change="(e) => fileList.value = Array.from(e.target.files)"
          class="mb-4 text-stone-400"
        />
        <div class="flex justify-end gap-3">
          <button 
            @click="uploadDialogVisible = false; fileList.value = []"
            class="bg-stone-700 text-stone-300 px-4 py-2 rounded-lg hover:bg-stone-600 transition-colors"
          >
            取消
          </button>
          <button 
            @click="handleUpload(fileList)"
            :disabled="fileList.length === 0"
            class="bg-gold-600 text-stone-950 px-4 py-2 rounded-lg hover:bg-gold-500 transition-colors disabled:bg-gold-600/50 disabled:text-stone-950/50"
          >
            上传
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 可以添加页面特定的样式 */
</style>