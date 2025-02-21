// GSAP Animation for Floating Icons
const icons = document.querySelectorAll('.icon');
const profilePhoto = document.querySelector('.profile-photo');

icons.forEach((icon) => {
    gsap.to(icon, {
        rotation: 360,
        repeat: -1,
        duration: 5,
        ease: "linear",
        yoyo: true,
        stagger: {
            amount: 1,
            from: "random"
        }
    });
});

// Button Hover Effects
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.1,
            backgroundColor: "#00ffcc",
            color: "#000",
            duration: 0.3,
            ease: "power1.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            backgroundColor: "#000",
            color: "#fff",
            duration: 0.3,
            ease: "power1.out"
        });
    });
});

// Smooth Scrolling
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        gsap.to(window, {
            scrollTo: {
                y: targetSection,
                offsetY: 70 // Adjust for sticky navbar height
            },
            duration: 1,
            ease: "power2.inOut"
        });
    });
});