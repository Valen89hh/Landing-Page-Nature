const btnMenu = document.querySelector(".btn-menu")
const btnClose = document.querySelector(".btn-close")
const sideNav = document.querySelector(".content-nav-samall")

btnMenu.addEventListener("click", ()=>{
    sideNav.classList.remove("fade-close")
    sideNav.classList.add("fade-open")
})

btnClose.addEventListener("click", ()=>{
    sideNav.classList.remove("fade-open")
    sideNav.classList.add("fade-close")
})

document.querySelectorAll(".nav-small li a").forEach(a=>{
    a.addEventListener("click", ()=>{
        sideNav.classList.remove("fade-open")
        sideNav.classList.add("fade-close")
    })
})