var searchWrapper = document.querySelector(".search-logo-wrapper")
var searchIcon = document.querySelector(".search-logo")
var hamWrapper = document.querySelector(".ham-nav-wrapper")
var hamIcon = document.querySelector(".ham-icon")
var editionWrapper = document.querySelector(".edition-picker")
var editionButton = document.querySelector(".edition")

var mainNav = document.querySelector(".main-nav")

editionButton.addEventListener("click", () => editionWrapper.classList.toggle("edition-open"))

//wrapper to wide to have listener on it - missclicks
searchIcon.addEventListener('click', () => searchWrapper.classList.toggle("search-open"))
hamIcon.addEventListener('click', () => {
    hamWrapper.classList.toggle("ham-menu-open")
    mainNav.style.color = mainNav.style.color !== "rgb(89, 89, 89)" ? "#595959" : "rgb(255, 255, 255)" 
    editionWrapper.style.color = editionWrapper.style.color !== "rgb(89, 89, 89)" ? "#595959" : "rgb(255, 255, 255)"
})