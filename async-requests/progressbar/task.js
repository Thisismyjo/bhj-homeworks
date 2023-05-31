let progress = document.querySelector("#progress")
let forma = document.querySelector("#form")

forma.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = new FormData(forma)
    let xhr = new XMLHttpRequest()
    
    xhr.upload.addEventListener("progress", (e) => {    
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total
        }
    })

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            (xhr.status > 200) ? alert("Файл загружен") : alert("Ошибка" + xhr.status)
        }
    }
    
    xhr.open("POST", forma.action, true)
    xhr.send(formData)
})
