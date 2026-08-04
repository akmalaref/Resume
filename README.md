# Akmal Aref — Portfolio Website (v2)

A multi-page portfolio built from the Unified CV. Clean, professional
design (warm paper background, serif headings, single accent color that
matches the CV documents) — no "engineering" theme, so it reads well to
recruiters and hiring managers of any background.

## Site map

```
akmal-aref-portfolio/
├── index.html                    ← Home: summary, competencies, experience, CV links, contact
├── certificates.html             ← All 16 certificates, grouped by category
├── cv/
│   ├── executive.html            ← Full CV, clean reading page — NOT downloadable
│   ├── ats-unified.html          ← Full ATS CV, clean reading page — NOT downloadable
│   ├── product-manager.html      ← Short "why this version" + DOWNLOAD button (.docx)
│   ├── service-management.html   ← Short "why this version" + DOWNLOAD button (.docx)
│   └── pcba-test.html            ← Short "why this version" + DOWNLOAD button (.docx)
├── css/
│   ├── variables.css             ← Every color/font/spacing value — edit here first
│   ├── site.css                  ← Styles for index.html and certificates.html
│   └── document.css              ← Styles for the /cv/ reading pages (plain, distraction-free)
├── js/
│   └── script.js                 ← Mobile menu toggle only — no tracking, no analytics
└── documents/
    ├── Akmal_Aref_*_ATS.docx     ← The 3 downloadable track CVs + their cover letters
    ├── Akmal_Aref_CV_Unified_*.docx / CoverLetter.docx  ← source files (not directly linked, kept for your reference)
    └── certificates/             ← All 16 certificate images/PDFs
```

## Why only 3 CVs are downloadable

Per your instruction, only the **Product Manager**, **Service Management**,
and **PCBA Functional Test** track CVs offer a "Download" button (paired
with their matching cover letter) — these are the ones meant to be
attached to a real job application.

The **Executive CV** and **ATS-Unified CV** are shown as clean, readable
web pages instead (`/cv/executive.html` and `/cv/ats-unified.html`) — no
download button, no noisy background, just the content, for a recruiter
who wants to read your full profile on the site itself.

## Certificates

All 16 real certificates are on `certificates.html`, grouped into four
categories: Education, Technical Certifications, Professional Development
(LinkedIn Learning), and Early Training & Seminars. Every card links to
the actual image or PDF — click to view full-size in a new tab.

## How to open this in VS Code

1. Unzip the download.
2. File → Open Folder… → select `akmal-aref-portfolio`.
3. Install the **Live Server** extension (Ritwick Dey) if you don't have it.
4. Right-click `index.html` → **Open with Live Server**.

## How to publish it for free

- **GitHub Pages**: push this folder to a new repo → Settings → Pages →
  deploy from `main`, root folder. Your URL: `https://<username>.github.io/<repo>/`
- **Netlify Drop**: go to [app.netlify.com/drop](https://app.netlify.com/drop),
  drag the folder in, get a live URL instantly.

Once you have a real URL, update it in two places:
1. `<a class="doc-back" href="../index.html">← Back to akmalaref.dev</a>` —
   in each file under `/cv/` (just the link text, it already points to the
   right relative path).
2. The **"Portfolio: akmalaref.dev"** line in your CV documents' contact
   header — that's a placeholder domain; swap it for your real published
   URL once you've deployed (see the CV build notes if you regenerate the
   `.docx` files yourself, or just find-and-replace the text directly in
   Word).

## How to edit content (every file has inline comments)

- **Text on the home page**: open `index.html` — every section has an
  `<!-- EDIT: ... -->` comment telling you what's safe to change.
- **Colors/fonts**: open `css/variables.css` — change a value once, it
  updates across every page.
- **A CV reading page** (`cv/executive.html` or `cv/ats-unified.html`):
  each section is wrapped in a comment like `<!-- ============ SUMMARY
  ============ -->` so you can find and edit just that part.
- **Adding a certificate**: copy one `<a class="cert-card">...</a>` block
  in `certificates.html`, drop the new image/PDF into
  `documents/certificates/`, and update the `href`/`src`/text.
- **Adding a new document to a track page**: copy the existing
  `<a class="btn ...", download>` line in the relevant `/cv/*.html` file.

## Notes

- Fully responsive, with a collapsing menu below 860px width.
- Respects `prefers-reduced-motion`.
- No external JS libraries, no build step, no tracking scripts.
