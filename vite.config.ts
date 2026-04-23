import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
  resolve: {
    alias: {
      '@engine': path.resolve(__dirname, './src/engine'),
      '@store': path.resolve(__dirname, './src/store'),
      '@types': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components'),
      '@storage': path.resolve(__dirname, './src/storage'),
      '@loaders': path.resolve(__dirname, './src/loaders'),
      '@audio': path.resolve(__dirname, './src/audio'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
})
