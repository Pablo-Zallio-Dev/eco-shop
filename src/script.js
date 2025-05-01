const d = document,
    $navMenu = d.querySelector(".nav__menu"),
    $imgActive = d.querySelector(".nav__img")
    $imgClose = d.querySelector(".nav__img__close")

d.addEventListener("click", (e) => {
   console.log(e.target.classList)
   if(e.target.classList.contains("nav__img")){
    $navMenu.classList.toggle('nav__menu--active')
    $imgActive.classList.toggle('nav__img--disabled')
    $imgClose.classList.toggle('nav__img--disabled')
   } else {
    $navMenu.classList.remove('nav__menu--active')
    $imgActive.classList.remove('nav__img--disabled')
    $imgClose.classList.add('nav__img--disabled')
   }
})
