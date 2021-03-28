module.exports = {
  lang: 'zh-CN',
  title: '学习笔记',
  description: '知识学习记录',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css',
      },
    ],
  ],

  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('@traptitech/markdown-it-katex'));
    },
  },
};
