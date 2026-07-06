# AVENTO Global Travel Solutions — Marketing Website

A responsive, animated marketing website for a Dehradun-based taxi and tour operator. Built to generate leads via WhatsApp and phone call, not to process bookings in-app.

> **Note on scope:** This is a static, front-end-only marketing site. There is no backend, database, authentication, or booking engine in this repository. If you were expecting a ride-hailing/booking platform (driver dashboards, live tracking, payments), that is **not** what this project is — see "Honest Scope" below.

---

## Overview

**Problem it solves:** Local taxi/tour businesses in tourist-heavy regions (Uttarakhand: Char Dham Yatra, hill stations) often have no professional web presence. This site gives one such business (practice project: "AVENTO Global Travel Solutions") a modern, mobile-first storefront that converts visitors into WhatsApp/phone leads.

**Target audience:** Tourists and locals looking for taxi, airport transfer, outstation travel, Char Dham Yatra packages, and curated tour packages around Dehradun and Uttarakhand.

**Core purpose:** Present services, fleet, destinations, and tour packages persuasively, then route every conversion action to WhatsApp or a phone call — there is no online checkout.

---

## Honest Scope

What this project **is**:
- A polished, animated, multi-page React SPA
- Route-based code splitting with lazy loading
- A clean data-driven content layer (all content lives in one `data.js` file)

What this project **is not**:
- Not full-stack — no server, no API, no database
- No authentication or user accounts
- No booking/payment system — "booking" happens by tapping a WhatsApp or call button
- No environment variables — nothing to configure, nothing to secure

If you're using this repo as a portfolio piece for full-stack roles, be upfront that it's a front-end/UI showcase, not a demonstration of backend or database skills.

---

## Features

- 🏠 **Home** — hero section, services teaser, fleet showcase, why-choose-us, CTA
- ℹ️ **About** — company story, team, achievements timeline
- 🚕 **Services** — local taxi, airport transfer, outstation, Char Dham Yatra, corporate travel, etc., with anchor-linked sub-sections
- 🗺️ **Destinations** — 12 curated Uttarakhand destinations with distance/duration
- 📦 **Tour Packages** — priced multi-day packages with highlights and best season
- 📄 **Privacy Policy & Terms** — static legal pages
- 🚫 **404 page**
- 💬 **WhatsApp floating button** — deep-links to a pre-filled WhatsApp message
- 📞 **Click-to-call floating button**
- 🎞️ **Page transition animations** via Framer Motion (`AnimatePresence`)
- 📱 **Responsive navbar** with mobile slide-in menu and dropdown for Services
- ⬆️ **Scroll-to-top on route change** + scroll-to-top button on scroll
- ⚡ **Lazy-loaded routes** for smaller initial bundle

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 |
| Animation | Framer Motion 12 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) + per-component CSS files |
| Icons | react-icons (Fa/Hi sets) |
| Linting | oxlint |
| Backend | **None** |
| Database | **None** |
| Deployment target | Static hosting (Vercel/Netlify/Render static site) |

**Note:** the project mixes Tailwind with hand-written per-component CSS files (e.g. `Fleet.css`, `Navbar.css`, `BookingProcess.css`). Pick one styling approach for consistency — right now it's using both.

---

## Architecture

Single-page application, fully client-rendered:

```
main.jsx → App.jsx (Router)
              ├─ Navbar (persistent)
              ├─ AnimatedRoutes (lazy-loaded page components, wrapped in AnimatePresence)
              ├─ Footer (persistent)
              ├─ WhatsAppButton (persistent, floating)
              ├─ CallButton (persistent, floating)
              └─ ScrollTop (persistent, floating)
```

- **Data flow:** all business content (services, destinations, packages, team, company info) is hardcoded in `src/utils/data.js` and imported directly into components — no fetch calls, no API layer.
- **State management:** none needed/used beyond local component `useState` (mobile menu, dropdown, scroll position) — a correct choice for a fully static site.
- **Routing:** `react-router-dom` with `React.lazy` + `Suspense` per page, `AnimatePresence mode="wait"` for transitions keyed on `location.pathname`.

---

## Folder Structure

```
Taxiweb/
├── public/                 # favicon, icon sprite
├── src/
│   ├── components/         # Reusable, mostly page-agnostic UI blocks
│   │   ├── Navbar/          # Responsive nav + mobile drawer + dropdown
│   │   ├── Footer/
│   │   ├── Hero/            # Homepage hero section
│   │   ├── Services/        # Services grid (homepage teaser)
│   │   ├── Fleet/           # Vehicle showcase cards
│   │   ├── Destinations/    # Destinations teaser (homepage)
│   │   ├── WhyChooseUs/
│   │   ├── BookingProcess/  # Static "how it works" steps (no logic)
│   │   ├── CTA/             # Call-to-action banner
│   │   ├── WhatsAppButton/  # Floating WhatsApp deep link
│   │   ├── CallButton/      # Floating tel: link
│   │   ├── ScrollTop/       # Floating scroll-to-top button
│   │   └── ScrollToTop.js   # Router-level: resets scroll on navigation
│   ├── pages/               # Route-level views composed from components
│   │   ├── Home/ About/ Services/ Destinations/
│   │   ├── TourPackages/ PrivacyPolicy/ Terms/ NotFound/
│   ├── hooks/
│   │   └── useScrollPosition.js
│   ├── utils/
│   │   └── data.js           # Single source of truth for all content
│   ├── styles/
│   │   └── global.css        # CSS variables / design tokens
│   ├── App.jsx                # Router + layout shell
│   └── main.jsx                # Entry point
├── vite.config.js
└── package.json
```

---

## Installation

```bash
# Clone
git clone https://github.com/anshsuyal/Taxiweb.git
cd Taxiweb

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

No environment variables, no database setup, and no backend server are required — the app runs entirely as static assets after `npm run build`.

---

## Deployment

Since this is a pure static build (`npm run build` outputs a `dist/` folder), it deploys to any static host:

**Vercel**
1. Import the repo in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`, Output directory: `dist`.
4. Deploy — no environment variables needed.

**Netlify**
1. Build command: `npm run build`
2. Publish directory: `dist`

No Render/Railway backend or MongoDB Atlas setup applies here, since there's no server component.

---

## Known Limitations & Future Improvements

1. **Hardcoded external image URLs** (Pinterest/Unsplash hotlinks) — fragile; these can break, load slowly, or violate hotlinking terms. Host images locally or via a CDN you control (Cloudinary, since you already use it elsewhere).
2. No SEO meta tags, Open Graph tags, or `sitemap.xml`/`robots.txt` visible — bad for a lead-gen site that depends on search visibility.
3. No contact/lead form as a fallback for users who don't use WhatsApp.
4. No analytics (Google Analytics/Plausible) to measure which CTAs actually convert.
5. Mixed styling strategy (Tailwind + separate CSS files) — pick one.
6. `ScrollToTop.js` is the only `.js` file among otherwise `.jsx` components — rename for consistency.
7. No automated tests (not critical for a static marketing site, but a smoke test for routing wouldn't hurt).
8. No image lazy-loading/`srcset` for responsive images — bundle/perf cost.
9. No accessibility audit beyond the ARIA attributes already present on the nav dropdown.
10. No favicon/manifest for PWA-style "add to home screen," which is common for local business sites accessed primarily on mobile.

---

## Author

**Ansh Sharma**
Full Stack (MERN) Developer | Dehradun, India
GitHub: [@anshsuyal](https://github.com/anshsuyal)
