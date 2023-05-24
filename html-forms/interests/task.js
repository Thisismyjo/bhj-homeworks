let interestCheck = document.querySelectorAll(".interest__check")

interestCheck.forEach(function(check) {
    check.addEventListener("click", (event) => {
        event.target.checked
        let child = event.target.closest(".interest").querySelector(".interests_active")    
        if (child) {
            let childbox = child.querySelectorAll(".interest__check")
            for ( let i = 0; i < childbox.length; i++) {
                if (childbox[i].checked === true) {
                    childbox[i].checked = false
                } else if (childbox[i].checked === false) {
                    childbox[i].checked = true
                }
            }   
        }
    })
})