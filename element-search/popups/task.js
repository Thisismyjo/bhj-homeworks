const main = document.querySelector("#modal_main");
const modal = document.querySelector("#modal_success");
const time = Array.from(document.querySelectorAll(".modal__close_times"));
const success = document.querySelector(".show-success");

main.classList.add("modal_active");

time.forEach((exit) => {
    exit.onclick = function() {
        exit.closest("div.modal").classList.remove("modal_active");
    }
})

success.onclick = function() {
    modal.classList.add("modal_active")
    main.classList.remove("modal_active")
}