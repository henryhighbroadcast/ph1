/* ============================================================
   PH1 — CONTENT FILE
   This is the ONLY file you need to touch week to week.

   HOW TO ADD A NEW VIDEO
   1. Copy one of the { ... } blocks below (any one).
   2. Paste it right after the opening "const VIDEOS = [" line.
   3. Fill in your details. Keep the commas!
   4. Get your Vimeo ID: open the video on vimeo.com, the ID is
      the number in the URL, e.g. vimeo.com/1234567890 -> "1234567890"
   5. Save the file (on GitHub: click the pencil icon, edit, then
      "Commit changes"). The live site updates in under a minute.

   FIELDS
   - id           : unique text, no spaces (e.g. "ep-2026-08-25")
   - title        : shown on the card and in the player
   - category     : which row it appears in. Use an EXISTING category
                    name to add to that row, or type a brand new
                    category name to automatically create a new row.
   - vimeoId      : the number from your Vimeo URL (as text, in quotes)
   - airDate      : "YYYY-MM-DD" — used to sort, newest first
   - description  : a sentence or two, shown in the player popup
   - thumbnail    : (optional) URL to a thumbnail image. If left blank,
                    the site auto-generates one from your Vimeo ID.
   - featured     : true or false — true puts it in the big hero
                    banner at the top. Usually just set this on your
                    newest episode and set the old one back to false.
   ============================================================ */

const SITE = {
  title: "PH1",
  tagline: "One Channel. Your Voice.",
  categoryOrder: [
    "Season 2026-27",
    "Critically Acclaimed",
    "Segments & Highlights",
    "Student Films & Projects",
    "Archives"
  ],
  // Rows listed here get the PH1 Classic polaroid tile pinned to the
  // start of the row. Use this for any row that's specifically an
  // archive of past seasons.
  archiveCategories: ["Archives"]
};

const VIDEOS = [
  {
    id: "ep-sample-01",
    title: "Episode 01 — Welcome Back",
    category: "Season 2026-27",
    vimeoId: "76979871",
    airDate: "2026-08-24",
    description: "The season premiere: cold open, ASB updates, sports scores, and a look ahead at the year in the newsroom.",
    thumbnail: "",
    featured: true
  },
  {
    id: "acclaimed-sample-01",
    title: "Hot Nuggets of Wisdom // Mr. Miller Weaves Baskets Underwater",
    category: "Critically Acclaimed",
    vimeoId: "76979871",
    airDate: "2026-10-17",
    description: "One of the most-watched segments of the season.",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-sample-cold-open-01",
    title: "Cold Open — Episode 01",
    category: "Segments & Highlights",
    vimeoId: "76979871",
    airDate: "2026-08-24",
    description: "This week's cold open segment.",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-sample-sports-01",
    title: "Sports Spotlight — Week 1",
    category: "Segments & Highlights",
    vimeoId: "76979871",
    airDate: "2026-08-24",
    description: "Team spotlight and score roundup.",
    thumbnail: "",
    featured: false
  },
  {
    id: "student-sample-psa-01",
    title: "PSA: Distracted Driving",
    category: "Student Films & Projects",
    vimeoId: "76979871",
    airDate: "2026-08-20",
    description: "A student-produced public service announcement from Video Production.",
    thumbnail: "",
    featured: false
  },
  {
    id: "student-sample-doc-01",
    title: "Documentary Short: Life on the Team",
    category: "Student Films & Projects",
    vimeoId: "76979871",
    airDate: "2026-08-18",
    description: "A short documentary produced in Digital Communications.",
    thumbnail: "",
    featured: false
  },
  {
    id: "archive-sample-01",
    title: "Season 1, Episode 12",
    category: "Archives",
    vimeoId: "76979871",
    airDate: "2025-11-17",
    description: "From last year's run — part of the PH1 Classic archive.",
    thumbnail: "",
    featured: false
  }
];
