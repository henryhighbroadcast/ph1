# One-Time Computer Setup

You only ever need to do this once. After this, updating the site is
just: edit a spreadsheet, tell Claude Code to push it.

## 1. Install Python
Most Macs already have it. To check: open Terminal and type
`python3 --version`. If you see a version number, skip to step 2.
If not, install it from python.org (the standard installer, no
special options needed).

## 2. Install the one extra thing Python needs
In Terminal:
```
pip3 install openpyxl
```
This lets the sync script read Excel files. One-time only.

## 3. Install Claude Code
Follow Anthropic's official install guide for your computer —
it changes occasionally, so use the current instructions rather than
anything written down elsewhere:
**https://docs.claude.com/en/docs/claude-code/quickstart**

You'll need an active Claude subscription (the same kind you use for
claude.ai) to log in.

## 4. Get the repo onto your computer
In Terminal:
```
git clone https://github.com/henryhighbroadcast/ph1-newsroom.git
cd ph1-newsroom
```
(Replace the URL with your actual repo's URL if it's different —
copy it from the green "Code" button on your GitHub repo page.)

**Using more than one computer?** Repeat steps 1–5 on each one — a
laptop and a school desktop can both have their own clone of this
same repo, no conflict. The sync script always pulls the latest
version first before making changes, so switching between devices is
safe as long as you're online when you run it.

## 5. Make sure git can push on your behalf
The first time you try to push, git will ask you to sign in to
GitHub in your browser — follow the prompts. If it doesn't prompt you
automatically, run:
```
gh auth login
```
and follow the steps (installs GitHub's own sign-in helper if you
don't have it — Terminal will tell you how if it's missing).

## 6. Open the project in Claude Code
In Terminal, from inside the `ph1-newsroom` folder:
```
claude
```
This starts a Claude Code session with full context on this project
(it automatically reads CLAUDE.md, which tells it exactly how this
repo works).

---

## Your actual weekly workflow, from here on out

1. Upload the new episode to Vimeo.
2. Open `videos.xlsx` (double-click it — opens in Excel like any
   spreadsheet) and add one row: paste the Vimeo link, type the
   category, save.
3. In Terminal, `cd` into the `ph1-newsroom` folder if you're not
   already there, run `claude`, and just tell it:
   > update the site
4. Done. Give it a minute, then check the live site.

You will probably never need to open `data.js` or `sync_videos.py`
at all. If something ever looks wrong, just tell Claude Code what
you're seeing in plain English — that's what CLAUDE.md is there for.
