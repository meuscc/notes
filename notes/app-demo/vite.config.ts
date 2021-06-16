import { defineConfig } from 'vite'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import math from 'remark-math'
import katex from 'rehype-katex'
import pages from 'vite-plugin-react-pages'
// @ts-ignore
import prism from '@mapbox/rehype-prism'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    reactRefresh(),
    mdx({
      remarkPlugins: [math],
      rehypePlugins: [katex, prism],
    }),
    WindiCSS(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
  ],
})
