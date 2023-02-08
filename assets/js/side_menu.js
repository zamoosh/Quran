class SideMenu {
    menu;
    menu_btn;
    menu_btn__burger;


    constructor(selector) {
        this.menu = document.querySelector(selector);
        this.menu_btn = document.querySelector(".header__menu-btn");
        this.menu_btn__burger = document.querySelector(".header__menu-btn__burger");

        this.clickableMenuBtn();
    }

    clickableMenuBtn() {
        let object = this;
        let main = document.querySelector(".main");

        this.menu_btn.addEventListener("click", function () {
            object.toggleMenu();
        });

        main.addEventListener("click", (e) => {
            if (object.menu.classList.contains("open"))
                if (!e.target.closest(".side-menu"))
                    object.toggleMenu();
        });
    }

    toggleMenu() {
        this.menu_btn__burger.classList.toggle("open");
        if (this.menu_btn__burger.classList.contains("open")) {
            this.menu.classList.add("open");
            document.body.classList.add("disabled");
            document.body.querySelector(".main").classList.add("disabled");
        } else {
            this.menu.classList.remove("open");
            document.body.classList.remove("disabled");
            document.body.querySelector(".main").classList.remove("disabled");
        }
    }
}
