import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from "url";
import { useConstant } from './src/factory/constantPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), useConstant()],  
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // cấu hình đường dẫn gốc
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ['@import "@/assets/scss/_variables.scss";', ""].join(
          "\n"
        ),
      },
    },
  },
})
