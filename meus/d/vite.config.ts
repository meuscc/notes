import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

export default {
  plugins: [Vue(),

    Pages({
      extensions: ['vue', 'md'],
    }),
  ],
};

