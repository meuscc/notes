console.log(222)
function t(to: number) {
  return to * 10
}

setTimeout(() => {
  document.getElementById('test').style.color = 'blue'
}, t(100))
