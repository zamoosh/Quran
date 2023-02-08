document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".side-menu");
    let close = menu.querySelector("button");
    close.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    let burger_menu = document.getElementById("burger_menu");
    burger_menu.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
