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
            title: "Shopify Expert &",
            titleGradient: "Technical Consultant",
            description: "I help Shopify store owners solve complex technical challenges, optimize their stores, and implement custom solutions. 5+ years of experience providing expert support and development services.",
            btnProjects: "View Solutions",
            btnContact: "Get Expert Help",
            statsLabels: ["Years Experience", "Projects Completed", "Client Satisfaction"]
        },

        // About Section
        about: {
            title: "About Me",
            subtitle: "Your Shopify Technical Partner for Growth & Success",
            paragraphs: [
                "With 5+ years of specialized Shopify experience, I provide expert technical support and consulting services to help store owners overcome challenges, optimize performance, and implement custom solutions that drive business growth.",
                "Whether you need to integrate your ERP system, automate workflows, build custom functionality, or solve complex technical issues - I deliver reliable, professional solutions tailored to your specific business needs. My expertise spans the entire Shopify ecosystem, from theme customization to advanced API integrations and AI-powered automation."
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
            title: "Services & Expertise",
            subtitle: "Technical solutions I provide for your Shopify store",
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
            title: "Client Success Stories",
            subtitle: "Real problems solved for Shopify store owners",
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
            title: "Need Help with Your Shopify Store?",
            subtitle: "Let's solve your technical challenges together",
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
                title: "Ready to Get Expert Help?",
                description: "Whether you need custom development, technical support, or strategic guidance - I'm here to help your Shopify store succeed.",
                btnEmail: "Send Email",
                btnPhone: "Call Now"
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
            title: "מומחית Shopify ו",
            titleGradient: "יועצת טכנית",
            description: "אני עוזרת לבעלי חנויות Shopify לפתור אתגרים טכניים מורכבים, לבצע אופטימיזציה ולהטמיע פתרונות מותאמים אישית. 5+ שנות ניסיון במתן שירותי תמיכה ופיתוח מומחים.",
            btnProjects: "לפתרונות",
            btnContact: "קבל עזרה מקצועית",
            statsLabels: ["שנות ניסיון", "פרויקטים שהושלמו", "שביעות רצון לקוחות"]
        },

        // About Section
        about: {
            title: "אודות",
            subtitle: "השותפה הטכנית שלך ל-Shopify להצלחה וצמיחה",
            paragraphs: [
                "עם 5+ שנות ניסיון מיוחד ב-Shopify, אני מספקת שירותי תמיכה וייעוץ טכניים מומחים כדי לעזור לבעלי חנויות להתגבר על אתגרים, לבצע אופטימיזציה לביצועים ולהטמיע פתרונות מותאמים אישית שמניעים צמיחה עסקית.",
                "בין אם אתם צריכים לשלב את מערכת ה-ERP שלכם, לבצע אוטומציה לתהליכי עבודה, לבנות פונקציונליות מותאמת אישית או לפתור בעיות טכניות מורכבות - אני מספקת פתרונות אמינים ומקצועיים המותאמים לצרכים העסקיים הספציפיים שלכם. המומחיות שלי משתרעת על כל האקוסיסטם של Shopify, מהתאמה אישית של ערכות נושא ועד אינטגרציות API מתקדמות ואוטומציה מבוססת בינה מלאכותית."
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
            title: "שירותים ומומחיות",
            subtitle: "פתרונות טכניים שאני מספקת לחנות Shopify שלך",
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
            title: "סיפורי הצלחה של לקוחות",
            subtitle: "בעיות אמיתיות שנפתרו עבור בעלי חנויות Shopify",
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
            title: "צריך עזרה עם חנות Shopify שלך?",
            subtitle: "בואו נפתור את האתגרים הטכניים שלך ביחד",
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
                title: "מוכן לקבל עזרה מקצועית?",
                description: "בין אם אתה צריך פיתוח מותאם אישית, תמיכה טכנית או הנחיה אסטרטגית - אני כאן כדי לעזור לחנות Shopify שלך להצליח.",
                btnEmail: "שלח אימייל",
                btnPhone: "התקשר עכשיו"
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
