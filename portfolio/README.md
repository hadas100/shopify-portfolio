# Shopify Developer Portfolio

A modern, professional portfolio website showcasing Shopify development projects and expertise.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Detailed project pages with descriptions, technologies, and results
- **Skills Section**: Comprehensive display of technical skills and expertise
- **Contact Section**: Easy ways to get in touch

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── css/
│   ├── style.css          # Main stylesheet
│   └── project-detail.css # Project detail pages stylesheet
├── js/
│   └── script.js          # Interactive functionality
├── images/
│   ├── project-ai-image.jpg
│   ├── project-erp.jpg
│   ├── project-automation.jpg
│   ├── project-hubspot.jpg
│   ├── project-ai-desc.jpg
│   └── project-b2b.jpg
└── projects/
    ├── ai-image-generation.html
    ├── erp-integration.html
    ├── automation-workflows.html
    ├── hubspot-sync.html
    ├── ai-descriptions.html
    └── b2b-platform.html
```

## 🎨 Featured Projects

1. **AI Image Generation App** - Shopify-integrated application for automated product image generation using OpenAI and Gemini APIs
2. **ERP-Shopify Integration** - Comprehensive bidirectional synchronization between Fantasy ERP and Shopify
3. **Shopify Automation Workflows** - Event-driven automation using webhooks for real-time processing
4. **Shopify-HubSpot Sync** - Real-time CRM synchronization for products, orders, and customers
5. **AI Product Description Generator** - Automated SEO-optimized product descriptions using AI
6. **B2B Product Sharing Platform** - Collaborative platform for merchants to share product catalogs

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with modern features (Grid, Flexbox, CSS Variables)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter (Google Fonts)
- **Animations**: CSS animations and JavaScript Intersection Observer API

## 📝 Customization Guide

### Update Personal Information

1. **Contact Details** (index.html - Contact Section):
   - Replace `your.email@example.com` with your email
   - Update LinkedIn and GitHub profile URLs
   - Modify location if needed

2. **Profile Information** (index.html - About Section):
   - Update the biography text to match your experience
   - Modify stats (years of experience, projects completed)

### Add/Update Projects

1. Create a new HTML file in `/projects/` directory
2. Use existing project pages as templates
3. Add project card to main portfolio page (index.html)
4. Create/add project image to `/images/` directory

### Customize Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #96bf48;      /* Main brand color */
    --secondary-color: #5e8e3e;    /* Secondary brand color */
    --accent-color: #ffd700;       /* Accent highlights */
    --dark-bg: #0a0e1a;           /* Dark background */
    /* ... more variables ... */
}
```

### Replace Placeholder Images

Replace SVG placeholder images in `/images/` directory with:
- Real project screenshots
- Product mockups
- Application interfaces
- Demo videos converted to images

Recommended image sizes:
- Project cards: 800x600px
- Project detail pages: 1200x800px

## 🌐 Deployment

### Option 1: GitHub Pages

1. Push portfolio to GitHub repository
2. Go to Settings > Pages
3. Select main branch and /portfolio folder
4. Your site will be live at `https://username.github.io/repo-name/`

### Option 2: Netlify

1. Drag and drop the `/portfolio` folder to Netlify
2. Or connect your GitHub repository
3. Instant deployment with custom domain support

### Option 3: Vercel

1. Import your GitHub repository
2. Set root directory to `/portfolio`
3. Deploy with one click

## 📧 Contact Information to Update

Before deploying, update these contact details throughout the site:

- Email address
- LinkedIn profile URL
- GitHub profile URL
- Phone number (if you want to include one)
- Portfolio URL
- Any other social media links

## 🎯 SEO Optimization

To improve SEO:

1. Add meta descriptions to each page
2. Update title tags with relevant keywords
3. Add Open Graph tags for social media sharing
4. Create a sitemap.xml
5. Add Google Analytics tracking code

## 📱 Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Future Enhancements

Possible improvements:
- Add dark/light theme toggle
- Implement blog section
- Add testimonials/recommendations
- Include case studies
- Add downloadable resume
- Implement contact form with backend

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Credits

- Font Awesome for icons
- Google Fonts for typography
- Placeholder images created with SVG

---

**Ready to showcase your Shopify development skills!** 🚀

For questions or support, please open an issue in the repository.
