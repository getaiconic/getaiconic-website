AICONIC — website, ready to publish
===================================

Drag this whole folder into Netlify. That is the entire deploy step. Keep the
folder structure exactly as it is: index.html has to sit at the top level with
support.js, content-global.js, image-slot.js, mobile.css and assets/ beside it.


DO THESE THREE THINGS BEFORE YOU GO LIVE
----------------------------------------
1. BOOKING FORM. Search index.html for BOOKING_WEBHOOK_URL. It is currently an
   empty string, which means the booking form submits into nothing. Point it at
   your n8n webhook, a GoHighLevel inbound webhook, Zapier, or Make.

2. DOMAIN. Several files assume getaiconic.com:
       index.html   canonical, og:url, og:image, twitter:image
       sitemap.xml  the one <loc> entry
       robots.txt   the Sitemap line
   If the live domain is anything else, change it in all three.

3. TEST ON A REAL PHONE once the domain resolves. Emulators do not catch
   everything, particularly around the notch and the iOS keyboard.


WHAT IS IN HERE
---------------
  index.html            The whole site. Every page, all 8 product demos, the 10
                        trade demo sites and every blog post are built in, so
                        Our work and Blog work even with no network.
  support.js            The runtime. Do not rename or remove.
  content-global.js     The demo sites and blog posts, as a classic script.
                        This is the file index.html actually loads.
  image-slot.js         Image placeholder helper.
  mobile.css            Mobile refinements. Loads last so it wins over the
                        inline styles. Safe to edit, safe to delete.
  netlify.toml          Caching, security headers, and a catch-all redirect.
  robots.txt            Crawler permissions.
  sitemap.xml           One entry, because the site is one URL. See below.

  assets/
    aiconic-mark-white.svg / .png, aiconic-mark.svg, favicon-white.png
    founder.webp        900px wide, 114KB. Was a 2.9MB PNG.
    og-image.png        1200x630 share card, set in Bricolage Grotesque.
    vendor/             React, ReactDOM and Three.js, served from your own
                        domain instead of unpkg.com. Byte-identical to the CDN
                        builds, SHA-384 verified. See "Self-hosting" below.

  src/                  Not needed in production. Delete before deploy if you
                        would rather it were not publicly reachable.
    AICONIC_Site_dc.html  The editable design file, kept in sync with
                          index.html. Use this if you come back to keep
                          designing; index.html is the built copy you upload.
    content.js            ES-module source for content-global.js. If you edit
                          posts or demos, edit this AND content-global.js.
    founder-original.png  The full 1152x2048 original.
    README-original.txt   The README that shipped with the first export.


WHAT CHANGED FROM THE ORIGINAL EXPORT
-------------------------------------
Folder structure
  index.html referenced ./assets/... but everything was flat in one directory.
  The logo and favicon would have 404'd on the live site. Fixed.

Page metadata
  There was no <title>, no meta description, no Open Graph tags and no lang
  attribute. The browser tab showed a bare URL and shared links had no preview
  card. All written from the site's own hero copy.

iOS input zoom
  Form fields were 15px. Safari force-zooms the page when you tap an input
  under 16px, so the layout lurched sideways on every phone. mobile.css bumps
  them to 16px on small screens only.

Founder photo
  2.9MB PNG displayed in a card never wider than 560px. Now a 170KB WebP at
  1200px wide, which leaves enough resolution for retina screens.

About section layout
  The photo now stretches to exactly match the height of the text column next
  to it, instead of running past the bottom of it. Below 1000px the two
  columns stack (earlier than the grid would do on its own, because narrow
  columns made the text tall and squeezed the photo into a sliver) and the
  photo falls back to a fixed 4:5 portrait. The crop is controlled by
  object-position: 50% 22% on the img in index.html; raise the second number
  to show more of the lower part of the frame, lower it to show more of the
  top. If you rewrite the About copy the photo height follows it automatically.

WebGL background
  5,200 particles running continuously. Under 760px it now runs 1,800 with
  antialiasing off and a lower pixel ratio, with the point size raised so it
  looks the same. Noticeably less battery drain.

Self-hosting
  React, ReactDOM and Three.js were fetched from unpkg.com at runtime. If
  unpkg was slow or blocked, the site was a blank white page. They are now in
  assets/vendor/ and served from your domain. support.js has a window.__resources
  override built in for exactly this, so nothing was hacked around. To go back
  to the CDN, delete the window.__resources block near the top of index.html
  and point the Three.js script tag back at unpkg.


iOS Safari
  Four things that behave differently on iPhone than on desktop Chrome:
  - WebGL background: creating the context can fail on iOS (Low Power Mode,
    memory pressure, too many live contexts). It was unguarded, so a failure
    took the whole React tree down and rendered a blank page. It now fails
    quietly and hides the canvas.
  - backdrop-filter: Safari needed the -webkit- prefix until version 18.
    Without it the header and mobile menu lost their blur and went
    see-through over scrolling content. All 24 rules now carry both.
  - overflow:clip: only landed in Safari 16. Older iOS dropped the rule and
    fell back to visible, which let the background canvas create real
    sideways scrolling. overflow-x:hidden is declared first as a fallback.
  - 100vh: on iOS this measures the LARGE viewport, so full-height panels sit
    behind the Safari toolbar. dvh is declared after vh where it matters.

THE ONE THING STILL WORTH FIXING
--------------------------------
Routing is in-memory. go() sets a state variable and scrolls to top; the URL
never changes. Every page (Pricing, About, FAQ, Contact, Legal, and all the
blog posts) lives at the same URL.

That means nobody can link to a blog post, the browser back button does not
move between pages, and Google can only ever index the home page. For a studio
selling local search presence, that is the highest-value thing left to fix. It
is an architecture change rather than a patch, which is why it has been left
alone. Ask when you want it done.


PUBLISHING
----------
  Netlify        Drag this folder into the dashboard, then point your domain
                 at it. netlify.toml is picked up automatically.
  Vercel / Cloudflare Pages / GitHub Pages
                 All work. netlify.toml is ignored, so you lose the caching
                 and header rules but nothing breaks.
  cPanel / FTP   Upload the contents into public_html.

  Local preview: double-clicking index.html works. For the closest match to
  production, run this in the folder and open the address it prints:
      python3 -m http.server


STILL LOADED FROM ELSEWHERE
---------------------------
  Google Fonts   Bricolage Grotesque, Instrument Serif, DM Mono.
  CloudFront     The demo videos and generated imagery.
  Neither is fatal if it fails; the site falls back to system fonts and the
  layout holds. If you want zero third-party requests, download the font files
  and the .mp4s into assets/ and swap the URLs in index.html and content.js.


LEGAL
-----
The Legal page carries four documents: Terms of service, Privacy notice,
Cookie notice, and Disclaimer & accessibility, linked from the footer. These
are general business terms, NOT legal advice. Have an Illinois attorney review
them before you rely on them, and update the "Last updated" date if you change
anything.
