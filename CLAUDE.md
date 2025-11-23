# CLAUDE.md - AI Assistant Guide for Shopify Portfolio

## Project Overview

This is a professional portfolio website for a Shopify developer, built with vanilla JavaScript, HTML5, and CSS3. The site showcases Shopify development projects, technical expertise, and provides bilingual support (English/Hebrew) with full RTL (right-to-left) text support.

**Live Site**: https://hadassschweitzer.netlify.app/
**Deployment**: Netlify
**No Build Tools Required**: Pure vanilla JavaScript - no npm, webpack, or bundlers needed

---

## Table of Contents

1. [Repository Structure](#repository-structure)
2. [Tech Stack](#tech-stack)
3. [Architecture & Design Patterns](#architecture--design-patterns)
4. [Key Files & Their Roles](#key-files--their-roles)
5. [Development Workflows](#development-workflows)
6. [Code Conventions](#code-conventions)
7. [Common Tasks](#common-tasks)
8. [Deployment](#deployment)
9. [Important Notes for AI Assistants](#important-notes-for-ai-assistants)

---

## Repository Structure

```
shopify-portfolio/
├── portfolio/                    # Main website directory
│   ├── index.html               # Main portfolio page
│   ├── favicon.svg              # Site icon
│   ├── netlify.toml             # Netlify deployment configuration
│   ├── css/
│   │   ├── style.css           # Main stylesheet with CSS variables
│   │   ├── project-detail.css  # Styles for project detail pages
│   │   └── utilities.css       # Utility classes
│   ├── js/
│   │   ├── data.js             # **CRITICAL** - All content data & translations
│   │   ├── components.js       # Shared UI components (nav, footer)
│   │   ├── language-manager.js # Centralized language switching logic
│   │   ├── script.js           # Main page functionality & animations
│   │   └── project-detail.js   # Project page functionality
│   ├── images/                  # Project screenshots & assets
│   │   ├── project-*.jpg       # Project preview images
│   │   └── ...
│   ├── projects/                # Individual project detail pages
│   │   ├── ai-image-generation.html
│   │   ├── erp-integration.html
│   │   ├── automation-workflows.html
│   │   ├── hubspot-sync.html
│   │   ├── ai-descriptions.html
│   │   └── b2b-platform.html
│   └── cv/                      # CV/Resume directory
├── SERVER-INSTRUCTIONS.md        # Local server setup (Hebrew)
├── start-server.sh              # Script to start local development server
└── .claude/                     # Claude AI configuration
    └── settings.local.json
```

---

## Tech Stack

### Core Technologies
- **HTML5**: Semantic markup with SEO optimization
- **CSS3**: Modern features (Grid, Flexbox, CSS Variables, Animations)
- **JavaScript (ES6+)**: Vanilla JavaScript - no frameworks or libraries

### External Dependencies
- **Font Awesome 6.4.0**: Icon library (CDN)
- **Google Fonts**: Rubik & Inter fonts
- **FormSubmit.co**: Contact form backend (no server required)

### Development Tools
- **Python HTTP Server**: For local testing (`python3 -m http.server`)
- **Git**: Version control
- **Netlify**: Deployment platform

### Key Features
- ✅ No build process or npm dependencies
- ✅ No external JavaScript frameworks (React, Vue, etc.)
- ✅ Pure vanilla JavaScript with modern ES6+ features
- ✅ Bilingual support (English/Hebrew) with RTL
- ✅ Fully responsive design
- ✅ SEO optimized with structured data (Schema.org)

---

## Architecture & Design Patterns

### 1. **Data-Driven Architecture**

The entire site content is managed through `js/data.js` using a **single source of truth** pattern:

```javascript
// Static data (language-independent)
const staticData = {
    email: "...",
    phone: "...",
    projects: [...],
    skills: {...}
};

// Translations (language-specific)
const translations = {
    en: { /* English content */ },
    he: { /* Hebrew content */ }
};

// Merger function
function getPortfolioData(lang) {
    // Combines static + translations
    return merged_data;
}
```

**Why this matters**: To add/edit ANY content on the site, modify `js/data.js` only. Never hardcode text in HTML or JavaScript files.

### 2. **Component-Based Pattern**

Shared UI components (navigation, footer) are centralized in `js/components.js`:

```javascript
function updatePageComponents(data, options) {
    updateNavigation(data);
    updateFooter(data);
}
```

This eliminates duplication between main page and project pages.

### 3. **Language Management System**

`js/language-manager.js` provides centralized language switching:

```javascript
LanguageManager.init({
    onLanguageChange: buildDynamicContent,
    pageType: 'main' // or 'project'
});
```

Features:
- Persists language preference to localStorage
- Updates document direction (LTR/RTL)
- Triggers content rebuild on language change

### 4. **Dynamic Content Generation**

Content is NOT hardcoded in HTML. Instead, JavaScript builds it dynamically:

```javascript
// Example: Building project cards
projectsGrid.innerHTML = data.projects.list.map(project => `
    <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    </div>
`).join('');
```

---

## Key Files & Their Roles

### **js/data.js** ⭐ MOST IMPORTANT FILE

**Purpose**: Single source of truth for ALL website content

**Contains**:
- Personal info (name, email, phone, location)
- Navigation labels
- Hero section text
- About section content
- Skills categories
- Project metadata
- Testimonials
- FAQ content
- Contact form labels
- Translations for English & Hebrew

**When to edit**:
- Adding/updating ANY text content
- Adding new projects
- Changing skills or services
- Updating contact information
- Adding FAQ questions

**Never edit data in**: HTML files, script.js, or components.js - always modify data.js instead.

### **js/script.js**

**Purpose**: Main page functionality and interactions

**Responsibilities**:
- Dynamic content building from data.js
- Animation initialization (Intersection Observer)
- Navigation scroll effects
- Contact form submission handling
- FAQ accordion toggle
- Stats counter animation
- Smooth scrolling

**Note**: Should NOT contain hardcoded content - only UI logic.

### **js/components.js**

**Purpose**: Shared components across pages

**Provides**:
- `updatePageComponents()`: Updates navigation and footer
- `updateNavigation()`: Builds nav menu dynamically
- `updateFooter()`: Builds footer content

**Used by**: Both index.html and project detail pages.

### **js/language-manager.js**

**Purpose**: Centralized language switching logic

**Key Methods**:
- `init(options)`: Initialize with callbacks
- `switchLanguage(lang)`: Change language
- `toggleLanguage()`: Switch between en/he
- `getCurrentLanguage()`: Get active language
- `isRTL()`: Check if RTL mode

### **css/style.css**

**Purpose**: Main stylesheet with design system

**Key Features**:
- CSS Variables for theming (`:root`)
- Color scheme: `--primary-color: #96bf48` (green)
- Responsive breakpoints
- Animation definitions
- Component styles

**Design System Variables**:
```css
:root {
    --primary-color: #96bf48;      /* Main brand green */
    --secondary-color: #5e8e3e;    /* Darker green */
    --accent-color: #ffd700;       /* Gold accent */
    --dark-bg: #0a0e1a;           /* Dark background */
    --text-primary: #ffffff;       /* White text */
    --text-secondary: #b0b8d4;    /* Light gray text */
}
```

### **index.html**

**Purpose**: Main portfolio page structure

**Key Sections**:
1. Navigation with language switcher
2. Hero section
3. About section
4. Solutions section (problems solved)
5. Skills section
6. Projects grid
7. Testimonials
8. Process section (how I work)
9. FAQ section
10. Contact section with form
11. Footer

**Content**: Minimal hardcoded text - most content injected by JavaScript from data.js.

### **netlify.toml**

**Purpose**: Netlify deployment configuration

**Key Settings**:
- SPA routing: All routes → `/index.html`
- Security headers (X-Frame-Options, XSS Protection)
- Cache headers for static assets (31536000s = 1 year)

---

## Development Workflows

### Local Development Setup

1. **Start Local Server** (required for FormSubmit to work):
   ```bash
   cd portfolio
   python3 -m http.server 8000
   # OR use the provided script
   ./start-server.sh
   ```

2. **Access Site**:
   ```
   http://localhost:8000
   ```

3. **Why a server?**: FormSubmit.co requires HTTP protocol (won't work with `file://`)

### Making Content Changes

**Example: Adding a new project**

1. **Edit `js/data.js`**:
   ```javascript
   // Add to staticData.projects.list
   {
       id: "new-project",
       image: "images/project-new.jpg",
       tags: ["Tag1", "Tag2"],
       year: "2024",
       tech: "Node.js, React",
       link: "projects/new-project.html"
   }

   // Add translations
   translations.en.projects.projectTitles["new-project"] = "New Project Title";
   translations.en.projects.projectDescriptions["new-project"] = "Description...";

   translations.he.projects.projectTitles["new-project"] = "כותרת הפרויקט החדש";
   translations.he.projects.projectDescriptions["new-project"] = "תיאור...";
   ```

2. **Add project image**: `portfolio/images/project-new.jpg`

3. **Create project page**: `portfolio/projects/new-project.html` (copy existing as template)

4. **Test**: Refresh browser - project should appear automatically

### Testing Contact Form

The contact form uses FormSubmit.co:

1. Start local server (required!)
2. Navigate to `http://localhost:8000`
3. Fill out contact form
4. Email is sent to: `hadasa.schweitzer@gmail.com`

**Form configuration** (in index.html):
```html
<form action="https://formsubmit.co/hadasa.schweitzer@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="New Portfolio Contact Message">
    <input type="hidden" name="_next" value="https://hadassschweitzer.netlify.app/#contact">
    <input type="hidden" name="_captcha" value="false">
</form>
```

### Adding New Sections

1. **Add HTML structure** in `index.html`
2. **Add section data** to `js/data.js` translations
3. **Add section builder** in `js/script.js` buildDynamicContent()
4. **Add styles** in `css/style.css`

Example pattern:
```javascript
// In data.js
translations.en.newSection = {
    title: "Section Title",
    items: [...]
};

// In script.js buildDynamicContent()
const newSectionTitle = document.querySelector('.new-section .section-title');
if (newSectionTitle) newSectionTitle.textContent = data.newSection.title;
```

---

## Code Conventions

### JavaScript Conventions

1. **No Hardcoded Content**
   ```javascript
   // ❌ BAD
   element.textContent = "Contact Me";

   // ✅ GOOD
   element.textContent = data.contact.title;
   ```

2. **Data-Driven Updates**
   ```javascript
   // Always pull from data.js
   const data = portfolioData[lang];
   updateElement(data.section.field);
   ```

3. **Dynamic Content Building**
   ```javascript
   // Use template literals and map
   container.innerHTML = data.items.map(item => `
       <div class="item">
           <h3>${item.title}</h3>
           <p>${item.description}</p>
       </div>
   `).join('');
   ```

4. **Event Delegation**
   ```javascript
   // Use event delegation for dynamic elements
   document.addEventListener('click', (e) => {
       if (e.target.matches('.faq-question')) {
           // Handle click
       }
   });
   ```

5. **Intersection Observer for Animations**
   ```javascript
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.style.opacity = '1';
           }
       });
   });
   ```

### CSS Conventions

1. **Use CSS Variables**
   ```css
   /* Define in :root */
   :root {
       --primary-color: #96bf48;
   }

   /* Use throughout */
   .button {
       background: var(--primary-color);
   }
   ```

2. **BEM-ish Class Naming**
   ```css
   .project-card { }
   .project-card__image { }
   .project-card__title { }
   .project-card--featured { }
   ```

3. **Mobile-First Responsive**
   ```css
   /* Base styles for mobile */
   .element {
       font-size: 1rem;
   }

   /* Desktop overrides */
   @media (min-width: 768px) {
       .element {
           font-size: 1.2rem;
       }
   }
   ```

4. **RTL Support**
   ```css
   /* Use logical properties when possible */
   margin-inline-start: 1rem;  /* Instead of margin-left */
   padding-inline-end: 1rem;   /* Instead of padding-right */

   /* Or use [dir="rtl"] selector */
   [dir="rtl"] .element {
       text-align: right;
   }
   ```

### HTML Conventions

1. **Semantic HTML**
   ```html
   <section id="about" class="about">
       <div class="container">
           <header class="section-header">
               <h2 class="section-title">About</h2>
           </header>
       </div>
   </section>
   ```

2. **SEO Optimization**
   - Use proper meta tags
   - Include Schema.org structured data
   - Semantic heading hierarchy (h1 → h2 → h3)
   - Alt text for images

3. **Accessibility**
   - ARIA labels on buttons
   - Proper form labels
   - Keyboard navigation support

---

## Common Tasks

### Task 1: Update Personal Information

**File**: `js/data.js`

```javascript
// In staticData
const staticData = {
    email: "new.email@example.com",  // Update here
    phone: "123-456-7890",            // Update here
    phoneFormatted: "+11234567890",   // Update here
};

// In translations
translations.en.name = "New Name";
translations.en.location = "New Location";
```

### Task 2: Change Color Scheme

**File**: `css/style.css`

```css
:root {
    --primary-color: #NEW_COLOR;      /* Main brand color */
    --secondary-color: #NEW_COLOR_2;  /* Secondary color */
    --accent-color: #NEW_COLOR_3;     /* Accent color */
}
```

### Task 3: Add New Skill Category

**File**: `js/data.js`

```javascript
// 1. Add to staticData
staticData.skills.categories.push({
    icon: "fas fa-icon-name",
    id: "new-category"
});

// 2. Add translations
translations.en.skills.categories["new-category"] = {
    title: "Category Title",
    items: ["Skill 1", "Skill 2", "Skill 3"]
};

translations.he.skills.categories["new-category"] = {
    title: "כותרת קטגוריה",
    items: ["מיומנות 1", "מיומנות 2", "מיומנות 3"]
};
```

### Task 4: Update Contact Form Email

**Files**: `index.html` + `js/data.js`

1. Update form action in `index.html`:
   ```html
   <form action="https://formsubmit.co/NEW_EMAIL@example.com" method="POST">
   ```

2. Update staticData in `js/data.js`:
   ```javascript
   staticData.email = "NEW_EMAIL@example.com";
   ```

### Task 5: Add FAQ Question

**File**: `js/data.js`

```javascript
// In translations.en.faq.questions
{
    question: "New question?",
    answer: "Answer to the question..."
}

// In translations.he.faq.questions
{
    question: "שאלה חדשה?",
    answer: "תשובה לשאלה..."
}
```

### Task 6: Fix Broken Animations

Common issue: Animations not triggering

**Check**:
1. Is Intersection Observer initialized? (`initAnimations()` called)
2. Are elements in viewport?
3. Check console for errors
4. Verify CSS transition properties exist

**Fix**:
```javascript
// Reinitialize after content change
buildDynamicContent(lang);
initAnimations(); // Call this after rebuilding
```

---

## Deployment

### Netlify Deployment (Current Setup)

**Automatic Deployment**:
1. Push to GitHub repository
2. Netlify auto-deploys from main branch
3. Live at: https://hadassschweitzer.netlify.app/

**Manual Deployment**:
1. Drag & drop `/portfolio` folder to Netlify
2. Configure settings:
   - Publish directory: `.` (root of uploaded folder)
   - No build command needed

**Configuration**: See `portfolio/netlify.toml`

### Alternative Deployment Options

**GitHub Pages**:
```bash
# Push to gh-pages branch
git subtree push --prefix portfolio origin gh-pages
# Site will be at: username.github.io/repo-name
```

**Vercel**:
1. Import GitHub repo
2. Set root directory to `/portfolio`
3. No build settings needed

---

## Important Notes for AI Assistants

### ⚠️ Critical Rules

1. **NEVER hardcode content in JavaScript or HTML files**
   - All content MUST go in `js/data.js`
   - Only exception: structural HTML elements

2. **ALWAYS update both English AND Hebrew translations**
   - Every content change needs `translations.en` AND `translations.he`
   - Test language switcher after changes

3. **NO npm or build tools**
   - This is a vanilla JavaScript project
   - Do NOT suggest adding package.json, webpack, babel, etc.
   - Do NOT recommend installing npm packages

4. **Respect the architecture**
   - Don't bypass the data-driven pattern
   - Don't create duplicate content systems
   - Use existing components and utilities

5. **Test with local server**
   - Always test with `python3 -m http.server` or `./start-server.sh`
   - FormSubmit won't work with `file://` protocol

### 🎯 Best Practices

1. **Content Changes** → Edit `js/data.js` only
2. **Styling Changes** → Use CSS variables when possible
3. **New Features** → Follow existing patterns (data-driven, component-based)
4. **Language Support** → Test both LTR (English) and RTL (Hebrew) modes
5. **Animations** → Use Intersection Observer pattern
6. **Forms** → FormSubmit.co integration (no backend needed)

### 🔍 Debugging Guide

**Problem**: Content not updating
- **Solution**: Check if `buildDynamicContent()` is called after data change

**Problem**: Language switcher not working
- **Solution**: Verify `LanguageManager.init()` is called in DOMContentLoaded

**Problem**: Animations not triggering
- **Solution**: Call `initAnimations()` after dynamic content insertion

**Problem**: Contact form not sending
- **Solution**: Ensure site is accessed via HTTP server, not `file://`

**Problem**: RTL layout broken
- **Solution**: Check CSS logical properties and `[dir="rtl"]` selectors

### 📝 File Edit Priority

When asked to update content, edit files in this order:

1. **`js/data.js`** - 90% of content changes
2. **`css/style.css`** - Styling and design
3. **`index.html`** - Structure changes only (rarely needed)
4. **`js/script.js`** - Functionality changes (avoid content here)

### 🚫 What NOT to Do

- ❌ Don't add React, Vue, or any framework
- ❌ Don't create package.json or node_modules
- ❌ Don't add build scripts or bundlers
- ❌ Don't hardcode text in HTML or JS
- ❌ Don't bypass the language management system
- ❌ Don't ignore RTL support for Hebrew
- ❌ Don't add backend code (use FormSubmit for forms)

### ✅ What TO Do

- ✅ Keep it vanilla JavaScript
- ✅ Use the existing data structure
- ✅ Follow the component pattern
- ✅ Update both languages
- ✅ Test with local server
- ✅ Use CSS variables for theming
- ✅ Maintain semantic HTML
- ✅ Keep code DRY (Don't Repeat Yourself)

---

## File Modification Examples

### Example 1: Adding a Testimonial

**File**: `js/data.js`

```javascript
// Add to translations.en.testimonials.reviews
{
    name: "John Doe",
    role: "CEO, Example Company",
    image: "images/client-4.jpg",
    rating: 5,
    text: "Outstanding service and expertise!"
}

// Add to translations.he.testimonials.reviews
{
    name: "ג'ון דו",
    role: "מנכ\"ל, חברה לדוגמה",
    image: "images/client-4.jpg",
    rating: 5,
    text: "שירות ומומחיות מצוינים!"
}
```

### Example 2: Updating Hero Section

**File**: `js/data.js`

```javascript
// Update English
translations.en.hero = {
    title: "New Title",
    titleGradient: "New Gradient Text",
    description: "New description...",
    btnProjects: "View Work",
    btnContact: "Contact",
    statsLabels: ["Years", "Projects", "Rating"]
};

// Update Hebrew
translations.he.hero = {
    title: "כותרת חדשה",
    titleGradient: "טקסט גרדיאנט חדש",
    description: "תיאור חדש...",
    btnProjects: "ראה עבודות",
    btnContact: "צור קשר",
    statsLabels: ["שנים", "פרויקטים", "דירוג"]
};
```

### Example 3: Adding a Process Step

**File**: `js/data.js`

```javascript
// Add to translations.en.process.steps
{
    number: "5",
    icon: "fas fa-rocket",
    title: "Launch",
    description: "Deploy your solution to production..."
}

// Add to translations.he.process.steps
{
    number: "5",
    icon: "fas fa-rocket",
    title: "השקה",
    description: "העלאת הפתרון לייצור..."
}
```

---

## Quick Reference

### Key Commands

```bash
# Start local server
cd portfolio && python3 -m http.server 8000

# OR use script
./start-server.sh

# Access site
http://localhost:8000

# Git workflow
git status
git add .
git commit -m "Description"
git push origin branch-name
```

### Key URLs

- **Live Site**: https://hadassschweitzer.netlify.app/
- **FormSubmit**: https://formsubmit.co/
- **Font Awesome**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com/

### Contact Information

- **Email**: hadasa.schweitzer@gmail.com
- **Phone**: 058-326-1441
- **Location**: Tel Aviv, Israel

---

## Version History

- **Current Version**: 2.0 (Refactored with data-driven architecture)
- **Previous Version**: 1.0 (Initial portfolio)

---

## Support & Questions

For questions about this codebase:
1. Read this CLAUDE.md file thoroughly
2. Check existing code patterns in `js/data.js` and `js/script.js`
3. Test changes locally before pushing
4. Maintain consistency with existing architecture

---

**Last Updated**: 2024
**Maintained by**: Hadas Schweitzer
**Built with**: ❤️ and vanilla JavaScript
