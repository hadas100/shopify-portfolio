// ========== Advanced Animations Controller ==========

class AnimationController {
    constructor() {
        this.observers = [];
        this.init();
    }

    init() {
        // Initialize all animation features
        this.initScrollAnimations();
        this.initCounterAnimations();
        this.initParallaxEffects();
        this.initMouseFollowEffects();
        this.initStaggerAnimations();
    }

    // ========== Scroll-based Animations ==========
    initScrollAnimations() {
        const options = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .scale-in, .slide-in-left, .slide-in-right, .animate-on-scroll'
        );

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        this.observers.push(observer);
    }

    // ========== Counter Animation (Number Count Up) ==========
    initCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number, .result-number, .count-up');

        const animateCounter = (element) => {
            const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
            if (isNaN(target)) return;

            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            const suffix = element.textContent.replace(/[0-9]/g, '');

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target + suffix;
                }
            };

            updateCounter();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
        this.observers.push(counterObserver);
    }

    // ========== Parallax Scroll Effects ==========
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        const handleScroll = () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // ========== Mouse Follow Effects ==========
    initMouseFollowEffects() {
        const cards = document.querySelectorAll('.project-card, .skill-category, .solution-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    // ========== Stagger Animation for Lists ==========
    initStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('.stagger-animation');

        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('fade-in-up');
                        }, index * 100);
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        staggerContainers.forEach(container => staggerObserver.observe(container));
        this.observers.push(staggerObserver);
    }

    // ========== Cleanup Method ==========
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
    }
}

// ========== Smooth Scroll Enhancement ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== Add Ripple Effect to Buttons ==========
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, button');

    buttons.forEach(button => {
        button.classList.add('ripple-effect');
    });
}

// ========== Background Parallax for Hero ==========
function initHeroParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;

                // Parallax effect
                heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
        if (window.pageYOffset > window.innerHeight) return;

        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;

        heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    });
}

// ========== Animated Text Gradient ==========
function initAnimatedTextGradients() {
    // Removed - user doesn't want animated gradient on text
}

// ========== Add Particle Effects to Hero ==========
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-bg';

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
    }

    hero.appendChild(particlesContainer);
}

// ========== Loading Animation ==========
function initPageLoadAnimation() {
    document.body.style.opacity = '0';

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
}

// ========== Scroll Progress Indicator ==========
function initScrollProgressBar() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    }, { passive: true });
}

// ========== Initialize All Animations ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main animation controller
    const animationController = new AnimationController();

    // Initialize additional effects
    initSmoothScroll();
    initRippleEffect();
    initHeroParallax();
    initAnimatedTextGradients();
    initParticleBackground();
    initScrollProgressBar();
    // initPageLoadAnimation(); // Optional - can be enabled if desired

    // Trigger animations for elements already in viewport
    setTimeout(() => {
        const elementsInView = document.querySelectorAll('.hero-title, .hero-description, .hero-buttons, .hero-card');
        elementsInView.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 100);
        });
    }, 100);

    // Log initialization
    console.log('🎨 Advanced animations initialized');
});

// ========== Export for use in other scripts ==========
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AnimationController };
}
