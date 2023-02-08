export function runMenu() {
    let menu = document.getElementById("menu");
    let close = menu.querySelector("button");
    close.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
}
