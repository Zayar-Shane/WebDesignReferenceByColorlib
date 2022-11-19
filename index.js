// Navbar 
const menuTag = document.getElementsByClassName("menu")[0];
const box1Tag = document.getElementsByClassName("box1")[0];
const box2Tag = document.getElementsByClassName("box2")[0];
const box3Tag = document.getElementsByClassName("box3")[0];
const navbarTag = document.getElementsByClassName("navbar")[0];

menuTag.addEventListener("click", () => {
    console.log("Hello");
    if(menuTag.classList.contains("active")) {
        box1Tag.classList.remove("rotateX");
        box3Tag.classList.remove("rotateY");
        box2Tag.classList.remove("box2Div");
        menuTag.classList.remove("active");
        navbarTag.classList.remove("transformDiv");
    } else {
        box1Tag.classList.add("rotateX");
        box3Tag.classList.add("rotateY");
        box2Tag.classList.add("box2Div");
        navbarTag.classList.add("transformDiv");
        menuTag.classList.add("active");
    }
})