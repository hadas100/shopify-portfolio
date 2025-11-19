// ========== Language Manager ==========
// Unified language management system to eliminate duplication

/**
 * Language Manager - handles all language switching logic
 * Replaces duplicate code in script.js and project-detail.js
 */
const LanguageManager = {
    // Current language state
    currentLanguage: 'en',

    // Available languages
    languages: ['en', 'he'],

    // Callbacks for different page types
    callbacks: {
        mainPage: null,
        projectPage: null
    },

    /**
     * Initialize the language manager
     * @param {Object} options - Configuration options
     * @param {Function} options.onLanguageChange - Callback when language changes
     * @param {string} options.pageType - Type of page ('main' or 'project')
     */
    init(options = {}) {
        const { onLanguageChange, pageType = 'main' } = options;

        // Register callback
        if (pageType === 'main') {
            this.callbacks.mainPage = onLanguageChange;
        } else if (pageType === 'project') {
            this.callbacks.projectPage = onLanguageChange;
        }

        // Load saved language from localStorage
        const savedLanguage = this.getSavedLanguage();
        this.currentLanguage = savedLanguage;

        // Apply language on page load
        if (onLanguageChange) {
            onLanguageChange(savedLanguage);
        }

        // Set up language switcher
        this.setupLanguageSwitcher(pageType);
    },

    /**
     * Get saved language from localStorage
     * @returns {string} Saved language code or default 'en'
     */
    getSavedLanguage() {
        try {
            const saved = localStorage.getItem('preferredLanguage');
            return saved && this.languages.includes(saved) ? saved : 'en';
        } catch (error) {
            console.warn('localStorage not available:', error);
            return 'en';
        }
    },

    /**
     * Save language to localStorage
     * @param {string} lang - Language code to save
     */
    saveLanguage(lang) {
        try {
            localStorage.setItem('preferredLanguage', lang);
        } catch (error) {
            console.warn('Failed to save language preference:', error);
        }
    },

    /**
     * Switch to a new language
     * @param {string} lang - Language code to switch to
     * @param {string} pageType - Type of page ('main' or 'project')
     */
    switchLanguage(lang, pageType = 'main') {
        if (!this.languages.includes(lang)) {
            console.error(`Invalid language: ${lang}`);
            return;
        }

        this.currentLanguage = lang;
        this.saveLanguage(lang);

        // Call appropriate callback
        const callback = pageType === 'main'
            ? this.callbacks.mainPage
            : this.callbacks.projectPage;

        if (callback) {
            callback(lang);
        }
    },

    /**
     * Toggle between available languages
     * @param {string} pageType - Type of page ('main' or 'project')
     */
    toggleLanguage(pageType = 'main') {
        const newLang = this.currentLanguage === 'en' ? 'he' : 'en';
        this.switchLanguage(newLang, pageType);
    },

    /**
     * Set up language switcher button
     * @param {string} pageType - Type of page ('main' or 'project')
     */
    setupLanguageSwitcher(pageType = 'main') {
        const languageSwitcher = document.querySelector('.language-switcher');

        if (!languageSwitcher) {
            // Create language switcher if it doesn't exist (for project pages)
            if (pageType === 'project') {
                this.createLanguageSwitcher();
            }
            return;
        }

        // Remove existing listeners by cloning the element
        const newSwitcher = languageSwitcher.cloneNode(true);
        languageSwitcher.parentNode.replaceChild(newSwitcher, languageSwitcher);

        // Add new click listener
        newSwitcher.addEventListener('click', () => {
            this.toggleLanguage(pageType);
        });
    },

    /**
     * Create language switcher for project pages (if not exists)
     */
    createLanguageSwitcher() {
        const navbar = document.querySelector('.navbar .container');
        if (!navbar || document.querySelector('.language-switcher')) {
            return;
        }

        const languageSwitcher = document.createElement('button');
        languageSwitcher.className = 'language-switcher';
        languageSwitcher.setAttribute('aria-label', 'Switch Language');
        languageSwitcher.innerHTML = `
            <i class="fas fa-language"></i>
            <span class="lang-text">עב / EN</span>
        `;

        // Insert before nav-menu
        const navMenu = navbar.querySelector('.nav-menu');
        navbar.insertBefore(languageSwitcher, navMenu.nextSibling);

        // Add click listener
        languageSwitcher.addEventListener('click', () => {
            this.toggleLanguage('project');
        });
    },

    /**
     * Get current language
     * @returns {string} Current language code
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    },

    /**
     * Check if current language is RTL
     * @returns {boolean} True if current language is RTL
     */
    isRTL() {
        return this.currentLanguage === 'he';
    },

    /**
     * Update document attributes for language
     * @param {string} lang - Language code
     */
    updateDocumentLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    }
};

// Make LanguageManager available globally
if (typeof window !== 'undefined') {
    window.LanguageManager = LanguageManager;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}
