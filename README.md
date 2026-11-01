## KAY OS v5.4 — Mission-X launch repair

Fixed the missing Mission-X JavaScript reference in `index.html`, restored valid mobile stylesheet paths, and preserved the interactive newspaper cipher and existing portfolio apps.

Deploy the **contents** of this folder to the repository root. Use a hard refresh after deployment. The game uses only fictional, educational systems.

## v4.8 mobile layout refinement

Compact mobile shortcuts, shorter labels, three-up KPI cards, reduced taskbar height, and preserved desktop layout. Verify on real devices after deployment.

# KAY OS v3.4 — Interactive Project Demos

All eight featured projects have interactive browser demonstrations. Device ordering retains its request/list/status/notification preview. Seven other projects now include local, fictional-data interactions.

Upload the **contents** of this folder into the root of your GitHub repository (not the ZIP itself). GitHub Pages: Settings → Pages → Deploy from branch → main / root.

No live SharePoint, Power Automate, email, or external services are connected. All demo data is illustrative.


## v3.5: Reporting charts
The Reporting Automation and Reporting Redesign project windows now contain responsive SVG charts, four KPI cards, comparison series, chart-type selectors, and accessible data tables. All plotted values are explicitly fictional demonstration data. No external chart library or network connection is required.

## v3.6 Recognition App
Role-based Employee, Manager and Admin preview, recognition submissions, approval queue, points ledger, leaderboard and fictional rewards catalog. All data is local browser demo data and resets on refresh. No real SharePoint, Power Automate or Teams integration.

## v3.7 recognition preview
The recognition form has a Preview recognition button. The preview displays recipient, category, points, personalized message, privacy and Teams sharing settings. Submissions appear as pending on the Overview screen; approving or declining updates the status of the simulated delivered recognition. No external notifications are sent.


## v3.8 — Teams-style recognition feed
Approved public recognition submissions appear as polished cards on the Overview screen, with recipient initials, sender, recognition badge, message, points, and approval indicator. Private recognition does not appear in the public feed. All data and messaging are fictional browser-only simulations.

## v3.9 layout update
Larger responsive application windows, maximize/restore buttons, independent content scrolling, and improved Recognition App dashboard spacing. All demos use fictional data.

## v4.0 — SharePoint Newsletter Library
Added a standalone case study and interactive newsletter demo: separately stored pages, seamless combined reader, and fictional page-level engagement chart. No private SharePoint data or actual PDF documents are included.


## v4.1 window positioning fixes
All app windows open centered and remain inside the viewport; dragging is clamped to the visible desktop; maximize/restore and browser resize preserve reachable title bars. Project Explorer and Recognition App receive larger default widths.


## v4.2 navigation repair
Restores click handlers for Explore in KAY OS, all View project buttons, desktop shortcuts, Project Explorer case-study links, Start menu, and Back to portfolio. Supports the legacy #/projects URL.


## v4.3 Window layer fix
All application windows now render in a dedicated fixed viewport layer (`#window-area`), outside desktop grid placement. `css/window-layer-v4.3.css` overrides legacy positioning rules. Project Explorer and other app windows are centered, bounded, and draggable. Homepage project count updated to 9.

## v4.4 Device Ordering repair
- Initialized the in-browser order list, status options, and sequential request IDs.
- The Add request to list button now adds a demo row and confirms submission.
- Editing a status displays a fictional notification preview; no email is sent.

## v4.5 — Security Lab

Replaced the static Security Lab demo with a fictional SOC tabletop: evidence timeline, triage acknowledgement, containment recommendation, report generation, and copy action. The case uses a reserved example IP and example.test address; no live systems or external services.


## v4.6 — Mobile responsive layout
- Mobile/tablet viewport app windows with accessible title bars and scrollable content.
- Touch-friendly controls; dragging is intentionally disabled on narrow screens.
- Responsive desktop shortcuts, taskbar, Project Explorer, Recognition App, Security Lab, and demo grids.
- Added `css/mobile-v4.6.css`, loaded last to override older window positioning styles.
- Verify on physical phones and tablets before production use.


## v4.7 Mobile UX repair
- Added `css/mobile-v4.7.css` loaded last to override legacy desktop breakpoints.
- Mobile shortcuts are compact 3-column tiles with wrapped labels.
- Dashboard and app windows fit narrow viewports without horizontal overflow.
- Updated on-screen version to v4.7 and corrected window layer stylesheet path.
- Browser-based functional/visual testing is still recommended.


## v4.9 Mobile Quick Launch fix
- Compact one-column Quick Launch rows on phones and tablets.
- Fixed icon/title overlap by overriding older absolute positioning.
- Reduced card height and added bottom padding above the taskbar.
- Preserves existing demos and desktop layout.
- Verify on an actual mobile browser after deployment.

## v5.0 — Mobile Project Explorer
- On phone-sized viewports, Project Explorer uses a two-screen flow: project list → project details.
- Tap a project to see its challenge, implementation, outcome and an Open interactive demo button.
- Use Back to projects to return to the list. Filter chips remain available on the list screen.
- Mobile Project Explorer uses a single scrolling content area with a fixed accessible window title bar.
- Added `css/mobile-explorer-v5.css` and updated `js/main.js`. Desktop project explorer remains two-column.
- Browser/device interaction testing is still required after publishing.

## Mission-X (v5.1)
A 10-stage, fictional, local-only space research spy puzzle game. Launch from KAY OS desktop, Apps menu, or Quick Launch. Covers ROT13, HTML, networking, cloud transport, forensic imaging, Python, OSINT, binary, read-only SQL, and simulated steganography. No real NASA/JPL infrastructure is accessed. All game state resets on reopening.


## v5.2 Mission-X pixel adventure
Original top-down pixel-art facility map with ten numbered terminals, arrow/WASD and touch-pad movement, clickable room travel, challenge dialogs, progress, hints, and final badge. All simulated and local to the browser.


## v5.3 Newsroom newspaper + decoder
The first Mission-X terminal now displays an original fictional rover newspaper and an interactive ROT13/rotation slider. Rotate `URYVB` by 13 positions to decode `HELIO`, then submit the word to advance. No external network calls or real NASA systems.


## v5.5 — Story-driven town adventure
- Starts in Agent NOVA's bedroom. Exit to a town map with roads connecting HOME, CAFE, PARK, and FACILITY.
- Visit the cafe and solve the interactive newspaper cipher to receive the mission briefing.
- The facility remains inaccessible until the cafe briefing is complete. A fictional security guard verifies the code before access to the ten training terminals.
- Keyboard (WASD/arrows), mobile touch pad, INTERACT, and clickable town landmarks.
- Everything is a fictional, local-only educational simulation.
