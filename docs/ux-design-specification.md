# tidox-landing-page UX Design Specification

_Created on 2025-11-05 by etido_
_Generated using BMad Method - Create UX Design Workflow v1.0_

---

## Executive Summary

**Project Vision:** Transform tidox.online from a single-product landing page into an exceptional multi-product portfolio that commands attention, builds trust instantly, and makes every visitor understand: this is a company that builds the future.

**Target Users:** Tech-savvy early adopters, IPTV enthusiasts, content creators seeking privacy, and productivity enthusiasts who value simplicity

**Platform:** Web - Marketing/Portfolio Site (Framer-based)

**Core Experience:** The ONE thing users must feel: **"This company gets it. They respect my privacy, my time, and my intelligence."**

---

## 1. Design System Foundation

### 1.1 Design System Choice

**Selected: shadcn/ui with Tailwind CSS**

**Rationale:**
- Modern, customizable, Tailwind-based — perfect for 2025 aesthetics
- Unstyled primitives give complete control for brand uniqueness
- Accessibility built-in (Radix UI foundation)
- Works seamlessly with Framer's React-based architecture
- Fast implementation while maintaining high quality
- Clean, minimal by default — aligns with "clarity over cleverness" principle

**What it provides:**
- Component library: Buttons, forms, modals, cards, navigation
- Accessibility: WCAG 2.1 AA compliant out of the box
- Theming: CSS variables for easy customization
- Responsive patterns: Mobile-first utilities
- Icon system: Lucide React icons

**Custom components needed:**
- Product showcase cards (hero section)
- Pricing comparison tables
- Interactive screenshot galleries
- Testimonial carousels
- Mega-menu navigation

---

## 2. Core User Experience

### 2.1 Defining Experience

**The Core Experience:**
"Landing on tidox.online should feel like discovering a company that respects you — your privacy, your time, your intelligence. Every element communicates: modern technology meets human values."

**Primary Actions:**
1. **Product Discovery** - Users instantly see all three apps and their unique value
2. **Trust Building** - Social proof and company credibility established in seconds
3. **Conversion Decision** - Clear path from free to premium with transparent value

**What makes this unique:**
Unlike competitors who hide behind marketing fluff, Tidox leads with substance:
- **Privacy-first** messaging (Offline Transcript's on-device processing)
- **Multi-product credibility** (three distinct, innovative apps)
- **Technical excellence** (VR support, edge AI computing)
- **Transparent pricing** (no games, no hidden costs)

### 2.2 Novel UX Patterns

**No novel patterns required.**

This project leverages established, proven UX patterns:
- Multi-product navigation (Atlassian, Asana model)
- Freemium pricing comparison (SaaS best practices)
- Product landing pages (App store patterns)
- Social proof integration (Standard e-commerce)

**Innovation lies in execution quality, not pattern invention.**

### 2.3 Core Experience Principles

**Speed:** Fast. Sub-2-second loads are non-negotiable. Users abandon slow sites.

**Guidance:** Minimal hand-holding. Target audience is tech-savvy — respect their intelligence.

**Flexibility:** Balanced. Clear paths to key actions, but users can explore freely.

**Feedback:** Subtle and sophisticated. Micro-interactions that delight without distracting.

---

## 3. Visual Foundation

### 3.1 Color System

**Primary Brand Identity:** Modern, professional, trustworthy, tech-forward

**Color Theme: "Tech Trust Blue"**

**Semantic Color Palette:**

**Primary:** `#2563EB` (Blue 600)
- Main actions, key CTAs, brand identity
- Psychological association: Trust, technology, reliability
- Usage: Primary buttons, active nav items, links

**Secondary:** `#7C3AED` (Violet 600)
- Supporting actions, secondary CTAs
- Psychological association: Innovation, creativity
- Usage: Secondary buttons, premium badge accents

**Success:** `#10B981` (Emerald 600)
- Positive feedback, checkmarks, free tier indicators
- Usage: Feature checkmarks, success messages

**Warning:** `#F59E0B` (Amber 600)
- Attention signals, "Coming Soon" badges
- Usage: Task Manager waitlist, important notices

**Error:** `#EF4444` (Red 600)
- Error states, destructive actions
- Usage: Form validation, delete confirmations

**Neutral Gray Scale:**
- Background: `#FFFFFF` (White) / `#0F172A` (Slate 900 - dark mode)
- Text Primary: `#0F172A` (Slate 900) / `#F8FAFC` (Slate 50 - dark mode)
- Text Secondary: `#64748B` (Slate 500)
- Borders: `#E2E8F0` (Slate 200)

**Rationale for color choices:**
- Blue conveys trust and technology leadership
- Violet accents add modern sophistication without overwhelming
- Generous contrast ratios ensure accessibility
- Works beautifully in both light and dark modes

**Typography System:**

**Font Families:**
- **Headings:** Inter (Bold weights 600-800)
  - Geometric sans-serif
  - Excellent readability at large sizes
  - Modern, tech-forward aesthetic

- **Body:** Inter (Regular 400, Medium 500)
  - Same family ensures cohesion
  - Optimized for screen reading
  - Wide character set for future localization

- **Monospace:** JetBrains Mono (Code snippets, technical details)
  - Developer-friendly
  - Not heavily used but available

**Type Scale:**
- H1: 3.5rem / 56px (Bold 700) - Hero headlines
- H2: 2.5rem / 40px (Bold 700) - Section headers
- H3: 2rem / 32px (Semibold 600) - Subsection headers
- H4: 1.5rem / 24px (Semibold 600) - Card titles
- Body Large: 1.125rem / 18px (Regular 400) - Hero subheadings
- Body: 1rem / 16px (Regular 400) - Primary content
- Body Small: 0.875rem / 14px (Regular 400) - Captions, metadata
- Tiny: 0.75rem / 12px (Medium 500) - Labels, tags

**Line Heights:**
- Headings: 1.2 (tight for impact)
- Body: 1.6 (comfortable reading)
- Small text: 1.4 (compact but readable)

**Spacing and Layout Foundation:**

**Base Unit:** 4px (0.25rem Tailwind scale)

**Spacing Scale:**
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)

**Layout Grid:**
- 12-column grid (desktop)
- 4-column grid (mobile)
- Max container width: 1280px (centered)

**Breakpoints:**
- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

---

## 4. Design Direction

### 4.1 Chosen Design Approach

**Selected Direction: "Spacious Modern"**

**Layout Decisions:**
- **Navigation:** Top navigation bar (sticky) with mega-menu dropdown for products
- **Content structure:** Single-column focus (desktop), generous white space
- **Content organization:** Card-based for products, sections clearly separated

**Hierarchy Decisions:**
- **Visual density:** Spacious (breathing room builds premium feel)
- **Header emphasis:** Bold, oversized headlines with generous padding
- **Content focus:** Imagery + text balanced (product screenshots showcase capability)

**Interaction Decisions:**
- **Primary action pattern:** Direct CTAs to Play Store (no modals, respect user's flow)
- **Information disclosure:** Progressive (key info first, details accessible via expand/scroll)
- **User control:** Guided but flexible (clear paths, but users can explore)

**Visual Style Decisions:**
- **Weight:** Balanced (clean but not sterile, visual interest without clutter)
- **Depth cues:** Subtle elevation (cards lift slightly on hover, shadows suggest layers)
- **Border style:** Subtle (1px borders on light backgrounds, none on dark mode)

**Rationale:**
This direction embodies Apple-level simplicity: every pixel serves a purpose. Generous white space signals confidence and quality. Users immediately understand the structure. Mobile-optimized from the start (62.54% mobile traffic). Fast loading and accessibility-first architecture.

**Key Design Patterns:**

**Homepage:**
- Hero: Full-width, centered content, rotating product showcase or split-screen
- Product grid: 3 equal-prominence cards with hover lift effect
- Sections separated by generous padding (6rem vertical)
- Floating "Download" CTA appears on scroll (mobile)

**Product Pages:**
- Hero: Large product screenshot left, content right (desktop) / stacked (mobile)
- Features: Grid of icon + title + description cards
- Screenshot gallery: Horizontal scroll on mobile, grid on desktop
- Free vs Premium: Sticky comparison table headers

**Pricing Page:**
- 6-column layout: 3 products × 2 tiers
- Monthly/annual toggle above grid
- Feature lists with checkmarks
- Responsive: horizontal scroll on mobile

**Navigation:**
- Fixed top bar with logo left, menu items right
- Products mega-menu: Grid of 3 product cards with icons
- Mobile: Hamburger menu slides in from left
- Dark mode toggle in top-right corner

---

## 5. User Journey Flows

### 5.1 Critical User Paths

**Journey 1: Discovery via Search → Product Page → Download**

**User Goal:** Find solution for specific need (IPTV player, transcription, task manager)

**Flow:**

**Step 1: SEO Landing (Product Page)**
- User sees: Hero with large screenshot + headline emphasizing value prop
- User does: Reads headline, scans features section
- System responds: Clear visual hierarchy guides eye to key benefits

**Step 2: Feature Exploration**
- User sees: 4-6 feature cards with icons and descriptions
- User does: Identifies features matching their needs
- System responds: Icons and concise copy make scanning fast

**Step 3: Pricing Evaluation**
- User sees: Free vs Premium comparison table
- User does: Assesses what's included in free tier
- System responds: Clear checkmarks show feature availability

**Step 4: Screenshot Gallery**
- User sees: 5+ screenshots showing app interface
- User does: Swipes through gallery (mobile) or clicks thumbnails (desktop)
- System responds: Lightbox view for detailed inspection

**Step 5: Download Decision**
- User sees: Play Store badges with version indicators (Free/Pro)
- User does: Taps "Download Free" to try app
- System responds: Opens Play Store in new tab

**Decision Points:**
- After features: Does free tier meet needs? → Yes = Download, No = Check premium
- After screenshots: Does interface look good? → Yes = Continue, No = Check FAQ
- After pricing: Worth premium cost? → Maybe, bookmark for later

**Error States:**
- Broken Play Store link → Show fallback "View on Google Play" text link
- Slow image loading → Show skeleton screens, not broken images

**Success State:**
- Download clicked → Brief success message: "Opening Play Store..."
- User may explore other products (cross-sell opportunity)

---

**Journey 2: Homepage Discovery → Multi-Product Exploration → Pricing → Download**

**User Goal:** Evaluate company and multiple products

**Flow:**

**Step 1: Homepage Arrival**
- User sees: Hero with "Innovative Mobile Apps for Modern Life" + rotating product showcase
- User does: Scrolls to product grid
- System responds: Smooth scroll animations as content enters viewport

**Step 2: Product Grid Exploration**
- User sees: 3 cards with icons, names, taglines, key features
- User does: Hovers over cards (desktop) for additional info or taps "Learn More"
- System responds: Card lifts slightly on hover, reveals extra details

**Step 3: Product Page Navigation**
- User sees: Full product page (per Journey 1)
- User does: Reads features, checks screenshots
- System responds: Breadcrumb or back button to return to homepage

**Step 4: Cross-Product Discovery**
- User sees: "Explore other products" section at bottom of product page
- User does: Clicks another product card
- System responds: Navigates to second product page

**Step 5: Unified Pricing Page**
- User sees: Side-by-side comparison of all products' free and premium tiers
- User does: Toggles monthly/annual, compares features
- System responds: Smooth price animation on toggle, clear visual hierarchy

**Step 6: Download Decision**
- User sees: CTAs for each product/tier
- User does: Chooses product and tier, clicks download
- System responds: Opens Play Store

**Decision Points:**
- After homepage: Interested in one product or multiple? → Multi-product users have higher lifetime value
- After first product page: Satisfied or curious about others? → Cross-product links encourage exploration
- At pricing page: Which tier and product? → Comparison format helps decision

**Error States:**
- If user confused about differences → FAQ section addresses common questions

**Success State:**
- User downloads 2+ apps → High-value user, company credibility established

---

**Journey 3: Play Store → Website (Credibility Check) → Return to Download**

**User Goal:** Verify company legitimacy before downloading

**Flow:**

**Step 1: Play Store Discovery**
- User sees: Tidox app on Play Store
- User does: Clicks website link in app listing
- System responds: Website opens (homepage or product page)

**Step 2: Credibility Assessment**
- User sees: Multi-product homepage showing 3 apps, professional design
- User does: Checks "About" page, reads company mission
- System responds: About page shows developer expertise, philosophy

**Step 3: Social Proof Validation**
- User sees: Aggregate download counts (50K+), Play Store ratings
- User does: Reads user testimonials
- System responds: Testimonial carousel shows real user feedback

**Step 4: Trust Building**
- User sees: "Why Choose Tidox" section (privacy-first, modern tech, freemium, active development)
- User does: Assesses value propositions
- System responds: Icons and concise copy communicate quickly

**Step 5: Return to Download**
- User sees: "Download" CTAs throughout site
- User does: Clicks CTA or returns to Play Store
- System responds: Reinforces decision with final trust signal

**Decision Points:**
- Homepage credibility: Does site look professional? → Yes = Continue, No = Leave
- About page: Does company seem legitimate? → Yes = Download, No = Research more
- Multi-product presence: Signals capability and long-term viability

**Success State:**
- User downloads with confidence
- May bookmark website for future premium upgrade

---

## 6. Component Library

### 6.1 Component Strategy

**From shadcn/ui (Design System):**
- Button (variants: primary, secondary, ghost, destructive)
- Card (product cards, feature cards)
- Dialog/Modal (lightbox for screenshots)
- Dropdown Menu (products mega-menu)
- Accordion (FAQ sections)
- Badge (premium, coming soon, version indicators)
- Form components (Task Manager waitlist)
- Toggle (monthly/annual pricing)

**Custom Components:**

**1. ProductShowcaseCard**
- **Purpose:** Showcase individual products on homepage grid
- **Anatomy:**
  - Product icon (SVG, 64px)
  - Product name (H4, bold)
  - One-line tagline (Body small, muted color)
  - 3 key features (bulleted list with checkmark icons)
  - "Learn More" CTA button (primary style)
- **States:**
  - Default: Clean card with subtle border
  - Hover: Lifts 4px with shadow, CTA button color shifts
  - Active: Border color changes to primary
  - Loading: Skeleton screen placeholder
- **Variants:**
  - Standard (homepage)
  - Compact (mega-menu dropdown)
- **Behavior:**
  - Hover: Scale 1.02, lift shadow
  - Click: Navigate to product page
- **Accessibility:**
  - ARIA role: article
  - Keyboard: Focusable, Enter to navigate
  - Screen reader: Announces product name + tagline

**2. PricingComparisonTable**
- **Purpose:** Display free vs premium features for all products
- **Anatomy:**
  - Column headers: Free | Premium (per product)
  - Feature rows with checkmarks/X marks
  - CTA buttons at bottom of each column
  - Monthly/annual toggle above table
- **States:**
  - Default: Clean table with alternating row colors
  - Monthly/Annual: Smooth price transition animation
  - Hover (row): Background highlight
  - Sticky: Column headers stick on scroll
- **Variants:**
  - Full (pricing page: 6 columns)
  - Simplified (product page: 2 columns for that product only)
- **Behavior:**
  - Toggle: Prices animate to new values
  - Scroll: Headers remain visible
  - Mobile: Horizontal scroll with shadow indicators
- **Accessibility:**
  - ARIA role: table with proper thead/tbody
  - Keyboard: Tab through features
  - Screen reader: Row and column headers announced

**3. ScreenshotGallery**
- **Purpose:** Showcase app interface screenshots
- **Anatomy:**
  - Main display area (large screenshot)
  - Thumbnail strip (5+ thumbnails)
  - Navigation arrows (prev/next)
  - Lightbox view on click
- **States:**
  - Default: Thumbnails in horizontal row
  - Selected: Active thumbnail has border highlight
  - Lightbox: Full-screen overlay with close button
  - Loading: Skeleton placeholders
- **Variants:**
  - Horizontal scroll (mobile)
  - Grid with thumbnails (desktop)
- **Behavior:**
  - Click thumbnail: Updates main display
  - Click main: Opens lightbox
  - Swipe: Navigate screenshots (mobile)
  - Keyboard: Arrow keys navigate
- **Accessibility:**
  - ARIA role: region with label "Screenshot gallery"
  - Alt text: Descriptive for each screenshot
  - Keyboard: Arrow keys + Enter for lightbox

**4. TestimonialCarousel**
- **Purpose:** Display user testimonials with social proof
- **Anatomy:**
  - Quote text (blockquote)
  - User name and role
  - Star rating (if applicable)
  - Product association (Player/Transcript/Task Manager)
  - Navigation dots (indicator)
- **States:**
  - Default: Shows one testimonial at a time
  - Auto-advance: Cycles every 5 seconds
  - Manual: User can click dots or arrows
  - Pause: Hover stops auto-advance
- **Variants:**
  - Single (homepage)
  - Multi-column (pricing page)
- **Behavior:**
  - Auto-advance with fade transition
  - Manual navigation resets timer
  - Pause on hover
- **Accessibility:**
  - ARIA role: region with label "Testimonials"
  - Keyboard: Tab to pause/play control
  - Screen reader: Announces current slide number

**5. ProductMegaMenu**
- **Purpose:** Dropdown navigation showing all products
- **Anatomy:**
  - Trigger: "Products ▼" in nav bar
  - Grid: 3 columns (one per product)
  - Each cell: Icon + Name + Description + CTA
  - Close: Click outside or ESC key
- **States:**
  - Closed: Hidden
  - Open: Fade-in with stagger effect
  - Hover (product): Subtle background highlight
- **Behavior:**
  - Hover trigger: Opens after 200ms delay
  - Click outside: Closes menu
  - ESC key: Closes menu
  - Navigate: Clicking product goes to page
- **Accessibility:**
  - ARIA role: menu with menuitem children
  - Keyboard: Arrow keys navigate, Enter selects
  - Screen reader: Announces submenu opened

---

## 7. UX Pattern Decisions

### 7.1 Consistency Rules

**Button Hierarchy:**

**Primary Action:**
- Style: Solid fill, primary blue background, white text
- Usage: Main CTAs ("Download Free", "Get Premium", "Learn More")
- Prominence: High

**Secondary Action:**
- Style: Outline, primary blue border, blue text
- Usage: Supporting CTAs ("View Pricing", "Explore Apps")
- Prominence: Medium

**Tertiary Action:**
- Style: Ghost (no border), muted text
- Usage: Less important actions ("Learn More" in footer)
- Prominence: Low

**Destructive Action:**
- Style: Solid fill, red background, white text
- Usage: Rarely used (no destructive actions on marketing site)
- Prominence: High but contextual

---

**Feedback Patterns:**

**Success:**
- Pattern: Inline toast notification (top-right corner)
- Duration: 3 seconds auto-dismiss
- Example: "Waitlist signup successful!"

**Error:**
- Pattern: Inline message below form field
- Persistent until corrected
- Example: "Please enter a valid email address"

**Warning:**
- Pattern: Banner at top of page (if critical)
- Example: (Rare on marketing site)

**Info:**
- Pattern: Tooltip on hover/tap
- Example: Explaining technical features

**Loading:**
- Pattern: Skeleton screens (not spinners)
- Example: Product cards, screenshot gallery

---

**Form Patterns:**

**Label position:** Above input field
**Required field indicator:** Asterisk (*) after label
**Validation timing:** onBlur (after user leaves field)
**Error display:** Inline below field with red text + icon
**Help text:** Caption below field in muted color

---

**Modal Patterns:**

**Size variants:**
- Small: Confirmation dialogs (rare)
- Medium: Default
- Large: Lightbox for screenshots
- Full-screen: Mobile only

**Dismiss behavior:**
- Click outside: Closes modal
- ESC key: Closes modal
- Explicit close button: Top-right X

**Focus management:**
- Auto-focus: First interactive element
- Trap focus: Can't tab outside modal

**Stacking:**
- Only one modal at a time (no stacking)

---

**Navigation Patterns:**

**Active state indication:**
- Desktop: Blue underline below nav item
- Mobile: Blue highlight in menu

**Breadcrumb usage:**
- Not used (flat hierarchy)

**Back button behavior:**
- Browser back works as expected
- No custom back button needed

**Deep linking:**
- All pages have clean URLs
- Example: /products/player, /pricing

---

**Empty State Patterns:**

**First use:**
- Guidance: "Welcome! Explore our products below."
- CTA: "Start with Tidox Player"

**No results:**
- Message: "No results found. Try different keywords."
- Helpful: Link to popular products

**Cleared content:**
- N/A (no user-generated content on marketing site)

---

**Confirmation Patterns:**

**Delete:**
- N/A (no deletion on marketing site)

**Leave unsaved:**
- N/A (no forms with significant unsaved data except waitlist, which is single-field)

**Irreversible actions:**
- N/A (all actions are low-consequence)

---

**Notification Patterns:**

**Placement:**
- Desktop: Top-right corner toast
- Mobile: Top of screen (below nav)

**Duration:**
- Success: 3 seconds auto-dismiss
- Error: Persistent until dismissed or corrected

**Stacking:**
- Max 3 notifications visible
- Older ones fade out as new arrive

**Priority levels:**
- Success: Green background
- Error: Red background
- Info: Blue background

---

**Search Patterns:**

**N/A for MVP** (no search functionality on marketing site)

Future consideration:
- Product search in mega-menu
- Blog/content search (Phase 2)

---

**Date/Time Patterns:**

**Format:**
- Relative for recent: "2 days ago"
- Absolute for older: "Jan 15, 2025"

**Timezone handling:**
- N/A (no user-specific date/time on marketing site)

**Pickers:**
- N/A (no date input on marketing site)

---

## 8. Responsive Design & Accessibility

### 8.1 Responsive Strategy

**Target Devices:** Web (desktop, tablet, mobile)

**Desktop (1025px+):**
- Multi-column layouts (3-column product grid)
- Side navigation in mega-menu
- Hover effects enabled
- Generous padding and white space

**Tablet (769px - 1024px):**
- 2-column layouts where applicable
- Touch-optimized interactions
- Portrait: Similar to mobile
- Landscape: Similar to desktop

**Mobile (320px - 768px):**
- Single-column layouts
- Bottom navigation or hamburger menu
- Touch targets minimum 44x44px
- Reduced padding for screen real estate
- Horizontal scroll for screenshot gallery

**Breakpoint Strategy:**

**Mobile (max 768px):**
- 4-column grid
- Navigation: Hamburger menu
- Product grid: Single column stack
- Pricing table: Horizontal scroll
- Hero: Stacked (image above text)

**Tablet (769-1024px):**
- 8-column grid
- Navigation: Top bar with full menu
- Product grid: 2 columns
- Pricing table: Full width or horizontal scroll
- Hero: Split (image left, text right)

**Desktop (1025px+):**
- 12-column grid
- Navigation: Top bar with mega-menu
- Product grid: 3 columns
- Pricing table: Full 6-column display
- Hero: Split with generous spacing

**Adaptation Patterns:**

- **Navigation:** Desktop = mega-menu | Mobile = hamburger + slide-in
- **Sidebar:** N/A (no sidebar)
- **Cards/Lists:** Grid collapses: 3-col → 2-col → 1-col
- **Tables:** Pricing table = horizontal scroll on mobile with shadow indicators
- **Modals:** Full-screen on mobile, centered overlay on desktop
- **Forms:** Task Manager waitlist = full-width input on mobile

---

### 8.2 Accessibility Strategy

**Compliance Target:** WCAG 2.1 Level AA

**Rationale:** Legal requirement for public websites, inclusive design mandate, reputation protection for privacy-first brand

**Key Requirements:**

**Color Contrast:**
- Text vs background: 4.5:1 ratio (normal text)
- Large text (18px+): 3:1 ratio
- Non-text elements: 3:1 ratio (buttons, icons)

**Keyboard Navigation:**
- All interactive elements accessible via Tab
- Focus indicators visible (blue outline)
- Logical tab order matches visual hierarchy
- ESC key closes modals and menus
- Enter/Space activates buttons

**Focus Indicators:**
- 2px solid blue outline on focus
- Offset by 2px from element
- Never hidden or suppressed

**ARIA Labels:**
- Buttons: Clear aria-label when icon-only
- Links: Descriptive text or aria-label
- Forms: Labels associated with inputs
- Regions: Landmarks for navigation

**Alt Text:**
- Product screenshots: Descriptive ("Tidox Player interface showing IPTV playlist")
- Icons: Decorative icons have aria-hidden="true"
- Logos: Alt text is "Tidox"

**Form Labels:**
- Visible labels for all inputs
- Placeholder text is supplementary, not primary
- Error messages linked to inputs with aria-describedby

**Error Identification:**
- Inline error messages below fields
- Icons indicate error state
- Descriptive text explains how to fix

**Touch Target Size:**
- Minimum 44x44px on mobile (WCAG 2.1 Level AA requirement)
- Buttons and links have adequate spacing
- No tiny tap targets

**Testing Strategy:**

**Automated:**
- Lighthouse accessibility audit (target: 100)
- axe DevTools browser extension
- Run on every page before launch

**Manual:**
- Keyboard-only navigation testing
- Tab through entire site, verify all actions accessible
- Test ESC key, Enter key, Space key

**Screen Reader:**
- VoiceOver (macOS/iOS) testing
- Verify semantic HTML structure
- Check ARIA labels and descriptions
- Ensure logical reading order

---

## 9. Implementation Guidance

### 9.1 Completion Summary

**Design System:** shadcn/ui with Tailwind CSS — modern, accessible, customizable foundation

**Visual Foundation:** "Tech Trust Blue" color theme with Inter typography, generous spacing system

**Design Direction:** "Spacious Modern" — clean layouts, bold headlines, subtle interactions, accessibility-first

**User Journeys:** 3 critical flows designed — SEO landing, multi-product exploration, credibility check

**UX Patterns:** 10 consistency rule categories established (buttons, feedback, forms, modals, navigation, etc.)

**Responsive Strategy:** 3 breakpoints with clear adaptation patterns for all device sizes

**Accessibility:** WCAG 2.1 Level AA compliance with automated and manual testing strategy

**What Happens Next:**

**For Designers:**
- Create high-fidelity mockups using this specification
- Build component library in Figma matching shadcn/ui patterns
- Generate all interactive HTML mockups (color themes, design directions)
- Ensure designs meet accessibility contrast ratios

**For Developers:**
- Implement components in Framer using shadcn/ui as foundation
- Apply spacing system and typography scale consistently
- Test responsive behavior at all breakpoints
- Run accessibility audits (Lighthouse, axe) before launch

**For Product Team:**
- All design decisions documented with rationale
- User flows mapped with decision points and error states
- Future enhancement opportunities identified
- Success metrics tied to UX choices

---

## Appendix

### Related Documents

- Product Requirements: `docs/PRD.md`
- Product Brief: `docs/product-brief-tidox-landing-page-2025-11-05.md`
- Brainstorming: `docs/bmm-brainstorming-session-2025-11-05.md`

### Core Interactive Deliverables

_(Interactive HTML visualizations will be generated in follow-up steps)_

### Next Steps & Follow-Up Workflows

This UX Design Specification can serve as input to:

- **Architecture Workflow** - Define technical architecture with UX context
- **Epic & Story Breakdown** - Decompose into implementable development tasks
- **Component Showcase Workflow** - Create interactive component library
- **Figma Design Workflow** - Generate Figma files from specification
- **Interactive Prototype Workflow** - Build clickable HTML prototypes

### Version History

| Date       | Version | Changes                         | Author |
| ---------- | ------- | ------------------------------- | ------ |
| 2025-11-05 | 1.0     | Initial UX Design Specification | etido  |

---

_This UX Design Specification embodies Steve Jobs' philosophy: ruthless simplicity, obsessive attention to detail, and the belief that design is how it works, not just how it looks._

_Every decision serves the user. Every pixel has a purpose. Every interaction respects intelligence._

_The website will make visitors feel: "This company gets it."_
