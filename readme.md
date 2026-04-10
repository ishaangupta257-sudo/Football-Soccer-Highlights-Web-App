# ⚽ Football (Soccer) Highlights Web App

## 📌 Overview

This project is a static frontend for browsing football highlight cards, filtering by league, searching by team, and saving favorites locally.

By default, the app runs in a clearly labeled demo mode with curated sample data. If you provide a ScoreBat token, it can also fetch the live `free-feed` API directly in the browser.

## 📌 Current Behavior

- Demo mode is the default and uses built-in sample matches.
- Live mode activates only when `window.GOALREEL_CONFIG.scorebatToken` is set.
- If the live request fails, the UI falls back to demo data instead of breaking.
- Video embeds are parsed and host-whitelisted before rendering.

## 🎯 Features

- Browse football highlights in a responsive card grid
- Filter by league tabs
- Search by team, match, or competition
- Sort by date or title
- Save favorites in `localStorage`
- Toggle between dark and light themes
- Show source-aware hero stats

## 🌐 Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API for optional live ScoreBat data

## 🛠️ Project Structure

```text
/project-folder
|-- index.html
|-- style.css
|-- script.js
|-- readme.md
```

## 🚀 Running The Project

1. Clone the repository:

   ```bash
   git clone https://github.com/ishaangupta257-sudo/Football-Soccer-Highlights-Web-App
   ```

2. Open the project folder.
3. Open `index.html` in your browser for demo mode.

For live mode, serve the folder from a local web server so browser fetch behavior is more reliable. For example:

```bash
python3 -m http.server
```

Then open the local server URL in your browser.

## 💡 Enabling Live ScoreBat Data

Add your token before the main script in [index.html](/Users/ishaangupta/Documents/Football%20(Soccer)%20Highlights%20Web%20App/index.html):

```html
<script>
  window.GOALREEL_CONFIG = window.GOALREEL_CONFIG || {};
  window.GOALREEL_CONFIG.scorebatToken = "YOUR_SCOREBAT_TOKEN";
  window.GOALREEL_CONFIG.scorebatFeed = "free-feed";
</script>
```

If no token is provided, the app stays in demo mode and says so in the UI.

## 🧩 Notes

- The third hero stat shows `Today` in live mode.
- In demo mode, that stat switches to `Latest Matchday` so it stays meaningful with sample data.
- Favorites and theme preference are stored in `localStorage`.

## 👨‍💻 Author

Ishaan Gupta
