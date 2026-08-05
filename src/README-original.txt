AICONIC — website files
=======================

WHAT'S HERE
  index.html        The whole site — all pages, all 8 product demos, the 10
                    trade demo sites and every blog post are built in, so
                    Our work and Blog work even offline
  support.js        Runtime the page needs — do not rename or remove
  content.js        Editable source for the demo sites + blog posts (the
                    published index.html already contains a copy; edit both
                    if you change posts)
  image-slot.js     Image placeholder helper
  assets/           Logo mark (vector + png), favicon, founder photo
  AICONIC Site.dc.html
                    The editable source file, kept in sync with index.html.
                    Use this if you come back to keep designing; index.html
                    is the built copy you upload.


HOW TO PUBLISH
  Upload everything in this folder — keeping the folder structure — to the
  root of your hosting. index.html must sit at the top level, with
  support.js, content.js, image-slot.js and the assets/ folder beside it.

  Works on any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages,
  or plain cPanel / FTP. No build step, no server code, no database.

  Netlify / Vercel / Cloudflare Pages
    Drag this folder into their dashboard, then point your domain at it.

  cPanel / FTP
    Upload the contents of this folder into public_html.

  Local preview: double-clicking index.html now works — the demo sites and
  blog posts are built into the file. For the closest match to production,
  run this in the folder and open the address it prints:
      python3 -m http.server


LEGAL
  The site includes a Legal page with four documents — Terms of service,
  Privacy notice, Cookie notice, and Disclaimer & accessibility — linked
  from the footer. These are general business terms, NOT legal advice.
  Have an Illinois attorney review them before you rely on them, and
  update the "Last updated" date if you change anything.


BEFORE YOU GO LIVE
  1. Booking form — index.html contains BOOKING_WEBHOOK_URL. Set it to your
     own endpoint (Zapier, Make, n8n, or your CRM's inbound webhook) or the
     form will submit nowhere.
  2. Phone numbers, email addresses and city names are placeholders in the
     demo sites inside content.js. Yours are in index.html.
  3. Test on a phone once the domain is live.


VIDEO
  The demo footage streams from a CDN URL. If you would rather host it
  yourself, download each .mp4, drop them in assets/, and replace the
  cloudfront URLs in index.html and content.js with ./assets/name.mp4
