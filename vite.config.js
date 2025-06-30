import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://nugi-inn.onrender.com',
        changeOrigin: true,
        secure: false, //set to true in production environment
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
