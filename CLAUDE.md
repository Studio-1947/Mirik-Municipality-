# Mirik Municipality website

Astro 5 static site (TypeScript strict, no other dependencies), in English, Nepali and Bengali. Several developers and agents work on different pages at the same time.

**Read [PROJECT_GUIDE.md](PROJECT_GUIDE.md) first.** It has the file map, page ownership, shared-file rules and the PR checklist.

## Commands
- `npm run dev`: local site at http://localhost:4321
- `npm run build`: must pass before you say a task is done

## Rules that prevent the most breakage
- Stay in your assigned page's files. Ask before editing `src/layouts/Layout.astro`, `src/data/nav.ts`, or removing anything from `src/styles/global.css`.
- Do not read `src/data/i18n.ts` (1200 lines) or `src/styles/global.css` (2000 lines) in full. Search them with Grep.
- `global.css` is layered: the last matching rule wins. Grep every occurrence of a class before changing it, and add new rules at the end of the file under a labelled comment.
- Every new visible string needs a Nepali and Bengali entry in `src/data/i18n-extra.ts`. The key is the exact English text. Changing existing English text breaks its translation.
- Facts (phones, officers, fines, wards) live in `src/data/site.ts`. Do not hard-code them in pages. Do not invent data, and keep `VERIFY` markers.
- Use the design tokens (`--pine`, `--lake`, `--green`, ...), not new hard-coded colours. Test at 375px wide.
- Do not add dependencies or build steps.
- `README.md` is partly outdated. Trust the code and `PROJECT_GUIDE.md`.
