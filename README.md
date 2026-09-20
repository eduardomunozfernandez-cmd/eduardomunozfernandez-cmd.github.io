# Eduardo Muñoz — Portfolio

Single-page portfolio. Plain HTML/CSS/JS, no build step, no frameworks.
Only external dependency: Inter from Google Fonts.

```
portfolio/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── logos/        ← drop brand PNGs here (see below)
```

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```bash
cd portfolio && python3 -m http.server 8000
```

Then visit http://localhost:8000 (or run `node serve.mjs` → http://localhost:4321).

> `serve.mjs` is only a local preview helper — GitHub Pages serves the static
> files directly and ignores it. You can delete it before deploying if you want.

## Brand logos

The **Brands I've worked with** section loads full-color PNGs from
`assets/logos/`. Until a file exists, the brand name is shown as a text
placeholder automatically — no broken images. Current files:

```
solan-de-cabras.png  haagen-dazs.png     wacom.png            salesforce.png
legado-iberico.png   manteigaria.png     old-el-paso.png      ilunion-hotels.png
vezzo.png            liberty-express.png azulmarino.png
```

They're grouped into three rows by size — `.brand--xl` (Solán de Cabras,
Häagen-Dazs, Wacom, Salesforce, Legado Ibérico), `.brand--lg` (Manteigaria,
Old El Paso), and `.brand--md` / `.brand--sm` for the rest — set on each
`<li class="brand ...">` in `index.html`.

## Language switch (EN / ES)

The small flag toggle in the header switches every visible string on the
page between English and Spanish. It's driven entirely by `script.js`:

- Translatable elements carry a `data-i18n="key"` attribute in `index.html`.
- `script.js` has an `I18N` object with `en` and `es` dictionaries keyed the
  same way — edit the strings there to change the copy in either language.
- The chosen language is remembered per-visitor via `localStorage`.
- The **Download CV** button also switches — its `href`/`download` name come
  from `__cvHref` / `__cvFilename` in each language's `I18N` block.

## CV files

`assets/cv/cv-eduardo-munoz-es.pdf` and `cv-eduardo-munoz-en.pdf` are served
by the "Download CV" button in Contact, matching whichever language is
active. To update the CV, replace these two files (keep the exact names) —
no other change needed.

To add a new translatable string: add `data-i18n="some.key"` to the element,
then add `"some.key"` to both the `en` and `es` blocks in `I18N`.

## Contact buttons

The Contact section has four matching red buttons, all set in `index.html`:
**Email** (`mailto:`), **LinkedIn**, **Call** (`tel:+34618595976`) and
**WhatsApp** (`https://wa.me/34618595976`).

## Deploy to GitHub Pages

**Option A — project subfolder**

1. Push this repo to GitHub.
2. Repo → **Settings → Pages**.
3. Source: *Deploy from a branch*. Branch: `main`, folder: `/portfolio` is not
   selectable directly — GitHub Pages only serves `/` or `/docs`. So either:
   - move these files to a `/docs` folder, **or**
   - make `portfolio/` its own repo and serve from `/ (root)`.

**Option B — dedicated repo (simplest)**

1. Create a new repo, e.g. `eduardomunoz.github.io` (or any name).
2. Copy the contents of this `portfolio/` folder into the repo root.
3. Settings → Pages → Source: `main` / `/ (root)`.
4. Live at `https://<user>.github.io/` (or `https://<user>.github.io/<repo>/`).

No other configuration needed — it's fully static.
