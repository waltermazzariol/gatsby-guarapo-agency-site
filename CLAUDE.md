# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop   # Start dev server at localhost:8000
npm run build     # Production build
npm run serve     # Serve the production build locally
npm run format    # Format with Prettier (js, jsx, json, md)
```

No test suite is configured (Gatsby's default test placeholder only).

## Architecture

This is a **Gatsby 5 / React 18** agency website for [guarapomedia.com](https://guarapomedia.com).

### Bilingual Structure

The site is bilingual — English at root (`/`) and Spanish under `/es/`:

- English pages: `src/pages/*.jsx`
- Spanish pages: `src/pages/es/*.jsx`
- English data: `src/assets/data/*.json` (e.g., `home.json`, `contact.json`, `work/`)
- Spanish data: `src/assets/data/*.json` (e.g., `inicio.json`, `contacto.json`, `trabajos/`)

Each page queries its JSON data file by filtering on `general.path`.

### Data Layer (JSON → GraphQL)

Content is stored entirely in JSON files under `src/assets/data/`, sourced via `gatsby-source-filesystem` + `gatsby-transformer-json`. There is no CMS.

- **Page content** (hero, nav, packages, process, etc.): one JSON file per page (`home.json`, `inicio.json`, `contact.json`, etc.)
- **Portfolio entries**: individual JSON files in `src/assets/data/work/` (EN) and `src/assets/data/trabajos/` (ES). Each file becomes a programmatically generated page.
- **Images**: stored in `src/assets/images/` and referenced via relative paths in JSON files; processed by `gatsby-plugin-sharp` → `gatsby-plugin-image`.

### GraphQL Fragments

All reusable GraphQL fragments are centralized in `src/fragments.jsx`. When adding a new field to a JSON data file, define or extend the fragment there, then use it in the page query.

### Programmatic Page Generation (`gatsby-node.js`)

Portfolio/client pages are generated from `allWorkJson` (the `work/` directory). The page path is `{relativeDirectory}/{filename}` (e.g., `work/burbowl-miami`), and the template is `src/templates/clients.jsx`. The Spanish equivalents follow the same pattern using `trabajos/` files.

### Key Conventions

- Each page's JSON must have a `general.path` field; pages filter `allDataJson` by this path to load their content.
- Adding a new portfolio client requires creating a JSON file in both `src/assets/data/work/` (EN) and `src/assets/data/trabajos/` (ES) with fields: `date`, `client`, `city`, `description`, `url`, `year`, `cat`, `tags`, `image`, `thumbnail`, `alt`.
- Images output format is forced to `webp` with quality 100 (see `gatsby-config.js` `gatsby-plugin-sharp` options).
- Google Analytics is configured per-page via the `ua` field in each JSON's `general` block.
