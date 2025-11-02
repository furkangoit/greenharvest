// ====================================
// MOBILE MENU FUNCTIONALITY
// ====================================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Open mobile menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close mobile menu
menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Enable scrolling
});

// Close menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ====================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ====================================
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// FORM VALIDATION & SUBMISSION
// ====================================
const orderForm = document.getElementById('orderForm');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Email validation
emailInput.addEventListener('input', () => {
    const emailPattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    
    if (emailInput.value && !emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address');
    } else {
        emailInput.setCustomValidity('');
    }
});

// Form submission
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
        timestamp: new Date().toISOString()
    };
    
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your order! We will contact you soon.');
    
    // Reset form
    orderForm.reset();
});

// ====================================
// ADD TO CART FUNCTIONALITY
// ====================================
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const vegetableItem = e.target.closest('.vegetable-item');
        const vegetableName = vegetableItem.querySelector('.vegetable-name').textContent;
        const vegetablePrice = vegetableItem.querySelector('.vegetable-price').textContent;
        
        console.log('Added to cart:', {
            name: vegetableName,
            price: vegetablePrice
        });
        
        // Add animation
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        // Show feedback
        alert(`${vegetableName} added to cart!`);
    });
});

// ====================================
// HEADER SCROLL EFFECT
// ====================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ====================================
// LAZY LOADING IMAGES
// ====================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ====================================
// ANIMATION ON SCROLL
// ====================================
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

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ====================================
// CONSOLE WELCOME MESSAGE
// ====================================
console.log('%c🥬 Welcome to GreenHarvest! 🥕', 
    'font-size: 20px; font-weight: bold; color: #A1C487;');
console.log('%cFresh organic vegetables delivered to your doorstep!', 
    'font-size: 14px; color: #737373;');