// ========== Projects Detail Data - Bilingual Support ==========

const projectsDetailData = {
    'ai-image-generation': {
        en: {
            title: "AI-Powered Image Generation App",
            lead: "Shopify-integrated application for automated product image generation using AI",
            meta: { year: "2024", company: "Leibish Online", tech: "JavaScript, Node.js, OpenAI API" },
            breadcrumb: { home: "Home", projects: "Projects", current: "AI Image Generation" },
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
                    list: ["Reduced photography costs by 60%", "Improved product listing speed by 70%", "Generated 1000+ product images", "95% image quality approval rate"]
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
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "אפליקציית יצירת תמונות AI",
            lead: "אפליקציה משולבת ב-Shopify ליצירת תמונות מוצר אוטומטית באמצעות בינה מלאכותית",
            meta: { year: "2024", company: "Leibish Online", tech: "JavaScript, Node.js, OpenAI API" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "יצירת תמונות AI" },
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
                implementation: { title: "יישום טכני" },
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
                    list: ["הפחתה של 60% בעלויות צילום", "שיפור של 70% במהירות רישום מוצרים", "יצירה של למעלה מ-1000 תמונות מוצר", "95% שיעור אישור איכות תמונה"]
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
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    },
    'erp-integration': {
        en: {
            title: "ERP-Shopify Integration System",
            lead: "Comprehensive bidirectional synchronization between Fantasy ERP and Shopify for seamless data flow",
            meta: { year: "2023-2024", company: "Leibish Online", tech: "Node.js, GraphQL, REST API" },
            breadcrumb: { home: "Home", projects: "Projects", current: "ERP Integration" },
            sections: {
                overview: {
                    title: "Project Overview",
                    content: "Developed a comprehensive bidirectional synchronization system between Fantasy ERP and Shopify, handling real-time data exchange for products, inventory, orders, customer information, and custom business logic. This enterprise-level integration serves as the backbone of e-commerce operations, ensuring data consistency across all business systems."
                },
                challenge: {
                    title: "Business Challenge",
                    content: "The jewelry e-commerce business was facing critical challenges with manual data entry and synchronization between their ERP system and Shopify store. This led to inventory discrepancies, delayed order processing, and customer satisfaction issues. The complexity was amplified by the need to handle multiple product types (diamonds, gemstones, jewelry) each with unique attributes and business rules."
                },
                solution: {
                    title: "Technical Solution",
                    intro: "I designed and implemented a robust, scalable integration system with the following capabilities:",
                    points: [
                        { title: "Bidirectional Product Sync", text: "Real-time synchronization of product data including titles, descriptions, pricing, and images between ERP and Shopify" },
                        { title: "Inventory Management", text: "Live inventory updates ensuring accurate stock levels across all sales channels" },
                        { title: "Order Processing", text: "Automatic order creation in ERP when orders are placed on Shopify, with status updates flowing back" },
                        { title: "Customer Data Sync", text: "Seamless customer profile synchronization including contact information and order history" },
                        { title: "Metafield Management", text: "Custom metafield mapping for product-specific data like certificates, dimensions, and quality grades" },
                        { title: "Error Handling & Logging", text: "Comprehensive error tracking and automated retry mechanisms" }
                    ]
                },
                implementation: { title: "Architecture & Implementation" },
                features: {
                    title: "Key Features",
                    list: [
                        { icon: "fas fa-sync-alt", title: "Real-Time Synchronization", text: "Instant data updates between ERP and Shopify ensuring consistency" },
                        { icon: "fas fa-boxes", title: "Multi-Product Support", text: "Handles diamonds, gemstones, and jewelry with unique attributes" },
                        { icon: "fas fa-warehouse", title: "Inventory Tracking", text: "Live stock level updates across all sales channels" },
                        { icon: "fas fa-shopping-cart", title: "Order Automation", text: "Automated order creation and status updates" },
                        { icon: "fas fa-shield-alt", title: "Error Recovery", text: "Automatic retry mechanisms and comprehensive logging" },
                        { icon: "fas fa-tags", title: "Custom Metafields", text: "Advanced data mapping for product-specific attributes" }
                    ]
                },
                results: {
                    title: "Results & Business Impact",
                    items: [
                        { number: "95%", label: "Automation", text: "Eliminated 95% of manual data entry" },
                        { number: "30%", label: "Faster Processing", text: "Reduced order processing time by 30%" },
                        { number: "99.9%", label: "Accuracy", text: "Achieved 99.9% data accuracy rate" }
                    ]
                },
                architecture: {
                    title: "System Architecture",
                    intro: "The system utilizes a microservices architecture with the following components:",
                    points: [
                        { title: "API Gateway", text: "Centralized routing and authentication for all API calls" },
                        { title: "Sync Engine", text: "Core synchronization logic with event-driven processing" },
                        { title: "Queue Management", text: "Message queues for reliable async processing" },
                        { title: "Data Mapping", text: "Flexible transformation layer for data normalization" }
                    ]
                },
                lessons: {
                    title: "Technical Learnings",
                    content: "This project deepened my understanding of enterprise integration patterns, GraphQL optimization techniques, and handling complex business logic in distributed systems. I gained expertise in designing fault-tolerant systems and implementing comprehensive monitoring solutions."
                }
            },
            sidebar: {
                details: {
                    title: "Project Details",
                    items: {
                        client: { label: "Client", value: "Leibish Online" },
                        industry: { label: "Industry", value: "Jewelry E-commerce" },
                        year: { label: "Year", value: "2023-2024" },
                        duration: { label: "Duration", value: "6 months" },
                        role: { label: "Role", value: "Lead Developer" }
                    }
                },
                technologies: {
                    title: "Technologies Used",
                    tags: ["Node.js", "Express", "GraphQL", "Shopify API", "REST API", "MySQL", "Message Queue", "Cloud Hosting"]
                },
                achievements: {
                    title: "Key Achievements",
                    list: ["Eliminated 95% manual data entry", "99.9% data accuracy achieved", "30% faster order processing", "Managing 10,000+ products", "Zero downtime deployment"]
                },
                cta: {
                    title: "Need an ERP Integration?",
                    text: "Let's build a robust integration solution for your business.",
                    button: "Get in Touch"
                }
            },
            related: {
                title: "Related Projects",
                projects: [
                    { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation with Shopify webhooks" },
                    { id: "hubspot-sync", title: "HubSpot Sync", desc: "Real-time CRM synchronization" },
                    { id: "b2b-platform", title: "B2B Platform", desc: "Collaborative product sharing platform" }
                ]
            },
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "מערכת אינטגרציה ERP-Shopify",
            lead: "סנכרון דו-כיווני מקיף בין Fantasy ERP ו-Shopify לזרימת נתונים חלקה",
            meta: { year: "2023-2024", company: "Leibish Online", tech: "Node.js, GraphQL, REST API" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "אינטגרציה ERP" },
            sections: {
                overview: {
                    title: "סקירת הפרויקט",
                    content: "פיתחתי מערכת סנכרון דו-כיוונית מקיפה בין Fantasy ERP ו-Shopify, המטפלת בהחלפת נתונים בזמן אמת עבור מוצרים, מלאי, הזמנות, מידע על לקוחות ולוגיקה עסקית מותאמת אישית. אינטגרציה ברמת ארגונית זו משמשת כעמוד השדרה של פעולות המסחר האלקטרוני, ומבטיחה עקביות נתונים בכל מערכות העסק."
                },
                challenge: {
                    title: "האתגר העסקי",
                    content: "עסק המסחר האלקטרוני לתכשיטים התמודד עם אתגרים קריטיים בהזנת נתונים ידנית וסנכרון בין מערכת ה-ERP לחנות Shopify. זה הוביל לאי התאמות במלאי, עיכובים בעיבוד הזמנות ובעיות שביעות רצון לקוחות. המורכבות הוגברה על ידי הצורך לטפל במספר סוגי מוצרים (יהלומים, אבני חן, תכשיטים) כל אחד עם תכונות וכללים עסקיים ייחודיים."
                },
                solution: {
                    title: "הפתרון הטכני",
                    intro: "עיצבתי ויישמתי מערכת אינטגרציה חזקה וניתנת להרחבה עם היכולות הבאות:",
                    points: [
                        { title: "סנכרון מוצרים דו-כיווני", text: "סנכרון בזמן אמת של נתוני מוצר כולל כותרות, תיאורים, תמחור ותמונות בין ERP ו-Shopify" },
                        { title: "ניהול מלאי", text: "עדכוני מלאי חיים המבטיחים רמות מלאי מדויקות בכל ערוצי המכירה" },
                        { title: "עיבוד הזמנות", text: "יצירת הזמנות אוטומטית ב-ERP כאשר מבצעים הזמנות ב-Shopify, עם עדכוני סטטוס זורמים חזרה" },
                        { title: "סנכרון נתוני לקוחות", text: "סנכרון חלק של פרופילי לקוחות כולל פרטי קשר והיסטוריית הזמנות" },
                        { title: "ניהול Metafields", text: "מיפוי metafield מותאם אישית לנתונים ספציפיים למוצר כמו תעודות, מידות ודרגות איכות" },
                        { title: "טיפול בשגיאות ורישום", text: "מעקב מקיף אחר שגיאות ומנגנוני ניסיון חוזר אוטומטיים" }
                    ]
                },
                implementation: { title: "ארכיטקטורה ויישום" },
                features: {
                    title: "תכונות עיקריות",
                    list: [
                        { icon: "fas fa-sync-alt", title: "סנכרון בזמן אמת", text: "עדכוני נתונים מיידיים בין ERP ו-Shopify המבטיחים עקביות" },
                        { icon: "fas fa-boxes", title: "תמיכה במוצרים מרובים", text: "מטפל ביהלומים, אבני חן ותכשיטים עם תכונות ייחודיות" },
                        { icon: "fas fa-warehouse", title: "מעקב מלאי", text: "עדכוני רמת מלאי חיים בכל ערוצי המכירה" },
                        { icon: "fas fa-shopping-cart", title: "אוטומציית הזמנות", text: "יצירת הזמנות אוטומטית ועדכוני סטטוס" },
                        { icon: "fas fa-shield-alt", title: "התאוששות משגיאות", text: "מנגנוני ניסיון חוזר אוטומטיים ורישום מקיף" },
                        { icon: "fas fa-tags", title: "Metafields מותאמים אישית", text: "מיפוי נתונים מתקדם לתכונות ספציפיות למוצר" }
                    ]
                },
                results: {
                    title: "תוצאות והשפעה עסקית",
                    items: [
                        { number: "95%", label: "אוטומציה", text: "ביטול 95% מהזנת נתונים ידנית" },
                        { number: "30%", label: "עיבוד מהיר יותר", text: "הפחתה של 30% בזמן עיבוד הזמנות" },
                        { number: "99.9%", label: "דיוק", text: "השגת שיעור דיוק נתונים של 99.9%" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורת המערכת",
                    intro: "המערכת משתמשת בארכיטקטורת microservices עם הרכיבים הבאים:",
                    points: [
                        { title: "API Gateway", text: "ניתוב ואימות מרכזיים לכל קריאות ה-API" },
                        { title: "מנוע סנכרון", text: "לוגיקת סנכרון ליבה עם עיבוד מונע אירועים" },
                        { title: "ניהול תורים", text: "תורי הודעות לעיבוד אסינכרוני אמין" },
                        { title: "מיפוי נתונים", text: "שכבת טרנספורמציה גמישה לנורמליזציה של נתונים" }
                    ]
                },
                lessons: {
                    title: "למידה טכנית",
                    content: "פרויקט זה העמיק את ההבנה שלי בדפוסי אינטגרציה ארגוניים, טכניקות אופטימיזציה של GraphQL וטיפול בלוגיקה עסקית מורכבת במערכות מבוזרות. רכשתי מומחיות בעיצוב מערכות עמידות בפני תקלות ויישום פתרונות ניטור מקיפים."
                }
            },
            sidebar: {
                details: {
                    title: "פרטי הפרויקט",
                    items: {
                        client: { label: "לקוח", value: "Leibish Online" },
                        industry: { label: "תעשייה", value: "מסחר אלקטרוני בתכשיטים" },
                        year: { label: "שנה", value: "2023-2024" },
                        duration: { label: "משך זמן", value: "6 חודשים" },
                        role: { label: "תפקיד", value: "מפתחת ראשית" }
                    }
                },
                technologies: {
                    title: "טכנולוגיות בשימוש",
                    tags: ["Node.js", "Express", "GraphQL", "Shopify API", "REST API", "MySQL", "Message Queue", "Cloud Hosting"]
                },
                achievements: {
                    title: "הישגים מרכזיים",
                    list: ["ביטול 95% מהזנת נתונים ידנית", "השגת דיוק נתונים של 99.9%", "עיבוד הזמנות מהיר ב-30%", "ניהול למעלה מ-10,000 מוצרים", "פריסה ללא השבתה"]
                },
                cta: {
                    title: "צריך אינטגרציית ERP?",
                    text: "בואו נבנה פתרון אינטגרציה חזק עבור העסק שלך.",
                    button: "צור קשר"
                }
            },
            related: {
                title: "פרויקטים קשורים",
                projects: [
                    { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים עם webhooks של Shopify" },
                    { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "סנכרון CRM בזמן אמת" },
                    { id: "b2b-platform", title: "פלטפורמת B2B", desc: "פלטפורמה לשיתוף מוצרים משותף" }
                ]
            },
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    },
    'ai-descriptions': {
        en: {
            title: "AI Product Description Generator",
            lead: "Automated generation of compelling product descriptions using AI",
            meta: { year: "2024", company: "Leibish Online", tech: "JavaScript, OpenAI, Gemini" },
            breadcrumb: { home: "Home", projects: "Projects", current: "AI Descriptions" },
            sections: {
                overview: { title: "Project Overview", content: "Built an AI-powered system that automatically generates compelling, SEO-optimized product descriptions for jewelry products. The system integrates with Shopify and uses both OpenAI and Gemini APIs to create unique, engaging descriptions that improve conversion rates." },
                challenge: { title: "The Challenge", content: "Creating unique, engaging product descriptions for thousands of jewelry items is time-consuming and requires skilled copywriters. Maintaining consistency in tone and including relevant SEO keywords while keeping descriptions fresh and compelling was a significant challenge." },
                solution: { title: "The Solution", intro: "I developed an AI-powered description generator with these capabilities:", points: [
                    { title: "AI Generation", text: "Uses advanced AI models (OpenAI and Gemini) for natural language generation" },
                    { title: "SEO Optimization", text: "Includes relevant keywords automatically for better search rankings" },
                    { title: "Batch Processing", text: "Generate descriptions for multiple products simultaneously" },
                    { title: "Shopify Integration", text: "Direct updates to product listings via Shopify API" }
                ]},
                implementation: { title: "Technical Implementation" },
                features: { title: "Key Features", list: [
                    { icon: "fas fa-brain", title: "AI Generation", text: "Advanced AI models for natural language" },
                    { icon: "fas fa-search", title: "SEO Optimization", text: "Automatic keyword inclusion" },
                    { icon: "fas fa-layer-group", title: "Batch Processing", text: "Multiple products at once" },
                    { icon: "fas fa-sync", title: "Shopify Integration", text: "Direct product updates" }
                ]},
                results: { title: "Results & Impact", items: [
                    { number: "2000+", label: "Descriptions Generated", text: "Successfully generated over 2000 descriptions" },
                    { number: "90%", label: "Time Saved", text: "Reduced content creation time" },
                    { number: "25%", label: "Better SEO", text: "Improved search rankings" }
                ]},
                architecture: { title: "Technical Architecture", intro: "Clean, modular system design:", points: [
                    { title: "API Integration", text: "Handles OpenAI and Gemini API calls" },
                    { title: "Template Engine", text: "Customizable description templates" },
                    { title: "Quality Control", text: "Validates generated content" }
                ]},
                lessons: { title: "Key Learnings", content: "This project taught me how to effectively prompt AI models for consistent output, manage API rate limits, and balance creativity with SEO requirements." }
            },
            sidebar: { details: { title: "Project Details", items: { client: { label: "Client", value: "Leibish Online" }, year: { label: "Year", value: "2024" }, duration: { label: "Duration", value: "2 months" }, role: { label: "Role", value: "Full-Stack Developer" }}}, technologies: { title: "Technologies Used", tags: ["JavaScript", "OpenAI", "Gemini", "Shopify API", "Node.js"] }, achievements: { title: "Key Achievements", list: ["Generated 2000+ descriptions", "90% time savings", "25% SEO improvement", "Consistent brand voice"] }, cta: { title: "Need AI Content Generation?", text: "Let's build an AI solution for your content needs.", button: "Get in Touch" }},
            related: { title: "Related Projects", projects: [
                { id: "ai-image-generation", title: "AI Image Generation", desc: "AI-powered product image generation" },
                { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation" }
            ]},
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "מחולל תיאורי מוצרים AI",
            lead: "יצירה אוטומטית של תיאורי מוצרים משכנעים באמצעות בינה מלאכותית",
            meta: { year: "2024", company: "Leibish Online", tech: "JavaScript, OpenAI, Gemini" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "תיאורי AI" },
            sections: {
                overview: { title: "סקירת הפרויקט", content: "בניתי מערכת מבוססת AI שיוצרת אוטומטית תיאורי מוצר משכנעים ומותאמי SEO עבור מוצרי תכשיטים. המערכת משתלבת עם Shopify ומשתמשת ב-APIs של OpenAI ו-Gemini ליצירת תיאורים ייחודיים ומעניינים שמשפרים את שיעורי ההמרה." },
                challenge: { title: "האתגר", content: "יצירת תיאורי מוצר ייחודיים ומעניינים לאלפי פריטי תכשיטים גוזלת זמן ודורשת כותבי תוכן מיומנים. שמירה על עקביות בטון והכללת מילות מפתח רלוונטיות ל-SEO תוך שמירה על תיאורים רעננים ומשכנעים הייתה אתגר משמעותי." },
                solution: { title: "הפתרון", intro: "פיתחתי מחולל תיאורים מבוסס AI עם היכולות הבאות:", points: [
                    { title: "יצירת AI", text: "משתמש במודלים מתקדמים של AI (OpenAI ו-Gemini) ליצירת שפה טבעית" },
                    { title: "אופטימיזציית SEO", text: "כולל מילות מפתח רלוונטיות אוטומטית לדירוג טוב יותר בחיפוש" },
                    { title: "עיבוד אצווה", text: "יצירת תיאורים למספר מוצרים בו-זמנית" },
                    { title: "אינטגרציה Shopify", text: "עדכונים ישירים לרישומי מוצרים דרך Shopify API" }
                ]},
                implementation: { title: "יישום טכני" },
                features: { title: "תכונות עיקריות", list: [
                    { icon: "fas fa-brain", title: "יצירת AI", text: "מודלים מתקדמים של AI לשפה טבעית" },
                    { icon: "fas fa-search", title: "אופטימיזציית SEO", text: "הכללת מילות מפתח אוטומטית" },
                    { icon: "fas fa-layer-group", title: "עיבוד אצווה", text: "מספר מוצרים בבת אחת" },
                    { icon: "fas fa-sync", title: "אינטגרציה Shopify", text: "עדכוני מוצרים ישירים" }
                ]},
                results: { title: "תוצאות והשפעה", items: [
                    { number: "2000+", label: "תיאורים שנוצרו", text: "יצירה מוצלחת של למעלה מ-2000 תיאורים" },
                    { number: "90%", label: "חיסכון בזמן", text: "הפחתה בזמן יצירת תוכן" },
                    { number: "25%", label: "SEO טוב יותר", text: "שיפור בדירוגי חיפוש" }
                ]},
                architecture: { title: "ארכיטקטורה טכנית", intro: "עיצוב מערכת מודולרי ונקי:", points: [
                    { title: "אינטגרציית API", text: "מטפל בקריאות API של OpenAI ו-Gemini" },
                    { title: "מנוע תבניות", text: "תבניות תיאור הניתנות להתאמה אישית" },
                    { title: "בקרת איכות", text: "מאמת תוכן שנוצר" }
                ]},
                lessons: { title: "למידה מרכזית", content: "פרויקט זה לימד אותי כיצד לבקש ביעילות ממודלים של AI פלט עקבי, לנהל מגבלות קצב API ולאזן בין יצירתיות לדרישות SEO." }
            },
            sidebar: { details: { title: "פרטי הפרויקט", items: { client: { label: "לקוח", value: "Leibish Online" }, year: { label: "שנה", value: "2024" }, duration: { label: "משך זמן", value: "2 חודשים" }, role: { label: "תפקיד", value: "מפתחת Full-Stack" }}}, technologies: { title: "טכנולוגיות בשימוש", tags: ["JavaScript", "OpenAI", "Gemini", "Shopify API", "Node.js"] }, achievements: { title: "הישגים מרכזיים", list: ["יצירת למעלה מ-2000 תיאורים", "חיסכון של 90% בזמן", "שיפור של 25% ב-SEO", "קול מותג עקבי"] }, cta: { title: "צריך יצירת תוכן AI?", text: "בואו נבנה פתרון AI לצרכי התוכן שלך.", button: "צור קשר" }},
            related: { title: "פרויקטים קשורים", projects: [
                { id: "ai-image-generation", title: "יצירת תמונות AI", desc: "יצירת תמונות מוצר מבוססת AI" },
                { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים" }
            ]},
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    },
    'automation-workflows': {
        en: {
            title: "Event-Driven Automation Workflows",
            lead: "Automated business processes using Shopify webhooks and event-driven architecture",
            meta: { year: "2024", company: "Leibish Online", tech: "Node.js, Webhooks, Event-Driven" },
            breadcrumb: { home: "Home", projects: "Projects", current: "Automation Workflows" },
            sections: {
                overview: {
                    title: "Project Overview",
                    content: "Developed a comprehensive event-driven automation system that leverages Shopify webhooks to automatically trigger and execute business workflows. This system processes over 5,000 daily events, automating critical business processes such as order fulfillment, inventory updates, customer notifications, and analytics tracking, achieving 99.9% uptime and dramatically reducing manual intervention."
                },
                challenge: {
                    title: "The Challenge",
                    content: "The business was spending countless hours on repetitive manual tasks triggered by various events in the Shopify store - new orders, inventory changes, customer updates, and more. These manual processes were prone to errors, delays, and inconsistencies. The company needed a reliable, scalable solution that could automatically respond to business events in real-time while maintaining data integrity and providing comprehensive logging for compliance and debugging."
                },
                solution: {
                    title: "The Solution",
                    intro: "I designed and built a robust event-driven automation platform with these core capabilities:",
                    points: [
                        { title: "Webhook Management", text: "Implemented secure webhook endpoints to receive real-time events from Shopify for orders, products, inventory, and customer updates" },
                        { title: "Event Processing Engine", text: "Built a scalable event processing system that routes events to appropriate workflow handlers based on event type and business rules" },
                        { title: "Workflow Orchestration", text: "Created customizable workflow chains that can execute multiple actions in sequence or parallel based on event triggers" },
                        { title: "Error Handling & Retry", text: "Implemented sophisticated retry mechanisms with exponential backoff and dead-letter queues for failed events" },
                        { title: "Real-time Monitoring", text: "Built comprehensive logging and monitoring dashboards to track event processing, success rates, and system health" },
                        { title: "Integration Layer", text: "Connected workflows to external systems including ERP, email services, analytics platforms, and third-party APIs" }
                    ]
                },
                implementation: { title: "Technical Implementation" },
                features: {
                    title: "Key Features",
                    list: [
                        { icon: "fas fa-bolt", title: "Real-Time Processing", text: "Instant response to Shopify events with sub-second latency" },
                        { icon: "fas fa-project-diagram", title: "Workflow Chains", text: "Build complex automation workflows with conditional logic" },
                        { icon: "fas fa-shield-alt", title: "Secure Webhooks", text: "HMAC signature verification for webhook authentication" },
                        { icon: "fas fa-redo", title: "Auto-Retry Logic", text: "Intelligent retry mechanisms for failed operations" },
                        { icon: "fas fa-chart-line", title: "Analytics Dashboard", text: "Real-time monitoring of event processing and success rates" },
                        { icon: "fas fa-plug", title: "Multi-Integration", text: "Connect to ERP, email, analytics, and external APIs" }
                    ]
                },
                results: {
                    title: "Results & Impact",
                    items: [
                        { number: "80%", label: "Time Saved", text: "Reduced manual task time by 80%" },
                        { number: "5000+", label: "Daily Events", text: "Processing over 5000 events per day" },
                        { number: "99.9%", label: "Uptime", text: "Achieved 99.9% system reliability" }
                    ]
                },
                architecture: {
                    title: "System Architecture",
                    intro: "The system is built on event-driven microservices architecture:",
                    points: [
                        { title: "Webhook Receiver", text: "Secure endpoints for receiving and validating Shopify webhooks" },
                        { title: "Event Queue", text: "Message queue system for reliable event processing and load balancing" },
                        { title: "Workflow Engine", text: "Orchestrates complex business workflows with conditional branching" },
                        { title: "Integration Services", text: "Microservices for connecting to external systems and APIs" }
                    ]
                },
                lessons: {
                    title: "Lessons Learned",
                    content: "This project deepened my expertise in event-driven architectures, asynchronous processing patterns, and building resilient distributed systems. I gained valuable experience in handling high-volume event streams, implementing idempotent operations, and designing systems for observability and debugging in production environments."
                }
            },
            sidebar: {
                details: {
                    title: "Project Details",
                    items: {
                        client: { label: "Client", value: "Leibish Online" },
                        industry: { label: "Industry", value: "Jewelry E-commerce" },
                        year: { label: "Year", value: "2024" },
                        duration: { label: "Duration", value: "4 months" },
                        role: { label: "Role", value: "Lead Developer" }
                    }
                },
                technologies: {
                    title: "Technologies Used",
                    tags: ["Node.js", "Express", "Webhooks", "Message Queue", "Event-Driven Architecture", "Shopify API", "Redis", "MongoDB", "Docker"]
                },
                achievements: {
                    title: "Key Achievements",
                    list: ["80% reduction in manual tasks", "5000+ daily events processed", "99.9% system uptime", "Real-time event processing", "Zero data loss"]
                },
                cta: {
                    title: "Need Workflow Automation?",
                    text: "Let's automate your business processes with event-driven workflows.",
                    button: "Get in Touch"
                }
            },
            related: {
                title: "Related Projects",
                projects: [
                    { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive bidirectional data synchronization" },
                    { id: "hubspot-sync", title: "HubSpot Sync", desc: "Real-time CRM synchronization" },
                    { id: "b2b-platform", title: "B2B Platform", desc: "Collaborative product sharing platform" }
                ]
            },
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "תהליכי אוטומציה מונעי אירועים",
            lead: "תהליכים עסקיים אוטומטיים באמצעות webhooks של Shopify וארכיטקטורה מונעת אירועים",
            meta: { year: "2024", company: "Leibish Online", tech: "Node.js, Webhooks, Event-Driven" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "תהליכי אוטומציה" },
            sections: {
                overview: {
                    title: "סקירת הפרויקט",
                    content: "פיתחתי מערכת אוטומציה מקיפה מונעת אירועים שמנצלת webhooks של Shopify כדי להפעיל וליישם אוטומטית תהליכי עבודה עסקיים. המערכת מעבדת למעלה מ-5,000 אירועים יומיים, מאוטמטת תהליכים עסקיים קריטיים כגון מילוי הזמנות, עדכוני מלאי, התראות ללקוחות ומעקב אנליטיקה, משיגה זמינות של 99.9% ומפחיתה באופן דרמטי את ההתערבות הידנית."
                },
                challenge: {
                    title: "האתגר",
                    content: "העסק השקיע שעות רבות במשימות ידניות חוזרות המופעלות על ידי אירועים שונים בחנות Shopify - הזמנות חדשות, שינויי מלאי, עדכוני לקוחות ועוד. תהליכים ידניים אלה היו נוטים לשגיאות, עיכובים וחוסר עקביות. החברה הייתה זקוקה לפתרון אמין וניתן להרחבה שיכול להגיב אוטומטית לאירועים עסקיים בזמן אמת תוך שמירה על שלמות הנתונים ומתן רישום מקיף לציות ולניפוי באגים."
                },
                solution: {
                    title: "הפתרון",
                    intro: "עיצבתי ובניתי פלטפורמת אוטומציה חזקה מונעת אירועים עם יכולות ליבה אלה:",
                    points: [
                        { title: "ניהול Webhooks", text: "יישום נקודות קצה מאובטחות ל-webhook כדי לקבל אירועים בזמן אמת מ-Shopify עבור הזמנות, מוצרים, מלאי ועדכוני לקוחות" },
                        { title: "מנוע עיבוד אירועים", text: "בניית מערכת עיבוד אירועים ניתנת להרחבה שמנתבת אירועים למטפלי תהליכי עבודה מתאימים על בסיס סוג האירוע וכללים עסקיים" },
                        { title: "תזמור תהליכי עבודה", text: "יצירת שרשראות תהליכי עבודה הניתנות להתאמה אישית שיכולות לבצע פעולות מרובות ברצף או במקביל על בסיס טריגרי אירועים" },
                        { title: "טיפול בשגיאות וניסיון חוזר", text: "יישום מנגנוני ניסיון חוזר מתוחכמים עם backoff אקספוננציאלי ותורי dead-letter לאירועים כושלים" },
                        { title: "ניטור בזמן אמת", text: "בניית לוחות מחוונים מקיפים לרישום וניטור למעקב אחר עיבוד אירועים, שיעורי הצלחה ובריאות המערכת" },
                        { title: "שכבת אינטגרציה", text: "חיבור תהליכי עבודה למערכות חיצוניות כולל ERP, שירותי דוא\"ל, פלטפורמות אנליטיקה ו-APIs של צד שלישי" }
                    ]
                },
                implementation: { title: "יישום טכני" },
                features: {
                    title: "תכונות עיקריות",
                    list: [
                        { icon: "fas fa-bolt", title: "עיבוד בזמן אמת", text: "תגובה מיידית לאירועי Shopify עם זמן אחזור תת-שנייתי" },
                        { icon: "fas fa-project-diagram", title: "שרשראות תהליכי עבודה", text: "בניית תהליכי אוטומציה מורכבים עם לוגיקה מותנית" },
                        { icon: "fas fa-shield-alt", title: "Webhooks מאובטחים", text: "אימות חתימת HMAC לאימות webhook" },
                        { icon: "fas fa-redo", title: "לוגיקת ניסיון חוזר אוטומטי", text: "מנגנוני ניסיון חוזר חכמים לפעולות כושלות" },
                        { icon: "fas fa-chart-line", title: "לוח מחוונים אנליטיקה", text: "ניטור בזמן אמת של עיבוד אירועים ושיעורי הצלחה" },
                        { icon: "fas fa-plug", title: "אינטגרציות מרובות", text: "התחברות ל-ERP, דוא\"ל, אנליטיקה ו-APIs חיצוניים" }
                    ]
                },
                results: {
                    title: "תוצאות והשפעה",
                    items: [
                        { number: "80%", label: "חיסכון בזמן", text: "הפחתה של 80% בזמן משימות ידניות" },
                        { number: "5000+", label: "אירועים יומיים", text: "עיבוד למעלה מ-5000 אירועים ליום" },
                        { number: "99.9%", label: "זמינות", text: "השגת אמינות מערכת של 99.9%" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורת המערכת",
                    intro: "המערכת בנויה על ארכיטקטורת microservices מונעת אירועים:",
                    points: [
                        { title: "מקבל Webhook", text: "נקודות קצה מאובטחות לקבלה ואימות של webhooks של Shopify" },
                        { title: "תור אירועים", text: "מערכת תור הודעות לעיבוד אירועים אמין ואיזון עומסים" },
                        { title: "מנוע תהליכי עבודה", text: "מתזמר תהליכי עבודה עסקיים מורכבים עם הסתעפות מותנית" },
                        { title: "שירותי אינטגרציה", text: "Microservices להתחברות למערכות חיצוניות ו-APIs" }
                    ]
                },
                lessons: {
                    title: "לקחים שנלמדו",
                    content: "פרויקט זה העמיק את המומחיות שלי בארכיטקטורות מונעות אירועים, דפוסי עיבוד אסינכרוני ובניית מערכות מבוזרות עמידות. רכשתי ניסיון חשוב בטיפול בזרמי אירועים בנפח גבוה, יישום פעולות אידמפוטנטיות ועיצוב מערכות עבור תצפית וניפוי באגים בסביבות ייצור."
                }
            },
            sidebar: {
                details: {
                    title: "פרטי הפרויקט",
                    items: {
                        client: { label: "לקוח", value: "Leibish Online" },
                        industry: { label: "תעשייה", value: "מסחר אלקטרוני בתכשיטים" },
                        year: { label: "שנה", value: "2024" },
                        duration: { label: "משך זמן", value: "4 חודשים" },
                        role: { label: "תפקיד", value: "מפתחת ראשית" }
                    }
                },
                technologies: {
                    title: "טכנולוגיות בשימוש",
                    tags: ["Node.js", "Express", "Webhooks", "Message Queue", "Event-Driven Architecture", "Shopify API", "Redis", "MongoDB", "Docker"]
                },
                achievements: {
                    title: "הישגים מרכזיים",
                    list: ["הפחתה של 80% במשימות ידניות", "עיבוד למעלה מ-5000 אירועים יומיים", "זמינות מערכת של 99.9%", "עיבוד אירועים בזמן אמת", "אפס אובדן נתונים"]
                },
                cta: {
                    title: "צריך אוטומציה של תהליכי עבודה?",
                    text: "בואו נבצע אוטומציה לתהליכים העסקיים שלך עם תהליכי עבודה מונעי אירועים.",
                    button: "צור קשר"
                }
            },
            related: {
                title: "פרויקטים קשורים",
                projects: [
                    { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים דו-כיווני מקיף" },
                    { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "סנכרון CRM בזמן אמת" },
                    { id: "b2b-platform", title: "פלטפורמת B2B", desc: "פלטפורמה לשיתוף מוצרים משותף" }
                ]
            },
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    },
    'b2b-platform': {
        en: {
            title: "B2B Product Sharing Platform",
            lead: "Collaborative platform enabling merchants to share and manage B2B product catalogs",
            meta: { year: "2023-2024", company: "Leibish Online", tech: "Node.js, React, Shopify API, MongoDB" },
            breadcrumb: { home: "Home", projects: "Projects", current: "B2B Platform" },
            sections: {
                overview: {
                    title: "Project Overview",
                    content: "Developed a comprehensive B2B platform that enables jewelry wholesalers to share product catalogs with their retail partners. The platform facilitates seamless product browsing, ordering, and inventory management for B2B relationships, serving over 50 partner businesses and generating over $2M in B2B revenue. Built with a modern tech stack, it provides real-time synchronization with Shopify, custom pricing tiers, and advanced order management capabilities."
                },
                challenge: {
                    title: "The Business Challenge",
                    content: "The jewelry business needed a way to efficiently manage B2B relationships with retail partners who wanted to sell their products. Traditional methods involved manual price lists, email communications, and phone orders, which were slow, error-prone, and difficult to scale. Partners needed access to real-time inventory, custom pricing, and the ability to place orders directly. The company required a solution that would streamline B2B operations while maintaining complete control over product visibility, pricing, and partner relationships."
                },
                solution: {
                    title: "The Solution",
                    intro: "I designed and built a full-stack B2B platform with these comprehensive features:",
                    points: [
                        { title: "Partner Portal", text: "Custom React-based portal where partners can browse products, view custom pricing, and place orders" },
                        { title: "Product Catalog Management", text: "Admin interface for controlling which products are visible to specific partners with custom pricing rules" },
                        { title: "Tiered Pricing System", text: "Flexible pricing engine supporting volume discounts, partner-specific pricing, and automated price calculations" },
                        { title: "Order Management", text: "Complete order workflow from placement to fulfillment with status tracking and automated notifications" },
                        { title: "Inventory Sync", text: "Real-time inventory synchronization with Shopify ensuring partners see accurate stock levels" },
                        { title: "Analytics & Reporting", text: "Comprehensive dashboards for tracking partner performance, sales trends, and revenue metrics" }
                    ]
                },
                implementation: { title: "Technical Implementation" },
                features: {
                    title: "Key Features",
                    list: [
                        { icon: "fas fa-users", title: "Partner Management", text: "Multi-tenant system supporting 50+ B2B partners" },
                        { icon: "fas fa-dollar-sign", title: "Custom Pricing", text: "Flexible pricing tiers and volume discounts" },
                        { icon: "fas fa-shopping-bag", title: "Order System", text: "Complete B2B order workflow with tracking" },
                        { icon: "fas fa-sync", title: "Real-Time Sync", text: "Live inventory and product updates from Shopify" },
                        { icon: "fas fa-chart-bar", title: "Analytics", text: "Detailed reporting on partner performance and sales" },
                        { icon: "fas fa-mobile-alt", title: "Responsive Design", text: "Full mobile and tablet support for on-the-go ordering" }
                    ]
                },
                results: {
                    title: "Results & Business Impact",
                    items: [
                        { number: "50+", label: "Active Partners", text: "Growing network of B2B retail partners" },
                        { number: "60%", label: "Faster Orders", text: "Reduced order processing time by 60%" },
                        { number: "$2M+", label: "B2B Revenue", text: "Generated over $2M in B2B sales" }
                    ]
                },
                architecture: {
                    title: "Technical Architecture",
                    intro: "The platform is built on a modern, scalable architecture:",
                    points: [
                        { title: "Frontend Layer", text: "React-based SPA with Redux for state management and responsive design" },
                        { title: "API Layer", text: "RESTful Node.js backend with Express handling all business logic" },
                        { title: "Database Layer", text: "MongoDB for flexible document storage of products, orders, and partner data" },
                        { title: "Integration Layer", text: "Shopify API integration for real-time product and inventory synchronization" }
                    ]
                },
                lessons: {
                    title: "Key Learnings",
                    content: "This project taught me valuable lessons about building multi-tenant applications, implementing complex pricing logic, and designing scalable B2B workflows. I gained deep expertise in React state management for large applications, optimizing database queries for performance, and creating intuitive UX for business users."
                }
            },
            sidebar: {
                details: {
                    title: "Project Details",
                    items: {
                        client: { label: "Client", value: "Leibish Online" },
                        industry: { label: "Industry", value: "Jewelry B2B/Wholesale" },
                        year: { label: "Year", value: "2023-2024" },
                        duration: { label: "Duration", value: "5 months" },
                        role: { label: "Role", value: "Full-Stack Developer" }
                    }
                },
                technologies: {
                    title: "Technologies Used",
                    tags: ["Node.js", "React", "Redux", "MongoDB", "Express", "Shopify API", "REST API", "JWT", "Material-UI"]
                },
                achievements: {
                    title: "Key Achievements",
                    list: ["50+ active B2B partners", "$2M+ in B2B revenue", "60% faster order processing", "Real-time inventory sync", "Mobile-responsive platform"]
                },
                cta: {
                    title: "Need a B2B Platform?",
                    text: "Let's build a custom B2B solution to grow your wholesale business.",
                    button: "Get in Touch"
                }
            },
            related: {
                title: "Related Projects",
                projects: [
                    { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive bidirectional data synchronization" },
                    { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation with Shopify webhooks" },
                    { id: "hubspot-sync", title: "HubSpot Sync", desc: "Real-time CRM synchronization" }
                ]
            },
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "פלטפורמת שיתוף מוצרים B2B",
            lead: "פלטפורמה שיתופית המאפשרת לסוחרים לשתף ולנהל קטלוגי מוצרים B2B",
            meta: { year: "2023-2024", company: "Leibish Online", tech: "Node.js, React, Shopify API, MongoDB" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "פלטפורמת B2B" },
            sections: {
                overview: {
                    title: "סקירת הפרויקט",
                    content: "פיתחתי פלטפורמת B2B מקיפה המאפשרת לסיטונאי תכשיטים לשתף קטלוגי מוצרים עם שותפי הקמעונאות שלהם. הפלטפורמה מאפשרת דפדוף חלק במוצרים, הזמנות וניהול מלאי עבור יחסי B2B, משרתת למעלה מ-50 עסקים שותפים ומייצרת למעלה מ-2 מיליון דולר בהכנסות B2B. בנויה עם ערימת טכנולוגיה מודרנית, היא מספקת סנכרון בזמן אמת עם Shopify, דרגות תמחור מותאמות אישית ויכולות ניהול הזמנות מתקדמות."
                },
                challenge: {
                    title: "האתגר העסקי",
                    content: "עסק התכשיטים היה זקוק לדרך לנהל ביעילות יחסי B2B עם שותפי קמעונאות שרצו למכור את המוצרים שלהם. שיטות מסורתיות כללו מחירונים ידניים, תקשורת בדוא\"ל והזמנות טלפוניות, שהיו איטיות, נוטות לשגיאות וקשות להרחבה. השותפים היו זקוקים לגישה למלאי בזמן אמת, תמחור מותאם אישית ולאפשרות להזמין ישירות. החברה דרשה פתרון שיייעל את פעולות ה-B2B תוך שמירה על שליטה מלאה על נראות המוצר, התמחור ויחסי השותפים."
                },
                solution: {
                    title: "הפתרון",
                    intro: "עיצבתי ובניתי פלטפורמת B2B מלאה עם תכונות מקיפות אלה:",
                    points: [
                        { title: "פורטל שותפים", text: "פורטל מבוסס React מותאם אישית שבו שותפים יכולים לדפדף במוצרים, לראות תמחור מותאם אישית ולבצע הזמנות" },
                        { title: "ניהול קטלוג מוצרים", text: "ממשק ניהול לשליטה באילו מוצרים גלויים לשותפים ספציפיים עם כללי תמחור מותאמים אישית" },
                        { title: "מערכת תמחור דרגתי", text: "מנוע תמחור גמיש התומך בהנחות נפח, תמחור ספציפי לשותפים וחישובי מחיר אוטומטיים" },
                        { title: "ניהול הזמנות", text: "תהליך הזמנה מלא מההצבה ועד לביצוע עם מעקב סטטוס והתראות אוטומטיות" },
                        { title: "סנכרון מלאי", text: "סנכרון מלאי בזמן אמת עם Shopify המבטיח שהשותפים רואים רמות מלאי מדויקות" },
                        { title: "אנליטיקה ודיווח", text: "לוחות מחוונים מקיפים למעקב אחר ביצועי שותפים, מגמות מכירות ומדדי הכנסה" }
                    ]
                },
                implementation: { title: "יישום טכני" },
                features: {
                    title: "תכונות עיקריות",
                    list: [
                        { icon: "fas fa-users", title: "ניהול שותפים", text: "מערכת רב-דייר התומכת ב-50+ שותפי B2B" },
                        { icon: "fas fa-dollar-sign", title: "תמחור מותאם אישית", text: "דרגות תמחור גמישות והנחות נפח" },
                        { icon: "fas fa-shopping-bag", title: "מערכת הזמנות", text: "תהליך הזמנה B2B מלא עם מעקב" },
                        { icon: "fas fa-sync", title: "סנכרון בזמן אמת", text: "עדכוני מלאי ומוצרים חיים מ-Shopify" },
                        { icon: "fas fa-chart-bar", title: "אנליטיקה", text: "דיווח מפורט על ביצועי שותפים ומכירות" },
                        { icon: "fas fa-mobile-alt", title: "עיצוב רספונסיבי", text: "תמיכה מלאה בנייד וטאבלט להזמנה בדרכים" }
                    ]
                },
                results: {
                    title: "תוצאות והשפעה עסקית",
                    items: [
                        { number: "50+", label: "שותפים פעילים", text: "רשת גדלה של שותפי קמעונאות B2B" },
                        { number: "60%", label: "הזמנות מהירות יותר", text: "הפחתה של 60% בזמן עיבוד הזמנות" },
                        { number: "$2M+", label: "הכנסות B2B", text: "יצירת למעלה מ-2 מיליון דולר במכירות B2B" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורה טכנית",
                    intro: "הפלטפורמה בנויה על ארכיטקטורה מודרנית וניתנת להרחבה:",
                    points: [
                        { title: "שכבת Frontend", text: "SPA מבוסס React עם Redux לניהול מצב ועיצוב רספונסיבי" },
                        { title: "שכבת API", text: "Backend Node.js RESTful עם Express המטפל בכל הלוגיקה העסקית" },
                        { title: "שכבת מסד נתונים", text: "MongoDB לאחסון מסמכים גמיש של מוצרים, הזמנות ונתוני שותפים" },
                        { title: "שכבת אינטגרציה", text: "אינטגרציית Shopify API לסנכרון מוצרים ומלאי בזמן אמת" }
                    ]
                },
                lessons: {
                    title: "למידה מרכזית",
                    content: "פרויקט זה לימד אותי שיעורים חשובים על בניית אפליקציות רב-דיירות, יישום לוגיקת תמחור מורכבת ועיצוב תהליכי עבודה B2B ניתנים להרחבה. רכשתי מומחיות עמוקה בניהול מצב React עבור אפליקציות גדולות, אופטימיזציה של שאילתות מסד נתונים לביצועים ויצירת UX אינטואיטיבי למשתמשים עסקיים."
                }
            },
            sidebar: {
                details: {
                    title: "פרטי הפרויקט",
                    items: {
                        client: { label: "לקוח", value: "Leibish Online" },
                        industry: { label: "תעשייה", value: "B2B/סיטונאות תכשיטים" },
                        year: { label: "שנה", value: "2023-2024" },
                        duration: { label: "משך זמן", value: "5 חודשים" },
                        role: { label: "תפקיד", value: "מפתחת Full-Stack" }
                    }
                },
                technologies: {
                    title: "טכנולוגיות בשימוש",
                    tags: ["Node.js", "React", "Redux", "MongoDB", "Express", "Shopify API", "REST API", "JWT", "Material-UI"]
                },
                achievements: {
                    title: "הישגים מרכזיים",
                    list: ["50+ שותפי B2B פעילים", "למעלה מ-2 מיליון דולר בהכנסות B2B", "עיבוד הזמנות מהיר ב-60%", "סנכרון מלאי בזמן אמת", "פלטפורמה רספונסיבית לנייד"]
                },
                cta: {
                    title: "צריך פלטפורמת B2B?",
                    text: "בואו נבנה פתרון B2B מותאם אישית להגדלת עסק הסיטונאות שלך.",
                    button: "צור קשר"
                }
            },
            related: {
                title: "פרויקטים קשורים",
                projects: [
                    { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים דו-כיווני מקיף" },
                    { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים עם webhooks של Shopify" },
                    { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "סנכרון CRM בזמן אמת" }
                ]
            },
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    },
    'hubspot-sync': {
        en: {
            title: "HubSpot-Shopify CRM Synchronization",
            lead: "Real-time bidirectional sync between Shopify and HubSpot for unified customer data",
            meta: { year: "2024", company: "Leibish Online", tech: "Node.js, HubSpot API, Shopify API, Webhooks" },
            breadcrumb: { home: "Home", projects: "Projects", current: "HubSpot Sync" },
            sections: {
                overview: {
                    title: "Project Overview",
                    content: "Developed a comprehensive real-time synchronization system between Shopify and HubSpot CRM, ensuring seamless flow of customer data, orders, and interactions across both platforms. This integration enables the marketing and sales teams to have complete visibility into customer behavior, purchase history, and engagement metrics, resulting in 100% data accuracy and 50% reduction in manual data entry time. The system processes thousands of sync operations daily with automatic conflict resolution and comprehensive error handling."
                },
                challenge: {
                    title: "The Business Challenge",
                    content: "The marketing and sales teams were using HubSpot CRM for customer relationship management while all e-commerce transactions happened on Shopify. This created data silos where customer information, purchase history, and behavioral data were fragmented across systems. Marketing campaigns couldn't be properly targeted, sales teams lacked visibility into customer purchase patterns, and manual data synchronization was time-consuming and error-prone. The business needed a real-time, bidirectional sync solution that would maintain data consistency across both platforms."
                },
                solution: {
                    title: "The Solution",
                    intro: "I architected and implemented a robust synchronization system with these key components:",
                    points: [
                        { title: "Customer Sync", text: "Real-time synchronization of customer profiles including contact information, preferences, and segmentation data between Shopify and HubSpot" },
                        { title: "Order Synchronization", text: "Automatic creation and updating of deals in HubSpot when orders are placed or modified in Shopify, with complete order history" },
                        { title: "Product Data Sync", text: "Synchronization of product information to HubSpot for better marketing campaign personalization" },
                        { title: "Behavioral Tracking", text: "Integration of customer browsing behavior and engagement metrics from Shopify into HubSpot contact timelines" },
                        { title: "Custom Properties Mapping", text: "Flexible field mapping system supporting custom properties and data transformations between platforms" },
                        { title: "Conflict Resolution", text: "Intelligent conflict resolution for handling simultaneous updates to the same record in both systems" }
                    ]
                },
                implementation: { title: "Technical Implementation" },
                features: {
                    title: "Key Features",
                    list: [
                        { icon: "fas fa-sync-alt", title: "Real-Time Sync", text: "Instant data synchronization using webhooks from both platforms" },
                        { icon: "fas fa-users", title: "Customer Profiles", text: "Complete customer data sync including custom properties" },
                        { icon: "fas fa-receipt", title: "Order History", text: "Full order and transaction history in HubSpot CRM" },
                        { icon: "fas fa-exchange-alt", title: "Bidirectional Flow", text: "Two-way data sync ensuring consistency across platforms" },
                        { icon: "fas fa-shield-alt", title: "Conflict Resolution", text: "Automatic handling of data conflicts and duplicates" },
                        { icon: "fas fa-bell", title: "Smart Notifications", text: "Automated alerts for sync errors and important events" }
                    ]
                },
                results: {
                    title: "Results & Impact",
                    items: [
                        { number: "100%", label: "Data Accuracy", text: "Perfect synchronization accuracy across platforms" },
                        { number: "50%", label: "Time Saved", text: "Reduced manual data entry by 50%" },
                        { number: "Real-Time", label: "Updates", text: "Instant data updates within seconds" }
                    ]
                },
                architecture: {
                    title: "System Architecture",
                    intro: "The integration uses a sophisticated event-driven architecture:",
                    points: [
                        { title: "Webhook Handlers", text: "Dedicated webhook receivers for both Shopify and HubSpot events" },
                        { title: "Sync Engine", text: "Core synchronization logic with field mapping and data transformation" },
                        { title: "Queue System", text: "Message queues for reliable async processing and retry logic" },
                        { title: "Monitoring Service", text: "Real-time monitoring and alerting for sync operations and errors" }
                    ]
                },
                lessons: {
                    title: "Technical Learnings",
                    content: "This project enhanced my expertise in building reliable integration systems, handling API rate limits across multiple platforms, and designing conflict resolution strategies for bidirectional synchronization. I gained deep knowledge of both HubSpot and Shopify APIs, webhook security patterns, and building fault-tolerant distributed systems."
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
                        role: { label: "Role", value: "Integration Specialist" }
                    }
                },
                technologies: {
                    title: "Technologies Used",
                    tags: ["Node.js", "Express", "HubSpot API", "Shopify API", "Webhooks", "Redis", "Message Queue", "REST API"]
                },
                achievements: {
                    title: "Key Achievements",
                    list: ["100% data accuracy", "50% time savings", "Real-time synchronization", "Zero data loss", "Automated conflict resolution"]
                },
                cta: {
                    title: "Need CRM Integration?",
                    text: "Let's connect your e-commerce platform with your CRM system.",
                    button: "Get in Touch"
                }
            },
            related: {
                title: "Related Projects",
                projects: [
                    { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive bidirectional data synchronization" },
                    { id: "automation-workflows", title: "Automation Workflows", desc: "Event-driven automation with Shopify webhooks" },
                    { id: "b2b-platform", title: "B2B Platform", desc: "Collaborative product sharing platform" }
                ]
            },
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "סנכרון CRM HubSpot-Shopify",
            lead: "סנכרון דו-כיווני בזמן אמת בין Shopify ל-HubSpot לנתוני לקוח מאוחדים",
            meta: { year: "2024", company: "Leibish Online", tech: "Node.js, HubSpot API, Shopify API, Webhooks" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "סנכרון HubSpot" },
            sections: {
                overview: {
                    title: "סקירת הפרויקט",
                    content: "פיתחתי מערכת סנכרון מקיפה בזמן אמת בין Shopify ו-HubSpot CRM, המבטיחה זרימה חלקה של נתוני לקוחות, הזמנות ואינטראקציות על פני שתי הפלטפורמות. אינטגרציה זו מאפשרת לצוותי השיווק והמכירות לקבל נראות מלאה להתנהגות לקוחות, היסטוריית רכישות ומדדי מעורבות, וכתוצאה מכך 100% דיוק נתונים והפחתה של 50% בזמן הזנת נתונים ידנית. המערכת מעבדת אלפי פעולות סנכרון יומיות עם פתרון קונפליקטים אוטומטי וטיפול מקיף בשגיאות."
                },
                challenge: {
                    title: "האתגר העסקי",
                    content: "צוותי השיווק והמכירות השתמשו ב-HubSpot CRM לניהול קשרי לקוחות בעוד שכל העסקאות במסחר האלקטרוני התרחשו ב-Shopify. זה יצר סילוזים של נתונים שבהם מידע על לקוחות, היסטוריית רכישות ונתונים התנהגותיים היו מפוצלים בין מערכות. קמפיינים שיווקיים לא יכלו להיות ממוקדים כראוי, לצוותי המכירות לא הייתה נראות לדפוסי הרכישה של לקוחות, וסנכרון נתונים ידני היה גוזל זמן ונוטה לשגיאות. העסק היה זקוק לפתרון סנכרון דו-כיווני בזמן אמת שישמור על עקביות נתונים על פני שתי הפלטפורמות."
                },
                solution: {
                    title: "הפתרון",
                    intro: "תכננתי ויישמתי מערכת סנכרון חזקה עם רכיבי מפתח אלה:",
                    points: [
                        { title: "סנכרון לקוחות", text: "סנכרון בזמן אמת של פרופילי לקוחות כולל פרטי קשר, העדפות ונתוני פילוח בין Shopify ו-HubSpot" },
                        { title: "סנכרון הזמנות", text: "יצירה ועדכון אוטומטיים של עסקאות ב-HubSpot כאשר מבצעים או משנים הזמנות ב-Shopify, עם היסטוריית הזמנות מלאה" },
                        { title: "סנכרון נתוני מוצר", text: "סנכרון מידע על מוצרים ל-HubSpot להתאמה אישית טובה יותר של קמפיינים שיווקיים" },
                        { title: "מעקב התנהגותי", text: "אינטגרציה של התנהגות גלישה של לקוחות ומדדי מעורבות מ-Shopify לציוני זמן של אנשי קשר ב-HubSpot" },
                        { title: "מיפוי מאפיינים מותאמים אישית", text: "מערכת מיפוי שדות גמישה התומכת במאפיינים מותאמים אישית וטרנספורמציות נתונים בין פלטפורמות" },
                        { title: "פתרון קונפליקטים", text: "פתרון קונפליקטים חכם לטיפול בעדכונים בו-זמניים לאותה רשומה בשתי המערכות" }
                    ]
                },
                implementation: { title: "יישום טכני" },
                features: {
                    title: "תכונות עיקריות",
                    list: [
                        { icon: "fas fa-sync-alt", title: "סנכרון בזמן אמת", text: "סנכרון נתונים מיידי באמצעות webhooks משתי הפלטפורמות" },
                        { icon: "fas fa-users", title: "פרופילי לקוחות", text: "סנכרון נתוני לקוח מלא כולל מאפיינים מותאמים אישית" },
                        { icon: "fas fa-receipt", title: "היסטוריית הזמנות", text: "היסטוריית הזמנות ועסקאות מלאה ב-HubSpot CRM" },
                        { icon: "fas fa-exchange-alt", title: "זרימה דו-כיוונית", text: "סנכרון נתונים דו-כיווני המבטיח עקביות על פני פלטפורמות" },
                        { icon: "fas fa-shield-alt", title: "פתרון קונפליקטים", text: "טיפול אוטומטי בקונפליקטי נתונים וכפילויות" },
                        { icon: "fas fa-bell", title: "התראות חכמות", text: "התראות אוטומטיות לשגיאות סנכרון ואירועים חשובים" }
                    ]
                },
                results: {
                    title: "תוצאות והשפעה",
                    items: [
                        { number: "100%", label: "דיוק נתונים", text: "דיוק סנכרון מושלם על פני פלטפורמות" },
                        { number: "50%", label: "חיסכון בזמן", text: "הפחתה של 50% בהזנת נתונים ידנית" },
                        { number: "זמן אמת", label: "עדכונים", text: "עדכוני נתונים מיידיים תוך שניות" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורת המערכת",
                    intro: "האינטגרציה משתמשת בארכיטקטורה מתוחכמת מונעת אירועים:",
                    points: [
                        { title: "מטפלי Webhook", text: "מקלטי webhook ייעודיים לאירועי Shopify ו-HubSpot" },
                        { title: "מנוע סנכרון", text: "לוגיקת סנכרון ליבה עם מיפוי שדות וטרנספורמציית נתונים" },
                        { title: "מערכת תורים", text: "תורי הודעות לעיבוד אסינכרוני אמין ולוגיקת ניסיון חוזר" },
                        { title: "שירות ניטור", text: "ניטור והתראות בזמן אמת לפעולות סנכרון ושגיאות" }
                    ]
                },
                lessons: {
                    title: "למידה טכנית",
                    content: "פרויקט זה שיפר את המומחיות שלי בבניית מערכות אינטגרציה אמינות, טיפול במגבלות קצב API על פני פלטפורמות מרובות ועיצוב אסטרטגיות פתרון קונפליקטים לסנכרון דו-כיווני. רכשתי ידע עמוק ב-APIs של HubSpot ו-Shopify, דפוסי אבטחת webhook ובניית מערכות מבוזרות עמידות בפני תקלות."
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
                        role: { label: "תפקיד", value: "מומחית אינטגרציה" }
                    }
                },
                technologies: {
                    title: "טכנולוגיות בשימוש",
                    tags: ["Node.js", "Express", "HubSpot API", "Shopify API", "Webhooks", "Redis", "Message Queue", "REST API"]
                },
                achievements: {
                    title: "הישגים מרכזיים",
                    list: ["דיוק נתונים של 100%", "חיסכון של 50% בזמן", "סנכרון בזמן אמת", "אפס אובדן נתונים", "פתרון קונפליקטים אוטומטי"]
                },
                cta: {
                    title: "צריך אינטגרציית CRM?",
                    text: "בואו נחבר את פלטפורמת המסחר האלקטרוני שלך למערכת ה-CRM שלך.",
                    button: "צור קשר"
                }
            },
            related: {
                title: "פרויקטים קשורים",
                projects: [
                    { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים דו-כיווני מקיף" },
                    { id: "automation-workflows", title: "תהליכי אוטומציה", desc: "אוטומציה מונעת אירועים עם webhooks של Shopify" },
                    { id: "b2b-platform", title: "פלטפורמת B2B", desc: "פלטפורמה לשיתוף מוצרים משותף" }
                ]
            },
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    },
    'data-sync-platform': {
        en: {
            title: "Multi-Store Data Synchronization Platform",
            lead: "Advanced platform for seamless data import/export between multiple Shopify stores",
            meta: { year: "2023-2024", company: "Leibish Online", tech: "Node.js, Shopify API, REST API, GraphQL" },
            breadcrumb: { home: "Home", projects: "Projects", current: "Data Sync Platform" },
            sections: {
                overview: {
                    title: "Project Overview",
                    content: "Built a comprehensive data synchronization platform that enables seamless import and export of product catalogs, inventory data, and customer information between multiple Shopify stores. The system allows businesses with multiple store locations to maintain consistent data across their entire network while supporting selective synchronization based on business rules. This solution eliminates manual data entry, reduces errors, and ensures real-time consistency across all connected stores."
                },
                challenge: {
                    title: "The Business Challenge",
                    content: "Managing multiple Shopify stores with consistent product catalogs and inventory was a significant operational challenge. The business needed to synchronize thousands of products across 5+ stores, maintain accurate inventory levels, and ensure pricing consistency. Manual data entry was time-consuming, error-prone, and couldn't scale with the growing store network. The company needed an automated solution that could handle bulk operations while maintaining data integrity and supporting custom business logic."
                },
                solution: {
                    title: "The Solution",
                    intro: "I developed a robust data synchronization platform with these core capabilities:",
                    points: [
                        { title: "Bidirectional Sync", text: "Two-way data flow between stores with intelligent conflict resolution to handle simultaneous updates" },
                        { title: "Product Catalog Sync", text: "Complete synchronization of products including variants, images, metafields, and all product attributes" },
                        { title: "Inventory Management", text: "Real-time inventory synchronization across the store network with threshold-based alerts" },
                        { title: "Selective Sync Rules", text: "Flexible rule-based filtering allowing businesses to control which products sync to which stores" },
                        { title: "Bulk Operations", text: "Efficient batch processing for large-scale data imports and exports with progress tracking" },
                        { title: "Data Validation", text: "Automated validation checks to ensure data integrity and prevent sync errors" }
                    ]
                },
                implementation: { title: "Technical Implementation" },
                features: {
                    title: "Key Features",
                    list: [
                        { icon: "fas fa-exchange-alt", title: "Bidirectional Sync", text: "Two-way data flow with conflict resolution" },
                        { icon: "fas fa-boxes", title: "Product Catalog", text: "Complete product data including variants and images" },
                        { icon: "fas fa-warehouse", title: "Inventory Sync", text: "Real-time inventory updates across stores" },
                        { icon: "fas fa-filter", title: "Smart Filtering", text: "Rule-based selective synchronization" },
                        { icon: "fas fa-file-export", title: "Bulk Processing", text: "Efficient batch import/export operations" },
                        { icon: "fas fa-shield-alt", title: "Data Validation", text: "Automated quality checks and error prevention" }
                    ]
                },
                results: {
                    title: "Results & Impact",
                    items: [
                        { number: "90%", label: "Time Reduction", text: "Eliminated manual data entry work" },
                        { number: "5+", label: "Stores Connected", text: "Synchronized across network" },
                        { number: "99.9%", label: "Data Accuracy", text: "Consistent across all stores" }
                    ]
                },
                architecture: {
                    title: "System Architecture",
                    intro: "The platform uses a scalable, event-driven architecture:",
                    points: [
                        { title: "API Integration Layer", text: "Handles communication with multiple Shopify stores using REST and GraphQL APIs" },
                        { title: "Sync Engine", text: "Core synchronization logic with field mapping, data transformation, and conflict resolution" },
                        { title: "Queue System", text: "Message queues for reliable batch processing and async operations" },
                        { title: "Validation Service", text: "Ensures data integrity before and after synchronization" }
                    ]
                },
                lessons: {
                    title: "Technical Learnings",
                    content: "This project deepened my expertise in building scalable data synchronization systems, managing API rate limits across multiple stores, and designing efficient batch processing pipelines. I gained valuable experience in handling large-scale data operations, implementing robust error handling, and building systems that maintain data consistency in distributed environments."
                }
            },
            sidebar: {
                details: {
                    title: "Project Details",
                    items: {
                        client: { label: "Client", value: "Leibish Online" },
                        industry: { label: "Industry", value: "Multi-Store E-commerce" },
                        year: { label: "Year", value: "2023-2024" },
                        duration: { label: "Duration", value: "3 months" },
                        role: { label: "Role", value: "Full-Stack Developer" }
                    }
                },
                technologies: {
                    title: "Technologies Used",
                    tags: ["Node.js", "Express", "Shopify REST API", "Shopify GraphQL", "Redis", "Message Queue", "Batch Processing", "Webhooks"]
                },
                achievements: {
                    title: "Key Achievements",
                    list: ["90% time savings", "5+ stores connected", "99.9% data accuracy", "Zero data loss", "Automated sync rules"]
                },
                cta: {
                    title: "Need Multi-Store Sync?",
                    text: "Let's connect and synchronize your Shopify store network.",
                    button: "Get in Touch"
                }
            },
            related: {
                title: "Related Projects",
                projects: [
                    { id: "erp-integration", title: "ERP-Shopify Integration", desc: "Comprehensive bidirectional data synchronization" },
                    { id: "hubspot-sync", title: "HubSpot Sync", desc: "CRM synchronization system" },
                    { id: "b2b-platform", title: "B2B Platform", desc: "Collaborative product sharing platform" }
                ]
            },
            nav: { back: "Back to Portfolio" },
            footer: { copyright: "© 2026 Hadas Schweitzer. All rights reserved.", back: "Back to Portfolio" }
        },
        he: {
            title: "פלטפורמת סנכרון נתונים בין חנויות",
            lead: "פלטפורמה מתקדמת ליבוא/יצוא נתונים חלק בין מספר חנויות שופיפיי",
            meta: { year: "2023-2024", company: "Leibish Online", tech: "Node.js, Shopify API, REST API, GraphQL" },
            breadcrumb: { home: "בית", projects: "פרויקטים", current: "פלטפורמת סנכרון נתונים" },
            sections: {
                overview: {
                    title: "סקירת הפרויקט",
                    content: "בניתי פלטפורמת סנכרון נתונים מקיפה המאפשרת יבוא ויצוא חלק של קטלוגי מוצרים, נתוני מלאי ומידע לקוחות בין מספר חנויות שופיפיי. המערכת מאפשרת לעסקים עם מספר מיקומי חנויות לשמור על עקביות נתונים ברחבי הרשת שלהם תוך תמיכה בסנכרון סלקטיבי המבוסס על כללים עסקיים. פתרון זה מבטל הזנת נתונים ידנית, מפחית שגיאות ומבטיח עקביות בזמן אמת בכל החנויות המחוברות."
                },
                challenge: {
                    title: "האתגר העסקי",
                    content: "ניהול מספר חנויות שופיפיי עם קטלוגי מוצרים ומלאי עקביים היה אתגר תפעולי משמעותי. העסק היה צריך לסנכרן אלפי מוצרים על פני 5+ חנויות, לשמור על רמות מלאי מדויקות ולהבטיח עקביות תמחור. הזנת נתונים ידנית הייתה גוזלת זמן, נוטה לשגיאות ולא יכלה להתרחב עם רשת החנויות הגדלה. החברה הייתה זקוקה לפתרון אוטומטי שיכול להתמודד עם פעולות המוניות תוך שמירה על שלמות הנתונים ותמיכה בלוגיקה עסקית מותאמת אישית."
                },
                solution: {
                    title: "הפתרון",
                    intro: "פיתחתי פלטפורמת סנכרון נתונים חזקה עם היכולות המרכזיות הבאות:",
                    points: [
                        { title: "סנכרון דו-כיווני", text: "זרימת נתונים דו-כיוונית בין חנויות עם פתרון קונפליקטים חכם לטיפול בעדכונים בו-זמניים" },
                        { title: "סנכרון קטלוג מוצרים", text: "סנכרון מלא של מוצרים כולל גרסאות, תמונות, metafields וכל תכונות המוצר" },
                        { title: "ניהול מלאי", text: "סנכרון מלאי בזמן אמת ברחבי רשת החנויות עם התראות מבוססות סף" },
                        { title: "כללי סנכרון סלקטיביים", text: "סינון גמיש מבוסס כללים המאפשר לעסקים לשלוט אילו מוצרים מסתנכרנים לאילו חנויות" },
                        { title: "פעולות המוניות", text: "עיבוד אצווה יעיל ליבוא ויצוא נתונים בקנה מידה גדול עם מעקב התקדמות" },
                        { title: "אימות נתונים", text: "בדיקות אימות אוטומטיות להבטחת שלמות נתונים ומניעת שגיאות סנכרון" }
                    ]
                },
                implementation: { title: "יישום טכני" },
                features: {
                    title: "תכונות עיקריות",
                    list: [
                        { icon: "fas fa-exchange-alt", title: "סנכרון דו-כיווני", text: "זרימת נתונים דו-כיוונית עם פתרון קונפליקטים" },
                        { icon: "fas fa-boxes", title: "קטלוג מוצרים", text: "נתוני מוצר מלאים כולל גרסאות ותמונות" },
                        { icon: "fas fa-warehouse", title: "סנכרון מלאי", text: "עדכוני מלאי בזמן אמת על פני חנויות" },
                        { icon: "fas fa-filter", title: "סינון חכם", text: "סנכרון סלקטיבי מבוסס כללים" },
                        { icon: "fas fa-file-export", title: "עיבוד המוני", text: "פעולות יבוא/יצוא אצווה יעילות" },
                        { icon: "fas fa-shield-alt", title: "אימות נתונים", text: "בדיקות איכות אוטומטיות ומניעת שגיאות" }
                    ]
                },
                results: {
                    title: "תוצאות והשפעה",
                    items: [
                        { number: "90%", label: "הפחתת זמן", text: "ביטול עבודת הזנת נתונים ידנית" },
                        { number: "5+", label: "חנויות מחוברות", text: "מסונכרנות ברחבי הרשת" },
                        { number: "99.9%", label: "דיוק נתונים", text: "עקביות בכל החנויות" }
                    ]
                },
                architecture: {
                    title: "ארכיטקטורת המערכת",
                    intro: "הפלטפורמה משתמשת בארכיטקטורה מדרגית מונעת אירועים:",
                    points: [
                        { title: "שכבת אינטגרציית API", text: "מטפלת בתקשורת עם מספר חנויות שופיפיי באמצעות REST ו-GraphQL APIs" },
                        { title: "מנוע סנכרון", text: "לוגיקת סנכרון ליבה עם מיפוי שדות, טרנספורמציית נתונים ופתרון קונפליקטים" },
                        { title: "מערכת תורים", text: "תורי הודעות לעיבוד אצווה אמין ופעולות אסינכרוניות" },
                        { title: "שירות אימות", text: "מבטיח שלמות נתונים לפני ואחרי סנכרון" }
                    ]
                },
                lessons: {
                    title: "למידה טכנית",
                    content: "פרויקט זה העמיק את המומחיות שלי בבניית מערכות סנכרון נתונים מדרגיות, ניהול מגבלות קצב API על פני חנויות מרובות ועיצוב צינורות עיבוד אצווה יעילים. רכשתי ניסיון רב ערך בטיפול בפעולות נתונים בקנה מידה גדול, יישום טיפול חזק בשגיאות ובניית מערכות השומרות על עקביות נתונים בסביבות מבוזרות."
                }
            },
            sidebar: {
                details: {
                    title: "פרטי הפרויקט",
                    items: {
                        client: { label: "לקוח", value: "Leibish Online" },
                        industry: { label: "תעשייה", value: "מסחר אלקטרוני רב-חנויות" },
                        year: { label: "שנה", value: "2023-2024" },
                        duration: { label: "משך זמן", value: "3 חודשים" },
                        role: { label: "תפקיד", value: "מפתחת Full-Stack" }
                    }
                },
                technologies: {
                    title: "טכנולוגיות בשימוש",
                    tags: ["Node.js", "Express", "Shopify REST API", "Shopify GraphQL", "Redis", "Message Queue", "Batch Processing", "Webhooks"]
                },
                achievements: {
                    title: "הישגים מרכזיים",
                    list: ["חיסכון של 90% בזמן", "5+ חנויות מחוברות", "דיוק נתונים של 99.9%", "אפס אובדן נתונים", "כללי סנכרון אוטומטיים"]
                },
                cta: {
                    title: "צריך סנכרון רב-חנויות?",
                    text: "בואו נחבר ונסנכרן את רשת חנויות השופיפיי שלך.",
                    button: "צור קשר"
                }
            },
            related: {
                title: "פרויקטים קשורים",
                projects: [
                    { id: "erp-integration", title: "אינטגרציה ERP-Shopify", desc: "סנכרון נתונים דו-כיווני מקיף" },
                    { id: "hubspot-sync", title: "סנכרון HubSpot", desc: "מערכת סנכרון CRM" },
                    { id: "b2b-platform", title: "פלטפורמת B2B", desc: "פלטפורמה לשיתוף מוצרים משותף" }
                ]
            },
            nav: { back: "חזרה לתיק העבודות" },
            footer: { copyright: "© 2026 הדס שוויצר. כל הזכויות שמורות.", back: "חזרה לתיק העבודות" }
        }
    }
};

// Current language
let currentProjectLanguage = 'en';
