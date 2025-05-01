const d = document,
    $navMenu = d.querySelector(".nav__menu")

d.addEventListener("click", (e) => {
   console.log(e.target.classList)
   if(e.target.classList.contains("nav__img")) {
    $navMenu.classList.toggle('nav__menu--active')
   } else {
    $navMenu.classList.remove('nav__menu--active')

   }
})