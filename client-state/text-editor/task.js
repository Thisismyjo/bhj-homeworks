let editor = document.querySelector("#editor")
let content = document.querySelector(".content")

let text = localStorage.getItem("editor")

content.insertAdjacentHTML("beforeEnd", "<button class='button'>Очистить</button>")
let button = document.querySelector(".button")
button.setAttribute("style", "width: 100px; height: 30px")

button.onclick = () => {
    localStorage.removeItem("editor")
    editor.value = ""
}

if (text) editor.value = text

editor.addEventListener("keyup", (e) => {
    localStorage.setItem("editor", e.currentTarget.value)   
})