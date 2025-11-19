// ========== Project Detail Page Builder ==========

function getProjectIdFromURL() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename.replace('.html', '');
}

function buildProjectPage(lang = 'en') {
    const projectId = getProjectIdFromURL();
    const projectData = projectsDetailData[projectId];

    if (!projectData) {
        console.error('Project data not found for:', projectId);
        return;
    }

    const data = projectData[lang];
    currentProjectLanguage = lang;

    // Update document direction and lang
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

    // Update page title
    document.title = `${data.title} - Hadas Schweitzer`;

    // Update shared components (navigation) using components.js
    if (typeof updatePageComponents === 'function') {
        updatePageComponents(data, { isProjectPage: true });
    }

    // Update breadcrumb
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    if (breadcrumbLinks[0]) breadcrumbLinks[0].textContent = data.breadcrumb.home;
    if (breadcrumbLinks[1]) breadcrumbLinks[1].textContent = data.breadcrumb.projects;

    const breadcrumbCurrent = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = data.breadcrumb.current;

    // Update hero section
    const projectTitle = document.querySelector('.project-title');
    if (projectTitle) projectTitle.textContent = data.title;

    const projectLead = document.querySelector('.project-lead');
    if (projectLead) projectLead.textContent = data.lead;

    const metaSpans = document.querySelectorAll('.project-meta-header span');
    if (metaSpans[0]) metaSpans[0].innerHTML = `<i class="fas fa-calendar"></i> ${data.meta.year}`;
    if (metaSpans[1]) metaSpans[1].innerHTML = `<i class="fas fa-building"></i> ${data.meta.company}`;
    if (metaSpans[2]) metaSpans[2].innerHTML = `<i class="fas fa-code"></i> ${data.meta.tech}`;

    // Update main content sections
    const mainContent = document.querySelector('.project-main');
    if (mainContent && data.sections) {
        let sectionsHTML = `<div class="project-image-showcase">
            <img src="../images/project-${projectId}.jpg" alt="${data.title}">
        </div>`;

        // Overview
        if (data.sections.overview) {
            sectionsHTML += `
                <h2>${data.sections.overview.title}</h2>
                <p>${data.sections.overview.content}</p>
            `;
        }

        // Challenge
        if (data.sections.challenge) {
            sectionsHTML += `
                <h2>${data.sections.challenge.title}</h2>
                <p>${data.sections.challenge.content}</p>
            `;
        }

        // Solution
        if (data.sections.solution) {
            sectionsHTML += `
                <h2>${data.sections.solution.title}</h2>
                <p>${data.sections.solution.intro}</p>
                <ul>
                    ${data.sections.solution.points.map(point =>
                        `<li><strong>${point.title}:</strong> ${point.text}</li>`
                    ).join('')}
                </ul>
            `;
        }

        // Technical Implementation
        if (data.sections.implementation) {
            sectionsHTML += `
                <h2>${data.sections.implementation.title}</h2>
                <div class="tech-stack">
                    <div class="tech-item"><i class="fab fa-js"></i><span>JavaScript</span></div>
                    <div class="tech-item"><i class="fab fa-node"></i><span>Node.js</span></div>
                    <div class="tech-item"><i class="fab fa-shopify"></i><span>Shopify API</span></div>
                    <div class="tech-item"><i class="fas fa-brain"></i><span>OpenAI API</span></div>
                    <div class="tech-item"><i class="fas fa-robot"></i><span>Gemini API</span></div>
                </div>
            `;
        }

        // Features
        if (data.sections.features) {
            sectionsHTML += `
                <h2>${data.sections.features.title}</h2>
                <div class="features-grid">
                    ${data.sections.features.list.map(feature => `
                        <div class="feature-item">
                            <div class="feature-icon"><i class="${feature.icon}"></i></div>
                            <h4>${feature.title}</h4>
                            <p>${feature.text}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Results
        if (data.sections.results) {
            sectionsHTML += `
                <h2>${data.sections.results.title}</h2>
                <div class="results-grid">
                    ${data.sections.results.items.map(result => `
                        <div class="result-item">
                            <div class="result-number">${result.number}</div>
                            <div class="result-label">${result.label}</div>
                            <p>${result.text}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Architecture
        if (data.sections.architecture) {
            sectionsHTML += `
                <h2>${data.sections.architecture.title}</h2>
                <p>${data.sections.architecture.intro}</p>
                <ul>
                    ${data.sections.architecture.points.map(point =>
                        `<li><strong>${point.title}:</strong> ${point.text}</li>`
                    ).join('')}
                </ul>
            `;
        }

        // Lessons Learned
        if (data.sections.lessons) {
            sectionsHTML += `
                <h2>${data.sections.lessons.title}</h2>
                <p>${data.sections.lessons.content}</p>
            `;
        }

        mainContent.innerHTML = sectionsHTML;
    }

    // Update sidebar
    const sidebar = document.querySelector('.project-sidebar');
    if (sidebar && data.sidebar) {
        let sidebarHTML = '';

        // Project Details
        if (data.sidebar.details) {
            sidebarHTML += `
                <div class="sidebar-card">
                    <h3>${data.sidebar.details.title}</h3>
                    ${Object.entries(data.sidebar.details.items).map(([key, item]) => `
                        <div class="detail-item">
                            <strong>${item.label}</strong>
                            <span>${item.value}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Technologies
        if (data.sidebar.technologies) {
            sidebarHTML += `
                <div class="sidebar-card">
                    <h3>${data.sidebar.technologies.title}</h3>
                    <div class="tech-tags">
                        ${data.sidebar.technologies.tags.map(tag =>
                            `<span class="tech-tag">${tag}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        }

        // Achievements
        if (data.sidebar.achievements) {
            sidebarHTML += `
                <div class="sidebar-card">
                    <h3>${data.sidebar.achievements.title}</h3>
                    <ul class="achievements-list">
                        ${data.sidebar.achievements.list.map(achievement =>
                            `<li><i class="fas fa-check"></i> ${achievement}</li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        }

        // CTA
        if (data.sidebar.cta) {
            sidebarHTML += `
                <div class="sidebar-card cta-card">
                    <h3>${data.sidebar.cta.title}</h3>
                    <p>${data.sidebar.cta.text}</p>
                    <a href="../index.html#contact" class="btn btn-primary btn-block">${data.sidebar.cta.button}</a>
                </div>
            `;
        }

        sidebar.innerHTML = sidebarHTML;
    }

    // Update related projects
    const relatedTitle = document.querySelector('.related-projects h2');
    if (relatedTitle && data.related) {
        relatedTitle.textContent = data.related.title;

        const relatedGrid = document.querySelector('.related-grid');
        if (relatedGrid) {
            relatedGrid.innerHTML = data.related.projects.map(project => `
                <a href="${project.id}.html" class="related-card">
                    <img src="../images/project-${project.id === 'ai-descriptions' ? 'ai-desc' : project.id === 'erp-integration' ? 'erp' : 'automation'}.jpg" alt="${project.title}">
                    <h4>${project.title}</h4>
                    <p>${project.desc}</p>
                </a>
            `).join('');
        }
    }

    // Note: Footer is updated by updatePageComponents() from components.js
}

// ========== Language Switcher (Deprecated - use LanguageManager) ==========
// Kept for backward compatibility
function switchProjectLanguage(lang) {
    if (typeof LanguageManager !== 'undefined') {
        LanguageManager.switchLanguage(lang, 'project');
    } else {
        // Fallback if LanguageManager not loaded
        buildProjectPage(lang);
        localStorage.setItem('preferredLanguage', lang);
    }
}

// ========== Initialize on page load ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Language Manager (handles language loading and switching)
    if (typeof LanguageManager !== 'undefined') {
        LanguageManager.init({
            onLanguageChange: buildProjectPage,
            pageType: 'project'
        });
        currentProjectLanguage = LanguageManager.getCurrentLanguage();
    } else {
        // Fallback if LanguageManager not loaded
        const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
        buildProjectPage(savedLanguage);
    }
});
