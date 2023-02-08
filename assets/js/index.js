document.addEventListener("DOMContentLoaded", function () {
    // Menu button
    // Menu button


    // Tabs
    let tab_buttons = document.querySelectorAll(".side-menu__btn-group button");
    tab_buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            tab_buttons.forEach(function (b) {
                b.classList.remove("active");
                let tab = document.querySelector(b.dataset.bsTarget);
                tab.classList.remove("show");
                tab.classList.remove("active");
            });

            btn.classList.toggle("active");
            let tab_panel = document.querySelector(btn.dataset.bsTarget);
            tab_panel.classList.toggle("show");
            tab_panel.classList.toggle("active");
        });
    });
    // Tabs
});
