# Mirik Municipality website (Astro)

A rebuilt, single-page website for Mirik Municipality (Mirik Notified Area Authority), replacing the current WordPress site at mirikmunicipality.com. Every piece of information from the old site is carried over, merged with public research, and kept in one editable file.

## Run it

Requires Node.js 18.20+ (20 or 22 recommended).

```
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # static site in ./dist
npm run preview   # preview the built site
```

`dist/` is plain static HTML, CSS and a little JS. Upload it to any host (Vercel, Netlify, cPanel, the existing server).

## Editing content

All text, names, numbers and links live in `src/data/site.ts`. Change them there; the page updates automatically. Layout is in `src/pages/index.astro`, styles in `src/styles/global.css`.

Before deploying, set `site` in `astro.config.mjs` to the final domain.

## Grievance form

The old site's form fields are kept (name, phone, email, ward, location or holding number, subject, 300-character description, photo upload). By default the form opens the visitor's email app addressed to the municipality. To receive submissions online, set `contact.grievanceEndpoint` in `src/data/site.ts` to a form service URL (Formspree, Netlify Forms, or a script on the municipality's server).

## What was carried over from the old site

- Contacts: +91 6295345636, +91 35422432, mirik_municipality@yahoo.com, Thanaline, Ward No. 3
- Officials: Executive Officer Ajay Kumar Manna (also NULM Nodal Officer), Finance Officer Dipasree Mitra
- Online services and their portal links: Trade Licence (e-District), Birth and Death (Janma-Mrityu Tathya), Building Plan (OBPS). Mutation link was broken on the old site.
- Special projects: AMRUT, Swachh Bharat Mission, NULM, Housing for All (PMAY), CBPHCS
- 1 September 2026 cleanliness fines and the 2023 Solid Waste Management Bye-Laws bin colours
- About content, lake facts, motto (Satyameva Jayate)

## Added from research

Administrative status (board dissolved 19 May 2026, SDO as Administrator), history timeline, census data, AMRUT 2.0 water project figures, STPs and lake desiltation, October 2025 landslide recovery, jurisdiction, other government offices, attractions, transport, health facilities, schools, emergency numbers, Facebook link, map. Sources are listed in the site footer.

## Please confirm with the office before launch

1. Landline number: listed as +91 35422432, which looks short for a full number.
2. Email: old site uses mirik_municipality@yahoo.com; darjeeling.gov.in lists mirikmunicipality@yahoo.com. Which is live?
3. Administrator: Ms. Priyanka Singh, IAS, was posted SDO Mirik in June 2026. Confirm she is still SDO and Administrator.
4. Executive Officer and Finance Officer: confirm both are still in post and their mobiles may be published.
5. Office hours (currently a standard government placeholder).
6. Ward localities: only Wards I, III and IV have sourced localities. Add the rest.
7. Mutation: correct online link, if any.
8. CBPHCS Health Officer recruitment: still open? If so, add the notification and form PDFs to `public/` and link them.
9. Photos: the site uses an illustration. Real photos of the lake, office and town will lift it a lot; add them to `public/`.
10. Social links: the old site showed Twitter, Instagram and WhatsApp icons with no links. Add them if they exist.
