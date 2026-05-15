# WDD 331R Practice Site
**Student:** Moroni Motta  
**Semester:** Spring 2026  
**Live Site:** [View Site](https://moronimotta.github.io/wdd331-practice/)

## About
This repository is my Practice Site for WDD 331R: Advanced CSS. Each week I add new pages and styles as I work through the course assignments. The site is built with a scalable CSS architecture using layers, design tokens, and a build pipeline. It deploys automatically to GitHub Pages on every push to main.

## Project Structure
```
css/
├── tokens/              # Design system tokens
│   ├── colors.css       # Color palette
│   └── variables.css    # Spacing, typography, shadows, radius
├── base/                # Foundational styles
│   ├── reset.css        # CSS reset and box-sizing
│   └── elements.css     # Semantic element styling (body, headings, links)
├── layout/              # Page structure
│   └── primary.css      # Main container and grid layout
├── components/          # Reusable UI components
│   ├── cards.css        # Card component
│   └── nav.css          # Navigation component
├── utilities/           # Helper utilities
│   └── utilities.css    # Utility classes
└── main.css             # Layer declaration and imports

dist/
└── styles.css           # Bundled and minified output (generated)
```

## CSS Architecture
This site uses a five-layer CSS architecture as defined in [The Cascade Layers Spec](https://www.w3.org/TR/css-cascade-5/#layer-names):

1. **Tokens** - Design system variables (colors, spacing, typography)
2. **Base** - Element resets and foundational styling
3. **Layout** - Page structure and spatial relationships
4. **Components** - Reusable UI patterns
5. **Utilities** - Single-purpose helper classes

Each layer is imported with a `@layer` declaration to ensure proper cascade and specificity. This allows lower layers to be safely overridden by higher layers without relying on specificity hacks.

## Build Tool
- **Tool:** Lightning CSS (lightningcss)
- **Input:** `css/main.css`
- **Output:** `dist/styles.css` (minified)

## Development Workflow

### Installation
```bash
npm install
```

### Local Development
Watch CSS files for changes and rebuild automatically:
```bash
npm run watch
```

### Build for Production
Generate the minified CSS bundle:
```bash
npm run build
```

## Deployment
The site deploys via GitHub Actions on every push to the main branch. The workflow:
1. Checks out the code
2. Sets up Node.js v22
3. Installs dependencies from package-lock.json
4. Runs `npm run build` to generate dist/styles.css
5. Deploys the entire repository to the `website` branch (GitHub Pages)

The `dist/` and `node_modules/` directories are listed in `.gitignore` to keep the repository clean. The build is generated fresh in CI on every push, ensuring the deployed site always has the latest bundled CSS.

## Pages
- [Home](index.html) - Course overview and project links
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)