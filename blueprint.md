
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
    - **Crucially**, it sets the `NODE_ENV: production` environment variable during the `build` step. This forces Astro to use the production `base` path from the config, ensuring all generated links are correct for the GitHub Pages subdirectory.
    - Finally, it deploys the contents of the `dist/` folder to GitHub Pages.
- **`.env`**: Manages environment variables, specifically `PUBLIC_PLAY_STORE_URL` to easily update the Play Store link without changing code.

---

## 3. Last Change Implemented

**Goal**: Create a robust deployment workflow for GitHub Pages that works with a site hosted in a subdirectory, without breaking the local development server.

**Actions Taken**:

1.  **Created `.github/workflows/deploy.yml`**: A new GitHub Actions workflow was created to automate the build and deployment process.
2.  **Configured the Workflow**: The workflow checks out the code, installs all dependencies (`npm install`), and then runs the build command (`npm run build`).
3.  **Forced Production Environment**: The `env: NODE_ENV: production` key was added to the `build` step. This is the critical piece that guarantees Astro uses the `base: '/WebSiteAsteroids1979'` setting from `astro.config.mjs` during the production build.
4.  **Verified `astro.config.mjs`**: Ensured the conditional logic for the `base` path was in place to support both local development and the new production workflow.

**Outcome**: The project now has a fully automated, reliable deployment pipeline. The local environment remains easy to use, and the production site will have correctly formed URLs that work within its GitHub Pages subdirectory.
