let dead = document.querySelector("#dead");
let lost = document.querySelector("#lost");

for (let index = 1; index <= 9; index++) {
    let getHole = index => document.getElementById(`hole${index}`);
    let hole = getHole(index);

    hole.onclick = function() {
        if(hole.classList.contains( 'hole_has-mole' )) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        
        if (dead.textContent >= 10) {
            alert("Победа!");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent >= 5) {
            alert("Проиграли");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    
}