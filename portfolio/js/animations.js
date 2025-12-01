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
    const hero = document.querySelector('.hero');
    if (!heroBg || !hero) return;

    const heroVisual = document.querySelector('.hero-visual');
    const heroLogo = document.querySelector('.hero-logo');
    const plexusLayers = document.querySelectorAll('.hero-plexus');
    const heroMesh = document.querySelector('.hero-mesh');

    let ticking = false;
    let scrollOffset = 0;
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;

    const applyParallax = () => {
        const translateX = mouseOffsetX * 0.8;
        const translateY = scrollOffset * 0.4 + mouseOffsetY * 0.8;
        heroBg.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(1.08)`;

        if (heroLogo) {
            heroLogo.style.transform = `translate3d(${mouseOffsetX * 0.6}px, ${mouseOffsetY * 0.6}px, 0)`;
        }

        if (heroMesh) {
            heroMesh.style.transform = `translate3d(${mouseOffsetX}px, ${mouseOffsetY}px, 0)`;
        }

        if (plexusLayers.length) {
            plexusLayers.forEach((layer, index) => {
                const factor = 0.6 + index * 0.25;
                layer.style.transform = `translate3d(${mouseOffsetX * factor}px, ${mouseOffsetY * factor}px, 0)`;
            });
        }

        ticking = false;
    };

    const requestTick = () => {
        if (!ticking) {
            window.requestAnimationFrame(applyParallax);
            ticking = true;
        }
    };

    window.addEventListener('scroll', () => {
        scrollOffset = Math.min(window.pageYOffset, window.innerHeight);
        requestTick();
    }, { passive: true });

    hero.addEventListener('mousemove', (e) => {
        const bounds = hero.getBoundingClientRect();
        const relativeX = (e.clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (e.clientY - bounds.top) / bounds.height - 0.5;

        mouseOffsetX = relativeX * 30;
        mouseOffsetY = relativeY * 30;
        requestTick();
    });

    hero.addEventListener('mouseleave', () => {
        mouseOffsetX = 0;
        mouseOffsetY = 0;
        requestTick();
    });

    requestTick();
}

// ========== Plexus Network Background ==========
function initHeroPlexus() {
    const canvases = document.querySelectorAll('.hero-plexus');
    if (!canvases.length) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const globalMouse = { x: null, y: null };

    document.addEventListener('mousemove', (e) => {
        globalMouse.x = e.clientX;
        globalMouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
        globalMouse.x = null;
        globalMouse.y = null;
    });

    canvases.forEach(canvas => {
        const container = canvas.parentElement;
        if (!container) return;
        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        let points = [];

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            buildPoints();
        };

        const buildPoints = () => {
            const count = Math.max(22, Math.floor((width + height) / 16));
            points = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 1 + Math.random() * 1.5,
                vx: (Math.random() - 0.5) * 0.55,
                vy: (Math.random() - 0.5) * 0.55
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update point positions
            points.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // gentle wrap-around
                if (p.x < -40) p.x = width + 40;
                if (p.x > width + 40) p.x = -40;
                if (p.y < -40) p.y = height + 40;
                if (p.y > height + 40) p.y = -40;

                // mild attraction to mouse
                if (globalMouse.x !== null) {
                    const rect = canvas.getBoundingClientRect();
                    const mx = globalMouse.x - rect.left;
                    const my = globalMouse.y - rect.top;
                    const dx = p.x - mx;
                    const dy = p.y - my;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    if (dist < 240) {
                        p.vx += (-dx / dist) * 0.006;
                        p.vy += (-dy / dist) * 0.006;
                    }
                }

                // damping
                p.vx = clamp(p.vx, -0.8, 0.8);
                p.vy = clamp(p.vy, -0.8, 0.8);
            });

            // determine render positions (pulled toward mouse for a "thread" feel)
            let mx = null, my = null;
            if (globalMouse.x !== null) {
                const rect = canvas.getBoundingClientRect();
                mx = globalMouse.x - rect.left;
                my = globalMouse.y - rect.top;
            }

            const renderPoints = points.map(p => {
                if (mx === null) return { x: p.x, y: p.y };
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const pull = Math.max(0, 1 - dist / 260) * 14; // visual tug distance
                const nx = dx / dist;
                const ny = dy / dist;
                return { x: p.x - nx * pull, y: p.y - ny * pull };
            });

            // draw lines
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const p1 = renderPoints[i];
                    const p2 = renderPoints[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist2 = dx * dx + dy * dy;
                    const maxDist = 170;
                    if (dist2 < maxDist * maxDist) {
                        const opacity = 1 - Math.sqrt(dist2) / maxDist;
                        ctx.strokeStyle = `rgba(150, 191, 72, ${opacity * 0.8})`;
                        ctx.lineWidth = 1.1;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // draw nodes
            renderPoints.forEach((p, idx) => {
                ctx.fillStyle = 'rgba(212, 255, 111, 1)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, points[idx].r, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(draw);
        };
        resize();
        draw();
        window.addEventListener('resize', resize);
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
    initHeroPlexus();
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
