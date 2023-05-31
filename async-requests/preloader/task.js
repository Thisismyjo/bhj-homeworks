let loader = document.querySelector("#loader")
let items = document.querySelector("#items")
let xhr = new XMLHttpRequest()

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active")

        let valute = JSON.parse(xhr.responseText)
        let response = valute.response.Valute
        for (let key in response) {
            items.innerHTML += `<div class="item">
                <div class='item__code'>${key}</div>
                <div class='item__value'>${response[key].Value}</div>
                <div class='item__currency'>руб.</div>
            </div>`
        }
    }

})
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")
xhr.send()