let tooltip = document.querySelectorAll(".has-tooltip")
let active = null

for (let click of tooltip) {
    click.addEventListener("click", (event) => {
        event.preventDefault()
        
        let find = document.querySelector(".tooltip_active")

        if(find) {
            find.remove()
        } 
            let divNew = document.createElement("div")
            divNew.classList.add("tooltip", "tooltip_active")
            divNew.innerHTML = event.target.title

            let coord = event.target.getBoundingClientRect()
            divNew.style.top = coord.bottom + "px"
            divNew.style.left = coord.left +"px"
            document.body.append(divNew)
            active = divNew

    })

}

document.addEventListener("click", (e) => {
    if(active && e.target.title === "") {
        active.classList.remove("tooltip_active")
        active = null
    }
})
