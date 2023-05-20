let revals = Array.from(document.querySelectorAll(".reveal"));

for (let i = 0; i < revals.length; i++) {
    
    function seeElement () {
        let top = revals[i].getBoundingClientRect().top;

        if(top < window.innerHeight) {
            revals[i].classList.add("reveal_active")
        } else {
            revals[i].classList.remove("reveal_active")
        }
    }

    document.addEventListener("scroll", seeElement)
}
