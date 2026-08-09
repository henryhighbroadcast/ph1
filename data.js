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
   - thumbnail    : (optional) URL to a thumbnail image. Leave this
                    blank for almost every video — the site
                    automatically pulls the CURRENT thumbnail live
                    from Vimeo every time the page loads, so if you
                    change a thumbnail on Vimeo, the site picks it up
                    on its own with no editing here. Only fill this in
                    if you want to override with a totally custom
                    image that isn't the Vimeo thumbnail at all.
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
    id: "acclaimed-2025-not-alone",
    title: "You Are Not Alone PSA",
    category: "Critically Acclaimed",
    vimeoId: "1216821480",
    airDate: "2025-09-10",
    description: "An iVie-nominated PSA reminding you that you are never alone.",
    thumbnail: "",
    featured: false
  },
  {
    id: "acclaimed-2025-cross-country",
    title: "Cross Country At The Clovis Invitational",
    category: "Critically Acclaimed",
    vimeoId: "1216821501",
    airDate: "2025-09-09",
    description: "The Patrick Henry Cross Country team goes on a roadtrip up north to the Clovis Invitational. Awarded at the San Diego County Fair. Directed by Eva Cruz.",
    thumbnail: "",
    featured: false
  },
  {
    id: "acclaimed-2025-krispie-treats",
    title: "Patriot Makes // Spooky Rice Krispie Treats",
    category: "Critically Acclaimed",
    vimeoId: "1216821533",
    airDate: "2025-09-08",
    description: "A spooky how-to video about how to make some spooky rice krispie treats. By Allen and Mabel.",
    thumbnail: "",
    featured: false
  },
  {
    id: "acclaimed-2025-lunch-runner",
    title: "PSA - The Lunch Runner",
    category: "Critically Acclaimed",
    vimeoId: "1216821494",
    airDate: "2025-09-07",
    description: "Max's daring PSA calling out the subversive subculture of lunch running. Nominated for an iVie Award in the PSA category.",
    thumbnail: "",
    featured: false
  },
  {
    id: "acclaimed-2025-dont-let-it-fade",
    title: "Don't Let It Fade (Music Video) by CRXA",
    category: "Critically Acclaimed",
    vimeoId: "1216821457",
    airDate: "2025-09-06",
    description: "An incredible music video directed by Eva Cruz. Nominated for an iVie Award and recognized at the San Diego County Fair.",
    thumbnail: "",
    featured: false
  },
  {
    id: "acclaimed-2025-band",
    title: "Meet The Patrick Henry High Band",
    category: "Critically Acclaimed",
    vimeoId: "1216821582",
    airDate: "2025-10-01",
    description: "An inside look at the Patrick Henry Marching Band 2025-26. Directed by Eva Cruz.",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-2025-hot-nuggets",
    title: "Hot Nuggets of Wisdom // Mr. Miller Weaves Baskets Underwater",
    category: "Segments & Highlights",
    vimeoId: "1216712426",
    airDate: "2025-09-16",
    description: "",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-2025-parking-lot",
    title: "How To Use A High School Parking Lot",
    category: "Segments & Highlights",
    vimeoId: "1216821429",
    airDate: "2025-09-15",
    description: "",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-2025-homework",
    title: "Who Didn't Do My Homework",
    category: "Segments & Highlights",
    vimeoId: "1216821427",
    airDate: "2025-09-14",
    description: "Jack is on a mission. A very misguided mission.",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-2025-macarons",
    title: "Very Professional Cooking // Macarons",
    category: "Segments & Highlights",
    vimeoId: "1216821428",
    airDate: "2025-09-13",
    description: "Cooking will never be the same after Liam teaches you how to make 'mazing macarons.",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-2025-spooky-slime",
    title: "Patriot Makes // Spooky Slime",
    category: "Segments & Highlights",
    vimeoId: "1216821504",
    airDate: "2025-09-12",
    description: "A very special how-to video by Sirena and Kaili.",
    thumbnail: "",
    featured: false
  },
  {
    id: "seg-2025-genz-slang",
    title: "Teachers React to Gen-Z Slang",
    category: "Segments & Highlights",
    vimeoId: "1216821503",
    airDate: "2025-09-11",
    description: "Sirena and Kaili investigate what Henry staff know and don't know about Gen-Z slang.",
    thumbnail: "",
    featured: false
  },
  {
    id: "archive-e26-finale",
    title: "PH1 // E26 // 05.18.26",
    category: "Archives",
    vimeoId: "1216712429",
    airDate: "2026-05-18",
    description: "The 2025-26 PH1 season finale. Relive the magic with J Gibb and Nicky D.",
    thumbnail: "",
    featured: true
  },
  {
    id: "archive-e24-may-fourth",
    title: "PH1 // E24 // 05.04.26 (May the Fourth Be With You Special)",
    category: "Archives",
    vimeoId: "1216712427",
    airDate: "2026-05-04",
    description: "",
    thumbnail: "",
    featured: false
  },
  {
    id: "archive-e14-stranger-things",
    title: "PH1 // E14 // 01.26.26",
    category: "Archives",
    vimeoId: "1216821487",
    airDate: "2026-01-26",
    description: "A Stranger Things spectacular. Hosts Stella and Maci.",
    thumbnail: "",
    featured: false
  }
];
