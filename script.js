// ==================== DARK MODE TOGGLE ====================
const darkModeBtn = document.getElementById('darkModeBtn');
const htmlElement = document.documentElement;

// Check for saved dark mode preference or default to light mode
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon();
}

// Dark mode toggle functionality
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    const isNowDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isNowDark);
    
    updateDarkModeIcon();
});

function updateDarkModeIcon() {
    const icon = darkModeBtn.querySelector('.icon');
    const isDark = document.body.classList.contains('dark-mode');
    icon.textContent = isDark ? '☀️' : '🌙';
}

// ==================== LANGUAGE SWITCHER ====================
const langBtn = document.getElementById('langBtn');
let currentLanguage = localStorage.getItem('language') || 'en';

langBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    
    if (currentLanguage === 'ar') {
        window.location.href = 'index-ar.html';
    } else {
        window.location.href = 'index.html';
    }
});

// Update button text based on current language
window.addEventListener('load', () => {
    const btnText = langBtn.querySelector('span');
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('index-ar')) {
        currentLanguage = 'ar';
        btnText.textContent = 'English';
    } else {
        currentLanguage = 'en';
        btnText.textContent = 'عربي';
    }
});

// ==================== NAVIGATION ACTIVE STATE ====================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLL FOR NAV LINKS ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .stat').forEach(element => {
    observer.observe(element);
});

// ==================== HEADER BACKGROUND ON SCROLL ====================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ==================== FORM VALIDATION (IF NEEDED LATER) ====================
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== MOBILE MENU TOGGLE (OPTIONAL) ====================
// Add this if you want to implement a mobile menu later
function initMobileMenu() {
    // Can be expanded with hamburger menu functionality
    const headerControls = document.querySelector('.header-controls');
    
    // Mobile menu implementation can go here
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Reset any mobile menu states if needed
        }
    });
}

initMobileMenu();

// ==================== SCROLL TO TOP FUNCTIONALITY ====================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Create scroll-to-top button
const createScrollToTopBtn = () => {
    const btn = document.createElement('button');
    btn.textContent = '↑';
    btn.className = 'scroll-to-top';
    btn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        font-size: 1.5rem;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    btn.addEventListener('click', scrollToTop);
    
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.1)';
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
};

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopBtn);

// ==================== PREVENT BODY SCROLL ON MOBILE MENU (OPTIONAL) ====================
function preventScroll(e) {
    e.preventDefault();
}

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Press 'D' to toggle dark mode
    if (e.key.toLowerCase() === 'd' && e.ctrlKey) {
        e.preventDefault();
        darkModeBtn.click();
    }
    
    // Press 'L' to toggle language
    if (e.key.toLowerCase() === 'l' && e.ctrlKey) {
        e.preventDefault();
        langBtn.click();
    }
    
    // Press 'T' to scroll to top
    if (e.key.toLowerCase() === 't' && e.ctrlKey) {
        e.preventDefault();
        scrollToTop();
    }
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c Welcome to Waleed Mohamed Portfolio! ', 'background: #007bff; color: white; font-size: 14px; padding: 5px 10px; border-radius: 3px;');
console.log('%c SEO Specialist & Digital Marketing Expert ', 'color: #007bff; font-size: 12px;');
