# Shopify Commerce Portfolio

Portfolio website for Hadass Schweitzer, Shopify Plus consultant specializing in complex storefronts, integrations and automation.

## What you will find
- Hero section with positioning, KPI counters and multi CTA (Calendly, WhatsApp, anchor navigation)
- Service tracks (Foundation, Growth, Connect) each with bullet points
- Trust builders and process timeline for quick due diligence
- Portfolio grid that links to detailed case studies in `/projects`
- FAQ + contact region with meeting booking form powered by FormSubmit

## Project structure
```
portfolio/
├── index.html              # Main page
├── css/
│   ├── style.css           # Core styling
│   ├── utilities.css       # Helpers
│   ├── enhancements.css    # Extras
│   └── animations.css      # Animation presets
├── js/
│   ├── interactions.js     # Scroll/accordion/menu logic
│   └── animations.js       # Advanced timeline effects
├── images/                 # Optimized hero + project images
└── projects/               # Individual case study pages
```

## Running locally
Open `index.html` in any modern browser or serve the folder with your favorite static server (e.g. `npx serve`). No build step is required.

## Customization tips
1. **Branding** – adjust the CSS variables at the top of `css/style.css`.
2. **Copy** – update the Hebrew text directly in `index.html` and the files in `projects/`.
3. **Contact Form** – FormSubmit is configured via hidden inputs. Replace the email with your own if needed.
4. **Analytics** – embed your tracking snippet inside `<head>` in `index.html`.

## Deployment
The site is 100% static and works on Netlify, Vercel, GitHub Pages or any classic hosting. Upload the `portfolio` directory as-is.

---
נבנה באהבה ל-Shopify, לאנשים ולמערכות שמדברות אחת עם השנייה.
