$(function () {
    window.addEventListener("scroll", () => {
        let offset = window.scrollY;

        $(".base").css('transform', `translate(0%,calc(0% - ${offset * -.8}px))`);

        $(".front").css('transform', `translate(0%,calc(0% - ${offset * -.3}px))`);

        $(".middle").css('transform', `translate(0%,calc(0% - ${offset * -.5}px))`);
        $(".ground").css('transform', `translate(0%,calc(50% - ${offset * -.1}px))`);
        $(".profile").css('transform', `translate(0%,calc(10% - ${offset * -.8}px))`);
    })
})