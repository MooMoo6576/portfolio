// ==========================================
// DATA OBJECTS - Centralized content management
// ==========================================

const aboutData = {
    name: 'Deandrie Ueckermann',
    bio: 'Passionate developer with experience in HTML, CSS, and JavaScript. I love building creative and impactful web projects.',
    social: [
        {
            platform: 'GitHub',
            url: 'https://github.com/MooMoo6576',
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/deandrie-ueckermann-37998a264',
        }
    ]
};

// Example: Display bio in About section
window.addEventListener('DOMContentLoaded', () => {
    const introCard = document.querySelector('.intro-card');
    if (introCard) {
        introCard.innerHTML = `<p>${aboutData.bio}</p>`;
    }
});
