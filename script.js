(function () {
  // ---- intro bumper: static frame -> Tune In -> flash -> video -> fade home ----
  // Plays once every 24 hours.
  var BUMPER_KEY = "ph1_bumper_last_shown";
  var BUMPER_HOURS = 24;
  var BUMPER_MAX_SECONDS = 8; // safety cutoff once the video starts, in case it runs long
  var FLASH_MS = 480;

  function shouldShowBumper() {
    try {
      var last = localStorage.getItem(BUMPER_KEY);
      if (!last) return true;
      var elapsedHours = (Date.now() - parseInt(last, 10)) / 3600000;
      return elapsedHours >= BUMPER_HOURS;
    } catch (e) {
      return false; // if storage is blocked, don't force the bumper every time
    }
  }

  function markBumperShown() {
    try { localStorage.setItem(BUMPER_KEY, String(Date.now())); } catch (e) {}
  }

  function dismissBumper(markShown) {
    var bumper = document.getElementById("introBumper");
    if (!bumper) return;
    bumper.classList.add("is-hidden");
    setTimeout(function () { bumper.setAttribute("hidden", ""); }, 550);
    if (markShown) markBumperShown();
  }

  (function initBumper() {
    var bumper = document.getElementById("introBumper");
    var staticFrame = document.getElementById("introStatic");
    var flash = document.getElementById("introFlash");
    var video = document.getElementById("introVideo");
    var tuneInBtn = document.getElementById("tuneInBtn");
    var skipBtn = document.getElementById("introSkip");
    if (!bumper || !video) return;

    if (!shouldShowBumper()) {
      bumper.setAttribute("hidden", "");
      return;
    }

    // Skip works at any stage — static frame or mid-video.
    skipBtn.addEventListener("click", function () { dismissBumper(true); });

    // If the video file can't be found/played, don't lock out future
    // visits over it — hide for this visit only and try again next time.
    video.addEventListener("error", function () { dismissBumper(false); });

    video.addEventListener("ended", function () { dismissBumper(true); });

    tuneInBtn.addEventListener("click", function () {
      staticFrame.style.display = "none";
      flash.classList.add("is-flashing");

      setTimeout(function () {
        video.classList.add("is-playing");
        video.play().catch(function () {
          // Autoplay blocked even with a real click (unusual, but just
          // in case) — don't strand the visitor on a white flash.
          dismissBumper(false);
        });
        // Hard cutoff starts once playback actually begins, not from
        // page load, since we don't know how long they'll sit on
        // the static frame before clicking Tune In.
        setTimeout(function () { dismissBumper(true); }, BUMPER_MAX_SECONDS * 1000);
      }, FLASH_MS);
    });
  })();
})();

(function () {
  document.title = SITE.title + " — " + SITE.tagline;

  // ---- scroll-reactive nav ----
  var topbar = document.getElementById("topbar");
  function onScroll() {
    if (window.scrollY > 40) topbar.classList.add("is-scrolled");
    else topbar.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- pull live video info straight from Vimeo ----
  // Every video in data.js only needs vimeoId + category. Title,
  // description, thumbnail, and air date all get pulled fresh from
  // Vimeo's own oEmbed API on every page load — so updating a title or
  // thumbnail on Vimeo just shows up here automatically, no editing
  // data.js required. Any field you DO set manually in data.js (title,
  // description, thumbnail, airDate) overrides the live value instead,
  // in case you ever want to word something differently than the
  // Vimeo title.
  function fetchOembed(vimeoId) {
    var url = "https://vimeo.com/api/oembed.json?url=" +
      encodeURIComponent("https://vimeo.com/" + vimeoId);
    return fetch(url)
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }

  function hydrateVideo(v) {
    if (!v.vimeoId) return Promise.resolve(Object.assign({
      title: "Untitled", description: "", airDate: "1970-01-01", thumbnail: ""
    }, v));

    return fetchOembed(v.vimeoId).then(function (data) {
      var live = {
        title: v.vimeoId,
        description: "",
        airDate: "1970-01-01",
        thumbnail: "https://vumbnail.com/" + v.vimeoId + ".jpg" // used only if oEmbed itself fails
      };
      if (data) {
        if (data.title) live.title = data.title;
        if (data.description) live.description = data.description;
        if (data.upload_date) live.airDate = data.upload_date.slice(0, 10);
        if (data.thumbnail_url) live.thumbnail = data.thumbnail_url;
      }
      // v's own explicit fields (if present) win over the live lookup.
      return Object.assign(live, v);
    });
  }

  function fmtDate(str) {
    var d = new Date(str + "T00:00:00");
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  }

  function playVideo(video) {
    var modal = document.getElementById("playerModal");
    var frame = document.getElementById("playerFrame");
    frame.innerHTML =
      '<iframe src="https://player.vimeo.com/video/' +
      encodeURIComponent(video.vimeoId) +
      '?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    document.getElementById("playerTitle").textContent = video.title;
    document.getElementById("playerDesc").textContent = video.description || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    var modal = document.getElementById("playerModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.getElementById("playerFrame").innerHTML = "";
  }

  document.querySelectorAll("[data-close]").forEach((el) =>
    el.addEventListener("click", closeModal)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function isArchive(category) {
    return SITE.archiveCategories && SITE.archiveCategories.indexOf(category) !== -1;
  }

  function buildCard(video) {
    const card = document.createElement("div");
    card.className = isArchive(video.category) ? "card card--archive" : "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Play " + video.title);

    const src = video.thumbnail || "";

    card.innerHTML =
      '<div class="card__thumbwrap">' +
        (src
          ? '<img alt="" loading="lazy" src="' + src + '" onerror="this.parentElement.innerHTML=&quot;<span class=&#39;card__fallback&#39;>NO THUMBNAIL</span>&quot;">'
          : '<span class="card__fallback">NO THUMBNAIL</span>') +
        (isArchive(video.category) ? '<span class="card__archive-flag">Classic</span>' : '') +
        '<div class="card__play"><svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.4)" stroke="#fff" stroke-width="1.4"/><path d="M9.5 8l7 4-7 4V8z"/></svg></div>' +
      '</div>' +
      '<div class="card__details"><div class="card__details-inner">' +
        '<h3 class="card__title"></h3>' +
        '<div class="card__meta"></div>' +
        '<p class="card__desc"></p>' +
      '</div></div>';

    card.querySelector(".card__title").textContent = video.title;
    card.querySelector(".card__meta").textContent = fmtDate(video.airDate);
    card.querySelector(".card__desc").textContent = video.description || "";

    card.addEventListener("click", () => playVideo(video));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playVideo(video);
      }
    });

    return card;
  }

  function slug(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function render(videos) {
    const sorted = [...videos].sort((a, b) => (a.airDate < b.airDate ? 1 : -1));

    // ---- HERO ----
    const featured = sorted.find((v) => v.featured) || sorted[0];
    const hero = document.getElementById("hero");
    if (featured) {
      hero.innerHTML =
        '<div class="hero__bg"></div>' +
        '<div class="hero__inner">' +
          '<span class="hero__tag">New Episode</span>' +
          '<h1 class="hero__title"></h1>' +
          '<p class="hero__meta"></p>' +
          '<p class="hero__desc"></p>' +
          '<div class="hero__actions">' +
            '<button class="btn btn--primary" id="heroPlay"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>Play</button>' +
            '<a class="btn btn--ghost" href="#' + slug(featured.category) + '">More Episodes</a>' +
          '</div>' +
        '</div>';
      hero.querySelector(".hero__title").textContent = featured.title;
      hero.querySelector(".hero__meta").textContent = "AIRED " + fmtDate(featured.airDate).toUpperCase();
      hero.querySelector(".hero__desc").textContent = featured.description || "";
      hero.querySelector("#heroPlay").addEventListener("click", () => playVideo(featured));
      if (featured.thumbnail) {
        hero.querySelector(".hero__bg").style.backgroundImage = "url('" + featured.thumbnail + "')";
      }
    }

    // ---- CATEGORIES / ROWS ----
    const categoriesPresent = [...new Set(sorted.map((v) => v.category))];
    const ordered = SITE.categoryOrder
      .filter((c) => categoriesPresent.includes(c))
      .concat(categoriesPresent.filter((c) => !SITE.categoryOrder.includes(c)));

    const nav = document.getElementById("categoryNav");
    const rowsEl = document.getElementById("rows");
    if (nav) nav.innerHTML = "";
    rowsEl.innerHTML = "";

    ordered.forEach((cat) => {
      const items = sorted.filter((v) => v.category === cat);

      if (nav) {
        const navLink = document.createElement("a");
        navLink.href = "#" + slug(cat);
        navLink.textContent = cat;
        nav.appendChild(navLink);
      }

      const row = document.createElement("section");
      row.className = "row";
      row.id = slug(cat);
      row.innerHTML =
        '<div class="row__head">' +
          '<div class="row__head-left">' +
            '<h2 class="row__title"></h2>' +
          '</div>' +
          '<span class="row__count"></span>' +
        '</div>' +
        '<div class="row__track"></div>';
      row.querySelector(".row__title").textContent = cat;
      row.querySelector(".row__count").textContent = items.length + (items.length === 1 ? " video" : " videos");
      const track = row.querySelector(".row__track");

      if (isArchive(cat)) {
        const leadTile = document.createElement("div");
        leadTile.className = "row__lead-tile";
        leadTile.innerHTML =
          '<img src="assets/ph1-classic-mark.png" alt="' + cat + '">' +
          '<span class="row__lead-tile-label">Classic</span>';
        track.appendChild(leadTile);
      }

      items.forEach((v) => track.appendChild(buildCard(v)));

      rowsEl.appendChild(row);
    });
  }

  Promise.all(VIDEOS.map(hydrateVideo)).then(render);
})();
