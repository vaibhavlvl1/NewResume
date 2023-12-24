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



    // scroll 

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;

        $(".front1").css('transform', `translate(-7%,calc(70% - ${offset * -1.0}px))`);

    })

})


