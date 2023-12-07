

// adding parallax to div and background


front = document.querySelector(".front1")

window.addEventListener("scroll", (e) => {
    let offset = window.scrollY;

    front.style.transform = `translate(-7%,calc(70% - ${offset * 1.0}px))`;

})