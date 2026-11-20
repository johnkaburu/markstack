# MarkStack

A curated shelf of frontend resources: tools, UI libraries, inspiration, fonts, AI and YouTube channels.

Live: https://bookmark.johnkaburu.co.ke/

## Running locally

Needs Node 18+ (`.nvmrc` pins 20).

```sh
npm install
npm run dev
```

## Adding a bookmark

1. Open `src/data/resources.ts` and add an entry to the right category:
   ```ts
   mytool: {
     image: "/assets/images/screenshots/mytool.webp",
     label: "My Tool",
     description: "One short line on what it's for",
     link: "https://mytool.dev/",
   },
   ```
2. Save a screenshot of the top of the site to `public/assets/images/screenshots/` (webp, about 1200px wide). If you skip this step, the card shows a lettered placeholder.

To add a whole new category, add its key to `CategoryId` and an entry to the `categories` array in the same file.

See [CHANGES.md](CHANGES.md) for the November 2026 redesign notes.
