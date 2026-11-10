# jackmeersman.dev

Personal website for Jack Meersman, served by GitHub Pages.

## Stack

Static HTML, CSS, and a small amount of vanilla JavaScript. There is no build step: edit the files and push.

| File | Purpose |
| --- | --- |
| `index.html` | The whole site, one page, eight numbered sections |
| `styles.css` | Design tokens, layout, light and dark themes, print styles |
| `script.js` | Theme toggle, mobile menu, practice selector, footer year |
| `404.html` | Not-found page, picked up automatically by GitHub Pages |
| `fonts/` | Geist and Geist Mono, self-hosted variable WOFF2 (Latin subset) |
| `images/` | Photo, logos, certification badges, Open Graph share image |

## Design

The layout borrows from Vercel's design language (Geist typography, neutral gray scale, 1px hairlines, restrained motion) and from the dense, index-like structure of U.S. Graphics Company. Interface behavior follows the [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines).

Colors live in CSS custom properties at the top of `styles.css`. The site defaults to light mode. The toggle in the header lets visitors choose dark mode and stores their explicit choice in `localStorage`.

## Editing content

Everything is in `index.html`. Sections are numbered `01` through `08` and each has a sticky header on desktop. To add a role, certification, or skill, copy the neighboring block.

The practice buttons in A&M and Notable Projects share one selection: Detection & Response, Cyber M&A, or Field Engineering. Edit the `data-practice-panel="response"`, `data-practice-panel="ma"`, and `data-practice-panel="field"` blocks to update each view. All views remain visible without JavaScript and in print.

The A&M Field Engineering panel (`id="am-field"`) contains client engineering experience bullets. The matching project panel (`id="projects-field"`) contains the Sensitive Data Discovery Platform case study.

## Local preview

Any static server works, for example:

```sh
npx serve .
```

## Fonts

Geist and Geist Mono are © Vercel, licensed under the [SIL Open Font License 1.1](https://openfontlicense.org/), and were downloaded from Google Fonts.
