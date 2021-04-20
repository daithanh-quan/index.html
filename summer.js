const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const lines = $$('.header__finish-item-horizon-line')
const imgs = $$('.header__finish-item-list-img')

lines.forEach((line, index) => {
  const img = imgs[index]
  line.onclick = function () {
    $('.header__finish-item-horizon-line.selected').classList.remove('selected')
    $('.header__finish-item-list-img.change').classList.remove('change')
    this.classList.add('selected')
    img.classList.add('change')
  }
})
var showHeader = false
function showHideBanner() {
  showHeader = !showHeader
  var nav = $('.header__between--items-row ')
  if (showHeader) {
    nav.style.visibility = 'hidden'
    nav.style.display = 'none'
  } else {
    nav.style.visibility = 'visible'
    nav.style.display = 'block'
  }
  console.log(showHideBanner)
}
