// @ts-ignore
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      // @ts-ignore
      { find: /^src/, replacement: resolve(__dirname, 'src') },
    ],
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'https://localhost:8994',
    //     changeOrigin: true,
    //   },
    // },
  },
})
