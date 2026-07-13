# BLUEPRINT: PHO THAN BROTHERS MINIMALIST REDESIGN

## 1. Architectural Constraints
- **Framework Target:** Static HTML5, Vanilla CSS, and modern JavaScript.
- **Styling (Minimalist, Cardless & Pure Black):**
  - Background: Pure Pitch Black (`#000000`) throughout.
  - Container Layouts: Clean whitespace, elimination of all colored tiles/cards, bordered containers, and complex grids.
  - Typography: Replace standard fonts with Google Fonts `Arvo` (a premium slab-serif matching the logo typography) for headings, combined with simple monospace or minimalist clean sans-serif for secondary items.
  - Form Fields: Borderless input fields (bottom border underline only).
  - Navigation: High-contrast thin border lines instead of floating bars.

## 2. Dependency & Impact Graph
- `blueprints/002_minimalist_redesign.md` -> [NEW] Architectural blueprint plan.
- `index.html` -> [MODIFY] Update Google Font links, clean layout elements.
- `style.css` -> [MODIFY] Replace card layouts, grids, colors, and input boxes with borderless design elements.

## 3. Milestone Checklist
- [ ] **Milestone 1:** Save workspace blueprint and update Google Fonts loaders inside `index.html`.
- [ ] **Milestone 2:** Overhaul `style.css` variables and remove card/box selectors in favor of flat list items.
- [ ] **Milestone 3:** Modify `index.html` markup to convert menu grids into elegant, flat lists with dot leaders (`...`) or clean horizontal space.
- [ ] **Milestone 4:** Re-align location and contact sections to a minimalist list and borderless form inputs.
- [ ] **Milestone 5:** Verify layout responsiveness and check design rendering on local server.

## 4. Verification Plan
- **Manual Verification:** Open `http://localhost:8000` and evaluate the new layout.
- **Performance Budget:** Ensure the site loads instantly with fewer paint operations due to simpler CSS layout rules.
