/* ============================================================
   PH1 — CONTENT FILE
   ------------------------------------------------------------
   ⚠️  TEMPORARY STATE — YouTube stopgap, NOT sync_videos.py output
   ------------------------------------------------------------
   Vimeo access is now uncertain too, so this file was switched over
   to YouTube links by hand while that gets sorted out. This means:

   - DO NOT run sync_videos.py right now. That script only knows how
     to generate Vimeo-sourced entries (vimeoId + category only) — if
     you run it, it will overwrite everything below and wipe out the
     YouTube switch, the titles, and the descriptions.
   - Once Vimeo/hosting is sorted out for good, this file can go back
     to being auto-generated. Until then, edit this file directly for
     new episodes (see the format below).

   HOW TO ADD A NEW VIDEO RIGHT NOW (while on YouTube)
   Copy one of the blocks below and fill in:
     - vimeoId    : the YouTube video ID (from the URL after "v=",
                    e.g. youtube.com/watch?v=ABC123 -> "ABC123")
     - source     : must be exactly "youtube"
     - category   : which row it lands in
     - title      : required — YouTube's oEmbed doesn't reliably give
                    us this automatically for every video
     - description: optional, but there's no automatic source for it
                    on YouTube, so it'll just be blank if you skip it
     - airDate    : "YYYY-MM-DD", controls sort order
     - featured   : true/false — true puts it in the hero banner
   ============================================================ */

const SITE = {
  title: "PH1",
  tagline: "One Channel. Your Voice.",
  categoryOrder: [
    "Season 2026-27",
    "Segments & Highlights",
    "Critically Acclaimed",
    "Student Films & Projects",
    "Archives"
  ],
  archiveCategories: ["Archives"]
};

const VIDEOS = [
  // ---- Season 2026-27 ----
  {
    vimeoId: "fz-dYX6-6IM",
    source: "youtube",
    category: "Season 2026-27",
    title: "PH1 // S2 E2 // 08.31.26",
    description: "From sewers to the streets, Julian and Roman are back in action with another thrilling episode of PH1, bringing their knunchuck skills and critical information the Patrick Henry Patriots need to make it through the week.",
    airDate: "2026-08-31",
    featured: true
  },
  {
    vimeoId: "Uxa02keHG48",
    source: "youtube",
    category: "Season 2026-27",
    title: "PH1 // S2 E1 // 08.24.26",
    description: "Your 2026-27 Season Premiere is here! Welcome back for this opening episode hosted by Stella and Maci. Featuring a tribute to Coach Reggie, Get To Know Principal Kray, catch up on summer, and check out our Senior Backpacks!",
    airDate: "2026-08-24"
  },

  // ---- Critically Acclaimed ----
  {
    vimeoId: "S015Z_mQefs",
    source: "youtube",
    category: "Critically Acclaimed",
    title: "You Are Not Alone PSA",
    description: "An iVie-nominated PSA reminding you that you are never alone.",
    airDate: "2025-09-10"
  },
  {
    vimeoId: "Ed9cgZfvAOQ",
    source: "youtube",
    category: "Critically Acclaimed",
    title: "Cross Country At The Clovis Invitational",
    description: "The Patrick Henry Cross Country team goes on a roadtrip up north to the Clovis Invitational. Awarded at the San Diego County Fair. Directed by Eva Cruz.",
    airDate: "2025-09-09"
  },
  {
    vimeoId: "xOmFjdyvNIk",
    source: "youtube",
    category: "Critically Acclaimed",
    title: "Patriot Makes // Spooky Rice Krispie Treats",
    description: "A spooky how-to video about how to make some spooky rice krispie treats. By Allen and Mabel.",
    airDate: "2025-09-08"
  },
  {
    vimeoId: "Ocf9BlMHamI",
    source: "youtube",
    category: "Critically Acclaimed",
    title: "PSA - The Lunch Runner",
    description: "Max's daring PSA calling out the subversive subculture of lunch running. Nominated for an iVie Award in the PSA category.",
    airDate: "2025-09-07"
  },
  {
    vimeoId: "dxUfR79afyc",
    source: "youtube",
    category: "Critically Acclaimed",
    title: "Don't Let It Fade (Music Video) by CRXA",
    description: "An incredible music video directed by Eva Cruz. Nominated for an iVie Award and recognized at the San Diego County Fair.",
    airDate: "2025-09-06"
  },
  {
    vimeoId: "nr0GyrFVnSM",
    source: "youtube",
    category: "Critically Acclaimed",
    title: "Meet The Patrick Henry High Band",
    description: "An inside look at the Patrick Henry Marching Band 2025-26. Directed by Eva Cruz.",
    airDate: "2025-10-01"
  },

  // ---- Segments & Highlights ----
  {
    vimeoId: "MEMdrtmT7xg",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Checkout Girls Flag Football at PHHS",
    description: "Produced by Bailey, Kaili, and Sirena",
    airDate: "2026-08-28"
  },
  {
    vimeoId: "c9-gXAGRz_8",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Get To Know Principal Kray",
    description: "Meet Patrick Henry's new principal.\nHosted by Cameron K\nProduced by Cameron and Gavin",
    airDate: "2026-08-24"
  },
  {
    vimeoId: "PVGXRCtvYgY",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Hot Nuggets of Wisdom // Mr. Miller Weaves Baskets Underwater",
    description: "",
    airDate: "2025-09-16"
  },
  {
    vimeoId: "r_JPw3KLRO0",
    source: "youtube",
    category: "Segments & Highlights",
    title: "How To Use A High School Parking Lot",
    description: "",
    airDate: "2025-09-15"
  },
  {
    vimeoId: "QnfaDBXe5Tc",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Who Didn't Do My Homework",
    description: "Jack is on a mission. A very misguided mission.",
    airDate: "2025-09-14"
  },
  {
    vimeoId: "JNZYr4RdM5A",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Very Professional Cooking // Macarons",
    description: "Cooking will never be the same after Liam teaches you how to make 'mazing macarons.",
    airDate: "2025-09-13"
  },
  {
    vimeoId: "CsRX6hLX2nw",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Patriot Makes // Spooky Slime",
    description: "A very special how-to video by Sirena and Kaili.",
    airDate: "2025-09-12"
  },
  {
    vimeoId: "VNtR808ZfxU",
    source: "youtube",
    category: "Segments & Highlights",
    title: "Teachers React to Gen-Z Slang",
    description: "Sirena and Kaili investigate what Henry staff know and don't know about Gen-Z slang.",
    airDate: "2025-09-11"
  },

  // ---- Archives ----
  {
    vimeoId: "ZVodO3nOm2U",
    source: "youtube",
    category: "Archives",
    title: "PH1 // E26 // 05.18.26",
    description: "The 2025-26 PH1 season finale. Relive the magic with J Gibb and Nicky D.",
    airDate: "2026-05-18"
  },
  {
    vimeoId: "irGcifYX5RY",
    source: "youtube",
    category: "Archives",
    title: "PH1 // E24 // 05.04.26 (May the Fourth Be With You Special)",
    description: "",
    airDate: "2026-05-04"
  },
  {
    vimeoId: "us4woPJdVJk",
    source: "youtube",
    category: "Archives",
    title: "PH1 // E14 // 01.26.26",
    description: "A Stranger Things spectacular. Hosts Stella and Maci.",
    airDate: "2026-01-26"
  }
];
