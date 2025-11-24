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
                id: "data-sync-platform",
                image: "images/project-data-sync.jpg",
                tags: ["Data Sync", "API", "Integration"],
                year: "2023-2024",
                tech: "Node.js, REST API",
                link: "projects/data-sync-platform.html"
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
            links: []
        }
    }
};

// ========== Translations (Language-Specific) ==========
const translations = {
    he: {
        // Personal Info
        name: "הדס שוויצר",
        location: "ירושלים, ישראל",

        // Navigation
        nav: {
            home: "בית",
            about: "אודות",
            solutions: "בעיות שאני פותר",
            projects: "פרויקטים",
            process: "איך אני עובד",
            skills: "כישורים",
            contact: "יצירת קשר"
        },

        // Hero Section
        hero: {
            title: "עוזר לבעלי חנויות Shopify",
            titleGradient: "לחסוך זמן ולהגדיל מכירות",
            description: "מתמחה בפתרונות טכניים לחנויות שופיפיי - חיבור מערכות, אוטומציות, פיתוח מותאם אישית ועזרה בכל נושא טכני. 5+ שנות ניסיון בבניית פתרונות שחוסכים זמן ומגדילים רווחים.",
            btnProjects: "ראה את הפתרונות",
            btnContact: "בוא נדבר על הבעיה שלך",
            statsLabels: ["שנות ניסיון", "פרויקטים שהושלמו", "שביעות רצון לקוחות"]
        },

        // About Section
        about: {
            title: "קצת עליי",
            subtitle: "השותפה הטכנית שלך להצלחה בשופיפיי",
            paragraphs: [
                "אני הדס, מפתחת ויועצת טכנית לשופיפיי עם מעל 5 שנות ניסיון. אני עוזרת לבעלי חנויות לפתור בעיות טכניות, לחבר מערכות ולבנות אוטומציות שחוסכות זמן וכסף.",
                "אם יש לך חנות בשופיפיי ואתה נתקע עם בעיה טכנית, צריך לחבר את החנות למערכת ניהול, רוצה להוסיף פיצ'רים מיוחדים או סתם צריך עזרה טכנית - אני כאן בשביל זה. אני מתמחה בכל מה שקשור לשופיפיי - מעיצוב והתאמה אישית ועד פיתוח מערכות מורכבות ואינטגרציות עם בינה מלאכותית."
            ],
            highlights: [
                "בניית אפליקציות ופיצ'רים מותאמים אישית",
                "חיבור בין שופיפיי למערכות אחרות (ERP, CRM ועוד)",
                "אוטומציות שחוסכות עבודה ידנית",
                "שילוב בינה מלאכותית בחנות",
                "פתרון בעיות טכניות והאצת החנות",
                "עיצוב והתאמה אישית של התבנית"
            ]
        },

        // Solutions Section (Problems I Solve)
        solutions: {
            title: "בעיות שאני פותרת",
            subtitle: "אם אתה מתמודד עם אחת מהבעיות האלה - אני יכולה לעזור",
            problems: [
                {
                    icon: "fas fa-sync-alt",
                    title: "המערכות לא מדברות אחת עם השנייה",
                    description: "החנות שלך בשופיפיי לא מסונכרנת עם מערכת הניהול (ERP/CRM)? המלאי לא מתעדכן? ההזמנות לא עוברות אוטומטית? אני בונה חיבורים אוטומטיים בין המערכות כך שהכל יעבוד חלק."
                },
                {
                    icon: "fas fa-clock",
                    title: "מבזבז המון זמן על עבודה ידנית",
                    description: "מעדכן מחירים ידנית? מעתיק הזמנות בין מערכות? מעלה תמונות ידנית? אני בונה אוטומציות שיעשו את העבודה בשבילך - פעם אחת מגדירים, ואז הכל קורה אוטומטית."
                },
                {
                    icon: "fas fa-puzzle-piece",
                    title: "צריך פיצ'ר שלא קיים",
                    description: "רוצה להוסיף יכולת מיוחדת לחנות שלא קיימת בשופיפיי? צריך משהו ספציפי לעסק שלך? אני מפתחת פתרונות מותאמים אישית בדיוק לפי מה שאתה צריך."
                },
                {
                    icon: "fas fa-robot",
                    title: "רוצה לשלב בינה מלאכותית",
                    description: "רוצה שבינה מלאכותית תכתוב לך תיאורי מוצרים? תייצר תמונות? תענה ללקוחות? אני משלבת כלי AI מתקדמים בחנות שלך כדי לחסוך זמן ולשפר את החוויה."
                },
                {
                    icon: "fas fa-exclamation-triangle",
                    title: "החנות לא עובדת טוב או נתקעת",
                    description: "יש באגים? החנות איטית? משהו לא עובד אחרי עדכון? אני מאבחנת ומתקנת בעיות טכניות, משפרת ביצועים ודואגת שהחנות תעבוד חלק."
                },
                {
                    icon: "fas fa-shopping-cart",
                    title: "צריך עזרה בניהול ואופטימיזציה של המכירות",
                    description: "רוצה לשפר את תהליך הקנייה? להוסיף מבצעים אוטומטיים? לשלב שיטות תשלום נוספות? אני עוזרת לך לייעל את החנות כדי להגדיל המרות ומכירות."
                }
            ]
        },

        // Skills Section
        skills: {
            title: "איך אני יכולה לעזור לך",
            subtitle: "השירותים והפתרונות שאני מספקת",
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
            title: "פרויקטים שעשיתי",
            subtitle: "בעיות אמיתיות שפתרתי עבור בעלי חנויות שופיפיי",
            projectTitles: {
                "ai-image-generation": "אפליקציית יצירת תמונות AI",
                "erp-integration": "מערכת אינטגרציה ERP-Shopify",
                "automation-workflows": "תהליכי אוטומציה Shopify",
                "hubspot-sync": "אפליקציית סנכרון Shopify-HubSpot",
                "data-sync-platform": "פלטפורמת סנכרון נתונים בין חנויות",
                "b2b-platform": "פלטפורמת שיתוף מוצרים B2B"
            },
            projectDescriptions: {
                "ai-image-generation": "אפליקציה משולבת ב-Shopify שמאחזרת נתוני מוצרים ויוצרת תמונות מוצר מותאמות אישית באמצעות OpenAI ו-Gemini APIs.",
                "erp-integration": "מערכת סנכרון דו-כיוונית מקיפה בין Fantasy ERP ו-Shopify, המטפלת במוצרים, מלאי, הזמנות ונתוני לקוחות.",
                "automation-workflows": "אפליקציות מונעות אירועים אוטומטיות באמצעות Shopify webhooks לעדכוני מוצרים, עיבוד הזמנות וניהול מלאי.",
                "hubspot-sync": "מערכת סנכרון בזמן אמת למוצרים, הזמנות ונתוני לקוחות בין Shopify ל-HubSpot CRM.",
                "data-sync-platform": "פלטפורמה מתקדמת ליבוא ויצוא נתונים בין מספר חנויות שופיפיי, המאפשרת סנכרון קטלוג מוצרים וניהול מלאי חלק ברשת של חנויות.",
                "b2b-platform": "פלטפורמה משולבת ב-Shopify המאפשרת לסוחרים לשתף ולשתף פעולה בקטלוגי מוצרים עם ניהול הרשאות מתקדם."
            }
        },

        // FAQ Section
        faq: {
            title: "שאלות נפוצות",
            subtitle: "תשובות לשאלות שבעלי חנויות שואלים אותי הכי הרבה",
            questions: [
                {
                    question: "איך העבודה איתך עובדת?",
                    answer: "פשוט! אתה מספר לי מה הבעיה או מה אתה צריך, אנחנו עושים שיחת ייעוץ חינם, אני נותנת לך הצעת מחיר והערכת זמן, ואז אני בונה לך את הפתרון. אני מעדכנת אותך לאורך הדרך ואתה מקבל בדיוק מה שאתה צריך."
                },
                {
                    question: "כמה זמן לוקח לסיים פרויקט?",
                    answer: "תלוי מה צריך לעשות. דברים פשוטים כמו תיקון באג או שינוי קטן - יכול להיות מוכן תוך ימים. פרויקטים גדולים כמו חיבור מערכות או בניית פיצ'ר חדש - בין שבועיים לחודשיים. אני תמיד אומרת מראש כמה זמן זה ייקח."
                },
                {
                    question: "כמה זה עולה?",
                    answer: "המחיר תלוי בגודל הפרויקט. דברים קטנים יכולים להתחיל מכמה מאות דולר, פרויקטים בינוניים בין 2-5 אלף דולר, ופרויקטים גדולים יכולים להגיע ל-15 אלף דולר ומעלה. אני תמיד נותנת הצעת מחיר ברורה לפני שמתחילים."
                },
                {
                    question: "אפשר לעבוד איתך לטווח ארוך?",
                    answer: "בהחלט! הרבה לקוחות עובדים איתי בתמיכה שוטפת - אני פה בשבילם כשיש בעיה או צריך להוסיף משהו חדש. יש אפשרות לעבוד בחבילה חודשית או פשוט לפנות אליי כשצריך."
                },
                {
                    question: "יש לי בעיה בחנות עכשיו - את יכולה לעזור?",
                    answer: "כן! אני עובדת גם על פתרון בעיות דחופות. ספר לי מה קורה ואני אראה איך אפשר לפתור. לפעמים זה משהו שאני יכולה לטפל בו מהר, ולפעמים צריך קצת יותר זמן - אבל אני תמיד נותנת תשובה כנה."
                },
                {
                    question: "את עובדת רק עם חנויות בישראל?",
                    answer: "לא, אני עובדת עם לקוחות מכל העולם! כל העבודה היא מרחוק, אז לא משנה איפה החנות שלך נמצאת. אני מדברת עברית ואנגלית."
                }
            ]
        },

        // Process Section (How I Work)
        process: {
            title: "איך אני עובדת",
            subtitle: "תהליך עבודה פשוט ושקוף - בדיוק מה שאתה צריך",
            steps: [
                {
                    number: "1",
                    icon: "fas fa-comments",
                    title: "שיחת ייעוץ חינם",
                    description: "אתה מספר לי מה הבעיה או מה אתה רוצה לשפר. אנחנו מדברים 15-30 דקות, אני מבינה את הצרכים ונותנת לך כיוון ראשוני."
                },
                {
                    number: "2",
                    icon: "fas fa-file-invoice-dollar",
                    title: "הצעת מחיר והערכת זמן",
                    description: "תוך 24 שעות אתה מקבל הצעת מחיר מדויקת, הסבר מפורט מה אני אעשה, וציר זמן ברור. לא מתחילים עד שאתה מרוצה עם ההצעה."
                },
                {
                    number: "3",
                    icon: "fas fa-code",
                    title: "פיתוח ויישום",
                    description: "אני בונה את הפתרון תוך עדכון שוטף. אתה יכול לראות את ההתקדמות ולבקש שינויים בדרך. הכל שקוף ובשיתוף פעולה מלא."
                },
                {
                    number: "4",
                    icon: "fas fa-check-circle",
                    title: "בדיקות ומסירה",
                    description: "אני בודקת שהכל עובד מעולה, מלמדת אותך איך להשתמש בפתרון, ומוודאת שאתה מרוצה. גם אחרי המסירה אני פה לתמיכה."
                }
            ]
        },

        // Contact Section
        contact: {
            title: "בוא נדבר על הפרויקט שלך",
            subtitle: "ספר לי מה אתה צריך ואני אעזור לך",
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
                title: "מוכן להתחיל?",
                description: "לא משנה אם זה פרויקט גדול או בעיה קטנה - אני כאן לעזור. בוא נדבר ונראה איך אפשר לקדם את החנות שלך.",
                btnEmail: "שלח לי מייל",
                btnPhone: "התקשר אליי",
                btnConsultation: "קבע שיחת ייעוץ חינם",
                consultationUrl: "https://calendly.com/441dasis/30min"
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
function getPortfolioData(lang = 'he') {
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

        // Solutions Section
        solutions: trans.solutions,

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

        // Process Section
        process: trans.process,

        // FAQ Section
        faq: trans.faq,

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
    he: getPortfolioData('he')
};

// Default language
let currentLanguage = 'he';

// Export functions
if (typeof window !== 'undefined') {
    window.getPortfolioData = getPortfolioData;
    window.staticData = staticData;
    window.translations = translations;
}
