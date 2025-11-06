# tidox-landing-page - Epic Breakdown

**Author:** etido
**Date:** 2025-11-05
**Project Level:** Medium Complexity
**Target Scale:** 5K → 25K visitors (Month 1 → Month 6)

---

## Overview

This document provides the complete epic and story breakdown for tidox-landing-page, decomposing the requirements from the [PRD](./PRD.md) into implementable stories.

### Epic Structure Overview

This project is decomposed into **7 sequential epics** that transform tidox.online from a single-product landing page into a comprehensive multi-product portfolio website. Each epic delivers independent business value while building on previous foundational work.

**Epic Sequencing Rationale:**

1. **Foundation & Setup** - Establishes Framer workspace, design system, and navigation architecture that all subsequent epics depend on
2. **Homepage** - First public-facing deliverable, showcases all 3 products with company-first positioning
3. **Product Pages** - Core conversion mechanism with SEO-optimized landing pages for Player, Transcript, and Task Manager
4. **Pricing Page** - Unified freemium pricing comparison driving premium conversions
5. **About & Supporting Pages** - Company credibility and legal compliance pages
6. **SEO & Analytics** - Technical infrastructure for organic traffic and data-driven optimization
7. **Optimization & Polish** - Performance, accessibility, and 2025 design trends implementation

**Success Metrics Coverage:**
- Traffic & Engagement → Epics 3, 6 (SEO-optimized product pages)
- Conversion Goals → Epics 2, 3, 4 (Homepage, Product Pages, Pricing)
- Technical Performance → Epics 1, 7 (Foundation, Optimization)
- Brand Positioning → Epics 2, 5 (Homepage, About)

**Total Estimated Stories:** 35-40 bite-sized stories across 7 epics, each completable in single development session.

---

## Epic 1: Foundation & Setup

**Epic Goal:** Establish the technical foundation, design system, and core navigation architecture that enables all subsequent feature development. This epic creates the Framer workspace, defines reusable design components, and implements the multi-product navigation structure required for the portfolio showcase.

**Business Value:** Without this foundation, no visible features can be built. This epic enables parallel development of homepage, product pages, and pricing in subsequent sprints while ensuring design consistency and technical performance from day one.

**Estimated Stories:** 6 stories

### Story 1.1: Framer Project Initialization

As a **web developer**,
I want **a configured Framer workspace with domain, hosting, and project structure**,
So that **I have the technical foundation to build and deploy the multi-product website**.

**Acceptance Criteria:**

**Given** I have Framer account access and tidox.online domain ownership
**When** I create the Framer project and configure settings
**Then** The project is live at tidox.online with HTTPS enabled

**And** Project structure includes: Home page (blank), /player, /transcript, /task-manager, /pricing, /about routes created
**And** Custom domain tidox.online is connected and SSL certificate is active
**And** Framer hosting is configured with edge CDN enabled
**And** Git integration is enabled for version control (if using Framer's GitHub sync)

**Prerequisites:** None (foundation story)

**Technical Notes:**
- Framer handles SSL automatically once domain is verified
- Create page structure early to enable parallel development
- Enable Framer's performance optimizations (image compression, lazy loading)
- Note: Architecture will define deployment pipeline details

---

### Story 1.2: Design System Core Components

As a **designer/developer**,
I want **reusable design components matching 2025 design trends**,
So that **I can build consistent, modern interfaces efficiently across all pages**.

**Acceptance Criteria:**

**Given** The Framer project is initialized (Story 1.1)
**When** I create the design system components
**Then** The following components exist in Framer's component library:

**And** **Typography System:**
- Heading levels (H1-H4) with bold, oversized fonts (2025 trend)
- Body text (regular, medium, semibold weights)
- Caption/small text styles
- Font: Modern sans-serif (Inter, Manrope, or similar)

**And** **Color Palette:**
- Primary accent color (CTAs, highlights)
- Secondary color (supporting elements)
- Neutral grays (backgrounds, borders, text)
- Success/error/warning colors
- Dark mode variants for all colors

**And** **Button Components:**
- Primary CTA (accent color, bold)
- Secondary button (outline or muted)
- Text-only button
- States: default, hover, active, disabled

**And** **Card Components:**
- Product card (icon, title, description, CTA)
- Feature card (icon, heading, text)
- Testimonial card (quote, author, rating)

**And** **Form Elements:**
- Input fields (text, email)
- Focus states with color transitions
- Error states with validation messages

**Prerequisites:** Story 1.1 (Framer project exists)

**Technical Notes:**
- Use Framer's component variants for states (hover, active)
- Ensure 4.5:1 color contrast ratio for WCAG AA compliance
- Components should support dark mode toggle (will be implemented in Epic 7)
- Reference research: minimalism + bold typography (2025 trend)

---

### Story 1.3: Desktop Navigation Header

As a **website visitor**,
I want **clear navigation to discover all Tidox products and key pages**,
So that **I can easily explore the multi-product portfolio**.

**Acceptance Criteria:**

**Given** The design system is created (Story 1.2)
**When** I view the website on desktop (>1024px)
**Then** A sticky header is visible at the top with 5 navigation items:

**And** Navigation items are: **Home | Products ▼ | Pricing | About | Contact**
**And** Header is fixed position (sticky on scroll)
**And** Active page is visually highlighted (underline or color change)
**And** "Products" item has dropdown indicator (▼)
**And** Contact links to support email or /contact page (to be created in Epic 5)

**Prerequisites:** Story 1.2 (Design system components)

**Technical Notes:**
- Use Framer's native sticky position
- Products dropdown functionality will be added in Story 1.4
- Header height: ~60-70px
- Logo/brand name on left, navigation centered or right-aligned
- Ensure header doesn't obstruct content (z-index management)

---

### Story 1.4: Products Mega-Menu Dropdown (Desktop)

As a **website visitor on desktop**,
I want **a mega-menu showing all 3 products when I hover on Products**,
So that **I can quickly navigate to any product landing page**.

**Acceptance Criteria:**

**Given** The desktop navigation header exists (Story 1.3)
**When** I hover over the "Products ▼" navigation item
**Then** A mega-menu dropdown appears with all 3 products

**And** Mega-menu layout is 3-column grid showing:
- **Column 1:** Tidox Player (icon, name, tagline: "IPTV & Media Player", "Learn More" CTA)
- **Column 2:** Offline Transcript (icon, name, tagline: "Privacy-First Transcription", "Learn More" CTA)
- **Column 3:** Task Manager (icon, name, tagline: "Project Task Management" + "Coming Soon" badge, "Learn More" CTA)

**And** Each product has: SVG icon (48x48px), product name (bold), one-line description, CTA button
**And** Mega-menu has fade-in animation (200ms) on hover
**And** Clicking "Learn More" navigates to respective product page (/player, /transcript, /task-manager)
**And** Clicking outside mega-menu or pressing ESC closes it
**And** Mega-menu appears below header without page content shift

**Prerequisites:** Story 1.3 (Desktop navigation header)

**Technical Notes:**
- Use Framer's hover interactions or component states
- Mega-menu should have subtle drop shadow for depth
- Ensure smooth animation (avoid jank)
- Product icons should be SVGs for scalability
- Consider adding background overlay (semi-transparent) when mega-menu is open

---

### Story 1.5: Mobile Navigation (Hamburger Menu)

As a **mobile website visitor**,
I want **accessible navigation via hamburger menu**,
So that **I can explore all pages on small screens**.

**Acceptance Criteria:**

**Given** The design system and desktop navigation exist (Stories 1.2, 1.3)
**When** I view the website on mobile (<768px)
**Then** The desktop navigation is replaced with a hamburger icon (☰) in the top-right

**And** Tapping the hamburger icon opens a slide-in menu from the left with full-screen overlay
**And** Menu displays navigation items vertically:
- Home
- **Products** (expandable/accordion with 3 sub-items):
  - Tidox Player
  - Offline Transcript
  - Task Manager (with "Coming Soon" badge)
- Pricing
- About
- Contact

**And** Each item is large enough for touch (min 44x44px touch target)
**And** Close button (X) is visible at top-right of menu
**And** Tapping outside menu or pressing close button dismisses menu with slide-out animation
**And** Page content is not scrollable when menu is open (body scroll lock)

**Prerequisites:** Stories 1.2, 1.3 (Design system, desktop navigation)

**Technical Notes:**
- Use Framer's overlay/modal component for slide-in menu
- Animation: 300ms ease-in-out slide from left
- Overlay background: semi-transparent dark (#000000 50% opacity)
- Ensure products sub-menu is expandable (accordion pattern)
- Menu should cover full viewport height

---

### Story 1.6: Footer Structure

As a **website visitor**,
I want **a comprehensive footer with product links, legal pages, and social media**,
So that **I have access to important links from any page**.

**Acceptance Criteria:**

**Given** The design system is created (Story 1.2)
**When** I scroll to the bottom of any page
**Then** A footer is visible with 4 columns:

**And** **Column 1 - Products:**
- Tidox Player (link to /player)
- Offline Transcript (link to /transcript)
- Task Manager (link to /task-manager)

**And** **Column 2 - Company:**
- About Us (link to /about)
- Contact (link to support email or /contact)

**And** **Column 3 - Legal:**
- Privacy Policy (link to /privacy - placeholder for Epic 5)
- Terms of Service (link to /terms - placeholder for Epic 5)

**And** **Column 4 - Social:**
- Social media icons (Twitter/X, GitHub) - links to Tidox social profiles
- Play Store badge (links to developer page)

**And** Footer includes copyright notice: "© 2025 Tidox. All rights reserved."
**And** Footer is fully responsive: 4 columns on desktop, stacked single column on mobile
**And** Links use appropriate hover states (color change)

**Prerequisites:** Story 1.2 (Design system)

**Technical Notes:**
- Footer background: dark gray (#1a1a1a) or brand dark color
- Text: light gray (#cccccc) for readability
- Social icons: SVG, 32x32px
- Ensure footer is included in Framer's main layout component (appears on all pages automatically)
- Privacy/Terms links can point to placeholder pages until Epic 5

---

## Epic 2: Homepage

**Epic Goal:** Create the multi-product homepage that transforms Tidox's first impression from single-product to comprehensive portfolio, showcasing all 3 applications with equal prominence while establishing company credibility and driving product discovery.

**Business Value:** The homepage is the primary entry point for organic traffic and brand discovery. This epic directly addresses the core problem (single-product invisibility) by creating a company-first homepage that drives cross-product awareness and establishes Tidox as a credible multi-product developer.

**Success Metrics:**
- Cross-product discovery: 60% of homepage visitors view 2+ product pages
- Bounce rate: <50%
- Average session duration: >2 minutes

**Estimated Stories:** 5 stories

### Story 2.1: Homepage Hero Section

As a **website visitor**,
I want **an immediately compelling hero that showcases Tidox's multi-product innovation**,
So that **I understand Tidox builds multiple high-quality mobile apps**.

**Acceptance Criteria:**

**Given** The foundation (Epic 1) is complete with navigation and design system
**When** I land on the homepage
**Then** I see a hero section with:

**And** **Company-first headline** (H1): "Innovative Mobile Apps for Modern Life" or similar (oversized, bold typography)
**And** **Subheadline** (1-2 sentences): "Privacy-first, feature-rich applications for entertainment, productivity, and transcription"
**And** **Visual showcase:** Rotating carousel OR split-screen showing all 3 product screenshots/icons
  - If carousel: Auto-advance every 4 seconds, manual controls (dots + arrows)
  - If split-screen: 3 equal-width panels with product icons overlaying screenshots
**And** **Primary CTA:** "Explore Our Apps" button (scrolls to product grid)
**And** **Social proof badge:** "50,000+ Downloads" with Play Store icon
**And** Hero is fully responsive: stacked layout on mobile, horizontal on desktop
**And** Hero occupies 70-80% of viewport height (above fold)

**Prerequisites:** Epic 1 complete (Stories 1.1-1.6)

**Technical Notes:**
- Use Framer's scroll animations for CTA button (fade-in on load)
- Product screenshots should be mobile mockups (not raw app screenshots)
- Consider parallax effect on hero background for depth
- Hero background: gradient or solid color (not distracting image)
- Ensure text has sufficient contrast over background (WCAG AA)

---

### Story 2.2: Product Grid (3 Products)

As a **website visitor**,
I want **to see all 3 Tidox products with equal prominence**,
So that **I can discover and navigate to any product that interests me**.

**Acceptance Criteria:**

**Given** The homepage hero exists (Story 2.1)
**When** I scroll below the hero section
**Then** I see a "Our Apps" section with 3 product cards in a grid:

**And** **Grid layout:** 3 columns on desktop (>1024px), 2 columns on tablet, 1 column on mobile
**And** Each card includes:
- **Product icon** (SVG, 64x64px) at top
- **Product name** (bold, H3)
- **One-line tagline** (e.g., "IPTV & Media Player", "Privacy-First Transcription", "Project Task Management")
- **3 key features** (bulleted or icon list):
  - Player: VR Support, Chromecast, m3u8 playlists
  - Transcript: Offline Processing, Whisper AI, Privacy-First
  - Task Manager: Project-Based, Simple Interface, Coming Soon badge
- **"Learn More" CTA button** (links to product page)
- **Download count** (e.g., "25K+ downloads") if available per product

**And** Cards have equal visual weight (same height, same styling)
**And** Hover effect on desktop: slight scale (1.05) + shadow increase
**And** Task Manager card has "Coming Soon" badge prominently displayed

**Prerequisites:** Story 2.1 (Homepage hero)

**Technical Notes:**
- Cards should use design system components (from Story 1.2)
- Consider stagger animation as cards enter viewport (scroll-triggered)
- Card background: slightly elevated (subtle shadow or border)
- CTA buttons should be consistent with primary button style
- Ensure cards are touch-friendly on mobile (entire card clickable or just CTA)

---

### Story 2.3: "Why Choose Tidox" Value Propositions

As a **potential user**,
I want **to understand what makes Tidox special**,
So that **I trust the brand and feel confident downloading the apps**.

**Acceptance Criteria:**

**Given** The product grid exists (Story 2.2)
**When** I scroll past the product grid
**Then** I see a "Why Choose Tidox" section with 4 value propositions:

**And** **Value Prop 1: Privacy-First Innovation**
- Icon: Shield or lock
- Headline: "Privacy-First Innovation"
- Description: "Offline Transcript processes on-device, never uploading your audio. Your data stays yours."

**And** **Value Prop 2: Modern Technology**
- Icon: Rocket or CPU
- Headline: "Cutting-Edge Features"
- Description: "VR video playback, AI transcription with Whisper, and project-based task management."

**And** **Value Prop 3: Freemium Model**
- Icon: Gift or price tag
- Headline: "Try Free, Upgrade When Ready"
- Description: "All apps offer robust free tiers. Upgrade to premium for advanced features."

**And** **Value Prop 4: Active Development**
- Icon: Code or wrench
- Headline: "Actively Maintained"
- Description: "Regular updates, new features, and responsive support. Task Manager launching soon."

**And** Layout: 2x2 grid on desktop, 1 column on mobile
**And** Each prop includes: icon (SVG, 48x48px), headline (bold), 2-3 sentence description
**And** Section has background color different from surrounding sections (visual separation)

**Prerequisites:** Story 2.2 (Product grid)

**Technical Notes:**
- Icons should be consistent style (outline or filled, not mixed)
- Use scroll-triggered fade-in animation for each prop (stagger effect)
- Background: light gray (#f5f5f5) or brand secondary color
- This section addresses PRD requirement FR-1 (4 value props)

---

### Story 2.4: Social Proof & Testimonials

As a **skeptical visitor**,
I want **evidence that other users trust and enjoy Tidox apps**,
So that **I feel confident trying them myself**.

**Acceptance Criteria:**

**Given** The "Why Choose Tidox" section exists (Story 2.3)
**When** I scroll past the value props
**Then** I see a social proof section with:

**And** **Aggregate Metrics (Top):**
- "50,000+ Total Downloads" (large, bold number)
- "4.5★ Average Play Store Rating" (star icons + rating)
- "3 Innovative Apps" (reinforcing multi-product)
- Layout: 3 columns on desktop, stacked on mobile

**And** **Testimonial Carousel (Below Metrics):**
- 3+ user testimonials rotating automatically (every 5 seconds)
- Each testimonial includes:
  - Quote text (1-3 sentences, extracted from Play Store reviews)
  - User name or "Play Store User" (anonymous)
  - 5-star rating display
  - Product association (e.g., "Tidox Player User")
- Manual controls: left/right arrows, dot indicators

**And** Testimonials are real quotes from Play Store reviews (not fabricated)
**And** Carousel auto-pauses on hover (desktop) or tap (mobile)
**And** Section has contrasting background for visual separation

**Prerequisites:** Story 2.3 ("Why Choose Tidox" section)

**Technical Notes:**
- Extract testimonials from Play Store reviews for authenticity
- Use design system testimonial card component (Story 1.2)
- Carousel should be touch-swipeable on mobile
- Consider adding "Read More Reviews" CTA linking to Play Store developer page
- Metrics should be dynamically updateable (hardcoded initially, CMS-driven in Growth phase)

---

### Story 2.5: Homepage CTA & Final Polish

As a **website visitor ready to take action**,
I want **clear CTAs and a polished, professional homepage experience**,
So that **I can easily download apps or explore further**.

**Acceptance Criteria:**

**Given** All homepage sections are built (Stories 2.1-2.4)
**When** I scroll through the entire homepage
**Then** The homepage has:

**And** **Final CTA Section** (above footer):
- Headline: "Ready to Explore?" or similar
- 3 CTA buttons side-by-side: "Download Player" | "Try Transcript" | "Join Task Manager Waitlist"
- Each button links to respective product page
- Section background: gradient or accent color (attention-grabbing)

**And** **Floating Mobile CTA** (mobile only):
- Appears after scrolling 50% down page
- Fixed position at bottom-center
- Button text: "Explore Apps" or "Download Now"
- Tapping opens overlay with 3 product quick-links
- Does not obstruct content

**And** **Scroll Animations:**
- Hero elements fade-in on page load
- Sections fade/slide-in as they enter viewport
- Smooth scroll behavior for internal anchor links

**And** **Responsive Refinements:**
- All text remains readable on mobile (no overflow)
- Images/screenshots load optimized for mobile bandwidth
- Touch targets meet 44x44px minimum
- Proper spacing prevents accidental taps

**And** **Page Performance:**
- Homepage loads in <2s on 4G mobile
- Lighthouse Performance score >85 (will be optimized to >90 in Epic 7)
- No layout shift (CLS < 0.1)

**Prerequisites:** Stories 2.1-2.4 (All homepage sections)

**Technical Notes:**
- Use Framer's scroll animations (built-in feature)
- Floating CTA should use z-index to stay above content but below header
- Test on real mobile devices (iOS Safari, Android Chrome) for performance
- Consider lazy loading images below fold
- This story covers PRD requirement FR-1 completion + mobile-first priorities

---

<!-- End Epic 2 -->

## Epic 3: Product Landing Pages

**Epic Goal:** Create three SEO-optimized, conversion-focused landing pages for Tidox Player, Offline Transcript, and Task Manager that drive organic traffic and downloads through comprehensive feature showcases, screenshot galleries, and free vs premium comparisons.

**Business Value:** Product pages are the primary organic traffic drivers and conversion mechanisms. This epic directly enables SEO strategy (40%+ organic traffic goal) and download conversions (>5% CTR target).

**Success Metrics:**
- Organic traffic: 40%+ of total by Month 6
- Download CTR: >5% from product pages
- Keyword rankings: Top 10 for 5 keywords per product

**Estimated Stories:** 9 stories (3 products × 3 stories each)

### Story 3.1: Player Landing Page - Hero & Features

As a **potential IPTV user searching for "IPTV player Android TV"**,
I want **a compelling Player landing page that explains features and drives downloads**,
So that **I understand the app's value and feel motivated to install it**.

**Acceptance Criteria:**

**Given** The foundation and design system exist (Epic 1)
**When** I navigate to /player
**Then** I see a product landing page with:

**And** **Hero Section:**
- H1: "Tidox Player - IPTV & Media Player for Android TV" (primary keyword)
- Large product screenshot (mobile mockup showing Player interface)
- 2-sentence value prop: "Watch IPTV, local media, and VR videos with Chromecast support and m3u8 playlist management."
- Dual CTAs: "Download Free" (primary) + "See Premium Features" (secondary, scrolls to comparison)
- Social proof: "25,000+ downloads" badge

**And** **Features Grid** (6 features, 2 columns):
1. **IPTV Support** - m3u8 playlists, EPG, multi-quality streams
2. **Chromecast** - Cast to TV seamlessly
3. **VR Video Playback** - 180° / 360° VR support
4. **Local Media** - Play files from device storage
5. **Android TV Optimized** - Remote-friendly interface
6. **Subtitle Support** - Multiple formats, customizable styling

**And** Page is fully responsive and follows design system
**And** Images are WebP format, lazy loaded

**Prerequisites:** Epic 1 complete

**Technical Notes:**
- Meta title: "Tidox Player - IPTV & Media Player for Android TV | Tidox"
- Meta description: "Free IPTV player with Chromecast, VR support, and m3u8 playlists. Watch local media and live TV on Android TV and mobile."
- Target keywords: IPTV player, m3u8 player, Chromecast player, VR video player
- H1 must include primary keyword for SEO

---

### Story 3.2: Player Landing Page - Screenshot Gallery & Download Section

As a **potential Player user**,
I want **visual proof of the app's interface and easy download access**,
So that **I can preview the app before installing and quickly get to Play Store**.

**Acceptance Criteria:**

**Given** The Player hero and features exist (Story 3.1)
**When** I scroll past the features section
**Then** I see:

**And** **Screenshot Gallery:**
- 5+ screenshots showing: home screen, IPTV playback, VR mode, Chromecast interface, settings
- Desktop: Thumbnail grid (3 columns), clicking opens lightbox
- Mobile: Swipeable carousel with dot indicators
- Screenshots are high-quality (1080p), optimized WebP

**And** **Free vs Premium Comparison Table:**
- 2 columns: Free | Premium
- 10-12 feature rows with ✓ / ✗ marks:
  - Free: Basic playback, m3u8, local media, ads
  - Premium: No ads, VR support, advanced Chromecast, EPG, subtitles
- Pricing: "Free" | "$4.99 one-time" (or actual price)
- CTA buttons below each column

**And** **Download Section:**
- Headline: "Get Tidox Player"
- Play Store badges: Free version + Pro version (separate listings if applicable)
- Secondary text: "Available for Android, Android TV, and VR headsets"
- "25,000+ downloads" social proof repeated

**Prerequisites:** Story 3.1

**Technical Notes:**
- Lightbox should have prev/next navigation and close button (ESC key)
- Comparison table must highlight premium value without diminishing free tier
- Play Store badge must be official Google asset
- Consider adding "Download on Fire TV" if app supports it

---

### Story 3.3: Player Landing Page - FAQ & SEO Optimization

As a **potential Player user with questions**,
I want **answers to common questions and discoverability in search engines**,
So that **my concerns are addressed and I can find this page through Google**.

**Acceptance Criteria:**

**Given** The Player page content is complete (Stories 3.1, 3.2)
**When** I scroll to the bottom of /player
**Then** I see:

**And** **FAQ Accordion** (5-8 questions):
1. "Does Tidox Player support IPTV m3u8 playlists?" → Yes, full support with EPG
2. "Can I cast to Chromecast?" → Yes, both free and premium
3. "Is VR video playback supported?" → Yes, in premium version (180°/360°)
4. "Does it work on Android TV?" → Yes, optimized for TV remote
5. "What's the difference between free and premium?" → Link to comparison table above
6. "Does it have ads?" → Free version has ads, premium removes them
7. "Can I play local video files?" → Yes, all formats supported
8. "How do I add IPTV playlists?" → Step-by-step explanation

**And** Each FAQ expands/collapses smoothly with arrow indicator
**And** FAQ schema markup (JSON-LD) is implemented for SEO

**And** **SEO Meta Tags:**
- `<title>`: "Tidox Player - IPTV & Media Player for Android TV | Tidox"
- Meta description: 155 characters with keywords
- Open Graph tags (og:title, og:description, og:image with Player screenshot)
- Twitter Card tags
- Canonical URL: https://tidox.online/player

**And** **Schema Markup:**
- MobileApplication schema with name, description, category, ratingValue, downloadUrl
- FAQ schema for SEO-rich results

**And** **Internal Links:**
- Link to /pricing ("See All Pricing")
- Link to /transcript and /task-manager ("Explore Other Apps")
- Link to homepage footer

**Prerequisites:** Stories 3.1, 3.2

**Technical Notes:**
- FAQ should be actual user questions from Play Store reviews
- Schema markup critical for SEO rich snippets
- Image for og:image should be Player product card or hero screenshot
- Ensure all images have descriptive alt tags (e.g., "Tidox Player IPTV interface on Android TV")

---

### Story 3.4: Transcript Landing Page - Hero & Features

As a **potential transcription user searching for "offline transcription app"**,
I want **a compelling Transcript landing page emphasizing privacy-first benefits**,
So that **I understand the privacy advantage over Otter.ai and feel motivated to install**.

**Acceptance Criteria:**

**Given** The foundation exists (Epic 1)
**When** I navigate to /transcript
**Then** I see:

**And** **Hero Section:**
- H1: "Offline Transcript - Privacy-First AI Transcription" (primary keyword)
- Large screenshot showing transcription interface
- 2-sentence value prop: "Transcribe audio and video entirely offline using Whisper AI. Your data never leaves your device—no cloud, no privacy concerns."
- **Privacy differentiator callout:** "Unlike Otter.ai, we process on-device. Your data stays yours."
- Dual CTAs: "Download Free" + "See Premium Features"
- Social proof: "10,000+ downloads"

**And** **Features Grid** (6 features):
1. **Offline Processing** - No internet required, no cloud uploads
2. **Whisper AI** - OpenAI's state-of-the-art transcription model
3. **Privacy-First** - HIPAA-friendly, data never transmitted
4. **Multi-Language** - 50+ languages supported
5. **Speaker Diarization** - Identifies multiple speakers (premium)
6. **Export Formats** - TXT, SRT, VTT, JSON

**And** Page follows design system, fully responsive

**Prerequisites:** Epic 1 complete

**Technical Notes:**
- Meta title: "Offline Transcript - Privacy-First AI Transcription | Tidox"
- Meta description: "Transcribe audio offline with Whisper AI. No cloud uploads—your data stays private. 50+ languages, speaker ID, export formats."
- Target keywords: offline transcription, privacy transcription, Whisper app, on-device transcription
- Emphasize privacy vs Otter.ai (competitive research insight)

---

### Story 3.5: Transcript Landing Page - Screenshot Gallery & Download Section

As a **potential Transcript user**,
I want **visual proof of the app's transcription accuracy and easy download access**,
So that **I can see the interface and quickly install from Play Store**.

**Acceptance Criteria:**

**Given** The Transcript hero and features exist (Story 3.4)
**When** I scroll past features
**Then** I see:

**And** **Screenshot Gallery:**
- 5+ screenshots: recording interface, transcription in progress, speaker diarization, export options, settings
- Swipeable on mobile, lightbox on desktop

**And** **Free vs Premium Comparison:**
- Free: 15 min per file, basic transcription, 5 languages
- Premium: Unlimited file length, speaker diarization, 50+ languages, priority processing, no ads
- Pricing: "Free" | "$2.99/month or $19.99/year"
- CTAs below each column

**And** **Download Section:**
- Play Store badges: Free + Premium versions
- "10,000+ downloads, 4.7★ rating"
- Emphasis: "No internet required after initial model download"

**Prerequisites:** Story 3.4

**Technical Notes:**
- Screenshots should showcase transcription accuracy (real examples)
- Premium pricing should emphasize annual savings ("Save 44%")
- Consider screenshot comparing Tidox (offline) vs Otter.ai (cloud) conceptually

---

### Story 3.6: Transcript Landing Page - FAQ & SEO Optimization

As a **potential Transcript user with privacy concerns**,
I want **answers about privacy, offline functionality, and SEO discoverability**,
So that **my concerns are addressed and I can find this page through search**.

**Acceptance Criteria:**

**Given** Transcript page content is complete (Stories 3.4, 3.5)
**When** I scroll to bottom
**Then** I see:

**And** **FAQ Accordion** (6-8 questions):
1. "Is my audio uploaded to the cloud?" → No, 100% offline processing
2. "How accurate is Whisper AI?" → Industry-leading, comparable to Otter.ai
3. "Does it work without internet?" → Yes, after initial model download
4. "Is it HIPAA compliant?" → Yes, no data transmission makes it privacy-friendly
5. "What languages are supported?" → 50+ in premium, 5 in free
6. "Can it identify multiple speakers?" → Yes, speaker diarization in premium
7. "How do I export transcripts?" → TXT, SRT, VTT, JSON formats available
8. "What's the file length limit?" → 15 min free, unlimited premium

**And** FAQ schema markup implemented

**And** **SEO Meta Tags:**
- Title, description with keywords
- Open Graph and Twitter Cards
- Canonical URL

**And** **Schema Markup:**
- MobileApplication schema
- FAQ schema
- Emphasize "offline" and "privacy" attributes

**And** **Internal Links:**
- Link to /pricing
- Link to /player and /task-manager

**Prerequisites:** Stories 3.4, 3.5

**Technical Notes:**
- FAQ should address Otter.ai comparison concerns
- Schema should include aggregateRating from Play Store
- Alt tags should emphasize privacy ("Offline Transcript interface showing on-device processing")

---

### Story 3.7: Task Manager Landing Page - Hero & Features (Coming Soon)

As a **potential productivity user searching for "project task manager"**,
I want **a Task Manager landing page that explains the upcoming app and allows waitlist signup**,
So that **I can be notified when it launches and understand its value**.

**Acceptance Criteria:**

**Given** The foundation exists (Epic 1)
**When** I navigate to /task-manager
**Then** I see:

**And** **"Coming Soon" Badge** prominently displayed in hero
**And** **Hero Section:**
- H1: "Task Manager - Project-Based Task Management" (primary keyword)
- Mockup screenshots (design previews, not final app)
- 2-sentence value prop: "Simple, project-based task management for teams and individuals. Launching Q1 2026."
- Primary CTA: "Join Waitlist" (opens email signup form)
- Secondary CTA: "Learn More" (scrolls to features)

**And** **Features Grid** (5 teaser features):
1. **Project-Based Organization** - Group tasks by project
2. **Simple Interface** - No bloat, just what you need
3. **Collaboration** - Invite team members (planned)
4. **Mobile & Desktop** - Android app with web sync (planned)
5. **Free Tier** - Generous free plan with premium upgrades

**And** **Launch Timeline Indicator:** "Launching Q1 2026" or similar
**And** Page styled consistently with other product pages

**Prerequisites:** Epic 1 complete

**Technical Notes:**
- Meta title: "Task Manager - Project-Based Task Management | Tidox (Coming Soon)"
- Meta description: "Simple project task manager launching Q1 2026. Join the waitlist for early access to Tidox's productivity app."
- Target keywords: project task manager, simple task app, project-based todo
- Mockups should be polished (use Figma or similar)

---

### Story 3.8: Task Manager Landing Page - Waitlist Form & Feature Details

As a **interested productivity user**,
I want **to join the Task Manager waitlist and see detailed planned features**,
So that **I'm notified at launch and understand what to expect**.

**Acceptance Criteria:**

**Given** The Task Manager hero exists (Story 3.7)
**When** I scroll past hero or click "Join Waitlist"
**Then** I see:

**And** **Email Waitlist Form:**
- Single email input field (required)
- "Notify Me at Launch" CTA button
- Success message after submission: "You're on the list! We'll email you when Task Manager launches."
- Form validation: valid email format required
- Spam protection: reCAPTCHA or honeypot field
- Email stored in Framer forms or integrated service (Mailchimp, ConvertKit)

**And** **Detailed Feature List** (8-10 planned features):
- Project-based task organization
- Subtasks and checklists
- Due dates and reminders
- Team collaboration (assign tasks)
- Mobile app + web sync
- Offline support
- Tags and filters
- Freemium pricing (details TBD)

**And** **Mockup Screenshot Gallery:**
- 3-5 design mockups showing: project view, task detail, mobile interface
- Labeled as "Design Preview - Not Final"
- Swipeable on mobile

**And** **Social Sharing CTAs:**
- "Share on Twitter" and "Share on LinkedIn" buttons
- Pre-filled text: "I just joined the waitlist for Tidox Task Manager! 🚀"

**Prerequisites:** Story 3.7

**Technical Notes:**
- Form should integrate with email service API (Framer native forms or external)
- Success message should encourage social sharing
- Consider offering "early access" or "beta tester" incentive
- Mockups must be high-quality to maintain credibility

---

### Story 3.9: Task Manager Landing Page - FAQ & SEO Optimization

As a **potential Task Manager user with questions**,
I want **answers about launch timeline, pricing, and SEO discoverability**,
So that **my concerns are addressed and I can find this page through search**.

**Acceptance Criteria:**

**Given** Task Manager page content is complete (Stories 3.7, 3.8)
**When** I scroll to bottom
**Then** I see:

**And** **FAQ Accordion** (5-6 questions):
1. "When will Task Manager launch?" → Q1 2026 (specific month if known)
2. "Will there be a free version?" → Yes, with generous limits
3. "What platforms will be supported?" → Android first, web app planned
4. "How is this different from Todoist/Asana?" → Project-based, simpler, Tidox ecosystem
5. "Can I beta test?" → Join waitlist for early access consideration
6. "Will it sync across devices?" → Yes, mobile + web sync planned

**And** FAQ schema markup

**And** **SEO Meta Tags:**
- Title: "Task Manager - Project-Based Task Management | Tidox (Coming Soon)"
- Description with keywords
- Open Graph and Twitter Cards with mockup image
- Canonical URL

**And** **Schema Markup:**
- MobileApplication schema with "Coming Soon" status
- FAQ schema
- Include expectedReleaseDate if known

**And** **Internal Links:**
- Link to /player and /transcript ("Explore Our Other Apps")
- Link to homepage

**Prerequisites:** Stories 3.7, 3.8

**Technical Notes:**
- FAQ should manage expectations (launch timeline, feature set)
- Schema should indicate future availability
- Consider adding "notify me" CTA in footer as well
- Alt tags for mockups: "Task Manager project view mockup - design preview"

---

<!-- End Epic 3 -->

## Epic 4: Unified Pricing Page

**Epic Goal:** Create a transparent, conversion-optimized pricing page that compares Free vs Premium tiers for all 3 products side-by-side, implementing research-backed pricing psychology (transparent pricing = 4.6% conversion vs 2.8% without).

**Business Value:** Pricing page is the primary conversion mechanism. Transparent pricing builds trust and drives premium upgrades. This epic directly enables >30% pricing page traffic goal and premium conversion tracking.

**Success Metrics:**
- Pricing page traffic: >30% of total site traffic
- Time on page: >60 seconds (engagement with comparison)
- Premium Play Store clicks: >3% of pricing page visitors

**Estimated Stories:** 4 stories

### Story 4.1: Pricing Page Structure & Product Comparison Grid

As a **potential premium customer**,
I want **a clear side-by-side comparison of free and premium features for all products**,
So that **I understand the value of upgrading and can make an informed decision**.

**Acceptance Criteria:**

**Given** The foundation exists (Epic 1)
**When** I navigate to /pricing
**Then** I see:

**And** **Page Header:**
- H1: "Transparent Pricing for All Tidox Apps"
- Subheadline: "Try free, upgrade when you're ready. No subscriptions, no hidden fees." (builds trust)
- Monthly/Annual toggle prominently displayed (annual shows "Save 20%" badge)

**And** **6-Column Comparison Grid:**
- **Layout:** 3 products (Player, Transcript, Task Manager) × 2 tiers (Free, Premium)
- **Desktop:** Full 6-column grid visible
- **Mobile:** Horizontal scroll with product sections clearly separated

**And** **Player Columns:**
- Free: $0 | Premium: $4.99 one-time (or actual price)
- Free features: Basic playback, m3u8, ads
- Premium features: No ads, VR, advanced Chromecast, EPG

**And** **Transcript Columns:**
- Free: $0 | Premium: $2.99/month or $19.99/year (with annual toggle)
- Free features: 15 min files, 5 languages, basic transcription
- Premium features: Unlimited, 50+ languages, speaker ID, priority

**And** **Task Manager Columns:**
- Both: "Coming Soon - Pricing TBD"
- Placeholder features: "Join waitlist for early access pricing"

**And** Feature rows use checkmarks (✓) for included, X or blank for excluded
**And** Premium columns are visually emphasized (border, background color, "Best Value" badge)
**And** CTA buttons below each column: "Download Free" (neutral) | "Get Premium" (accent color, prominent)

**Prerequisites:** Epic 1 complete

**Technical Notes:**
- Monthly/annual toggle should smoothly animate price changes
- Mobile horizontal scroll must be intuitive (swipe gestures)
- Ensure table remains readable on small screens (min font size 14px)
- Task Manager section should link to /task-manager waitlist

---

### Story 4.2: Pricing Page - Trust Signals & Testimonials

As a **hesitant potential customer**,
I want **trust signals and user testimonials about premium features**,
So that **I feel confident that upgrading is worth the investment**.

**Acceptance Criteria:**

**Given** The pricing grid exists (Story 4.1)
**When** I scroll below the comparison table
**Then** I see:

**And** **Trust Signals Section** (3 badges):
1. **"No Credit Card Required"** (for free tier) - Shield icon
2. **"30-Day Money-Back Guarantee"** (for premium) - Checkmark icon
3. **"One-Time Purchase"** (for Player premium) - Piggy bank icon

**And** Badges are displayed horizontally, centered, with icons and short descriptions
**And** Badges have equal visual weight (same size, styling)

**And** **Premium Testimonials Section:**
- Headline: "What Premium Users Say"
- 3+ testimonials specifically mentioning premium features:
  - Player: "VR mode is incredible for watching movies" - User X
  - Transcript: "Offline transcription saved me on flights" - User Y
  - General: "Worth every penny, no ads is a game-changer" - User Z
- Each testimonial includes: quote, user name/initial, 5-star rating, product association
- Layout: 3 columns on desktop, stacked on mobile

**And** **Play Store Ratings Display:**
- "4.5★ Average Rating Across All Apps"
- "50,000+ Total Downloads"
- "1,000+ Premium Users" (if data available)

**Prerequisites:** Story 4.1

**Technical Notes:**
- Testimonials should be from real Play Store reviews mentioning premium features
- Trust signals address common objections (cost, commitment, value)
- Consider adding "Featured in [publication]" if applicable
- Research insight: Transparent pricing + trust signals = 4.6% conversion vs 2.8%

---

### Story 4.3: Pricing Page - FAQ & Objection Handling

As a **potential customer with concerns**,
I want **answers to pricing questions and objections addressed**,
So that **I have no remaining barriers to upgrading**.

**Acceptance Criteria:**

**Given** The pricing grid and trust signals exist (Stories 4.1, 4.2)
**When** I scroll to the FAQ section
**Then** I see:

**And** **FAQ Accordion** (6-8 questions addressing objections):
1. "What's the difference between free and premium?" → Link to comparison table above
2. "Is premium a subscription or one-time?" → Player is one-time, Transcript is subscription (monthly/annual)
3. "Can I try premium before paying?" → No trial, but money-back guarantee
4. "How do I upgrade from free to premium?" → Download premium version from Play Store or in-app purchase
5. "Do you store my payment info?" → No, handled by Google Play
6. "Can I get a refund?" → Yes, 30-day money-back guarantee through Play Store
7. "Does premium remove ads?" → Yes, all ads removed
8. "Is there a family plan?" → Not currently, individual licenses only

**And** Each FAQ expands smoothly with arrow indicator
**And** FAQ schema markup implemented for SEO

**And** **Bottom CTA Section:**
- Headline: "Ready to Upgrade?"
- 3 CTA buttons: "Get Player Premium" | "Get Transcript Premium" | "Join Task Manager Waitlist"
- Each button links to Play Store or product page
- Background: gradient or accent color for attention

**Prerequisites:** Stories 4.1, 4.2

**Technical Notes:**
- FAQs should address actual objections from user feedback or reviews
- Schema markup for FAQ rich snippets in search results
- Bottom CTA reinforces conversion opportunity after objection handling
- Consider adding "Contact Support" link for unlisted questions

---

### Story 4.4: Pricing Page - SEO & Analytics Optimization

As a **website owner**,
I want **the pricing page to be SEO-optimized and track conversion funnel metrics**,
So that **it ranks in search results and I can measure premium conversion performance**.

**Acceptance Criteria:**

**Given** The pricing page content is complete (Stories 4.1-4.3)
**When** The page is published and analytics are configured
**Then** The page has:

**And** **SEO Meta Tags:**
- Title: "Pricing - Free & Premium Plans for All Tidox Apps"
- Meta description: "Compare free and premium features for Tidox Player, Offline Transcript, and Task Manager. Transparent pricing, no hidden fees."
- Open Graph and Twitter Cards with pricing graphic
- Canonical URL: https://tidox.online/pricing

**And** **Schema Markup:**
- FAQ schema for questions
- Product schema for each app with pricing info
- AggregateRating schema if applicable

**And** **Google Analytics 4 Custom Events:**
- `toggle_annual_pricing` (track monthly vs annual preference)
- `click_premium_cta` (track which product premium button clicked)
- `expand_faq` (track which questions users care about)
- `view_pricing_page` (track referrer source)

**And** **Conversion Funnel Tracking:**
- Pricing page → Play Store link click (external link tracking)
- Homepage → Pricing page
- Product page → Pricing page

**And** **Internal Links:**
- Link to all 3 product pages ("Learn More About [Product]")
- Link to homepage
- Breadcrumb: Home > Pricing

**Prerequisites:** Stories 4.1-4.3

**Technical Notes:**
- GA4 events should include product name as parameter (e.g., {product: "player"})
- External link tracking critical for measuring Play Store clicks
- Pricing page is traffic driver per PRD (>30% of total traffic goal)
- Consider adding comparison table image for social sharing (Open Graph)

---

<!-- End Epic 4 -->

## Epic 5: About & Supporting Pages

**Epic Goal:** Create company credibility pages (About, Privacy Policy, Contact) that establish Tidox as a trustworthy developer, comply with legal requirements, and provide support channels.

**Business Value:** About page builds trust and credibility for investors/partners/users. Privacy policy is legally required and reinforces privacy-first brand positioning. Contact page reduces support burden by providing self-service resources.

**Estimated Stories:** 3 stories

### Story 5.1: About Page - Company Mission & Philosophy

As a **potential user or partner**,
I want **to learn about Tidox's mission, developer expertise, and company values**,
So that **I trust the brand and feel confident using their apps**.

**Acceptance Criteria:**

**Given** The foundation exists (Epic 1)
**When** I navigate to /about
**Then** I see:

**And** **Hero Section:**
- H1: "About Tidox - Building Privacy-First Mobile Apps"
- Tagline: "Innovative, user-focused applications for entertainment, productivity, and transcription"

**And** **Company Mission Statement:**
- Headline: "Our Mission"
- 2-3 paragraphs explaining: Privacy-first philosophy, commitment to quality, user empowerment
- Key points: On-device processing (Transcript), no data harvesting, active development

**And** **Developer Expertise Section:**
- Brief bio or company background (avoid personal details unless comfortable)
- Expertise: VR development, AI integration, media playback, privacy engineering
- Open-source contributions mention (if applicable) for credibility

**And** **Why We Build:**
- Explanation of product motivations:
  - Player: No good IPTV player with VR support existed
  - Transcript: Otter.ai's cloud dependency concerned users
  - Task Manager: Simple project-based organization missing in market

**And** **Contact Information:**
- Support email (support@tidox.online or similar)
- Social media links (Twitter/X, GitHub)
- "Have questions? Contact us" CTA

**And** Page is fully responsive with clean, professional design

**Prerequisites:** Epic 1 complete

**Technical Notes:**
- Tone should be professional but approachable
- Emphasize privacy-first values throughout
- Consider adding team photo or founder image (optional)
- This page is for credibility, not sales—avoid hard selling

---

### Story 5.2: Privacy Policy & Terms of Service Pages

As a **privacy-conscious user**,
I want **transparent privacy and terms pages**,
So that **I understand how Tidox handles data and feel confident in their privacy claims**.

**Acceptance Criteria:**

**Given** The foundation exists (Epic 1)
**When** I navigate to /privacy or /terms
**Then** I see:

**And** **Privacy Policy Page** (/privacy):
- H1: "Privacy Policy"
- Last updated date
- Sections:
  1. **Data Collection:** "We collect minimal data. Website uses Google Analytics for traffic analysis. Apps do not transmit personal data."
  2. **Offline Transcript:** "Audio files are processed entirely on-device. No audio or transcripts are uploaded to servers."
  3. **Third-Party Services:** "Play Store handles payments. We do not store payment information."
  4. **Cookies:** "Website uses cookies for analytics only. No tracking cookies."
  5. **User Rights:** "You can request data deletion by emailing support."
  6. **Contact:** support@tidox.online

**And** **Terms of Service Page** (/terms):
- H1: "Terms of Service"
- Last updated date
- Standard terms:
  1. **Acceptance:** By using Tidox apps/website, you agree to these terms
  2. **License:** Apps are licensed, not sold. One-time/subscription fees grant usage rights
  3. **Refunds:** 30-day money-back guarantee through Play Store
  4. **Prohibited Use:** No piracy, illegal content, reverse engineering
  5. **Disclaimer:** Apps provided "as is", no guarantees of uptime/performance
  6. **Limitation of Liability:** Standard legal disclaimers
  7. **Governing Law:** (Specify jurisdiction if applicable)

**And** Both pages are text-heavy but formatted for readability (headings, bullets, spacing)
**And** Footer links updated to point to actual pages (not placeholders)

**Prerequisites:** Epic 1 complete

**Technical Notes:**
- Use plain language, avoid excessive legalese
- Privacy policy should reinforce privacy-first brand claims
- Consider using a legal template generator (Termly, iubenda) and customizing
- GDPR/CCPA compliance: Minimal data collection makes compliance easier
- Update dates important for legal validity

---

### Story 5.3: Contact Page & Support Resources

As a **user needing help**,
I want **easy ways to contact Tidox and access support resources**,
So that **I can get answers to my questions without frustration**.

**Acceptance Criteria:**

**Given** The foundation and about page exist (Epic 1, Story 5.1)
**When** I navigate to /contact
**Then** I see:

**And** **Contact Form:**
- Fields: Name (required), Email (required), Subject dropdown (General, Player Support, Transcript Support, Task Manager Waitlist, Other), Message (required)
- "Send Message" CTA button
- Success message after submission
- Submissions sent to support@tidox.online or stored in Framer forms

**And** **Alternative Contact Methods:**
- **Email:** support@tidox.online (clickable mailto link)
- **Social Media:** Twitter/X, GitHub (for open-source inquiries)
- **Response Time:** "We typically respond within 24-48 hours"

**And** **Self-Service Resources:**
- FAQ Links: "Check our [Product] FAQ first" (links to product page FAQs)
- Play Store: "For app-specific issues, please leave a review or contact via Play Store"

**And** **Bug Reports & Feature Requests:**
- GitHub Issues link (if applicable): "Report bugs or request features on GitHub"
- Encouragement to provide details (device model, Android version, issue description)

**And** Page is simple, professional, and responsive

**Prerequisites:** Epic 1 complete, Story 5.1

**Technical Notes:**
- Contact form should have spam protection (reCAPTCHA or honeypot)
- Form should validate email format before submission
- Consider adding "Expected response time" to manage expectations
- Self-service resources reduce support burden
- If using GitHub for bug tracking, make repository public or provide public issue tracker

---

<!-- End Epic 5 -->

## Epic 6: SEO & Analytics Infrastructure

**Epic Goal:** Implement technical SEO and analytics infrastructure to drive organic traffic (40%+ goal by Month 6) and enable data-driven optimization through comprehensive event tracking and conversion funnels.

**Business Value:** SEO is the primary long-term traffic driver. Analytics enable measuring success metrics and optimizing conversion rates. This epic directly enables organic traffic growth and data-driven decision-making.

**Success Metrics:**
- Organic traffic: 40%+ of total by Month 6
- Keyword rankings: Top 10 for 15+ target keywords (5 per product)
- All custom events tracking correctly in GA4

**Estimated Stories:** 4 stories

### Story 6.1: Technical SEO Foundation

As a **website owner**,
I want **comprehensive technical SEO implemented across all pages**,
So that **search engines can crawl, index, and rank the site effectively**.

**Acceptance Criteria:**

**Given** All pages are built (Epics 1-5 complete)
**When** Technical SEO is implemented
**Then** The website has:

**And** **XML Sitemap:**
- Auto-generated by Framer or manually created
- Includes all pages: /, /player, /transcript, /task-manager, /pricing, /about, /privacy, /terms, /contact
- Priority values: Homepage (1.0), Product pages (0.8), Pricing (0.8), Others (0.5)
- Submitted to Google Search Console

**And** **Robots.txt:**
- Allows all pages (no disallows except /admin if exists)
- References sitemap URL: `Sitemap: https://tidox.online/sitemap.xml`

**And** **Canonical URLs:**
- Every page has `<link rel="canonical" href="...">` tag
- No duplicate content issues

**And** **Performance Optimization:**
- All images in WebP format (handled by Framer)
- Lazy loading enabled for below-fold images
- Minified CSS/JS (Framer automatic)
- Compressed assets (Gzip/Brotli via Framer CDN)

**And** **Mobile Optimization:**
- Responsive meta viewport tag on all pages
- Touch targets minimum 44x44px
- No horizontal scroll on mobile

**And** **Page Speed:**
- Lighthouse Performance score >85 (will hit >90 in Epic 7)
- First Contentful Paint <1s
- Time to Interactive <3s

**Prerequisites:** Epics 1-5 complete

**Technical Notes:**
- Google Search Console setup required for sitemap submission
- Use Lighthouse CI or PageSpeed Insights for performance validation
- Framer handles most technical SEO automatically, verify implementation
- Focus on product pages for SEO (highest traffic potential)

---

### Story 6.2: Schema Markup Implementation

As a **website owner**,
I want **JSON-LD schema markup on all relevant pages**,
So that **search engines display rich snippets and increase click-through rates**.

**Acceptance Criteria:**

**Given** Technical SEO foundation is complete (Story 6.1)
**When** Schema markup is implemented
**Then** Each page has appropriate structured data:

**And** **Homepage Schema:**
- Organization schema: Name, logo, URL, social media profiles
- WebSite schema: Name, URL, potential search action

**And** **Product Pages Schema** (Player, Transcript, Task Manager):
- MobileApplication schema for each product:
  - name, applicationCategory, operatingSystem, offers (price)
  - aggregateRating (from Play Store ratings)
  - downloadUrl (Play Store link)

**And** **Pricing Page Schema:**
- FAQ schema for pricing questions
- Product schemas for each app with pricing details

**And** **Product Page FAQs:**
- FAQ schema on each product page for SEO-rich results

**And** **About Page Schema:**
- Organization schema (same as homepage)

**And** All schema validated using Google Rich Results Test
**And** No errors or warnings in validation tool

**Prerequisites:** Story 6.1

**Technical Notes:**
- JSON-LD format preferred (easier to maintain than microdata)
- Schema should be added to page <head> or end of <body>
- Rich snippets may take 1-2 weeks to appear in search results
- AggregateRating schema requires min 5 reviews (use Play Store data)
- Reference: https://schema.org/MobileApplication

---

### Story 6.3: Google Analytics 4 Setup & Custom Events

As a **website owner**,
I want **comprehensive GA4 analytics tracking all user interactions**,
So that **I can measure success metrics and optimize conversion funnels**.

**Acceptance Criteria:**

**Given** The website is complete (Epics 1-5)
**When** GA4 is configured
**Then** Analytics tracking includes:

**And** **GA4 Property Setup:**
- Tracking code installed on all pages (in <head>)
- Enhanced measurement enabled (scroll, outbound clicks, file downloads, video engagement)
- Data stream configured for tidox.online

**And** **Custom Events Implemented:**
1. **click_download_cta** - Parameters: {product, tier (free/premium), location (hero/grid/pricing)}
2. **view_pricing_page** - Parameters: {referrer}
3. **toggle_annual_pricing** - No parameters
4. **expand_faq** - Parameters: {question_text, page}
5. **click_product_card** - Parameters: {product, location (homepage/navigation)}
6. **join_waitlist** - Parameters: {product: "task-manager"}
7. **click_social_media** - Parameters: {platform (twitter/github)}
8. **open_mobile_menu** - No parameters

**And** **Conversion Goals Configured:**
- Download button clicks (primary conversion)
- Pricing page visits
- Task Manager waitlist signups

**And** **Conversion Funnels:**
1. Homepage → Product Page → Download
2. Homepage → Pricing Page → Download
3. Product Page → Pricing Page → Download

**And** All events tested using GA4 DebugView
**And** Events appear in real-time reports

**Prerequisites:** Epics 1-5 complete

**Technical Notes:**
- Use Framer's built-in GA4 integration or custom code
- Custom events require gtag() JavaScript calls
- External link tracking critical for Play Store clicks (outbound link event)
- DebugView accessible via GA4 property settings
- Consider setting up custom dimensions for product names

---

### Story 6.4: Search Console Setup & Keyword Monitoring

As a **website owner**,
I want **Google Search Console configured and keyword rankings monitored**,
So that **I can track SEO performance and identify optimization opportunities**.

**Acceptance Criteria:**

**Given** Technical SEO and schema are complete (Stories 6.1, 6.2)
**When** Search Console is configured
**Then** SEO monitoring includes:

**And** **Google Search Console Setup:**
- Domain property verified (tidox.online)
- Sitemap submitted (https://tidox.online/sitemap.xml)
- All pages indexed (verify with URL inspection tool)
- No coverage errors or warnings

**And** **Target Keyword Tracking:**
- **Player:** IPTV player, m3u8 player, Chromecast player, VR video player, Android TV player (5 keywords)
- **Transcript:** offline transcription, privacy transcription, Whisper app, on-device transcription, HIPAA transcription (5 keywords)
- **Task Manager:** project task manager, simple task app, project-based todo, task management app, productivity app (5 keywords)
- **Total:** 15 primary keywords tracked

**And** **Performance Baseline Established:**
- Initial rankings documented (likely not ranking yet, establish baseline)
- Impressions and clicks tracked weekly
- Click-through rate (CTR) monitored
- Goal: Top 10 for 5+ keywords by Month 6

**And** **Search Console Reports Reviewed:**
- Pages with most impressions (identify opportunities)
- Queries with high impressions but low CTR (optimize meta descriptions)
- Coverage issues resolved

**Prerequisites:** Stories 6.1, 6.2

**Technical Notes:**
- Search Console verification via DNS TXT record or HTML file upload
- Indexing may take 1-2 weeks for new site
- Request indexing for all pages manually via URL Inspection tool (speeds up process)
- Consider using third-party rank tracking tool (Ahrefs, SEMrush) for more detailed monitoring
- Focus on long-tail keywords initially (e.g., "privacy-first transcription app" vs "transcription")

---

<!-- End Epic 6 -->

## Epic 7: Optimization & Polish

**Epic Goal:** Implement 2025 design trends (micro-interactions, dark mode), optimize performance to meet >90 Lighthouse score target, ensure WCAG 2.1 AA accessibility compliance, and perform cross-browser testing to deliver a polished, modern user experience.

**Business Value:** This epic transforms a functional website into a best-in-class 2025 experience that reflects Tidox's "modern tech leadership" positioning. Performance optimization directly impacts bounce rate (<50% goal) and mobile conversions (62.54% of traffic).

**Success Metrics:**
- Lighthouse Performance: >90 (mobile and desktop)
- Lighthouse Accessibility: 100
- Page load time: <2s on 4G mobile
- Cross-browser compatibility: Chrome, Safari, Firefox, Edge

**Estimated Stories:** 5 stories

### Story 7.1: 2025 Micro-Interactions Implementation

As a **website visitor**,
I want **delightful micro-interactions that make the site feel modern and responsive**,
So that **my experience feels polished and engaging**.

**Acceptance Criteria:**

**Given** All pages are functionally complete (Epics 1-6)
**When** I interact with the website
**Then** I experience:

**And** **Button Interactions:**
- Hover: Subtle scale (1.05) + color shift
- Active/press: Scale down (0.95)
- Focus (keyboard): Clear outline indicator
- CTA buttons: Subtle pulse animation (2s loop)

**And** **Card Interactions:**
- Hover (desktop): Scale (1.03) + shadow increase + border color change
- Mobile tap: Brief highlight effect

**And** **Form Input Interactions:**
- Focus: Border color transition to accent color (300ms)
- Error state: Red border + shake animation
- Success state: Green border + checkmark icon fade-in

**And** **Scroll Animations:**
- Elements fade/slide-in as they enter viewport (stagger effect for grids)
- Parallax effect on hero backgrounds (subtle, not distracting)
- Smooth scroll behavior for anchor links

**And** **Navigation Interactions:**
- Mega-menu: Fade-in with stagger (200ms) on hover
- Mobile menu: Slide-in from left (300ms ease-in-out)
- Active page: Animated underline slide-in

**And** **Image Loading:**
- Skeleton screens during load (not spinners)
- Fade-in effect when image loads

**And** All animations are smooth (60fps), no jank
**And** Animations respect prefers-reduced-motion (disable for accessibility)

**Prerequisites:** Epics 1-6 complete

**Technical Notes:**
- Use Framer's built-in animation tools (smoother than custom CSS)
- Keep animations subtle (100-300ms duration)
- Test on lower-end devices (avoid performance issues)
- Respect prefers-reduced-motion media query for accessibility
- Reference research: Micro-interactions are 2025 design trend

---

### Story 7.2: Dark Mode Implementation

As a **user who prefers dark interfaces**,
I want **a dark mode toggle that works across all pages**,
So that **I can use the site comfortably in low-light environments**.

**Acceptance Criteria:**

**Given** All pages and components exist (Epics 1-6)
**When** I toggle dark mode or it's enabled by system preference
**Then** I see:

**And** **Dark Mode Toggle:**
- Sun/moon icon in header (next to navigation)
- Click toggles between light and dark mode
- Preference saved in localStorage (persists across sessions)
- Respects system preference on first visit (prefers-color-scheme media query)

**And** **Dark Mode Color Palette:**
- Background: Dark gray (#1a1a1a) instead of white
- Text: Light gray (#e0e0e0) instead of black
- Accent colors remain vibrant (adjust brightness if needed)
- Cards/sections: Slightly lighter dark (#2a2a2a) for contrast
- Borders: Subtle gray (#3a3a3a)

**And** **All Components Support Dark Mode:**
- Buttons, cards, forms, navigation, footer
- Images have no harsh white borders (adjust if needed)
- Screenshots may need dark borders (add programmatically)

**And** **Smooth Transition:**
- Theme change animates (300ms color transition)
- No flash of wrong theme on page load

**And** **Accessibility Maintained:**
- Text contrast meets WCAG AA in both modes (4.5:1 ratio)
- Toggle button has clear label (aria-label: "Toggle dark mode")

**Prerequisites:** Epics 1-6 complete

**Technical Notes:**
- Use Framer's variant system for light/dark mode components
- Store preference: localStorage.setItem('theme', 'dark')
- Check system preference: window.matchMedia('(prefers-color-scheme: dark)')
- Prevent flash: Check localStorage before render
- Test with VoiceOver/TalkBack to ensure toggle is accessible
- Dark mode is 2025 design trend per research

---

### Story 7.3: Performance Optimization to >90 Lighthouse Score

As a **website owner**,
I want **exceptional page performance meeting >90 Lighthouse score**,
So that **users have fast load times and Google rewards the site with better rankings**.

**Acceptance Criteria:**

**Given** All content is implemented (Epics 1-6)
**When** I run Lighthouse audits
**Then** Performance scores are:

**And** **Mobile Performance: >90**
- First Contentful Paint (FCP): <1.0s
- Largest Contentful Paint (LCP): <2.0s
- Cumulative Layout Shift (CLS): <0.1
- Total Blocking Time (TBT): <200ms

**And** **Desktop Performance: >95**
- FCP: <0.5s
- LCP: <1.0s
- CLS: <0.05

**And** **Optimization Techniques Applied:**
1. **Image Optimization:**
   - All images WebP format
   - Lazy loading for below-fold images
   - Responsive images (srcset) for different screen sizes
   - Compressed (quality 80-85%)

2. **Code Optimization:**
   - Minified CSS/JS (Framer automatic)
   - Remove unused CSS (Framer handles)
   - Deferred JavaScript loading

3. **Resource Hints:**
   - Preconnect to external domains (Google Analytics, fonts)
   - Preload critical fonts

4. **Layout Stability:**
   - Explicit width/height on images (prevent CLS)
   - No layout shift from dynamic content
   - Skeleton screens instead of spinners

5. **Caching:**
   - Leverage Framer's edge CDN caching
   - Set appropriate cache headers

**And** All pages meet >90 mobile score (homepage, product pages, pricing, about)
**And** Real-world testing: <2s load time on 4G mobile connection

**Prerequisites:** Epics 1-6 complete

**Technical Notes:**
- Test with Lighthouse CI (command-line) for consistent results
- Test on real mobile devices (iOS Safari, Android Chrome)
- Use WebPageTest for detailed waterfall analysis
- Focus on mobile performance (62.54% of traffic)
- Framer handles most optimizations automatically, verify implementation
- If Framer limits optimization, consider CDN for images (Cloudflare, Imgix)

---

### Story 7.4: Accessibility Audit & WCAG 2.1 AA Compliance

As a **user with accessibility needs**,
I want **the website to be fully accessible via keyboard, screen reader, and assistive technologies**,
So that **I can navigate and use the site without barriers**.

**Acceptance Criteria:**

**Given** All pages are complete (Epics 1-6)
**When** Accessibility audit is performed
**Then** The website achieves:

**And** **Lighthouse Accessibility Score: 100**

**And** **Keyboard Navigation:**
- All interactive elements accessible via Tab key
- Focus indicators clearly visible (outline or highlight)
- Logical tab order (left-to-right, top-to-bottom)
- Enter key activates buttons/links
- Esc key closes modals/menus
- Arrow keys navigate carousels (optional enhancement)

**And** **Screen Reader Support:**
- Semantic HTML used throughout (nav, main, article, section, footer)
- All images have descriptive alt tags (not "image" or blank)
- ARIA labels for icon-only buttons (e.g., "Open mobile menu", "Toggle dark mode")
- ARIA live regions for dynamic content (e.g., form success messages)
- Skip-to-content link for bypassing navigation

**And** **Color Contrast:**
- All text meets 4.5:1 ratio (normal text)
- Large text (18pt+) meets 3:1 ratio
- Interactive elements (buttons, links) have sufficient contrast
- Both light and dark modes pass contrast checks

**And** **Forms Accessibility:**
- Labels associated with inputs (for attribute)
- Error messages announced to screen readers
- Required fields indicated visually and programmatically (required attribute)
- Placeholder text does not replace labels

**And** **Media Accessibility:**
- Video embeds have captions/transcripts (if applicable in future)
- Auto-playing media is avoidable (no auto-play without user action)

**And** **Manual Testing:**
- VoiceOver (iOS/Mac) testing: All content navigable
- TalkBack (Android) testing: All content navigable
- Keyboard-only testing: All actions achievable
- High contrast mode: Site remains usable

**Prerequisites:** Epics 1-6 complete

**Technical Notes:**
- Use axe DevTools browser extension for automated accessibility testing
- Manual testing required (automated tools catch only ~30-40% of issues)
- Common issues: Missing alt tags, poor contrast, no keyboard focus
- WCAG AA is legal requirement in many jurisdictions
- Accessibility improves SEO (semantic HTML, alt tags)
- Reference: https://www.w3.org/WAI/WCAG21/quickref/

---

### Story 7.5: Cross-Browser Testing & Final QA

As a **website owner**,
I want **the site to work flawlessly across all major browsers and devices**,
So that **all users have a consistent, bug-free experience regardless of their platform**.

**Acceptance Criteria:**

**Given** All features are implemented (Epics 1-7)
**When** Cross-browser testing is performed
**Then** The website works correctly on:

**And** **Desktop Browsers (Latest Versions):**
- Chrome (Windows, Mac)
- Safari (Mac)
- Firefox (Windows, Mac)
- Edge (Windows)

**And** **Mobile Browsers:**
- Safari (iOS 15+)
- Chrome (Android 11+)
- Samsung Internet (Android)

**And** **Tablet Browsers:**
- Safari (iPad)
- Chrome (Android tablets)

**And** **Testing Checklist Per Browser:**
1. **Visual Consistency:** Layout, fonts, colors match design
2. **Navigation:** All menus, links work correctly
3. **Forms:** Inputs, validation, submission work
4. **Animations:** Smooth, no jank or glitches
5. **Responsive Breakpoints:** Mobile, tablet, desktop layouts correct
6. **Images:** Load correctly, no broken images
7. **Performance:** Pages load quickly (<2s on good connection)
8. **JavaScript:** All interactive features work (toggles, accordions, carousels)

**And** **Critical User Flows Tested:**
1. Homepage → Product page → Play Store download
2. Homepage → Pricing page → Play Store download
3. Task Manager waitlist signup
4. Dark mode toggle
5. Mobile menu navigation
6. FAQ accordion expansion
7. Screenshot gallery lightbox

**And** **Bug Fixes:**
- All identified bugs documented and fixed
- Retested after fixes

**And** **Final QA Checklist:**
- [ ] All links work (no 404s)
- [ ] All images load correctly
- [ ] All forms submit successfully
- [ ] All CTAs link to correct destinations
- [ ] Spelling/grammar checked across all pages
- [ ] Social media links point to correct profiles
- [ ] Play Store links tested on mobile devices
- [ ] Contact form receives submissions
- [ ] Analytics tracking confirmed in GA4
- [ ] Lighthouse scores meet targets (>90 performance, 100 accessibility)
- [ ] SEO meta tags present on all pages
- [ ] Schema markup validated

**Prerequisites:** All previous stories in Epic 7 complete

**Technical Notes:**
- Use BrowserStack or LambdaTest for cross-browser testing
- Test on real devices when possible (especially iOS Safari)
- Safari often has different behavior than Chrome (WebKit vs Chromium)
- Samsung Internet has unique quirks (test if significant user base)
- Document browser-specific bugs and workarounds
- Final QA should be performed by someone other than developer (fresh eyes)

---

<!-- End Epic 7 -->

---

## Epic Breakdown Summary

**Total Epics:** 7
**Total Stories:** 38

**Epic Distribution:**
- Epic 1: Foundation & Setup (6 stories)
- Epic 2: Homepage (5 stories)
- Epic 3: Product Landing Pages (9 stories)
- Epic 4: Unified Pricing Page (4 stories)
- Epic 5: About & Supporting Pages (3 stories)
- Epic 6: SEO & Analytics Infrastructure (4 stories)
- Epic 7: Optimization & Polish (5 stories)

**Sequential Dependencies:**
- Epic 1 must complete before all others (foundation)
- Epics 2-5 can be developed in parallel after Epic 1
- Epic 6 can begin once content pages exist (ideally after Epics 2-5)
- Epic 7 is final polish (requires all content complete)

**Suggested Implementation Order:**
1. **Week 1:** Epic 1 (Foundation & Setup)
2. **Week 2:** Epic 2 (Homepage) + Epic 3 (Product Pages) - parallel development
3. **Week 3:** Epic 4 (Pricing) + Epic 5 (About) + Epic 6 (SEO/Analytics) - parallel
4. **Week 4:** Epic 7 (Optimization & Polish) + final QA

**PRD Requirements Coverage:**
- All 8 Functional Requirements (FR-1 through FR-8) covered across epics
- All Non-Functional Requirements (Performance, Security, Accessibility, Integration) addressed in Epic 7
- Success metrics tracked via Epic 6 (Analytics)
- 2025 design trends implemented in Epic 7

**Next Steps:**
1. Review and approve this epic breakdown
2. Run `/bmad:bmm:workflows:create-architecture` for technical architecture definition
3. Begin implementation with Epic 1 using `/bmad:bmm:workflows:create-story` for individual story plans

---

_For implementation: Use the `create-story` workflow to generate individual story implementation plans from this epic breakdown._
