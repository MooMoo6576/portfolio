// ==========================================
// DATA OBJECTS - Centralized content management
// ==========================================

const socialMediaData = [
    {
        platform: 'GitHub',
        description: 'Open source projects',
        followers: '',
        url: 'https://github.com/MooMoo6576',
        icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>`
    },
    {
        platform: 'LinkedIn',
        description: 'Professional network',
        followers: '',
        url: 'https://www.linkedin.com/in/deandrie-ueckermann-37998a264',
        icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>`
    }
];

const techStackData = [
    {
        name: 'HTML5',
        color: '#E34F26',
        icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
              </svg>`
    },
    {
        name: 'CSS3',
        color: '#1572B6',
        icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
              </svg>`
    },
    {
        name: 'JavaScript',
        color: '#F7DF1E',
        icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="#F7DF1E">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>`
    }
];

// ==========================================
// DOM CONTENT GENERATION FUNCTIONS
// ==========================================

function generateSocialCards() {
    const socialGrid = document.getElementById('social-grid');
    if (!socialGrid) return;
    
    socialGrid.innerHTML = socialMediaData.map(social => `
        <a href="${social.url}" class="social-card" target="_blank" rel="noopener noreferrer">
            <div class="social-icon">
                ${social.icon}
            </div>
            <div class="social-info">
                <h4>${social.platform}</h4>
                <p>${social.description}</p>
                <span class="follower-count">${social.followers}</span>
            </div>
        </a>
    `).join('');
}

function generateTechStack() {
    const techGrid = document.getElementById('tech-grid');
    if (!techGrid) return;
    
    techGrid.innerHTML = techStackData.map(tech => `
        <div class="tech-item">
            <div class="tech-icon">
                ${tech.icon}
            </div>
            <span>${tech.name}</span>
        </div>
    `).join('');
}

// ==========================================
// EVENT HANDLING FUNCTIONS
// ==========================================

function setupEventListeners() {
    // Handle data-action clicks
    document.addEventListener('click', function(e) {
        const action = e.target.getAttribute('data-action');
        if (action) {
            e.preventDefault();
            handleAction(action);
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function handleAction(action) {
    switch(action) {
        case 'learn-more':
            learnMore();
            break;
        case 'get-started':
            getStarted();
            break;
        default:
            console.log(`Unknown action: ${action}`);
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function learnMore() {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        showNotification("Let's dive deeper into the world of code!");
    }
}

function getStarted() {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        showNotification("Ready to start your coding journey? Contact us to begin!");
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const firstName = event.target.querySelector("input[placeholder=\"First Name\"]")?.value;
    const lastName = event.target.querySelector("input[placeholder=\"Last Name\"]")?.value;
    const email = event.target.querySelector("input[placeholder=\"Email\"]")?.value;
    const service = event.target.querySelector("select")?.value;
    const message = event.target.querySelector("textarea")?.value;
    
    // Enhanced validation
    const errors = [];
    if (!firstName) errors.push("First Name is required");
    if (!email) errors.push("Email is required");
    if (!isValidEmail(email)) errors.push("Please enter a valid email address");
    if (!message) errors.push("Project details are required");
    
    if (errors.length > 0) {
        showNotification("Please fix the following errors:\n" + errors.join("\n"), "error");
        return false;
    }
    
    // Show success message
    showNotification(`Thank you ${firstName}! We'll be in touch soon at ${email}`, "success");
    
    // Reset form
    event.target.reset();
    
    return false;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        maxWidth: '400px',
        backgroundColor: type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// ==========================================
// SCROLL EFFECTS
// ==========================================

function setupScrollEffects() {
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = "rgba(255, 255, 255, 0.98)";
                navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
            } else {
                navbar.style.background = "rgba(255, 255, 255, 0.95)";
                navbar.style.boxShadow = "none";
            }
        }
    });
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    // Generate dynamic content
    generateSocialCards();
    generateTechStack();
    
    // Setup event listeners
    setupEventListeners();
    setupScrollEffects();
    
    // Loading animation
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.5s ease-in-out";
    
    console.log("CodeDreams website initialized successfully!");
});
