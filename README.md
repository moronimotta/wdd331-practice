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

1. **Tokens** - Design system variables (colors, spacing, typography)
2. **Base** - Element resets and foundational styling
3. **Layout** - Page structure and spatial relationships
4. **Components** - Reusable UI patterns
5. **Utilities** - Single-purpose helper classes


## Build Tool
- **Tool:** Lightning CSS (lightningcss)


## Development Workflow

### Installation
```bash
npm install
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



## Pages
- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)