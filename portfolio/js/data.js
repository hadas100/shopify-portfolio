// ========== Portfolio Data - Bilingual Support ==========

const portfolioData = {
    en: {
        // Personal Info
        name: "Hadas Schweitzer",
        email: "hadasa.schweitzer@gmail.com",
        phone: "058-326-1441",
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
            stats: [
                { number: "5+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" }
            ]
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
            categories: [
                {
                    icon: "fab fa-shopify",
                    title: "Shopify Platform",
                    items: [
                        "Shopify REST & GraphQL APIs",
                        "Webhooks & Event-Driven Architecture",
                        "Theme Development & Liquid",
                        "Custom App Development",
                        "Metafields & Custom Data"
                    ]
                },
                {
                    icon: "fas fa-laptop-code",
                    title: "Frontend",
                    items: [
                        "JavaScript (ES6+)",
                        "React & Vue.js",
                        "HTML5 & CSS3",
                        "Tailwind CSS",
                        "Alpine.js"
                    ]
                },
                {
                    icon: "fas fa-server",
                    title: "Backend",
                    items: [
                        "Node.js & Express",
                        "GraphQL",
                        "REST APIs",
                        "Java",
                        "Webhook Processing"
                    ]
                },
                {
                    icon: "fas fa-plug",
                    title: "Integrations",
                    items: [
                        "ERP Systems Integration",
                        "CRM (HubSpot)",
                        "Payment Gateways",
                        "AI APIs (OpenAI, Gemini)",
                        "Third-Party APIs"
                    ]
                },
                {
                    icon: "fas fa-database",
                    title: "Databases",
                    items: [
                        "MySQL",
                        "MongoDB",
                        "Data Modeling",
                        "Query Optimization"
                    ]
                },
                {
                    icon: "fas fa-tools",
                    title: "DevOps & Tools",
                    items: [
                        "CI/CD Pipelines",
                        "Cloud Deployment (Render, Vercel)",
                        "Docker",
                        "Git & Version Control"
                    ]
                }
            ]
        },

        // Projects Section
        projects: {
            title: "Featured Projects",
            subtitle: "Real-world Shopify solutions I've built",
            list: [
                {
                    id: "ai-image-generation",
                    image: "images/project-ai-image.jpg",
                    title: "AI Image Generation App",
                    description: "Shopify-integrated application that retrieves product data and generates customized product images using OpenAI and Gemini APIs.",
                    tags: ["Shopify API", "OpenAI", "Node.js"],
                    year: "2024",
                    tech: "JavaScript, Node.js",
                    link: "projects/ai-image-generation.html"
                },
                {
                    id: "erp-integration",
                    image: "images/project-erp.jpg",
                    title: "ERP-Shopify Integration System",
                    description: "Comprehensive bidirectional synchronization system between Fantasy ERP and Shopify, handling products, inventory, orders, and customer data.",
                    tags: ["Integration", "GraphQL", "REST API"],
                    year: "2023-2024",
                    tech: "Node.js, GraphQL",
                    link: "projects/erp-integration.html"
                },
                {
                    id: "automation-workflows",
                    image: "images/project-automation.jpg",
                    title: "Shopify Automation Workflows",
                    description: "Automated event-driven applications using Shopify webhooks for product updates, order processing, and inventory management.",
                    tags: ["Webhooks", "Automation", "Real-time"],
                    year: "2022-2024",
                    tech: "Node.js, Webhooks",
                    link: "projects/automation-workflows.html"
                },
                {
                    id: "hubspot-sync",
                    image: "images/project-hubspot.jpg",
                    title: "Shopify-HubSpot Sync Application",
                    description: "Real-time synchronization system for products, orders, and customer data between Shopify and HubSpot CRM.",
                    tags: ["CRM", "Integration", "Sync"],
                    year: "2023",
                    tech: "Node.js, REST API",
                    link: "projects/hubspot-sync.html"
                },
                {
                    id: "ai-descriptions",
                    image: "images/project-ai-desc.jpg",
                    title: "AI Product Description Generator",
                    description: "AI-powered system for generating compelling product descriptions using Gemini and OpenAI APIs, integrated with Shopify.",
                    tags: ["AI", "OpenAI", "Automation"],
                    year: "2024",
                    tech: "JavaScript, AI APIs",
                    link: "projects/ai-descriptions.html"
                },
                {
                    id: "b2b-platform",
                    image: "images/project-b2b.jpg",
                    title: "B2B Product Sharing Platform",
                    description: "Shopify-integrated platform enabling merchants to share and collaborate on product catalogs with advanced permission management.",
                    tags: ["B2B", "Platform", "Real-time"],
                    year: "2023",
                    tech: "Node.js, React",
                    link: "projects/b2b-platform.html"
                }
            ]
        },

        // Contact Section
        contact: {
            title: "Get In Touch",
            subtitle: "Let's discuss your next Shopify project",
            items: [
                { icon: "fas fa-envelope", title: "Email", value: "hadasa.schweitzer@gmail.com" },
                { icon: "fas fa-phone", title: "Phone", value: "058-326-1441" },
                { icon: "fas fa-map-marker-alt", title: "Location", value: "Tel Aviv, Israel" }
            ],
            social: {
                title: "Connect With Me",
                links: [
                    { icon: "fab fa-linkedin", name: "LinkedIn", url: "https://linkedin.com/in/hadas-schweitzer" },
                    { icon: "fab fa-github", name: "GitHub", url: "https://github.com/hadas-schweitzer" }
                ]
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
            copyright: "© 2026 Hadas Schweitzer. All rights reserved.",
            backToTop: "Back to Top"
        }
    },

    he: {
        // Personal Info
        name: "הדס שוויצר",
        email: "hadasa.schweitzer@gmail.com",
        phone: "058-326-1441",
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
            stats: [
                { number: "5+", label: "שנות ניסיון" },
                { number: "20+", label: "פרויקטים שהושלמו" },
                { number: "100%", label: "שביעות רצון לקוחות" }
            ]
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
            categories: [
                {
                    icon: "fab fa-shopify",
                    title: "פלטפורמת Shopify",
                    items: [
                        "Shopify REST & GraphQL APIs",
                        "Webhooks & Event-Driven Architecture",
                        "Theme Development & Liquid",
                        "Custom App Development",
                        "Metafields & Custom Data"
                    ]
                },
                {
                    icon: "fas fa-laptop-code",
                    title: "Frontend",
                    items: [
                        "JavaScript (ES6+)",
                        "React & Vue.js",
                        "HTML5 & CSS3",
                        "Tailwind CSS",
                        "Alpine.js"
                    ]
                },
                {
                    icon: "fas fa-server",
                    title: "Backend",
                    items: [
                        "Node.js & Express",
                        "GraphQL",
                        "REST APIs",
                        "Java",
                        "Webhook Processing"
                    ]
                },
                {
                    icon: "fas fa-plug",
                    title: "אינטגרציות",
                    items: [
                        "ERP Systems Integration",
                        "CRM (HubSpot)",
                        "Payment Gateways",
                        "AI APIs (OpenAI, Gemini)",
                        "Third-Party APIs"
                    ]
                },
                {
                    icon: "fas fa-database",
                    title: "מסדי נתונים",
                    items: [
                        "MySQL",
                        "MongoDB",
                        "Data Modeling",
                        "Query Optimization"
                    ]
                },
                {
                    icon: "fas fa-tools",
                    title: "DevOps וכלים",
                    items: [
                        "CI/CD Pipelines",
                        "Cloud Deployment (Render, Vercel)",
                        "Docker",
                        "Git & Version Control"
                    ]
                }
            ]
        },

        // Projects Section
        projects: {
            title: "פרויקטים מובילים",
            subtitle: "פתרונות Shopify אמיתיים שבניתי",
            list: [
                {
                    id: "ai-image-generation",
                    image: "images/project-ai-image.jpg",
                    title: "אפליקציית יצירת תמונות AI",
                    description: "אפליקציה משולבת ב-Shopify שמאחזרת נתוני מוצרים ויוצרת תמונות מוצר מותאמות אישית באמצעות OpenAI ו-Gemini APIs.",
                    tags: ["Shopify API", "OpenAI", "Node.js"],
                    year: "2024",
                    tech: "JavaScript, Node.js",
                    link: "projects/ai-image-generation.html"
                },
                {
                    id: "erp-integration",
                    image: "images/project-erp.jpg",
                    title: "מערכת אינטגרציה ERP-Shopify",
                    description: "מערכת סנכרון דו-כיוונית מקיפה בין Fantasy ERP ו-Shopify, המטפלת במוצרים, מלאי, הזמנות ונתוני לקוחות.",
                    tags: ["Integration", "GraphQL", "REST API"],
                    year: "2023-2024",
                    tech: "Node.js, GraphQL",
                    link: "projects/erp-integration.html"
                },
                {
                    id: "automation-workflows",
                    image: "images/project-automation.jpg",
                    title: "תהליכי אוטומציה Shopify",
                    description: "אפליקציות מונעות אירועים אוטומטיות באמצעות Shopify webhooks לעדכוני מוצרים, עיבוד הזמנות וניהול מלאי.",
                    tags: ["Webhooks", "Automation", "Real-time"],
                    year: "2022-2024",
                    tech: "Node.js, Webhooks",
                    link: "projects/automation-workflows.html"
                },
                {
                    id: "hubspot-sync",
                    image: "images/project-hubspot.jpg",
                    title: "אפליקציית סנכרון Shopify-HubSpot",
                    description: "מערכת סנכרון בזמן אמת למוצרים, הזמנות ונתוני לקוחות בין Shopify ל-HubSpot CRM.",
                    tags: ["CRM", "Integration", "Sync"],
                    year: "2023",
                    tech: "Node.js, REST API",
                    link: "projects/hubspot-sync.html"
                },
                {
                    id: "ai-descriptions",
                    image: "images/project-ai-desc.jpg",
                    title: "מחולל תיאורי מוצרים AI",
                    description: "מערכת מבוססת AI ליצירת תיאורי מוצרים משכנעים באמצעות Gemini ו-OpenAI APIs, משולבת עם Shopify.",
                    tags: ["AI", "OpenAI", "Automation"],
                    year: "2024",
                    tech: "JavaScript, AI APIs",
                    link: "projects/ai-descriptions.html"
                },
                {
                    id: "b2b-platform",
                    image: "images/project-b2b.jpg",
                    title: "פלטפורמת שיתוף מוצרים B2B",
                    description: "פלטפורמה משולבת ב-Shopify המאפשרת לסוחרים לשתף ולשתף פעולה בקטלוגי מוצרים עם ניהול הרשאות מתקדם.",
                    tags: ["B2B", "Platform", "Real-time"],
                    year: "2023",
                    tech: "Node.js, React",
                    link: "projects/b2b-platform.html"
                }
            ]
        },

        // Contact Section
        contact: {
            title: "צור קשר",
            subtitle: "בואו נדבר על הפרויקט הבא שלך ב-Shopify",
            items: [
                { icon: "fas fa-envelope", title: "אימייל", value: "hadasa.schweitzer@gmail.com" },
                { icon: "fas fa-phone", title: "טלפון", value: "058-326-1441" },
                { icon: "fas fa-map-marker-alt", title: "מיקום", value: "תל אביב, ישראל" }
            ],
            social: {
                title: "התחבר אליי",
                links: [
                    { icon: "fab fa-linkedin", name: "LinkedIn", url: "https://linkedin.com/in/hadas-schweitzer" },
                    { icon: "fab fa-github", name: "GitHub", url: "https://github.com/hadas-schweitzer" }
                ]
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
            copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.",
            backToTop: "חזרה למעלה"
        }
    }
};

// Default language
let currentLanguage = 'en';
