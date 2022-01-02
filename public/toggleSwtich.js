var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var body = document.body

check.addEventListener('change', function () {
  console.log(box, ball)
  if (this.checked == true) {
    box.setAttribute('style', 'background-color:white;')
    ball.setAttribute('style', 'transform:translatex(100%);')
  }

  if (this.checked == false) {
    box.setAttribute('style', 'background-color:black; color:white;')
    ball.setAttribute('style', 'transform:translatex(0%);')
  }
})
