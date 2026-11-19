# Brickpavers — project context

Website for **Brickpavers (CFA Business LLC)**: brick paver repair, sealing, pool decks, driveways and pressure washing in Central Florida (Orlando, Kissimmee, Winter Garden).
Live at **https://brickpaverscfl.com** (GitHub Pages, repo `rodrigocostacamargos/brickpavers`, public).

## Stack
Plain HTML/CSS/JS, no build step, no dependencies. Open `index.html` to preview.
- `index.html` — one-page site (hero, services, gallery, why us, service area, contact form)
- `styles.css` — light/dark theme via CSS variables; brand colors red `#b3191c`, graphite `#16181b`, orange `#e8883a`, brown `#7a4a1d`
- `script.js` — all copy in EN/PT/ES (`T` object), contacts per language (`CONTACTS`), WhatsApp form, lightbox
- `images/` — project photos (house numbers already blurred)
- `sitemap.xml`, `robots.txt`, `CNAME`, `favicon.svg`
- `.github/workflows/pages.yml` — deploys to GitHub Pages on every push to `main` (~1 min)
- `scripts/set-domain.sh` — switches canonical/OG/sitemap URLs + CNAME to a domain (already run for brickpaverscfl.com)

## Business facts (from the business card)
| Language | Contact | Phone |
|---|---|---|
| PT | Fabio Guimaraes | 321-314-7384 |
| EN | Raphael | 407-994-8574 |
| ES | Ana Paula | 321-240-4024 |

The site language switch (EN/PT/ES) also changes the main call button and the WhatsApp target to that language's contact.
Default language comes from the browser (`navigator.language`), saved in `localStorage`.

## Naming
Primary brand: **Brickpavers** (business card, domain, Google profile name). The company is also known as **Brick on Brick** — mention it only as "also known as" (footer, JSON-LD `alternateName`, Google profile *description*, social bios). Never put both names in the Google profile name field. Legal entity: CFA Business LLC (a Florida fictitious-name registration for the trade names should be checked on Sunbiz).

## Services listed on the site
Repair, sealing, pool decks, driveways, pressure washing (from the business card) + patios & fire pits, retaining walls & borders, artificial turf (added from the photos, approved by the owner). Pergolas appear in photos only as patio backdrops — do not claim pergola building.

## Decisions / rules (follow these)
- **Do NOT mention license or insurance** anywhere (site, Google profile). The owner decided not to.
- **Do not invent claims** (years of experience, warranty, reviews, prices). Only use facts the owner gave.
- **House numbers in client photos must be blurred** before adding any new photo (privacy). Check driveways/garages/mailboxes.
- Cities (Orlando, Kissimmee, Winter Garden) and hours (Mon–Sat 8 AM–6 PM) were placeholder examples the owner approved; update `index.html` (chips + JSON-LD) and `script.js` (`hours_val`) if they change.
- Every user-visible string must exist in all three languages in `script.js`; keys are referenced via `data-i18n` / `data-alt-key` in `index.html`.
- Use the GitHub `noreply` address for git commits; never commit a personal e-mail, tokens or API keys. The repo is public.
- WhatsApp is assumed to work on all three numbers (unconfirmed).

## Related setup done outside the repo
- Domain `brickpaverscfl.com` bought at Cloudflare. DNS: 4 `A` records to GitHub Pages IPs + `CNAME www` → `rodrigocostacamargos.github.io`, all **DNS only** (not proxied). HTTPS enforced in GitHub Pages settings.
- Google Business Profile: service-area business (address hidden). Categories: Paving contractor (primary), Pressure washing service, Patio builder, Driveway contractor. 455-char English description already written. Status of profile creation/verification: owner is handling it.
- Ad budget is about US$ 100 — Google's US$ 500 spend promo is not worth it. Free channels first (Google profile, reviews, Facebook/Nextdoor, vehicle magnet/cards).

## Pending / ideas
- Real customer reviews and a short "before/after" section when photos are available.
- Professional e-mail (e.g. contato@brickpaverscfl.com) via Cloudflare Email Routing.
- Real storefront/vehicle photo for the Google profile (a branded image was generated as a stand-in).
- Optional: Google Ads keyword list + ad copy (EN/ES), small local test budget.

## Testing tips
- Static checks: every `data-i18n` key exists in `en`, `pt`, `es`; every `images/…` file referenced exists; JSON-LD parses.
- Visual/behavior test: headless Chromium via Playwright at 1280px and 390px widths; check no horizontal overflow, language switch, lightbox (Esc closes), and that the form opens `wa.me` with the right number.
