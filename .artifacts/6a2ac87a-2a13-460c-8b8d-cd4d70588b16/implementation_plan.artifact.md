# Header-Centric Brand Redesign

This plan moves the core branding (banner) into the site-wide navigation bar, removes redundant call-to-action buttons, and intensifies the particle effects for a more lively feel.

## User Review Required

> [!IMPORTANT]
> **Major Header Shift:** The `Renchise_banner.webp` will now be the background for the **entire top menu section** on every page. This means the header will be significantly taller than a standard menu bar to ensure the brand artwork is visible.

> [!IMPORTANT]
> **Button Removal:** The "Explore VaultStudio" and "Explore VouchLink" buttons will be removed from the home page. Users will navigate to these apps using the links in the brand-new header menu.

> [!WARNING]
> **Typography Shrink:** Headers will be scaled down again to ensure the content panels don't feel too crowded, especially on smaller screens.

## Proposed Changes

### 1. Global Header with Banner

#### [MODIFY] [navigation.html](file:///H:/GitHub_Dev/renchise.github.io/_includes/navigation.html)
- Change the structure to a tall header that uses `Renchise_banner.webp` as its background.
- Include a specific `#particles-header` container for front-facing motion.
- Position the navigation links (Home, VaultStudio, etc.) at the bottom of this new tall header with high-contrast styling.

#### [MODIFY] [site.css](file:///H:/GitHub_Dev/renchise.github.io/assets/css/site.css)
- **Header Style:** Set `.site-header` to have a responsive aspect-ratio background (using the banner image).
- **Link Contrast:** Apply strong text-shadows and pure white coloring to all menu items.
- **Shrink Headers:**
    - `h1`: `1.15rem` - `1.5rem`.
    - `h2`: `1rem`.
    - `h3`: `0.9rem`.

### 2. Particle Intensification

#### [MODIFY] [default.html](file:///H:/GitHub_Dev/renchise.github.io/_layouts/default.html)
- Increase global background particle density and speed.
- Add initialization logic for the new `#particles-header`.

### 3. Content Cleanup

#### [DELETE] [_includes/hero.html](file:///H:/GitHub_Dev/renchise.github.io/_includes/hero.html)
- Remove the hero banner as it is now part of the navigation.

#### [MODIFY] [_layouts/app-page.html](file:///H:/GitHub_Dev/renchise.github.io/_layouts/app-page.html)
- Remove the `badges` loop and associated styling.
- Ensure the description text fills the remaining space.

## Verification Plan

### Manual Verification
- **Header Check:** Verify the brand banner is visible at the top of every page.
- **Link Legibility:** Ensure all navigation links are clearly readable against the fire/blue banner.
- **Mobile View:** Check that the tall header scales correctly on mobile and doesn't push content too far down.
- **Particles:** Confirm particles are noticeably "lively" in the header area.
