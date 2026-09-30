# Mirik Municipality: Team Guide

Shared reference for the 4 developers (and their AI agents) working on this site in parallel. Read this first, then open only the files for your own page. You should not need to read the whole codebase.

> `README.md` is partly out of date (it still says "single-page", names an old Administrator, and says the site uses an illustration). Where the two disagree, this guide and the code win.

---

## 1. What this is

Public website for **Mirik Municipality (Mirik Notified Area Authority)**, Darjeeling, West Bengal. Static site, three languages (English, Nepali, Bengali). No backend, no database, no CMS.

| | |
|---|---|
| Framework | Astro 5 (static output), TypeScript strict |
| Dependencies | `astro` only. No React, no Tailwind, no UI kit. |
| Styling | One plain CSS file: `src/styles/global.css` |
| Font | Google Sans Flex (Noto Sans Devanagari / Bengali as fallback) |
| Hosting | Not decided. `site` in `astro.config.mjs` is a placeholder domain. |

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static site into dist/  (run this before you push)
```

Windows + PowerShell/Git Bash. Node 18.20+.

---

## 2. Project map

```
src/
  layouts/Layout.astro     Header, mobile menu, footer, grievance pop-up, AND all shared JS
                           (language switcher, scroll pill, dropdowns, form handling)
  components/
    PageHead.astro         Title band at the top of every sub-page
    GrievanceForm.astro    Form used on /grievance and in the pop-up
    AppointmentDialog.astro  "Book an appointment" pop-up (Administration page)
    Avatar.astro           Photo or initials placeholder for officials
  data/
    site.ts                ALL content: contacts, officers, wards, services, fines, notices, etc.
    nav.ts                 Page list, page accent colours, navbar dropdown sections
    i18n.ts                Nepali + Bengali translations (main, ~1200 lines)
    i18n-extra.ts          More translations (home page, notices, footer)
  pages/                   One file per route (see section 3)
  styles/global.css        Every style on the site (~2000 lines)
  assets/mirik-block-map.svg   Ward map artwork (used by the home page)
public/
  images/                  Photos (hero, lake, tea, monastery, people/...)
  videos/                  clouds.mp4, wardmap.mp4 (+ poster jpgs)
```

---

## 3. Pages and suggested ownership

| Route | File | Size | Notes |
|---|---|---|---|
| `/` | `pages/index.astro` | 646 lines | Hero, quick services, about + notices, body/team, **interactive ward map + census charts** (big inline script), explore cards |
| `/about/` | `pages/about.astro` | 218 | History timeline (scroll-driven, has its own script), town guide, places, health, schools |
| `/administration/` | `pages/administration.astro` | 108 | Administrator card, officers, wards, jurisdiction, other offices. Uses `AppointmentDialog` |
| `/services/` | `pages/services.astro` | 78 | Online services, projects, schemes, FAQ |
| `/clean-mirik/` | `pages/clean-mirik.astro` | 29 | Fines and bin colours |
| `/emergency/` | `pages/emergency.astro` | 32 | Helplines |
| `/grievance/` | `pages/grievance.astro` | 17 | Wraps `GrievanceForm` |
| `/contact/` | `pages/contact.astro` | 30 | Address, RTI, links, map |
| `/notices/` | `pages/notices.astro` | 20 | Notice list |
| `/policies/` | `pages/policies.astro` | 15 | Privacy, terms, accessibility |

Redirects (in `astro.config.mjs`): `/projects` -> `/services/#projects`, `/announcements` -> `/notices/`, `/town-guide` -> `/about/#town-guide`.

**Suggested split (adjust as you like, but agree it once and stick to it):**

| Dev | Owns |
|---|---|
| A | `index.astro` (home) |
| B | `about.astro` |
| C | `administration.astro`, `contact.astro`, `grievance.astro`, `AppointmentDialog`, `GrievanceForm` |
| D | `services.astro`, `clean-mirik.astro`, `emergency.astro`, `notices.astro`, `policies.astro` |

---

## 4. Shared files (conflict hotspots)

Everyone touches these, so they cause most merge conflicts and most accidental breakage. Handle with care.

| File | Rule |
|---|---|
| `layouts/Layout.astro` | Changes the header/footer/JS of **every** page. Announce in the team chat before editing. Keep PRs to this file small and separate. |
| `styles/global.css` | See section 5. Never reorder or delete existing rules. |
| `data/site.ts` | Shared content. Add new exports at the end of the relevant block; do not reformat or reorder existing entries. |
| `data/nav.ts` | Changing `pages`, `sections` or `accents` alters the navbar, footer links, mobile menu and page headers. |
| `data/i18n.ts`, `i18n-extra.ts` | See section 6. Big files, easy to conflict. **Add your new strings to the end of `i18n-extra.ts` only**, inside a comment block naming your page. |
| `package.json` | Do not add dependencies without team agreement. The site is deliberately dependency-free. |

---

## 5. Styling: how `global.css` works (read before writing CSS)

`global.css` was built in **layers**: later sections override earlier ones. There are multiple `:root` blocks, multiple `.subnav`, `.pagehead`, footer, and `.f-main` definitions, and **the last matching rule wins**. So:

- A rule you add higher up the file may silently do nothing because a later rule overrides it. Search for the class (`Grep "\.yourclass"`) and check **all** matches before editing.
- Add new rules **at the very end** of the file, under a comment header, e.g. `/* ---- About page: timeline tweaks (dev B) ---- */`.
- Never edit an existing rule "in place" unless you have checked it is not used on another page. Prefer a new, more specific selector.
- Page-specific styling with a very specific class name is safest (e.g. `.about-timeline-x`). Avoid restyling generic classes like `.card`, `.wrap`, `.grid-2`, `.lead`, `.eyebrow`, `.person`, which every page uses.

**Design tokens** (top of `global.css`, later re-declared):

| Token | Value | Use |
|---|---|---|
| `--pine` / `--pine-deep` / `--pine-soft` | `#1f4d3a` / `#153628` / `#e6eee8` | Brand green |
| `--lake` / `--lake-soft` | `#2f6f8f` / `#e5f0f5` | Blue accent |
| `--green` / `--green-deep` | `#2e8b3e` / `#1f6b2e` | Bright green (buttons, highlights) |
| `--navy` | `#12303a` | Dark surfaces |
| `--alert` / `--alert-soft` | `#b3471d` / `#fbece5` | Warnings, emergency |
| `--paper`, `--card`, `--ink`, `--muted`, `--line` | | Page background, cards, text, borders |
| `--max` | `1160px` | Content width (`.wrap`) |

Use the tokens. Do not hard-code new greens or blues.

**Per-page accent colours** live in `data/nav.ts` -> `accents` (`[accent, soft]` per slug) and feed `PageHead` via CSS variables `--accent` / `--accent-soft`.

**Responsive:** breakpoints already in use are `1100`, `1000`, `980`, `860`, `760`, `640`, `560`, `520`, `400` px. Reuse them. The site is used heavily on phones (there is a fixed bottom "quickbar" under 980px), so **test every change at 375px wide**.

**Motion:** wrap hover/animation rules with a `@media (prefers-reduced-motion: reduce)` opt-out, as existing components do.

**Glass look:** the header pill, form dialogs and the home "glass box" use translucent white/dark backgrounds with blur over photos/video. If you build a card on top of a photo, copy the existing pattern (`.glass-box`, `.dlg-card`) instead of inventing a new one.

---

## 6. Translations (EN / NE / BN): easiest thing to break

The language switcher is **runtime text replacement**, not per-language pages:

1. `Layout.astro` walks every text node on the page and looks up the **exact English string** in `dict` (`i18n.ts`) and `extra` (`i18n-extra.ts`). Format: `'English text': ['नेपाली', 'বাংলা']`.
2. It also translates `aria-label`, `placeholder` and `title` attributes and the page `<title>`.
3. Whitespace is normalised (runs collapsed, trimmed) before lookup.
4. No match = the English text simply stays. Nothing crashes.

What this means for you:

- **Any new visible text needs an entry** in `i18n-extra.ts`, or Nepali/Bengali users will see English. Copy the English string *exactly*, character for character (curly vs straight apostrophes matter).
- **Changing existing English text breaks its translation.** If you reword a sentence, update its key in the dictionary too.
- **Text with interpolation is split into separate nodes**, e.g. `<p>Open {contact.hours}</p>` becomes `"Open "` + the hours. Each node is looked up separately, so the combined sentence will not match. Put translatable text in its own element, or keep the dynamic part in a separate `<span>`.
- Text that comes from `site.ts` (service names, notice titles, etc.) is translated by the same dictionary. Adding a new entry to `site.ts` means adding its strings to the dictionary too.
- Names, numbers, phone numbers and links do not need entries.
- Translations were AI-written and are marked for native-speaker review before launch. Do not "fix" them; flag them.
- Text injected by JavaScript after page load (chart labels, ward panel) is only translated if the script does it itself. Check how `index.astro` handles this before adding dynamic text.

After adding text, **switch to NE and BN in the browser and scroll your page** to check nothing is left in English or overflowing (Devanagari/Bengali text is taller and wider).

---

## 7. Content: `site.ts` is the source of truth

Do not hard-code facts (phone numbers, officer names, fines, ward lists) inside a page. Put them in `data/site.ts` and import them. Key exports:

`meta`, `contact`, `notices`, `administration`, `wards`, `facts`, `demographics`, `history`, `services`, `schemes`, `fines`, `bins`, `projects`, `attractions`, `gettingHere`, `health`, `education`, `emergency`, `offices`, `links`, `sources`, `body`.

- Items that came from public research and are unconfirmed are marked `VERIFY` in comments. **Keep those markers**; the municipality office reviews them before launch.
- Do not invent data. Ward-level census figures are not published, so the app shows "Not published" / dummy-data notes on purpose. Do not fill them with made-up numbers.
- Current Administrator is **Krishna Kanta Ghosh, WBCS** (supplied by the office, September 2026). Anything saying "Priyanka Singh" is outdated.

---

## 8. Shared building blocks: reuse, do not duplicate

| Need | Use |
|---|---|
| Page title band + breadcrumb | `<PageHead slug="..." title="..." lead="..." />` (slug must exist in `nav.ts` -> `pages` and `accents`) |
| Wrap a page | `<Layout title="X \| Mirik Municipality">` and content inside `<section>` -> `<div class="wrap">` |
| Two columns | `.grid-2`, three columns `.grid-3` (collapse to 1 column under 860px) |
| Person photo | `<Avatar name tone photo />` |
| Grievance form | `<GrievanceForm prefix="x" />`. `prefix` must be unique per instance on a page (it builds the `id`s) |
| Grievance pop-up | Any `<a href="/grievance/">` opens the pop-up automatically (handled in `Layout.astro`). Do not add your own dialog. |
| Sub-page navbar dropdown entries | `data/nav.ts` -> `sections`; the `href` must match an `id` on the page |

**Adding a new page:** (1) create `src/pages/<slug>.astro`, (2) add to `pages` and `accents` in `nav.ts` (and `banners` is currently unused), (3) if it should be in the main navbar, add the slug to the `order` array in `Layout.astro`, (4) add strings to `i18n-extra.ts`, (5) run `npm run build`. Coordinate with the team first: it changes the shared nav.

---

## 9. Gotchas

- **Trailing slashes:** links are written `/about/` and `isCurrent` compares against the path without the trailing slash. Keep that style.
- **Section anchors:** dropdown links like `/about/#timeline` rely on `id`s on the page. Renaming an `id` breaks the navbar (and the redirects above).
- **Sticky/floating header:** the header floats over the page and becomes a glass pill after 40px of scroll. Sticky elements under it need `top` values around 78 to 86px. Look at how `.subnav` and the timeline (`#tl-sticky`) do it. (`.subnav` styles/JS exist but no page uses it right now.)
- **Grievance form** has no live endpoint. With `contact.grievanceEndpoint` empty it opens the visitor's email app. Do not change this without the team; the endpoint is a launch decision.
- **Scripts:** Astro `<script>` tags are bundled and run once per page. The home page and About page each have their own script; the shared script is at the bottom of `Layout.astro`. Do not add global listeners for things you only need on your page, and always null-check elements (`?.`).
- **Videos/images:** keep new images optimised (roughly under 300 KB for content photos), put them in `public/images/`, and always give `alt` text, `width` and `height`. Don't add large video files.
- **Accessibility matters** (this is a government site): real headings in order, `aria-label` on icon-only buttons, visible focus, colour contrast on the glass surfaces, and a working keyboard path for anything interactive.
- Line endings on Windows may show a CRLF warning in git. That is harmless; don't commit whole-file reformatting.

---

## 10. Working agreements

**Branches and commits**
- Branch per task from `main`: `feat/<page>-<what>` or `fix/<page>-<what>` (e.g. `feat/about-timeline-mobile`).
- Small commits with a clear one-line message in the style already used (e.g. "Hero heading: Serving the Heart of the Mirik Hills").
- Pull/rebase `main` before you start and before you open a PR. Merge small and often; the long-lived global.css and Layout branches are where conflicts pile up.
- Do not push to `main` directly if the team uses PRs.

**Definition of done (checklist for every PR)**
- [ ] `npm run build` passes with no errors
- [ ] Checked at 375px, 768px and 1280px wide
- [ ] Switched to Nepali and Bengali: new text is translated, nothing breaks the layout
- [ ] Only your own page's files changed, plus additive edits to shared files
- [ ] No invented data; `VERIFY` markers preserved
- [ ] Tested keyboard navigation and reduced motion for anything interactive
- [ ] Other pages spot-checked if you touched `Layout.astro`, `global.css`, `nav.ts` or `site.ts`

**If you are an AI agent working on this repo**
1. Read this file, then only the files for your assigned page plus the `site.ts` blocks it imports. Do not read all of `i18n.ts` (1200 lines) or `global.css` (2000 lines) in full: search them.
2. Search `global.css` for every occurrence of a class before you change it (section 5).
3. Do not edit files owned by another page unless the task says so. Ask for the shared-file owner's approval before editing `Layout.astro`, `nav.ts` or removing anything from `global.css`.
4. Add translations for every new string (section 6) and mention in your summary which keys you added.
5. Run `npm run build` before saying you are done. Report failures honestly.
6. Do not add dependencies, frameworks or build steps.

---

## 11. Open launch items (from the municipality's checklist)

Track these in `README.md` ("Please confirm with the office before launch"). Pages affected: landline number and email (contact/footer), officers still in post (administration), office hours (contact/footer), ward localities beyond wards I, III and IV (administration + home ward map), mutation link (services), CBPHCS recruitment PDFs (services), real photos (home/about), social links for Instagram and YouTube (footer), and setting `site` in `astro.config.mjs` and `contact.grievanceEndpoint` before deploy.
