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
// HERO SECTION ANIMATIONS
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
// ABOUT SECTION
// =======================
gsap.from(".about-col-1", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".about-col-2", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from(".about-col-3", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
});

// =======================
// SECTION TITLES
// =======================
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: { trigger: title, start: "top 80%" },
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power2.out"
    });
});

// =======================
// EDUCATION TIMELINE
// =======================
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 85%" },
        opacity: 0,
        x: -25,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// =======================
// CERTIFICATIONS
// =======================
gsap.utils.toArray('.cert-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        opacity: 0,
        y: 25,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// =======================
// TECH STACK
// =======================
gsap.utils.toArray('.tech-icon-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 85%" },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: i * 0.05,
        ease: "power2.out"
    });
});

// =======================
// PROJECT CARDS
// =======================
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// =======================
// PROJECTS INFINITE SLIDER
// =======================
// =======================
// PROJECTS INFINITE SLIDER (FIXED)
// =======================
const slider = document.getElementById("slider");
let autoScroll;

// clone cards ONCE
const cards = [...slider.children];
cards.forEach(card => slider.appendChild(card.cloneNode(true)));

const resetPoint = slider.scrollWidth / 2;

function startAutoScroll() {
    autoScroll = setInterval(() => {
        slider.scrollLeft += 1.2;

        // reset BEFORE hitting edge
        if (slider.scrollLeft >= resetPoint - 5) {
            slider.scrollLeft = 1;
        }
    }, 16);
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

startAutoScroll();

// pause on hover
slider.addEventListener("mouseenter", stopAutoScroll);
slider.addEventListener("mouseleave", startAutoScroll);

// arrows (safe bounds)
document.getElementById("nextBtn").onclick = () => {
    gsap.to(slider, {
        scrollLeft: slider.scrollLeft + 350,
        duration: 0.5,
        ease: "power2.out"
    });
};

document.getElementById("prevBtn").onclick = () => {
    gsap.to(slider, {
        scrollLeft: Math.max(slider.scrollLeft - 350, 0),
        duration: 0.5,
        ease: "power2.out"
    });
};

// =======================
// CONTACT SECTION
// =======================
gsap.from(".contact-left", {
    scrollTrigger: { trigger: "#contact", start: "top 70%" },
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".contact-form-wrapper", {
    scrollTrigger: { trigger: "#contact", start: "top 70%" },
    opacity: 0,
    x: 40,
    duration: 0.8,
    ease: "power2.out"
});

// =======================
// TITLE UNDERLINES
// =======================
gsap.utils.toArray('.title-underline').forEach(line => {
    gsap.from(line, {
        scrollTrigger: { trigger: line, start: "top 80%" },
        width: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// =======================
// CONTACT FORM SUBMISSION
// =======================
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailto = `mailto:sanhithaac@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailto;
        alert("Opening your email client...");
        this.reset();
    });
}
