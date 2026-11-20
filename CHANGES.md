# UI refresh and cleanup (November 2026)

What changed, and why. Everything removed is still in git history if you want it back.

## Design

- **New look.** The new theme uses a warm near-black background, cream text and one accent colour (`#e2673f`). Headings use Playfair Display and metadata (domains, counts) uses a monospace font. All colours and fonts are CSS variables in `src/styles/global.scss`.
- **Hero.** The old centred sentence is gone. The hero is now left-aligned, with a headline and a short intro written in first person. The copy is in `src/components/layout/Hero.tsx`; rewrite it in your own words.
- **Cards always show their name, description and domain.** The old cards hid all text until you hovered over them, which doesn't work on phones and made the grid hard to scan. Screenshots now sit at a fixed 16:10 ratio, cropped to the top of the page.
- **YouTube channels get their own layout.** Their images are square avatars, so they appear as compact rows (avatar, name, @handle) and are no longer stretched into screenshot cards.
- **New logo mark.** The header now has a small bookmark ribbon drawn in SVG, coloured with the accent.
- **Footer.** It was an empty `<div>`. It now has a "Suggest a link" link that opens a new GitHub issue.

## Placeholder image

The old placeholder (`public/assets/images/logo.png`) was a 475×475 transparent PNG of the previous brand name, "BOOKMARK". It rendered at its natural size, centred in the card, so every loading or broken card showed a large, cropped, off-brand logo.

`src/components/card/Placeholder.tsx` replaces it. It's a tile showing the site's first letter in the display font plus its domain, on a muted tint. Each domain always gets the same tint. The tile shows while the screenshot loads, the screenshot fades in over it, and if the image fails the tile stays. No image file is needed.

## Features

- **Search.** It matches name, description and domain across every category. Press `/` to focus it and `Esc` to clear it. The category counts update as you type.
- **"All" view.** All categories are listed on one page, grouped under numbered headings. Choosing a category shows only that one.
- **Linkable categories.** The selected category goes in the URL hash (`/#fonts`, `/#youtube`), so you can share it and it survives a refresh.
- **No pagination.** With 114 items and lazy-loaded images, one scrolling page works better than 12-per-page tabs.

## Refactors

| Change | Why |
| --- | --- |
| `src/constants/constants.tsx` → `src/data/resources.ts`, with `Resource` / `Category` types | Data, not JSX. `satisfies` type-checks every entry. Category titles, blurbs and order are now in one `categories` array. |
| `desciption` → `description` | Typo fix. The old card even had a comment preserving it. |
| Image paths normalised to start with `/` | 14 entries used relative `assets/...` paths, which break on any URL other than `/`. |
| Fixed label typos: Glassmorphism, Font Awesome, Dribbble, LottieFiles, TinyPNG, Claude | Content. |
| Rewrote `Tabs.tsx` as `directory/Directory.tsx` + `Section.tsx` | The old version hard-coded the tab count (7) in four separate places, ran a `switch` on string keys, and kept page counts in `useState` that never updated. Adding a category now means one entry in `categories`. |
| Removed `react-query` | It wrapped static, synchronous data in seven queries. |
| Removed `react-ga`, added the GA4 `gtag` snippet to `index.html` | `react-ga` only speaks Universal Analytics, so the `G-` ID was never recording anything. It also called `initialize` on every render. |
| Removed `react-helmet` | It duplicated `index.html` and contradicted it (canonical `markstack.vercel.app` in one, `bookmark.johnkaburu.co.ke` in the other). The meta tags are now only in `index.html`, using **bookmark.johnkaburu.co.ke** because that's where CI deploys. Change it if the Vercel URL is the real one. |
| `<Analytics />` rendered once, not twice | It was mounted in both `main.tsx` and `App.tsx`. |
| Removed Tailwind and the shadcn `button`/`pagination` components | They were only used by the pagination. There were also two Tailwind configs (`.js` and `.ts`), and the `.ts` one was never loaded. Styles are plain SCSS now. |
| Removed unused dependencies | `@ant-design/icons` (one GitHub icon, now from `lucide-react`), `@radix-ui/react-slot`, `@sanity/client`, `@vercel/speed-insights`, `class-variance-authority`, `clsx`, `tailwind-merge`, `framer-motion`, `localforage`, `match-sorter`, `sort-by`, `mini-svg-data-uri`, `react-router-dom`, `tailwindcss-animate`. |
| `sass` moved to devDependencies | It's only used at build time. |
| Fonts: kept only Playfair Display, subset to Latin and converted to woff2 (301 KB → 51 KB) | The other eight font files and the duplicate Playfair TTF weren't used. `tabs.scss` also pulled Montserrat and Raleway from Google Fonts on every load. |
| Deleted unused assets | `__MACOSX/` junk, `github-mark/`, `tomisloading.jpg`, `BookMark.jpg` (×2), the old `logo.png` (×2), `react.svg` (×2), `vite.svg`, and the tab icon PNG/SVGs. |
| `dist/` removed from git and added to `.gitignore` | CI runs `npm run build` before deploying, so the committed copy was always stale. |
| CI Node 16 → 20, `.nvmrc` = 20, `engines.node >= 18` | Vite 5 needs Node 18+. This was also the cause of the `??=` error you hit locally on Node 14. |
| Vite 5.1 → 5.4 (same major), Sass `modern-compiler` API | Removes the `legacy-js-api` deprecation warnings from every build. |
| `index.html` cleaned up | It had duplicate `charset`/`viewport` tags, a PNG favicon declared as `image/svg+xml`, the old "BookMark" title, and Twitter tags using `property` where they should use `name`. |
| Accessibility | Real `<button>`s with `aria-pressed` replace the hidden radio inputs, there's a visible focus ring, and `prefers-reduced-motion` is respected. Screenshots use empty `alt` because the card title already names the link. |

## Motion (follow-up)

Everything respects `prefers-reduced-motion`: animations, delays and smooth scrolling all switch off. Hover effects only apply on devices that can hover, so taps on phones don't leave cards stuck mid-effect.

**Cards (hover)**
- The card lifts 5px, its border warms toward the accent, and the shadow deepens.
- The screenshot slowly pans from the top of the page to the bottom over about 3 seconds with a slight push-in, like scrolling the site. A thin accent bar along the bottom of the image fills left to right at the same pace. On mouse-out it eases back faster.
- The title underline draws in from the left.
- The arrow swaps: the first flies out top-right and a second slides in from the bottom-left (`card/Arrow.tsx`).
- On press, the card dips slightly.

**YouTube rows (hover):** an accent tint sweeps in from the left, the avatar tilts and gets an accent ring with a little spring, and the same arrow swap plays.

**Switching categories**
- The active category's highlight now slides and resizes between buttons and no longer jumps. It's measured from the real button, so it stays correct while search counts change the widths.
- The list remounts on each switch, so the section heading rises in and its divider draws across. The cards then fade up one after another, with a 45ms stagger capped at 10 cards so long lists don't drag.
- The same entrance plays the first time each section scrolls into view in the "All" view (`lib/useInView.ts`).

**Page load:** the header, eyebrow, headline and intro rise in one after another, and the headline underline draws itself last.

**Scrolling**
- Mouse wheel and trackpad scrolling has inertia via Lenis (`lib/smoothScroll.ts`, about 3 KB gzipped). It drives the real window scroll, so the sticky bar and IntersectionObserver still work. Touch devices keep native scrolling.
- `scrollToTarget()` is used for the jump to the top of the list when switching categories, and for a new **back-to-top** button that appears after you scroll about a screen and a bit.
- `scroll-behavior: smooth` is the fallback whenever Lenis is off.

**Motion tokens:** `--ease-out` (long soft deceleration) and `--ease-spring` (small overshoot) in `global.scss`.

## File map

```
src/
  data/resources.ts          all bookmarks + category config
  lib/url.ts                 hostname / YouTube handle helpers
  lib/site.ts                repo + "suggest a link" URLs
  lib/smoothScroll.ts        Lenis setup + scrollToTarget()
  lib/useInView.ts           one-shot reveal-on-scroll hook
  styles/global.scss         tokens, font face, base styles
  components/
    layout/                  Header, Hero, Footer, BackToTop
    directory/               Directory (filter bar, search), Section
    card/                    Card, ChannelCard, Placeholder, Arrow
```
