import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";
import tm from "markdown-it-texmath";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: "@vuepress/vite",
  bundlerConfig: {
    // vite 打包工具的选项
  },
  extendsMarkdown: (md) => {
    md.use(tm, {
      engine: require("katex"),
      delimiters: "dollars",
      katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
    });
  },
});
