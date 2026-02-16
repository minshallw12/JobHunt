import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root base in dev so Vite serves the app at "/".
  base: mode === 'development' ? '/' : '/static/',
  build: {
    outDir: '../static/',
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    proxy: {
      '^/(addentry|addinterview|getapplications|getinterviews|application|increment|decrement|editjob|deleteapplication)(/.*)?$': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
}))
