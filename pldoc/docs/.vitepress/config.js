module.exports = {
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('@traptitech/markdown-it-katex'), {
        blockClass: 'math-block',
        errorColor: ' #cc0000',
      })
    },
  },
}
