// API服务配置
import axios from 'axios'

// 使用相对路径，避免前后端端口不一致问题
const API_BASE_URL = '/api'
const IMAGE_BASE_URL = '/' 

// 配置选项：是否在API请求失败时使用mock数据（仅开发环境）
const USE_MOCK_DATA_ON_FAILURE = import.meta.env.DEV

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 2000 // 减少超时时间，避免长时间等待
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
    
    // 处理多种响应格式：
    // 1. 如果是数组或对象，直接返回（如直接返回数据的API）
    if (Array.isArray(result) || (typeof result === 'object' && result !== null)) {
      // 2. 如果有success字段，按字段值处理
      if (result.success !== undefined) {
        return result.success ? result.data : null
      }
      // 3. 没有success字段，直接返回数据
      return result
    }
    // 4. 其他类型数据，直接返回
    return result
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

// Mock数据：不同类型藏品的模拟数据
const mockData = {
  ceramics: [
    {
      id: 1,
      name: '唐三彩骆驼载乐俑',
      dynasty: '唐代',
      year: '公元618-907年',
      description: '此件唐三彩骆驼载乐俑，骆驼昂首嘶鸣，背负五位乐师，神态各异。釉色绚丽，黄、绿、白三色交相辉映，是盛唐丝绸之路文化的完美见证。',
      size: '高58cm 长42cm',
      provenance: '西安出土',
      price: '¥ 2,800,000',
      featured: true,
      image: 'ceramic_001.jpg',
      imageGradient: 'from-amber-900/50 to-orange-900/50'
    },
    {
      id: 2,
      name: '宋汝窑天青釉盘',
      dynasty: '宋代',
      year: '公元960-1279年',
      description: '汝窑为宋代五大名窑之首，"天青为贵，粉青为尚，月白第一，天青未均最佳"。此盘釉色纯正，开片自然，是汝窑精品之作。',
      size: '直径17.5cm',
      provenance: '传世旧藏',
      price: '¥ 8,800,000',
      featured: true,
      image: 'ceramic_002.jpg',
      imageGradient: 'from-sky-900/50 to-cyan-900/50'
    }
  ],
  jades: [
    {
      id: 1,
      name: '商代玉龙纹璜',
      dynasty: '商代',
      year: '公元前1600-1046年',
      description: '此玉璜呈半圆形，双面雕饰龙纹，龙身卷曲，龙口张开，形态威猛。玉质温润，沁色自然，是商代玉器的典型代表。',
      size: '长12cm 宽3.5cm',
      provenance: '安阳殷墟出土',
      price: '¥ 3,800,000',
      featured: true,
      image: 'jade_001.jpg',
      imageGradient: 'from-emerald-900/50 to-teal-900/50'
    },
    {
      id: 2,
      name: '汉白玉蝉',
      dynasty: '汉代',
      year: '公元前206-公元220年',
      description: '汉玉蝉造型简练，线条流畅，所谓"汉八刀"工艺，寥寥数刀，神韵俱现。此件玉蝉玉质洁白，刀法犀利，为汉代玉蝉精品。',
      size: '长6.5cm',
      provenance: '传世旧藏',
      price: '¥ 680,000',
      featured: false,
      image: 'jade_002.jpg',
      imageGradient: 'from-stone-200/40 to-stone-300/40'
    }
  ],
  bronzes: [
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
      image: 'bronze_001.jpg',
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
      image: 'bronze_002.jpg',
      imageGradient: 'from-blue-900/50 to-indigo-900/50'
    }
  ],
  calligraphies: [
    {
      id: 1,
      name: '宋徽宗瑞鹤图卷',
      dynasty: '北宋',
      year: '公元1112年',
      description: '宋徽宗赵佶亲笔绘制，描绘群鹤盘旋宫殿之上，祥云缭绕，寓意吉祥。笔墨精细，色彩绚丽，是宋代院体画的巅峰之作，体现"皇帝艺术"的独特魅力。',
      size: '纵51cm 横138.2cm',
      provenance: '清宫旧藏',
      price: '¥ 15,000,000',
      featured: true,
      image: 'calligraphy_001.jpg',
      imageGradient: 'from-amber-900/50 to-orange-900/50'
    },
    {
      id: 2,
      name: '米芾行书苕溪诗卷',
      dynasty: '北宋',
      year: '公元1088年',
      description: '米芾代表作之一，行书35行，共394字。笔法精妙，点画飞动，笔势灵活，充满米芾独特的"刷字"风格。被誉为"米书第一"。',
      size: '纵30.3cm 横189.5cm',
      provenance: '清宫旧藏',
      price: '¥ 8,000,000',
      featured: false,
      image: 'calligraphy_002.jpg',
      imageGradient: 'from-stone-200/40 to-stone-300/40'
    }
  ]
}

/**
 * 获取藏品列表
 * @param {string} type - 藏品类型
 * @returns {Promise<Array>} - 藏品列表
 */
export async function getCollectionItems(type) {
  try {
    // 尝试调用后端API获取数据
    const data = await apiClient.get(type)
    return data || []
  } catch (error) {
    console.error(`获取${type}数据失败，${USE_MOCK_DATA_ON_FAILURE ? '使用mock数据' : '抛出错误'}`, error)
    
    // 如果配置了使用mock数据，且当前是开发环境，则返回mock数据
    if (USE_MOCK_DATA_ON_FAILURE) {
      return mockData[type] || []
    }
    
    // 否则抛出错误
    throw error
  }
}

/**
 * 获取单个藏品详情
 * @param {string} type - 藏品类型
 * @param {string|number} id - 藏品ID
 * @returns {Promise<Object>} - 藏品详情
 */
export async function getCollectionItemDetail(type, id) {
  try {
    // 尝试调用后端API获取数据
    const data = await apiClient.get(`${type}/${id}`)
    if (data) {
      return data
    }
    throw new Error('API返回空数据')
  } catch (error) {
    console.error(`获取${type}详情失败，${USE_MOCK_DATA_ON_FAILURE ? '使用mock数据' : '抛出错误'}`, error)
    
    // 如果配置了使用mock数据，且当前是开发环境，则返回mock数据
    if (USE_MOCK_DATA_ON_FAILURE) {
      // 从mock数据中查找对应ID的藏品
      const items = mockData[type] || []
      const item = items.find(item => item.id === parseInt(id))
      return item || null
    }
    
    // 否则抛出错误
    throw error
  }
}

/**
 * 获取图片URL
 * @param {string} imagePath - 图片路径
 * @returns {string} - 完整图片URL
 */
export function getImageUrl(imagePath) {
  if (!imagePath) {
    // 如果没有图片路径，返回默认图片
    return IMAGE_BASE_URL + 'uploads/default.jpg'
  }
  // 如果已经是完整URL，直接返回
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  // 确保路径格式正确，避免重复的斜杠
  let url = imagePath
  // 直接使用完整路径，兼容后台返回的格式
  // 例如：/uploads/xxx.jpg 或 uploads/xxx.jpg
  if (!url.startsWith('/')) {
    url = '/' + url
  }
  if (!url.startsWith('/uploads')) {
    url = '/uploads' + url
  }
  // 添加基础URL，确保图片能够正确加载
  return IMAGE_BASE_URL + url.replace(/^\//, '')
}

/**
 * 获取uploads目录下的所有图片
 * @returns {Promise<Array>} - 图片列表
 */
export async function getUploadedImages() {
  try {
    // 尝试调用后端API获取数据
    const data = await apiClient.get('/uploads')
    return data || []
  } catch (error) {
    console.error('获取上传图片失败，使用空数组', error)
    // 返回空数组，避免页面错误
    return []
  }
}

// 导出API服务
export default {
  getCollectionItems,
  getCollectionItemDetail,
  getImageUrl,
  getUploadedImages
}