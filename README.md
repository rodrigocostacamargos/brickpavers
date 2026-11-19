# Brickpavers — CFA Business LLC

Trilingual (EN / PT / ES) one-page website for Brickpavers: brick paver repair, sealing, pool decks, driveways and pressure washing (Central Florida).

Plain HTML/CSS/JS, no build step. Open `index.html` to preview.

## Structure
- `index.html`, `styles.css`, `script.js` — the site (all translations live in `script.js`)
- `images/` — project photos (house numbers are blurred)
- `.github/workflows/pages.yml` — automatic deploy to GitHub Pages on every push to `main`

## Publish (GitHub Pages — free)
1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow manually in the **Actions** tab).
3. The site goes live at `https://rodrigocostacamargos.github.io/brickpavers/`.

## Custom domain (e.g. brickpavers.com)
1. Buy the domain (Cloudflare Registrar, Namecheap, ...).
2. Repo → Settings → Pages → **Custom domain** → enter it, then enable *Enforce HTTPS*.
3. At the registrar, add DNS records: `A` records for the apex to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` → `rodrigocostacamargos.github.io`.

(Alternative: Cloudflare Pages or Netlify, connected to this repo — no build command, output directory `/`.)

## To edit
- Phones / WhatsApp: `CONTACTS` at the top of `script.js`.
- Texts: the `T` object in `script.js`.
- Photos: replace files in `images/` (keep the names) or edit the gallery in `index.html`.
