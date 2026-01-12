import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      // 添加API代理，将/api请求转发到后端服务
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        rewrite: (path) => path
      },
      // 添加uploads代理，将/uploads请求转发到后端服务
      '/uploads': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
})
