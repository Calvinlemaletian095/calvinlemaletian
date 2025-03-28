let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down → Remove background
        header.classList.remove("transparent-bg");
    } else {
        // Scrolling up → Show background
        header.classList.add("transparent-bg");
    }

    lastScrollTop = scrollTop;
});

