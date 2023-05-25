let interestCheck = document.querySelectorAll(".interest__check")

interestCheck.forEach(function(check) {
    check.addEventListener("click", (event) => {
        let child = event.target.closest(".interest")  
        let childbox = child.querySelectorAll(".interest__check")
        for (let i = 0; i < childbox.length; i++) {
            childbox[i].checked = event.target.checked
            
        }      
    })
})