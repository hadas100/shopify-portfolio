// ========== Portfolio Data - Refactored Structure ==========
// This file eliminates 60%+ duplication by separating static data from translations

// ========== Static Data (Language-Independent) ==========
const staticData = {
    // Personal Info
    email: "hadasa.schweitzer@gmail.com",
    phone: "058-326-1441",
    phoneFormatted: "+972583261441",

    // Hero Stats (numbers are language-independent)
    stats: [
        { number: "5+" },
        { number: "20+" },
        { number: "100%" }
    ],

    // Skills - Icons and technical terms (mostly language-independent)
    skills: {
        categories: [
            {
                icon: "fab fa-shopify",
                id: "shopify"
            },
            {
                icon: "fas fa-laptop-code",
                id: "frontend"
            },
            {
                icon: "fas fa-server",
                id: "backend"
            },
            {
                icon: "fas fa-plug",
                id: "integrations"
            },
            {
                icon: "fas fa-database",
                id: "databases"
            },
            {
                icon: "fas fa-tools",
                id: "devops"
            }
        ]
    },

    // Projects - Static metadata
    projects: {
        list: [
            {
                id: "ai-image-generation",
                image: "images/project-ai-image.jpg",
                tags: ["Shopify API", "OpenAI", "Node.js"],
                year: "2024",
                tech: "JavaScript, Node.js",
                link: "projects/ai-image-generation.html"
            },
            {
                id: "erp-integration",
                image: "images/project-erp.jpg",
                tags: ["Integration", "GraphQL", "REST API"],
                year: "2023-2024",
                tech: "Node.js, GraphQL",
                link: "projects/erp-integration.html"
            },
            {
                id: "automation-workflows",
                image: "images/project-automation.jpg",
                tags: ["Webhooks", "Automation", "Real-time"],
                year: "2022-2024",
                tech: "Node.js, Webhooks",
                link: "projects/automation-workflows.html"
            },
            {
                id: "hubspot-sync",
                image: "images/project-hubspot.jpg",
                tags: ["CRM", "Integration", "Sync"],
                year: "2023",
                tech: "Node.js, REST API",
                link: "projects/hubspot-sync.html"
            },
            {
                id: "ai-descriptions",
                image: "images/project-ai-desc.jpg",
                tags: ["AI", "OpenAI", "Automation"],
                year: "2024",
                tech: "JavaScript, AI APIs",
                link: "projects/ai-descriptions.html"
            },
            {
                id: "b2b-platform",
                image: "images/project-b2b.jpg",
                tags: ["B2B", "Platform", "Real-time"],
                year: "2023",
                tech: "Node.js, React",
                link: "projects/b2b-platform.html"
            }
        ]
    },

    // Contact - Icons and static values
    contact: {
        items: [
            { icon: "fas fa-envelope", id: "email" },
            { icon: "fas fa-phone", id: "phone" },
            { icon: "fas fa-map-marker-alt", id: "location" }
        ],
        social: {
            links: [
                {
                    icon: "fab fa-linkedin",
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/hadas-schweitzer"
                },
                {
                    icon: "fab fa-github",
                    name: "GitHub",
                    url: "https://github.com/hadas-schweitzer"
                }
            ]
        }
    }
};

// ========== Translations (Language-Specific) ==========
const translations = {
    en: {
        // Personal Info
        name: "Hadas Schweitzer",
        location: "Tel Aviv, Israel",

        // Navigation
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },

        // Hero Section
        hero: {
            title: "Shopify Developer &",
            titleGradient: "Full-Stack Expert",
            description: "Specialized in building custom Shopify applications, automations, and complex third-party integrations. 5+ years of experience delivering high-quality e-commerce solutions.",
            btnProjects: "View Projects",
            btnContact: "Get in Touch",
            statsLabels: ["Years Experience", "Projects Completed", "Client Satisfaction"]
        },

        // About Section
        about: {
            title: "About Me",
            subtitle: "Full-Stack Shopify Developer with a passion for e-commerce",
            paragraphs: [
                "I'm a Shopify Developer with 5+ years of full-stack development experience, specializing in Shopify customization, theme development, and complex third-party integrations. Currently working at Leibish Online, a leading jewelry e-commerce platform.",
                "My expertise includes building automated workflows, custom Shopify apps, API integrations, and AI-powered solutions. I'm proficient in JavaScript, React, Vue, Node.js, and have extensive experience with Shopify REST & GraphQL APIs."
            ],
            highlights: [
                "Custom Shopify App Development",
                "REST & GraphQL API Integration",
                "Automated Workflows & Webhooks",
                "ERP & CRM Integrations",
                "AI-Powered Solutions",
                "Theme Customization"
            ]
        },

        // Skills Section
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies and tools I work with",
            categories: {
                shopify: {
                    title: "Shopify Platform",
                    items: [
                        "Shopify REST & GraphQL APIs",
                        "Webhooks & Event-Driven Architecture",
                        "Theme Development & Liquid",
                        "Custom App Development",
                        "Metafields & Custom Data"
                    ]
                },
                frontend: {
                    title: "Frontend",
                    items: [
                        "JavaScript (ES6+)",
                        "React & Vue.js",
                        "HTML5 & CSS3",
                        "Tailwind CSS",
                        "Alpine.js"
                    ]
                },
                backend: {
                    title: "Backend",
                    items: [
                        "Node.js & Express",
                        "GraphQL",
                        "REST APIs",
                        "Java",
                        "Webhook Processing"
                    ]
                },
                integrations: {
                    title: "Integrations",
                    items: [
                        "ERP Systems Integration",
                        "CRM (HubSpot)",
                        "Payment Gateways",
                        "AI APIs (OpenAI, Gemini)",
                        "Third-Party APIs"
                    ]
                },
                databases: {
                    title: "Databases",
                    items: [
                        "MySQL",
                        "MongoDB",
                        "Data Modeling",
                        "Query Optimization"
                    ]
                },
                devops: {
                    title: "DevOps & Tools",
                    items: [
                        "CI/CD Pipelines",
                        "Cloud Deployment (Render, Vercel)",
                        "Docker",
                        "Git & Version Control"
                    ]
                }
            }
        },

        // Projects Section
        projects: {
            title: "Featured Projects",
            subtitle: "Real-world Shopify solutions I've built",
            projectTitles: {
                "ai-image-generation": "AI Image Generation App",
                "erp-integration": "ERP-Shopify Integration System",
                "automation-workflows": "Shopify Automation Workflows",
                "hubspot-sync": "Shopify-HubSpot Sync Application",
                "ai-descriptions": "AI Product Description Generator",
                "b2b-platform": "B2B Product Sharing Platform"
            },
            projectDescriptions: {
                "ai-image-generation": "Shopify-integrated application that retrieves product data and generates customized product images using OpenAI and Gemini APIs.",
                "erp-integration": "Comprehensive bidirectional synchronization system between Fantasy ERP and Shopify, handling products, inventory, orders, and customer data.",
                "automation-workflows": "Automated event-driven applications using Shopify webhooks for product updates, order processing, and inventory management.",
                "hubspot-sync": "Real-time synchronization system for products, orders, and customer data between Shopify and HubSpot CRM.",
                "ai-descriptions": "AI-powered system for generating compelling product descriptions using Gemini and OpenAI APIs, integrated with Shopify.",
                "b2b-platform": "Shopify-integrated platform enabling merchants to share and collaborate on product catalogs with advanced permission management."
            }
        },

        // Contact Section
        contact: {
            title: "Get In Touch",
            subtitle: "Let's discuss your next Shopify project",
            itemLabels: {
                email: "Email",
                phone: "Phone",
                location: "Location"
            },
            social: {
                title: "Connect With Me"
            },
            form: {
                title: "Send Me a Message",
                namePlaceholder: "Your Name",
                emailPlaceholder: "Your Email",
                subjectPlaceholder: "Subject",
                messagePlaceholder: "Your Message",
                submitButton: "Send Message",
                sending: "Sending...",
                successMessage: "Thank you! Your message has been sent successfully.",
                errorMessage: "Oops! Something went wrong. Please try again or email me directly."
            },
            cta: {
                title: "Ready to Start Your Project?",
                description: "I'm available for freelance projects and full-time opportunities. Let's create something amazing together!",
                btnEmail: "Send Email",
                btnPhone: "Call Now",
                btnCV: "Download CV"
            }
        },

        // Footer
        footer: {
            rights: `© ${new Date().getFullYear()} Hadas Schweitzer. All rights reserved.`,
            backToTop: "Back to Top"
        },

        // Project Pages
        backToPortfolio: "Back to Portfolio",
        breadcrumb: {
            home: "Home",
            projects: "Projects"
        }
    },

    he: {
        // Personal Info
        name: "הדס שוויצר",
        location: "תל אביב, ישראל",

        // Navigation
        nav: {
            home: "בית",
            about: "אודות",
            projects: "פרויקטים",
            skills: "כישורים",
            contact: "יצירת קשר"
        },

        // Hero Section
        hero: {
            title: "מפתחת Shopify ו",
            titleGradient: "מומחית Full-Stack",
            description: "מתמחה בבניית אפליקציות Shopify מותאמות אישית, אוטומציות ואינטגרציות מורכבות עם מערכות צד שלישי. 5+ שנות ניסיון במתן פתרונות מסחר אלקטרוני איכותיים.",
            btnProjects: "לפרויקטים",
            btnContact: "צור קשר",
            statsLabels: ["שנות ניסיון", "פרויקטים שהושלמו", "שביעות רצון לקוחות"]
        },

        // About Section
        about: {
            title: "אודות",
            subtitle: "מפתחת Shopify Full-Stack עם תשוקה למסחר אלקטרוני",
            paragraphs: [
                "אני מפתחת Shopify עם 5+ שנות ניסיון בפיתוח Full-Stack, המתמחה בהתאמה אישית של Shopify, פיתוח ערכות נושא ואינטגרציות מורכבות עם מערכות צד שלישי. כיום עובדת ב-Leibish Online, פלטפורמת מסחר אלקטרוני מובילה לתכשיטים.",
                "המומחיות שלי כוללת בניית תהליכי עבודה אוטומטיים, אפליקציות Shopify מותאמות אישית, אינטגרציות API ופתרונות מבוססי בינה מלאכותית. אני בקיאה ב-JavaScript, React, Vue, Node.js, ויש לי ניסיון נרחב עם Shopify REST & GraphQL APIs."
            ],
            highlights: [
                "פיתוח אפליקציות Shopify מותאמות אישית",
                "אינטגרציית REST & GraphQL API",
                "תהליכי עבודה אוטומטיים ו-Webhooks",
                "אינטגרציות ERP ו-CRM",
                "פתרונות מבוססי בינה מלאכותית",
                "התאמה אישית של ערכות נושא"
            ]
        },

        // Skills Section
        skills: {
            title: "כישורים טכניים",
            subtitle: "טכנולוגיות וכלים שאני עובדת איתם",
            categories: {
                shopify: {
                    title: "פלטפורמת Shopify",
                    items: [
                        "Shopify REST & GraphQL APIs",
                        "Webhooks & Event-Driven Architecture",
                        "Theme Development & Liquid",
                        "Custom App Development",
                        "Metafields & Custom Data"
                    ]
                },
                frontend: {
                    title: "Frontend",
                    items: [
                        "JavaScript (ES6+)",
                        "React & Vue.js",
                        "HTML5 & CSS3",
                        "Tailwind CSS",
                        "Alpine.js"
                    ]
                },
                backend: {
                    title: "Backend",
                    items: [
                        "Node.js & Express",
                        "GraphQL",
                        "REST APIs",
                        "Java",
                        "Webhook Processing"
                    ]
                },
                integrations: {
                    title: "אינטגרציות",
                    items: [
                        "ERP Systems Integration",
                        "CRM (HubSpot)",
                        "Payment Gateways",
                        "AI APIs (OpenAI, Gemini)",
                        "Third-Party APIs"
                    ]
                },
                databases: {
                    title: "מסדי נתונים",
                    items: [
                        "MySQL",
                        "MongoDB",
                        "Data Modeling",
                        "Query Optimization"
                    ]
                },
                devops: {
                    title: "DevOps וכלים",
                    items: [
                        "CI/CD Pipelines",
                        "Cloud Deployment (Render, Vercel)",
                        "Docker",
                        "Git & Version Control"
                    ]
                }
            }
        },

        // Projects Section
        projects: {
            title: "פרויקטים מובילים",
            subtitle: "פתרונות Shopify אמיתיים שבניתי",
            projectTitles: {
                "ai-image-generation": "אפליקציית יצירת תמונות AI",
                "erp-integration": "מערכת אינטגרציה ERP-Shopify",
                "automation-workflows": "תהליכי אוטומציה Shopify",
                "hubspot-sync": "אפליקציית סנכרון Shopify-HubSpot",
                "ai-descriptions": "מחולל תיאורי מוצרים AI",
                "b2b-platform": "פלטפורמת שיתוף מוצרים B2B"
            },
            projectDescriptions: {
                "ai-image-generation": "אפליקציה משולבת ב-Shopify שמאחזרת נתוני מוצרים ויוצרת תמונות מוצר מותאמות אישית באמצעות OpenAI ו-Gemini APIs.",
                "erp-integration": "מערכת סנכרון דו-כיוונית מקיפה בין Fantasy ERP ו-Shopify, המטפלת במוצרים, מלאי, הזמנות ונתוני לקוחות.",
                "automation-workflows": "אפליקציות מונעות אירועים אוטומטיות באמצעות Shopify webhooks לעדכוני מוצרים, עיבוד הזמנות וניהול מלאי.",
                "hubspot-sync": "מערכת סנכרון בזמן אמת למוצרים, הזמנות ונתוני לקוחות בין Shopify ל-HubSpot CRM.",
                "ai-descriptions": "מערכת מבוססת AI ליצירת תיאורי מוצרים משכנעים באמצעות Gemini ו-OpenAI APIs, משולבת עם Shopify.",
                "b2b-platform": "פלטפורמה משולבת ב-Shopify המאפשרת לסוחרים לשתף ולשתף פעולה בקטלוגי מוצרים עם ניהול הרשאות מתקדם."
            }
        },

        // Contact Section
        contact: {
            title: "צור קשר",
            subtitle: "בואו נדבר על הפרויקט הבא שלך ב-Shopify",
            itemLabels: {
                email: "אימייל",
                phone: "טלפון",
                location: "מיקום"
            },
            social: {
                title: "התחבר אליי"
            },
            form: {
                title: "שלח לי הודעה",
                namePlaceholder: "השם שלך",
                emailPlaceholder: "האימייל שלך",
                subjectPlaceholder: "נושא",
                messagePlaceholder: "ההודעה שלך",
                submitButton: "שלח הודעה",
                sending: "שולח...",
                successMessage: "תודה! ההודעה נשלחה בהצלחה.",
                errorMessage: "אופס! משהו השתבש. אנא נסה שוב או שלח לי מייל ישירות."
            },
            cta: {
                title: "מוכן להתחיל את הפרויקט שלך?",
                description: "אני זמינה לפרויקטים פרילנסריים והזדמנויות מלאות. בואו ניצור משהו מדהים ביחד!",
                btnEmail: "שלח אימייל",
                btnPhone: "התקשר עכשיו",
                btnCV: "הורד קורות חיים"
            }
        },

        // Footer
        footer: {
            rights: `© ${new Date().getFullYear()} הדס שוויצר. כל הזכויות שמורות.`,
            backToTop: "חזרה למעלה"
        },

        // Project Pages
        backToPortfolio: "חזרה לתיק העבודות",
        breadcrumb: {
            home: "בית",
            projects: "פרויקטים"
        }
    }
};

// ========== Data Merger Function ==========
/**
 * Merges static data with translations for a given language
 * This eliminates the need to duplicate static data for each language
 */
function getPortfolioData(lang = 'en') {
    const trans = translations[lang];
    const data = {
        // Personal Info
        name: trans.name,
        email: staticData.email,
        phone: staticData.phone,
        location: trans.location,

        // Navigation
        nav: trans.nav,

        // Hero Section
        hero: {
            ...trans.hero,
            stats: staticData.stats.map((stat, index) => ({
                number: stat.number,
                label: trans.hero.statsLabels[index]
            }))
        },

        // About Section
        about: trans.about,

        // Skills Section
        skills: {
            title: trans.skills.title,
            subtitle: trans.skills.subtitle,
            categories: staticData.skills.categories.map(cat => ({
                icon: cat.icon,
                title: trans.skills.categories[cat.id].title,
                items: trans.skills.categories[cat.id].items
            }))
        },

        // Projects Section
        projects: {
            title: trans.projects.title,
            subtitle: trans.projects.subtitle,
            list: staticData.projects.list.map(project => ({
                ...project,
                title: trans.projects.projectTitles[project.id],
                description: trans.projects.projectDescriptions[project.id]
            }))
        },

        // Contact Section
        contact: {
            title: trans.contact.title,
            subtitle: trans.contact.subtitle,
            items: staticData.contact.items.map(item => ({
                icon: item.icon,
                title: trans.contact.itemLabels[item.id],
                value: item.id === 'email' ? staticData.email :
                       item.id === 'phone' ? staticData.phone :
                       trans.location
            })),
            social: {
                title: trans.contact.social.title,
                links: staticData.contact.social.links
            },
            form: trans.contact.form,
            cta: trans.contact.cta
        },

        // Footer
        footer: trans.footer,

        // Project Pages
        backToPortfolio: trans.backToPortfolio,
        breadcrumb: trans.breadcrumb
    };

    return data;
}

// ========== Backward Compatibility ==========
// Keep the old portfolioData structure for existing code
const portfolioData = {
    en: getPortfolioData('en'),
    he: getPortfolioData('he')
};

// Default language
let currentLanguage = 'en';

// Export functions
if (typeof window !== 'undefined') {
    window.getPortfolioData = getPortfolioData;
    window.staticData = staticData;
    window.translations = translations;
}
