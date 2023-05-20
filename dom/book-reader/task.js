let book = document.querySelector("div.book")
let sizers = Array.from(document.querySelectorAll("a.font-size"));

let controlColor = document.querySelector(".book__control_color")
let bookColor = Array.from(controlColor.querySelectorAll("a.color"))
let contolBackground = document.querySelector(".book__control_background")
let bookBackground = Array.from(contolBackground.querySelectorAll("a.color"))

for (let click of sizers) {
    click.addEventListener("click", (event) => {
        let i = sizers.indexOf(event.target);

        for (let s = 0; s < sizers.length; s++) {
            sizers[s].classList.remove("font-size_active");
        }

        book.classList.remove("book_fs-small")
        book.classList.remove("book_fs-big")
        
        sizers[i].classList.add("font-size_active");

        let size = sizers[i].getAttribute("data-size")

        if (size === "small") {
            book.classList.add("book_fs-small")
        } else if (size === "big") {
            book.classList.add("book_fs-big")
        }

        event.preventDefault();
    
    })

}

for (let clickColor of bookColor) {
    clickColor.addEventListener("click", (event) => {
        let i = bookColor.indexOf(event.target)

        for (let c = 0; c < bookColor.length; c++) {
            bookColor[c].classList.remove("color_active")
        }

        book.classList.remove("book_color-gray")
        book.classList.remove("book_color-whitesmoke")

        bookColor[i].classList.add("color_active")

        let color = bookColor[i].getAttribute("data-text-color") 
               
        if (color === "gray") {
            book.classList.add("book_color-gray")
        } else if (color === "whitesmoke") {
            book.classList.add("book_color-whitesmoke")
        }
        
        event.preventDefault()
    })
}

for (let clickBackground of bookBackground) {
    clickBackground.addEventListener("click", (event) => {
        let i = bookBackground.indexOf(event.target)

        for (let b = 0; b < bookBackground.length; b++) {
            bookBackground[b].classList.remove("color_active")
        }

        book.classList.remove("book_bg-black")
        book.classList.remove("book_bg-gray")


        bookBackground[i].classList.add("color_active")

        let color = bookBackground[i].getAttribute("data-bg-color")

        if(color === "black") {
            book.classList.add("book_bg-black")
        } else if (color === "gray") {
            book.classList.add("book_bg-gray")
        } 
        
        event.preventDefault()
    })
}