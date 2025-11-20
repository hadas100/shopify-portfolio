// ========== Projects Detail Data - Optimized Structure ==========
// This structure eliminates redundant data by separating common elements from translations

// ========== Common Data (Shared across all projects) ==========
const projectsCommonData = {
    en: {
        nav: { back: "Back to Portfolio" },
        footer: {
            copyright: "© 2026 Hadas Schweitzer. All rights reserved.",
            back: "Back to Portfolio"
        },
        breadcrumb: {
            home: "Home",
            projects: "Projects"
        },
        sectionTitles: {
            overview: "Project Overview",
            challenge: "The Challenge",
            solution: "The Solution",
            implementation: "Technical Implementation",
            features: "Key Features",
            results: "Results & Impact",
            architecture: "System Architecture",
            lessons: "Lessons Learned"
        },
        sidebar: {
            detailsTitle: "Project Details",
            techTitle: "Technologies Used",
            achievementsTitle: "Key Achievements",
            ctaButton: "Get in Touch"
        },
        relatedTitle: "Related Projects"
    },
    he: {
        nav: { back: "חזרה לתיק העבודות" },
        footer: {
            copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.",
            back: "חזרה לתיק העבודות"
        },
        breadcrumb: {
            home: "בית",
            projects: "פרויקטים"
        },
        sectionTitles: {
            overview: "סקירת הפרויקט",
            challenge: "האתגר",
            solution: "הפתרון",
            implementation: "יישום טכני",
            features: "תכונות עיקריות",
            results: "תוצאות והשפעה",
            architecture: "ארכיטקטורה טכנית",
            lessons: "למידה מרכזית"
        },
        sidebar: {
            detailsTitle: "פרטי הפרויקט",
            techTitle: "טכנולוגיות בשימוש",
            achievementsTitle: "הישגים מרכזיים",
            ctaButton: "צור קשר"
        },
        relatedTitle: "פרויקטים קשורים"
    }
};

// ========== Static Project Metadata (Language-Independent) ==========
const projectsStaticMeta = {
    'ai-image-generation': {
        year: "2024",
        company: "Leibish Online",
        tech: "JavaScript, Node.js, OpenAI API",
        duration: "3 months",
        role: "Full-Stack Developer",
        industry: "Jewelry E-commerce"
    },
    'erp-integration': {
        year: "2023-2024",
        company: "Leibish Online",
        tech: "Node.js, GraphQL, REST API",
        duration: "6 months",
        role: "Lead Developer",
        industry: "Jewelry E-commerce"
    },
    'ai-descriptions': {
        year: "2024",
        company: "Leibish Online",
        tech: "JavaScript, OpenAI, Gemini",
        duration: "2 months",
        role: "Full-Stack Developer",
        industry: "Jewelry E-commerce"
    },
    'automation-workflows': {
        year: "2024",
        company: "Leibish Online",
        tech: "Node.js, Webhooks, Event-Driven",
        duration: "4 months",
        role: "Lead Developer",
        industry: "Jewelry E-commerce"
    },
    'hubspot-sync': {
        year: "2023",
        company: "Leibish Online",
        tech: "Node.js, REST API",
        duration: "3 months",
        role: "Full-Stack Developer",
        industry: "Jewelry E-commerce"
    },
    'data-sync-platform': {
        year: "2023-2024",
        company: "Leibish Online",
        tech: "Node.js, Shopify API, REST API, GraphQL",
        duration: "5 months",
        role: "Lead Developer",
        industry: "Multi-Store E-commerce"
    },
    'b2b-platform': {
        year: "2023",
        company: "Leibish Online",
        tech: "Node.js, React",
        duration: "4 months",
        role: "Full-Stack Developer",
        industry: "B2B E-commerce"
    }
};

// Helper function to build complete project data with common elements
function buildProjectData(projectId, langData, lang) {
    const common = projectsCommonData[lang];
    const staticMeta = projectsStaticMeta[projectId];

    return {
        ...langData,
        meta: {
            year: staticMeta.year,
            company: staticMeta.company,
            tech: staticMeta.tech
        },
        breadcrumb: {
            ...common.breadcrumb,
            current: langData.breadcrumbCurrent
        },
        nav: common.nav,
        footer: common.footer,
        sidebar: {
            ...langData.sidebar,
            details: {
                title: common.sidebar.detailsTitle,
                items: {
                    client: { label: lang === 'en' ? 'Client' : 'לקוח', value: staticMeta.company },
                    industry: { label: lang === 'en' ? 'Industry' : 'תעשייה', value: langData.sidebar.details.industry },
                    year: { label: lang === 'en' ? 'Year' : 'שנה', value: staticMeta.year },
                    duration: { label: lang === 'en' ? 'Duration' : 'משך זמן', value: langData.sidebar.details.duration },
                    role: { label: lang === 'en' ? 'Role' : 'תפקיד', value: langData.sidebar.details.role }
                }
            },
            technologies: {
                title: common.sidebar.techTitle,
                tags: langData.sidebar.technologies
            },
            achievements: {
                title: common.sidebar.achievementsTitle,
                list: langData.sidebar.achievements
            },
            cta: {
                ...langData.sidebar.cta,
                button: common.sidebar.ctaButton
            }
        },
        related: {
            title: common.relatedTitle,
            projects: langData.related
        }
    };
}

// ========== Project Translations (Language-Specific Content) ==========
const projectsDetailData = {
    'ai-image-generation': {
        en: buildProjectData('ai-image-generation', {
            title: "AI-Powered Image Generation App",
            lead: "Shopify-integrated application for automated product image generation using AI",
            breadcrumbCurrent: "AI Image Generation",
            sections: {
                overview: {
                    content: "Developed a sophisticated Shopify-integrated application that leverages artificial intelligence to automatically generate customized product images. This solution streamlines the product photography workflow for e-commerce businesses, significantly reducing time and costs associated with traditional product photography."
                },
                challenge: {
                    content: "E-commerce businesses often struggle with creating consistent, high-quality product images at scale. Traditional photography is time-consuming and expensive, especially when dealing with thousands of product variations. The jewelry industry, in particular, requires beautiful, detailed images that showcase products from multiple angles and in various settings."
                },
                solution: {
                    intro: "I built an automated system that integrates seamlessly with Shopify's product catalog:",
                    points: [
                        { title: "SKU-Based Retrieval", text: "The application fetches product data directly from Shopify using SKU identifiers via the Shopify REST API" },
                        { title: "AI Image Generation", text: "Utilizes both OpenAI's DALL-E and Google's Gemini APIs to generate high-quality product images based on product specifications" },
                        { title: "Automated Upload", text: "Generated images are automatically uploaded back to the corresponding Shopify product records" },
                        { title: "Batch Processing", text: "Supports bulk image generation for multiple products simultaneously" },
                        { title: "Quality Control", text: "Implements validation checks to ensure generated images meet quality standards" }
                    ]
                },
                implementation: {},
                features: {
                    list: [
                        { icon: "fas fa-search", title: "Product Data Retrieval", text: "Automatically fetches product information from Shopify using SKU or product ID" },
                        { icon: "fas fa-magic", title: "AI-Powered Generation", text: "Creates unique, high-quality images using advanced AI models" },
                        { icon: "fas fa-cloud-upload-alt", title: "Automatic Upload", text: "Seamlessly uploads generated images back to Shopify product records" },
                        { icon: "fas fa-layer-group", title: "Batch Processing", text: "Process multiple products in a single operation for efficiency" },
                        { icon: "fas fa-check-circle", title: "Quality Validation", text: "Ensures generated images meet predefined quality standards" },
                        { icon: "fas fa-sync", title: "Real-time Updates", text: "Provides instant feedback on generation status and progress" }
                    ]
                },
                results: {
                    items: [
                        { number: "70%", label: "Time Savings", text: "Reduced product photography time by 70%" },
                        { number: "1000+", label: "Images Generated", text: "Successfully generated over 1000 product images" },
                        { number: "$50k", label: "Cost Reduction", text: "Saved approximately $50k in photography costs" }
                    ]
                },
                architecture: {
                    intro: "The application follows a modular architecture with clear separation of concerns:",
                    points: [
                        { title: "API Layer", text: "Handles communication with Shopify, OpenAI, and Gemini APIs" },
                        { title: "Processing Layer", text: "Manages image generation logic and workflow orchestration" },
                        { title: "Validation Layer", text: "Ensures data integrity and image quality" },
                        { title: "Storage Layer", text: "Manages temporary storage and cleanup of generated assets" }
                    ]
                },
                lessons: {
                    content: "This project taught me valuable lessons about working with AI APIs at scale, including handling rate limits, optimizing API costs, and ensuring consistent quality across different AI models. I also gained deep expertise in Shopify's media management APIs and best practices for large-scale asset handling."
                }
            },
            sidebar: {
                details: {
                    industry: "Jewelry E-commerce",
                    duration: "3 months",
                    role: "Full-Stack Developer"
                },
                technologies: ["JavaScript", "Node.js", "Express", "Shopify API", "OpenAI API", "Gemini API", "REST API", "Cloud Storage"],
                achievements: ["Reduced photography costs by 60%", "Improved product listing speed by 70%", "Generated 1000+ product images", "95% image quality approval rate"],
                cta: {
                    title: "Interested in This Solution?",
                    text: "Let's discuss how I can build a similar solution for your business."
                }
            },
            related: [
                { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive bidirectional data synchronization" },
                { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation with Shopify webhooks" }
            ]
        }, 'en'),

        he: buildProjectData('ai-image-generation', {
            title: "אפליקציית יצירת תמונות AI",
            lead: "אפליקציה משולבת ב-Shopify ליצירת תמונות מוצר אוטומטית באמצעות בינה מלאכותית",
            breadcrumbCurrent: "יצירת תמונות AI",
            sections: {
                overview: {
                    content: "פיתחתי אפליקציה מתוחכמת משולבת ב-Shopify שמנצלת בינה מלאכותית כדי ליצור אוטומטית תמונות מוצר מותאמות אישית. הפתרון מייעל את זרימת העבודה של צילום מוצרים עבור עסקי מסחר אלקטרוני, מפחית משמעותית זמן ועלויות הקשורים לצילום מסורתי של מוצרים."
                },
                challenge: {
                    content: "עסקי מסחר אלקטרוני לעיתים קרובות מתקשים ליצור תמונות מוצר עקביות ואיכותיות בקנה מידה גדול. צילום מסורתי גוזל זמן ויקר, במיוחד כשמדובר באלפי וריאציות של מוצרים. תעשיית התכשיטים, במיוחד, דורשת תמונות יפות ומפורטות שמציגות מוצרים מזוויות מרובות ובהגדרות שונות."
                },
                solution: {
                    intro: "בניתי מערכת אוטומטית שמשתלבת בצורה חלקה עם קטלוג המוצרים של Shopify:",
                    points: [
                        { title: "אחזור מבוסס SKU", text: "האפליקציה שואבת נתוני מוצר ישירות מ-Shopify באמצעות מזהי SKU דרך Shopify REST API" },
                        { title: "יצירת תמונות AI", text: "משתמש ב-APIs של OpenAI DALL-E ו-Google Gemini כדי ליצור תמונות מוצר איכותיות על בסיס מפרטי המוצר" },
                        { title: "העלאה אוטומטית", text: "תמונות שנוצרו מועלות אוטומטית חזרה לרשומות המוצר המתאימות ב-Shopify" },
                        { title: "עיבוד אצווה", text: "תומך ביצירת תמונות בכמות גדולה עבור מוצרים מרובים בו-זמנית" },
                        { title: "בקרת איכות", text: "מיישם בדיקות אימות כדי להבטיח שתמונות שנוצרו עומדות בתקני איכות" }
                    ]
                },
                implementation: {},
                features: {
                    list: [
                        { icon: "fas fa-search", title: "אחזור נתוני מוצר", text: "שולף אוטומטית מידע על מוצרים מ-Shopify באמצעות SKU או מזהה מוצר" },
                        { icon: "fas fa-magic", title: "יצירה מבוססת AI", text: "יוצר תמונות ייחודיות ואיכותיות באמצעות מודלים מתקדמים של AI" },
                        { icon: "fas fa-cloud-upload-alt", title: "העלאה אוטומטית", text: "מעלה בצורה חלקה תמונות שנוצרו חזרה לרשומות מוצר ב-Shopify" },
                        { icon: "fas fa-layer-group", title: "עיבוד אצווה", text: "מעבד מוצרים מרובים בפעולה אחת ליעילות" },
                        { icon: "fas fa-check-circle", title: "אימות איכות", text: "מבטיח שתמונות שנוצרו עומדות בתקני איכות מוגדרים מראש" },
                        { icon: "fas fa-sync", title: "עדכונים בזמן אמת", text: "מספק משוב מיידי על מצב היצירה וההתקדמות" }
                    ]
                },
                results: {
                    items: [
                        { number: "70%", label: "חיסכון בזמן", text: "הפחתה של 70% בזמן צילום מוצרים" },
                        { number: "1000+", label: "תמונות שנוצרו", text: "יצירה מוצלחת של למעלה מ-1000 תמונות מוצר" },
                        { number: "$50k", label: "הפחתת עלויות", text: "חיסכון של כ-$50k בעלויות צילום" }
                    ]
                },
                architecture: {
                    intro: "האפליקציה עוקבת אחר ארכיטקטורה מודולרית עם הפרדה ברורה של תחומי אחריות:",
                    points: [
                        { title: "שכבת API", text: "מטפלת בתקשורת עם APIs של Shopify, OpenAI ו-Gemini" },
                        { title: "שכבת עיבוד", text: "מנהלת לוגיקת יצירת תמונות ותזמור זרימת עבודה" },
                        { title: "שכבת אימות", text: "מבטיחה שלמות נתונים ואיכות תמונה" },
                        { title: "שכבת אחסון", text: "מנהלת אחסון זמני וניקוי של נכסים שנוצרו" }
                    ]
                },
                lessons: {
                    content: "הפרויקט הזה לימד אותי שיעורים חשובים על עבודה עם APIs של AI בקנה מידה גדול, כולל טיפול במגבלות קצב, אופטימיזציה של עלויות API, והבטחת איכות עקבית על פני מודלים שונים של AI. קיבלתי גם מומחיות עמוקה ב-APIs של ניהול מדיה של Shopify ושיטות עבודה מומלצות לטיפול בנכסים בקנה מידה גדול."
                }
            },
            sidebar: {
                details: {
                    industry: "מסחר אלקטרוני בתכשיטים",
                    duration: "3 חודשים",
                    role: "מפתחת Full-Stack"
                },
                technologies: ["JavaScript", "Node.js", "Express", "Shopify API", "OpenAI API", "Gemini API", "REST API", "Cloud Storage"],
                achievements: ["הפחתה של 60% בעלויות צילום", "שיפור של 70% במהירות רישום מוצרים", "יצירת למעלה מ-1000 תמונות מוצר", "שיעור אישור איכות תמונה של 95%"],
                cta: {
                    title: "מעוניין בפתרון הזה?",
                    text: "בוא נדבר איך אני יכולה לבנות פתרון דומה לעסק שלך."
                }
            },
            related: [
                { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים דו-כיווני מקיף" },
                { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים עם webhooks של Shopify" }
            ]
        }, 'he')
    },
    'erp-integration': {
        en: buildProjectData('erp-integration', {
            title: "ERP-Shopify Integration System",
            lead: "Comprehensive bidirectional synchronization between Fantasy ERP and Shopify",
            breadcrumbCurrent: "ERP Integration",
            sections: {
                overview: { content: "Developed a comprehensive bidirectional synchronization system between Fantasy ERP and Shopify, handling real-time data exchange for products, inventory, orders, customer information, and custom business logic." },
                challenge: { content: "The jewelry e-commerce business was facing critical challenges with manual data entry and synchronization between their ERP system and Shopify store, leading to inventory discrepancies and delayed order processing." },
                solution: { intro: "I designed and implemented a robust, scalable integration system:", points: [
                    { title: "Bidirectional Product Sync", text: "Real-time synchronization of product data including titles, descriptions, pricing, and images" },
                    { title: "Inventory Management", text: "Live inventory updates ensuring accurate stock levels" },
                    { title: "Order Processing", text: "Automatic order creation in ERP with status updates" },
                    { title: "Customer Data Sync", text: "Seamless customer profile synchronization" },
                    { title: "Metafield Management", text: "Custom metafield mapping for product-specific data" },
                    { title: "Error Handling & Logging", text: "Comprehensive error tracking and retry mechanisms" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-sync-alt", title: "Real-Time Synchronization", text: "Instant data updates between ERP and Shopify" },
                    { icon: "fas fa-boxes", title: "Multi-Product Support", text: "Handles diamonds, gemstones, and jewelry" },
                    { icon: "fas fa-warehouse", title: "Inventory Tracking", text: "Live stock level updates" },
                    { icon: "fas fa-shopping-cart", title: "Order Automation", text: "Automated order creation and status updates" },
                    { icon: "fas fa-shield-alt", title: "Error Recovery", text: "Automatic retry mechanisms" },
                    { icon: "fas fa-tags", title: "Custom Metafields", text: "Advanced data mapping" }
                ]},
                results: { items: [
                    { number: "95%", label: "Automation", text: "Eliminated 95% of manual data entry" },
                    { number: "30%", label: "Faster Processing", text: "Reduced order processing time" },
                    { number: "99.9%", label: "Accuracy", text: "Achieved 99.9% data accuracy rate" }
                ]},
                architecture: { intro: "The system utilizes a microservices architecture:", points: [
                    { title: "API Gateway", text: "Centralized routing and authentication" },
                    { title: "Sync Engine", text: "Core synchronization logic with event-driven processing" },
                    { title: "Queue Management", text: "Message queues for reliable async processing" },
                    { title: "Data Mapping", text: "Flexible transformation layer" }
                ]},
                lessons: { content: "This project deepened my understanding of enterprise integration patterns, GraphQL optimization, and handling complex business logic in distributed systems." }
            },
            sidebar: {
                details: { industry: "Jewelry E-commerce", duration: "6 months", role: "Lead Developer" },
                technologies: ["Node.js", "Express", "GraphQL", "Shopify API", "REST API", "MySQL", "Message Queue", "Cloud Hosting"],
                achievements: ["Eliminated 95% manual data entry", "99.9% data accuracy", "30% faster order processing", "Managing 10,000+ products", "Zero downtime deployment"],
                cta: { title: "Need an ERP Integration?", text: "Let's build a robust integration solution for your business." }
            },
            related: [
                { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation" },
                { id: "hubspot-sync", title: "HubSpot Sync", desc: "Real-time CRM synchronization" },
                { id: "b2b-platform", title: "B2B Platform", desc: "Collaborative product sharing" }
            ]
        }, 'en'),
        he: buildProjectData('erp-integration', {
            title: "מערכת אינטגרציה ERP-Shopify",
            lead: "סנכרון דו-כיווני מקיף בין Fantasy ERP ו-Shopify",
            breadcrumbCurrent: "אינטגרציה ERP",
            sections: {
                overview: { content: "פיתחתי מערכת סנכרון דו-כיוונית מקיפה בין Fantasy ERP ו-Shopify, המטפלת בחילופי נתונים בזמן אמת עבור מוצרים, מלאי, הזמנות, מידע על לקוחות ולוגיקה עסקית מותאמת אישית." },
                challenge: { content: "עסק המסחר האלקטרוני בתכשיטים התמודד עם אתגרים קריטיים עם הזנת נתונים ידנית וסנכרון בין מערכת ה-ERP שלהם לחנות Shopify, מה שהוביל לפערי מלאי ועיכובים בעיבוד הזמנות." },
                solution: { intro: "עיצבתי ויישמתי מערכת אינטגרציה חזקה וניתנת להרחבה:", points: [
                    { title: "סנכרון מוצרים דו-כיווני", text: "סנכרון בזמן אמת של נתוני מוצר כולל כותרות, תיאורים, תמחור ותמונות" },
                    { title: "ניהול מלאי", text: "עדכוני מלאי חיים המבטיחים רמות מלאי מדויקות" },
                    { title: "עיבוד הזמנות", text: "יצירת הזמנות אוטומטית ב-ERP עם עדכוני סטטוס" },
                    { title: "סנכרון נתוני לקוחות", text: "סנכרון חלק של פרופילי לקוחות" },
                    { title: "ניהול Metafields", text: "מיפוי metafield מותאם אישית לנתונים ספציפיים למוצר" },
                    { title: "טיפול בשגיאות ורישום", text: "מעקב שגיאות ומנגנוני ניסיון חוזר מקיפים" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-sync-alt", title: "סנכרון בזמן אמת", text: "עדכוני נתונים מיידיים בין ERP ו-Shopify" },
                    { icon: "fas fa-boxes", title: "תמיכה במספר מוצרים", text: "מטפל ביהלומים, אבני חן ותכשיטים" },
                    { icon: "fas fa-warehouse", title: "מעקב מלאי", text: "עדכוני רמות מלאי חיים" },
                    { icon: "fas fa-shopping-cart", title: "אוטומציה של הזמנות", text: "יצירת הזמנות ועדכוני סטטוס אוטומטיים" },
                    { icon: "fas fa-shield-alt", title: "התאוששות משגיאות", text: "מנגנוני ניסיון חוזר אוטומטיים" },
                    { icon: "fas fa-tags", title: "Metafields מותאמים אישית", text: "מיפוי נתונים מתקדם" }
                ]},
                results: { items: [
                    { number: "95%", label: "אוטומציה", text: "ביטול 95% מהזנת נתונים ידנית" },
                    { number: "30%", label: "עיבוד מהיר יותר", text: "הפחתת זמן עיבוד הזמנות" },
                    { number: "99.9%", label: "דיוק", text: "השגת שיעור דיוק נתונים של 99.9%" }
                ]},
                architecture: { intro: "המערכת משתמשת בארכיטקטורת microservices:", points: [
                    { title: "API Gateway", text: "ניתוב ואימות מרכזיים" },
                    { title: "מנוע סנכרון", text: "לוגיקת סנכרון ליבה עם עיבוד מונע אירועים" },
                    { title: "ניהול תורים", text: "תורי הודעות לעיבוד אסינכרוני אמין" },
                    { title: "מיפוי נתונים", text: "שכבת טרנספורמציה גמישה" }
                ]},
                lessons: { content: "הפרויקט הזה העמיק את ההבנה שלי בדפוסי אינטגרציה ארגוניים, אופטימיזציה של GraphQL וטיפול בלוגיקה עסקית מורכבת במערכות מבוזרות." }
            },
            sidebar: {
                details: { industry: "מסחר אלקטרוני בתכשיטים", duration: "6 חודשים", role: "מפתחת ראשית" },
                technologies: ["Node.js", "Express", "GraphQL", "Shopify API", "REST API", "MySQL", "Message Queue", "Cloud Hosting"],
                achievements: ["ביטול 95% מהזנת נתונים ידנית", "דיוק נתונים של 99.9%", "עיבוד הזמנות מהיר יותר ב-30%", "ניהול למעלה מ-10,000 מוצרים", "פריסה ללא זמן השבתה"],
                cta: { title: "צריך אינטגרציה ERP?", text: "בוא נבנה פתרון אינטגרציה חזק לעסק שלך." }
            },
            related: [
                { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים" },
                { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "סנכרון CRM בזמן אמת" },
                { id: "b2b-platform", title: "פלטפורמת B2B", desc: "שיתוף מוצרים שיתופי" }
            ]
        }, 'he')
    },
    'automation-workflows': {
        en: buildProjectData('automation-workflows', {
            title: "Event-Driven Automation Workflows",
            lead: "Automated business processes using Shopify webhooks and event-driven architecture",
            breadcrumbCurrent: "Automation Workflows",
            sections: {
                overview: { content: "Developed a comprehensive event-driven automation system that leverages Shopify webhooks to automatically trigger and execute business workflows, processing over 5,000 daily events." },
                challenge: { content: "The business was spending countless hours on repetitive manual tasks triggered by various events in the Shopify store - new orders, inventory changes, customer updates, and more." },
                solution: { intro: "I designed and built a robust event-driven automation platform:", points: [
                    { title: "Webhook Management", text: "Implemented secure webhook endpoints to receive real-time events from Shopify" },
                    { title: "Event Processing Engine", text: "Built a scalable event processing system that routes events to workflow handlers" },
                    { title: "Workflow Orchestration", text: "Created customizable workflow chains for sequential or parallel execution" },
                    { title: "Error Handling & Retry", text: "Sophisticated retry mechanisms with exponential backoff" },
                    { title: "Real-time Monitoring", text: "Comprehensive logging and monitoring dashboards" },
                    { title: "Integration Layer", text: "Connected workflows to external systems including ERP and email services" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-bolt", title: "Real-Time Processing", text: "Instant response to Shopify events" },
                    { icon: "fas fa-project-diagram", title: "Workflow Chains", text: "Build complex automation workflows" },
                    { icon: "fas fa-shield-alt", title: "Secure Webhooks", text: "HMAC signature verification" },
                    { icon: "fas fa-redo", title: "Auto-Retry Logic", text: "Intelligent retry mechanisms" },
                    { icon: "fas fa-chart-line", title: "Analytics Dashboard", text: "Real-time monitoring" },
                    { icon: "fas fa-plug", title: "Multi-Integration", text: "Connect to multiple systems" }
                ]},
                results: { items: [
                    { number: "80%", label: "Time Saved", text: "Reduced manual task time by 80%" },
                    { number: "5000+", label: "Daily Events", text: "Processing over 5000 events per day" },
                    { number: "99.9%", label: "Uptime", text: "Achieved 99.9% system reliability" }
                ]},
                architecture: { intro: "The system is built on event-driven microservices architecture:", points: [
                    { title: "Webhook Receiver", text: "Secure endpoints for receiving webhooks" },
                    { title: "Event Queue", text: "Message queue system for reliable processing" },
                    { title: "Workflow Engine", text: "Orchestrates complex business workflows" },
                    { title: "Integration Services", text: "Microservices for external systems" }
                ]},
                lessons: { content: "This project deepened my expertise in event-driven architectures, asynchronous processing patterns, and building resilient distributed systems." }
            },
            sidebar: {
                details: { industry: "Jewelry E-commerce", duration: "4 months", role: "Lead Developer" },
                technologies: ["Node.js", "Express", "Webhooks", "Message Queue", "Event-Driven Architecture", "Shopify API", "Redis", "MongoDB", "Docker"],
                achievements: ["80% reduction in manual tasks", "5000+ daily events processed", "99.9% system uptime", "Real-time event processing", "Zero data loss"],
                cta: { title: "Need Workflow Automation?", text: "Let's automate your business processes with event-driven workflows." }
            },
            related: [
                { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive data synchronization" },
                { id: "hubspot-sync", title: "HubSpot Sync", desc: "Real-time CRM synchronization" },
                { id: "b2b-platform", title: "B2B Platform", desc: "Collaborative product sharing" }
            ]
        }, 'en'),
        he: buildProjectData('automation-workflows', {
            title: "תהליכי אוטומציה מונעי אירועים",
            lead: "תהליכים עסקיים אוטומטיים באמצעות webhooks של Shopify וארכיטקטורה מונעת אירועים",
            breadcrumbCurrent: "תהליכי אוטומציה",
            sections: {
                overview: { content: "פיתחתי מערכת אוטומציה מקיפה מונעת אירועים שמנצלת webhooks של Shopify להפעלה ויישום אוטומטי של תהליכי עבודה עסקיים, מעבדת למעלה מ-5,000 אירועים יומיים." },
                challenge: { content: "העסק השקיע שעות רבות במשימות ידניות חוזרות המופעלות על ידי אירועים שונים בחנות Shopify - הזמנות חדשות, שינויי מלאי, עדכוני לקוחות ועוד." },
                solution: { intro: "עיצבתי ובניתי פלטפורמת אוטומציה חזקה מונעת אירועים:", points: [
                    { title: "ניהול Webhooks", text: "יישום נקודות קצה מאובטחות לקבלת אירועים בזמן אמת מ-Shopify" },
                    { title: "מנוע עיבוד אירועים", text: "בניית מערכת עיבוד אירועים ניתנת להרחבה" },
                    { title: "תזמור תהליכי עבודה", text: "יצירת שרשראות תהליכי עבודה להרצה ברצף או במקביל" },
                    { title: "טיפול בשגיאות וניסיון חוזר", text: "מנגנוני ניסיון חוזר מתוחכמים עם backoff אקספוננציאלי" },
                    { title: "ניטור בזמן אמת", text: "לוחות מחוונים מקיפים לרישום וניטור" },
                    { title: "שכבת אינטגרציה", text: "חיבור תהליכי עבודה למערכות חיצוניות כולל ERP" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-bolt", title: "עיבוד בזמן אמת", text: "תגובה מיידית לאירועי Shopify" },
                    { icon: "fas fa-project-diagram", title: "שרשראות תהליכי עבודה", text: "בניית תהליכי אוטומציה מורכבים" },
                    { icon: "fas fa-shield-alt", title: "Webhooks מאובטחים", text: "אימות חתימת HMAC" },
                    { icon: "fas fa-redo", title: "לוגיקת ניסיון חוזר אוטומטי", text: "מנגנוני ניסיון חוזר חכמים" },
                    { icon: "fas fa-chart-line", title: "לוח מחוונים אנליטי", text: "ניטור בזמן אמת" },
                    { icon: "fas fa-plug", title: "אינטגרציה מרובה", text: "התחברות למספר מערכות" }
                ]},
                results: { items: [
                    { number: "80%", label: "חיסכון בזמן", text: "הפחתת זמן משימות ידניות ב-80%" },
                    { number: "5000+", label: "אירועים יומיים", text: "עיבוד למעלה מ-5000 אירועים ביום" },
                    { number: "99.9%", label: "זמן פעילות", text: "השגת אמינות מערכת של 99.9%" }
                ]},
                architecture: { intro: "המערכת בנויה על ארכיטקטורת microservices מונעת אירועים:", points: [
                    { title: "מקלט Webhook", text: "נקודות קצה מאובטחות לקבלת webhooks" },
                    { title: "תור אירועים", text: "מערכת תור הודעות לעיבוד אמין" },
                    { title: "מנוע תהליכי עבודה", text: "מתזמר תהליכי עבודה עסקיים מורכבים" },
                    { title: "שירותי אינטגרציה", text: "Microservices למערכות חיצוניות" }
                ]},
                lessons: { content: "הפרויקט הזה העמיק את המומחיות שלי בארכיטקטורות מונעות אירועים, דפוסי עיבוד אסינכרוני ובניית מערכות מבוזרות עמידות." }
            },
            sidebar: {
                details: { industry: "מסחר אלקטרוני בתכשיטים", duration: "4 חודשים", role: "מפתחת ראשית" },
                technologies: ["Node.js", "Express", "Webhooks", "Message Queue", "Event-Driven Architecture", "Shopify API", "Redis", "MongoDB", "Docker"],
                achievements: ["הפחתה של 80% במשימות ידניות", "למעלה מ-5000 אירועים יומיים", "זמן פעילות של 99.9%", "עיבוד אירועים בזמן אמת", "אפס אובדן נתונים"],
                cta: { title: "צריך אוטומציה של תהליכי עבודה?", text: "בוא נאוטמט את התהליכים העסקיים שלך עם תהליכי עבודה מונעי אירועים." }
            },
            related: [
                { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים מקיף" },
                { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "סנכרון CRM בזמן אמת" },
                { id: "b2b-platform", title: "פלטפורמת B2B", desc: "שיתוף מוצרים שיתופי" }
            ]
        }, 'he')
    },
    'hubspot-sync': {
        en: buildProjectData('hubspot-sync', {
            title: "Shopify-HubSpot Sync Application",
            lead: "Real-time synchronization system for products, orders, and customer data between Shopify and HubSpot CRM",
            breadcrumbCurrent: "HubSpot Sync",
            sections: {
                overview: { content: "Developed a real-time synchronization application that seamlessly integrates Shopify with HubSpot CRM, enabling automated data flow between e-commerce and marketing platforms." },
                challenge: { content: "The marketing team needed customer and order data in HubSpot for targeted campaigns, but manual data entry was time-consuming and error-prone." },
                solution: { intro: "I built a robust sync application:", points: [
                    { title: "Bidirectional Sync", text: "Two-way data synchronization between platforms" },
                    { title: "Customer Profiles", text: "Automatic creation and updates of customer records" },
                    { title: "Order Tracking", text: "Real-time order data sync for campaign targeting" },
                    { title: "Product Catalog", text: "Product information synchronization" },
                    { title: "Custom Properties", text: "Mapping of custom fields and properties" },
                    { title: "Webhook Integration", text: "Real-time updates using webhooks" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-sync-alt", title: "Real-Time Sync", text: "Instant data updates between platforms" },
                    { icon: "fas fa-users", title: "Customer Sync", text: "Automated customer profile management" },
                    { icon: "fas fa-shopping-bag", title: "Order Sync", text: "Real-time order data synchronization" },
                    { icon: "fas fa-tag", title: "Product Sync", text: "Product catalog synchronization" },
                    { icon: "fas fa-cog", title: "Custom Mapping", text: "Flexible field mapping configuration" },
                    { icon: "fas fa-chart-bar", title: "Analytics", text: "Sync performance monitoring" }
                ]},
                results: { items: [
                    { number: "100%", label: "Automation", text: "Eliminated manual data entry" },
                    { number: "50%", label: "Campaign Efficiency", text: "Improved marketing campaign targeting" },
                    { number: "Real-time", label: "Data Sync", text: "Instant data availability in HubSpot" }
                ]},
                architecture: { intro: "Clean microservices architecture:", points: [
                    { title: "API Integration", text: "Handles Shopify and HubSpot APIs" },
                    { title: "Data Transformer", text: "Maps data between platforms" },
                    { title: "Sync Queue", text: "Ensures reliable data transfer" },
                    { title: "Error Handler", text: "Manages sync failures and retries" }
                ]},
                lessons: { content: "This project taught me about API rate limiting strategies, data transformation patterns, and building reliable sync systems between different platforms." }
            },
            sidebar: {
                details: { industry: "Jewelry E-commerce", duration: "3 months", role: "Full-Stack Developer" },
                technologies: ["Node.js", "Express", "Shopify API", "HubSpot API", "REST API", "Webhooks", "MongoDB"],
                achievements: ["100% automation of data entry", "Real-time data synchronization", "50% improved marketing efficiency", "Zero data loss"],
                cta: { title: "Need CRM Integration?", text: "Let's build a seamless integration with your CRM system." }
            },
            related: [
                { id: "erp-integration", title: "ERP Integration", desc: "Comprehensive ERP synchronization" },
                { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation" },
                { id: "data-sync-platform", title: "Data Sync Platform", desc: "Multi-store synchronization" }
            ]
        }, 'en'),
        he: buildProjectData('hubspot-sync', {
            title: "אפליקציית סנכרון Shopify-HubSpot",
            lead: "מערכת סנכרון בזמן אמת למוצרים, הזמנות ונתוני לקוחות בין Shopify ו-HubSpot CRM",
            breadcrumbCurrent: "סנכרון HubSpot",
            sections: {
                overview: { content: "פיתחתי אפליקציית סנכרון בזמן אמת שמשלבת בצורה חלקה Shopify עם HubSpot CRM, מאפשרת זרימת נתונים אוטומטית בין פלטפורמות מסחר אלקטרוני ושיווק." },
                challenge: { content: "צוות השיווק היה זקוק לנתוני לקוחות והזמנות ב-HubSpot לקמפיינים ממוקדים, אבל הזנת נתונים ידנית הייתה גוזלת זמן ונוטה לטעויות." },
                solution: { intro: "בניתי אפליקציית סנכרון חזקה:", points: [
                    { title: "סנכרון דו-כיווני", text: "סנכרון נתונים דו-כיווני בין הפלטפורמות" },
                    { title: "פרופילי לקוחות", text: "יצירה ועדכון אוטומטי של רשומות לקוחות" },
                    { title: "מעקב הזמנות", text: "סנכרון נתוני הזמנות בזמן אמת למיקוד קמפיינים" },
                    { title: "קטלוג מוצרים", text: "סנכרון מידע על מוצרים" },
                    { title: "מאפיינים מותאמים אישית", text: "מיפוי שדות ומאפיינים מותאמים אישית" },
                    { title: "אינטגרציית Webhook", text: "עדכונים בזמן אמת באמצעות webhooks" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-sync-alt", title: "סנכרון בזמן אמת", text: "עדכוני נתונים מיידיים בין הפלטפורמות" },
                    { icon: "fas fa-users", title: "סנכרון לקוחות", text: "ניהול פרופילי לקוחות אוטומטי" },
                    { icon: "fas fa-shopping-bag", title: "סנכרון הזמנות", text: "סנכרון נתוני הזמנות בזמן אמת" },
                    { icon: "fas fa-tag", title: "סנכרון מוצרים", text: "סנכרון קטלוג מוצרים" },
                    { icon: "fas fa-cog", title: "מיפוי מותאם אישית", text: "תצורת מיפוי שדות גמישה" },
                    { icon: "fas fa-chart-bar", title: "אנליטיקה", text: "ניטור ביצועי סנכרון" }
                ]},
                results: { items: [
                    { number: "100%", label: "אוטומציה", text: "ביטול הזנת נתונים ידנית" },
                    { number: "50%", label: "יעילות קמפיין", text: "שיפור מיקוד קמפיינים שיווקיים" },
                    { number: "בזמן אמת", label: "סנכרון נתונים", text: "זמינות נתונים מיידית ב-HubSpot" }
                ]},
                architecture: { intro: "ארכיטקטורת microservices נקייה:", points: [
                    { title: "אינטגרציית API", text: "מטפלת ב-APIs של Shopify ו-HubSpot" },
                    { title: "טרנספורמר נתונים", text: "ממפה נתונים בין הפלטפורמות" },
                    { title: "תור סנכרון", text: "מבטיח העברת נתונים אמינה" },
                    { title: "מטפל שגיאות", text: "מנהל כשלי סנכרון וניסיונות חוזרים" }
                ]},
                lessons: { content: "הפרויקט הזה לימד אותי על אסטרטגיות הגבלת קצב API, דפוסי טרנספורמציה של נתונים ובניית מערכות סנכרון אמינות בין פלטפורמות שונות." }
            },
            sidebar: {
                details: { industry: "מסחר אלקטרוני בתכשיטים", duration: "3 חודשים", role: "מפתחת Full-Stack" },
                technologies: ["Node.js", "Express", "Shopify API", "HubSpot API", "REST API", "Webhooks", "MongoDB"],
                achievements: ["אוטומציה של 100% מהזנת נתונים", "סנכרון נתונים בזמן אמת", "שיפור של 50% ביעילות שיווקית", "אפס אובדן נתונים"],
                cta: { title: "צריך אינטגרציה CRM?", text: "בוא נבנה אינטגרציה חלקה עם מערכת ה-CRM שלך." }
            },
            related: [
                { id: "erp-integration", title: "אינטגרציה ERP", desc: "סנכרון ERP מקיף" },
                { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים" },
                { id: "data-sync-platform", title: "פלטפורמת סנכרון נתונים", desc: "סנכרון רב-חנויות" }
            ]
        }, 'he')
    },
    'data-sync-platform': {
        en: buildProjectData('data-sync-platform', {
            title: "Multi-Store Data Synchronization Platform",
            lead: "Advanced platform for seamless data import/export between multiple Shopify stores",
            breadcrumbCurrent: "Data Sync Platform",
            sections: {
                overview: { content: "Built a comprehensive data synchronization platform that enables seamless product catalog, inventory, and customer data exchange between multiple Shopify stores." },
                challenge: { content: "Managing multiple Shopify stores with thousands of products required significant manual effort to keep catalogs synchronized and inventory levels accurate across all stores." },
                solution: { intro: "I developed an advanced synchronization platform:", points: [
                    { title: "Bidirectional Sync", text: "Two-way data flow between multiple Shopify stores" },
                    { title: "Product Catalog Sync", text: "Complete synchronization of product data, images, and variants" },
                    { title: "Inventory Management", text: "Real-time inventory tracking across all stores" },
                    { title: "Selective Sync", text: "Configurable rules for what data to synchronize" },
                    { title: "Bulk Operations", text: "Import/export thousands of products efficiently" },
                    { title: "Data Validation", text: "Ensures data integrity during synchronization" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-exchange-alt", title: "Bidirectional Sync", text: "Two-way data synchronization" },
                    { icon: "fas fa-cubes", title: "Product Catalog", text: "Complete product data sync" },
                    { icon: "fas fa-warehouse", title: "Inventory Sync", text: "Real-time stock level updates" },
                    { icon: "fas fa-filter", title: "Selective Sync", text: "Customizable sync rules" },
                    { icon: "fas fa-file-export", title: "Bulk Export/Import", text: "Handle large datasets" },
                    { icon: "fas fa-check-double", title: "Data Validation", text: "Ensures data integrity" }
                ]},
                results: { items: [
                    { number: "90%", label: "Time Reduction", text: "Reduced manual synchronization time" },
                    { number: "5+", label: "Stores Connected", text: "Successfully synchronized 5+ stores" },
                    { number: "99.9%", label: "Data Accuracy", text: "Maintained high data accuracy" }
                ]},
                architecture: { intro: "Scalable platform architecture:", points: [
                    { title: "Sync Coordinator", text: "Orchestrates multi-store synchronization" },
                    { title: "Data Pipeline", text: "Handles data transformation and validation" },
                    { title: "Queue System", text: "Manages large-scale data operations" },
                    { title: "Conflict Resolution", text: "Handles data conflicts intelligently" }
                ]},
                lessons: { content: "This project taught me about distributed data synchronization, conflict resolution strategies, and building scalable data pipelines for multi-tenant systems." }
            },
            sidebar: {
                details: { industry: "Multi-Store E-commerce", duration: "5 months", role: "Lead Developer" },
                technologies: ["Node.js", "Shopify API", "REST API", "GraphQL", "MongoDB", "Message Queue", "Data Pipeline"],
                achievements: ["90% time reduction in manual sync", "5+ stores synchronized", "99.9% data accuracy", "Handles 10,000+ products", "Zero data loss"],
                cta: { title: "Need Multi-Store Sync?", text: "Let's build a robust synchronization solution for your store network." }
            },
            related: [
                { id: "erp-integration", title: "ERP Integration", desc: "Enterprise system integration" },
                { id: "hubspot-sync", title: "HubSpot Sync", desc: "CRM synchronization" },
                { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation" }
            ]
        }, 'en'),
        he: buildProjectData('data-sync-platform', {
            title: "פלטפורמת סנכרון נתונים בין חנויות",
            lead: "פלטפורמה מתקדמת ליבוא/יצוא נתונים חלק בין מספר חנויות שופיפיי",
            breadcrumbCurrent: "פלטפורמת סנכרון נתונים",
            sections: {
                overview: { content: "בניתי פלטפורמת סנכרון נתונים מקיפה שמאפשרת חילופי קטלוג מוצרים, מלאי ונתוני לקוחות חלקים בין מספר חנויות שופיפיי." },
                challenge: { content: "ניהול מספר חנויות שופיפיי עם אלפי מוצרים דרש מאמץ ידני משמעותי כדי לשמור על קטלוגים מסונכרנים ורמות מלאי מדויקות בכל החנויות." },
                solution: { intro: "פיתחתי פלטפורמת סנכרון מתקדמת:", points: [
                    { title: "סנכרון דו-כיווני", text: "זרימת נתונים דו-כיוונית בין מספר חנויות שופיפיי" },
                    { title: "סנכרון קטלוג מוצרים", text: "סנכרון מלא של נתוני מוצר, תמונות וגרסאות" },
                    { title: "ניהול מלאי", text: "מעקב מלאי בזמן אמת בכל החנויות" },
                    { title: "סנכרון בררני", text: "כללים הניתנים להגדרה למה לסנכרן" },
                    { title: "פעולות בכמות גדולה", text: "יבוא/יצוא אלפי מוצרים ביעילות" },
                    { title: "אימות נתונים", text: "מבטיח שלמות נתונים במהלך הסנכרון" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-exchange-alt", title: "סנכרון דו-כיווני", text: "סנכרון נתונים דו-כיווני" },
                    { icon: "fas fa-cubes", title: "קטלוג מוצרים", text: "סנכרון נתוני מוצר מלא" },
                    { icon: "fas fa-warehouse", title: "סנכרון מלאי", text: "עדכוני רמות מלאי בזמן אמת" },
                    { icon: "fas fa-filter", title: "סנכרון בררני", text: "כללי סנכרון הניתנים להתאמה אישית" },
                    { icon: "fas fa-file-export", title: "יצוא/יבוא בכמות גדולה", text: "טיפול במערכי נתונים גדולים" },
                    { icon: "fas fa-check-double", title: "אימות נתונים", text: "מבטיח שלמות נתונים" }
                ]},
                results: { items: [
                    { number: "90%", label: "הפחתת זמן", text: "הפחתת זמן סנכרון ידני" },
                    { number: "5+", label: "חנויות מחוברות", text: "סנכרון מוצלח של 5+ חנויות" },
                    { number: "99.9%", label: "דיוק נתונים", text: "שמירה על דיוק נתונים גבוה" }
                ]},
                architecture: { intro: "ארכיטקטורת פלטפורמה ניתנת להרחבה:", points: [
                    { title: "רכז סנכרון", text: "מתזמר סנכרון רב-חנויות" },
                    { title: "צינור נתונים", text: "מטפל בטרנספורמציה ואימות נתונים" },
                    { title: "מערכת תורים", text: "מנהלת פעולות נתונים בקנה מידה גדול" },
                    { title: "פתרון קונפליקטים", text: "מטפל בקונפליקטי נתונים בצורה חכמה" }
                ]},
                lessons: { content: "הפרויקט הזה לימד אותי על סנכרון נתונים מבוזר, אסטרטגיות פתרון קונפליקטים ובניית צינורות נתונים ניתנים להרחבה למערכות רב-דיירות." }
            },
            sidebar: {
                details: { industry: "מסחר אלקטרוני רב-חנויות", duration: "5 חודשים", role: "מפתחת ראשית" },
                technologies: ["Node.js", "Shopify API", "REST API", "GraphQL", "MongoDB", "Message Queue", "Data Pipeline"],
                achievements: ["הפחתת 90% בסנכרון ידני", "5+ חנויות מסונכרנות", "דיוק נתונים של 99.9%", "מטפלת ב-10,000+ מוצרים", "אפס אובדן נתונים"],
                cta: { title: "צריך סנכרון רב-חנויות?", text: "בוא נבנה פתרון סנכרון חזק לרשת החנויות שלך." }
            },
            related: [
                { id: "erp-integration", title: "אינטגרציה ERP", desc: "אינטגרציה של מערכת ארגונית" },
                { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "סנכרון CRM" },
                { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים" }
            ]
        }, 'he')
    },
    
    'b2b-platform': {
        en: buildProjectData('b2b-platform', {
            title: "B2B Product Sharing Platform",
            lead: "Shopify-integrated platform enabling merchants to share and collaborate on product catalogs",
            breadcrumbCurrent: "B2B Platform",
            sections: {
                overview: { content: "Developed a B2B platform that allows Shopify merchants to share their product catalogs with business partners, enabling collaborative product management and streamlined B2B transactions." },
                challenge: { content: "B2B merchants needed a way to share product catalogs with partners while maintaining control over pricing, availability, and permissions without duplicating data across multiple stores." },
                solution: { intro: "I built a comprehensive B2B sharing platform:", points: [
                    { title: "Catalog Sharing", text: "Enable product catalog sharing between merchants" },
                    { title: "Permission Management", text: "Granular control over who can view and modify products" },
                    { title: "Custom Pricing", text: "Partner-specific pricing and discounts" },
                    { title: "Order Management", text: "Streamlined B2B order processing" },
                    { title: "Inventory Sync", text: "Real-time inventory synchronization" },
                    { title: "Collaboration Tools", text: "Product notes and collaboration features" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-share-alt", title: "Catalog Sharing", text: "Share products with partners" },
                    { icon: "fas fa-lock", title: "Access Control", text: "Granular permission management" },
                    { icon: "fas fa-dollar-sign", title: "Custom Pricing", text: "Partner-specific pricing" },
                    { icon: "fas fa-clipboard-list", title: "Order Management", text: "B2B order processing" },
                    { icon: "fas fa-sync", title: "Inventory Sync", text: "Real-time stock updates" },
                    { icon: "fas fa-comments", title: "Collaboration", text: "Product notes and discussions" }
                ]},
                results: { items: [
                    { number: "60%", label: "Time Savings", text: "Reduced B2B order processing time" },
                    { number: "100+", label: "Partners Connected", text: "Successfully onboarded partners" },
                    { number: "40%", label: "Revenue Growth", text: "Increased B2B revenue" }
                ]},
                architecture: { intro: "Secure multi-tenant architecture:", points: [
                    { title: "Auth & Permissions", text: "Secure access control system" },
                    { title: "Data Isolation", text: "Ensures data privacy between tenants" },
                    { title: "API Gateway", text: "Handles all external integrations" },
                    { title: "Real-time Updates", text: "WebSocket-based live updates" }
                ]},
                lessons: { content: "This project taught me about multi-tenant architecture design, implementing granular permission systems, and building collaborative platforms for B2B use cases." }
            },
            sidebar: {
                details: { industry: "B2B E-commerce", duration: "4 months", role: "Full-Stack Developer" },
                technologies: ["Node.js", "React", "Shopify API", "MongoDB", "WebSockets", "REST API"],
                achievements: ["60% faster B2B processing", "100+ partners onboarded", "40% revenue increase", "Secure multi-tenant system"],
                cta: { title: "Need a B2B Platform?", text: "Let's build a collaborative B2B solution for your business." }
            },
            related: [
                { id: "data-sync-platform", title: "Data Sync Platform", desc: "Multi-store synchronization" },
                { id: "erp-integration", title: "ERP Integration", desc: "Enterprise system integration" },
                { id: "automation-workflows", title: "Automation Workflows", desc: "Business process automation" }
            ]
        }, 'en'),
        he: buildProjectData('b2b-platform', {
            title: "פלטפורמת שיתוף מוצרים B2B",
            lead: "פלטפורמה משולבת ב-Shopify המאפשרת לסוחרים לשתף ולשתף פעולה בקטלוגי מוצרים",
            breadcrumbCurrent: "פלטפורמת B2B",
            sections: {
                overview: { content: "פיתחתי פלטפורמת B2B שמאפשרת לסוחרי Shopify לשתף את קטלוגי המוצרים שלהם עם שותפים עסקיים, ומאפשרת ניהול מוצרים שיתופי ועסקאות B2B מיועלות." },
                challenge: { content: "סוחרי B2B נזקקו לדרך לשתף קטלוגי מוצרים עם שותפים תוך שמירה על שליטה על תמחור, זמינות והרשאות מבלי לשכפל נתונים במספר חנויות." },
                solution: { intro: "בניתי פלטפורמת שיתוף B2B מקיפה:", points: [
                    { title: "שיתוף קטלוג", text: "אפשר שיתוף קטלוג מוצרים בין סוחרים" },
                    { title: "ניהול הרשאות", text: "שליטה גרנולרית על מי יכול לצפות ולשנות מוצרים" },
                    { title: "תמחור מותאם אישית", text: "תמחור והנחות ספציפיים לשותף" },
                    { title: "ניהול הזמנות", text: "עיבוד הזמנות B2B מיועל" },
                    { title: "סנכרון מלאי", text: "סנכרון מלאי בזמן אמת" },
                    { title: "כלי שיתוף פעולה", text: "הערות מוצר ותכונות שיתוף פעולה" }
                ]},
                implementation: {},
                features: { list: [
                    { icon: "fas fa-share-alt", title: "שיתוף קטלוג", text: "שיתוף מוצרים עם שותפים" },
                    { icon: "fas fa-lock", title: "בקרת גישה", text: "ניהול הרשאות גרנולרי" },
                    { icon: "fas fa-dollar-sign", title: "תמחור מותאם אישית", text: "תמחור ספציפי לשותף" },
                    { icon: "fas fa-clipboard-list", title: "ניהול הזמנות", text: "עיבוד הזמנות B2B" },
                    { icon: "fas fa-sync", title: "סנכרון מלאי", text: "עדכוני מלאי בזמן אמת" },
                    { icon: "fas fa-comments", title: "שיתוף פעולה", text: "הערות מוצר ודיונים" }
                ]},
                results: { items: [
                    { number: "60%", label: "חיסכון בזמן", text: "הפחתת זמן עיבוד הזמנות B2B" },
                    { number: "100+", label: "שותפים מחוברים", text: "שותפים שהצטרפו בהצלחה" },
                    { number: "40%", label: "צמיחה בהכנסות", text: "הגדלת הכנסות B2B" }
                ]},
                architecture: { intro: "ארכיטקטורה רב-דיירות מאובטחת:", points: [
                    { title: "אימות והרשאות", text: "מערכת בקרת גישה מאובטחת" },
                    { title: "בידוד נתונים", text: "מבטיחה פרטיות נתונים בין דיירים" },
                    { title: "API Gateway", text: "מטפל בכל האינטגרציות החיצוניות" },
                    { title: "עדכונים בזמן אמת", text: "עדכונים חיים מבוססי WebSocket" }
                ]},
                lessons: { content: "הפרויקט הזה לימד אותי על עיצוב ארכיטקטורת רב-דיירות, יישום מערכות הרשאות גרנולריות ובניית פלטפורמות שיתופיות למקרי שימוש B2B." }
            },
            sidebar: {
                details: { industry: "מסחר אלקטרוני B2B", duration: "4 חודשים", role: "מפתחת Full-Stack" },
                technologies: ["Node.js", "React", "Shopify API", "MongoDB", "WebSockets", "REST API"],
                achievements: ["עיבוד B2B מהיר יותר ב-60%", "100+ שותפים שהצטרפו", "עלייה של 40% בהכנסות", "מערכת רב-דיירות מאובטחת"],
                cta: { title: "צריך פלטפורמת B2B?", text: "בוא נבנה פתרון B2B שיתופי לעסק שלך." }
            },
            related: [
                { id: "data-sync-platform", title: "פלטפורמת סנכרון נתונים", desc: "סנכרון רב-חנויות" },
                { id: "erp-integration", title: "אינטגרציה ERP", desc: "אינטגרציה של מערכת ארגונית" },
                { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציית תהליכים עסקיים" }
            ]
        }, 'he')
    }

};

// Make data available globally
if (typeof window !== 'undefined') {
    window.projectsDetailData = projectsDetailData;
    window.projectsCommonData = projectsCommonData;
    window.projectsStaticMeta = projectsStaticMeta;
}
