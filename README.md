# PH1 — Site Setup Guide

A Netflix-style site for your broadcast episodes, segments, and student
work, built to embed Vimeo videos (not YouTube, since that's blocked on
student devices).

## What's in this folder
- `index.html` — page structure (you shouldn't need to touch this)
- `style.css` — the visual design (you shouldn't need to touch this)
- `script.js` — builds the rows/cards from your data automatically (you
  shouldn't need to touch this)
- `data.js` — **this is the only file you'll edit week to week.** It's a
  list of your videos with title, category, Vimeo ID, and air date.
- `assets/` — logo images, the starfield background, and the intro
  bumper video. Needs to go up alongside the files above.

## One-time setup (about 15 minutes)

1. **Create the GitHub account under your work/district email** —
   not a personal one. This is the account that should own the repo
   going forward.
2. **Create a new repository.** Click the "+" in the top right → "New
   repository." Name it something like `ph1-newsroom`. Set it to
   **Public** (required for the free hosting on a standard GitHub
   plan). Click "Create repository."
3. **Upload everything.** On your new repo's page, click "Add file" →
   "Upload files," then drag in `index.html`, `style.css`, `script.js`,
   `data.js`, `README.md`, and the whole `assets` folder (drag the
   folder itself — GitHub preserves the folder structure). Click
   "Commit changes."
4. **Turn on GitHub Pages.** Go to the repo's "Settings" tab → "Pages"
   (left sidebar) → under "Branch," choose `main` and `/ (root)` → Save.
5. Wait about a minute, then refresh that Pages settings screen — it
   will show you your live URL, something like:
   `https://yourusername.github.io/ph1-newsroom/`

That's your class website. Bookmark it, put it in Schoology/Canvas, add
it to your syllabus, whatever you need.

## Updating it every week (about 2 minutes)

You never need to touch code for this — just edit one file in your
browser:

1. Go to your repo on github.com and click on `data.js`.
2. Click the pencil icon (top right of the file view) to edit.
3. Copy one of the existing `{ ... }` blocks in the `VIDEOS` list, paste
   it in as a new entry, and fill in:
   - `title` — what shows on the card
   - `category` — which row it lives in (use an existing category name,
     or type a new one to create a new row automatically)
   - `vimeoId` — the number from your Vimeo video's URL
     (vimeo.com/**1234567890** → use `"1234567890"`)
   - `airDate` — `"2026-09-08"` format, used to sort newest-first
   - `description` — a sentence or two
   - `featured` — set to `true` on your newest episode, and set the
     previous one back to `false`, if you want it to be the big hero
     banner at the top
4. Scroll down, click "Commit changes."
5. Your live site updates within about a minute — no re-upload needed.

## Setting up Vimeo

1. Sign up for a fresh **Vimeo Starter** account ($12/mo) rather than
   reusing your cluttered free one — it gives you 2TB of storage,
   domain-restricted embeds (so your videos only play on your own site),
   and "Showcases" for organizing footage internally.
2. In Vimeo's privacy settings for each video (or account-wide), you can
   restrict embedding to only your GitHub Pages domain — this keeps
   videos from being played anywhere except your class site.
3. Upload full episodes and segments as usual; grab each video's ID
   from its Vimeo URL to plug into `data.js`.

## Adding new categories/rows

You don't need to edit any code for this. Just use a new value in the
`category` field of any video in `data.js` — a new row is created
automatically, in the order listed in `SITE.categoryOrder` at the top
of the file (anything not listed there just appears after, in the
order it's first seen).

## Notes
- The sample entries in `data.js` use a public Vimeo demo video ID —
  replace all of them with your real content before sharing the link
  with students.
- `assets/ph1-classic-polaroid.png` isn't used by the current code —
  you can skip uploading it, it's just left over from an earlier draft.
- If you ever want a custom domain (e.g. `phtv.patrickhenryhs.org`)
  instead of the `github.io` address, GitHub Pages supports that too —
  ask your district's IT/web team, since it usually requires a DNS
  change on their end.
