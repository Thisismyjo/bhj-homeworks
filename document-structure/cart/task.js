let product = document.querySelectorAll(".product")
let cardProduct = document.querySelector(".cart__products")

function addProductCart (item) {
    let mines = item.querySelector(".product__quantity-control_dec")
    let plus = item.querySelector(".product__quantity-control_inc")
    let value = item.querySelector(".product__quantity-value")

    mines.onclick = function() {
        if(value.textContent > 0) {
            value.textContent--
        }
    }
    
    plus.onclick = function() {
        value.textContent++
    }   
    
    let allControls = item.querySelector(".product__controls")
    let addProduct = allControls.querySelector(".product__add")
    let imgCard = item.querySelector(".product__image").src 
    let id = item.getAttribute("data-id")

    
    addProduct.addEventListener("click", () => {
        let find = cardProduct.querySelector(`.cart__product[data-id="${id}"]`)
    
        if (find) {
            let count = find.querySelector(".cart__product-count")
            let total = +count.textContent + +value.textContent
            count.textContent = total
        } else if (value.textContent > 0){
            let card = document.createElement("div")
            card.classList.add("cart__product")
            card.dataset.id = id
            
            let img = document.createElement("img")
            img.classList.add("cart__product-image")
            img.src = imgCard
            
            let count = document.createElement("div")
            count.classList.add("cart__product-count")
            count.textContent = value.textContent
            
            cardProduct.append(card)
            card.append(img, count)
            
        }
    })
}

product.forEach((item) => {
    addProductCart(item)
})