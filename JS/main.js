// start spinner
let spinner = document.getElementById("sp");

window.onload = function () {
    document.body.style.overview = "none";

    setTimeout(function () {
        spinner.style.display = "none";
        document.body.style.overview = "auto";
    },
        4000)
}
//end spinner

// start menuIcon
let menuIcon = document.querySelector(".menu-icon");
let iconsLinks = document.querySelector(".icons-links");

menuIcon.addEventListener("click", () => {
    iconsLinks.classList.toggle("open")
})
//end menuIcon

//start topBtn
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", fun);

function fun() {

    if (document.documentElement.scrollTop >= 700) {

        topBtn.style.display = "block"

    } else {
        topBtn.style.display = "none"
    }
}
//end topBtn


// start scrolltop 
topBtn.addEventListener("click", fun2);

function fun2() {

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
//end scrolltop
