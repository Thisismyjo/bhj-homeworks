let slider = document.querySelectorAll("div.slider__item");
let prev = document.querySelector("div.slider__arrow_prev");
let next = document.querySelector("div.slider__arrow_next");
let number = 0;

prev.onclick = function() {
    slider[number].classList.remove("slider__item_active")
    number--;
    if (number === -1) {
        number = slider.length - 1;
    }

    slider[number].classList.add("slider__item_active")
}

next.onclick = function() {
    slider[number].classList.remove("slider__item_active")
    number++;
    if (number >= slider.length) {
        number = 0;
    }
    slider[number].classList.add("slider__item_active");
}
