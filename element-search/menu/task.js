let link = Array.from(document.querySelectorAll("a.menu__link"));
let item = document.querySelector("ul.menu_sub").classList.contains("menu_active");
let n = 0;

for (let index = 0; index < link.length; index++) {
    link[index].onclick = function() {
        let menuSub = link[index].closest("li.menu__item").querySelector("ul.menu_sub");
        if (menuSub !== null && n === 0) {           
            if(menuSub.classList.contains("menu_active")) {
                menuSub.classList.remove("menu_active");
            } else {
                menuSub.classList.add("menu_active")
            }
            n = 1;
            return false;
        } else if (menuSub !== null && n === 1) {
            if(menuSub.classList.contains("menu_active")) {
                menuSub.classList.remove("menu_active");
            } else {
                menuSub.classList.add("menu_active")
            }            
            n = 0;
            return false;
        }
        
    }    

}
