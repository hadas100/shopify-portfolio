// ========== Dynamic Content Builder ==========
function buildDynamicContent(lang = 'en') {
    const data = portfolioData[lang];
    currentLanguage = lang;

    // Update document direction
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

    // Update shared components (navigation, footer) using components.js
    if (typeof updatePageComponents === 'function') {
        updatePageComponents(data, { isProjectPage: false });
    }

    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `${data.hero.title}<br><span class="gradient-text">${data.hero.titleGradient}</span>`;
    }

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = data.hero.description;

    const heroBtns = document.querySelectorAll('.hero-buttons .btn');
    if (heroBtns[0]) heroBtns[0].textContent = data.hero.btnProjects;
    if (heroBtns[1]) heroBtns[1].textContent = data.hero.btnContact;

    // Update stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        if (data.hero.stats[index]) {
            stat.querySelector('.stat-number').textContent = data.hero.stats[index].number;
            stat.querySelector('.stat-label').textContent = data.hero.stats[index].label;
        }
    });

    // Update about section
    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) aboutTitle.textContent = data.about.title;

    const aboutSubtitle = document.querySelector('.about .section-subtitle');
    if (aboutSubtitle) aboutSubtitle.textContent = data.about.subtitle;

    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        const paragraphs = aboutText.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            if (data.about.paragraphs[index]) {
                p.textContent = data.about.paragraphs[index];
            }
        });
    }

    // Update highlights
    const highlights = document.querySelectorAll('.highlight span');
    highlights.forEach((highlight, index) => {
        if (data.about.highlights[index]) {
            highlight.textContent = data.about.highlights[index];
        }
    });

    // Update skills section
    const skillsTitle = document.querySelector('.skills .section-title');
    if (skillsTitle) skillsTitle.textContent = data.skills.title;

    const skillsSubtitle = document.querySelector('.skills .section-subtitle');
    if (skillsSubtitle) skillsSubtitle.textContent = data.skills.subtitle;

    // Build skills dynamically
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = data.skills.categories.map(category => `
            <div class="skill-category">
                <h3><i class="${category.icon}"></i> ${category.title}</h3>
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Update projects section
    const projectsTitle = document.querySelector('.projects .section-title');
    if (projectsTitle) projectsTitle.textContent = data.projects.title;

    const projectsSubtitle = document.querySelector('.projects .section-subtitle');
    if (projectsSubtitle) projectsSubtitle.textContent = data.projects.subtitle;

    // Build projects dynamically
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = data.projects.list.map(project => `
            <div class="project-card" data-project="${project.id}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <a href="${project.link}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-meta">
                        <span><i class="fas fa-clock"></i> ${project.year}</span>
                        <span><i class="fas fa-code"></i> ${project.tech}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Build testimonials section
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid && data.testimonials) {
        testimonialsGrid.innerHTML = data.testimonials.reviews.map(review => `
            <div class="testimonial-card">
                <div class="testimonial-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
                <p class="testimonial-text">"${review.text}"</p>
                <div class="testimonial-author">
                    <div class="author-info">
                        <h4>${review.name}</h4>
                        <p>${review.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Build FAQ section
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer && data.faq) {
        faqContainer.innerHTML = data.faq.questions.map((item, index) => `
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(${index})">
                    <span>${item.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
    }

    // Update testimonials section titles
    const testimonialsTitle = document.querySelector('.testimonials .section-title');
    if (testimonialsTitle && data.testimonials) testimonialsTitle.textContent = data.testimonials.title;

    const testimonialsSubtitle = document.querySelector('.testimonials .section-subtitle');
    if (testimonialsSubtitle && data.testimonials) testimonialsSubtitle.textContent = data.testimonials.subtitle;

    // Update FAQ section titles
    const faqTitle = document.querySelector('.faq .section-title');
    if (faqTitle && data.faq) faqTitle.textContent = data.faq.title;

    const faqSubtitle = document.querySelector('.faq .section-subtitle');
    if (faqSubtitle && data.faq) faqSubtitle.textContent = data.faq.subtitle;

    // Update contact section
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) contactTitle.textContent = data.contact.title;

    const contactSubtitle = document.querySelector('.contact .section-subtitle');
    if (contactSubtitle) contactSubtitle.textContent = data.contact.subtitle;

    // Build contact items dynamically
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = data.contact.items.map(item => `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.value}</p>
                </div>
            </div>
        `).join('') +
        `<div class="contact-item social-links">
            <div class="contact-icon">
                <i class="fas fa-share-alt"></i>
            </div>
            <div>
                <h4>${data.contact.social.title}</h4>
                <div class="social-buttons">
                    ${data.contact.social.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="${link.name}">
                            <i class="${link.icon}"></i> ${link.name}
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>`;
    }

    // Update contact form
    const formTitle = document.querySelector('.form-title');
    if (formTitle) formTitle.textContent = data.contact.form.title;

    const nameInput = document.querySelector('#name');
    if (nameInput) nameInput.placeholder = data.contact.form.namePlaceholder;

    const emailInput = document.querySelector('#email');
    if (emailInput) emailInput.placeholder = data.contact.form.emailPlaceholder;

    const subjectInput = document.querySelector('#subject');
    if (subjectInput) subjectInput.placeholder = data.contact.form.subjectPlaceholder;

    const messageInput = document.querySelector('#message');
    if (messageInput) messageInput.placeholder = data.contact.form.messagePlaceholder;

    const submitText = document.querySelector('.submit-text');
    if (submitText) submitText.textContent = data.contact.form.submitButton;

    // Update contact CTA
    const ctaTitle = document.querySelector('.contact-cta h3');
    if (ctaTitle) ctaTitle.textContent = data.contact.cta.title;

    const ctaDesc = document.querySelector('.contact-cta p');
    if (ctaDesc) ctaDesc.textContent = data.contact.cta.description;

    const contactButtons = document.querySelector('.contact-buttons');
    if (contactButtons) {
        contactButtons.innerHTML = `
            <a href="${data.contact.cta.consultationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent">
                <i class="fas fa-calendar-check"></i> ${data.contact.cta.btnConsultation}
            </a>
            <a href="mailto:${data.email}" class="btn btn-primary">
                <i class="fas fa-envelope"></i> ${data.contact.cta.btnEmail}
            </a>
            <a href="tel:+972583261441" class="btn btn-secondary">
                <i class="fas fa-phone"></i> ${data.contact.cta.btnPhone}
            </a>
        `;
    }

    // Note: Footer is updated by updatePageComponents() from components.js

    // Re-initialize animations after content change
    initAnimations();
}

// ========== Language Switcher (Deprecated - use LanguageManager) ==========
// Kept for backward compatibility
function switchLanguage(lang) {
    if (typeof LanguageManager !== 'undefined') {
        LanguageManager.switchLanguage(lang, 'main');
    } else {
        // Fallback if LanguageManager not loaded
        buildDynamicContent(lang);
        localStorage.setItem('preferredLanguage', lang);
    }
}

// ========== Initialize Animations ==========
function initAnimations() {
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

        // Project card click handling
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn')) {
                const detailsBtn = card.querySelector('.btn');
                if (detailsBtn) {
                    window.location.href = detailsBtn.getAttribute('href');
                }
            }
        });

        // Add cursor effect
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
}

// ========== Smooth Scrolling Navigation ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Language Manager (handles language loading and switching)
    if (typeof LanguageManager !== 'undefined') {
        LanguageManager.init({
            onLanguageChange: buildDynamicContent,
            pageType: 'main'
        });
        currentLanguage = LanguageManager.getCurrentLanguage();
    } else {
        // Fallback if LanguageManager not loaded
        const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
        buildDynamicContent(savedLanguage);
    }
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

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm?.querySelector('.btn-submit');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function(e) {
            const submitText = submitBtn.querySelector('.submit-text');

            // Client-side validation only
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                e.preventDefault();
                showFormMessage(portfolioData[currentLanguage].contact.form.errorMessage, 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                showFormMessage(portfolioData[currentLanguage].contact.form.errorMessage, 'error');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = portfolioData[currentLanguage].contact.form.sending;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';

            // Let the form submit normally - FormSubmit will handle it and redirect back
        });

        // Show success message if redirected back with success parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('submitted') === 'true') {
            showFormMessage(portfolioData[currentLanguage].contact.form.successMessage, 'success');
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    // Helper function to show form messages
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';

            // Auto-hide after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Initialize
    highlightNavigation();
});

// ========== FAQ Toggle Function ==========
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];

    if (!clickedItem) return;

    const isActive = clickedItem.classList.contains('active');

    // Close all FAQ items
    faqItems.forEach(item => {
        item.classList.remove('active');
    });

    // Toggle the clicked item
    if (!isActive) {
        clickedItem.classList.add('active');
    }
}

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
