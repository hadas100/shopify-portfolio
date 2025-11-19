// ========== Projects Detail Data - Bilingual Support ==========

const projectsDetailData = {
    'ai-image-generation': {
        en: {
            title: "AI-Powered Image Generation App",
            lead: "Shopify-integrated application for automated product image generation using AI",
            meta: {
                year: "2024",
                company: "Leibish Online",
                tech: "JavaScript, Node.js, OpenAI API"
            },
            breadcrumb: {
                home: "Home",
                projects: "Projects",
                current: "AI Image Generation"
            },
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
                implementation: {
                    title: "Technical Implementation"
                },
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
                    title: "Project Details",
                    items: {
                        client: { label: "Client", value: "Leibish Online" },
                        industry: { label: "Industry", value: "Jewelry E-commerce" },
                        year: { label: "Year", value: "2024" },
                        duration: { label: "Duration", value: "3 months" },
                        role: { label: "Role", value: "Full-Stack Developer" }
                    }
                },
                technologies: {
                    title: "Technologies Used",
                    tags: ["JavaScript", "Node.js", "Express", "Shopify API", "OpenAI API", "Gemini API", "REST API", "Cloud Storage"]
                },
                achievements: {
                    title: "Key Achievements",
                    list: [
                        "Reduced photography costs by 60%",
                        "Improved product listing speed by 70%",
                        "Generated 1000+ product images",
                        "95% image quality approval rate"
                    ]
                },
                cta: {
                    title: "Interested in This Solution?",
                    text: "Let's discuss how I can build a similar solution for your business.",
                    button: "Get in Touch"
                }
            },
            related: {
                title: "Related Projects",
                projects: [
                    { id: "ai-descriptions", title: "AI Product Description Generator", desc: "Automated product description generation using AI" },
                    { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive bidirectional data synchronization" },
                    { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation with Shopify webhooks" }
                ]
            },
            nav: {
                back: "Back to Portfolio"
            },
            footer: {
                copyright: "© 2026 Hadas Schweitzer. All rights reserved.",
                back: "Back to Portfolio"
            }
        },
        he: {
            title: "אפליקציית יצירת תמונות AI",
            lead: "אפליקציה משולבת ב-Shopify ליצירת תמונות מוצר אוטומטית באמצעות בינה מלאכותית",
            meta: {
                year: "2024",
                company: "Leibish Online",
                tech: "JavaScript, Node.js, OpenAI API"
            },
            breadcrumb: {
                home: "בית",
                projects: "פרויקטים",
                current: "יצירת תמונות AI"
            },
            sections: {
                overview: {
                    title: "סקירת הפרויקט",
                    content: "פיתחתי אפליקציה מתוחכמת המשולבת עם Shopify שמנצלת בינה מלאכותית כדי ליצור באופן אוטומטי תמונות מוצר מותאמות אישית. הפתרון מייעל את תהליך צילום המוצרים עבור עסקי מסחר אלקטרוני, מפחית באופן משמעותי זמן ועלויות הקשורים לצילום מוצרים מסורתי."
                },
                challenge: {
                    title: "האתגר",
                    content: "עסקי מסחר אלקטרוני מתקשים ליצור תמונות מוצר עקביות ואיכותיות בקנה מידה גדול. צילום מסורתי הוא תהליך גוזל זמן ויקר, במיוחד כשמדובר באלפי וריאציות של מוצרים. תעשיית התכשיטים, במיוחד, דורשת תמונות יפות ומפורטות המציגות מוצרים מזוויות מרובות ובסביבות שונות."
                },
                solution: {
                    title: "הפתרון",
                    intro: "בניתי מערכת אוטומטית המשתלבת בצורה חלקה עם קטלוג המוצרים של Shopify:",
                    points: [
                        { title: "אחזור מבוסס SKU", text: "האפליקציה מאחזרת נתוני מוצרים ישירות מ-Shopify באמצעות מזהי SKU דרך Shopify REST API" },
                        { title: "יצירת תמונות AI", text: "משתמשת ב-DALL-E של OpenAI וב-Gemini APIs של Google ליצירת תמונות מוצר איכותיות על בסיס מפרטי המוצר" },
                        { title: "העלאה אוטומטית", text: "תמונות שנוצרו מועלות אוטומטית חזרה לרשומות המוצר המתאימות ב-Shopify" },
                        { title: "עיבוד אצווה", text: "תומך ביצירת תמונות בכמות גדולה עבור מספר מוצרים בו-זמנית" },
                        { title: "בקרת איכות", text: "מיישם בדיקות תקינות כדי להבטיח שהתמונות שנוצרו עומדות בסטנדרטים של איכות" }
                    ]
                },
                implementation: {
                    title: "יישום טכני"
                },
                features: {
                    title: "תכונות עיקריות",
                    list: [
                        { icon: "fas fa-search", title: "אחזור נתוני מוצר", text: "מאחזר אוטומטית מידע על מוצרים מ-Shopify באמצעות SKU או מזהה מוצר" },
                        { icon: "fas fa-magic", title: "יצירה מבוססת AI", text: "יוצר תמונות ייחודיות ואיכותיות באמצעות מודלים מתקדמים של AI" },
                        { icon: "fas fa-cloud-upload-alt", title: "העלאה אוטומטית", text: "מעלה בצורה חלקה תמונות שנוצרו חזרה לרשומות המוצר ב-Shopify" },
                        { icon: "fas fa-layer-group", title: "עיבוד אצווה", text: "מעבד מספר מוצרים בפעולה אחת ליעילות מרבית" },
                        { icon: "fas fa-check-circle", title: "אימות איכות", text: "מבטיח שהתמונות שנוצרו עומדות בסטנדרטים מוגדרים מראש" },
                        { icon: "fas fa-sync", title: "עדכונים בזמן אמת", text: "מספק משוב מיידי על סטטוס היצירה והתקדמות" }
                    ]
                },
                results: {
                    title: "תוצאות והשפעה",
                    items: [
                        { number: "70%", label: "חיסכון בזמן", text: "הפחתה של 70% בזמן צילום מוצרים" },
                        { number: "1000+", label: "תמונות שנוצרו", text: "יצירה מוצלחת של למעלה מ-1000 תמונות מוצר" },
                        { number: "$50k", label: "הפחתת עלויות", text: "חיסכון של כ-50k$ בעלויות צילום" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורת הקוד",
                    intro: "האפליקציה עוקבת אחר ארכיטקטורה מודולרית עם הפרדה ברורה של אחריות:",
                    points: [
                        { title: "שכבת API", text: "מטפלת בתקשורת עם Shopify, OpenAI ו-Gemini APIs" },
                        { title: "שכבת עיבוד", text: "מנהלת את לוגיקת יצירת התמונות ותזמון תהליכי העבודה" },
                        { title: "שכבת אימות", text: "מבטיחה שלמות נתונים ואיכות תמונה" },
                        { title: "שכבת אחסון", text: "מנהלת אחסון זמני וניקוי של נכסים שנוצרו" }
                    ]
                },
                lessons: {
                    title: "לקחים שנלמדו",
                    content: "הפרויקט הזה לימד אותי שיעורים חשובים על עבודה עם APIs של AI בקנה מידה גדול, כולל טיפול במגבלות קצב, אופטימיזציה של עלויות API והבטחת איכות עקבית בין מודלים שונים של AI. בנוסף רכשתי מומחיות עמוקה ב-APIs לניהול מדיה של Shopify ושיטות עבודה מומלצות לטיפול בנכסים בקנה מידה גדול."
                }
            },
            sidebar: {
                details: {
                    title: "פרטי הפרויקט",
                    items: {
                        client: { label: "לקוח", value: "Leibish Online" },
                        industry: { label: "תעשייה", value: "מסחר אלקטרוני בתכשיטים" },
                        year: { label: "שנה", value: "2024" },
                        duration: { label: "משך זמן", value: "3 חודשים" },
                        role: { label: "תפקיד", value: "מפתחת Full-Stack" }
                    }
                },
                technologies: {
                    title: "טכנולוגיות בשימוש",
                    tags: ["JavaScript", "Node.js", "Express", "Shopify API", "OpenAI API", "Gemini API", "REST API", "Cloud Storage"]
                },
                achievements: {
                    title: "הישגים מרכזיים",
                    list: [
                        "הפחתה של 60% בעלויות צילום",
                        "שיפור של 70% במהירות רישום מוצרים",
                        "יצירה של למעלה מ-1000 תמונות מוצר",
                        "95% שיעור אישור איכות תמונה"
                    ]
                },
                cta: {
                    title: "מעוניין בפתרון הזה?",
                    text: "בואו נדבר על איך אני יכולה לבנות פתרון דומה עבור העסק שלך.",
                    button: "צור קשר"
                }
            },
            related: {
                title: "פרויקטים קשורים",
                projects: [
                    { id: "ai-descriptions", title: "מחולל תיאורי מוצרים AI", desc: "יצירה אוטומטית של תיאורי מוצרים באמצעות AI" },
                    { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים דו-כיווני מקיף" },
                    { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים עם webhooks של Shopify" }
                ]
            },
            nav: {
                back: "חזרה לתיק העבודות"
            },
            footer: {
                copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.",
                back: "חזרה לתיק העבודות"
            }
        }
    }
};

// Current language
let currentProjectLanguage = 'en';
