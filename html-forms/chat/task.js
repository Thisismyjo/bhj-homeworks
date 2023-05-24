let chat = document.querySelector(".chat-widget")
let input = document.querySelector(".chat-widget__input")
let messages = document.querySelector(".chat-widget__messages")
let timeActiv
let t
let flag = true

chat.addEventListener("click", () => {
    chat.classList.add("chat-widget_active")
})

input.addEventListener("keyup", e => {
    e.preventDefault()
    
    if(e.key == "Enter") {        
        input.value = input.value.trim()
        
        if(input.value === "") {
            alert("Сообщение пустое")
        } else {
            messagesClient()            
            randomMessages()            
            
            setInterval(() => {
                function newMessageTi() { 
                    let i = Date.now()
                    let chekTime = Math.round((i - t) / 1000)       
                    if(chekTime >= 30) randomMessages()                                
                }
                newMessageTi()
            }, 7000)
        }
    }
})  

function randomMessages() {
    flag = false
    setTimeout(() => { 
        let data = new Date().getHours() + ":" + new Date().getMinutes()
        let message = [
            "Добрый день!",
            "Добрый вечер!",
            "Вы не купили ни одного товара для тогоб что бы так разогаривать!",
            "Кто тут?",
            "К сожалениюб все операторы сейчас заняты. Не пишите нам больше",
            "Где ваша совесть?",
            "Мы  ничего не будем вам продавать!",
            "Добрый день! До свидания!"
        ]
        let messageIi = Math.floor(Math.random() * message.length)
        
        messages.innerHTML += `Сообщение от робота
        <div class="message">
        <div class="message__time">${data}</div>
        <div class="message__text">${message[messageIi]}</div>
        </div>`
        let last = messages.lastElementChild
        last.scrollIntoView()
    }, 1000)

    t = Date.now()
}

function messagesClient () {
    let data = new Date().getHours() + ":" + new Date().getMinutes()
    messages.innerHTML += `Сообщение от клиента
    <div class="message message_client">
        <div class="message__time"> ${data}</div>
        <div class="message__text">${input.value}</div>
    </div>`

    input.value = ""

    let lastClient = messages.lastElementChild
    lastClient.scrollIntoView()
}

setTimeout(() => {    
    if (flag === true && chat.classList.contains("chat-widget_active")) {
        let dataActive = new Date().getHours() + ":" + new Date().getMinutes()
        messages.innerHTML += `Сообщение от робота
        <div class="message">
            <div class="message__time">${dataActive}</div>
            <div class="message__text"> Вам чего? </div>
        </div>`
    }
    
}, 30000)



    