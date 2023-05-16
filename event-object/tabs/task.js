let tabs = Array.from(document.querySelectorAll("div.tab"));
let contents = Array.from(document.querySelectorAll("div.tab__content"));

for (let click of tabs) {
    click.addEventListener("click", (event) => {
        let i = tabs.indexOf(event.target);

        for (let t = 0; t < tabs.length; t++) {
            tabs[t].classList.remove("tab_active");
            contents[t].classList.remove("tab__content_active");
        }
    
        tabs[i].classList.add("tab_active");
        contents[i].classList.add("tab__content_active");
    })
}

