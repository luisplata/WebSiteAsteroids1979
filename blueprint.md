
# Blueprint: Asteroid 1979 Landing Page

## 1. Overview

This project is a retro-themed, static-first landing page for the game "Asteroid 1979". It is built with Astro.js and styled with Tailwind CSS, designed to be highly performant and SEO-friendly. The website serves as a central hub for the game, providing links to play, legal information, and a future connection to the Google Play Store. It is automatically deployed to GitHub Pages.

---

## 2. Project Outline

### a. Technology Stack

- **Framework**: [Astro.js](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: GitHub Pages via GitHub Actions

### b. Design & Aesthetics

- **Theme**: Retro 8-bit video game.
- **Typography**: `Press Start 2P` for headings and key elements to evoke a classic arcade feel. Sans-serif for body text for readability.
- **Color Palette**: Dark background (`#111`) with a vibrant neon magenta (`--accent`) for interactive elements, creating a high-contrast, "glowing" effect.
- **Layout**: Centered, single-column layout for key content, ensuring mobile-first responsiveness.

### c. Pages & Components

- **`src/layouts/BaseLayout.astro`**: Main layout component providing the basic HTML structure, metadata, and consistent styling for all pages.
- **`src/components/Header.astro`**: Simplified navigation bar. It includes links to "Home", "Politica de privacidad", and "Terminos y condiciones".
- **`src/pages/index.astro`**: The main landing page. 
    - Displays the game title, a brief description, and two primary call-to-action buttons: "Jugar Ahora" and "Play Store".
    - The "Play Store" button visibility is dynamically controlled by the `PUBLIC_PLAY_STORE_URL` environment variable.
- **`src/pages/privacy-policy.astro`**: Legal page containing the privacy policy, customized with the developer's information. Essential for app store submissions.
- **`src/pages/terms-and-conditions.astro`**: Legal page containing the terms and conditions, also customized and required for app stores.

### d. Configuration & Deployment

- **`astro.config.mjs`**: 
    - **`site`**: Configured to `https://luisplata.github.io`.
    - **`base`**: Conditionally set to `/WebSiteAsteroids1979` for production builds (`npm run build`) and `/` for local development (`npm run dev`). This ensures correct asset and page routing in both environments.
- **`.github/workflows/deploy.yml`**: 
    - A GitHub Actions workflow that automatically triggers on push to the `main` branch.
    - It installs Node.js, project dependencies (`npm install`), and builds the site (`npm run build`).
    - Finally, it deploys the contents of the `dist/` folder to GitHub Pages.
- **`.env`**: Manages environment variables, specifically `PUBLIC_PLAY_STORE_URL` to easily update the Play Store link without changing code.

---

## 3. Last Change Implemented

**Goal**: Fix an issue where setting a `base` path in `astro.config.mjs` for GitHub Pages deployment broke the local development server's routing.

**Action Taken**:

1.  **Modified `astro.config.mjs`**: The `base` property was updated to be conditional based on the environment.
2.  **Implementation**:
    ```javascript
    const base = process.env.NODE_ENV === 'production' ? '/WebSiteAsteroids1979' : '/';
    ```
3.  **Outcome**: This change allows the local development server (`npm run dev`) to run at the root (`/`) as expected, while production builds (`npm run build`) correctly use the `/WebSiteAsteroids1979` sub-path for asset and page links on GitHub Pages.
