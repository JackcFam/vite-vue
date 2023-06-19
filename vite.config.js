import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': `${pathSrc}/`,
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js' //remove i18n waring
    }
  },
})
