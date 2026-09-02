# Implementation Plan - Update VouchLink Information

Update the VouchLink app pages on the website with new information based on the provided app description for Google Play Store review.

## User Review Required

> [!IMPORTANT]
> The update involves specific legal disclaimers and feature descriptions intended for Google Play Store review. I will ensure the "Independent App" status and lack of government affiliation are prominently displayed across all relevant pages.

## Proposed Changes

### VouchLink Component

#### [MODIFY] [index.html](file:///H:/GitHub_Dev/renchise.github.io/vouchlink/index.html)
- Update frontmatter `description` and `tagline`.
- Refine "About VouchLink" to include the "Independent third-party application" phrasing.
- Update the feature checklist to include "Link Organizer" and "CDC & Climate Voucher Management" categories.
- Align the "Independent App" notice with the "IMPORTANT DISCLAIMER" text.

#### [MODIFY] [privacy.html](file:///H:/GitHub_Dev/renchise.github.io/vouchlink/privacy.html)
- Update "Last updated" date to 2 September 2026.
- Update "Personal Information" to explicitly mention no account/registration.
- Update "SMS Permission" to clarify it is user-initiated with a default 365-day look-back.
- Update "Advertising" to include information about complimentary ad-removal codes.
- Add "Private Voucher Links & Sharing" section explaining local storage and user-initiated sharing risks.
- Update "Cloud Storage" to confirm no synchronization.

#### [MODIFY] [security.html](file:///H:/GitHub_Dev/renchise.github.io/vouchlink/security.html)
- Update "Last updated" date to 2 September 2026.
- Update "Permissions" section regarding SMS import logic.
- Add a new section for "Private Voucher Links & Sharing" emphasizing that data is processed and stored locally and not uploaded to Renchise servers.

#### [MODIFY] [disclaimer.html](file:///H:/GitHub_Dev/renchise.github.io/vouchlink/disclaimer.html)
- Update "Last updated" date to 2 September 2026.
- Align the "Independent App" notice with the provided "IMPORTANT DISCLAIMER".
- Update "Information Accuracy" section with details about page content structure changes and authoritative sources.
- Add "Official Government Information Sources" section with links to RedeemSG, CDC, and Climate Vouchers sites.
- Add "Feature Availability" section (Link Organizer Worldwide vs. Voucher Management for SG).

#### [MODIFY] [support.html](file:///H:/GitHub_Dev/renchise.github.io/vouchlink/support.html)
- Update "Last updated" date to 2 September 2026.
- Ensure contact email and website links are correct.

## Verification Plan

### Manual Verification
- Review the rendered content (if possible via preview tools or local Jekyll build) to ensure formatting is consistent.
- Cross-reference the updated text with the user-provided description to ensure no critical info is missing.
