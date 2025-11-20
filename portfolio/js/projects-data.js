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
                    title: "Project Overview",
                    content: "Developed a sophisticated Shopify-integrated application that leverages artificial intelligence to automatically generate customized product images. This solution streamlines the product photography workflow for e-commerce businesses, significantly reducing time and costs associated with traditional product photography."
                },
                challenge: {
                    title: "The Challenge",
                    content: "E-commerce businesses often struggle with creating consistent, high-quality product images at scale. Traditional photography is time-consuming and expensive, especially when dealing with thousands of product variations. The jewelry industry, in particular, requires beautiful, detailed images that showcase products from multiple angles and in various settings."
                },
                solution: {
                    title: "The Solution",
                    intro: "I built an automated system that integrates seamlessly with Shopify's product catalog:",
                    points: [
                        { title: "SKU-Based Retrieval", text: "The application fetches product data directly from Shopify using SKU identifiers via the Shopify REST API" },
                        { title: "AI Image Generation", text: "Utilizes both OpenAI's DALL-E and Google's Gemini APIs to generate high-quality product images based on product specifications" },
                        { title: "Automated Upload", text: "Generated images are automatically uploaded back to the corresponding Shopify product records" },
                        { title: "Batch Processing", text: "Supports bulk image generation for multiple products simultaneously" },
                        { title: "Quality Control", text: "Implements validation checks to ensure generated images meet quality standards" }
                    ]
                },
                implementation: { title: "Technical Implementation" },
                features: {
                    title: "Key Features",
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
                    title: "Results & Impact",
                    items: [
                        { number: "70%", label: "Time Savings", text: "Reduced product photography time by 70%" },
                        { number: "1000+", label: "Images Generated", text: "Successfully generated over 1000 product images" },
                        { number: "$50k", label: "Cost Reduction", text: "Saved approximately $50k in photography costs" }
                    ]
                },
                architecture: {
                    title: "Code Architecture",
                    intro: "The application follows a modular architecture with clear separation of concerns:",
                    points: [
                        { title: "API Layer", text: "Handles communication with Shopify, OpenAI, and Gemini APIs" },
                        { title: "Processing Layer", text: "Manages image generation logic and workflow orchestration" },
                        { title: "Validation Layer", text: "Ensures data integrity and image quality" },
                        { title: "Storage Layer", text: "Manages temporary storage and cleanup of generated assets" }
                    ]
                },
                lessons: {
                    title: "Lessons Learned",
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
                    title: "סקירת הפרויקט",
                    content: "פיתחתי אפליקציה מתוחכמת משולבת ב-Shopify שמנצלת בינה מלאכותית כדי ליצור אוטומטית תמונות מוצר מותאמות אישית. הפתרון מייעל את זרימת העבודה של צילום מוצרים עבור עסקי מסחר אלקטרוני, מפחית משמעותית זמן ועלויות הקשורים לצילום מסורתי של מוצרים."
                },
                challenge: {
                    title: "האתגר",
                    content: "עסקי מסחר אלקטרוני לעיתים קרובות מתקשים ליצור תמונות מוצר עקביות ואיכותיות בקנה מידה גדול. צילום מסורתי גוזל זמן ויקר, במיוחד כשמדובר באלפי וריאציות של מוצרים. תעשיית התכשיטים, במיוחד, דורשת תמונות יפות ומפורטות שמציגות מוצרים מזוויות מרובות ובהגדרות שונות."
                },
                solution: {
                    title: "הפתרון",
                    intro: "בניתי מערכת אוטומטית שמשתלבת בצורה חלקה עם קטלוג המוצרים של Shopify:",
                    points: [
                        { title: "אחזור מבוסס SKU", text: "האפליקציה שואבת נתוני מוצר ישירות מ-Shopify באמצעות מזהי SKU דרך Shopify REST API" },
                        { title: "יצירת תמונות AI", text: "משתמש ב-APIs של OpenAI DALL-E ו-Google Gemini כדי ליצור תמונות מוצר איכותיות על בסיס מפרטי המוצר" },
                        { title: "העלאה אוטומטית", text: "תמונות שנוצרו מועלות אוטומטית חזרה לרשומות המוצר המתאימות ב-Shopify" },
                        { title: "עיבוד אצווה", text: "תומך ביצירת תמונות בכמות גדולה עבור מוצרים מרובים בו-זמנית" },
                        { title: "בקרת איכות", text: "מיישם בדיקות אימות כדי להבטיח שתמונות שנוצרו עומדות בתקני איכות" }
                    ]
                },
                implementation: { title: "יישום טכני" },
                features: {
                    title: "תכונות עיקריות",
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
                    title: "תוצאות והשפעה",
                    items: [
                        { number: "70%", label: "חיסכון בזמן", text: "הפחתה של 70% בזמן צילום מוצרים" },
                        { number: "1000+", label: "תמונות שנוצרו", text: "יצירה מוצלחת של למעלה מ-1000 תמונות מוצר" },
                        { number: "$50k", label: "הפחתת עלויות", text: "חיסכון של כ-$50k בעלויות צילום" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורת קוד",
                    intro: "האפליקציה עוקבת אחר ארכיטקטורה מודולרית עם הפרדה ברורה של תחומי אחריות:",
                    points: [
                        { title: "שכבת API", text: "מטפלת בתקשורת עם APIs של Shopify, OpenAI ו-Gemini" },
                        { title: "שכבת עיבוד", text: "מנהלת לוגיקת יצירת תמונות ותזמור זרימת עבודה" },
                        { title: "שכבת אימות", text: "מבטיחה שלמות נתונים ואיכות תמונה" },
                        { title: "שכבת אחסון", text: "מנהלת אחסון זמני וניקוי של נכסים שנוצרו" }
                    ]
                },
                lessons: {
                    title: "לקחים שנלמדו",
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
    }
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.projectsDetailData = projectsDetailData;
    window.projectsCommonData = projectsCommonData;
    window.projectsStaticMeta = projectsStaticMeta;
}
