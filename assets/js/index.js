document.addEventListener("DOMContentLoaded", function () {
    // Menu button
    let menu_btn = document.querySelector(".header__menu-btn");
    let menu_btn__burger = document.querySelector(".header__menu-btn__burger");
    let side_menu = document.querySelector(".side-menu");

    menu_btn.addEventListener("click", function () {
        menu_btn__burger.classList.toggle("open");
        if (menu_btn__burger.classList.contains("open")) {
            side_menu.classList.add("open");
            document.body.style.overflowY = 'hidden';
        }
        else {
            side_menu.classList.remove("open");
            document.body.style.overflowY = 'visible';
        }

    });
    // Menu button

    // Tabs
    let tab_buttons = document.querySelectorAll('.side-menu__btn-group button');
    tab_buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            tab_buttons.forEach(function (b) {
                b.classList.remove('active');
                let tab = document.querySelector(b.dataset.bsTarget);
                tab.classList.remove('show');
                tab.classList.remove('active');
            });

            btn.classList.toggle('active');
            let tab_panel = document.querySelector(btn.dataset.bsTarget);
            tab_panel.classList.toggle("show");
            tab_panel.classList.toggle("active");
        });
    });
    // Tabs
});
