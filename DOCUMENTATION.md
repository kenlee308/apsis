# Apsis website (kenlee308.github.io/apsis)

Plain static HTML, no build step. GitHub Pages serves the `main` branch.

## Preview locally
- Double-click `start.bat`; it serves this folder at http://localhost:8090 (needs Python on PATH) and opens the browser.
- Double-click `stop.bat` to stop it.

## Files
- `index.html`: Three.js solar-system hero (brand: everything is space-themed) with a text overlay, then scrollable sections: What I do, Featured projects, How I work, Background, Contact. Planets link to Projects, About (The Founder), Blog, AI Maze and Contact; labels are tappable on mobile.
- `projects.html`: project cards plus a collapsed "Earlier experiments" section (Memochat, Knowledge Base, Ollama IDE).
- `aboutme.html`: About copy (from the LinkedIn About, Oct 2026) and background.
- `shared.js`: shared nav + GoatCounter analytics.
- `assets/images/`: all images, hosted locally (no Medium hotlinks).
- `archive_2025/`: 2025 version, kept but no longer linked from nav or planets.

## Content rules
- No client names or figures for the law-firm work except "from about a day to minutes".
- Do not link YouTube channel or X. Individual demo videos are OK.
- Orbit: "data and case-ops platform, starting with law firms", private, demo on request.

## Workflow
Edit on a branch (e.g. `redesign-2026-10`), preview with start.bat, then merge to `main` to publish.

## Planets (index.html, `createPlanets()`)
10 planets: AI Maze, Blog, Orbit, Parallax, Projects, Tello, About, Rover, Maker, Contact. Each entry: `id, name, short` (mobile label), `url, radius, period, size, color`, optional `ring`, `moons` (decorative), `scroll` (in-page anchor), `target`.
Start angles are deterministic (`i * 2.65` rad), tuned so labels don't overlap at load from 375px to 1920px. Re-run an overlap check if you add or reorder planets.
Future grouping: add a `parent: '<id>'` field and render that entry as a moon of the parent instead of its own orbit (not implemented yet).

## Project pages
orbit.html, parallax.html, tello.html, rover.html, maker.html: short pages, same nav/style, "Demo video coming soon" placeholders.
