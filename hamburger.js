const hamburgerButton = document.querySelector(".hamburger")
const nav = document.querySelector("header")

function toggleMenu() {
    nav.classList.toggle("open")
}

hamburgerButton.addEventListener("click", toggleMenu)