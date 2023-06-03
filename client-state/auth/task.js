let signin = document.querySelector(".signin")
let forma = document.querySelector("#signin__form")
let welcome = document.querySelector(".welcome")

welcome.insertAdjacentHTML("beforeEnd", "<button class='exist btn'>Выход</button>")
let buttonExist = document.querySelector(".exist")
buttonExist.addEventListener("click", () => {
    localStorage.removeItem("user_id")
    location.reload()
})

function checkSingle() {
    let id = localStorage.getItem("user_id")    
    if (id) {
        signin.classList.remove("signin_active")
        welcome.classList.add("welcome_active")
        welcome.querySelector("#user_id").textContent = id
    } else {
        signin.classList.add("signin_active")
        welcome.classList.remove("welcome_active")
    }
}
checkSingle()

function enterAuth (e) {
    if (e.key === 13) authorization()
}

function authorization (e) {
    e.preventDefault() 
    
    let formData = new FormData(forma)     
    fetch(forma.action, {
        method: "POST",
        body: formData
    })
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.log(response.status)
        }
    })
    .then(success => {
        if (success.success) {
            let id = success.user_id
            localStorage.setItem("user_id", id)
            checkSingle()
        } else {
            alert("Неверный логин/пароль")
        }
    })
    .catch(error => {
        console.error("Ошибка", error)
        alert("Ошибка")
    })
    forma.reset()
    
    
}

forma.addEventListener("submit", authorization)
forma.addEventListener("keyup", enterAuth)