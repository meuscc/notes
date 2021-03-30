import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import mdx from 'vite-plugin-mdx';
import math from 'remark-math';
import katex from 'rehype-katex';
// @ts-ignore
import prism from '@mapbox/rehype-prism';

export default defineConfig({
  alias: {
    '~': resolve(__dirname, 'src'),
  },
  plugins: [
    reactRefresh(),
    mdx({
      remarkPlugins: [math],
      rehypePlugins: [katex, prism],
    }),
  ],
});
