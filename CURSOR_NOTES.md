# Notes for Cursor (Webflow → Next.js migration)

Tips that save time when editing this project:

## Globals / CSS (Prompt 3 pattern)

- **Don’t paraphrase CSS** — paste the **actual `globals.css`** (or `css/marketwatch-*.webflow.css` from the Webflow ZIP). Cursor matches the real source much more reliably than a description.

## Hero background (Prompt 8 pattern)

- The hero must use **layered CSS `background-image`** (linear + radial + photo URL), **not** a Next.js `<Image>` as the background. A single `<Image>` cannot reproduce the radial gradient stack that makes the hero match the live site.

## Winners grid (Prompt 9 pattern)

- Winner cards should be **`grid-cols-1` on mobile** and **`md:grid-cols-2` (two columns) from `md` up** — not all nine in one column on desktop.

## Workflow after major section work (Prompt 14 pattern)

- After finishing a chunk of UI, run **`npm run dev`** and **scroll each section** before moving on. Fixing issues per component is faster than debugging everything at the end.

## Images

- **Archive covers**: `public/images/archive-20xx.avif` (2020–2024, from the Webflow ZIP) plus `public/images/2026/covers/` (2025 + 2026 covers).
- **2026 winner portraits, headshots, product shots and gallery photos**: local AVIF files under **`public/images/2026/`** (resized from the Leaders 2026 issue PDF and the digital-edition feed). Nothing is hotlinked from Webflow anymore.

## Articles (`/articles`, `/articles/[slug]`)

- Article metadata (titles, deks, bylines, hero/inline figures, key facts, people) lives in **`lib/articles.ts`**.
- Body text lives in **`lib/articles-content.json`** (`{ slug: [{ type: "p" | "h2" | "byline", text }] }`), extracted from the issue PDF. Edit the JSON directly to fix copy.
- Inline figures are placed automatically: one figure before each section heading after the first, remaining figures at the end.
- Winner cards (`lib/data.ts` → `articleSlug`) and the Leaders Choice tiles link to these pages.
- The eMagazines digital edition of the 2026 issue is `LEADERS_2026_ISSUE_URL` in `lib/data.ts`; it drives the hero "Read the Issue" button, the 2026 archive card's "view issue" link and the "read the digital edition" button on `/articles`.
- Profile links (winner cards, Leaders Choice tiles, the hero cover, and the "read in the digital edition" button on each article page) deep-link into the eMagazines reader via `issuePageUrl(page)` in `lib/data.ts`, which appends `#p<printed page>` to `LEADERS_2026_READER_URL`. Page numbers are `issuePage` on each winner/award and the first number of `pages` in `lib/articles.ts`. Winner cards keep a small "web version" link to the on-site article.
