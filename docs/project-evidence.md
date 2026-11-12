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

Solen Digital was already present in the latest repository version and is retained. Other academic projects retain their CV descriptions as text-based case studies. The old conceptual mockups and incomplete Ritchess captures have been removed. The customer-segmentation notebook subsequently shared by Assia is reviewed below. Other private Colab notebooks have not been reviewed.

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

## Customer segmentation — shared Colab notebook

- Source: https://colab.research.google.com/drive/1gXW_s69eoeQw4ffSHBjUtI3lGtmWe_LS
- Retrieved from the public Drive download endpoint on 12 November 2026; 25 cells. The notebook itself is not republished in this repository.
- Reviewed the saved source and outputs, without executing notebook code.
- Mall Customers: 200 rows, no missing values or duplicate rows in the saved checks; customer ID is excluded from clustering features.
- K-Means and hierarchical clustering use standardised income and spending score. K-Means K=5 counts are 81, 39, 22, 35 and 23.
- The saved feature-combination comparison (K-Means K=5) reports silhouette scores: income + spending 0.5547; without gender 0.4166; PCA 0.3878; all four features 0.3041. These are internal clustering scores, not accuracy or business-impact measures.
- HDBSCAN searches parameters conditional on exactly five groups and minimises noise, yielding 33 noise points. The separate zero-noise variant reassigns them by nearest neighbour; it is not the raw HDBSCAN result.
- GMM uses `make_blobs(n_samples=300, centers=4, n_features=3)`, not Mall Customers. Its silhouette of 0.695 cannot establish superiority on the real dataset. The portfolio distinguishes this synthetic example and does not publish it as a Mall Customers result.
- Davies–Bouldin and Calinski–Harabasz are mentioned in markdown, but the saved feature-combination code computes silhouette only. Removed the earlier claim that all three metrics were used.
- Original PNG figures are decoded directly from saved `image/png` outputs; WebP and 720px previews are display derivatives. The originals remain available through the viewer.

| Figure | Zero-based cell | Zero-based output |
| --- | --- | --- |
| kmeans | 8 | 2 |
| elbow | 8 | 0 |
| correlation | 6 | 1 |
| hdbscan | 10 | 1 |
| hierarchy | 21 | 1 |
| variables | 23 | 1 |

Reviewed notebook SHA-256: `39a35bdc2db243c59d2bc8c2ab239ca39004052062ea5b0873f70ca08b926ad4`.
