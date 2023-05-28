let input = document.querySelector(".tasks__input")
let listTasks = document.querySelector(".tasks__list")
let button = document.querySelector(".tasks__add")

input.addEventListener("keyup", inputAdd)
button.addEventListener("click", add)

function add (e) {
    e.preventDefault()

    if (input.value.trim().length > 0) {
        let task = `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`

      listTasks.insertAdjacentHTML("beforeEnd", task)
      input.value = ""

    } 
}

function inputAdd(e) {
    e.preventDefault()
    if (e.key === 13) {
        add()       
    }
}

listTasks.addEventListener("click", function(e) {
    if(e.target.classList.contains("task__remove")) {
        e.target.closest(".task").remove()
    }
})
