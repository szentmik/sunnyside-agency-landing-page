const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");


document.addEventListener("click", (event) => {
    if (menuBtn.contains(event.target)) {

        mobileMenu.classList.toggle("show-menu");
        menuBtn.classList.toggle("sligthly-transparent");

    } else {

        mobileMenu.classList.remove("show-menu");

        if (!mobileMenu.classList.contains("show-menu")) {
            menuBtn.classList.remove("sligthly-transparent");
        }
    }
});

