document.addEventListener("DOMContentLoaded", () => {
    let items = document.querySelectorAll(".nav-box"),
        contents = document.querySelectorAll(".cont"),
        group = document.querySelector(".nav-group");
    function hide() {
        contents.forEach(item => {
            item.style.display = "none";
        })

        items.forEach(item => {
            item.classList.remove("active")
        })
    }

    function show(i = 0) {
        contents[i].style.display = "block"
        items[i].classList.add("active")
    }
    hide()
    show()


    // group.addEventListener("click", (event) => {
    //     const target = event.target

    //     if (target.classList.contains(".nav-box") || target.classList.contains(".fas")) {

    //         items.forEach((item, i) => {

    //             if (target == item) {
    //                 hide()
    //                 show(i)
    //             }

    //         })
    //     }
    // })
    items.forEach(item => {
        item.addEventListener("click", (event) => {
            const target = event.target


            items.forEach((item, i) => {

                if (target == item) {
                    hide()
                    show(i)
                }
            })


        })
    })

})


