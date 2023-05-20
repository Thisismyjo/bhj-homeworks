let rotators = Array.from(document.querySelectorAll(".rotator__case"))
let number = 0

function newNumber() {
    number++
    if(number >= rotators.length) number = 0

    return number
}

function newParametrs () {
    rotators.forEach(e => {
        e.classList.remove("rotator__case_active")
    })

    newNumber()

    rotators[number].style.color = rotators[number].dataset.color

    let speed = rotators[number].dataset.speed

    rotators[number].classList.add("rotator__case_active")

    setTimeout(newParametrs, speed)
}

setTimeout(newParametrs, 0)
