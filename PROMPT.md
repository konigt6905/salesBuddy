
# System: # Role and Objective
- Create a sophisticated, production-ready SaaS landing page called 'Sales Buddy' suitable for deployment on GitHub Pages.

# Instructions
- **Strictly** follow all visual, design, and framework specifications described in the file `LANDING_PAGE_DESIGN_SYSTEM.md`.
- Develop a high-complexity front-end that prioritizes visual storytelling through advanced animations (scroll-triggered entrances, parallax effects, sticky scrolling sections, and dynamic data visualization).
- The page must demonstrate extensive functionality using comprehensive mock data to simulate a live AI-powered dashboard environment.

## App Description
- **Core Concept:** "Sales Buddy" is an AI co-pilot that overlays CRM data to visualize revenue, predict deal outcomes, and calculate growth potential.
- **Content Source:** You must use the file `APP_DESCRIPTION.md` for all copywriting, specific feature descriptions, calculator logic, and data structure definitions.
- **Mock Data Implementation:**
  - Use `sales_data.json` (to be created): Must contain complex datasets for the "Living Pipeline" and "Revenue History" charts.
  - Use `active_deals.json` (to be created): Must contain the list of deals with "Confidence Scores" and "AI Insights" as described in `APP_DESCRIPTION.md`.
  - Use `team_stats.json` (to be created): Data for the leaderboard visualization.
- **Key Interactive Elements to Build:**
  - **The Quota Crusher Calculator:** A fully functional JS-based revenue calculator (Inputs: Leads, Conversion, Deal Size) as defined in `APP_DESCRIPTION.md`.
  - **Dynamic Charts:** Use a charting library (e.g., Chart.js or Recharts) or SVG animations to render the sales data dynamically when the user scrolls into view.

# Context
- All styles, color palettes, design patterns (Glassmorphism/Neon), animation guidelines, and framework requirements are detailed in `LANDING_PAGE_DESIGN_SYSTEM.md`.
- All text content, specific feature logic, and data schemas are detailed in `APP_DESCRIPTION.md`.

# Output Format
- Deliver a complete, deployable repository structure suitable for GitHub Pages, including:
  - All application source files (HTML/CSS/JS or React/Tailwind codebase).
  - All mock data files in JSON format (`sales_data.json`, `active_deals.json`, `team_stats.json`).
  - Reference or include `LANDING_PAGE_DESIGN_SYSTEM.md` and `APP_DESCRIPTION.md` to ensure context is preserved.
- If `LANDING_PAGE_DESIGN_SYSTEM.md` or `APP_DESCRIPTION.md` is missing or empty, halt the process and output a clear error message.
- Ensure code includes comments explaining the animation logic (e.g., Intersection Observers or Framer Motion variants).

# Output Verbosity
- For explanations: Use at most 2 short paragraphs.
- For bulleted responses: Use no more than 6 bullets, each 1 line maximum.
- For code comments: Keep concise (≤2 lines per function).

# Stop Conditions
- Finish when a fully interactive, animation-rich landing page structure is produced with all mock data integrated.
- If required specification files are missing, output a specific error message and halt.

***

### Important: File Content Reminder

For this prompt to work perfectly, make sure you have the **`APP_DESCRIPTION.md`** file created with the English content we generated in the previous step.

**Do you want me to give you the full raw text for the `APP_DESCRIPTION.md` file now, so you can just copy-paste it?**