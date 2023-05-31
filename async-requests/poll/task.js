let title = document.querySelector(".poll__title")
let answers = document.querySelector(".poll__answers")
let xhr = new XMLHttpRequest()

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll")
xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let answer = JSON.parse(xhr.responseText)
        let titleAnswer = answer.data.answers
        
        title.insertAdjacentHTML("beforeEnd", answer.data.title)
                
        for (let key in titleAnswer) {
                answers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${titleAnswer[key]}</button>`)
            }
            
        let buttons = document.querySelectorAll(".poll__answer")
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!")
                location.reload()
            })
        })
    }
})
xhr.send()