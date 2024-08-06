const button = document.querySelector(".js-button");

button.addEventListener("click", check);

function check() {
    let email = document.querySelector(".js-email");

    const error = document.querySelector("main .form .input p");

    const media = window.matchMedia("(max-width: 500px)");

    if (!(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email.value))) {
        email.style.borderColor = "hsl(354, 100%, 66%)";
        error.style.visibility = "visible";
    } else {
        email.style.borderColor = "hsla(0, 0%, 59%, 0.5)";
        error.style.visibility = "hidden";
        email.value = "";
    }

    if (media.matches && error.style.visibility === "visible") {
        error.style.marginBottom = "20px";
    } else {
        error.style.marginBottom = "0";
    }
}