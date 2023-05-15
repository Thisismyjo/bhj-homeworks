let list = document.querySelector("ul.dropdown__list");
let item = Array.from(document.querySelectorAll(".dropdown__item"));
let value = document.querySelector("div.dropdown__value");
let link = Array.from(document.querySelectorAll(".dropdown__link"))

function toggle () {
    list.classList.toggle("dropdown__list_active");
}

value.addEventListener("click", toggle)

link.forEach(function(item) {
    item.onclick = function() {
        value.textContent = item.textContent
        return false;
    }
    item.addEventListener("click", toggle)
})
