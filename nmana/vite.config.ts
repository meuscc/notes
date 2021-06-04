// @ts-ignore
import { resolve } from 'path'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  build: {
    target: ['es2015'],
  },
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
    port: 8080,
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'https://localhost:8994',
    //     changeOrigin: true,
    //   },
    // },
  },
})
