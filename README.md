# Portfolio

A personal portfolio rebuilt from the ground up — no frameworks, no bloat. Just raw web standards, native browser APIs, and a lean build pipeline optimized for instant loading and long-term maintainability.

---

## Key Features

- **Zero JS framework overhead** — No React, no Vue, no Gatsby. Ships only the JavaScript the browser actually needs.
- **Multi-Page Application (MPA)** — Three independently served pages (Home, About, Projects) with Rollup entry points configured directly in `vite.config.ts` for clean, per-page asset bundling.
- **Native Web Component navigation** — Global header built as a `<global-header>` custom element with automatic active-route detection via `window.location.pathname`. Zero runtime dependencies.
- **TypeScript throughout** — Full static typing from component logic to Vite config, compiled through `tsc` before bundling.
- **Modern SCSS pipeline** — `sass-embedded` compiler with a structured partial architecture (`_variables`, `_base`, `_layout`, `_hero`, `_page`) and design tokens backed entirely by native CSS custom properties.
- **Semantic HTML5** — Accessible, meaningful markup with `aria-label` on icon-only links and proper landmark elements (`<header>`, `<nav>`, `<section>`).

---

## Tech Stack

| Tool                                                                       | Role                                        |
| -------------------------------------------------------------------------- | ------------------------------------------- |
| [Vite](https://vitejs.dev/)                                                | Build tool & dev server                     |
| TypeScript                                                                 | Static typing & compilation                 |
| [sass-embedded](https://sass-lang.com/blog/announcing-dart-sass-embedded/) | SCSS compilation (Dart Sass, native binary) |
| Native CSS Variables                                                       | Design token system                         |
| Web Components API                                                         | Global navigation (`customElements.define`) |
| Rollup (via Vite)                                                          | MPA multi-entry bundling                    |

---

## Project Structure

```
portfolio/
├── index.html                  # Home page
├── about/
│   └── index.html              # About page
├── projects/
│   └── index.html              # Projects page
├── public/                     # Static assets (favicon, etc.)
├── src/
│   ├── main.ts                 # Global entry point (imports styles + components)
│   ├── style.scss              # Root stylesheet (@use partials)
│   ├── components/
│   │   └── GlobalHeader.ts     # <global-header> Web Component
│   └── styles/
│       ├── _variables.scss     # CSS custom property tokens (:root)
│       ├── _base.scss          # Base/reset rules
│       ├── _layout.scss        # Header, nav, structural layout
│       ├── _hero.scss          # Homepage hero section
│       └── _page.scss          # Shared interior page styles
├── vite.config.ts              # MPA entry points + dev server config
├── tsconfig.json
└── package.json
```

---

## Getting Started

**Prerequisites:** Node.js 24+

```bash
# 1. Clone the repository
git clone https://github.com/AlexanderPuhl/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Type-check and bundle for production
npm run build

# Preview the production build locally
npm run preview
```

Output is written to `dist/` with per-page HTML files, hashed asset filenames, and an automatically inlined CSS bundle.
