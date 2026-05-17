
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
});

function changeSide(newElement, currentElement) {
    document.getElementById(currentElement).style.opacity = "0"
    document.getElementById(currentElement).style.display = "none"
    document.getElementById(newElement).style.opacity = "1"
    document.getElementById(newElement).style.display = "inline"
}

const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {

    pupils.forEach((pupil) => {

        const eye = pupil.parentElement;

        const rect = eye.getBoundingClientRect();

        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(
            e.clientY - eyeY,
            e.clientX - eyeX
        );

        const distance = 8;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupil.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});

function wait(ms) {
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

async function capyBlink() {

    const eyelids =
        document.getElementsByClassName("eyelid");

    for (const eyelid of eyelids) {
        eyelid.style.height = "140%";
    }

    await wait(150);

    for (const eyelid of eyelids) {
        eyelid.style.height = "0%";
    }
}

setInterval(capyBlink, 4000);

function changeSlide() {
    const image1 = document.getElementById("capybara-in-pool")
    const image2 = document.getElementById("capybara-in-wild")

    if (image1.style.display == "none") {
        image2.style.display = "none";
        image1.style.display = "block";
    } else {
        image1.style.display = "none";
        image2.style.display = "block";
    }
}