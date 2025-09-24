// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    feather.replace(); // Refresh icons after DOM change
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Form validation for contact forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        let isValid = true;
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('border-red-500');
                isValid = false;
            } else {
                input.classList.remove('border-red-500');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            const errorMessage = this.querySelector('.form-error') || document.createElement('p');
            errorMessage.textContent = 'Please fill in all required fields.';
            errorMessage.classList.add('form-error', 'text-red-500', 'text-sm', 'mt-2');
            
            if (!this.querySelector('.form-error')) {
                this.appendChild(errorMessage);
            }
        }
    });
});

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === 'index.html' && linkHref === '/') ||
        (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('text-indigo-600', 'font-medium');
        link.classList.remove('hover:text-indigo-600');
    }
});

// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
});
