console.log(333)
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
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
    throwOnError : false
  });
});

=======

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
>>>>>>> 21351e954837c4b9b9e50695c90a6cae01416435
