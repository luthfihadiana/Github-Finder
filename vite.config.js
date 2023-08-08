import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

// eslint-disable-next-line no-undef
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(),react()],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
})
