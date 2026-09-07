// ============================================
// Smooth Scroll Navigation
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Navbar Active State
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    }
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// Responsive Navigation Menu (Mobile)
// ============================================

function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    
    // This function could be enhanced later for mobile hamburger menu
    // For now, the CSS handles mobile responsiveness
}

document.addEventListener('DOMContentLoaded', initMobileMenu);

// ============================================
// Project Card Click Effects
// ============================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Utility Functions
// ============================================

// Get current scroll position
function getScrollPosition() {
    return window.scrollY || document.documentElement.scrollTop;
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// Console Welcome Message
// ============================================

console.log(`
%c🔒 Welcome to Mohammad Nawab's Portfolio 🔒
%cCloud Security & SecDevOps Engineer

Check out the projects and feel free to reach out!
https://github.com/mohammadnawab
`, 'color: #e94560; font-size: 16px; font-weight: bold;', 'color: #ecf0f1; font-size: 12px;');
