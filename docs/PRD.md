# Tidox Landing Page - Product Requirements Document

**Author:** etido
**Date:** 2025-11-05
**Version:** 1.0

---

## Executive Summary

This PRD defines requirements for transforming tidox.online from a single-product landing page into a comprehensive multi-product portfolio website. The redesign establishes Tidox as a credible modern mobile app development company, showcases three distinct applications (Player, Transcript, Task Manager), and implements conversion-optimized freemium pricing strategies aligned with 2025 design standards.

**Core Problem:** Current website focuses solely on Tidox Player, rendering Offline Transcript and Task Manager invisible. This single-product presentation undermines company credibility, misses cross-product discovery opportunities, lacks unified pricing clarity, and fails to communicate competitive advantages (especially privacy-first transcription).

**Solution:** Framer-based multi-product portfolio site featuring: unified navigation with products mega-menu, individual SEO-optimized product landing pages, transparent freemium pricing comparison, 2025 design aesthetics (minimalism, bold typography, micro-interactions, dark mode), and mobile-first responsive experience.

**Timeline:** 4-week implementation (design Week 1, development Weeks 2-3, optimization/testing Week 4)

### What Makes This Special

**The Magic:** This isn't just a website—it's Tidox's credibility transformation. The site communicates three powerful differentiators:

1. **Privacy-First Innovation** - Offline Transcript's on-device processing vs Otter.ai's cloud dependency (massive competitive advantage)
2. **Multi-Product Capability** - Three distinct, innovative apps demonstrate company versatility and long-term viability
3. **Modern Tech Leadership** - VR support, edge AI computing, cutting-edge features reflected through sophisticated 2025 design

The website becomes proof of Tidox's capabilities—showing, not telling, that this company builds exceptional mobile experiences.

---

## Project Classification

**Technical Type:** Web - Marketing/Portfolio Site
**Domain:** Mobile App Company Website, SaaS/Freemium Showcase
**Complexity:** Medium (multi-product, conversion optimization, 2025 design trends)

**Classification Details:**
- **Project Type:** Static marketing website with dynamic elements
- **Architecture:** Framer (React-based SSR)
- **Content Type:** Product showcases, pricing comparisons, company information
- **Users:** Potential app downloaders, current users researching upgrades, investors/partners
- **Scale:** Low traffic initially (5K visitors/month), growing to 25K+ by Month 6

---

## Success Criteria

### Primary Success Metrics

**Traffic & Engagement:**
- **Month 1:** 5,000 unique visitors (baseline)
- **Month 6:** 25,000+ unique visitors (SEO+organic growth)
- **Bounce Rate:** <50% (industry standard for app sites)
- **Avg Session Duration:** >2 minutes (content engagement indicator)
- **Pages per Session:** >3 (cross-product exploration)

**Conversion Goals:**
- **Download CTR:** >5% of visitors click Play Store links
- **Pricing Page Traffic:** >30% of total traffic (conversion intent)
- **Cross-Product Discovery:** 60% of visitors aware of all 3 products
- **Task Manager Waitlist:** >1,000 email signups pre-launch

**Technical Performance:**
- **Page Load Time:** <2 seconds on 4G mobile (critical - 40% abandon slow sites)
- **Mobile Performance Score:** >90 (Lighthouse, addressing 62.54% mobile traffic)
- **Accessibility Score:** 100 (WCAG 2.1 AA compliance)
- **Uptime:** 99.9% (Framer SLA)

**SEO Success:**
- **Organic Traffic:** 40%+ of total by Month 6
- **Keyword Rankings:** Top 10 for 5 target keywords per product
  - Player: "IPTV player Android TV", "m3u8 player Chromecast", "VR video player"
  - Transcript: "offline transcription app", "privacy transcription", "Whisper app"
  - Task Manager: "project task manager", "simple task app"

### Business Metrics

**Brand Positioning:**
- Professional credibility established (qualitative user surveys)
- "Privacy-first" brand association with Offline Transcript
- Multi-product ecosystem awareness drives higher app trust

**Revenue Impact:**
- Premium conversion interest tracked (pricing page→Play Store funnel)
- Reduced support tickets about "what's in premium?" (pricing transparency)
- Multi-product user adoption >15% (users download 2+ Tidox apps)

**Strategic Objectives:**
- Website suitable for investor/partner/press presentations
- Task Manager launch supported with zero website restructuring
- Foundation for future product launches (scalable architecture)

---

## Product Scope

### MVP - Minimum Viable Product (Launch Week 4)

**Core Pages (Must-Have):**

**1. Homepage**
- Multi-product hero (rotating showcase or split-screen of all 3 apps)
- Company-first headline: "Innovative Mobile Apps for Modern Life"
- Product grid: 3 cards with equal prominence (icon, name, tagline, 3 key features, CTA)
- "Why Choose Tidox" section (4 value props: privacy-first, modern tech, freemium, active development)
- Social proof: aggregate downloads, Play Store ratings, user testimonials
- Fully responsive (desktop, tablet, mobile)

**2. Product Landing Pages** (3 pages: Player, Transcript, Task Manager)
- Hero: large screenshot/video + headline + value proposition + dual CTAs
- Features: 4-6 primary features with icons and descriptions
- Free vs Premium comparison table (clear feature differentiation)
- Screenshot gallery (5+ per product)
- Download section: Play Store badges (Free/Pro/VR versions)
- FAQ accordion (5-8 product-specific questions)
- SEO optimization: unique meta descriptions, schema markup

**3. Unified Pricing Page**
- Side-by-side comparison: Free | Premium columns for all 3 products
- Monthly/annual toggle with discount display ("Save 20%")
- Feature checklists with visual checkmarks
- Trust signals: "No credit card required", money-back guarantee
- User testimonials specific to premium features
- FAQ section addressing objections (5-8 questions)

**4. Navigation System**
- Primary nav: Home | Products ▼ | Pricing | About | Contact
- Products mega-menu dropdown:
  - All 3 products with icons, one-line descriptions, "Learn More" CTAs
- Mobile: hamburger menu + floating download CTA button
- Footer: product links, social media, privacy policy, support

**5. About Page**
- Company mission: "Building privacy-first, innovative mobile solutions"
- Developer expertise and philosophy
- Open-source contributions mention (credibility builder)
- Contact information and support links

**6. Technical Essentials**
- **SEO:** Unique meta descriptions, JSON-LD schema markup for apps, sitemap, robots.txt
- **Analytics:** Google Analytics 4 with custom event tracking (CTA clicks, downloads)
- **Performance:** Image optimization, lazy loading, <2s page loads
- **Accessibility:** WCAG 2.1 AA compliance, keyboard navigation, screen reader support
- **Dark Mode:** Toggle feature (2025 design requirement)

**7. Content Assets**
- High-quality screenshots (5+ per product, showing key features)
- Product icons and logos
- Finalized copy: headlines, features, FAQs
- Play Store metrics: downloads, ratings
- User testimonials extracted from reviews

### Growth Features (Post-MVP, Months 2-4)

**Content Expansion:**
- Blog/content hub: use case tutorials, product updates, behind-the-scenes development
- Video demos (30-60 second walkthroughs per product)
- User-generated content showcase (VR videos, transcription examples)

**Conversion Optimization:**
- A/B testing framework for headlines, CTAs, layouts
- Heatmap analysis (Hotjar) for user behavior insights
- Scroll-depth tracking for content placement optimization
- Email drip campaigns for Task Manager waitlist nurturing

**Enhanced Features:**
- AI chatbot using Offline Transcript capabilities (meta-demonstration)
- Interactive product demos or simulators
- Product recommendation tool based on use case selection
- ROI calculator for premium features

**Technical Enhancements:**
- Multi-language support (Spanish, French, German)
- Advanced animations and 3D product showcases
- WebGL hero section explorations
- VR-compatible website experience preview

### Vision (Future, Months 6-12)

**Business Features:**
- Bundle pricing: "Tidox Suite" with all 3 premium apps at discount
- Affiliate/referral program
- Enterprise pricing tiers (if B2B opportunity emerges)
- Partnership integrations

**Advanced Capabilities:**
- Personalized content based on user behavior
- Real-time usage statistics dashboard (public transparency)
- AR product preview (WebAR for app interface exploration)
- Gamification: user journey tracking, badges, progression

**Community:**
- User forum or Discord integration
- Beta testing signup for early product access
- Community leaderboards or showcases
- User testimonial submission system

---

## Web-Specific Requirements

### Platform: Framer (Research-Validated Selection)

**Rationale:**
- ⭐⭐⭐⭐⭐ (5/5) rating from competitive research
- Design freedom for 2025 aesthetics (Figma-like interface)
- Fast 4-week timeline achievable
- React-based SSR (modern, performant)
- Cost-effective ($15/month)
- Perfect for product portfolio use case

**Alternatives Evaluated:**
- Webflow: Overkill for 3-product site, steeper learning curve
- Next.js: Requires dev resources, slower to market

### Responsive Design Requirements

**Breakpoints:**
- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

**Mobile-First Priorities** (62.54% of traffic):
- Touch targets minimum 44x44px
- Simplified navigation (hamburger menu)
- Floating CTAs always accessible
- Optimized images for mobile bandwidth
- Swipeable galleries
- Bottom-sheet navigation patterns

**Performance Targets:**
- Mobile load time: <2s on 4G
- Desktop load time: <1.5s
- Time to Interactive (TTI): <3s
- First Contentful Paint (FCP): <1s

### Content Management

**Framer CMS Usage:**
- Product information (3 products)
- Testimonials (dynamic collection)
- FAQ items (filterable by product)
- Blog posts (Growth phase)

**Update Frequency:**
- Product features: Monthly
- Pricing: As needed
- Content/blog: Weekly (Growth phase)
- Screenshots: Per app update

---

## User Experience Principles

### Visual Personality

**Brand Identity:**
- Modern, professional, innovative
- Clean and minimal (not sterile)
- Trustworthy and credible
- Tech-forward without being intimidating

**Design Pillars:**
1. **Clarity Over Cleverness** - Information is easily discoverable
2. **Trust Through Transparency** - Pricing, features, company info upfront
3. **Modern Without Trendy** - Timeless aesthetics that age well
4. **Mobile-First Mentality** - Every decision optimized for mobile users

### Key Interactions

**Homepage:**
- Product cards with hover effects (desktop) revealing additional info
- Smooth scroll animations as content enters viewport
- Testimonial carousel with manual/auto advance
- Floating "Download" CTA appears on scroll

**Product Pages:**
- Screenshot gallery: swipeable on mobile, clickable thumbnails on desktop
- Feature icons animate on scroll-into-view
- Free vs Premium table: sticky column headers on scroll
- FAQ accordion: smooth expand/collapse

**Pricing Page:**
- Monthly/annual toggle: smooth transition with price animation
- Feature tooltips on hover/tap (explaining technical features)
- Highlight animation when selecting a tier
- "Most Popular" badge with subtle pulse effect

**Navigation:**
- Products mega-menu: fade-in on hover with stagger effect
- Mobile menu: slide-in from left with overlay
- Smooth scroll to anchor links
- Active page indicator in navigation

**Micro-Interactions (2025 Trend):**
- Button hover states: subtle scale + color shift
- CTA buttons: slight pulse animation
- Form inputs: focused state with border color change
- Load states: skeleton screens (not spinners)

### 2025 Design Trends Implementation

**From Research (35+ Sources):**
1. **AI-Powered Personalization** - Detect user intent from search referrer, highlight relevant product
2. **Minimalism + Bold Typography** - Clean layouts, oversized headlines, generous white space
3. **Dark Mode** - Toggle feature, respects system preference
4. **Interactive Elements** - Hover effects, scroll animations, cursor transforms
5. **Accessibility Mandate** - WCAG 2.1 AA non-negotiable
6. **Mobile Performance** - <2s loads, >90 Lighthouse score

---

## Functional Requirements

### FR-1: Multi-Product Homepage

**Requirement:** Homepage must showcase all 3 Tidox products with equal prominence while establishing company credibility.

**Acceptance Criteria:**
- [ ] Hero section displays rotating product showcase OR split-screen view
- [ ] Company-first headline visible above fold on all devices
- [ ] Product grid contains 3 cards: Player, Transcript, Task Manager
- [ ] Each card includes: icon (SVG), product name, one-line tagline, 3 key features, "Learn More" CTA
- [ ] "Why Choose Tidox" section lists 4 value propositions with icons
- [ ] Social proof section displays: aggregate downloads (50K+), Play Store ratings, 3+ testimonials
- [ ] Fully responsive: desktop (3-column grid), tablet (2-column), mobile (single column stack)
- [ ] All CTAs link correctly to product pages or Play Store

**Priority:** CRITICAL (foundational for multi-product positioning)

### FR-2: Product Landing Pages

**Requirement:** Each product (Player, Transcript, Task Manager) needs dedicated, SEO-optimized landing page.

**Acceptance Criteria:**
- [ ] **Hero Section:**
  - Large product screenshot (mobile mockup showing app interface)
  - Headline emphasizing unique value proposition
  - 1-2 sentence benefit statement
  - Dual CTAs: "Download Free" + "Get Premium"

- [ ] **Features Section:**
  - 4-6 primary features with icons
  - Each feature: icon, title, 2-3 sentence description
  - Grid layout: 2 columns (desktop), 1 column (mobile)

- [ ] **Free vs Premium Comparison:**
  - Table with 2 columns: Free | Premium
  - 8-12 feature rows with checkmarks/X marks
  - Highlight rows where premium adds value
  - CTA buttons below each column

- [ ] **Screenshot Gallery:**
  - 5+ screenshots per product
  - Swipeable on mobile, thumbnail grid on desktop
  - Lightbox view on click

- [ ] **Download Section:**
  - Play Store badges (official Google assets)
  - Version indicators: Free/Pro/VR (Player), Free/Premium (Transcript, Task Manager)
  - "50K+ downloads" social proof

- [ ] **FAQ Accordion:**
  - 5-8 product-specific questions
  - Smooth expand/collapse animation
  - Schema markup for SEO

**SEO Requirements:**
- [ ] Unique `<title>` and meta description per product
- [ ] H1 contains primary keyword (e.g., "IPTV Player for Android TV")
- [ ] JSON-LD schema for MobileApplication
- [ ] Image alt tags describe functionality
- [ ] Internal links to pricing page and other products

**Priority:** CRITICAL (drives organic traffic + conversions)

### FR-3: Unified Pricing Page

**Requirement:** Single pricing page comparing Free vs Premium for all 3 products with transparent, conversion-optimized design.

**Acceptance Criteria:**
- [ ] **Layout:**
  - 6-column comparison: 3 products × 2 tiers (Free, Premium)
  - Responsive: side-scroll on mobile, full grid on desktop
  - Clear visual separation between products

- [ ] **Pricing Display:**
  - Monthly/annual toggle (prominent, above pricing grid)
  - Annual discount percentage visible ("Save 20%")
  - Smooth price transition animation on toggle

- [ ] **Feature Checklists:**
  - 10-15 features per product
  - Visual checkmarks (✓) for included features
  - X or empty for excluded features
  - Tooltips for technical features (hover/tap)

- [ ] **Trust Signals:**
  - "No credit card required" badge for free tiers
  - Money-back guarantee badge for premium
  - User testimonials (3+) specific to premium features
  - Play Store ratings displayed

- [ ] **CTAs:**
  - Free tier: "Download Free" (neutral color, less prominent)
  - Premium tier: "Get Premium" (accent color, prominent)
  - All CTAs link to Play Store

- [ ] **FAQ Section:**
  - Accordion below pricing grid
  - 5-8 questions addressing: feature differences, upgrade process, refunds, data privacy
  - Schema markup for FAQ

**Conversion Optimization:**
- [ ] Emphasize value, not price (benefit-focused copy)
- [ ] Highlight "Most Popular" or "Best Value" tier
- [ ] De-emphasize free tier visually (smaller, muted colors)
- [ ] "One-time purchase" messaging for premium (vs subscription fatigue)

**Priority:** CRITICAL (primary conversion mechanism)

### FR-4: Navigation System

**Requirement:** Intuitive, multi-level navigation supporting product discovery across desktop and mobile.

**Acceptance Criteria:**
- [ ] **Desktop Primary Nav:**
  - 5 items: Home | Products ▼ | Pricing | About | Contact
  - Sticky/fixed position on scroll
  - Products item triggers mega-menu dropdown

- [ ] **Products Mega-Menu:**
  - Displays all 3 products
  - Each product: icon, name, one-line description, "Learn More" CTA
  - Grid layout (3 columns)
  - Fade-in animation on hover
  - Click outside or press ESC to close

- [ ] **Mobile Navigation:**
  - Hamburger icon (☰) in top-right
  - Slide-in menu from left with overlay
  - Same navigation items (Products expanded to show all 3)
  - Close button (X) in menu

- [ ] **Floating Download CTA (Mobile):**
  - Appears after scrolling 50% down page
  - Fixed position bottom-center
  - Bright accent color
  - Tapping opens product selector or goes to downloads page

- [ ] **Footer:**
  - 4 columns: Products, Company, Legal, Social
  - All product links
  - Privacy policy, terms of service
  - Social media icons (Twitter/X, GitHub, Discord if applicable)

**Priority:** CRITICAL (enables product discovery)

### FR-5: SEO Optimization

**Requirement:** Technical SEO implementation to drive organic traffic for product-specific keywords.

**Acceptance Criteria:**
- [ ] **Meta Tags (All Pages):**
  - Unique `<title>` (50-60 characters)
  - Unique meta description (150-160 characters)
  - Open Graph tags for social sharing
  - Twitter Card tags

- [ ] **Schema Markup:**
  - Organization schema (homepage)
  - MobileApplication schema (product pages)
  - FAQ schema (pricing page, product FAQs)
  - Review/Rating schema (if testimonials include ratings)

- [ ] **Sitemap:**
  - XML sitemap auto-generated by Framer
  - Submitted to Google Search Console
  - Updated on content changes

- [ ] **Robots.txt:**
  - Allow all pages
  - Reference sitemap URL

- [ ] **Performance:**
  - Image optimization (WebP format, lazy loading)
  - Minified CSS/JS (handled by Framer)
  - Compressed assets

- [ ] **Internal Linking:**
  - Homepage links to all product pages
  - Product pages link to pricing
  - Pricing links back to products
  - Breadcrumb navigation (if multi-level)

**Target Keywords (Per Product):**
- **Player:** "IPTV player", "m3u8 player", "Chromecast video player", "VR video player Android"
- **Transcript:** "offline transcription app", "privacy transcription", "Whisper transcription", "on-device transcription"
- **Task Manager:** "project task manager", "simple task app", "project-based todo"

**Priority:** HIGH (long-term traffic driver)

### FR-6: Analytics & Tracking

**Requirement:** Comprehensive analytics to measure success metrics and inform optimization.

**Acceptance Criteria:**
- [ ] **Google Analytics 4:**
  - Tracking code installed on all pages
  - Enhanced measurement enabled

- [ ] **Custom Events:**
  - `click_download_cta` (product, tier, location)
  - `view_pricing_page` (referrer)
  - `toggle_annual_pricing`
  - `expand_faq` (question)
  - `click_product_card` (product, location)

- [ ] **Conversion Funnels:**
  - Homepage → Product Page → Download
  - Homepage → Pricing Page → Download
  - Product Page → Pricing Page → Download

- [ ] **Goal Tracking:**
  - Download button clicks (external link tracking)
  - Pricing page visits
  - Task Manager waitlist signups

- [ ] **Performance Monitoring:**
  - Lighthouse CI integration (if using CI/CD)
  - Manual Lighthouse audits weekly
  - Page load time tracking

**Privacy Compliance:**
- [ ] Cookie consent banner (if required by region)
- [ ] Privacy policy page with analytics disclosure
- [ ] No personally identifiable information (PII) collected

**Priority:** HIGH (data-driven optimization)

### FR-7: Content Management System

**Requirement:** Easy content updates for non-technical users via Framer CMS.

**Acceptance Criteria:**
- [ ] **CMS Collections:**
  - Products (name, tagline, description, features, screenshots, FAQs)
  - Testimonials (name, role, quote, rating, product)
  - Blog Posts (title, author, date, content, featured image) [Growth phase]

- [ ] **Update Workflows:**
  - Add/edit product features without code changes
  - Update pricing tiers and features
  - Publish new testimonials
  - Edit FAQ questions/answers

- [ ] **Media Library:**
  - Organized folders: screenshots, icons, logos, misc
  - WebP format for all images
  - Naming convention: `{product}-{type}-{description}.webp`

**Priority:** MEDIUM (operational efficiency)

### FR-8: Task Manager "Coming Soon" Page

**Requirement:** Dedicated product page for Task Manager with waitlist signup, despite app not launched yet.

**Acceptance Criteria:**
- [ ] Full product page structure (same as Player/Transcript)
- [ ] "Coming Soon" badge prominent in hero
- [ ] Email waitlist signup form:
  - Email input field
  - "Notify Me at Launch" CTA button
  - Success message after submission
  - Email stored in spreadsheet or email service (Mailchimp, ConvertKit)
- [ ] Teaser features (3-5) with icons
- [ ] Mockup screenshots (design previews, not final app)
- [ ] Launch timeline indicator ("Launching Q1 2026" or similar)
- [ ] Social share buttons ("Be first to know!")

**Priority:** MEDIUM (future product launch support)

---

## Non-Functional Requirements

### Performance

**NFR-P1: Page Load Speed**
- **Requirement:** All pages must load in <2 seconds on 4G mobile connection
- **Rationale:** 40% of users abandon sites with poor performance (research data)
- **Measurement:** Lighthouse Performance Score >90, PageSpeed Insights
- **Validation:** Test on real mobile devices (iOS Safari, Android Chrome)

**NFR-P2: Time to Interactive**
- **Requirement:** Pages become interactive in <3 seconds
- **Rationale:** Users expect immediate interactivity on modern websites
- **Measurement:** Lighthouse TTI metric

**NFR-P3: Image Optimization**
- **Requirement:** All images in WebP format, lazy loaded
- **Rationale:** Images are largest asset type, optimization critical for mobile
- **Implementation:** Framer handles compression automatically

### Security

**NFR-S1: HTTPS Enforcement**
- **Requirement:** All traffic over HTTPS, HTTP redirects to HTTPS
- **Rationale:** Trust signal, SEO requirement
- **Implementation:** Framer provides automatic SSL

**NFR-S2: Privacy Compliance**
- **Requirement:** No PII collection beyond analytics (GDPR/CCPA consideration)
- **Rationale:** Privacy-first brand positioning
- **Implementation:** Privacy policy page, cookie consent if needed

**NFR-S3: Form Security**
- **Requirement:** Task Manager waitlist form protected from spam
- **Rationale:** Prevent bot submissions
- **Implementation:** reCAPTCHA or honeypot field

### Scalability

**NFR-SC1: Content Scalability**
- **Requirement:** Architecture supports adding 5+ products without redesign
- **Rationale:** Tidox actively develops new products
- **Implementation:** CMS-driven product pages, templated structure

**NFR-SC2: Traffic Handling**
- **Requirement:** Site remains performant at 10x current traffic (50K+ visitors/month)
- **Rationale:** Organic growth expected, potential viral moments
- **Implementation:** Framer's edge CDN handles traffic spikes

### Accessibility

**NFR-A1: WCAG 2.1 AA Compliance**
- **Requirement:** All pages pass WCAG 2.1 Level AA standards
- **Rationale:** Legal requirement in many jurisdictions, inclusive design
- **Validation:** Lighthouse Accessibility audit, manual screen reader testing

**NFR-A2: Keyboard Navigation**
- **Requirement:** All interactive elements accessible via keyboard (Tab, Enter, Esc)
- **Rationale:** Assistive technology users, power users
- **Validation:** Manual keyboard-only testing

**NFR-A3: Color Contrast**
- **Requirement:** Text meets 4.5:1 contrast ratio (normal text), 3:1 (large text)
- **Rationale:** Readability for low-vision users
- **Validation:** Color contrast analyzer tools

**NFR-A4: Screen Reader Support**
- **Requirement:** Semantic HTML, ARIA labels where needed
- **Rationale:** Blind/low-vision users
- **Validation:** VoiceOver (iOS), TalkBack (Android) testing

### Integration

**NFR-I1: Google Analytics Integration**
- **Requirement:** GA4 tracking code functional, custom events firing
- **Rationale:** Data-driven optimization
- **Validation:** GA4 DebugView showing events

**NFR-I2: Play Store Deep Linking**
- **Requirement:** All download CTAs link correctly to Play Store app pages
- **Rationale:** Seamless download experience
- **Validation:** Test links on mobile devices (Android)

**NFR-I3: Email Service Integration** (Growth Phase)
- **Requirement:** Task Manager waitlist integrates with email service (Mailchimp, ConvertKit)
- **Rationale:** Launch notification automation
- **Validation:** Test submission → email service entry

---

## Implementation Planning

### Epic Breakdown Required

This PRD defines comprehensive requirements that must be decomposed into implementable epics and user stories sized for 200k context development sessions.

**Recommended Epic Structure:**

**Epic 1: Foundation & Setup**
- Framer workspace setup
- Domain configuration
- Design system creation
- Navigation structure

**Epic 2: Homepage**
- Hero section
- Product grid
- Why Choose Tidox section
- Social proof section
- Footer

**Epic 3: Product Pages**
- Player landing page
- Transcript landing page
- Task Manager landing page (with waitlist)

**Epic 4: Pricing Page**
- Pricing comparison layout
- Free vs Premium tables
- Trust signals
- FAQ section

**Epic 5: About & Supporting Pages**
- About page
- Contact information
- Privacy policy
- Cookie notice (if needed)

**Epic 6: SEO & Analytics**
- Meta tags
- Schema markup
- GA4 setup
- Sitemap generation

**Epic 7: Optimization & Polish**
- Micro-interactions
- Dark mode
- Performance optimization
- Accessibility audit
- Cross-browser testing

**Next Step:** Run `/bmad:bmm:workflows:create-epics-and-stories` to generate detailed epic breakdown with user stories.

---

## References

- **Product Brief:** docs/product-brief-tidox-landing-page-2025-11-05.md
- **Research:** docs/bmm-research-competitive-2025-11-05.md
- **Brainstorming:** docs/bmm-brainstorming-session-2025-11-05.md

---

## Next Steps

1. **Epic & Story Breakdown** - Run: `create-epics-and-stories` workflow to decompose this PRD
2. **UX Design** - Run: `create-ux-design` workflow for detailed visual design
3. **Architecture** - Run: `create-architecture` workflow for technical architecture (Framer + deployment)

---

_This PRD captures the essence of tidox-landing-page - transforming a single-product site into a credible multi-product portfolio that communicates Tidox's privacy-first innovation and establishes company legitimacy in the competitive mobile app market._

_Created through collaborative discovery between etido and Product Manager John, synthesizing insights from Product Brief, Competitive Research, and Brainstorming sessions._
