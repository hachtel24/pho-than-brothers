# BLUEPRINT: PHO THAN BROTHERS HIGH-CONVERSION WEBSITE

## 1. Architectural Constraints
- **Framework Target:** Static HTML5, Vanilla CSS, and modern JavaScript. Highly optimized for Core Web Vitals, fast mobile loading, and zero layout shifts.
- **Styling:** Vanilla CSS with custom property variables defining a premium dark theme.
  - Background: Black / Deep Slate (`#0B0B0C` and `#141416`)
  - Accent Red (matching logo): `#D32F2F`
  - Accent Navy/Blue (matching logo, adjusted for dark background readability): `#4F83CC` (or `#3A86C8`)
  - Text: Crisp off-white/cream (`#F3F3F5` and `#A1A1A6` for secondary text)
  - Typography: Serif headers (Google Fonts 'Playfair Display' or 'Lora') matching the logo style, combined with clean sans-serif body text ('Inter' or 'Outfit').
- **Brand Consistency:** Embed the brand logo lock-up image (`assets/logo.png`) consistently in the header navigation and the footer on all pages.
- **SEO & Schema Integration:** Hardcoded JSON-LD structured data in the HTML `<head>` containing `FoodEstablishment` / `Restaurant` and multiple `location` elements matching the six Pho Than Brothers spots.
- **Responsiveness:** Mobile-first layout with smooth-scrolling navigation, sticky header/floating action menu, and high-performance assets.

## 2. Dependency & Impact Graph
- `blueprints/001_pho_than_brothers_website.md` -> [NEW] Architectural blueprint plan.
- `index.html` -> [NEW] Core markup, structural grid, menu sections, contact forms, and JSON-LD SEO schema.
- `style.css` -> [NEW] Theme variables, layout styles, premium typography (Google Fonts 'Outfit' and 'Playfair Display'), interactive transitions.
- `app.js` -> [NEW] Dynamic interactive tab filtering for the menu, location status check (showing if open/closed based on current time), smooth scroll controls, and contact form handling.

## 3. Milestone Checklist
- [ ] **Milestone 1:** Create project files structure and establish the premium typography, CSS reset, and custom properties (color palettes).
- [ ] **Milestone 2:** Implement semantic HTML markup for all components: Hero section, Featured logos, Menu (categorized Pho Bo vs. Others with size selector), Locations list (interactive grid), Contact Form, and Footer.
- [ ] **Milestone 3:** Write CSS layout styling focusing on responsive mobile-first columns, modern CSS Grid/Flexbox, micro-animations for menu items, and high-converting floating action bar.
- [ ] **Milestone 4:** Inject complete JSON-LD Structured Data Schema for local SEO.
- [ ] **Milestone 5:** Write JavaScript logic for interactive menu filtering/tabbing, active menu highlights, and location status checks.
- [ ] **Milestone 6:** Verify page weight, mobile layout, accessibility, and build a local server to test correctness.

## 4. Verification Plan
- **Manual Verification:** Open `index.html` in browser and test responsive behavior, mobile hamburger navigation, interactive menus, and contact form.
- **Structured Data Testing:** Verify JSON-LD structure using schema validator rules.
- **Performance Budget:** Ensure no external frameworks (zero heavy JS dependencies) to load in sub-second speeds.
