# Where to put your video

Put two files in this folder:

1. **career-introduction.mp4** — your video, exported/converted to MP4
   (H.264 video + AAC audio is the safest, most universally-playable combo)
2. **poster.jpg** — one still frame from the video (a good-looking pause
   frame), shown before the visitor presses play. 1280×720px is plenty.

That's it — index.html already points to these exact filenames
(`documents/video/career-introduction.mp4` and
`documents/video/poster.jpg`). Once both files are in this folder, delete
this note.

## A few practical notes on hosting video on GitHub

- **GitHub's hard limit is 100MB per file** — anything larger will be
  rejected on push. GitHub also *warns* you above 50MB.
- A 1–2 minute talking-head video, compressed reasonably (see below),
  should land well under that — usually 15–40MB.
- If your export is too large, compress it. Free options:
  - **HandBrake** (handbrake.fr, free, desktop app, Windows/Mac/Linux) —
    use the "Fast 1080p30" or "Fast 720p30" preset, that alone usually
    cuts file size by 70-90% with barely visible quality loss for a
    talking-head video.
  - Or just export at 720p instead of 1080p/4K to begin with — plenty
    sharp for a webcam-style intro, and a fraction of the file size.
- **If GitHub Pages ever feels slow to load the video**: that's normal
  for git-hosted video at larger sizes — git repos aren't really built
  for large binaries. If it becomes an issue later, free alternatives
  built for exactly this (unlimited-size video hosting, still
  embeddable without showing as "YouTube branding") are Cloudflare
  Stream's free tier or simply uploading unlisted on Vimeo and swapping
  the `<video>` tag for their embed code — but for a short intro clip,
  plain GitHub hosting works fine.
