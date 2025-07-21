// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add click handlers to nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
        
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show demo message
    const messageDiv = document.getElementById('form-message');
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('bg-green-100', 'text-green-800');
    
    // Reset form
    this.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
});

// Cookie banner functionality
function showCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 2000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').classList.remove('show');
}

function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    document.getElementById('cookie-banner').classList.remove('show');
}

// Privacy modal functions
function openPrivacyModal() {
    document.getElementById('privacy-modal').classList.remove('hidden');
}

function closePrivacyModal() {
    document.getElementById('privacy-modal').classList.add('hidden');
}

// Initialize cookie banner
showCookieBanner();

// Add click handler for privacy link in footer
document.querySelector('a[href="#privacidad"]').addEventListener('click', function(e) {
    e.preventDefault();
    openPrivacyModal();
});

// Close modal when clicking outside
document.getElementById('privacy-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePrivacyModal();
    }
});

// Simulate fast loading (WP Fastest Cache effect)
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// SEO-friendly navigation highlighting
window.addEventListener('scroll', function() {
    const sections = ['inicio', 'tramites', 'tecnologia', 'guias', 'contacto'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-blue-600');
        }
    });
});
