// ========== Static Site Interactions ==========
// This file adds interactivity (animations, accordion, etc.) WITHOUT modifying content

// ========== Scroll Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Add animation to cards
    const cards = document.querySelectorAll('.project-card, .feature-card, .skill-category, .faq-item, .contact-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add fade-in-up animation
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ========== FAQ Accordion ==========
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        if (!question || !answer) return;

        // Hide answer by default
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease-out, padding 0.3s ease-out';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';

        // Add click handler
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.paddingTop = '0';
                        otherAnswer.style.paddingBottom = '0';
                    }
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });

            // Toggle current item
            if (isOpen) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingTop = '1rem';
                answer.style.paddingBottom = '1rem';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });

        // Add transition to icon
        if (icon) {
            icon.style.transition = 'transform 0.3s ease';
        }
    });
});

// ========== Smooth Scroll for Anchor Links ==========
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Contact form handling (AJAX, no redirect)
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm?.querySelector('.btn-submit');
    const formMessage = document.getElementById('formMessage');
    const messages = {
        success: 'ההודעה נשלחה, אחזור אליכם בהקדם.',
        error: 'שגיאה בשליחת הטופס. נסו שוב או צרו קשר ישירות.',
        sending: 'שולחת...'
    };

    const showFormMessage = (message, type) => {
        if (!formMessage) return;
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    };

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitText = submitBtn.querySelector('.submit-text');
            const originalText = submitText?.textContent || '';

            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const subject = document.getElementById('subject')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (!name || !email || !subject || !message) {
                showFormMessage(messages.error, 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage(messages.error, 'error');
                return;
            }

            submitBtn.disabled = true;
            if (submitText) submitText.textContent = messages.sending;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                let result = {};
                try {
                    result = await response.json();
                } catch (err) {
                    result = {};
                }

                if (response.ok) {
                    showFormMessage(messages.success, 'success');
                    contactForm.reset();
                } else {
                    const errorMsg = Array.isArray(result.errors) && result.errors.length
                        ? result.errors.map(err => err.message).join(', ')
                        : result.message || messages.error;
                    showFormMessage(errorMsg, 'error');
                }
            } catch (err) {
                showFormMessage(messages.error, 'error');
            } finally {
                submitBtn.disabled = false;
                if (submitText) submitText.textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
            }
        });
    }
});

// ========== Back to Top Button ==========
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.type = 'button';
    backToTop.setAttribute('aria-label', 'חזרה לראש העמוד');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    const toggleBackToTop = () => {
        if (window.pageYOffset > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    };

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop);
});

// ========== Card Hover Effects ==========
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .related-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ========== Mobile Menu Toggle ==========
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ========== Navbar Scroll Effect ==========
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========== Lazy Load Images ==========
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ========== Stats Counter Animation ==========
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = element.textContent;
        const hasPlus = target.includes('+');
        const number = parseInt(target.replace(/\D/g, ''));

        if (isNaN(number)) return;

        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = hasPlus ? `${number}+` : number;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));
});

// ========== Parallax Effect for Hero Background ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg) {
        // Parallax movement - background moves slower than scroll
        const parallaxSpeed = scrolled * 0.5;

        // Zoom effect - background scales up slightly as you scroll
        const maxScroll = 800; // Maximum scroll distance for the effect
        const scrollProgress = Math.min(scrolled / maxScroll, 1);
        const scale = 1 + (scrollProgress * 0.15); // Scale from 1 to 1.15

        // Apply both effects
        heroBg.style.transform = `translateY(${parallaxSpeed}px) scale(${scale})`;
        heroBg.style.transformOrigin = 'center center';
    }
});
