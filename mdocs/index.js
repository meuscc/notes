// <script src="https://cdn.jsdelivr.net/npm/vue@3.0.7/dist/vue.global.prod.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/common-tags@1.8.0/dist/common-tags.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js"></script>

export async function loadScript() {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js";
  document.head.appendChild(script);
}
