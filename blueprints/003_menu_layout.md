# BLUEPRINT: PHO THAN BROTHERS PHYSICAL MENU LAYOUT REDESIGN

## 1. Architectural Constraints
- **Framework Target:** Static HTML5, Vanilla CSS, and modern JavaScript.
- **Layout (Physical Menu Alignment):**
  - Grid/Flex columns separating the main menu list (left side) and the pricing/extras box (right side).
  - Order hierarchy matches the real menu: Veggie Pho (V), Chicken Pho (A), Meatball Pho (B), then Beef Pho (C) containing the sub-options 1-14.
  - Right sidebar box matches the layout of the print menu container, including the chef illustration, size pricing, extras, and "each to go" costs.
  - Bottom footnote for the health warning disclaimer.
  - Typography: Arvo (slab-serif) headers and structured line elements.

## 2. Dependency & Impact Graph
- `blueprints/003_menu_layout.md` -> [NEW] Architectural blueprint plan.
- `index.html` -> [MODIFY] Reorder items, inject sidebar menu block.
- `style.css` -> [MODIFY] Style the layout grids, column proportions, and pricing box.

## 3. Milestone Checklist
- [ ] **Milestone 1:** Modify `index.html` structure (re-order items V, A, B, C and sub-options 1-14).
- [ ] **Milestone 2:** Insert the sidebar pricing container into `index.html` with correct prices ($10.95 - $15.95, extras, to-go).
- [ ] **Milestone 3:** Style the menu layout columns and sidebar box in `style.css`.
- [ ] **Milestone 4:** Add the health footnote styling and check responsiveness on mobile viewports.

## 4. Verification Plan
- **Manual Verification:** Open the site locally and compare the menu rendering to the provided menu photograph.
