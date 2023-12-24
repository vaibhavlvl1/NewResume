$(function () {

    // adding menu button expand and collapse functionality
    let flag = false;

    $(".menu-collapse").on("click", function () {

        if (flag == false) {

            $(".menubar-list").animate({ right: "0" }, "fast")
            flag = true;
        }
        else if (flag == true) {
            $(".menubar-list").animate({ right: "-100%" }, "slow")
            flag = false;
        }
    })


    // adding menu items active class on click

    $(".menubar-list-item").on("click", function () {
        $(this).addClass("active").siblings().removeClass('active');
    })

})


window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY * .2}px`) // Update method
})


