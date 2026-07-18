# WDD 331R Practice Site
**Student:** Moroni Motta  
**Semester:** Spring 2026  
**Live Site:** [View Site](https://moronimotta.github.io/wdd331-practice/)

## About
This repository is my Practice Site for WDD 331R: Advanced CSS. Each week I add new pages and styles as I work through the course assignments. The site is built with a scalable CSS architecture using layers, design tokens, a bundled production stylesheet, and a working light/dark theme toggle. It deploys automatically to GitHub Pages on every push to main.

## Project Structure
```
css/
├── tokens/              # Design system tokens
│   ├── colors.css       # Color palette and semantic color roles
│   └── variables.css    # Modular type scale, spacing, shadows, radius
├── base/                # Foundational styles
│   ├── reset.css        # CSS reset and box-sizing
│   └── elements.css     # Semantic element styling (body, headings, links)
├── layout/              # Page structure
│   └── primary.css      # Main container and grid layout
├── components/          # Reusable UI components
│   ├── cards.css        # Card component
│   ├── nav.css          # Navigation component
│   └── theme-toggle.css # Theme toggle component
├── utilities/           # Helper utilities
│   └── utilities.css    # Utility classes
└── main.css             # Layer declaration and imports

js/
└── theme-preference.js   # Theme persistence script

dist/
└── styles.css           # Bundled and minified output (generated)
```

## CSS Architecture

1. **Tokens** - Design system variables for color, spacing, typography, and motion
2. **Base** - Element resets and foundational styling
3. **Layout** - Page structure and spatial relationships
4. **Components** - Reusable UI patterns, including the theme toggle
5. **Utilities** - Single-purpose helper classes

## Typography System

The site now uses a modular type scale in `css/tokens/variables.css` built on a 1.2 ratio. The body size is fluid with `clamp()`, and the larger steps derive from that base so the whole hierarchy grows together across viewport widths. Semantic aliases map the scale to roles like body, caption, heading, and display.

Headings use a self-hostable web font loaded with `display=swap` so the fallback stack stays readable while the font loads.

## Resume and Contact

The portfolio now includes a printable [resume page](resume.html) and a [contact page](contact.html). The resume is styled for both screen and print, and the contact form uses the shared accent color so native controls match the site theme.

## Portfolio Organization

The homepage now acts as the portfolio front door. Featured work cards appear first, then the rest of the coursework is grouped by course theme so visitors can scan the site quickly without losing access to any assignment page.

## Token Audit

Unused typography and color aliases were removed from the token files so the shared design system stays focused on tokens that are actually consumed elsewhere in the CSS.


## Build Tool
- **Tool:** Lightning CSS (lightningcss)
- **Theme:** Light, dark, and system color modes driven by `js/theme-preference.js`


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

### Watch During Development
Rebuild automatically when source CSS changes:
```bash
npm run watch
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
- [Resume](resume.html)
- [Contact](contact.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
- [Visual Effects](unit-3/visual-effects/index.html)
- [Grid Layouts (Editorial)](unit-4/grid-layouts/editorial.html)
- [Grid Layouts (Cards)](unit-4/grid-layouts/cards.html)
- [Container Query Demo](unit-4/advanced/container-demo.html)
- [Sticky Module Demo](unit-4/advanced/sticky-demo.html)
- [Motion](unit-6/motion/index.html)