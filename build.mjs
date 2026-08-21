// Prerender build for getaiconic.com
// Renders the existing client-side app (index.html) to static, per-route HTML
// so crawlers get real content and every page has its own URL. The design and
// runtime are unchanged: each built page re-boots the same engine on load
// (support.js reads window.__DC_TEMPLATE__ when there is no <x-dc>).
//
// Usage: node build.mjs
// Output: ./dist/  (index.html + /pricing/, /about/, ... + shared assets)

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const EXE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell';
const ORIGIN = 'https://getaiconic.com';
const PORT = 8188;

const ROUTES = [
  { path: '/',             page: 'home',    title: 'Websites, Missed-Call Text Back, Follow-Up & Booking for Illinois Contractors | AICONIC', desc: 'Done-for-you websites, missed-call text back, lead follow-up, review automation and seasonal campaigns for Illinois plumbers, HVAC, electricians and roofers.' },
  { path: '/products',     page: 'systems', title: 'The Systems: 8 Done-for-You Marketing Tools | AICONIC', desc: 'Eight systems that book contractor jobs: a website that books, missed-call text back, review automation, speed to lead, reactivation, one business number and local search.' },
  { path: '/pricing',      page: 'pricing', title: 'Pricing: Launch $497 and Growth $797 a Month | AICONIC', desc: 'Simple contractor marketing pricing. Launch at $497/month covers website, missed-call text back and reviews. Growth at $797/month adds follow-up and local search.' },
  { path: '/how-it-works', page: 'process', title: 'How It Works | AICONIC', desc: 'Three short steps from first call to launch. We map where your leads leak, build your booking and follow-up system, and hand you the keys.' },
  { path: '/about',        page: 'about',   title: 'About AICONIC | A One-Person Studio in Chicago', desc: 'AICONIC is a one-person Chicago studio building booking, follow-up and review systems for contractors and small local businesses. The person you text, not a ticket queue.' },
  { path: '/work',         page: 'work',    title: 'Our Work: Real Contractor Site Designs | AICONIC', desc: 'Concept builds you can scroll through, across four trades. See the kind of booking website and system AICONIC builds for contractors in Chicago.' },
  { path: '/faq',          page: 'faq',     title: 'FAQ | Contractor Marketing Questions | AICONIC', desc: 'Answers to what contractors ask first: do I learn new software, how fast am I live, what if I already have a website, am I locked in, and who do I deal with.' },
  { path: '/blog',         page: 'blog',    title: 'Blog | Marketing for Contractors | AICONIC', desc: 'Plain-English articles on getting more booked jobs: missed calls, Google reviews, speed to lead, database reactivation and what a contractor website should cost.' },
  { path: '/contact',      page: 'contact', title: 'Contact AICONIC | Book a 20-Minute Call', desc: 'Tell us about your business and we will book your strategy call. One inbox, one person, no jargon. Based in Chicago, serving contractors and small local businesses.' },
  { path: '/legal',        page: 'legal',   title: 'Legal: Terms, Privacy, Cookies | AICONIC', desc: 'Terms of service, privacy notice, cookie notice and disclaimer for AICONIC, a Chicago studio building marketing systems for contractors and small local businesses.' },
  { path: '/privacy',      page: 'legal',   title: 'Privacy Policy | AICONIC', desc: 'How AICONIC collects, uses, protects and lets you control your personal information. We do not sell your data. Contact hello@getaiconic.com to access, correct or delete it.' },
  { path: '/terms',        page: 'legal',   title: 'Terms of Service | AICONIC', desc: 'The terms that govern the marketing and communication systems AICONIC builds and operates for contractors and small local businesses. Read them before you rely on the service.' },
  { path: '/cookies',      page: 'legal',   title: 'Cookie Notice | AICONIC', desc: 'How AICONIC uses cookies and similar technologies on getaiconic.com, what they do, and how you can control them.' },
  { path: '/disclaimer',   page: 'legal',   title: 'Disclaimer | AICONIC', desc: 'Figures, demo sites and case studies shown by AICONIC are illustrative. Results vary and are not guaranteed. Nothing here is legal, tax or professional advice.' },
  // Common-slug aliases so any guessed URL resolves (canonical points to the primary page).
  { path: '/privacy-policy',       page: 'legal', alias: true, canonical: ORIGIN + '/privacy', title: 'Privacy Policy | AICONIC', desc: 'How AICONIC collects, uses, protects and lets you control your personal information, including text messaging and mobile information. We do not sell your data.' },
  { path: '/terms-of-service',     page: 'legal', alias: true, canonical: ORIGIN + '/terms',   title: 'Terms of Service | AICONIC', desc: 'The terms that govern the marketing and communication systems AICONIC builds and operates, including its SMS text message program (STOP/HELP).' },
  { path: '/terms-and-conditions', page: 'legal', alias: true, canonical: ORIGIN + '/terms',   title: 'Terms of Service | AICONIC', desc: 'The terms that govern the marketing and communication systems AICONIC builds and operates, including its SMS text message program (STOP/HELP).' },
];

// ---- tiny static server with SPA fallback (serve file if it exists, else index.html) ----
const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.webp':'image/webp', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.xml':'application/xml', '.txt':'text/plain', '.mp4':'video/mp4', '.json':'application/json' };
function serve() {
  return http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(ROOT, p);
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(ROOT, 'index.html');
    fs.readFile(file, (err, buf) => {
      if (err) { res.writeHead(404); res.end('nf'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(buf);
    });
  });
}

function faqSchema(src) {
  // pull the HOME_FAQ + extra list out of the source component array for /faq schema
  const items = [];
  const re = /\["[^"]*",\s*"((?:[^"\\]|\\.)*)",\s*"((?:[^"\\]|\\.)*)"\]/g;
  let m, started = false;
  const block = src.slice(src.indexOf('const HOME_FAQ'), src.indexOf('const activeFaq'));
  while ((m = re.exec(block))) {
    const q = m[1].replace(/\\"/g, '"');
    const a = m[2].replace(/\\"/g, '"');
    items.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } });
  }
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items };
}

function copyRec(src, dst) {
  const st = fs.statSync(src);
  if (st.isDirectory()) {
    fs.mkdirSync(dst, { recursive: true });
    for (const f of fs.readdirSync(src)) copyRec(path.join(src, f), path.join(dst, f));
  } else {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
  }
}

async function main() {
  const srcHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  // extract the <x-dc> template so built pages can re-boot the engine without <x-dc>
  const open = srcHtml.indexOf('<x-dc>');
  const close = srcHtml.lastIndexOf('</x-dc>');
  const template = srcHtml.slice(open + '<x-dc>'.length, close);
  const b64 = Buffer.from(template, 'utf8').toString('base64');

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // shared assets
  for (const f of ['support.js', 'content-global.js', 'image-slot.js', 'mobile.css', 'robots.txt', 'CNAME', '.nojekyll']) {
    if (fs.existsSync(path.join(ROOT, f))) fs.copyFileSync(path.join(ROOT, f), path.join(DIST, f));
  }
  copyRec(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));

  // template as a shared, base64 (no literal {{ }} in source) UTF-8-safe module
  fs.writeFileSync(path.join(DIST, 'app.template.js'),
    'window.__DC_TEMPLATE__=(function(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return new TextDecoder("utf-8").decode(a);})("' + b64 + '");\n');

  const server = serve();
  await new Promise(r => server.listen(PORT, r));
  // Use the sandbox's prebuilt Chromium when present; otherwise let Playwright
  // locate the browser it installed (CI: `npx playwright install chromium`).
  const launchOpts = { args: ['--no-sandbox'] };
  if (fs.existsSync(EXE)) launchOpts.executablePath = EXE;
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({ viewport: { width: 1366, height: 1000 } });

  const faqLd = faqSchema(srcHtml);

  // discover blog posts and add a prerendered route per slug (/blog/<slug>)
  await page.goto(`http://localhost:${PORT}/blog`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.AICONIC_CONTENT && window.AICONIC_CONTENT.POSTS, { timeout: 20000 }).catch(() => {});
  const posts = await page.evaluate(() => {
    const P = (window.AICONIC_CONTENT && window.AICONIC_CONTENT.POSTS) || {};
    return Object.keys(P).map(k => {
      const text = String(P[k].html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      return { slug: k, title: P[k].title, cat: P[k].cat, text: text.slice(0, 240) };
    });
  });
  const postRoutes = posts.map(p => ({
    path: '/blog/' + p.slug, page: 'post',
    title: (p.title.length > 62 ? p.title.slice(0, 59).trim() + '…' : p.title),
    desc: (p.text.length > 158 ? p.text.slice(0, 155).trim() + '…' : p.text) || p.title,
    postTitle: p.title,
    jsonld: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, articleSection: p.cat, author: { '@type': 'Person', name: 'Annie' }, publisher: { '@type': 'Organization', name: 'AICONIC' }, mainEntityOfPage: ORIGIN + '/blog/' + p.slug }
  }));
  const allRoutes = ROUTES.map(r => ({ ...r, jsonld: r.page === 'faq' ? faqLd : null })).concat(postRoutes);

  const results = [];
  for (const r of allRoutes) {
    await page.goto(`http://localhost:${PORT}${r.path}`, { waitUntil: 'domcontentloaded' });
    // wait until the app has rendered real content (no {{ }}) and the loader is gone
    await page.waitForFunction(() => {
      const root = document.getElementById('dc-root');
      return root && root.textContent && root.textContent.length > 500 && !document.documentElement.innerHTML.includes('{{ ');
    }, { timeout: 25000 }).catch(() => {});
    if (r.page === 'post') {
      await page.waitForFunction((t) => document.body.innerText.includes(t.slice(0, 30)), r.postTitle, { timeout: 15000 }).catch(() => {});
    }
    await page.waitForTimeout(2500);

    await page.evaluate((cfg) => {
      const { title, desc, canonical, origin, jsonld } = cfg;
      const head = document.head;
      // base href so subdir routes resolve /support.js, /assets/... correctly
      let base = head.querySelector('base'); if (!base) { base = document.createElement('base'); head.insertBefore(base, head.firstChild); }
      base.setAttribute('href', '/');
      // single title
      head.querySelectorAll('title').forEach((t, i) => { if (i === 0) t.textContent = title; else t.remove(); });
      if (!head.querySelector('title')) { const t = document.createElement('title'); t.textContent = title; head.appendChild(t); }
      const setMeta = (sel, attr, val) => { let e = head.querySelector(sel); if (!e) { e = document.createElement('meta'); const [k, v] = attr; e.setAttribute(k, v); head.appendChild(e); } e.setAttribute('content', val); };
      setMeta('meta[name="description"]', ['name', 'description'], desc);
      setMeta('meta[property="og:title"]', ['property', 'og:title'], title);
      setMeta('meta[property="og:description"]', ['property', 'og:description'], desc);
      setMeta('meta[property="og:url"]', ['property', 'og:url'], canonical);
      setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], title);
      setMeta('meta[name="twitter:description"]', ['name', 'twitter:description'], desc);
      let link = head.querySelector('link[rel="canonical"]'); if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); head.appendChild(link); }
      link.setAttribute('href', canonical);
      // template module for re-boot (page has no <x-dc> after render)
      if (!head.querySelector('script[data-dc-template]')) { const s = document.createElement('script'); s.setAttribute('data-dc-template', ''); s.src = '/app.template.js'; head.insertBefore(s, head.querySelector('script[src$="support.js"]') || null); }
      // per-route JSON-LD (FAQPage on /faq, BlogPosting on posts)
      document.querySelectorAll('script[data-route-schema]').forEach(n => n.remove());
      if (jsonld) { const s = document.createElement('script'); s.type = 'application/ld+json'; s.setAttribute('data-route-schema', ''); s.textContent = jsonld; head.appendChild(s); }
    }, { title: r.title, desc: r.desc, canonical: r.canonical || (ORIGIN + r.path), origin: ORIGIN, jsonld: r.jsonld ? JSON.stringify(r.jsonld) : null });

    let html = await page.content();
    html = html.replace(/^<!DOCTYPE[^>]*>/i, '').trim();
    // strip the vendor preload/script errors are irrelevant; ensure app.template.js loads before support.js
    const out = '<!DOCTYPE html>\n' + html + '\n';
    const dir = r.path === '/' ? DIST : path.join(DIST, r.path.replace(/^\//, ''));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), out);
    results.push({ route: r.path, bytes: out.length, hasContent: html.length > 3000, rawPlaceholders: (html.match(/\{\{ [a-zA-Z]/g) || []).length });
  }

  // sitemap
  const urls = allRoutes.filter(r => !r.alias).map(r => `  <url><loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc></url>`).join('\n');
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`.replace('sitemap.org', 'sitemaps.org'));

  await browser.close();
  server.close();
  console.log(JSON.stringify(results, null, 2));
}
main().catch(e => { console.error('BUILD FAILED', e); process.exit(1); });
