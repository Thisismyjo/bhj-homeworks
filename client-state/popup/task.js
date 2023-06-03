const main = document.querySelector(".modal");
const time = document.querySelector(".modal__close_times");

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value)
}

function getCookie(name) {    
    let pair = document.cookie.split("; ")
    return pair.find(p => p === name)  
} 

function check() {  
    if(!getCookie("rem=closed")) main.classList.add("modal_active"); 
}

time.onclick = function() {
    main.classList.remove("modal_active");
    setCookie("rem", "closed")
}

check()