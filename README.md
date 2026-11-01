# KAY OS v3 — Portfolio + Interactive Desktop

Static HTML/CSS/JavaScript website. Recruiter-friendly homepage plus KAY OS workspace.

## GitHub Pages
Upload **the contents** of this folder to the root of `cipherKay/kay-os-portfolio`. Under Settings → Pages, choose Deploy from branch, `main`, `/(root)`.

## Files
- `index.html` — homepage and desktop markup, with **embedded critical desktop CSS** to prevent missing/stale desktop styling
- `css/style.css` — base portfolio styling
- `css/desktop-v3.css` — separately readable source of the embedded desktop CSS
- `js/main.js` — application windows, taskbar, launch controls
- `.nojekyll` — GitHub Pages static-site marker

## Notes
- The desktop stylesheet is embedded in index.html so the desktop layout is not dependent on an additional CSS fetch.
- No proprietary code or employer records are included.
- Project windows are case-study summaries, not full software replicas.
- Test homepage, Launch KAY OS, each app, Back to portfolio, and mobile layout after publishing.
