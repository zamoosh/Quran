document.addEventListener("DOMContentLoaded", function () {
    let menu_btn = document.querySelector(".header__menu-btn");
    let menu_btn__burger = document.querySelector(".header__menu-btn__burger");
    let side_menu = document.querySelector(".side-menu");

    menu_btn.addEventListener("click", function () {
        menu_btn__burger.classList.toggle("open");
        console.log(menu_btn__burger.classList);
        if (menu_btn__burger.classList.contains("open"))
            side_menu.classList.add("open");
        else
            side_menu.classList.remove("open");

    });

    // let menu = document.querySelector(".side-menu");
    // let close = menu.querySelector("button");
    // close.addEventListener("click", function () {
    //     menu.classList.toggle("show");
    // });
    //
    // let burger_menu = document.getElementById("burger_menu");
    // burger_menu.addEventListener("click", function () {
    //     menu.classList.toggle("show");
    // });
});
