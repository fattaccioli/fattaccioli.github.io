# Maintaining fattaccioli.github.io

The site is a plain Jekyll site served by GitHub Pages (no build step on your side:
push to `master` and it is online 1–2 minutes later). Almost every update is a
copy-paste in **one YAML file** under `_data/`.

| I want to…                         | Edit                                  |
|------------------------------------|---------------------------------------|
| add a paper / preprint / patent    | `_data/publications.yml`              |
| move a preprint to "published"     | same file: change `type: preprint` → `article`, fill `details`, move it to the top of the articles |
| feature a paper on "Selected"      | add `featured: true`                  |
| show a paper under a research topic| add the topic id to `tags: [...]`     |
| add / remove a team member         | `_data/members.yml`                   |
| edit a research topic, funding     | `_data/research.yml`                  |
| change the homepage text           | `index.markdown`                      |
| update open positions              | `6_positions.markdown`                |
| teaching, about/contact            | `3_teaching.markdown`, `1_about.markdown` |
| links (ORCID, LinkedIn…), analytics| `_config.yml`                         |
| colours, fonts, layout             | `assets/css/site.css` (variables at the top) |

Everything else (numbering, year headings, "Latest publications" on the homepage,
per-topic publication lists, menu) is generated automatically.

## YAML in 30 seconds
- Indentation matters (2 spaces, never tabs). Copy an existing entry and edit it.
- Put text containing `:` or starting with `*`, `[`, `'` between quotes:
  `title: "Droplets: a review"`.
- `authors: "A. Smith, J. Fattaccioli*"` — `J. Fattaccioli` is bolded automatically.

## Safer workflow (recommended for bigger changes)
1. Create a branch (`git checkout -b update-pubs`), commit, push.
2. GitHub runs **Check site build** (Actions tab). Green tick = safe.
3. Merge into `master` (or open a pull request and merge it).
Small edits can go straight to `master`, also from the GitHub web editor (press `.` on the repo page).

## Local preview (optional)
```
bundle install
bundle exec jekyll serve      # → http://localhost:4000
```
Analytics are disabled in local previews.

## Analytics
- **GoatCounter** (cookieless, no banner needed): create a free account at
  https://www.goatcounter.com with the code you want (e.g. `fattaccioli`), then set
  `analytics.goatcounter: "fattaccioli"` in `_config.yml`. Dashboard:
  https://fattaccioli.goatcounter.com — visits, pages, referrers, countries, plus
  click events (`event-email`, `event-paper`, `event-cta-positions`, `event-out-…`).
- **Google Analytics 4** (`analytics.ga4`): loaded only after a visitor clicks
  *Accept* on the banner. Expect GA numbers to be lower than GoatCounter's —
  GoatCounter is the reference for raw traffic; GA gives the richer view for those who consent.
- "Cookie settings" in the footer lets visitors change their choice.

## Files you can ignore
`_layouts/`, `_includes/` (templates), `assets/js/site.js` (consent + tracking),
`.github/workflows/` (build check), `Archive/` (old pages, not published).
