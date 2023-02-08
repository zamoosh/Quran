export function runHeader() {
    let burger_menu = document.getElementById("burger_menu");
    burger_menu.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
}
