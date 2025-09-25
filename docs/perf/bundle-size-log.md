# Bundle Size Comparison

| Build | Main JS Chunk | Notes |
| ----- | ------------- | ----- |
| Baseline (`npm run build`) | `dist/assets/index-D9N5n9L6.js` — 381.16 kB (gzip 121.27 kB) | Single bundle without route/section splitting. |
| Optimized (`npm run build`) | `dist/assets/index-CV0BCsO6.js` — 340.16 kB (gzip 109.51 kB) | Primary entry shrank by ~41 kB; below-the-fold sections were emitted as separate async chunks (`About`, `Projects`, `Experience`, `Skills`, `Contact`). |

Additional emitted chunks after optimization:

- `dist/assets/Portfolio-BsVH0ev4.js` — 28.65 kB (gzip 9.45 kB)
- `dist/assets/ProjectsSection-DgzbgdnT.js` — 7.69 kB (gzip 3.14 kB)
- `dist/assets/ExperienceSection-DZCHpxLO.js` — 3.12 kB (gzip 1.62 kB)
- `dist/assets/AboutSection-B_4EFTW8.js` — 1.99 kB (gzip 1.18 kB)
- `dist/assets/ContactSection-DBFRRfJ-.js` — 1.67 kB (gzip 0.85 kB)
- `dist/assets/SkillsSection-DUtLCKn5.js` — 1.14 kB (gzip 0.66 kB)

The measurements were captured from the `npm run build` output before and after applying lazy loading.
