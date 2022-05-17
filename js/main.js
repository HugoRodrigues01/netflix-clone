window.addEventListener("scroll", controlScrollFunctions)

controlScrollFunctions()

function controlScrollFunctions() {

    onScrollFunction()

}

function onScrollFunction() {

    if (scrollY > 0) {
        mainmenu.classList.add("scroll")

    } else {
        mainmenu.classList.remove("scroll")
    }

}


