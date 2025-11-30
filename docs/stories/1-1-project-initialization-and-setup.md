# Story 1.1: Project Initialization and Setup

Status: drafted

## Story

As a **web developer**,
I want **a local development environment with the Landwind template configured and deployed to free hosting**,
So that **I have the technical foundation to build and deploy the multi-product website at zero cost**.

## Acceptance Criteria

1. **Given** I have Git installed and access to tidox.online domain hosting
   **When** I clone the Landwind template and set up the local environment
   **Then** The project runs locally with Tailwind CSS compiling correctly

2. **And** Project structure includes 9 HTML pages: index.html, player.html, transcript.html, task-manager.html, pricing.html, about.html, privacy.html, terms.html, contact.html

3. **And** Tailwind CSS is configured with custom Tidox colors and branding

4. **And** The site is deployed to tidox.online using the domain provider's free hosting tier

5. **And** HTTPS/SSL is active on tidox.online (verified with padlock icon in browser)

## Tasks / Subtasks

- [ ] Task 1: Clone Landwind template and initialize Git repository (AC: #1)
  - [ ] Clone Landwind from GitHub: `git clone https://github.com/themesberg/landwind.git tidox-landing-page`
  - [ ] Navigate to project: `cd tidox-landing-page`
  - [ ] Remove existing Git history: `rm -rf .git`
  - [ ] Initialize new Git repository: `git init`
  - [ ] Create initial commit: `git add . && git commit -m "Initial commit: Landwind template"`

- [ ] Task 2: Set up local development environment (AC: #1)
  - [ ] Install Node.js (if not already installed) - required for Tailwind CLI
  - [ ] Install dependencies: `npm install` (or create package.json if missing)
  - [ ] Install Tailwind CSS: `npm install -D tailwindcss`
  - [ ] Verify Tailwind build works: `npx tailwindcss -i ./src/input.css -o ./css/output.css --watch`
  - [ ] Open index.html in browser to verify template loads

- [ ] Task 3: Create project structure with 9 HTML pages (AC: #2)
  - [ ] Keep index.html from Landwind (will customize later)
  - [ ] Create player.html (copy from index.html as starting point)
  - [ ] Create transcript.html (copy from index.html)
  - [ ] Create task-manager.html (copy from index.html)
  - [ ] Create pricing.html (Landwind includes pricing section, extract to separate page)
  - [ ] Create about.html (new page)
  - [ ] Create privacy.html (new page)
  - [ ] Create terms.html (new page)
  - [ ] Create contact.html (new page with form)
  - [ ] Update navigation in all pages to link to new routes

- [ ] Task 4: Configure Tailwind CSS for Tidox branding (AC: #3)
  - [ ] Open tailwind.config.js
  - [ ] Customize colors in theme.extend.colors:
    - Primary: Tidox brand color (define based on logo)
    - Secondary: Accent color
    - Dark mode colors
  - [ ] Customize fonts if needed (or use Landwind defaults)
  - [ ] Build CSS: `npx tailwindcss -i ./src/input.css -o ./css/output.css --minify`
  - [ ] Verify changes appear on local pages

- [ ] Task 5: Prepare for deployment (AC: #4)
  - [ ] Create .gitignore file (exclude node_modules, .DS_Store, etc.)
  - [ ] Build production CSS: `npx tailwindcss -i ./src/input.css -o ./css/output.css --minify`
  - [ ] Test all pages locally (open each HTML file in browser)
  - [ ] Verify all links work and CSS loads correctly
  - [ ] Create deploy.sh script for FTP/SFTP upload (optional, can use FileZilla)

- [ ] Task 6: Deploy to domain provider's free hosting (AC: #4, #5)
  - [ ] Log in to domain provider's hosting control panel
  - [ ] Locate public_html or www folder (web root)
  - [ ] Upload files via FTP/SFTP or file manager:
    - All .html files (9 pages)
    - css/ folder with output.css
    - js/ folder (if any JavaScript files)
    - assets/ folder with images
  - [ ] Verify DNS is pointed correctly (tidox.online → hosting IP)
  - [ ] Wait for SSL certificate provisioning (automatic with most hosts, 5-30 minutes)
  - [ ] Visit https://tidox.online and verify site loads
  - [ ] Test all 9 pages are accessible

- [ ] Task 7: Verification and testing (AC: #1, #4, #5)
  - [ ] Visit https://tidox.online - verify homepage loads
  - [ ] Check SSL certificate is active (padlock icon, no warnings)
  - [ ] Test all 9 page routes load correctly
  - [ ] Test responsive design (mobile, tablet, desktop)
  - [ ] Verify Tailwind CSS is loading (check styling)
  - [ ] Test dark mode toggle (if included in Landwind)
  - [ ] Run Lighthouse audit (should score >85 initial, will optimize in Epic 7)

## Dev Notes

### Architecture Alignment

**Platform:** Static HTML/CSS/JS with Tailwind CSS
- No frameworks, no build complexity
- Pure static files for FREE hosting
- Tailwind CSS for modern, utility-first styling

**Template:** Landwind (MIT License)
- GitHub: https://github.com/themesberg/landwind
- 993+ stars, proven quality
- Built-in: Hero section, features, pricing, testimonials, FAQ, dark mode
- Flowbite components (Tailwind-based UI library)

**Hosting Configuration:**
- Platform: Domain provider's FREE hosting tier
- Cost: €0/month
- Deployment: FTP/SFTP or file manager upload
- SSL: Automatic (most providers include free Let's Encrypt SSL)
- No CDN needed initially (can add Cloudflare free tier later if needed)

**Technology Stack:**
- HTML5 (semantic markup)
- Tailwind CSS v3+ (utility-first CSS)
- Flowbite (pre-built components)
- Vanilla JavaScript (minimal, no dependencies)
- Node.js (development only, for Tailwind CLI)

### Technical Implementation Notes

**Landwind Template Features:**
- ✅ Responsive design (mobile-first)
- ✅ Dark mode support (built-in with Tailwind dark: classes)
- ✅ Hero section with CTA
- ✅ Feature sections (grid layout)
- ✅ Pricing cards
- ✅ Testimonials section
- ✅ FAQ accordion
- ✅ Footer with links

**Customization Plan:**
1. **Homepage (index.html):** Adapt hero for 3-product showcase (Player, Transcript, Task Manager)
2. **Product Pages:** Use feature section layout for each product's details
3. **Pricing Page:** Expand Landwind's pricing section for 3 products (Free vs Premium)
4. **About/Privacy/Terms:** Simple content pages (minimal styling)
5. **Contact:** Form using Formsubmit.co (free form backend)

**Tailwind CSS Build Process:**
```bash
# Development (watch mode)
npx tailwindcss -i ./src/input.css -o ./css/output.css --watch

# Production (minified)
npx tailwindcss -i ./src/input.css -o ./css/output.css --minify
```

**Deployment Methods:**
1. **FTP/SFTP:** Use FileZilla or similar client
2. **File Manager:** Upload via hosting provider's web interface
3. **Git Deploy:** If hosting provider supports Git deployment
4. **deploy.sh script:** Automate FTP upload with lftp or similar

**Free Hosting Providers (if domain provider doesn't offer free hosting):**
- Netlify (FREE, best option)
- Vercel (FREE)
- GitHub Pages (FREE)
- Cloudflare Pages (FREE)

Note: If using Netlify/Vercel/GitHub Pages, deployment is even simpler:
- Connect Git repository
- Push code → Automatic deployment
- No manual FTP needed

### Prerequisites

- Git installed locally
- Node.js installed (for Tailwind CLI)
- Text editor (VS Code recommended)
- FTP client (FileZilla) or hosting file manager access
- tidox.online domain with hosting access (FTP credentials or control panel login)

### Project Structure Notes

This story establishes the foundational codebase that all subsequent epics build upon:
- **Epic 1:** Foundation & Setup (current epic) - Stories 1.2-1.6 will customize navigation, design system
- **Epic 2:** Homepage (index.html) - Adapt hero and sections for 3 products
- **Epic 3:** Product Landing Pages (player.html, transcript.html, task-manager.html)
- **Epic 4:** Pricing Page (pricing.html) - Expand for 3-product comparison
- **Epic 5:** About & Supporting Pages (about.html, privacy.html, terms.html, contact.html)
- **Epic 6:** SEO & Analytics (add meta tags, schema, GA4)
- **Epic 7:** Optimization & Polish (dark mode refinement, performance, accessibility)

**No conflicts detected** - This is the foundation story.

### Cost Breakdown

**Total Monthly Cost: €0**
- Hosting: €0 (domain provider's free tier or Netlify/Vercel/GitHub Pages)
- Domain: €8-12/year (already owned by etido)
- Tailwind CSS: FREE (MIT License)
- Landwind Template: FREE (MIT License)
- Flowbite Components: FREE (MIT License)
- Forms (Formsubmit.co): FREE tier (50 submissions/month)
- Analytics (Google Analytics 4): FREE
- SSL Certificate: FREE (Let's Encrypt, included with hosting)

**One-Time Setup Costs: €0**
- No paid tools required
- Node.js: FREE
- Git: FREE
- VS Code: FREE
- FileZilla: FREE

### References

- [Source: docs/architecture.md#Project-Initialization]
- [Source: docs/architecture.md#Decision-Summary]
- [Source: docs/architecture.md#Project-Structure]
- [Source: docs/epics.md#Story-1.1]
- [Source: docs/PRD.md#Epic-1-Foundation-Setup]
- [Landwind Template: https://github.com/themesberg/landwind]
- [Tailwind CSS Docs: https://tailwindcss.com/docs]
- [Flowbite Docs: https://flowbite.com/docs]

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

<!-- Agent model name and version will be recorded here during implementation -->

### Debug Log References

<!-- Links to debug logs will be added here during implementation -->

### Completion Notes List

<!-- Dev agent completion notes will be added here after implementation -->

### File List

<!-- Created/modified/deleted files will be listed here after implementation -->
