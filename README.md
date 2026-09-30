# Clinic Leaflet Links

Lets the clinic team pick leaflets for a patient and hand them over as a QR code or link instead of paper copies.

- **clinic.html** is the page the consultant uses. Tick the leaflets, press *Generate QR code*, and the patient scans it.
- **index.html** is the page the patient sees. It shows their chosen leaflets plus the NHS Lothian pain relief and types of birth pages, and Labour Pains.
- **leaflets.js** holds the list of leaflets. This is the only file you need to edit.
- **leaflets/** holds the local PDF leaflets.
- **qrcode.js** is the QR code library (MIT licence). It's bundled so the site works even where clinic PCs block external scripts.

## Privacy
The link only contains leaflet codes (e.g. `index.html?l=vbac,epi`). No patient information is entered, stored or sent.

## Adding a leaflet
1. Put the PDF in the `leaflets/` folder (use a simple file name, no spaces).
2. Add a line to `leaflets.js` with a new short `id`, then the title, category, source and file path.
3. For leaflets hosted elsewhere, use `url:` with the web address instead of `file:`.
4. Optionally add `review: "Mon YYYY"`. Staff see it on the clinic page, but patients don't.
5. Keep PDFs small, ideally under 1MB, because patients open them on their phones.

Never reuse or change an existing `id`, because old QR codes depend on it.

## Hosting (GitHub Pages)
1. Create a new repo and upload everything in this folder.
2. Go to Settings → Pages, and deploy from the `main` branch root.
3. Bookmark `…/clinic.html` on the clinic computer. Patients only ever get links to `index.html`.

The clinic page isn't password-protected. That's fine, because it holds nothing sensitive, and it's hidden from search engines.

## Adding logos
1. Get the approved logo files, e.g. the NHS Lothian logo from NHS Lothian Communications. Only use the official files.
2. Put them in the `img/` folder.
3. In `leaflets.js`, set `logo: "img/your-file.png"` for the header logo. For the emblems on each leaflet row, set `logo` under `sources`. Any source without a logo keeps its coloured text badge.
