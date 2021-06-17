console.log(333)

export function f() {
  console.log(22)
}

renderMathInElement(document.body, {

  // customised options
  // • auto-render specific keys, e.g.:
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '$', right: '$', display: false},
    {left: '\\(', right: '\\)', display: false},
    {left: '\\[', right: '\\]', display: true}
  ],
  // • rendering keys, e.g.:
  throwOnError : true
});
