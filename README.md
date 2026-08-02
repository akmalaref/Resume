# Akmal Aref — Portfolio Website

A single-page portfolio site built from your Unified CV. Design language:
engineering blueprint / circuit schematic (deep blueprint-navy background,
a cyan "oscilloscope trace" signature animation in the hero, and a routed
circuit-trace spine down the page that doubles as section navigation) —
built around your actual work as a test engineer, not a generic template.

## What's included

```
akmal-aref-portfolio/
├── index.html              ← all page content lives here
├── css/
│   └── styles.css          ← all visual design
├── js/
│   └── script.js           ← scroll-spy nav highlighting
└── documents/
    ├── Akmal_Aref_CV_Unified_Formatted.docx
    ├── Akmal_Aref_CV_Unified_ATS.docx
    ├── Akmal_Aref_ProductManager_ATS.docx
    ├── Akmal_Aref_Service_Management_ATS.docx
    ├── Akmal_Aref_FCT_Manufacturing_ATS.docx
    ├── Akmal_Aref_CV_OnePage_Print.docx
    ├── Akmal_Aref_CoverLetter.docx
    ├── Akmal_Aref_ProductManager_CoverLetter.docx
    ├── Akmal_Aref_Service_Management_CoverLetter.docx
    ├── Akmal_Aref_FCT_Manufacturing_CoverLetter.docx
    └── certificates/
        ├── CertificateOfCompletion_Succeeding_as_a_FirstTime_Tech_Manager_2019.pdf
        ├── CertificateOfCompletion_Strategic_Thinking_2017.pdf
        ├── CertificateOfCompletion_Project_Management_Foundations_Requirements.pdf
        ├── CertificateOfCompletion_Five_Ways_to_Control_Your_Time.pdf
        └── CertificateOfCompletion_Tips_for_Writing_Business_Emails.pdf
```

All your real CV versions, cover letters, and certificates are already in
the `documents/` folder — every download link on the site points to a real
file, ready to go.

## How to open this in VS Code

1. Unzip the folder you downloaded.
2. In VS Code: **File → Open Folder…** and select `akmal-aref-portfolio`.
3. Install the **Live Server** extension (by Ritwick Dey) if you don't have
   it — Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`), search "Live
   Server", click Install.
4. Right-click `index.html` in the file explorer → **Open with Live
   Server**. The site opens in your browser and auto-refreshes whenever
   you save a file.

No build step, no dependencies to install — it's plain HTML/CSS/JS.

## How to publish it for free

**Option A — GitHub Pages**
1. Create a new GitHub repository and push this folder to it.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Option B — Netlify Drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `akmal-aref-portfolio` folder onto the page.
3. You get a live URL instantly (you can rename it in site settings).

Either option gives you a link you can put directly on your CV, LinkedIn,
and email signature.

## How to update content later

- **Text content** (summary, experience, skills): edit directly inside
  `index.html` — it's plain, readable HTML, no templating engine.
- **Colors/fonts/spacing**: edit `css/styles.css` — all values are defined
  once at the top as CSS custom properties (`:root { --bg: ...; }`), so
  changing a color there updates it everywhere.
- **Adding a new document**: drop the file into `documents/` (or
  `documents/certificates/` for certificates) and add a matching
  `<a href="documents/yourfile.docx" download>` link in `index.html` —
  copy an existing `.doc-card` or `.cert-list li` block as a template.
- **Employment dates**: if you start a new role, update the `<span
  class="dates">` values in the Experience section, and change the "Immediately
  Available" status chip in the hero once that's no longer accurate.

## Notes on the design

- The signature element is the oscilloscope-style trace line under your
  name in the hero, and the routed circuit-trace spine running down the
  left edge of the page (desktop only) that acts as section navigation —
  both nod to your actual work testing PCBAs.
- Section numbering (`[TS-01]`, `[TS-02]`...) stands for "Test Station" —
  a deliberate echo of your background, not a generic numbered list.
- The site respects `prefers-reduced-motion` and has visible keyboard focus
  states throughout.
- Fully responsive — the trace-nav sidebar hides below 980px width and the
  page becomes a single clean column on mobile.
