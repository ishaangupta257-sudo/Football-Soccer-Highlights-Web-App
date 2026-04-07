/* ─────────────────────────────────────────
   LEAGUE CONFIGURATION
───────────────────────────────────────── */

// League keywords for filtering
const LEAGUE_KEYWORDS = {
  "premier-league": ["premier league", "epl"],
  "bundesliga": ["bundesliga"],
  "serie-a": ["serie a"],
  "la-liga": ["la liga", "laliga", "primera division"],
  "champions-league": ["champions league", "ucl", "champions"],
};

/* ─────────────────────────────────────────
   MATCH DATA (Static data for demonstration)
───────────────────────────────────────── */
const MATCH_DATA = [
  {
    id: "epl-ars-che-2025",
    title: "Arsenal vs Chelsea",
    competition: "Premier League",
    thumb: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-28",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeScore: 3,
    awayScore: 1,
  },
  {
    id: "epl-mci-liv-2025",
    title: "Man City vs Liverpool",
    competition: "Premier League",
    thumb: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-26",
    homeTeam: "Man City",
    awayTeam: "Liverpool",
    homeScore: 1,
    awayScore: 2,
  },
  {
    id: "epl-tot-mun-2025",
    title: "Tottenham vs Man United",
    competition: "Premier League",
    thumb: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-22",
    homeTeam: "Tottenham",
    awayTeam: "Man United",
    homeScore: 2,
    awayScore: 0,
  },
  {
    id: "bun-bay-bvb-2025",
    title: "Bayern Munich vs Dortmund",
    competition: "Bundesliga",
    thumb: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-25",
    homeTeam: "Bayern Munich",
    awayTeam: "Dortmund",
    homeScore: 2,
    awayScore: 2,
  },
  {
    id: "bun-lev-fra-2025",
    title: "Bayer Leverkusen vs Frankfurt",
    competition: "Bundesliga",
    thumb: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-21",
    homeTeam: "Leverkusen",
    awayTeam: "Frankfurt",
    homeScore: 3,
    awayScore: 1,
  },
  {
    id: "lla-rma-bar-2025",
    title: "Real Madrid vs Barcelona",
    competition: "La Liga",
    thumb: "https://images.unsplash.com/photo-1551958219-acbc68bce95c?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-24",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: 1,
    awayScore: 0,
  },
  {
    id: "lla-atm-sev-2025",
    title: "Atletico Madrid vs Sevilla",
    competition: "La Liga",
    thumb: "https://images.unsplash.com/photo-1477090792053-5d8e0c9c73d7?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-20",
    homeTeam: "Atletico Madrid",
    awayTeam: "Sevilla",
    homeScore: 2,
    awayScore: 1,
  },
  {
    id: "ser-acm-int-2025",
    title: "AC Milan vs Inter Milan",
    competition: "Serie A",
    thumb: "https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-23",
    homeTeam: "AC Milan",
    awayTeam: "Inter Milan",
    homeScore: 2,
    awayScore: 3,
  },
  {
    id: "ser-juv-nap-2025",
    title: "Juventus vs Napoli",
    competition: "Serie A",
    thumb: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-19",
    homeTeam: "Juventus",
    awayTeam: "Napoli",
    homeScore: 1,
    awayScore: 1,
  },
  {
    id: "ucl-rma-mci-2025",
    title: "Real Madrid vs Man City",
    competition: "Champions League",
    thumb: "https://images.unsplash.com/photo-1504216307754-ed66346bbbfd?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-18",
    homeTeam: "Real Madrid",
    awayTeam: "Man City",
    homeScore: 3,
    awayScore: 2,
  },
  {
    id: "ucl-bay-psg-2025",
    title: "Bayern Munich vs PSG",
    competition: "Champions League",
    thumb: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-12",
    homeTeam: "Bayern Munich",
    awayTeam: "PSG",
    homeScore: 0,
    awayScore: 1,
  },
  {
    id: "ucl-ars-bar-2025",
    title: "Arsenal vs Barcelona",
    competition: "Champions League",
    thumb: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600&q=80",
    embed: "",
    url: "https://www.scorebat.com",
    date: "2025-03-05",
    homeTeam: "Arsenal",
    awayTeam: "Barcelona",
    homeScore: 2,
    awayScore: 1,
  },
];

/* ─────────────────────────────────────────
   APPLICATION STATE
───────────────────────────────────────── */
let allVideos = []; // All video data
let filteredVideos = []; // Videos after applying filters
let currentLeague = "all"; // Currently selected league
let searchQuery = ""; // Current search term
let sortMode = "latest"; // Current sort mode
let favorites = []; // Favorite videos
let currentVideoData = null; // Currently opened video in modal

/* ─────────────────────────────────────────
   DOM ELEMENT REFERENCES
───────────────────────────────────────── */
const videoGrid = document.getElementById("videoGrid");
const loadingState = document.getElementById("loadingState");
const errorState = document.getElementById("errorState");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultsCount = document.getElementById("resultsCount");
const sortSelect = document.getElementById("sortSelect");
const leagueTabs = document.getElementById("leagueTabs");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalLeague = document.getElementById("modalLeague");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalVideo = document.getElementById("modalVideo");
const modalUrl = document.getElementById("modalUrl");
const favSidebar = document.getElementById("favSidebar");
const favSidebarClose = document.getElementById("favSidebarClose");
const favFab = document.getElementById("favFab");
const favBadge = document.getElementById("favBadge");
const favList = document.getElementById("favList");
const favEmpty = document.getElementById("favEmpty");
const statTotal = document.getElementById("statTotal");
const statLeagues = document.getElementById("statLeagues");
const statToday = document.getElementById("statToday");
const retryBtn = document.getElementById("retryBtn");
const errorMsg = document.getElementById("errorMsg");

/* ─────────────────────────────────────────
   INITIALIZATION
───────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme and favorites immediately
  loadTheme();
  loadFavorites();
  updateFavoriteBadge();

  // Setup all event listeners
  setupEventListeners();

  // Start loading highlights
  initializeApp();
});

/* ─────────────────────────────────────────
   INITIALIZE APP
───────────────────────────────────────── */
async function initializeApp() {
  try {
    // Fetch and display highlights
    await fetchHighlights();
  } catch (error) {
    console.error("App initialization error:", error);
    errorMsg.textContent = "Failed to load highlights. Please try again.";
    showState("error");
  }
}

/* ─────────────────────────────────────────
   EVENT LISTENERS SETUP
───────────────────────────────────────── */
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", handleSearch);
  clearSearch.addEventListener("click", clearSearchField);

  // Sort functionality
  sortSelect.addEventListener("change", handleSort);

  // League tabs
  leagueTabs.addEventListener("click", handleLeagueTabClick);

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Modal controls
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Favorites sidebar
  favFab.addEventListener("click", openFavoritesSidebar);
  favSidebarClose.addEventListener("click", closeFavoritesSidebar);

  // Retry button
  retryBtn.addEventListener("click", () => {
    fetchHighlights();
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeFavoritesSidebar();
    }
  });
}

/* ─────────────────────────────────────────
   FETCH HIGHLIGHTS DATA (Using async/await)
───────────────────────────────────────── */
async function fetchHighlights() {
  // Show loading state
  showState("loading");

  try {
    // Simulate API call with async/await
    await loadMatchData();

    // Update statistics after data is loaded
    updateHeroStatistics();

    // Apply filters and render
    applyFiltersAndRender();
  } catch (error) {
    console.error("Error fetching highlights:", error);
    errorMsg.textContent = "Failed to load highlights. Please try again.";
    showState("error");
  }
}

/* ─────────────────────────────────────────
   LOAD MATCH DATA (Simulates async API call)
───────────────────────────────────────── */
async function loadMatchData() {
  // Simulate network delay (reduce to 300ms for faster loading)
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Validate data
  if (!MATCH_DATA || MATCH_DATA.length === 0) {
    throw new Error("No match data available");
  }

  // HOF #1: Use .map() to normalize each match into a standard format
  allVideos = MATCH_DATA.map((match) => {
    return {
      id: match.id,
      title: match.title,
      competition: match.competition,
      thumb: match.thumb,
      embed: match.embed,
      url: match.url,
      date: match.date,
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      homeScore: match.homeScore,
      awayScore: match.awayScore,
    };
  });
}

/* ─────────────────────────────────────────
   FILTER AND RENDER VIDEOS
───────────────────────────────────────── */
function applyFiltersAndRender() {
  // Start with all videos
  let videos = allVideos;

  // HOF #2: Use .filter() to filter by league
  if (currentLeague !== "all") {
    videos = videos.filter((video) => {
      return matchesLeague(video.competition, currentLeague);
    });
  }

  // HOF #3: Use .filter() to filter by search query
  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    videos = videos.filter((video) => {
      const titleMatch = video.title.toLowerCase().includes(query);
      const competitionMatch = video.competition.toLowerCase().includes(query);
      const homeTeamMatch = video.homeTeam.toLowerCase().includes(query);
      const awayTeamMatch = video.awayTeam.toLowerCase().includes(query);

      return titleMatch || competitionMatch || homeTeamMatch || awayTeamMatch;
    });
  }

  // Sort videos
  videos = sortVideos(videos);

  // Update filtered videos
  filteredVideos = videos;

  // Render the results
  renderVideos(videos);
}

/* ─────────────────────────────────────────
   CHECK IF COMPETITION MATCHES LEAGUE
───────────────────────────────────────── */
function matchesLeague(competition, leagueSlug) {
  const keywords = LEAGUE_KEYWORDS[leagueSlug];
  if (!keywords) {
    return false;
  }

  const competitionLower = competition.toLowerCase();

  // HOF #4: Use .filter() to check if any keyword matches
  const matchingKeywords = keywords.filter((keyword) => {
    return competitionLower.includes(keyword);
  });

  return matchingKeywords.length > 0;
}

/* ─────────────────────────────────────────
   SORT VIDEOS BASED ON SORT MODE
───────────────────────────────────────── */
function sortVideos(videos) {
  // Create a copy to avoid mutating original array
  const sortedVideos = [...videos];

  if (sortMode === "latest") {
    // Sort by date (newest first)
    sortedVideos.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  } else if (sortMode === "oldest") {
    // Sort by date (oldest first)
    sortedVideos.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  } else if (sortMode === "az") {
    // Sort alphabetically A-Z
    sortedVideos.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (sortMode === "za") {
    // Sort alphabetically Z-A
    sortedVideos.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  }

  return sortedVideos;
}

/* ─────────────────────────────────────────
   RENDER VIDEOS TO THE GRID
───────────────────────────────────────── */
function renderVideos(videos) {
  // Check if we have any videos to display
  if (!videos || videos.length === 0) {
    showState("empty");
    updateResultsCount(0);
    return;
  }

  // Update results count
  updateResultsCount(videos.length);

  // HOF #5: Use .map() to create HTML for each video card
  const videoCardsHTML = videos.map((video) => {
    return createVideoCardHTML(video);
  });

  // Join all HTML and insert into grid
  videoGrid.innerHTML = videoCardsHTML.join("");

  // Show the grid (must be called after setting innerHTML)
  showState("grid");

  // Add click event listeners to each card
  addCardClickListeners();
}

/* ─────────────────────────────────────────
   CREATE HTML FOR A SINGLE VIDEO CARD
───────────────────────────────────────── */
function createVideoCardHTML(video) {
  // Check if video is in favorites
  const isFavorite = isVideoFavorite(video.id);
  const favoriteClass = isFavorite ? "favorited" : "";

  // Format the date
  const formattedDate = formatDate(video.date);

  // Escape HTML to prevent XSS
  const safeTitle = escapeHTML(video.title);
  const safeCompetition = escapeHTML(video.competition);
  const safeThumb = escapeHTML(video.thumb);
  const safeId = escapeHTML(video.id);

  // Create score display
  const scoreDisplay =
    video.homeScore !== null && video.awayScore !== null
      ? `<span class="card-score">${video.homeScore} – ${video.awayScore}</span>`
      : "";

  return `
    <div class="video-card ${favoriteClass}" data-id="${safeId}">
      <div class="card-thumb">
        <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80'" />
        <div class="play-overlay">
          <div class="play-btn-circle">▶</div>
        </div>
        <div class="card-league-badge">${safeCompetition}</div>
        <div class="card-fav-indicator">❤️</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${safeTitle}</h3>
        <div class="card-meta">
          <span class="card-date">${formattedDate}</span>
          ${scoreDisplay}
        </div>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────
   ADD CLICK LISTENERS TO VIDEO CARDS
───────────────────────────────────────── */
function addCardClickListeners() {
  // Get all video cards
  const cards = videoGrid.querySelectorAll(".video-card");

  // Add click listener to each card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoId = card.dataset.id;
      openModal(videoId);
    });
  });
}

/* ─────────────────────────────────────────
   OPEN VIDEO MODAL
───────────────────────────────────────── */
function openModal(videoId) {
  // HOF #6: Use .filter() to find the video by ID
  const videoArray = allVideos.filter((video) => {
    return video.id === videoId;
  });

  const video = videoArray[0];

  if (!video) {
    return;
  }

  // Set current video
  currentVideoData = video;

  // Update modal content
  modalLeague.textContent = video.competition;
  modalTitle.textContent = video.title;
  modalDate.textContent = formatDate(video.date);
  modalUrl.innerHTML = `<a href="${escapeHTML(video.url)}" target="_blank" rel="noopener">View on ScoreBat →</a>`;

  // Display video embed or fallback
  if (video.embed) {
    modalVideo.innerHTML = video.embed;

    // Adjust iframe size
    const iframe = modalVideo.querySelector("iframe");
    if (iframe) {
      iframe.removeAttribute("width");
      iframe.removeAttribute("height");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
    }
  } else {
    // Show fallback content with score
    const scoreHTML =
      video.homeScore !== null && video.awayScore !== null
        ? `
          <div style="font-size:2rem;font-weight:700;letter-spacing:2px;color:#e8eaf2;margin-bottom:4px">
            ${video.homeScore} – ${video.awayScore}
          </div>
          <div style="font-size:0.85rem;color:#6b7a99;margin-bottom:20px">
            ${escapeHTML(video.homeTeam)} vs ${escapeHTML(video.awayTeam)}
          </div>
        `
        : "";

    modalVideo.innerHTML = `
      <div class="no-embed">
        <span style="font-size:2.5rem">⚽</span>
        ${scoreHTML}
        <p>${escapeHTML(video.title)}</p>
        <a href="https://www.scorebat.com" target="_blank" rel="noopener">Watch on ScoreBat →</a>
      </div>
    `;
  }

  // Update favorite button
  updateFavoriteButton();

  // Show modal
  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

/* ─────────────────────────────────────────
   CLOSE VIDEO MODAL
───────────────────────────────────────── */
function closeModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = "";
  modalVideo.innerHTML = "";
  currentVideoData = null;
}

/* ─────────────────────────────────────────
   SEARCH FUNCTIONALITY
───────────────────────────────────────── */
function handleSearch(event) {
  searchQuery = event.target.value;

  // Show/hide clear button
  if (searchQuery) {
    clearSearch.hidden = false;
  } else {
    clearSearch.hidden = true;
  }

  // Apply filters
  applyFiltersAndRender();
}

function clearSearchField() {
  searchInput.value = "";
  searchQuery = "";
  clearSearch.hidden = true;
  searchInput.focus();
  applyFiltersAndRender();
}

/* ─────────────────────────────────────────
   LEAGUE TAB FUNCTIONALITY
───────────────────────────────────────── */
function handleLeagueTabClick(event) {
  const button = event.target.closest(".tab-btn");

  if (!button) {
    return;
  }

  // Remove active class from all tabs
  const allTabs = document.querySelectorAll(".tab-btn");
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add active class to clicked tab
  button.classList.add("active");

  // Update current league
  currentLeague = button.dataset.league;

  // Apply filters
  applyFiltersAndRender();
}

/* ─────────────────────────────────────────
   SORT FUNCTIONALITY
───────────────────────────────────────── */
function handleSort(event) {
  sortMode = event.target.value;
  applyFiltersAndRender();
}

/* ─────────────────────────────────────────
   FAVORITES FUNCTIONALITY
───────────────────────────────────────── */
function toggleFavorite() {
  if (!currentVideoData) {
    return;
  }

  const video = currentVideoData;

  // HOF #7: Use .filter() to check if video is already in favorites
  const existingFavorites = favorites.filter((fav) => {
    return fav.id === video.id;
  });

  if (existingFavorites.length === 0) {
    // Add to favorites
    const newFavorite = {
      id: video.id,
      title: video.title,
      thumb: video.thumb,
      competition: video.competition,
    };
    favorites.push(newFavorite);
  } else {
    // Remove from favorites - HOF #8: Use .filter() to remove
    favorites = favorites.filter((fav) => {
      return fav.id !== video.id;
    });
  }

  // Save to localStorage
  saveFavorites();

  // Update UI
  updateFavoriteButton();
  updateFavoriteBadge();
  updateFavoritesSidebar();

  // Update the card in grid if visible
  updateCardFavoriteStatus(video.id);
}

function updateFavoriteButton() {
  if (!currentVideoData) {
    return;
  }

  const isFavorite = isVideoFavorite(currentVideoData.id);
  const favBtn = document.getElementById("favBtn");
  const favIcon = document.getElementById("favIcon");
  const favLabel = document.getElementById("favLabel");

  if (isFavorite) {
    favIcon.textContent = "❤️";
    favLabel.textContent = "Remove Favorite";
    favBtn.classList.add("active");
  } else {
    favIcon.textContent = "🤍";
    favLabel.textContent = "Add to Favorites";
    favBtn.classList.remove("active");
  }
}

function updateFavoriteBadge() {
  favBadge.textContent = favorites.length;
}

function openFavoritesSidebar() {
  updateFavoritesSidebar();
  favSidebar.classList.add("open");
}

function closeFavoritesSidebar() {
  favSidebar.classList.remove("open");
}

function updateFavoritesSidebar() {
  // Check if there are any favorites
  if (favorites.length === 0) {
    favList.innerHTML = "";
    favEmpty.classList.add("visible");
    return;
  }

  favEmpty.classList.remove("visible");

  // HOF #9: Use .map() to create HTML for each favorite item
  const favoriteItemsHTML = favorites.map((favorite) => {
    const safeId = escapeHTML(favorite.id);
    const safeTitle = escapeHTML(favorite.title);
    const safeCompetition = escapeHTML(favorite.competition);
    const safeThumb = escapeHTML(favorite.thumb);

    const thumbHTML = favorite.thumb
      ? `<img class="fav-item-thumb" src="${safeThumb}" alt="" loading="lazy">`
      : `<div class="fav-item-thumb" style="background:var(--bg-3);border-radius:6px"></div>`;

    return `
      <li class="fav-item" data-id="${safeId}">
        ${thumbHTML}
        <div class="fav-item-info">
          <div class="fav-item-title">${safeTitle}</div>
          <div class="fav-item-league">${safeCompetition}</div>
        </div>
        <button class="fav-item-remove" data-fav-id="${safeId}" aria-label="Remove from favorites">✕</button>
      </li>
    `;
  });

  // Insert HTML
  favList.innerHTML = favoriteItemsHTML.join("");

  // Add event listeners to favorite items
  addFavoriteItemListeners();
}

function addFavoriteItemListeners() {
  // Click on item to open modal
  const favoriteItems = favList.querySelectorAll(".fav-item");
  favoriteItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Don't open if clicking remove button
      if (!event.target.closest(".fav-item-remove")) {
        closeFavoritesSidebar();
        openModal(item.dataset.id);
      }
    });
  });

  // Remove buttons
  const removeButtons = favList.querySelectorAll(".fav-item-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const videoId = button.dataset.favId;

      // HOF #10: Use .filter() to remove from favorites
      favorites = favorites.filter((fav) => {
        return fav.id !== videoId;
      });

      saveFavorites();
      updateFavoriteBadge();
      updateFavoritesSidebar();
      updateCardFavoriteStatus(videoId);
    });
  });
}

function updateCardFavoriteStatus(videoId) {
  const card = videoGrid.querySelector(`[data-id="${videoId}"]`);
  if (card) {
    const isFavorite = isVideoFavorite(videoId);
    if (isFavorite) {
      card.classList.add("favorited");
    } else {
      card.classList.remove("favorited");
    }
  }
}

function isVideoFavorite(videoId) {
  // HOF #11: Use .filter() to check if video is in favorites
  const matchingFavorites = favorites.filter((fav) => {
    return fav.id === videoId;
  });

  return matchingFavorites.length > 0;
}

function loadFavorites() {
  try {
    const saved = localStorage.getItem("goalreel_favs");
    if (saved) {
      favorites = JSON.parse(saved);
    } else {
      favorites = [];
    }
  } catch (error) {
    console.error("Error loading favorites:", error);
    favorites = [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("goalreel_favs", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites:", error);
  }
}

/* ─────────────────────────────────────────
   THEME FUNCTIONALITY
───────────────────────────────────────── */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  themeIcon.textContent = newTheme === "dark" ? "🌙" : "☀️";

  // Save to localStorage
  localStorage.setItem("goalreel_theme", newTheme);
}

function loadTheme() {
  // Get saved theme or default
  let savedTheme = localStorage.getItem("goalreel_theme");

  if (!savedTheme) {
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    savedTheme = prefersDark ? "dark" : "light";
  }

  document.documentElement.setAttribute("data-theme", savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";
}

/* ─────────────────────────────────────────
   UPDATE HERO STATISTICS
───────────────────────────────────────── */
function updateHeroStatistics() {
  // Total highlights
  statTotal.textContent = allVideos.length;

  // Count unique leagues - HOF #12: Use .map() to extract competitions
  const allCompetitions = allVideos.map((video) => {
    return video.competition;
  });

  // Get unique competitions
  const uniqueCompetitions = [...new Set(allCompetitions)];
  statLeagues.textContent = uniqueCompetitions.length;

  // Count today's matches - HOF #13: Use .filter() to find today's matches
  const today = new Date().toISOString().split("T")[0];
  const todayMatches = allVideos.filter((video) => {
    return video.date === today;
  });

  statToday.textContent = todayMatches.length;
}

/* ─────────────────────────────────────────
   UI STATE MANAGEMENT
───────────────────────────────────────── */
function showState(state) {
  // First, hide everything
  loadingState.hidden = true;
  loadingState.style.display = "none";
  
  errorState.hidden = true;
  errorState.style.display = "none";
  
  emptyState.hidden = true;
  emptyState.style.display = "none";
  
  videoGrid.hidden = true;
  videoGrid.style.display = "none";

  // Then show only the requested state
  if (state === "loading") {
    loadingState.hidden = false;
    loadingState.style.display = "flex";
  } else if (state === "error") {
    errorState.hidden = false;
    errorState.style.display = "flex";
  } else if (state === "empty") {
    emptyState.hidden = false;
    emptyState.style.display = "flex";
  } else if (state === "grid") {
    videoGrid.hidden = false;
    videoGrid.style.display = "grid";
  }
}

function updateResultsCount(count) {
  if (count === 0) {
    resultsCount.innerHTML = `Showing <strong>0</strong> highlights`;
  } else {
    const label = count === 1 ? "highlight" : "highlights";
    resultsCount.innerHTML = `Showing <strong>${count}</strong> ${label}`;
  }
}

/* ─────────────────────────────────────────
   UTILITY FUNCTIONS
───────────────────────────────────────── */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function escapeHTML(str) {
  if (str === null || str === undefined) {
    return "";
  }
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

/* ─────────────────────────────────────────
   GLOBAL FUNCTIONS (for inline onclick)
───────────────────────────────────────── */
window.resetFilters = function () {
  searchInput.value = "";
  searchQuery = "";
  currentLeague = "all";
  clearSearch.hidden = true;

  // Reset active tab
  const allTabs = document.querySelectorAll(".tab-btn");
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const allTab = document.querySelector('[data-league="all"]');
  if (allTab) {
    allTab.classList.add("active");
  }

  applyFiltersAndRender();
};

window.toggleFavorite = toggleFavorite;