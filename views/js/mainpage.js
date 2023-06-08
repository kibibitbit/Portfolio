function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal2() {
    const reveals = document.querySelectorAll(".reveal2",);

    for (let j = 0; j < reveals.length; j++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[j].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[j].classList.add("active");
        } else {
            reveals[j].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal)
window.addEventListener("scroll", reveal2)

function reveal0() {
    const reveals = document.querySelectorAll(".reveal0");

    for (let k = 0; k < reveals.length;k++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[k].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[k].classList.add("active");
        }
        else {
            reveals[k].classList.remove("active");
        }
    }
}

window.addEventListener("load", reveal0);