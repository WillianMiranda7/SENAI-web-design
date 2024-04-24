var menu = document.getElementById("menuUl")
var btMenu = document.getElementById("btMenu")
var btClose = document.getElementById("btClose")
var backGroundMenu = document.getElementById("menuOpenClass")

function openMenu() {
    menu.style.display = "flex"
    menu.style.flexDirection = "column"
    menu.style.position = "fixed"
    btClose.style.display = "block"
    btMenu.style.display = "none"
    btClose.style.position = "fixed"
}

function closeMenu() {
    menu.style.display = "none"
    btClose.style.display = "none"
    btMenu.style.display = "block"
    btMenu.style.position = "fixed"

}