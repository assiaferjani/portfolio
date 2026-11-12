# Project evidence — 12 November 2026

## GreenFair Advisor

- Public demo: https://assiaferjani.github.io/GreenFrair_Advisor/
- Source: https://github.com/assiaferjani/GreenFrair_Advisor
- Reviewed revision: `c399de35a35873d8e5c98bbffbf36ffb7c134db0`.
- Reviewed `src/App.tsx`, `src/data/greenfair.ts`, `src/lib/gemini.ts`, `apps/api/model.py` and the README.
- The UI imports notebook-exported data and uses separate generated historical series and scenario functions for its demo charts. The 2050 scenarios should not be described as validated ML predictions.
- Gemini requires a key; the public demo displays local fallback recommendations without one. An API exists in the repository; its presence does not establish that it is connected to the Pages deployment.
- Screenshots show the public homepage and the Tunisia dashboard, without credentials.

## Ritchess

- Public site: https://www.ritchess.com/
- Verified chauffeur service pages, public service navigation and booking entry points in the live browser.
- Full stack contribution and React/Node.js/Express/MongoDB stack are provided by Assia's CV. The private backend was not inspected.
- Screenshots capture public pages only. No booking, account creation or contact submission was performed.

## Other projects

Solen Digital was already present in the latest repository version and is retained. Other academic projects retain their CV descriptions as text-based case studies. The old conceptual mockups and incomplete Ritchess captures have been removed. Private Colab notebooks have not been reviewed; Google Drive access is required before adding notebook-derived screenshots or findings.

## Screenshot correction

- Ritchess services and fleet captures replace the incomplete homepage/video capture. All ten service and fleet photographs were downloaded unchanged from the same public image URLs and served into the browser at those URLs to avoid slow loading; the application UI was not modified. Captures were taken only after image decoding completed.
- New asset filenames and versioned app/CSS URLs avoid stale previews.

## arXiv Explorer

- Source: https://github.com/assiaferjani/BI-Project
- Public demo: https://assiaferjani.github.io/BI-Project/
- README documents collaboration between Assia Ferjani and Ines Makhlouf, data preparation/quality/metrics/tests, and interface contributions.
- 229,620 articles from 2020–2024 in cs.AI, cs.LG and cs.CL; 10 visualisations and 8 exploration spaces.
- Original screenshots copied unchanged from `docs/assets/showcase-overview.jpg` and `docs/assets/showcase-trends.jpg` in the public repository.

## Gallery and loading improvements

- Added original arXiv vocabulary, connections and mobile captures from `docs/assets/showcase-{vocabulary,connections,mobile}.jpg`, local clean checkout at `a038045fd0ca512b8a991476b3917e5093bdb924`.
- Ten captures across Solen Digital (1), GreenFair (2), Ritchess (2) and arXiv Explorer (5). The four projects with no source screenshots remain text case studies.
- WebP versions preserve the image content; full-resolution originals remain available through the viewer. Cards use versions at most 720 pixels wide.
- The four project card image files total 135,156 bytes, compared with 2,022,289 bytes before this change (93% reduction). This measures the images, not the entire page.
- Verified FR/EN labels, every image, thumbnail and arrow navigation, zoom, Escape/focus restoration, mobile overflow and light mode in Chromium.
