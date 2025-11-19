// ========== Shared HTML Components ==========
// This file contains reusable HTML components to eliminate code duplication

/**
 * Generates the navigation bar component
 * @param {Object} data - Navigation data (name, links)
 * @param {boolean} isProjectPage - Whether this is a project detail page
 * @param {boolean} includeLanguageSwitcher - Whether to include language switcher
 * @returns {string} Navigation HTML
 */
function createNavigation(data, isProjectPage = false, includeLanguageSwitcher = true) {
    const navLinks = isProjectPage
        ? `<li><a href="../index.html" class="nav-link">${data.backToPortfolio || 'Back to Portfolio'}</a></li>`
        : `
            <li><a href="#home" class="nav-link active">${data.nav.home}</a></li>
            <li><a href="#about" class="nav-link">${data.nav.about}</a></li>
            <li><a href="#projects" class="nav-link">${data.nav.projects}</a></li>
            <li><a href="#skills" class="nav-link">${data.nav.skills}</a></li>
            <li><a href="#contact" class="nav-link">${data.nav.contact}</a></li>
        `;

    const languageSwitcher = includeLanguageSwitcher ? `
        <button class="language-switcher" aria-label="Switch Language">
            <i class="fas fa-language"></i>
            <span class="lang-text">עב / EN</span>
        </button>
    ` : '';

    return `
        <nav class="navbar">
            <div class="container">
                <div class="nav-brand">
                    <i class="fas fa-code"></i>
                    <span>${data.name}</span>
                </div>
                <ul class="nav-menu">
                    ${navLinks}
                </ul>
                ${languageSwitcher}
                ${!isProjectPage ? `
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                ` : ''}
            </div>
        </nav>
    `;
}

/**
 * Generates the footer component
 * @param {Object} data - Footer data (name, links)
 * @param {boolean} isProjectPage - Whether this is a project detail page
 * @returns {string} Footer HTML
 */
function createFooter(data, isProjectPage = false) {
    const year = new Date().getFullYear();
    const backToTopText = data.footer?.backToTop || 'Back to Top';
    const rightsText = data.footer?.rights || `© ${year} ${data.name}. All rights reserved.`;

    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-left">
                        <p>${rightsText}</p>
                    </div>
                    <div class="footer-right">
                        <a href="${isProjectPage ? '../index.html' : '#home'}">
                            <i class="fas fa-arrow-up"></i> ${backToTopText}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

/**
 * Generates breadcrumb navigation for project pages
 * @param {Object} data - Breadcrumb data
 * @param {string} projectName - Current project name
 * @returns {string} Breadcrumb HTML
 */
function createBreadcrumb(data, projectName) {
    return `
        <div class="breadcrumb">
            <a href="../index.html">${data.breadcrumb?.home || 'Home'}</a>
            <span>/</span>
            <a href="../index.html#projects">${data.breadcrumb?.projects || 'Projects'}</a>
            <span>/</span>
            <span>${projectName}</span>
        </div>
    `;
}

/**
 * Initializes navigation for the current page
 * Inserts navigation and footer into designated containers
 */
function initializePageComponents(data, options = {}) {
    const {
        isProjectPage = false,
        includeLanguageSwitcher = true
    } = options;

    // Insert navigation if container exists
    const navContainer = document.querySelector('[data-nav-container]');
    if (navContainer) {
        navContainer.innerHTML = createNavigation(data, isProjectPage, includeLanguageSwitcher);
    } else {
        // If no container, insert at beginning of body
        const nav = createNavigation(data, isProjectPage, includeLanguageSwitcher);
        document.body.insertAdjacentHTML('afterbegin', nav);
    }

    // Insert footer if container exists
    const footerContainer = document.querySelector('[data-footer-container]');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter(data, isProjectPage);
    } else {
        // If no container, append at end of body
        const footer = createFooter(data, isProjectPage);
        document.body.insertAdjacentHTML('beforeend', footer);
    }
}

/**
 * Updates all components with new language data
 */
function updatePageComponents(data, options = {}) {
    const { isProjectPage = false } = options;

    // Update navigation brand
    const navBrand = document.querySelector('.nav-brand span');
    if (navBrand) navBrand.textContent = data.name;

    // Update navigation links (only for main page)
    if (!isProjectPage) {
        const navLinks = {
            home: document.querySelector('.nav-link[href="#home"]'),
            about: document.querySelector('.nav-link[href="#about"]'),
            projects: document.querySelector('.nav-link[href="#projects"]'),
            skills: document.querySelector('.nav-link[href="#skills"]'),
            contact: document.querySelector('.nav-link[href="#contact"]')
        };

        Object.keys(navLinks).forEach(key => {
            if (navLinks[key] && data.nav && data.nav[key]) {
                navLinks[key].textContent = data.nav[key];
            }
        });
    } else {
        const backLink = document.querySelector('.nav-link[href="../index.html"]');
        if (backLink && data.backToPortfolio) {
            backLink.textContent = data.backToPortfolio;
        }
    }

    // Update footer
    const year = new Date().getFullYear();
    const footerLeft = document.querySelector('.footer-left p');
    if (footerLeft) {
        const rightsText = data.footer?.rights || `© ${year} ${data.name}. All rights reserved.`;
        footerLeft.textContent = rightsText;
    }

    const footerRight = document.querySelector('.footer-right a');
    if (footerRight && data.footer?.backToTop) {
        footerRight.innerHTML = `<i class="fas fa-arrow-up"></i> ${data.footer.backToTop}`;
    }
}

// Make functions available globally for backward compatibility
if (typeof window !== 'undefined') {
    window.createNavigation = createNavigation;
    window.createFooter = createFooter;
    window.createBreadcrumb = createBreadcrumb;
    window.initializePageComponents = initializePageComponents;
    window.updatePageComponents = updatePageComponents;
}
