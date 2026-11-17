# Assia Ferjani — Portfolio

Personal portfolio showcasing full stack development, data science, and Big Data projects.

**Live website:** https://assiaferjani.github.io/portfolio/

## Features

- French and English content
- Dark theme by default, with a persistent light theme option
- Project filters and detailed case studies
- Sixteen authentic screenshots and notebook figures with thumbnails, a large image viewer and zoom
- Keyboard navigation (arrow keys, Escape) and responsive WebP previews
- Responsive layouts, scroll animations, and reduced-motion support
- Portrait, downloadable CV, and contact links

## Local preview

No installation or build step is required. From the repository directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## Editing

- `index.html`: page structure and bilingual copy
- `app.js`: projects, experience, language and theme controls
- `main.css`: layout and visual design (dark and light themes)
- `motion.js`: scroll interactions
- `assets/`: portrait, CV, fonts and social preview

## Deployment

GitHub Pages serves the root of the `main` branch. Pushing changes to `main` updates the website automatically.

## Credits

Geist and Geist Mono are loaded from Google Fonts (SIL Open Font License).
GreenFair Advisor, Ritchess, Solen Digital and arXiv Explorer use actual application screenshots. Customer segmentation uses six original figures from Assia’s shared Colab notebook. Remaining projects are presented as text-based case studies; no fabricated previews are used. See `docs/project-evidence.md` for sources and verification details. Personal photographs and CV content belong to Assia Ferjani.
