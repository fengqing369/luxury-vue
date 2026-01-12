// API服务配置
import axios from 'axios'

const API_BASE_URL = 'http://localhost:3003/api'
const IMAGE_BASE_URL = 'http://localhost:3003/'

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
apiClient.interceptors.request.use(
  config => {
    // 可以在这里添加认证信息等
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
apiClient.interceptors.response.use(
  response => {
    // 统一处理响应数据
    const result = response.data
    return result.success ? result.data : null
  },
  error => {
    console.error('API请求失败:', error)
    // 统一处理错误
    let errorMessage = '网络请求失败'
    if (error.response) {
      // 服务器返回错误状态码
      switch (error.response.status) {
        case 400:
          errorMessage = '请求参数错误'
          break
        case 401:
          errorMessage = '未授权，请重新登录'
          break
        case 403:
          errorMessage = '拒绝访问'
          break
        case 404:
          errorMessage = '请求的资源不存在'
          break
        case 500:
          errorMessage = '服务器内部错误，请稍后重试'
          break
        case 502:
          errorMessage = '网关错误'
          break
        case 503:
          errorMessage = '服务器维护中'
          break
        case 504:
          errorMessage = '网关超时'
          break
        default:
          errorMessage = `HTTP错误！状态码：${error.response.status}`
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      errorMessage = '服务器无响应，请检查网络连接'
    } else {
      // 请求配置错误
      errorMessage = error.message
    }
    return Promise.reject(new Error(errorMessage))
  }
)

/**
 * 获取藏品列表
 * @param {string} type - 藏品类型
 * @returns {Promise<Array>} - 藏品列表
 */
export async function getCollectionItems(type) {
  return apiClient.get(`/${type}`)
}

/**
 * 获取单个藏品详情
 * @param {string} type - 藏品类型
 * @param {string|number} id - 藏品ID
 * @returns {Promise<Object>} - 藏品详情
 */
export async function getCollectionItemDetail(type, id) {
  return apiClient.get(`/${type}/${id}`)
}

/**
 * 获取图片URL
 * @param {string} imagePath - 图片路径
 * @returns {string} - 完整图片URL
 */
export function getImageUrl(imagePath) {
  if (!imagePath) return ''
  // 如果已经是完整URL，直接返回
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  // 确保路径格式正确，避免重复的斜杠
  let url = imagePath
  // 如果路径不以/uploads开头，添加/uploads前缀
  if (!url.startsWith('/uploads')) {
    url = `/uploads${url.startsWith('/') ? '' : '/'}` + url
  }
  // 添加基础URL
  return IMAGE_BASE_URL + url.replace(/^\//, '')
}

// 导出API服务
export default {
  getCollectionItems,
  getCollectionItemDetail,
  getImageUrl
}