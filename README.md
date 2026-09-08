# Vertex Reel

Professional one-page marketing site for **Vertex Reel** — a creative studio that builds
applications, websites and video edits. Built with **React + Vite**.

## Run it

You need [Node.js](https://nodejs.org) 18+ installed (currently not on this machine).

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Customize

Edit **`src/config.js`** for your brand name, Instagram handle/URL and email.
The Instagram link is used by every "Contact us" button.

| File | What's in it |
|------|--------------|
| `src/config.js` | Brand name, Instagram handle + URL, email |
| `src/data.js` | Services, portfolio items, stats, testimonials, process steps |
| `src/index.css` | Full design system (colors, layout, animations) |
| `src/App.jsx` | Page sections and layout |
| `src/components/Icons.jsx` | Inline SVG icons + logo |

To recolor the brand, change `--brand`, `--brand-2` and `--accent` in `src/index.css`.

## Deploy

Any static host works — Vercel, Netlify, GitHub Pages, Cloudflare Pages.
Build command `npm run build`, output directory `dist`.
