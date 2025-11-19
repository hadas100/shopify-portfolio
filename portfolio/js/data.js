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
            links: []
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
            solutions: "Problems I Solve",
            projects: "Projects",
            process: "How I Work",
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

        // Solutions Section (Problems I Solve)
        solutions: {
            title: "Problems I Solve",
            subtitle: "If you're facing any of these challenges - I can help",
            problems: [
                {
                    icon: "fas fa-sync-alt",
                    title: "Systems Don't Talk to Each Other",
                    description: "Your Shopify store not syncing with your management system (ERP/CRM)? Inventory not updating? Orders not transferring automatically? I build automated connections between systems so everything works smoothly."
                },
                {
                    icon: "fas fa-clock",
                    title: "Wasting Time on Manual Work",
                    description: "Updating prices manually? Copying orders between systems? Uploading images by hand? I build automations that do the work for you - set it up once, then everything happens automatically."
                },
                {
                    icon: "fas fa-puzzle-piece",
                    title: "Need a Feature That Doesn't Exist",
                    description: "Want to add a special capability to your store that doesn't exist in Shopify? Need something specific for your business? I develop custom solutions exactly to your needs."
                },
                {
                    icon: "fas fa-robot",
                    title: "Want to Integrate AI",
                    description: "Want AI to write product descriptions? Generate images? Answer customers? I integrate advanced AI tools into your store to save time and improve experience."
                },
                {
                    icon: "fas fa-exclamation-triangle",
                    title: "Store Not Working Well or Stuck",
                    description: "Have bugs? Store slow? Something not working after update? I diagnose and fix technical issues, improve performance, and ensure your store runs smoothly."
                },
                {
                    icon: "fas fa-shopping-cart",
                    title: "Need Help Managing & Optimizing Sales",
                    description: "Want to improve checkout process? Add automatic promotions? Integrate additional payment methods? I help you optimize the store to increase conversions and sales."
                }
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

        // Testimonials Section
        testimonials: {
            title: "What Clients Say",
            subtitle: "Real feedback from store owners I've helped",
            reviews: [
                {
                    name: "Sarah Cohen",
                    role: "Owner, Fashion Boutique",
                    image: "images/client-1.jpg",
                    rating: 5,
                    text: "Hadas transformed our Shopify store with a custom ERP integration that saved us 15 hours of manual work every week. Her expertise and professionalism are outstanding!"
                },
                {
                    name: "David Miller",
                    role: "CEO, Electronics Store",
                    image: "images/client-2.jpg",
                    rating: 5,
                    text: "We needed urgent help with a complex API integration. Hadas delivered a perfect solution ahead of schedule. Highly recommended for any Shopify technical challenges!"
                },
                {
                    name: "Rachel Green",
                    role: "Manager, Home Decor Shop",
                    image: "images/client-3.jpg",
                    rating: 5,
                    text: "The AI-powered automation Hadas built for our product descriptions increased our productivity by 300%. She's a true Shopify expert who delivers real business results."
                }
            ]
        },

        // Process Section (How I Work)
        process: {
            title: "How I Work",
            subtitle: "A simple and transparent process - exactly what you need",
            steps: [
                {
                    number: "1",
                    icon: "fas fa-comments",
                    title: "Free Consultation Call",
                    description: "You tell me about your problem or what you want to improve. We talk for 15-30 minutes, I understand your needs and give you initial direction."
                },
                {
                    number: "2",
                    icon: "fas fa-file-invoice-dollar",
                    title: "Quote & Timeline",
                    description: "Within 24 hours you get an accurate quote, detailed explanation of what I'll do, and clear timeline. We don't start until you're happy with the proposal."
                },
                {
                    number: "3",
                    icon: "fas fa-code",
                    title: "Development & Implementation",
                    description: "I build the solution with regular updates. You can see the progress and request changes along the way. Everything is transparent and collaborative."
                },
                {
                    number: "4",
                    icon: "fas fa-check-circle",
                    title: "Testing & Delivery",
                    description: "I test that everything works perfectly, teach you how to use the solution, and ensure you're satisfied. Even after delivery, I'm here for support."
                }
            ]
        },

        // FAQ Section
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about working with me",
            questions: [
                {
                    question: "What services do you offer?",
                    answer: "I provide custom Shopify development, ERP/CRM integrations, automation workflows, AI-powered solutions, theme customization, and ongoing technical support for Shopify stores."
                },
                {
                    question: "How long does a typical project take?",
                    answer: "It depends on complexity. Simple integrations can be completed in 1-2 weeks, while complex custom apps may take 4-8 weeks. I'll provide a detailed timeline after our initial consultation."
                },
                {
                    question: "Do you offer ongoing support?",
                    answer: "Yes! I offer monthly retainer packages for ongoing maintenance, updates, and technical support. I'm here to ensure your Shopify store runs smoothly long-term."
                },
                {
                    question: "What is your pricing?",
                    answer: "Pricing varies by project scope. I offer free initial consultations to understand your needs and provide a custom quote. Most projects range from $2,000-$15,000 depending on complexity."
                },
                {
                    question: "Can you help with an existing Shopify store issue?",
                    answer: "Absolutely! I specialize in troubleshooting and fixing technical issues, whether it's bugs, integration problems, performance optimization, or complex customizations."
                },
                {
                    question: "Do you work with international clients?",
                    answer: "Yes! I work with clients globally. I'm based in Tel Aviv but provide services remotely to Shopify store owners worldwide. All communication is in English or Hebrew."
                }
            ]
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
                btnPhone: "Call Now",
                btnConsultation: "Book Free Consultation",
                consultationUrl: "https://calendly.com/441dasis/30min"
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

        // Testimonials Section
        testimonials: {
            title: "מה לקוחות אומרים",
            subtitle: "בעלי חנויות שעבדו איתי והצליחו",
            reviews: [
                {
                    name: "שרה כהן",
                    role: "בעלת בוטיק אופנה",
                    image: "images/client-1.jpg",
                    rating: 5,
                    text: "הדס חיברה לי את החנות למערכת הניהול וחסכה לי 15 שעות עבודה ידנית כל שבוע! עכשיו הכל מסונכרן אוטומטית. פשוט מדהים!"
                },
                {
                    name: "דוד מילר",
                    role: "מנכ\"ל חנות אלקטרוניקה",
                    image: "images/client-2.jpg",
                    rating: 5,
                    text: "הייתי נתקע עם בעיה טכנית מורכבת והדס פתרה את זה תוך יומיים. מקצועית, מהירה וממש יודעת את שלה. ממליץ בחום!"
                },
                {
                    name: "רחל גרין",
                    role: "בעלת חנות עיצוב הבית",
                    image: "images/client-3.jpg",
                    rating: 5,
                    text: "בנתה לי מערכת AI שכותבת תיאורי מוצרים אוטומטית. חסכתי שעות של עבודה והמכירות עלו! שווה כל שקל."
                }
            ]
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

        // Testimonials Section
        testimonials: trans.testimonials,

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
