
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuToggle.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// HEADER SCROLL EFFECT

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(10, 10, 9, 0.98)";
    } else {
        header.style.background = "rgba(16, 16, 15, 0.94)";
    }
});


// FULL MENU EXPANSION

const viewMenu = document.getElementById("viewMenu");
const extraMenu = document.getElementById("extraMenu");

viewMenu.addEventListener("click", () => {

    const isOpen = extraMenu.classList.toggle("active");

    if (isOpen) {

        viewMenu.textContent = "Show Less ↑";

        setTimeout(() => {
            extraMenu.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }, 350);

    } else {

        viewMenu.textContent = "View Full Menu ↓";

    }

});


// SCROLL REVEAL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// GALLERY LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-image").forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightbox.classList.add("active");

    });

});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});
