# Architecture

## Executive Summary

This architecture defines a static HTML/CSS/JavaScript multi-product portfolio website built using the **Landwind** open-source template (Tailwind CSS + Flowbite components). The site is optimized for performance, SEO, and conversion while maintaining **zero hosting costs** by using the domain provider's free hosting tier. The architecture prioritizes mobile-first design (62.54% traffic), sub-2-second load times, and SEO optimization for 15 target keywords across 3 product categories.

## Project Initialization

**Platform:** Static HTML/CSS/JS with Tailwind CSS
**Template:** Landwind (Open-source, MIT License)
**Setup Method:** Git-based development with static file deployment

```
1. Clone Landwind template from GitHub (https://github.com/themesberg/landwind)
2. Customize for Tidox branding and 3-product showcase
3. Build with Tailwind CLI to generate optimized CSS
4. Deploy static files (HTML/CSS/JS) to domain provider's free hosting
5. Configure custom domain: tidox.online via DNS settings
6. SSL certificate managed by hosting provider
```

**Technology Stack:**
- HTML5 (semantic, accessible markup)
- Tailwind CSS v3+ (utility-first CSS framework)
- Flowbite Components (pre-built UI components)
- Vanilla JavaScript (minimal, no framework dependencies)
- Git for version control
- Static file hosting (domain provider's free tier)

## Decision Summary

| Category | Decision | Version | Affects Epics | Rationale |
| -------- | -------- | ------- | ------------- | --------- |
| Platform | Static HTML/CSS/JS | HTML5, Tailwind CSS v3+ | All Epics | Zero cost, full control, no vendor lock-in, simple deployment |
| Template | Landwind (Tailwind + Flowbite) | Open-source (MIT) | All Epics | Modern design, 993 GitHub stars, dark mode built-in, free commercial use |
| Hosting | Domain Provider Free Tier | Static files | All Epics | €0/month cost, simple FTP/SFTP upload, SSL included |
| CSS Framework | Tailwind CSS | v3+ | All Epics | Industry standard 2025, utility-first, lightweight (~50KB), highly customizable |
| Components | Flowbite | Latest | All Epics | Pre-built Tailwind components, accessible, responsive |
| Content Management | Static HTML (manual editing) | N/A | Epic 3 | Simple product showcase, no CMS overhead needed for 3 products |
| Analytics | Google Analytics 4 | Latest | Epic 6 | Custom event tracking, conversion funnels, free tier sufficient |
| Forms | FormSpree or Formsubmit | Free tier | Epic 3, 5 | Contact form, Task Manager waitlist, free static form backends |
| SEO | Manual meta tags + JSON-LD | Schema.org 2025 | Epic 6 | Full control, no platform limitations, standard HTML meta tags |
| Performance | Manual optimization | Tailwind CLI, imageOptim | Epic 7 | Tailwind purge CSS (~10KB final), WebP images, manual but effective |
| Design System | Tailwind utility classes | Tailwind v3+ | Epic 1 | Consistent spacing, colors, typography via Tailwind config |
| Dark Mode | Tailwind dark: variants | Native Tailwind | Epic 7 | CSS-only dark mode, no JavaScript needed, localStorage toggle |
| Email Waitlist | Formsubmit.co | Free | Epic 3 | Task Manager waitlist, free email forwarding, no API needed |
| Schema Markup | JSON-LD in HTML | Schema.org 2025 | Epic 6 | MobileApplication, FAQ, Organization schemas for rich snippets |
| Responsive Design | Tailwind responsive classes | sm/md/lg/xl breakpoints | All Epics | Mobile-first (62.54% traffic), Tailwind responsive utilities |

## Project Structure

```
tidox-landing-page/ (Git Repository)
├── index.html                  # Homepage
├── player.html                 # Tidox Player landing page
├── transcript.html             # Offline Transcript landing page
├── task-manager.html           # Task Manager coming soon page
├── pricing.html                # Unified pricing comparison
├── about.html                  # Company information
├── privacy.html                # Privacy policy
├── terms.html                  # Terms of service
├── contact.html                # Contact form & support
│
├── css/
│   ├── output.css              # Compiled Tailwind CSS (production)
│   └── tailwind.config.js      # Tailwind configuration
│
├── js/
│   ├── main.js                 # Global scripts (navigation, dark mode)
│   ├── analytics.js            # Google Analytics 4 setup
│   └── flowbite.min.js         # Flowbite components (from CDN or local)
│
├── assets/
│   ├── images/
│   │   ├── hero/               # Hero section images
│   │   ├── icons/              # Product and feature icons (SVG)
│   │   ├── screenshots/        # Product screenshots (WebP)
│   │   │   ├── player/
│   │   │   ├── transcript/
│   │   │   └── task-manager/
│   │   ├── logos/              # Tidox logo, Play Store badge
│   │   └── social/             # Social media icons
│   └── fonts/                  # Custom fonts (if not using CDN)
│
├── docs/                       # BMAD documentation (not deployed)
│   ├── PRD.md
│   ├── architecture.md
│   ├── epics.md
│   ├── sprint-status.yaml
│   └── stories/
│
├── bmad/                       # BMAD system (not deployed)
│
├── .gitignore                  # Git ignore (node_modules, etc.)
├── package.json                # Node.js dependencies (Tailwind CLI)
├── README.md                   # Project documentation
└── deploy.sh                   # Deployment script (FTP/SFTP)
```

**Deployment Structure (uploaded to hosting):**
```
public_html/                    # Domain provider's web root
├── index.html
├── player.html
├── transcript.html
├── task-manager.html
├── pricing.html
├── about.html
├── privacy.html
├── terms.html
├── contact.html
├── css/
│   └── output.css
├── js/
│   ├── main.js
│   ├── analytics.js
│   └── flowbite.min.js
└── assets/
    └── images/
```

## Epic to Architecture Mapping

| Epic | Architecture Components | Pages | CMS Collections | Integrations |
|------|------------------------|-------|-----------------|--------------|
| **Epic 1: Foundation & Setup** | Header, Footer, MobileMenu, Design System (colors, typography, buttons, cards, forms) | index (blank), all route structure created | None yet | None yet |
| **Epic 2: Homepage** | ProductCard, FeatureCard, TestimonialCard, SocialProof, hero sections | index (complete) | products (3 items), testimonials (3+ items) | None yet |
| **Epic 3: Product Landing Pages** | ScreenshotGallery, ComparisonTable, FAQAccordion, download sections | player, transcript, task-manager | products (fully populated with screenshots, features, FAQs), testimonials (product-specific) | Email service (Task Manager waitlist form) |
| **Epic 4: Pricing Page** | ComparisonTable (expanded 6-column), pricing toggle, trust signals | pricing | products (pricing data), testimonials (premium-focused) | None (uses existing GA4) |
| **Epic 5: About & Supporting** | ContactForm, FormValidation | about, privacy, terms, contact | None (static content) | Contact form submission handler |
| **Epic 6: SEO & Analytics** | Schema markup components, meta tag templates | All pages (SEO metadata) | None (technical infrastructure) | Google Analytics 4 (custom events), Google Search Console (sitemap) |
| **Epic 7: Optimization & Polish** | DarkModeToggle, FloatingCTA, micro-interaction animations | All pages (performance optimization) | None | Performance monitoring (Lighthouse CI) |

## Technology Stack Details

### Core Technologies

**Frontend:**
- **Framework:** Framer (React-based SSR, v2025)
  - Visual component-based development
  - Automatic responsive breakpoints (1220px, 768px, 320px)
  - Built-in animation and interaction tools
  - Component variants for states (hover, active, dark mode)

**Hosting & Infrastructure:**
- **Hosting:** Framer Hosting ($15/month Mini plan)
- **CDN:** AWS CloudFront (13+ edge locations standard, 200+ available premium)
- **SSL:** Let's Encrypt (automatic generation and renewal)
- **Compression:** Gzip/Brotli (automatic)
- **Uptime SLA:** 99.9%

**Content Management:**
- **CMS:** Framer CMS (native)
  - Collections: products, testimonials, blog_posts (future)
  - Capacity: 100K items, 10K per collection
  - Field types: text, rich text, images, numbers, booleans, dates, links

**Analytics & Tracking:**
- **Primary:** Google Analytics 4
  - Custom events: click_download_cta, view_pricing_page, toggle_annual_pricing, expand_faq, click_product_card, join_waitlist
  - Conversion funnels: Homepage → Product → Download, Pricing → Download
  - Built-in Framer integration (paste Measurement ID)

**Forms & Email:**
- **Forms:** Framer Forms (native)
  - Contact form, Task Manager waitlist
  - Spam protection: reCAPTCHA or honeypot
- **Email Service:** Mailchimp or ConvertKit (API integration)
  - Waitlist management, drip campaigns
  - Integration via Framer custom code or webhooks

**SEO:**
- **Meta Tags:** Framer native support (per-page customization)
- **Schema Markup:** JSON-LD (custom code blocks)
  - MobileApplication schema (product pages)
  - FAQ schema (all FAQ sections)
  - Organization schema (homepage, about)
- **Sitemap:** Auto-generated by Framer, submitted to Google Search Console
- **Robots.txt:** Customizable via Framer settings

**Performance:**
- **Image Optimization:** Automatic WebP conversion, lazy loading
- **Code Optimization:** Minified CSS/JS (automatic)
- **Caching:** Edge caching via CloudFront (configurable TTL)
- **Compression:** Gzip/Brotli via CDN

**Design System:**
- **Typography:** Modern sans-serif (Inter, Manrope, or custom)
  - H1-H4 (bold, oversized for 2025 trend)
  - Body text (regular, medium, semibold)
  - Caption/small text
- **Colors:** Primary accent, secondary, neutral grays, success/error/warning
  - Light mode palette
  - Dark mode variants (stored as component variants)
- **Components:** Buttons (primary, secondary, text), cards (product, feature, testimonial), forms (input, validation states)

### Integration Points

**1. Framer → Google Analytics 4:**
- Integration: Paste GA4 Measurement ID in Site Settings → General
- Custom Events: gtag() calls via custom code blocks
- Data Flow: Page views (automatic), custom events (manual implementation)

**2. Framer → Email Service (Mailchimp/ConvertKit):**
- Integration: API webhooks or Zapier connector
- Use Case: Task Manager waitlist form submission
- Data Flow: User submits email → Framer form → Webhook → Email service → Confirmation email

**3. Framer → Play Store (External Links):**
- Integration: Direct URL links in CTA buttons
- Tracking: GA4 outbound link events
- Data Flow: User clicks CTA → GA4 logs event → Redirect to Play Store

**4. Framer → Google Search Console:**
- Integration: Domain verification (DNS TXT record)
- Purpose: Sitemap submission, indexing monitoring, keyword performance
- Data Flow: Framer generates sitemap.xml → Submitted to GSC → Index status monitored

**5. Framer CMS → Page Content:**
- Integration: Native CMS binding to components
- Data Flow: CMS collections → Dynamic content injection → Page rendering
- Use Cases: Product features, testimonials, FAQs, blog posts (future)

**6. Framer → Custom Domain (tidox.online):**
- Integration: DNS configuration (A records: 76.76.21.21, CNAME for www)
- SSL: Auto-generated by Let's Encrypt upon domain verification
- Propagation: 48 hours max, typically minutes

## Implementation Patterns

These patterns ensure consistent implementation across all AI agents:

### Naming Conventions

**Component Naming:**
- **Format:** PascalCase for components (ProductCard, FeatureCard, EmailInput)
- **File Naming:** Components organized by category in Framer library (cards/, buttons/, forms/)
- **Variants:** Descriptive names (PrimaryCTA, SecondaryCTA, not Button1, Button2)

**Page Naming:**
- **Format:** Lowercase, hyphen-separated for URLs (/player, /pricing, /task-manager)
- **File Names:** Match URL structure (index, player, transcript, task-manager)

**CMS Collection Naming:**
- **Format:** Lowercase, underscores for multi-word (products, testimonials, blog_posts)
- **Fields:** Lowercase, underscores (product_name, download_url, featured_image)

**Asset Naming:**
- **Format:** `{product}-{type}-{description}.{ext}`
- **Examples:** player-icon-64.svg, transcript-screenshot-home.webp, task-manager-mockup-01.png

**CSS/Style Naming:**
- **Format:** Framer uses visual naming (H1, H2, Body, Caption)
- **Colors:** Descriptive (Primary Accent, Neutral Dark, Success Green)

### Structure Patterns

**Component Organization:**
- Group by function (layout/, cards/, buttons/, forms/, navigation/, content/, ui/)
- Shared components at top level, page-specific nested within page folders
- Variants for states (hover, active, disabled) and themes (light, dark)

**Page Structure:**
- Stack-based layout: Root frame → Sections (Header, Hero, Content sections, Footer) stacked vertically
- Responsive: Desktop breakpoint default (1220px), add tablet (768px) and mobile (320px) as needed
- Consistent header/footer across all pages (use layout components)

**Content Sections:**
- Hero (above fold): H1, value prop, visual (screenshot/mockup), dual CTAs
- Features: Grid layout (2 columns desktop, 1 mobile), icon + title + description
- Social Proof: Testimonials (carousel), metrics (grid), ratings
- CTA: Final conversion section above footer

**CMS Structure:**
- Products collection: All product info centralized, referenced across pages
- Testimonials collection: Filterable by product, featured flag for homepage
- Blog posts (future): Standard fields (title, author, date, content, featured_image)

### Format Patterns

**API/Data Formats:**
- **CMS Data:** JSON returned from Framer CMS API
- **Forms:** POST to Framer endpoint → Webhook to external service (JSON payload)
- **Analytics Events:** gtag() format with custom parameters

**Image Formats:**
- **Primary:** WebP (automatic Framer conversion)
- **Fallback:** PNG for compatibility if needed
- **Icons:** SVG (scalable, small file size)

**Date Formats:**
- **Display:** "Month DD, YYYY" (e.g., "November 5, 2025")
- **ISO:** YYYY-MM-DD for CMS date fields

**URL Formats:**
- **Internal:** Relative paths (/player, /pricing)
- **External:** Full URLs (https://play.google.com/store/apps/details?id=...)
- **Anchors:** #section-name for scroll links

### Communication Patterns

**Navigation Flow:**
- Header → Mega-menu (hover desktop, tap mobile) → Product pages
- Product cards → "Learn More" CTA → Product landing pages
- All CTAs → Play Store or action pages (pricing, waitlist)

**Form Submissions:**
- User input → Client-side validation → Framer form handler → Success message
- Task Manager waitlist → Framer form → Webhook → Email service → Confirmation email

**CTA Actions:**
- Primary: External Play Store links (outbound link tracking via GA4)
- Secondary: Internal navigation (scroll to section, navigate to page)
- Tertiary: Modals/overlays (lightbox, mobile menu)

**Content Updates:**
- CMS-driven content: Update via Framer CMS interface
- Static content: Edit page directly in Framer visual editor
- Code/integrations: Custom code blocks for scripts (GA4, schema markup)

### Lifecycle Patterns

**Loading States:**
- **Images:** Skeleton screens during load, fade-in when loaded (no spinners per 2025 trend)
- **Content:** Static layout prevents CLS (Cumulative Layout Shift), explicit width/height on images
- **Forms:** Button disabled during submission, loading state shown

**Error States:**
- **Form Validation:** Red border + shake animation, error message below field
- **Network Errors:** Retry message for forms, graceful degradation if external services fail
- **404 Pages:** Custom 404 with navigation back to homepage (Framer supports custom 404)

**Success States:**
- **Form Submission:** Green border + checkmark icon, success message fade-in
- **Waitlist Signup:** Confirmation message: "You're on the list! We'll email you when Task Manager launches."
- **Page Load:** Smooth fade-in animations on scroll-into-view

**Dark Mode Toggle:**
- **State:** Stored in localStorage ("theme": "light" | "dark")
- **System Preference:** Check prefers-color-scheme on first visit
- **Transition:** 300ms color transition, no flash on page load

### Location Patterns

**Page Routes:**
- Root: / (homepage)
- Products: /player, /transcript, /task-manager
- Pricing: /pricing
- Company: /about, /contact
- Legal: /privacy, /terms

**Asset Locations:**
- Icons: /assets/icons/{category}/{name}.svg
- Screenshots: /assets/screenshots/{product}/{name}.webp
- Brand: /assets/brand/{name}.{ext}

**Component Library:**
- Organized by folder in Framer components panel
- Shared at project level (not page-specific unless unique)

**CMS Collections:**
- Accessible via CMS panel in Framer
- Bind to page components via CMS connection tool

### Consistency Patterns

**Date Formatting:**
- Display: "Month DD, YYYY" (e.g., "November 5, 2025")
- Copyright: © 2025 Tidox (update annually)

**Error Messaging:**
- User-friendly, actionable (e.g., "Please enter a valid email address" not "Invalid input")
- Consistent tone: Professional but approachable

**User-Facing Text:**
- Headlines: Bold, oversized (2025 trend), action-oriented
- Descriptions: 1-3 sentences, benefit-focused
- CTAs: Action verbs (Download, Get, Join, Explore)
- FAQs: Question format, conversational answers

**Logging/Debugging:**
- Not applicable (Framer is visual, no backend logging)
- Analytics via GA4 for user behavior tracking

**Accessibility:**
- ARIA labels for icon-only buttons
- Alt tags for all images (descriptive, not "image")
- Keyboard navigation (Tab, Enter, Esc)
- Color contrast WCAG AA (4.5:1 normal text, 3:1 large text)

## Data Architecture

**Content Models:**

### Product Collection (CMS)
```
Product {
  id: string (auto-generated)
  name: string (e.g., "Tidox Player")
  slug: string (e.g., "player")
  tagline: string (e.g., "IPTV & Media Player")
  description: rich_text (2-3 sentences)
  icon: image (SVG, 64x64px)
  features: array<Feature> (4-6 items)
  screenshots: array<image> (5+ WebP images)
  pricing_free: string (e.g., "$0" or "Free")
  pricing_premium: string (e.g., "$4.99 one-time")
  premium_features: array<string> (10-15 items)
  download_url_free: url
  download_url_premium: url
  downloads_count: number (e.g., 25000)
  rating: number (1-5, e.g., 4.5)
  coming_soon: boolean (true for Task Manager)
  faq_items: array<FAQ> (5-8 items)
}

Feature {
  icon: image (SVG)
  title: string
  description: string (2-3 sentences)
}

FAQ {
  question: string
  answer: rich_text
}
```

### Testimonial Collection (CMS)
```
Testimonial {
  id: string (auto-generated)
  quote: string (1-3 sentences)
  author: string (name or "Play Store User")
  rating: number (1-5)
  product: reference<Product> (nullable for general testimonials)
  featured: boolean (show on homepage)
  premium_related: boolean (mentions premium features)
  date: date (for sorting)
}
```

### Blog Post Collection (Future, Growth Phase)
```
BlogPost {
  id: string (auto-generated)
  title: string
  slug: string (URL-friendly)
  author: string
  date: date
  content: rich_text
  featured_image: image
  excerpt: string (1-2 sentences)
  tags: array<string>
  published: boolean
}
```

**Relationships:**
- Product → FAQs (1-to-many)
- Product → Testimonials (1-to-many via reference)
- Testimonials → Products (many-to-1 optional reference)

**No Database:** Framer CMS is the data layer (content stored in Framer backend, no separate database needed)

## API Contracts

**Framer CMS API (Internal):**
- Framer automatically handles CMS data binding to components
- No manual API calls required (visual connection in editor)

**External APIs:**

### Google Analytics 4
```javascript
// Page view (automatic)
// Custom events (manual implementation via custom code blocks)
gtag('event', 'click_download_cta', {
  'product': 'player',
  'tier': 'premium',
  'location': 'hero'
});

gtag('event', 'view_pricing_page', {
  'referrer': document.referrer
});

gtag('event', 'join_waitlist', {
  'product': 'task-manager'
});
```

### Email Service (Mailchimp/ConvertKit)
```
// Webhook POST from Framer form
POST https://api.mailchimp.com/3.0/lists/{list_id}/members
Headers:
  Authorization: Bearer {api_key}
  Content-Type: application/json
Body:
{
  "email_address": "user@example.com",
  "status": "subscribed",
  "tags": ["task-manager-waitlist"]
}

Response:
{
  "id": "...",
  "email_address": "user@example.com",
  "status": "subscribed"
}
```

### Play Store (External Links)
- No API, direct URL navigation
- Format: `https://play.google.com/store/apps/details?id={package_name}`
- Tracking: GA4 outbound link event (automatic with enhanced measurement)

## Security Architecture

**SSL/TLS:**
- Automatic HTTPS enforcement (Framer hosting)
- SSL certificates via Let's Encrypt (auto-renewal)
- HSTS headers (HTTP Strict Transport Security)

**Data Protection:**
- No PII collection beyond email addresses (waitlist, contact form)
- Email addresses stored in external email service (Mailchimp/ConvertKit), not Framer
- Contact form submissions can be stored in Framer or forwarded to email

**Form Security:**
- Spam protection: reCAPTCHA or honeypot field
- Input validation: Client-side (email format, required fields)
- No sensitive data collected (no passwords, payment info)

**Privacy Compliance:**
- Privacy policy page (GDPR/CCPA disclosure)
- Cookie consent banner (if required by jurisdiction)
- Google Analytics anonymization (optional: anonymize IP)
- No third-party tracking beyond GA4

**Authentication:**
- Not applicable (public website, no user accounts)
- Framer dashboard access protected by Framer authentication

**Authorization:**
- Not applicable (all content public)
- CMS editing restricted to Framer project collaborators

**Data Residency:**
- Framer hosting: Global CDN (AWS CloudFront)
- CMS data stored in Framer backend (AWS infrastructure)
- Email service data: Mailchimp (US) or ConvertKit (US)

## Performance Considerations

**Target Metrics:**
- Mobile load time: <2s on 4G
- Desktop load time: <1.5s
- Lighthouse Performance: >90 (mobile and desktop)
- Time to Interactive (TTI): <3s
- First Contentful Paint (FCP): <1s
- Cumulative Layout Shift (CLS): <0.1

**Optimization Strategies:**

**1. Image Optimization:**
- Format: WebP (automatic Framer conversion)
- Compression: 80-85% quality
- Lazy loading: Below-fold images load on scroll
- Responsive: srcset for different screen sizes (handled by Framer)
- Explicit dimensions: Width/height to prevent CLS

**2. Code Optimization:**
- Minification: CSS/JS minified automatically by Framer
- Tree shaking: Unused code removed (Framer handles)
- Deferred JS: Non-critical JavaScript deferred

**3. Caching Strategy:**
- Edge caching: AWS CloudFront (TTL configurable)
- Browser caching: Cache headers set by Framer
- Static assets: Long-term caching (1 year)
- HTML pages: Short-term caching (5-10 minutes for updates)

**4. CDN Strategy:**
- AWS CloudFront: 13+ edge locations (standard plan)
- Upgrade to 200+ edge locations (premium) if global traffic increases
- Automatic geographic routing to nearest edge

**5. Rendering Strategy:**
- SSR (Server-Side Rendering): React pages rendered on server
- Hydration: Client-side interactivity added post-load
- Critical CSS: Inline above-fold styles for FCP

**6. Resource Hints:**
- Preconnect: Google Analytics, font providers
- Preload: Critical fonts, hero images
- DNS prefetch: External domains (Play Store, email service)

**7. Font Loading:**
- System fonts preferred (Inter, SF Pro, Roboto)
- Custom fonts: Subset to needed characters, WOFF2 format
- Font-display: swap (avoid FOIT - Flash of Invisible Text)

**8. Third-Party Scripts:**
- Async loading: Google Analytics loaded asynchronously
- Defer non-critical scripts (social widgets if added)

**9. Monitoring:**
- Lighthouse CI: Weekly audits (automated if CI/CD)
- Real User Monitoring (RUM): GA4 web vitals (FCP, LCP, CLS)
- PageSpeed Insights: Manual monthly checks

## Deployment Architecture

**Hosting Environment:**
- **Platform:** Framer Hosting (AWS-backed)
- **Plan:** Mini ($15/month) → Pro ($25/month) if traffic exceeds limits
- **Regions:** Global via AWS CloudFront CDN

**Deployment Process:**
1. Edit in Framer visual editor (live preview)
2. Click "Publish" → Changes pushed to production
3. Automatic deployment to edge CDN
4. DNS propagation (if domain changes): 48 hours max
5. No downtime during deployments

**Environments:**
- **Production:** Live site at tidox.online
- **Preview:** Framer provides shareable preview links (no staging environment needed)
- **Development:** Local editing in Framer browser interface

**Rollback:**
- Version history in Framer (restore previous published version)
- Rollback process: Select previous version → Publish

**Monitoring:**
- **Uptime:** Framer SLA 99.9%, monitor via UptimeRobot or Pingdom
- **Performance:** Google Analytics web vitals, Lighthouse CI
- **Errors:** Google Analytics exception tracking (if custom code errors occur)

**Backup:**
- Framer handles versioning and backups automatically
- Export project: Possible via Framer (download HTML/CSS/assets)
- CMS data: Export to CSV via Framer CMS panel

**Scaling:**
- Automatic: Framer CDN scales to handle traffic spikes
- Upgrade path: Mini → Pro → Business for higher traffic/features
- CDN regions: Standard (13+) → Premium (200+) if global expansion

**Domain Management:**
- **Registrar:** (User's choice, e.g., Namecheap, Google Domains)
- **DNS:** Configure A records (76.76.21.21) and CNAME (www)
- **SSL:** Auto-managed by Framer via Let's Encrypt

**CI/CD:**
- Not applicable (Framer is visual, no code repo)
- Alternative: Framer → GitHub sync (export code, version control)
- Lighthouse CI: Run audits on Framer preview URLs if automated testing needed

## Development Environment

### Prerequisites

**Required:**
- Framer account (free to start, paid plan for custom domain)
- Modern web browser (Chrome, Safari, Firefox recommended)
- Custom domain access (DNS configuration)
- Google Analytics 4 account (for analytics)
- Email service account (Mailchimp or ConvertKit for waitlist)

**Optional:**
- Figma account (if importing designs to Framer)
- GitHub account (if syncing project for version control)
- UptimeRobot/Pingdom (uptime monitoring)
- Lighthouse CI (automated performance testing)

**Skills:**
- Visual design (Framer is no-code/low-code)
- Basic HTML/CSS understanding (for custom code blocks)
- JavaScript (for custom interactions, GA4 events)
- SEO knowledge (meta tags, schema markup)

### Setup Commands

**Framer Project Setup:**
```
1. Navigate to https://framer.com
2. Sign in or create account
3. Click "New Project"
4. Choose template or start blank
5. Name project: "Tidox Landing Page"
```

**Custom Domain Configuration:**
```
DNS Settings (at domain registrar):
  A record: @ → 76.76.21.21
  CNAME record: www → {your-project}.framer.app

Framer Settings:
  1. Open project → Share/Publish
  2. Click "Add Custom Domain"
  3. Enter: tidox.online
  4. Wait for SSL provisioning (5-10 minutes)
```

**Google Analytics 4 Setup:**
```
1. Create GA4 property at analytics.google.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. In Framer: Site Settings → General → Analytics
4. Paste Measurement ID
5. Enable Enhanced Measurement
```

**Email Service Integration (Mailchimp example):**
```
1. Create Mailchimp account
2. Create audience/list for "Task Manager Waitlist"
3. Get API key: Account → Extras → API keys
4. In Framer: Create form → Add custom code block
5. Add webhook code to submit to Mailchimp API
```

**Schema Markup Implementation:**
```
// Add custom code block to page <head>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Tidox Player",
  "operatingSystem": "Android",
  "applicationCategory": "MultimediaApplication",
  "offers": {
    "@type": "Offer",
    "price": "4.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "1500"
  }
}
</script>
```

**Development Workflow:**
```
1. Design in Framer visual editor
2. Create components in component library
3. Build pages using components
4. Bind CMS data to components
5. Add custom code blocks (GA4, schema)
6. Test in preview mode
7. Publish to production
```

**Testing:**
```
// Lighthouse audit
1. Open Lighthouse in Chrome DevTools
2. Run audit on preview URL
3. Check Performance, Accessibility, SEO scores
4. Address issues, re-test

// Cross-browser testing
1. Test in Chrome, Safari, Firefox, Edge
2. Test on mobile devices (iOS Safari, Android Chrome)
3. Use BrowserStack for comprehensive testing

// Analytics testing
1. Enable GA4 DebugView
2. Trigger events (clicks, form submissions)
3. Verify events appear in real-time

// Form testing
1. Submit test entries to waitlist form
2. Verify webhook fires to email service
3. Check confirmation email received
```

## Architecture Decision Records (ADRs)

### ADR-001: Platform Selection - Framer

**Decision:** Use Framer as the primary platform for website development

**Context:**
- Need for visual development platform to meet 4-week timeline
- Requirement for 2025 design trends (minimalism, bold typography, micro-interactions)
- Performance targets: <2s mobile load, >90 Lighthouse score
- Multi-product portfolio use case
- Budget constraint: $15/month hosting

**Alternatives Considered:**
1. **Webflow:** More powerful CMS, steeper learning curve, overkill for 3-product site
2. **Next.js:** Full control, requires developer resources, slower to market (8+ weeks)
3. **WordPress:** Mature ecosystem, performance concerns, outdated for 2025 trends

**Decision Rationale:**
- Framer rated 5/5 in competitive research (docs/bmm-research-competitive-2025-11-05.md)
- React-based SSR provides modern performance
- Visual builder enables 4-week timeline
- Built-in CDN, SSL, optimization features
- Perfect fit for portfolio showcase use case
- Cost-effective ($15/month)

**Consequences:**
- **Positive:** Fast development, built-in optimization, low cost, modern tech stack
- **Negative:** Vendor lock-in, limited backend customization, no traditional code repository
- **Mitigation:** Export project periodically, use CMS for content flexibility

**Status:** ACCEPTED

---

### ADR-002: Content Management - Framer CMS

**Decision:** Use Framer's native CMS for product content, testimonials, and future blog posts

**Context:**
- Need to manage 3 products with features, screenshots, FAQs
- 10+ testimonials requiring filtering and organization
- Future blog content (Growth phase)
- Non-technical user content updates

**Alternatives Considered:**
1. **Headless CMS (Contentful, Sanity):** More powerful, adds complexity and cost
2. **Hardcoded Content:** Fast initially, unmaintainable for updates
3. **External Database:** Overkill for content-only site, requires backend

**Decision Rationale:**
- Native integration with Framer (no API setup required)
- 100K item capacity exceeds needs (3 products, 50+ testimonials projected)
- Visual CMS interface for non-technical updates
- Zero additional cost (included in Framer plan)
- Supports all needed field types (text, rich text, images, arrays)

**Consequences:**
- **Positive:** Easy updates, no extra cost, seamless integration, sufficient capacity
- **Negative:** Tied to Framer, migration to external CMS difficult
- **Mitigation:** Export CMS data to CSV periodically for backup

**Status:** ACCEPTED

---

### ADR-003: Analytics - Google Analytics 4

**Decision:** Implement Google Analytics 4 for all analytics and conversion tracking

**Context:**
- Need to track 8 custom events (click_download_cta, view_pricing_page, etc.)
- Conversion funnel analysis required (Homepage → Product → Download)
- Success metric: >30% pricing page traffic, >5% download CTR
- Budget constraint (free solution preferred)

**Alternatives Considered:**
1. **Plausible/Fathom:** Privacy-focused, simpler, costs $9-19/month, limited event tracking
2. **Mixpanel:** Powerful for product analytics, overkill for marketing site, $20+/month
3. **No analytics:** Cannot measure success metrics or optimize

**Decision Rationale:**
- GA4 is free and industry-standard
- Built-in Framer integration (paste Measurement ID)
- Supports custom events and conversion funnels
- Enhanced measurement (scroll, outbound links) automatic
- Web vitals tracking (FCP, LCP, CLS) for performance monitoring

**Consequences:**
- **Positive:** Free, comprehensive, Framer-integrated, familiar tool
- **Negative:** Privacy concerns (cookies), complex interface, Google dependency
- **Mitigation:** Privacy policy disclosure, minimal PII collection, IP anonymization option

**Status:** ACCEPTED

---

### ADR-004: Email Service - Mailchimp or ConvertKit

**Decision:** Integrate Mailchimp or ConvertKit for Task Manager waitlist management

**Context:**
- Task Manager launching Q1 2026, need waitlist signup
- Goal: >1,000 email signups pre-launch
- Need drip campaign capability for launch notifications
- Spam protection required

**Alternatives Considered:**
1. **Framer Forms Only:** Free, but emails stored in Framer (no drip campaigns)
2. **Custom Backend:** Full control, requires development resources, 2+ weeks
3. **Google Sheets:** Simple, no email automation, manual export required

**Decision Rationale:**
- Mailchimp/ConvertKit offer free tiers (up to 500-1,000 subscribers)
- Drip campaign automation for launch announcements
- API integration via Framer webhooks (simple implementation)
- Professional email templates and deliverability
- Can pivot to either based on user preference (similar APIs)

**Consequences:**
- **Positive:** Email automation, professional templates, scalable, free tier sufficient
- **Negative:** Third-party dependency, API integration required (custom code)
- **Mitigation:** Document API integration, test thoroughly, fallback to Framer forms if needed

**Status:** ACCEPTED

---

### ADR-005: Performance Strategy - Framer Native Optimization

**Decision:** Rely on Framer's built-in optimization features to achieve >90 Lighthouse score

**Context:**
- Target: <2s mobile load time, >90 Lighthouse Performance score
- 62.54% mobile traffic (mobile-first critical)
- PRD requirement: >90 Lighthouse score, <2s on 4G
- Limited control over infrastructure (Framer-hosted)

**Alternatives Considered:**
1. **External CDN (Cloudflare, Imgix):** More control, adds complexity, Framer already uses AWS CloudFront
2. **Custom Build Pipeline:** Full optimization control, requires Next.js/custom stack, 8+ weeks
3. **Accept Lower Performance:** Not viable (40% abandon slow sites per research)

**Decision Rationale:**
- Framer provides automatic WebP conversion, lazy loading, minification
- AWS CloudFront CDN (13+ edge locations) handles global delivery
- SSR rendering improves initial load times
- Research shows Framer sites routinely achieve >90 scores
- Focus optimization on content strategy (image sizes, layout stability)

**Consequences:**
- **Positive:** No manual optimization work, proven performance, automatic updates
- **Negative:** Limited low-level control, dependent on Framer's optimization quality
- **Mitigation:** Test with Lighthouse CI, optimize image sizes pre-upload, explicit dimensions to prevent CLS

**Status:** ACCEPTED

---

### ADR-006: Dark Mode Implementation - Framer Component Variants

**Decision:** Implement dark mode using Framer's component variant system with localStorage persistence

**Context:**
- 2025 design trend: Dark mode is expected feature
- Need to support both light and dark themes
- Preference should persist across sessions
- Should respect system preference (prefers-color-scheme)

**Alternatives Considered:**
1. **CSS Variables + Custom Code:** Full control, more complex implementation, maintenance burden
2. **No Dark Mode:** Simpler, but fails to meet 2025 design trend requirement
3. **System Preference Only:** Simpler, but no user override option

**Decision Rationale:**
- Framer component variants natively support theming
- Visual management of light/dark variants per component
- localStorage persistence achievable via custom code block (minimal JS)
- Smooth transition animations built-in
- Meets WCAG AA contrast requirements in both modes

**Consequences:**
- **Positive:** Native Framer support, visual management, smooth transitions
- **Negative:** Requires duplicating design work (light + dark variants), custom code for persistence
- **Mitigation:** Design dark mode variants systematically, test contrast ratios

**Status:** ACCEPTED

---

### ADR-007: SEO Strategy - Schema Markup + Meta Tags

**Decision:** Implement comprehensive SEO via meta tags and JSON-LD schema markup

**Context:**
- Goal: 40%+ organic traffic by Month 6
- Target: Top 10 rankings for 15 keywords (5 per product)
- Need rich snippets in search results (FAQ, ratings, product info)
- Framer supports meta tags and custom code blocks

**Alternatives Considered:**
1. **Meta Tags Only:** Simpler, but no rich snippets, lower CTR
2. **Third-Party SEO Tool:** Adds cost ($20+/month), not necessary for basic SEO
3. **No SEO Optimization:** Not viable (organic traffic is primary growth driver)

**Decision Rationale:**
- Meta tags + schema markup = best practice for modern SEO
- JSON-LD schema achievable via custom code blocks in Framer
- MobileApplication, FAQ, Organization schemas cover all use cases
- Sitemap auto-generated by Framer, submitted to Google Search Console
- Zero additional cost

**Consequences:**
- **Positive:** Best SEO practice, rich snippets boost CTR, comprehensive coverage
- **Negative:** Manual schema markup implementation (custom code blocks), maintenance overhead
- **Mitigation:** Template schema markup for reuse, validate with Google Rich Results Test

**Status:** ACCEPTED

---

### ADR-008: Mobile-First Responsive Design

**Decision:** Design all pages mobile-first with breakpoints at 320px (mobile), 768px (tablet), 1220px (desktop)

**Context:**
- 62.54% of traffic is mobile (per PRD)
- 40% of users abandon slow mobile sites
- Mobile Lighthouse score >90 is critical
- Touch targets must meet 44x44px minimum (accessibility)

**Alternatives Considered:**
1. **Desktop-First:** Traditional approach, suboptimal for mobile majority
2. **Mobile-Only:** Simpler, but ignores 37.46% desktop traffic
3. **Single Responsive:** No breakpoints, harder to optimize for each screen size

**Decision Rationale:**
- Mobile-first ensures best experience for 62.54% of users
- Framer's default desktop breakpoint (1220px) is reasonable
- 768px tablet breakpoint handles iPad and similar devices
- 320px mobile (iPhone SE) ensures compatibility with smallest common devices
- Progressive enhancement from mobile ensures performance

**Consequences:**
- **Positive:** Optimized for majority traffic, ensures mobile performance, accessibility compliance
- **Negative:** More design work (3 breakpoints per page), testing complexity
- **Mitigation:** Use Framer's responsive preview, test on real devices

**Status:** ACCEPTED

---

_Generated by BMAD Decision Architecture Workflow v1.3.2_
_Date: 2025-11-05_
_For: etido_
