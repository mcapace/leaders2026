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

- **Archive covers**: copy from the Webflow ZIP into **`public/images/`** (e.g. `archive-2020.avif`, …) before relying on that section locally.
- **Winner + gallery images**: still served from **`cdn.prod.website-files.com`** until you replace them with local files; `next.config.js` already allows that host.
