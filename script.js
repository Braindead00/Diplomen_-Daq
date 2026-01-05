const mouse = document.getElementsByClassName("mishka")[0];

mouse.style.transition = "opacity 0.4s ease";

window.addEventListener("scroll", function () {
    mouse.style.opacity = "0";

    setTimeout(() => {
        mouse.remove();
    }, 400);
}, { once: true });
