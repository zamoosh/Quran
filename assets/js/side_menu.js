class SideMenu {
    static object = null;
    menu;
    menu_btn;
    menu_btn__burger;
    is_dragging = false;
    is_closed = true;
    initial_x = null;


    constructor(selector) {
        this.menu = document.querySelector(selector);
        this.menu_btn = document.querySelector(".header__menu-btn");
        this.menu_btn__burger = document.querySelector(".header__menu-btn__burger");
        SideMenu.object = this;

        this.clickableMenuBtn();
        // this.menu.addEventListener("mousedown", this.handleMouseDown);
        // this.menu.addEventListener("mouseup", this.handleMouseUp);
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
        this.menu.style.transform = null;
        if (this.menu_btn__burger.classList.contains("open")) {
            this.menu.classList.add("open");
            this.is_dragging = false;
            this.is_closed = false;
            document.body.classList.add("disabled");
            document.body.querySelector(".main").classList.add("disabled");
        } else {
            this.menu.classList.remove("open");
            document.body.classList.remove("disabled");
            document.body.querySelector(".main").classList.remove("disabled");
        }
    }

    closeMenu() {
        this.menu_btn__burger.classList.remove("open");
        this.menu.classList.remove("open");
        this.is_dragging = true;
        this.is_closed = true;
        document.body.classList.remove("disabled");
        document.body.querySelector(".main").classList.remove("disabled");
        this.menu.style.transform = 'translateX(100%)';
        this.menu.style.transform = null;
    }

    handleMouseDown(e) {
        SideMenu.object.initial_x = e.clientX;
        SideMenu.object.is_dragging = true;
        document.addEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseUp() {
        SideMenu.object.is_dragging = false;
        document.removeEventListener("mousemove", this.handleMouseMove);
        SideMenu.object.menu.style.transform = "translateX(0)";
    }

    handleMouseMove(e) {
        if (!this.is_dragging) {
            return;
        }

        var currentX = e.clientX;
        var diffX = currentX - this.initial_x;
        var speed = diffX * 1.5;  // Increase or decrease this value to control the speed
        this.menu.style.transform = "translateX(" + speed + "px)";

        if (diffX >= 100) {
            console.log("close");
            this.menu.closeMenu();
        }
    }
}
