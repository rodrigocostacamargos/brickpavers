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

## Custom domain (recommended: brickpaverscfl.com)
1. Buy the domain (Cloudflare Registrar recommended), in the company's name.
2. Run `scripts/set-domain.sh brickpaverscfl.com`, commit and push (writes `CNAME`, updates canonical/OG/sitemap URLs).
3. At the DNS provider add:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `rodrigocostacamargos.github.io`
   (On Cloudflare, set these records to **DNS only**, not proxied, until HTTPS is issued.)
4. Repo → Settings → Pages → **Custom domain** → enter the domain, wait for the DNS check, then enable **Enforce HTTPS**.

(Alternative: Cloudflare Pages or Netlify, connected to this repo — no build command, output directory `/`.)

## To edit
- Phones / WhatsApp: `CONTACTS` at the top of `script.js`.
- Texts: the `T` object in `script.js`.
- Photos: replace files in `images/` (keep the names) or edit the gallery in `index.html`.
