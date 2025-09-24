# Multipage Website Project — Acme Studio (Starter)

This is a starter multipage static website demonstrating modern HTML5, responsive CSS, accessible semantics, lightweight JavaScript, and deployment readiness.

## What’s included
- `index.html`, `about.html`, `portfolio.html`, `contact.html`
- `/css/styles.css` — responsive, mobile-first styles
- `/js/main.js` — modular ES-module script: menu, scroll reveal, contact validation
- `/images/` — placeholder images (you should replace these with real optimized images)
- `README.md` — this file

## Project purpose
A simple portfolio-style site to showcase projects, explain approach, and provide contact details. Designed for teaching and as a production-ready starter.

## How to run locally
1. Clone the repo or extract the ZIP.
2. Open `index.html` in a browser. For best results use a local dev server (recommended):
   - Python 3: `python -m http.server 8000`
   - Node (http-server): `npx http-server -c-1`
3. Visit `http://localhost:8000` (or the port your server uses).

## Accessibility & Performance notes
- Uses semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) and visible focus states.
- Images use `loading="lazy"`; replace images with optimized `srcset` variants for production.
- JavaScript is deferred (module) to avoid render-blocking.
- Test with HTML/CSS validators and Lighthouse for performance/accessibility suggestions.

## Deployment
Recommended options:
- **GitHub Pages**: push repository to GitHub and enable GitHub Pages (main branch or `/docs`).
- **Netlify / Vercel**: drag-and-drop or connect the Git repo for continuous deployment.

## Extend & Improve
- Add `srcset` and WebP variants for images.
- Hook contact form to a serverless function (Netlify Functions, Vercel Serverless, or a simple backend).
- Minify CSS/JS and add a simple build pipeline (esbuild, Vite, or webpack).

---
