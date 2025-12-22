// =======================
// GSAP SETUP
// =======================
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// =======================
// SMOOTH SCROLL NAVIGATION
// =======================
document.querySelectorAll('[data-scroll-to]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-scroll-to');
        const el = document.getElementById(target);

        if (el) {
            gsap.to(window, {
                duration: 1.1,
                scrollTo: { y: el, offsetY: 40 },
                ease: "power3.inOut"
            });
        }
    });
});

// =======================
// HERO SECTION
// =======================
gsap.from(".hero-text h1", {
    scrollTrigger: { trigger: "#home", start: "top center" },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-desc", {
    scrollTrigger: { trigger: "#home", start: "top center" },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".hero-actions", {
    scrollTrigger: { trigger: "#home", start: "top center" },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".photo-circle", {
    scrollTrigger: { trigger: "#home", start: "top center" },
    opacity: 0,
    scale: 0.85,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

// =======================
// ABOUT
// =======================
gsap.from(".about-col-1", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    x: -40,
    duration: 0.8
});

gsap.from(".about-col-2", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2
});

gsap.from(".about-col-3", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4
});

// =======================
// SECTION TITLES
// =======================
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: { trigger: title, start: "top 80%" },
        opacity: 0,
        y: 25,
        duration: 0.7
    });
});

// =======================
// PROJECT CARDS (ONLY ORIGINAL ONES)
// =======================
const slider = document.getElementById("slider");
const originalCards = Array.from(slider.children);

originalCards.forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 75%"
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.1
    });
});

// =======================
// PROJECTS INFINITE SLIDER (FIXED)
// =======================
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let autoScrollInterval;

const CARD_WIDTH = 392;
const AUTO_SCROLL_SPEED = 1;

// clone AFTER animations
originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add("clone");
    slider.appendChild(clone);
});

const resetPoint = slider.scrollWidth / 2;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        slider.scrollLeft += AUTO_SCROLL_SPEED;

        if (slider.scrollLeft >= resetPoint) {
            slider.scrollLeft = 0;
        }
    }, 16);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

startAutoScroll();

slider.addEventListener("mouseenter", stopAutoScroll);
slider.addEventListener("mouseleave", startAutoScroll);

nextBtn.onclick = () => {
    stopAutoScroll();
    slider.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });

    if (slider.scrollLeft + slider.clientWidth >= resetPoint) {
        setTimeout(() => slider.scrollLeft = 0, 300);
    }

    startAutoScroll();
};

prevBtn.onclick = () => {
    stopAutoScroll();

    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = resetPoint;
    }

    slider.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
    startAutoScroll();
};

// =======================
// CONTACT
// =======================
gsap.from(".contact-left", {
    scrollTrigger: { trigger: "#contact", start: "top 70%" },
    opacity: 0,
    x: -40,
    duration: 0.8
});

gsap.from(".contact-form-wrapper", {
    scrollTrigger: { trigger: "#contact", start: "top 70%" },
    opacity: 0,
    x: 40,
    duration: 0.8
});
