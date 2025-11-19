// ========== Smooth Scrolling Navigation ==========
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Active navigation on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink?.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Animate elements on scroll
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

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(category);
    });

    // Observe highlights
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach((highlight, index) => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateX(-30px)';
        highlight.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(highlight);
    });

    // Count up animation for stats
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statObserver.observe(heroStats);
    }

    function animateStats() {
        stats.forEach(stat => {
            const target = stat.textContent;
            const isPercent = target.includes('%');
            const isPlus = target.includes('+');
            let numericTarget = parseInt(target);

            let current = 0;
            const increment = numericTarget / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericTarget) {
                    current = numericTarget;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (isPlus ? '+' : '') + (isPercent ? '%' : '');
            }, 30);
        });
    }

    // Project card click handling
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // If the click target is not the "View Details" button, trigger the button click
            if (!e.target.classList.contains('btn')) {
                const detailsBtn = card.querySelector('.btn');
                if (detailsBtn) {
                    window.location.href = detailsBtn.getAttribute('href');
                }
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add cursor effect to project cards
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Initialize
    highlightNavigation();
});

// ========== Typed Text Effect ==========
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ========== Console Easter Egg ==========
console.log('%c👨‍💻 Shopify Developer Portfolio', 'color: #96bf48; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with vanilla JavaScript, HTML5, and CSS3', 'color: #b0b8d4; font-size: 14px;');
console.log('%c💼 Looking for a Shopify developer? Let\'s connect!', 'color: #96bf48; font-size: 14px;');
