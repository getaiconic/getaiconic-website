const B = "https://d8j0ntlcm91z4.cloudfront.net/user_37WlzFvjNyv4KMsclpKxnBo6d06/";

const VID = {plumb: B+"hf_20260730_230844_8bfc4a4e-82e6-4b75-ad81-3ea64bf86132.mp4", roof: B+"hf_20260730_230846_9c3fa378-9674-4daf-b195-e547059e284f.mp4", hvac: B+"hf_20260730_230848_fed1c451-2713-4f5f-a88b-38bb3c71c5a7.mp4"};
const S = [B+"hf_20260729_234509_95d9af0d-0f0e-4b80-8d1c-70c3302c5545.png", B+"hf_20260729_234513_9e7b44ea-afd2-490b-af95-0ada6d681db2.png", B+"hf_20260729_234518_5894e394-c320-49fa-8136-a5a7b4c4dd04.png"];
const R = [B+"hf_20260729_234523_b10de2c5-ed73-4931-a64a-2bd8aa8901c0.png", B+"hf_20260729_234528_1b2581ad-4c7c-40db-9cf6-bdbbb8285dff.png", B+"hf_20260729_234532_a2ae5f17-48e6-4d60-84d6-de2d2bbb3cc2.png"];
const H = [B+"hf_20260729_234538_bc9e8130-93e1-4b6e-9773-dfc0ccbb7cf9.png", B+"hf_20260729_234543_114c4891-d9c1-4a58-92d7-a941cdf56e83.png", B+"hf_20260729_234547_466e9e34-bbb1-4fce-b4f6-cfe6c6d9eea1.png"];
const V = [B+"hf_20260729_234555_6022c851-0114-42ec-b1a1-cfbb453f7920.png", B+"hf_20260729_234559_00b86985-de39-4460-a686-8beec25af1f5.png", B+"hf_20260729_234604_415195d7-205b-4de9-9580-a8039c6c25de.png"];
const F = [B+"hf_20260729_234452_fb2ae72d-163a-43e6-a118-10f213f4af49.png", B+"hf_20260729_234457_2d2cabec-90de-43da-8223-d96f6a353973.png", B+"hf_20260729_234501_edccf19e-3342-490d-8a5e-423715e9ac61.png"];

const E = [B+"hf_20260730_203501_a1c1f319-acb4-429d-b5ef-0131751f2544.png", B+"hf_20260730_203507_77c12865-b8de-47b8-9664-3943d4a9e164.png", B+"hf_20260730_203512_5396f131-9115-4949-8c6e-6ada3e2e96e1.png"];
const G = [B+"hf_20260730_203518_ec5a8bcf-af81-4537-917e-5e407eddf48c.png", B+"hf_20260730_203523_d08ea260-948c-49e2-a8fa-d85e53e86126.png", B+"hf_20260730_203528_53527e2f-7234-48e4-9411-779cf3d696a3.png"];
const P = [B+"hf_20260730_203534_903c1edd-cd8c-4437-bdbc-e4841bbb49c1.png", B+"hf_20260730_203540_873f30fc-ceb5-4963-9de4-468943805a0b.png", B+"hf_20260730_203547_77c4a3f4-4708-4718-97cd-503aa52a0b04.png"];
const C = [B+"hf_20260730_203553_f42b2b63-d0b3-4f45-bb12-41034349bdeb.png", B+"hf_20260730_203558_e57e08a5-bd74-4096-903c-255dd2a45ee4.png", B+"hf_20260730_203605_3a0f5b03-f8bd-497e-adde-09030c010ace.png"];
const D = [B+"hf_20260730_203612_504c23f3-893e-4598-8e74-ccfb6a4a4b95.png", B+"hf_20260730_203619_d3da1dfe-d4f0-433e-8c05-259a5b2bec93.png", B+"hf_20260730_203625_af722bff-8307-4233-8d81-56c8d7547eed.png"];
const W = [B+"hf_20260730_203631_30083ea6-6642-4fd0-8bdc-929e48fd554a.png", B+"hf_20260730_203636_e6b6ba24-12de-4d08-9b83-2af20fe57082.png", B+"hf_20260730_203641_d5f30163-21f7-4145-a99c-b14b872a40e9.png"];

const RESET = `*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}a{text-decoration:none;color:inherit}img{display:block;max-width:100%}ul{list-style:none}`;

/* ─────────────────────────  A · SUMMIT PLUMBING
   Layout: utility bar + centred nav, offset hero card, numbered service rows,
   stats strip, split reviews, sticky bottom call bar.                       */
const summit = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Summit Plumbing Co.</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#0C1522;background:#fff;line-height:1.6;padding-bottom:64px}
.w{max-width:1100px;margin:0 auto;padding:0 24px}
.util{background:#0A3F94;color:#fff;font-size:13px;font-weight:600}
.util .w{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:9px 24px}
nav{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-bottom:1px solid #E1EAF7}
.nb{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:20px;height:74px}
.bd{display:flex;align-items:center;gap:10px;font-weight:800;font-size:19px;letter-spacing:-.02em}
.bd s{width:32px;height:32px;border-radius:9px;background:#0F5FD8;color:#fff;display:grid;place-items:center;font-size:14px;text-decoration:none}
.nl{display:flex;gap:26px;font-weight:600;font-size:14.5px;color:#5A6B82;justify-content:center}
.nl a:hover{color:#0F5FD8}
.nr{display:flex;gap:14px;align-items:center;justify-content:flex-end}
.tel{font-weight:800;font-size:17px;color:#0F5FD8;white-space:nowrap}
.btn{display:inline-flex;align-items:center;gap:8px;background:#0F5FD8;color:#fff;font-weight:700;font-size:15px;padding:13px 22px;border-radius:9px;border:0;cursor:pointer}
.btn:hover{background:#0A3F94}
.btn.g{background:#fff;color:#0F5FD8;border:1.5px solid #CFDEF6}
.hero{background:linear-gradient(150deg,#EAF2FF,#F7FAFF)}
.hero .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center;padding:74px 24px}
.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(15,95,216,.1);color:#0F5FD8;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:8px 14px;border-radius:100px}
h1{font-size:clamp(36px,4.6vw,54px);line-height:1.04;font-weight:800;letter-spacing:-.03em;margin:18px 0 0}
.sub{color:#41546D;font-size:18px;margin-top:16px;max-width:42ch}
.acts{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.card{position:relative}
.card>img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:18px}
.float{position:absolute;left:-14px;bottom:-18px;background:#fff;border:1px solid #E1EAF7;border-radius:14px;padding:16px 20px;box-shadow:0 20px 40px -22px rgba(12,21,34,.3)}
.float b{display:block;font-size:24px;font-weight:800;letter-spacing:-.02em;color:#0F5FD8}
.float span{font-size:12.5px;color:#5A6B82;font-weight:600}
section{padding:76px 0}
.eye{font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:#0F5FD8}
h2{font-size:clamp(27px,3.4vw,38px);line-height:1.1;font-weight:800;letter-spacing:-.03em;margin-top:10px}
.lede{color:#5A6B82;font-size:16.5px;margin-top:12px;max-width:54ch}
.rows{margin-top:38px;border-top:1px solid #E1EAF7}
.row{display:grid;grid-template-columns:60px 1fr 1.1fr;gap:26px;align-items:center;padding:26px 0;border-bottom:1px solid #E1EAF7}
.row .n{font-size:15px;font-weight:800;color:#0F5FD8;letter-spacing:.08em}
.row h3{font-size:21px;font-weight:800;letter-spacing:-.02em}
.row p{color:#5A6B82;font-size:15px;margin-top:6px}
.row img{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:12px}
.stats{background:#0C1522;color:#fff}
.stats .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:28px;padding:44px 24px;text-align:center}
.stats b{display:block;font-size:38px;font-weight:800;letter-spacing:-.03em}
.stats span{font-size:13.5px;opacity:.7;font-weight:600}
.revwrap{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:44px;align-items:start}
.score{background:#F4F8FF;border:1px solid #E1EAF7;border-radius:18px;padding:34px;text-align:center}
.score b{display:block;font-size:60px;font-weight:800;letter-spacing:-.04em;line-height:1}
.score .st{color:#F2A93B;font-size:20px;letter-spacing:3px;margin:8px 0}
.score span{font-size:13.5px;color:#5A6B82;font-weight:600}
.rev{padding:22px 0;border-bottom:1px solid #E1EAF7}
.rev:last-child{border-bottom:0}
.rev .st{color:#F2A93B;font-size:13px;letter-spacing:2px}
.rev q{display:block;font-size:16px;margin:10px 0 12px;quotes:none}
.rev .who{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:700;color:#5A6B82}
.rev .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
.bar{position:fixed;left:0;right:0;bottom:0;background:#0F5FD8;color:#fff;z-index:40}
.bar .w{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 24px;flex-wrap:wrap}
.bar strong{font-size:15.5px}
footer{background:#0C1522;color:#fff;padding:44px 0 34px;font-size:14px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;opacity:.65;margin-top:22px;padding-top:20px;border-top:1px solid rgba(255,255,255,.14);font-size:12.5px}
</style></head><body>
<div class="util"><div class="w"><span>Same-day service · 7 days a week</span><span>Licensed &amp; insured · IL #058-123456</span></div></div>
<nav><div class="w nb">
<div class="bd"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M2 26 11 9l5.5 10.5L21 12l9 14H2Z" fill="#0F5FD8"/><path d="M11 9l5.5 10.5L21 12" stroke="#9DC2FF" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M25.5 3.5c1.9 2.7 3 4.3 3 5.7a3 3 0 0 1-6 0c0-1.4 1.1-3 3-5.7Z" fill="#9DC2FF"/></svg>Summit Plumbing</div>
<div class="nl"><a href="#s">Services</a><a href="#w">Why us</a><a href="#r">Reviews</a><a href="#c">Contact</a></div>
<div class="nr"><span class="tel">(312) 555-0148</span><a class="btn" href="#c">Book online</a></div>
</div></nav>

<div class="hero"><div class="w">
<div><span class="pill">Under 60 min average arrival</span>
<h1>Chicago plumbing, done right the first time.</h1>
<p class="sub">Licensed plumbers who show up on time, quote before they start, and leave the place cleaner than they found it.</p>
<div class="acts"><a class="btn" href="#c">Book online</a><a class="btn g" href="#s">See services</a></div></div>
<div class="card"><video src="${VID.plumb}" poster="${S[0]}" autoplay muted loop playsinline volume="0" style="display:block;width:100%;height:100%;object-fit:cover"></video>
<div class="float"><b>$0</b><span>Diagnostic with any repair</span></div></div>
</div></div>

<section id="s"><div class="w"><span class="eye">Services</span><h2>Every pipe, drain and heater in your home.</h2>
<p class="lede">One call covers the leak you found today and the system you should have replaced last year.</p>
<div class="rows">
<div class="row"><span class="n">01</span><div><h3>Emergency repairs</h3><p>Burst pipes, backed-up drains and no hot water — answered day or night, seven days a week.</p></div><img src="${S[0]}" alt=""></div>
<div class="row"><span class="n">02</span><div><h3>Water heaters</h3><p>Tank and tankless installs with a ten-year workmanship guarantee and rebate paperwork filed for you.</p></div><img src="${S[1]}" alt=""></div>
<div class="row"><span class="n">03</span><div><h3>Repiping &amp; remodels</h3><p>Whole-home repipes and bathroom rough-ins on a schedule you can actually plan around.</p></div><img src="${S[2]}" alt=""></div>
</div></div></section>

<div class="stats"><div class="w">
<div><b>4.9★</b><span>412 Google reviews</span></div>
<div><b>&lt;60min</b><span>Average arrival time</span></div>
<div><b>24/7</b><span>Emergency line answered</span></div>
<div><b>10yr</b><span>Workmanship guarantee</span></div>
</div></div>

<section id="w"><div class="w" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center">
<img src="${S[2]}" alt="" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:18px">
<div><span class="eye">Why us</span><h2>Clean work you would show your neighbours.</h2>
<p class="lede">We photograph every job before and after. Ask for the album on your estimate call.</p>
<ul style="margin-top:22px;display:grid;gap:12px">
<li style="display:flex;gap:12px;font-size:15.5px"><b style="color:#0F5FD8">✓</b>Upfront flat-rate pricing, approved before we start</li>
<li style="display:flex;gap:12px;font-size:15.5px"><b style="color:#0F5FD8">✓</b>Drop cloths, shoe covers and a full clean-up, always</li>
<li style="display:flex;gap:12px;font-size:15.5px"><b style="color:#0F5FD8">✓</b>Parts and labour warrantied in writing</li>
<li style="display:flex;gap:12px;font-size:15.5px"><b style="color:#0F5FD8">✓</b>Text updates the moment the tech is on the way</li>
</ul></div></div></section>

<section id="r" style="background:#F7FAFF"><div class="w"><span class="eye">Reviews</span><h2>412 neighbours, one very high bar.</h2>
<div class="revwrap" style="margin-top:36px">
<div class="score"><b>4.9</b><div class="st">★★★★★</div><span>412 Google reviews<br>Verified by Google Business</span></div>
<div>
<div class="rev"><div class="st">★★★★★</div><q>Burst pipe at 11pm. Someone actually answered, someone came, and the price was the price he quoted on the phone.</q><div class="who"><img src="${F[0]}" alt="">Dave R. · Lincoln Park · Mar 2026</div></div>
<div class="rev"><div class="st">★★★★★</div><q>They replaced our water heater in half a day and vacuumed the basement on the way out. Who does that?</q><div class="who"><img src="${F[1]}" alt="">Marta K. · Oak Park · Feb 2026</div></div>
<div class="rev"><div class="st">★★★★★</div><q>Third plumber we tried and the last one we will need to. Straight answer, fair number, done.</q><div class="who"><img src="${F[2]}" alt="">Tony B. · Logan Square · Jan 2026</div></div>
</div></div></div></section>

<footer id="c"><div class="w"><div class="bd" style="color:#fff"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M2 26 11 9l5.5 10.5L21 12l9 14H2Z" fill="#0F5FD8"/><path d="M11 9l5.5 10.5L21 12" stroke="#9DC2FF" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M25.5 3.5c1.9 2.7 3 4.3 3 5.7a3 3 0 0 1-6 0c0-1.4 1.1-3 3-5.7Z" fill="#9DC2FF"/></svg>Summit Plumbing</div>
<p style="opacity:.7;margin-top:12px;max-width:44ch">Chicago and the near west suburbs. Open 7 days, emergency line answered 24/7.</p>
<div class="fb"><span>(312) 555-0148 · hello@summitplumbingco.com</span><span>© 2026 Summit Plumbing Co.</span></div></div></footer>
<div class="bar"><div class="w"><strong>Need a plumber today?</strong><a class="btn" style="background:#fff;color:#0F5FD8" href="#c">Call (312) 555-0148</a></div></div>
</body></html>`;

/* ─────────────────────────  B · IRON PEAK ROOFING
   Layout: full-bleed dark hero, uppercase condensed nav w/ phone, alternating
   full-width bands, big single testimonial, oversized footer wordmark.       */
const ironpeak = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Iron Peak Roofing</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Source Sans 3',system-ui,sans-serif;color:#171512;background:#171512;line-height:1.6}
.w{max-width:1180px;margin:0 auto;padding:0 28px}
.dsp{font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.01em}
nav{position:sticky;top:0;z-index:30;background:rgba(23,21,18,.94);border-bottom:1px solid rgba(255,255,255,.12)}
.nb{display:flex;align-items:center;justify-content:space-between;gap:24px;height:76px;color:#fff}
.bd{display:flex;align-items:center;gap:12px;font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:24px;text-transform:uppercase;letter-spacing:.06em}
.bd s{width:34px;height:34px;background:#B4441F;display:grid;place-items:center;font-size:15px;text-decoration:none}
.nl{display:flex;gap:30px;font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:16px;text-transform:uppercase;letter-spacing:.1em}
.nl a{opacity:.72}.nl a:hover{opacity:1;color:#E0703F}
.tel{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;letter-spacing:.04em;color:#E0703F;white-space:nowrap}
.hero{position:relative;min-height:640px;display:flex;align-items:flex-end;overflow:hidden}
.hero .bg{position:absolute;inset:0;background:url(${R[0]}) center/cover}
.hero .bg video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero .bg:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,#171512 6%,rgba(23,21,18,.35) 62%,rgba(23,21,18,.7))}
.hero .w{position:relative;z-index:2;padding:0 28px 72px;color:#fff}
.tag{display:inline-block;background:#B4441F;color:#fff;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.18em;text-transform:uppercase;padding:8px 14px}
h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(52px,8vw,104px);line-height:.92;font-weight:800;text-transform:uppercase;letter-spacing:-.01em;margin:20px 0 0;max-width:17ch}
.sub{font-size:19px;margin-top:20px;max-width:48ch;opacity:.8}
.acts{display:flex;gap:14px;margin-top:32px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:9px;background:#B4441F;color:#fff;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:17px;letter-spacing:.1em;text-transform:uppercase;padding:15px 30px;border:0;cursor:pointer}
.btn:hover{background:#8F3517}
.btn.o{background:transparent;border:2px solid rgba(255,255,255,.4)}
.btn.o:hover{border-color:#fff;background:transparent}
.strip{background:#B4441F;color:#fff}
.strip .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:24px;padding:26px 28px;text-align:center}
.strip b{display:block;font-family:'Barlow Condensed',sans-serif;font-size:34px;font-weight:800}
.strip span{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.82}
.band{background:#FBF9F6;color:#171512}
.band+.band{border-top:1px solid #E4DED5}
.band .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:56px;align-items:center;padding:84px 28px}
.band img{width:100%;aspect-ratio:4/3;object-fit:cover}
.band.rev .w>div{order:2}
.eye{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#B4441F}
h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(34px,4.4vw,52px);line-height:1;font-weight:800;text-transform:uppercase;margin-top:10px}
.lede{color:#6B6459;font-size:17px;margin-top:16px;max-width:50ch}
.ul{margin-top:24px;display:grid;gap:14px}
.ul li{display:flex;gap:14px;font-size:16px;padding-bottom:14px;border-bottom:1px solid #E4DED5}
.ul b{color:#B4441F;font-family:'Barlow Condensed',sans-serif;font-size:19px}
.quote{background:#171512;color:#fff;text-align:center;padding:96px 0}
.quote .st{color:#E0703F;font-size:20px;letter-spacing:5px}
.quote q{display:block;font-family:'Barlow Condensed',sans-serif;font-size:clamp(28px,4vw,46px);line-height:1.12;font-weight:600;text-transform:uppercase;max-width:24ch;margin:24px auto;quotes:none}
.qw{display:flex;align-items:center;justify-content:center;gap:12px;font-size:14px;letter-spacing:.1em;text-transform:uppercase;opacity:.7}
.qw img{width:44px;height:44px;border-radius:50%;object-fit:cover}
.more{background:#FBF9F6;padding:70px 0}
.more .g{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:28px;margin-top:34px}
.more .c{border-top:3px solid #B4441F;padding-top:20px}
.more .st{color:#B4441F;letter-spacing:2px;font-size:13px}
.more q{display:block;font-size:16px;margin:10px 0 12px;quotes:none}
.more .who{font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:.1em;text-transform:uppercase;color:#6B6459}
.cta{background:#B4441F;color:#fff;padding:88px 0;text-align:center}
.cta h2{max-width:22ch;margin:0 auto}
.cta p{margin:16px auto 28px;max-width:44ch;opacity:.85;font-size:17px}
footer{background:#171512;color:#fff;padding:60px 0 36px}
.wm{font-family:'Barlow Condensed',sans-serif;font-size:clamp(48px,11vw,140px);line-height:.85;font-weight:800;text-transform:uppercase;opacity:.14}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;opacity:.6;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.14);font-size:13px}
</style></head><body>
<nav><div class="w nb">
<div class="bd"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M16 2 29 6.5v10c0 6.6-5.2 12-13 15.5C8.2 28.5 3 23.1 3 16.5V6.5L16 2Z" fill="#B4441F"/><path d="M8.5 18 16 11l7.5 7" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 20h7v6h-7z" fill="#F3C7B4"/></svg>Iron Peak</div>
<div class="nl"><a href="#i">Inspection</a><a href="#s">Systems</a><a href="#r">Reviews</a><a href="#c">Contact</a></div>
<span class="tel">(630) 555-0192</span>
</div></nav>

<div class="hero"><div class="bg"><video src="${VID.roof}" autoplay muted loop playsinline volume="0"></video></div><div class="w">
<span class="tag">Storm damage specialists</span>
<h1>A roof built for the worst day of the year.</h1>
<p class="sub">Insurance-approved storm repairs and full replacements across the western suburbs, backed by a 25-year workmanship warranty.</p>
<div class="acts"><a class="btn" href="#c">Free roof inspection</a><a class="btn o" href="#s">What we install</a></div>
</div></div>

<div class="strip"><div class="w">
<div><b>25 YR</b><span>Workmanship warranty</span></div>
<div><b>1,800+</b><span>Roofs replaced</span></div>
<div><b>48 HR</b><span>Emergency tarp</span></div>
<div><b>0</b><span>Subcontractors used</span></div>
</div></div>

<div class="band" id="i"><div class="w">
<div><span class="eye">Step one</span><h2>We meet your adjuster on the roof.</h2>
<p class="lede">Most homeowners call us after a storm. We document the damage properly, then handle the claim paperwork and the shingles both.</p>
<ul class="ul"><li><b>01</b><span>Free drone and in-person inspection within 48 hours</span></li><li><b>02</b><span>Photographed, measured report your adjuster will accept</span></li><li><b>03</b><span>We attend the adjuster meeting on site, at no cost</span></li></ul></div>
<img src="${R[1]}" alt=""></div></div>

<div class="band rev" id="s"><div class="w">
<div><span class="eye">What we install</span><h2>Architectural, metal and flat.</h2>
<p class="lede">Our own crews, our own trucks, one foreman from tear-off to final walk. Magnetic sweep of the property every single evening.</p>
<ul class="ul"><li><b>→</b><span>Architectural shingle systems with full ventilation rebuild</span></li><li><b>→</b><span>Standing-seam metal for low-maintenance decades</span></li><li><b>→</b><span>TPO and modified bitumen for flat and low-slope</span></li></ul></div>
<img src="${R[2]}" alt=""></div></div>

<div class="quote"><div class="w"><div class="st">★★★★★</div>
<q>Six houses on our street used Iron Peak after the June storm. Ours was done in one day.</q>
<div class="qw"><img src="${F[0]}" alt="">Greg M. · Wheaton · July 2026</div></div></div>

<div class="more" id="r"><div class="w"><span class="eye">More reviews</span><h2>4.9 across 340 reviews.</h2>
<div class="g">
<div class="c"><div class="st">★★★★★</div><q>They caught damage our insurer missed and got the claim reopened. Saved us about eleven thousand dollars.</q><div class="who">Priya S. · Naperville · June 2026</div></div>
<div class="c"><div class="st">★★★★★</div><q>Crew was polite, fast, and the yard was spotless when they left. We did not find one nail.</q><div class="who">Rob &amp; Lisa T. · Aurora · May 2026</div></div>
<div class="c"><div class="st">★★★★★</div><q>Third estimate we got and the only one that explained why the old roof failed. Hired them on the spot.</q><div class="who">Ken A. · Downers Grove · Apr 2026</div></div>
</div></div></div>

<div class="cta" id="c"><div class="w"><h2>Find out what the storm actually did.</h2>
<p>Free inspection, honest answer, no pressure to sign anything on the driveway.</p>
<a class="btn" style="background:#171512" href="#c">Book my inspection</a></div></div>

<footer><div class="w"><div class="wm">Iron Peak</div>
<div class="fb"><span>Naperville, IL · (630) 555-0192 · Licensed &amp; insured</span><span>© 2026 Iron Peak Roofing</span></div></div></footer>
</body></html>`;

/* ─────────────────────────  C · CLEAR AIR HVAC
   Layout: floating pill nav, centred hero with image below, 2×2 numeral card
   grid, membership panel, avatar review cards, rounded CTA panel.            */
const clearair = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Clear Air Heating &amp; Cooling</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Manrope',system-ui,sans-serif;color:#0E1F1C;background:#F5FBF8;line-height:1.6}
.w{max-width:1080px;margin:0 auto;padding:0 24px}
.navwrap{position:sticky;top:0;z-index:30;padding:18px 24px}
nav{max-width:1000px;margin:0 auto;background:rgba(255,255,255,.9);backdrop-filter:blur(14px);border:1px solid #DCEBE6;border-radius:100px;box-shadow:0 14px 34px -20px rgba(14,31,28,.28)}
.nb{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 14px 12px 22px}
.bd{display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px;letter-spacing:-.03em}
.bd s{width:32px;height:32px;border-radius:50%;background:#0E8C74;color:#fff;display:grid;place-items:center;font-size:13px;text-decoration:none}
.nl{display:flex;gap:24px;font-weight:600;font-size:14.5px;color:#587772}
.nl a:hover{color:#0E8C74}
.btn{display:inline-flex;align-items:center;gap:8px;background:#0E8C74;color:#fff;font-weight:700;font-size:14.5px;padding:12px 22px;border-radius:100px;border:0;cursor:pointer}
.btn:hover{background:#0A6D5A}
.btn.g{background:#EFF8F5;color:#0E8C74}
.hero{text-align:center;padding:64px 0 0}
.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(14,140,116,.12);color:#0E8C74;font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:8px 16px;border-radius:100px}
h1{font-size:clamp(38px,5.4vw,62px);line-height:1.02;font-weight:800;letter-spacing:-.04em;margin:20px auto 0;max-width:18ch}
.sub{color:#3E605A;font-size:18.5px;margin:18px auto 0;max-width:46ch}
.acts{display:flex;gap:12px;margin-top:28px;justify-content:center;flex-wrap:wrap}
.shot{margin-top:52px;border-radius:26px;overflow:hidden;border:1px solid #DCEBE6;box-shadow:0 40px 80px -46px rgba(14,31,28,.4)}
.shot img{width:100%;aspect-ratio:16/8;object-fit:cover}
section{padding:78px 0}
.eye{font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#0E8C74}
h2{font-size:clamp(28px,3.6vw,42px);line-height:1.08;font-weight:800;letter-spacing:-.035em;margin-top:10px;max-width:22ch}
.lede{color:#587772;font-size:16.5px;margin-top:14px;max-width:52ch}
.g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:40px}
.c{background:#fff;border:1px solid #DCEBE6;border-radius:22px;padding:30px;display:flex;flex-direction:column;gap:14px}
.c .n{font-size:13px;font-weight:800;color:#0E8C74;letter-spacing:.12em}
.c h3{font-size:22px;font-weight:800;letter-spacing:-.025em}
.c p{color:#587772;font-size:15px}
.c img{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:14px;margin-top:auto}
.plan{background:#0E1F1C;color:#fff;border-radius:28px;padding:46px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:40px;align-items:center;margin-top:44px}
.plan h2{color:#fff;max-width:18ch}
.plan ul{display:grid;gap:12px;margin-top:20px}
.plan li{display:flex;gap:11px;font-size:15.5px;opacity:.86}
.plan .price{background:rgba(255,255,255,.08);border-radius:20px;padding:30px;text-align:center}
.plan .price b{display:block;font-size:48px;font-weight:800;letter-spacing:-.04em;line-height:1}
.plan .price span{font-size:13.5px;opacity:.7}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:40px}
.rev{background:#fff;border:1px solid #DCEBE6;border-radius:22px;padding:26px}
.rev .st{color:#0E8C74;letter-spacing:2px;font-size:14px}
.rev q{display:block;font-size:15.5px;margin:12px 0 16px;quotes:none}
.rev .who{display:flex;align-items:center;gap:11px;font-size:13.5px;font-weight:700;color:#587772}
.rev .who img{width:38px;height:38px;border-radius:50%;object-fit:cover}
.cta{background:#0E8C74;color:#fff;border-radius:28px;padding:70px 40px;text-align:center;margin:0 24px 78px;max-width:1080px}
.cta h2{color:#fff;max-width:22ch;margin:0 auto}
.cta p{margin:16px auto 26px;max-width:44ch;opacity:.86;font-size:17px}
footer{background:#0E1F1C;color:#fff;padding:44px 0 32px;font-size:14px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;opacity:.65;margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.14);font-size:12.5px}
</style></head><body>
<div class="navwrap"><nav><div class="nb">
<div class="bd"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M16 1.5 28.6 8.8v14.4L16 30.5 3.4 23.2V8.8L16 1.5Z" fill="#0E8C74"/><circle cx="16" cy="16" r="2.4" fill="#fff"/><path d="M15.9 13.6c-.2-3.9-1.9-5.4 1.5-6.6 2.4-.8 3.4 2.2 1.3 4.1-1.3 1.2-2.7 1.9-2.8 2.5Z" fill="#fff"/><path d="M18.4 16.1c3.9-.2 5.4-1.9 6.6 1.5.8 2.4-2.2 3.4-4.1 1.3-1.2-1.3-1.9-2.7-2.5-2.8Z" fill="#fff"/><path d="M16.1 18.4c.2 3.9 1.9 5.4-1.5 6.6-2.4.8-3.4-2.2-1.3-4.1 1.3-1.2 2.7-1.9 2.8-2.5Z" fill="#fff"/><path d="M13.6 15.9c-3.9.2-5.4 1.9-6.6-1.5-.8-2.4 2.2-3.4 4.1-1.3 1.2 1.3 1.9 2.7 2.5 2.8Z" fill="#fff"/></svg>Clear Air</div>
<div class="nl"><a href="#s">Services</a><a href="#m">Membership</a><a href="#r">Reviews</a><a href="#c">Contact</a></div>
<a class="btn" href="#c">Book a tune-up</a>
</div></nav></div>

<div class="hero"><div class="w">
<span class="pill">Comfort you stop thinking about</span>
<h1>Air that feels right in every room.</h1>
<p class="sub">Maintenance, repair and high-efficiency installs from a team that explains the options instead of upselling you.</p>
<div class="acts"><a class="btn" href="#c">Book a tune-up</a><a class="btn g" href="#m">See membership</a></div>
<div class="shot"><video src="${VID.hvac}" poster="${H[0]}" autoplay muted loop playsinline volume="0" style="display:block;width:100%;height:100%;object-fit:cover"></video></div>
</div></div>

<section id="s"><div class="w"><span class="eye">Services</span><h2>Heating, cooling, and the air in between.</h2>
<p class="lede">Seasonal tune-ups keep the emergency calls away. When one happens anyway, we are two hours out.</p>
<div class="g2">
<div class="c"><span class="n">01</span><h3>AC repair &amp; install</h3><p>Cooling that keeps up in August, sized properly for your actual square footage rather than a rule of thumb.</p><img src="${H[0]}" alt=""></div>
<div class="c"><span class="n">02</span><h3>Furnace &amp; heat pump</h3><p>High-efficiency systems with the utility rebate paperwork filed on your behalf.</p><img src="${H[1]}" alt=""></div>
<div class="c"><span class="n">03</span><h3>Air quality</h3><p>Filtration, humidity control and duct sealing for the rooms that never feel right.</p><img src="${H[2]}" alt=""></div>
<div class="c"><span class="n">04</span><h3>Emergency service</h3><p>No heat, no cooling, strange noise. Two-hour response window, seven days a week.</p><img src="${H[0]}" alt=""></div>
</div></div></section>

<div class="w" id="m"><div class="plan">
<div><span class="eye" style="color:#6FD8C0">Membership</span><h2>The tune-up that pays for itself.</h2>
<ul><li><b>✓</b>Two precision tune-ups a year, spring and fall</li><li><b>✓</b>Priority same-day scheduling, ahead of the queue</li><li><b>✓</b>15% off any repair, no expiry</li><li><b>✓</b>Written system health report after every visit</li></ul></div>
<div class="price"><b>$18</b><span>per month · cancel anytime</span><br><br><a class="btn" style="background:#fff;color:#0E1F1C" href="#c">Join Clear Air Care</a></div>
</div></div>

<section id="r"><div class="w"><span class="eye">Reviews</span><h2>Quietly keeping the suburbs comfortable.</h2>
<p class="lede">4.9 stars across 286 reviews on Google and Facebook.</p>
<div class="revs">
<div class="rev"><div class="st">★★★★★</div><q>Explained three options with real numbers and never once pushed the expensive one. That is rare.</q><div class="who"><img src="${F[0]}" alt="">Sandra P. · Naperville · June 2026</div></div>
<div class="rev"><div class="st">★★★★★</div><q>AC died on the hottest weekend of the year. Fixed same day, and the tech showed me what had failed.</q><div class="who"><img src="${F[2]}" alt="">Michael O. · Aurora · July 2026</div></div>
<div class="rev"><div class="st">★★★★★</div><q>Our upstairs finally cools. Ten years of being told that was just how the house was.</q><div class="who"><img src="${F[1]}" alt="">The Kaurs · Batavia · May 2026</div></div>
</div></div></section>

<div class="cta" id="c" style="margin-left:auto;margin-right:auto"><h2>Get ahead of the next heat wave.</h2>
<p>Book a tune-up this week and we will check the whole system, not just the unit.</p>
<a class="btn" style="background:#fff;color:#0E8C74" href="#c">Book a tune-up</a></div>

<footer><div class="w"><div class="bd" style="color:#fff"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M16 1.5 28.6 8.8v14.4L16 30.5 3.4 23.2V8.8L16 1.5Z" fill="#0E8C74"/><circle cx="16" cy="16" r="2.4" fill="#fff"/><path d="M15.9 13.6c-.2-3.9-1.9-5.4 1.5-6.6 2.4-.8 3.4 2.2 1.3 4.1-1.3 1.2-2.7 1.9-2.8 2.5Z" fill="#fff"/><path d="M18.4 16.1c3.9-.2 5.4-1.9 6.6 1.5.8 2.4-2.2 3.4-4.1 1.3-1.2-1.3-1.9-2.7-2.5-2.8Z" fill="#fff"/><path d="M16.1 18.4c.2 3.9 1.9 5.4-1.5 6.6-2.4.8-3.4-2.2-1.3-4.1 1.3-1.2 2.7-1.9 2.8-2.5Z" fill="#fff"/><path d="M13.6 15.9c-3.9.2-5.4 1.9-6.6-1.5-.8-2.4 2.2-3.4 4.1-1.3 1.2 1.3 1.9 2.7 2.5 2.8Z" fill="#fff"/></svg>Clear Air</div>
<div class="fb"><span>Aurora, IL · (630) 555-0221 · Licensed &amp; insured</span><span>© 2026 Clear Air Heating &amp; Cooling</span></div></div></footer>
</body></html>`;

/* ─────────────────────────  D · VERDANT LANDSCAPE
   Layout: editorial. Centred wordmark nav with hairline rules, asymmetric
   full-bleed hero, numbered text-only service columns, gallery strip,
   pull-quote reviews, minimal footer.                                        */
const verdant = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Verdant Landscape Co.</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Jost',system-ui,sans-serif;color:#1B2A1E;background:#FDFCF7;line-height:1.7;font-weight:300}
.w{max-width:1160px;margin:0 auto;padding:0 32px}
.srf{font-family:'Cormorant Garamond',Georgia,serif}
nav{position:sticky;top:0;z-index:30;background:rgba(253,252,247,.94);backdrop-filter:blur(10px);border-bottom:1px solid #E2DFD0}
.nb{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:24px;padding:22px 32px}
.nl{display:flex;gap:26px;font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;font-weight:400;color:#61705F}
.nl.r{justify-content:flex-end}
.nl a:hover{color:#2F5D3A}
.wm{font-family:'Cormorant Garamond',Georgia,serif;font-size:26px;letter-spacing:.14em;text-transform:uppercase;text-align:center;white-space:nowrap}
.hero{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));min-height:600px}
.hero .im{background:url(${V[0]}) center/cover;min-height:400px}
.hero .tx{display:flex;flex-direction:column;justify-content:center;padding:76px 64px}
.kick{font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:#2F5D3A}
h1{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(40px,4.8vw,62px);line-height:1.06;font-weight:500;margin:22px 0 0;max-width:18ch}
.sub{font-size:17px;margin-top:20px;max-width:38ch;color:#4B5C4A}
.btn{display:inline-flex;align-items:center;gap:10px;background:transparent;color:#1B2A1E;font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;padding:16px 0;border:0;border-bottom:1px solid #1B2A1E;cursor:pointer;margin-top:30px;align-self:flex-start;font-family:'Jost',sans-serif}
.btn:hover{color:#2F5D3A;border-color:#2F5D3A}
.btn.f{background:#2F5D3A;color:#FDFCF7;border:0;padding:16px 30px}
.btn.f:hover{background:#24482D;color:#FDFCF7}
.rule{border-top:1px solid #E2DFD0}
section{padding:92px 0}
.hd{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:48px;align-items:end}
h2{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(30px,3.8vw,46px);line-height:1.1;font-weight:500;max-width:20ch}
.lede{font-size:16.5px;color:#61705F;max-width:46ch}
.cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:44px;margin-top:56px}
.col .n{font-family:'Cormorant Garamond',Georgia,serif;font-size:15px;letter-spacing:.2em;color:#2F5D3A}
.col h3{font-family:'Cormorant Garamond',Georgia,serif;font-size:25px;font-weight:500;margin:12px 0 10px;padding-bottom:14px;border-bottom:1px solid #E2DFD0}
.col p{font-size:15px;color:#61705F}
.col img{width:100%;aspect-ratio:3/2;object-fit:cover;margin-top:20px;filter:saturate(.9)}
.strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:2px;background:#E2DFD0}
.strip img{width:100%;aspect-ratio:1/1;object-fit:cover}
.quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:46px;margin-top:52px}
.q{border-top:1px solid #1B2A1E;padding-top:22px}
.q .st{color:#A98A3C;letter-spacing:4px;font-size:12px}
.q blockquote{font-family:'Cormorant Garamond',Georgia,serif;font-size:22px;line-height:1.42;font-style:italic;margin:16px 0 18px}
.q .who{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#61705F}
.cta{background:#1B2A1E;color:#FDFCF7;text-align:center;padding:104px 0}
.cta h2{color:#FDFCF7;margin:0 auto;max-width:22ch}
.cta p{margin:18px auto 8px;max-width:42ch;color:rgba(253,252,247,.72);font-size:17px}
footer{padding:52px 0 40px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;color:#61705F;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;margin-top:30px;padding-top:24px;border-top:1px solid #E2DFD0}
</style></head><body>
<nav><div class="nb">
<div class="nl"><a href="#s">Services</a><a href="#p">Portfolio</a></div>
<div class="wm"><svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="display:block;margin:0 auto 6px"><path d="M16 30.5V12.5" stroke="#2F4A32" stroke-width="2" stroke-linecap="round"/><path d="M16 13.5c0-5.2 3.1-8.8 8.3-10.4-.5 6.8-3.6 9.9-8.3 10.4Z" fill="#6E8B66"/><path d="M16 20.5c0-4.7-2.7-7.9-7.3-9.3.4 6 3.1 8.9 7.3 9.3Z" fill="#2F4A32"/><path d="M16 26.6c0-3.5 2.1-6 5.6-7-.4 4.5-2.5 6.7-5.6 7Z" fill="#6E8B66"/></svg>Verdant</div>
<div class="nl r"><a href="#r">Clients</a><a href="#c">Enquire</a></div>
</div></nav>

<div class="hero"><div class="im"></div><div class="tx">
<span class="kick">Design · Build · Maintain</span>
<h1>Gardens that look intentional in every season.</h1>
<p class="sub">Full-service landscape design and build on the North Shore, from planting plans to patios, lighting and year-round care.</p>
<button class="btn f" onclick="location.hash='#c'">Request a design consult</button>
</div></div>

<div class="rule"></div>
<section id="s"><div class="w">
<div class="hd"><div><span class="kick">What we do</span><h2>One studio, from drawing to fifth summer.</h2></div>
<p class="lede">We design it, we build it, and we are the ones who come back to prune it. Eighteen years, one hundred and twenty gardens.</p></div>
<div class="cols">
<div class="col"><span class="n">I</span><h3>Landscape design</h3><p>Planting plans drawn for your light, your soil and how you actually use the yard.</p><img src="${V[1]}" alt=""></div>
<div class="col"><span class="n">II</span><h3>Patios &amp; hardscape</h3><p>Bluestone, brick and stone walls set to last decades, not seasons.</p><img src="${V[0]}" alt=""></div>
<div class="col"><span class="n">III</span><h3>Lighting &amp; care</h3><p>Low-voltage lighting and a maintenance programme that keeps it looking new.</p><img src="${V[2]}" alt=""></div>
</div></div></section>

<div class="strip" id="p"><img src="${V[0]}" alt=""><img src="${V[1]}" alt=""><img src="${V[2]}" alt=""></div>

<section id="r"><div class="w">
<div class="hd"><div><span class="kick">Clients</span><h2>Clients who stayed for a decade.</h2></div>
<p class="lede">4.9 on Houzz across 96 reviews. Most of our work now comes from the neighbours of gardens we built.</p></div>
<div class="quotes">
<div class="q"><div class="st">★★★★★</div><blockquote>They drew something better than what we asked for, then talked us out of the expensive half of it.</blockquote><div class="who">Ellen W. · Wilmette · 2026</div></div>
<div class="q"><div class="st">★★★★★</div><blockquote>Four years on and the borders look better every summer. That is the whole test, isn't it.</blockquote><div class="who">Jonathan R. · Evanston · 2026</div></div>
<div class="q"><div class="st">★★★★★</div><blockquote>The lighting completely changed how we use the garden at night. We eat outside until October now.</blockquote><div class="who">Amira D. · Winnetka · 2025</div></div>
</div></div></section>

<div class="cta" id="c"><div class="w"><h2>Start with a walk around the garden.</h2>
<p>A one-hour consult, on site, with the designer who would run the project.</p>
<button class="btn" style="color:#FDFCF7;border-color:#FDFCF7;margin:24px auto 0" onclick="location.hash='#c'">Request a design consult</button></div></div>

<footer><div class="w"><div class="wm" style="text-align:left"><svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="display:block;margin:0 0 6px"><path d="M16 30.5V12.5" stroke="#2F4A32" stroke-width="2" stroke-linecap="round"/><path d="M16 13.5c0-5.2 3.1-8.8 8.3-10.4-.5 6.8-3.6 9.9-8.3 10.4Z" fill="#6E8B66"/><path d="M16 20.5c0-4.7-2.7-7.9-7.3-9.3.4 6 3.1 8.9 7.3 9.3Z" fill="#2F4A32"/><path d="M16 26.6c0-3.5 2.1-6 5.6-7-.4 4.5-2.5 6.7-5.6 7Z" fill="#6E8B66"/></svg>Verdant</div>
<div class="fb"><span>Evanston, IL · (847) 555-0176</span><span>© 2026 Verdant Landscape Co.</span></div></div></footer>
</body></html>`;

/* ─────────────────────────  E · BRIGHT LINE ELECTRIC
   Layout: amber utility hero, capability grid, panel-style pricing table.    */
const brightline = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bright Line Electric</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Barlow',system-ui,sans-serif;color:#151310;background:#fff;line-height:1.6}
.w{max-width:1140px;margin:0 auto;padding:0 24px}
.util{background:#151310;color:#FFC53D;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:.1em;text-transform:uppercase}
.util .w{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:10px 24px}
nav{position:sticky;top:0;z-index:30;background:#fff;border-bottom:3px solid #151310}
.nb{display:flex;align-items:center;justify-content:space-between;height:76px;gap:20px}
.bd{display:flex;align-items:center;gap:10px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:25px;letter-spacing:.02em;text-transform:uppercase}
.bd s{width:34px;height:34px;background:#FFC53D;display:grid;place-items:center;text-decoration:none;font-size:18px;transform:skewX(-8deg)}
.nl{display:flex;gap:24px;font-weight:600;font-size:14.5px;color:#5A554C}
.nl a:hover{color:#151310}
.btn{display:inline-flex;align-items:center;gap:8px;background:#FFC53D;color:#151310;font-weight:700;font-size:15px;padding:14px 24px;border:0;cursor:pointer;transform:skewX(-8deg)}
.btn span{display:block;transform:skewX(8deg)}
.btn:hover{background:#F2B21F}
.btn.d{background:#151310;color:#FFC53D}
.hero{background:#151310;color:#fff;position:relative;overflow:hidden}
.hero:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,197,61,.09) 0 14px,transparent 14px 28px)}
.hero .w{position:relative;z-index:2;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:46px;align-items:center;padding:72px 24px}
.tag{display:inline-block;background:#FFC53D;color:#151310;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.16em;text-transform:uppercase;padding:6px 14px}
h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(44px,6.6vw,74px);line-height:.98;font-weight:700;text-transform:uppercase;margin-top:18px}
h1 em{color:#FFC53D;font-style:normal}
.sub{color:#C9C4B8;font-size:17.5px;margin-top:16px;max-width:44ch}
.acts{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.hero img{width:100%;aspect-ratio:4/3;object-fit:cover;border:4px solid #FFC53D}
.badges{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));border-bottom:3px solid #151310}
.badge{padding:22px 24px;border-right:1px solid #E6E2D8;font-family:'Barlow Condensed',sans-serif;font-size:16px;letter-spacing:.08em;text-transform:uppercase;display:flex;gap:10px;align-items:center}
.badge b{color:#F2B21F;font-size:20px}
section{padding:78px 0}
.eye{font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:.2em;text-transform:uppercase;color:#A8894A}
h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(30px,4.4vw,48px);font-weight:700;text-transform:uppercase;line-height:1.02;margin-top:8px}
.lede{color:#5A554C;font-size:16.5px;margin-top:12px;max-width:56ch}
.cap{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:22px;margin-top:40px}
.c{border:2px solid #151310;padding:26px;background:#FFFDF6}
.c b{font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:.14em;color:#A8894A}
.c h3{font-family:'Barlow Condensed',sans-serif;font-size:24px;text-transform:uppercase;margin-top:8px}
.c p{color:#5A554C;font-size:15px;margin-top:8px}
.c:hover{background:#FFF6DF}
.split{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:46px;align-items:center}
.split img{width:100%;aspect-ratio:4/3;object-fit:cover}
.tbl{margin-top:34px;border-top:3px solid #151310}
.tr{display:grid;grid-template-columns:1fr auto;gap:20px;padding:18px 0;border-bottom:1px solid #E6E2D8;align-items:baseline}
.tr h4{font-family:'Barlow Condensed',sans-serif;font-size:21px;text-transform:uppercase}
.tr p{color:#5A554C;font-size:14.5px}
.tr b{font-family:'Barlow Condensed',sans-serif;font-size:23px;color:#151310;white-space:nowrap}
.rev{background:#FFF6DF}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:36px}
.rv{background:#fff;border:2px solid #151310;padding:24px}
.rv .st{color:#F2B21F;letter-spacing:2px}
.rv q{display:block;quotes:none;font-size:15.5px;margin:10px 0 14px}
.rv .who{display:flex;gap:10px;align-items:center;font-size:13.5px;font-weight:600;color:#5A554C}
.rv .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
.end{background:#151310;color:#fff;text-align:center}
.end h2{color:#FFC53D}
footer{background:#0D0C0A;color:#8B867B;padding:38px 0;font-size:13.5px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
</style></head><body>
<div class="util"><div class="w"><span>24/7 emergency callout</span><span>Licensed · Bonded · Insured</span></div></div>
<nav><div class="w nb"><div class="bd"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M16 1 31 16 16 31 1 16 16 1Z" fill="#FFC53D"/><path d="M18.2 6 10.5 17.6H15l-1.7 8.6L23.2 14H18l.2-8Z" fill="#151310"/></svg>Bright Line Electric</div>
<div class="nl"><a href="#s">Services</a><a href="#p">Pricing</a><a href="#r">Reviews</a></div>
<button class="btn"><span>Get a quote</span></button></div></nav>

<div class="hero"><div class="w">
<div><span class="tag">Residential &amp; light commercial</span>
<h1>Power that <em>works</em> when you flip the switch.</h1>
<p class="sub">Panel upgrades, EV chargers and rewires by licensed electricians who pull the permit, pass the inspection and clean up after.</p>
<div class="acts"><button class="btn"><span>Get a quote</span></button><button class="btn d"><span>Call (312) 555-0158</span></button></div></div>
<img src="${E[0]}" alt="">
</div></div>

<div class="badges">
<div class="badge"><b>◆</b>Master licensed</div>
<div class="badge"><b>◆</b>Permits pulled</div>
<div class="badge"><b>◆</b>Flat-rate quotes</div>
<div class="badge" style="border-right:0"><b>◆</b>5yr labour warranty</div>
</div>

<section id="s"><div class="w"><span class="eye">Capabilities</span><h2>Everything behind the drywall.</h2>
<p class="lede">One licensed crew for the panel, the circuits and the paperwork.</p>
<div class="cap">
<div class="c"><b>01</b><h3>Panel upgrades</h3><p>100A to 200A service upgrades with the utility coordination handled for you.</p></div>
<div class="c"><b>02</b><h3>EV chargers</h3><p>Level 2 installs, load calculation included, rebate forms filed on your behalf.</p></div>
<div class="c"><b>03</b><h3>Rewires</h3><p>Knob-and-tube and aluminium replacement, room by room or whole house.</p></div>
<div class="c"><b>04</b><h3>Troubleshooting</h3><p>Breakers that trip, outlets that die, lights that flicker — found and fixed.</p></div>
</div></div></section>

<section style="background:#FFFDF6"><div class="w split">
<img src="${E[1]}" alt="">
<div><span class="eye">How we work</span><h2>Quoted flat. Inspected clean.</h2>
<p class="lede">You get the price before we start and the inspection report when we finish. No hourly creep, no surprise materials line.</p>
<ul style="margin-top:22px;display:grid;gap:12px;font-size:15.5px">
<li style="display:flex;gap:12px"><b style="color:#F2B21F">✓</b>Photos of every junction box we touch</li>
<li style="display:flex;gap:12px"><b style="color:#F2B21F">✓</b>Permit and inspection booked by us</li>
<li style="display:flex;gap:12px"><b style="color:#F2B21F">✓</b>Labelled panel schedule left on the door</li>
<li style="display:flex;gap:12px"><b style="color:#F2B21F">✓</b>Five year warranty on all labour</li>
</ul></div></div></section>

<section id="p"><div class="w"><span class="eye">Pricing</span><h2>Straight numbers.</h2>
<div class="tbl">
<div class="tr"><div><h4>Service call</h4><p>Diagnosis and minor repair, waived if you book the work</p></div><b>$89</b></div>
<div class="tr"><div><h4>EV charger install</h4><p>Level 2, up to 30ft run, permit included</p></div><b>from $1,450</b></div>
<div class="tr"><div><h4>200A panel upgrade</h4><p>Utility coordination, permit and inspection included</p></div><b>from $2,900</b></div>
<div class="tr"><div><h4>Whole-home rewire</h4><p>Quoted per room after a free on-site survey</p></div><b>Survey first</b></div>
</div></div></section>

<section id="r" class="rev"><div class="w"><span class="eye">Reviews</span><h2>318 five-star jobs.</h2>
<div class="revs">
<div class="rv"><div class="st">★★★★★</div><q>Panel upgrade done in a day, inspector signed it off same week, and the quote never moved.</q><div class="who"><img src="${F[0]}" alt="">Carlos M. · Logan Square</div></div>
<div class="rv"><div class="st">★★★★★</div><q>They found a bad neutral two other electricians missed. Explained it so I actually understood.</q><div class="who"><img src="${F[1]}" alt="">Jenna P. · Berwyn</div></div>
<div class="rv"><div class="st">★★★★★</div><q>EV charger installed and the rebate paperwork was already filled in when they left.</q><div class="who"><img src="${F[2]}" alt="">Ade O. · Oak Park</div></div>
</div></div></section>

<section class="end"><div class="w"><h2>Book an electrician this week.</h2>
<p style="color:#C9C4B8;margin-top:14px;font-size:17px">Same-day emergency slots held every morning.</p>
<div style="margin-top:26px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><button class="btn"><span>Get a quote</span></button><button class="btn" style="background:#fff"><span>(312) 555-0158</span></button></div></div></section>

<footer><div class="w fb"><span>Bright Line Electric · IL Lic. 199-004821</span><span>Mon–Sat 7am–7pm · 24/7 emergency</span></div></footer>
</body></html>`;

/* ─────────────────────────  F · BRAMBLE & BONE DOG GROOMING
   Layout: sage and coral, groom menu, photo gallery, pass card, booking form. */
const bramble = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bramble &amp; Bone Dog Grooming</title>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Nunito Sans',system-ui,sans-serif;color:#2C2A26;background:#FFF9F2;line-height:1.65}
.w{max-width:1120px;margin:0 auto;padding:0 24px}
nav{position:sticky;top:0;z-index:30;background:rgba(255,249,242,.95);backdrop-filter:blur(10px);border-bottom:1px solid #EFE2D2}
.nb{display:flex;align-items:center;justify-content:space-between;height:78px;gap:20px}
.bd{display:flex;align-items:center;gap:10px;font-family:'Baloo 2',cursive;font-weight:800;font-size:23px;color:#2F5D50}
.bd s{width:36px;height:36px;border-radius:50%;background:#F2825B;color:#fff;display:grid;place-items:center;text-decoration:none;font-size:17px}
.nl{display:flex;gap:24px;font-weight:600;font-size:15px;color:#6B6459}
.nl a:hover{color:#2F5D50}
.btn{display:inline-block;background:#F2825B;color:#fff;font-family:'Baloo 2',cursive;font-weight:700;font-size:16px;padding:12px 24px;border-radius:100px;border:0;cursor:pointer}
.btn:hover{background:#E06D46}
.btn.o{background:transparent;color:#2F5D50;border:2px solid #2F5D50}
.hero{padding:64px 0 72px;position:relative;overflow:hidden}
.blob{position:absolute;width:520px;height:520px;border-radius:50%;background:#DCEBD9;filter:blur(10px);opacity:.75;top:-160px;right:-120px}
.hg{position:relative;z-index:2;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center}
.pill{display:inline-flex;gap:8px;align-items:center;background:#DCEBD9;color:#2F5D50;font-weight:700;font-size:13.5px;padding:8px 16px;border-radius:100px}
h1{font-family:'Baloo 2',cursive;font-size:clamp(40px,5.8vw,64px);line-height:1.05;font-weight:800;color:#2F5D50;margin-top:18px}
h1 em{font-style:normal;color:#F2825B}
.sub{color:#6B6459;font-size:17.5px;margin-top:16px;max-width:42ch}
.acts{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}
.hero img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:36px;border:6px solid #fff;box-shadow:0 26px 50px -26px rgba(47,93,80,.4)}
.trust{display:flex;gap:26px;flex-wrap:wrap;margin-top:28px;font-size:14px;color:#6B6459;font-weight:600}
.trust b{color:#F2825B}
section{padding:76px 0}
.eye{font-weight:700;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#8FAF86}
h2{font-family:'Baloo 2',cursive;font-size:clamp(28px,4vw,44px);font-weight:800;color:#2F5D50;line-height:1.08;margin-top:8px}
.lede{color:#6B6459;font-size:16.5px;margin-top:12px;max-width:54ch}
.menu{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:22px;margin-top:40px}
.mi{background:#fff;border:2px solid #EFE2D2;border-radius:24px;padding:28px}
.mi:hover{border-color:#F2825B}
.mi .ic{width:46px;height:46px;border-radius:50%;background:#FFEDE4;display:grid;place-items:center;font-size:21px}
.mi h3{font-family:'Baloo 2',cursive;font-size:22px;color:#2F5D50;margin-top:14px}
.mi p{color:#6B6459;font-size:15px;margin-top:8px}
.mi .pr{margin-top:16px;font-weight:700;color:#F2825B;font-size:17px}
.gal{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-top:38px}
.gal img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:20px}
.split{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:46px;align-items:center}
.steps{display:grid;gap:16px;margin-top:24px}
.stp{display:flex;gap:16px;align-items:flex-start;background:#fff;border-radius:18px;padding:18px 20px;border:1px solid #EFE2D2}
.stp b{width:30px;height:30px;flex:0 0 30px;border-radius:50%;background:#2F5D50;color:#fff;display:grid;place-items:center;font-size:14px}
.stp h4{font-family:'Baloo 2',cursive;font-size:18px;color:#2F5D50}
.stp p{color:#6B6459;font-size:14.5px}
.pass{background:#2F5D50;color:#fff;border-radius:28px;padding:44px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:32px;align-items:center;margin-top:20px}
.pass h3{font-family:'Baloo 2',cursive;font-size:30px}
.pass ul{margin-top:14px;display:grid;gap:8px;font-size:15px;opacity:.88}
.pass .price{text-align:center;background:rgba(255,255,255,.1);border-radius:20px;padding:26px}
.pass .price b{display:block;font-family:'Baloo 2',cursive;font-size:46px}
.book{background:#FFEDE4}
.form{background:#fff;border-radius:26px;padding:34px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:32px;border:2px solid #F7D8C6}
.form label{display:block;font-weight:700;font-size:13px;color:#6B6459;margin-bottom:7px}
.form input,.form select{width:100%;border:1.5px solid #EFE2D2;border-radius:12px;padding:12px 14px;font-family:inherit;font-size:15px;background:#FFF9F2}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:34px}
.rv{background:#fff;border-radius:22px;padding:24px;border:1px solid #EFE2D2}
.rv .st2{color:#F2B01E;letter-spacing:2px}
.rv q{display:block;quotes:none;font-size:15.5px;margin:10px 0 14px}
.rv .who{display:flex;gap:10px;align-items:center;font-size:13.5px;font-weight:700;color:#6B6459}
.rv .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
footer{background:#2F5D50;color:rgba(255,255,255,.75);padding:40px 0;font-size:14px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
</style></head><body>
<nav><div class="w nb"><div class="bd"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><circle cx="16" cy="20.6" r="6.6" fill="#F2825B"/><circle cx="7.8" cy="12.6" r="3.4" fill="#F2825B"/><circle cx="14.1" cy="8.3" r="3.7" fill="#F2825B"/><circle cx="21" cy="9.3" r="3.4" fill="#F2825B"/><circle cx="26.4" cy="14.8" r="3" fill="#F2825B"/></svg>Bramble &amp; Bone</div>
<div class="nl"><a href="#g">Grooms</a><a href="#h">How it works</a><a href="#b">Book</a></div>
<button class="btn">Book a groom</button></div></nav>

<div class="hero"><div class="blob"></div><div class="w hg">
<div><span class="pill">Small studio · One dog at a time</span>
<h1>A calm groom for <em>nervous</em> dogs.</h1>
<p class="sub">No cages, no waiting-room chaos. Your dog gets the whole room, one groomer, and a text with photos when they are done.</p>
<div class="acts"><button class="btn">Book a groom</button><button class="btn o">See the grooms</button></div>
<div class="trust"><span><b>★ 4.9</b> · 260 reviews</span><span><b>·</b> Fear-free certified</span><span><b>·</b> Open Tue–Sat</span></div>
</div>
<img src="${G[0]}" alt="">
</div></div>

<section id="g"><div class="w"><span class="eye">The menu</span><h2>Four grooms, priced by coat.</h2>
<p class="lede">Every groom includes a bath, blow-dry, nails, ears and a bandana on the way out.</p>
<div class="menu">
<div class="mi"><div class="ic">🛁</div><h3>Bath &amp; tidy</h3><p>Wash, dry, nails and a light face-and-feet trim. Good between full grooms.</p><div class="pr">from $48</div></div>
<div class="mi"><div class="ic">✂️</div><h3>Full groom</h3><p>Clip or scissor to your breed standard, or whatever length actually suits your week.</p><div class="pr">from $75</div></div>
<div class="mi"><div class="ic">🌿</div><h3>De-shed treatment</h3><p>Deep coat work for huskies, labs and anything that redecorates your sofa.</p><div class="pr">from $85</div></div>
<div class="mi"><div class="ic">🐶</div><h3>Puppy first visit</h3><p>Thirty gentle minutes: handling, water, dryer sounds and a lot of treats.</p><div class="pr">$35</div></div>
</div>
<div class="gal"><img src="${G[1]}" alt=""><img src="${G[2]}" alt=""><img src="${G[0]}" alt=""><img src="${G[2]}" alt=""></div>
</div></section>

<section id="h" style="background:#DCEBD9"><div class="w split">
<div><span class="eye">How it works</span><h2>Drop off, get photos, pick up.</h2>
<div class="steps">
<div class="stp"><b>1</b><div><h4>Book a slot</h4><p>Pick a time online. We only run three dogs a day, so the slots are real.</p></div></div>
<div class="stp"><b>2</b><div><h4>Tell us the dog</h4><p>Anxious, arthritic, hates the dryer — we plan the groom around it.</p></div></div>
<div class="stp"><b>3</b><div><h4>Photo update</h4><p>You get a text mid-groom so you know how they are settling.</p></div></div>
<div class="stp"><b>4</b><div><h4>Home smelling great</h4><p>Pick up within the hour, next appointment booked before you leave.</p></div></div>
</div></div>
<img src="${G[1]}" alt="" style="width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:32px;border:6px solid #fff">
</div></section>

<section><div class="w"><span class="eye">Regulars</span><h2>The grooming pass.</h2>
<div class="pass">
<div><h3>Six grooms, one price.</h3>
<ul><li>· Save $60 over single bookings</li><li>· Priority Saturday slots</li><li>· Free nail trims between visits</li><li>· Shareable across two dogs</li></ul></div>
<div class="price"><b>$390</b><span>six full grooms · no expiry</span><div style="margin-top:16px"><button class="btn">Get the pass</button></div></div>
</div></div></section>

<section style="background:#FFF3E6"><div class="w"><span class="eye">Reviews</span><h2>Dogs who forgave us.</h2>
<div class="revs">
<div class="rv"><div class="st2">★★★★★</div><q>Our rescue used to shake for hours after grooming. Here he falls asleep on the table.</q><div class="who"><img src="${F[1]}" alt="">Sofia D. · Ravenswood</div></div>
<div class="rv"><div class="st2">★★★★★</div><q>They text photos halfway through, which is the nicest thing anyone has done for my anxiety.</q><div class="who"><img src="${F[2]}" alt="">Mark T. · Andersonville</div></div>
<div class="rv"><div class="st2">★★★★★</div><q>Best de-shed in the city. My car has never recovered but the sofa has.</q><div class="who"><img src="${F[0]}" alt="">Priya N. · Uptown</div></div>
</div></div></section>

<section id="b" class="book"><div class="w"><span class="eye">Book</span><h2>Find a slot this week.</h2>
<div class="form">
<div><label>Your name</label><input placeholder="Your name"></div>
<div><label>Dog's name &amp; breed</label><input placeholder="Nala · cockapoo"></div>
<div><label>Groom</label><select><option>Bath &amp; tidy</option><option>Full groom</option><option>De-shed treatment</option><option>Puppy first visit</option></select></div>
<div style="display:flex;align-items:flex-end"><button class="btn" style="width:100%">Request a slot</button></div>
</div></div></section>

<footer><div class="w fb"><span>Bramble &amp; Bone Dog Grooming</span><span>Tue–Sat · 8am–5pm</span><span>(312) 555-0166</span></div></footer>
</body></html>`;

/* ─────────────────────────  G · COPPER & COAT PAINTING
   Layout: warm clay palette, colour-swatch strip, before/after, room pricing. */
const coppercoat = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Copper &amp; Coat Painting</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Karla:wght@400;500;700&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Karla',system-ui,sans-serif;color:#2A211B;background:#FBF6F0;line-height:1.65}
.w{max-width:1120px;margin:0 auto;padding:0 24px}
nav{position:sticky;top:0;z-index:30;background:rgba(251,246,240,.94);backdrop-filter:blur(10px);border-bottom:1px solid #E8DACB}
.nb{display:flex;align-items:center;justify-content:space-between;height:80px;gap:20px}
.bd{display:flex;align-items:center;gap:11px;font-family:'Fraunces',serif;font-weight:700;font-size:23px;color:#8C4A2F}
.bd s{width:30px;height:30px;border-radius:8px;background:#C2603B;text-decoration:none}
.nl{display:flex;gap:26px;font-size:15px;color:#6E5B4E}
.nl a:hover{color:#8C4A2F}
.btn{display:inline-block;background:#8C4A2F;color:#FBF6F0;font-weight:700;font-size:15px;padding:13px 24px;border-radius:6px;border:0;cursor:pointer}
.btn:hover{background:#733A22}
.btn.o{background:transparent;color:#8C4A2F;border:1.5px solid #C9AE97}
.hero{padding:72px 0 68px}
.hg{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center}
.tag{display:inline-block;font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#B07C4F}
h1{font-family:'Fraunces',serif;font-size:clamp(40px,5.8vw,66px);line-height:1.03;font-weight:700;margin-top:14px}
h1 em{font-style:italic;color:#C2603B}
.sub{color:#6E5B4E;font-size:17.5px;margin-top:16px;max-width:44ch}
.acts{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.hero img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:14px}
.sw{display:flex;gap:0;margin-top:34px;border-radius:8px;overflow:hidden;max-width:340px}
.sw span{flex:1;height:36px}
.strip{border-top:1px solid #E8DACB;border-bottom:1px solid #E8DACB;background:#F5EBE0}
.strip .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:18px;padding:26px 24px;font-size:14.5px;color:#6E5B4E}
.strip b{display:block;font-family:'Fraunces',serif;font-size:24px;color:#2A211B}
section{padding:78px 0}
.eye{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#B07C4F}
h2{font-family:'Fraunces',serif;font-size:clamp(28px,4.2vw,46px);font-weight:700;line-height:1.06;margin-top:8px}
.lede{color:#6E5B4E;font-size:16.5px;margin-top:12px;max-width:54ch}
.svc{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:38px}
.s{background:#fff;border:1px solid #EADCCD;border-radius:14px;padding:26px}
.s:hover{box-shadow:0 18px 40px -28px rgba(140,74,47,.55)}
.s h3{font-family:'Fraunces',serif;font-size:22px}
.s p{color:#6E5B4E;font-size:15px;margin-top:8px}
.s .pr{margin-top:16px;font-weight:700;color:#8C4A2F}
.ba{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:38px}
.ba figure{border-radius:14px;overflow:hidden;position:relative}
.ba img{width:100%;aspect-ratio:4/3;object-fit:cover}
.ba figcaption{position:absolute;left:14px;top:14px;background:rgba(42,33,27,.82);color:#FBF6F0;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:6px 12px;border-radius:100px}
.split{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:46px;align-items:center}
.split img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:14px}
.steps{display:grid;gap:14px;margin-top:22px}
.stp{display:flex;gap:14px;align-items:flex-start}
.stp b{width:28px;height:28px;flex:0 0 28px;border-radius:50%;background:#C2603B;color:#fff;display:grid;place-items:center;font-size:13px}
.stp h4{font-weight:700;font-size:16.5px}
.stp p{color:#6E5B4E;font-size:15px}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:34px}
.rv{background:#fff;border:1px solid #EADCCD;border-radius:14px;padding:24px}
.rv .st{color:#E0A33C;letter-spacing:2px}
.rv q{display:block;quotes:none;font-size:15.5px;margin:10px 0 14px}
.rv .who{display:flex;gap:10px;align-items:center;font-size:13.5px;font-weight:700;color:#6E5B4E}
.rv .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
.end{background:#2A211B;color:#FBF6F0;text-align:center}
.end h2{color:#FBF6F0}
footer{background:#221B16;color:#A2907F;padding:38px 0;font-size:13.5px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
</style></head><body>
<nav><div class="w nb"><div class="bd"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><circle cx="16" cy="16" r="15" fill="#C2603B"/><path d="M7 24.5c2.6-9.4 8.2-15 17.2-16.6" stroke="#FBF6F0" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="5.2" y="21" width="7.6" height="5.2" rx="1.6" fill="#FBF6F0"/></svg>Copper &amp; Coat</div>
<div class="nl"><a href="#s">Services</a><a href="#work">Recent work</a><a href="#p">Process</a></div>
<button class="btn">Free colour consult</button></div></nav>

<div class="hero"><div class="w hg">
<div><span class="tag">Interior &amp; exterior painting</span>
<h1>Paint that still looks new in <em>year five</em>.</h1>
<p class="sub">Two coats, proper prep, and crews who mask, sand and caulk before a brush ever touches your wall.</p>
<div class="acts"><button class="btn">Get a free quote</button><button class="btn o">See recent work</button></div>
<div class="sw"><span style="background:#8C4A2F"></span><span style="background:#C2603B"></span><span style="background:#E0A33C"></span><span style="background:#7C8F6B"></span><span style="background:#3F5468"></span></div>
</div>
<img src="${P[2]}" alt="">
</div></div>

<div class="strip"><div class="w">
<div><b>14 yrs</b>painting Chicagoland homes</div>
<div><b>2 coats</b>always, never one</div>
<div><b>5 yr</b>written workmanship warranty</div>
<div><b>4.9★</b>across 180 reviews</div>
</div></div>

<section id="s"><div class="w"><span class="eye">Services</span><h2>What we paint.</h2>
<p class="lede">Prep is most of the job. It is also most of the reason cheap paint jobs fail.</p>
<div class="svc">
<div class="s"><h3>Interior repaint</h3><p>Walls, trim and ceilings. Furniture wrapped, floors covered, rooms put back each night.</p><div class="pr">from $420 / room</div></div>
<div class="s"><h3>Exterior repaint</h3><p>Pressure wash, scrape, prime and two finish coats rated for Midwest winters.</p><div class="pr">from $3,900</div></div>
<div class="s"><h3>Cabinet refinishing</h3><p>Sprayed in a dust-controlled setup for a factory-smooth finish, no brush marks.</p><div class="pr">from $2,400</div></div>
<div class="s"><h3>Drywall repair</h3><p>Cracks, nail pops and water stains patched and blended before we paint.</p><div class="pr">from $180</div></div>
</div></div></section>

<section id="work" style="background:#F5EBE0"><div class="w"><span class="eye">Recent work</span><h2>Rooms we finished this month.</h2>
<div class="ba">
<figure><img src="${P[0]}" alt=""><figcaption>Interior · Oak Park</figcaption></figure>
<figure><img src="${P[1]}" alt=""><figcaption>Exterior · Berwyn</figcaption></figure>
<figure><img src="${P[2]}" alt=""><figcaption>Living room · Logan Square</figcaption></figure>
</div></div></section>

<section id="p"><div class="w split">
<img src="${P[1]}" alt="">
<div><span class="eye">Process</span><h2>Four visits, no surprises.</h2>
<div class="steps">
<div class="stp"><b>1</b><div><h4>Walkthrough &amp; quote</h4><p>Measured on site, priced per room, emailed the same day.</p></div></div>
<div class="stp"><b>2</b><div><h4>Colour consult</h4><p>Free hour with our colour lead, samples painted on your actual wall.</p></div></div>
<div class="stp"><b>3</b><div><h4>Prep &amp; paint</h4><p>Mask, sand, caulk, prime, two coats. Photos sent at the end of each day.</p></div></div>
<div class="stp"><b>4</b><div><h4>Punch list</h4><p>We walk it with you and fix every mark before the final invoice.</p></div></div>
</div></div></section>

<section style="background:#F5EBE0"><div class="w"><span class="eye">Reviews</span><h2>What homeowners say.</h2>
<div class="revs">
<div class="rv"><div class="st">★★★★★</div><q>They spent a day and a half on prep alone. You can see it in the trim lines.</q><div class="who"><img src="${F[0]}" alt="">Danielle R. · Oak Park</div></div>
<div class="rv"><div class="st">★★★★★</div><q>Cabinets look sprayed in a factory. No brush marks anywhere.</q><div class="who"><img src="${F[1]}" alt="">Tomas L. · Berwyn</div></div>
<div class="rv"><div class="st">★★★★★</div><q>Quote came in the same evening and the final invoice matched it exactly.</q><div class="who"><img src="${F[2]}" alt="">Grace H. · Elmhurst</div></div>
</div></div></section>

<section class="end"><div class="w"><h2>Book your free colour consult.</h2>
<p style="color:#C9B7A6;margin-top:14px;font-size:17px">Quotes returned within 24 hours, every time.</p>
<div style="margin-top:26px"><button class="btn" style="background:#C2603B">Get a free quote</button></div></div></section>

<footer><div class="w fb"><span>Copper &amp; Coat Painting · Fully insured</span><span>Mon–Sat 7am–6pm</span><span>(312) 555-0184</span></div></footer>
</body></html>`;

/* ─────────────────────────  H · IRONLINE CONCRETE & MASONRY
   Layout: heavy industrial slab type, spec table, project grid, quote band.  */
const ironline = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ironline Concrete &amp; Masonry</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Archivo',system-ui,sans-serif;color:#1A1C1E;background:#F2F1EE;line-height:1.6}
.w{max-width:1160px;margin:0 auto;padding:0 24px}
nav{position:sticky;top:0;z-index:30;background:#1A1C1E;color:#fff}
.nb{display:flex;align-items:center;justify-content:space-between;height:74px;gap:20px}
.bd{display:flex;align-items:center;gap:10px;font-family:'Archivo Black',sans-serif;font-size:20px;letter-spacing:-.02em;text-transform:uppercase}
.bd i{color:#E7A13A;font-style:normal}
.nl{display:flex;gap:24px;font-size:14.5px;color:#A9AEB4}
.nl a:hover{color:#fff}
.btn{display:inline-block;background:#E7A13A;color:#1A1C1E;font-weight:700;font-size:14.5px;padding:13px 22px;border:0;border-radius:3px;cursor:pointer}
.btn:hover{background:#D08E2C}
.btn.g{background:#fff}
.btn.o{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
.hero{position:relative;background:#1A1C1E;color:#fff;overflow:hidden}
.hero img.bgi{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.34}
.hero .w{position:relative;z-index:2;padding:112px 24px 96px}
.tag{display:inline-block;border:1px solid rgba(255,255,255,.28);font-size:12px;letter-spacing:.18em;text-transform:uppercase;padding:7px 14px;border-radius:3px}
h1{font-family:'Archivo Black',sans-serif;font-size:clamp(44px,7.4vw,88px);line-height:.94;text-transform:uppercase;letter-spacing:-.02em;margin-top:20px;max-width:15ch}
h1 i{color:#E7A13A;font-style:normal}
.sub{color:#C3C7CB;font-size:18px;margin-top:18px;max-width:48ch}
.acts{display:flex;gap:12px;margin-top:30px;flex-wrap:wrap}
.spec{background:#1A1C1E;border-top:1px solid #33373B}
.spec .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:1px;padding:0 24px}
.sp{padding:26px 0;color:#A9AEB4;font-size:13px;letter-spacing:.12em;text-transform:uppercase}
.sp b{display:block;font-family:'Archivo Black',sans-serif;font-size:32px;color:#fff;letter-spacing:-.02em;margin-bottom:4px}
section{padding:82px 0}
.eye{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#8A6A2F}
h2{font-family:'Archivo Black',sans-serif;font-size:clamp(30px,4.6vw,50px);text-transform:uppercase;line-height:1;letter-spacing:-.02em;margin-top:10px}
.lede{color:#5A6067;font-size:16.5px;margin-top:12px;max-width:56ch}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2px;margin-top:40px;background:#D8D6D1}
.g{background:#F2F1EE;padding:30px 26px}
.g b{font-family:'Archivo Black',sans-serif;font-size:13px;color:#E7A13A;letter-spacing:.1em}
.g h3{font-size:21px;font-weight:700;margin-top:10px}
.g p{color:#5A6067;font-size:15px;margin-top:8px}
.pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:38px}
.pg{position:relative;overflow:hidden}
.pg img{width:100%;aspect-ratio:4/3;object-fit:cover}
.pg span{position:absolute;left:0;bottom:0;background:#1A1C1E;color:#fff;font-size:12px;letter-spacing:.12em;text-transform:uppercase;padding:9px 16px}
.tbl{margin-top:36px;background:#fff;border:1px solid #DDDAD4}
.tr{display:grid;grid-template-columns:1fr auto;gap:20px;padding:20px 24px;border-bottom:1px solid #EDEBE7;align-items:baseline}
.tr:last-child{border-bottom:0}
.tr h4{font-weight:700;font-size:17.5px}
.tr p{color:#5A6067;font-size:14.5px}
.tr b{font-family:'Archivo Black',sans-serif;font-size:20px;white-space:nowrap}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-top:36px}
.rv{background:#fff;border:1px solid #DDDAD4;padding:24px}
.rv .st{color:#E7A13A;letter-spacing:2px}
.rv q{display:block;quotes:none;font-size:15.5px;margin:10px 0 14px}
.rv .who{display:flex;gap:10px;align-items:center;font-size:13.5px;font-weight:700;color:#5A6067}
.rv .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
.band{background:#E7A13A;color:#1A1C1E;text-align:center}
footer{background:#141618;color:#7E858C;padding:40px 0;font-size:13.5px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
</style></head><body>
<nav><div class="w nb"><div class="bd"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M16 3 30 9.5 16 16 2 9.5 16 3Z" fill="#E7A13A"/><path d="M2 12.5 16 19l14-6.5v3.8L16 22.8 2 16.3v-3.8Z" fill="#1A1C1E"/><path d="M2 19.4 16 25.9l14-6.5v3.8L16 29.7 2 23.2v-3.8Z" fill="#E7A13A"/></svg>Iron<i>line</i></div>
<div class="nl"><a href="#s">Scope</a><a href="#pr">Projects</a><a href="#c">Pricing</a></div>
<button class="btn">Request a bid</button></div></nav>

<div class="hero"><img class="bgi" src="${C[1]}" alt=""><div class="w">
<span class="tag">Flatwork · Masonry · Foundations</span>
<h1>Concrete poured <i>level</i>, laid to last.</h1>
<p class="sub">Driveways, patios and retaining walls for Chicago homes and small commercial sites. Rebar where it belongs and a finish that drains right.</p>
<div class="acts"><button class="btn">Request a bid</button><button class="btn o">See projects</button></div>
</div></div>

<div class="spec"><div class="w">
<div class="sp"><b>4,000</b>psi standard mix</div>
<div class="sp"><b>18 yrs</b>pouring in Cook County</div>
<div class="sp"><b>10 yr</b>structural warranty</div>
<div class="sp"><b>2 wk</b>typical lead time</div>
</div></div>

<section id="s"><div class="w"><span class="eye">Scope</span><h2>What we pour.</h2>
<p class="lede">Every pour is sub-base compacted, formed square and cured properly. That is why they do not crack in year two.</p>
<div class="grid">
<div class="g"><b>01</b><h3>Driveways</h3><p>Tear-out, grade, rebar, 4,000psi pour with control joints cut on schedule.</p></div>
<div class="g"><b>02</b><h3>Patios &amp; stamped</h3><p>Broom, exposed aggregate or stamped patterns sealed for winter.</p></div>
<div class="g"><b>03</b><h3>Retaining walls</h3><p>Block or natural stone with drainage tile behind it, engineered above 4ft.</p></div>
<div class="g"><b>04</b><h3>Foundation repair</h3><p>Underpinning, crack injection and garage slab replacement.</p></div>
</div></div></section>

<section id="pr" style="background:#E9E7E2"><div class="w"><span class="eye">Projects</span><h2>Recent pours.</h2>
<div class="pgrid">
<div class="pg"><img src="${C[0]}" alt=""><span>Driveway · Portage Park</span></div>
<div class="pg"><img src="${C[1]}" alt=""><span>Stamped patio · Oak Lawn</span></div>
<div class="pg"><img src="${C[2]}" alt=""><span>Stone wall · Evanston</span></div>
</div></div></section>

<section id="c"><div class="w"><span class="eye">Pricing</span><h2>Bid ranges.</h2>
<p class="lede">Firm numbers after a site visit. These are what most jobs land at.</p>
<div class="tbl">
<div class="tr"><div><h4>Driveway replacement</h4><p>Tear-out, haul-off, 6in reinforced slab</p></div><b>$9–14 / sq ft</b></div>
<div class="tr"><div><h4>Stamped patio</h4><p>Pattern, colour and sealer included</p></div><b>$16–22 / sq ft</b></div>
<div class="tr"><div><h4>Retaining wall</h4><p>Block wall with drainage, per face foot</p></div><b>$38–60</b></div>
<div class="tr"><div><h4>Crack injection</h4><p>Poured foundation, per crack</p></div><b>from $550</b></div>
</div></div></section>

<section style="background:#E9E7E2"><div class="w"><span class="eye">Reviews</span><h2>Homeowners &amp; GCs.</h2>
<div class="revs">
<div class="rv"><div class="st">★★★★★</div><q>Third winter on the driveway and there is not a single crack or heave.</q><div class="who"><img src="${F[1]}" alt="">Rick D. · Portage Park</div></div>
<div class="rv"><div class="st">★★★★★</div><q>They compacted the base properly instead of pouring on dirt like the last guys.</q><div class="who"><img src="${F[2]}" alt="">Alina S. · Oak Lawn</div></div>
<div class="rv"><div class="st">★★★★★</div><q>We sub all our flatwork to Ironline now. Bids are honest and the crew is clean.</q><div class="who"><img src="${F[0]}" alt="">Marcus B. · GC, Evanston</div></div>
</div></div></section>

<section class="band"><div class="w"><h2>Book a site visit.</h2>
<p style="margin-top:12px;font-size:17px">Bids returned in 48 hours with a scope sheet, not a napkin number.</p>
<div style="margin-top:24px"><button class="btn" style="background:#1A1C1E;color:#fff">Request a bid</button></div></div></section>

<footer><div class="w fb"><span>Ironline Concrete &amp; Masonry · Licensed &amp; bonded</span><span>Mon–Fri 6am–4pm</span><span>(312) 555-0192</span></div></footer>
</body></html>`;

/* ─────────────────────────  I · OVERHEAD GARAGE DOOR CO.
   Layout: blue utility brand, emergency band, symptom finder, door catalogue. */
const overhead = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Overhead Garage Door Co.</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Manrope',system-ui,sans-serif;color:#101B2B;background:#fff;line-height:1.62}
.w{max-width:1140px;margin:0 auto;padding:0 24px}
.top{background:#0E2E5C;color:#CFE0F7;font-size:13.5px}
.top .w{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:9px 24px}
.top b{color:#fff}
nav{position:sticky;top:0;z-index:30;background:#fff;border-bottom:1px solid #E3E9F2;box-shadow:0 6px 24px -20px rgba(16,27,43,.6)}
.nb{display:flex;align-items:center;justify-content:space-between;height:78px;gap:20px}
.bd{display:flex;align-items:center;gap:10px;font-weight:800;font-size:20px;letter-spacing:-.02em;color:#0E2E5C}
.bd s{width:32px;height:32px;border-radius:6px;background:#1B6CF2;text-decoration:none}
.nl{display:flex;gap:24px;font-size:15px;color:#54627A}
.nl a:hover{color:#0E2E5C}
.btn{display:inline-block;background:#1B6CF2;color:#fff;font-weight:700;font-size:15px;padding:13px 24px;border-radius:8px;border:0;cursor:pointer}
.btn:hover{background:#1558CB}
.btn.o{background:#EDF3FE;color:#0E2E5C}
.hero{background:linear-gradient(180deg,#F4F8FF,#fff);padding:66px 0 64px}
.hg{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:46px;align-items:center}
.pill{display:inline-flex;gap:8px;align-items:center;background:#E4EFFF;color:#1B6CF2;font-weight:700;font-size:13px;padding:7px 14px;border-radius:100px}
h1{font-size:clamp(38px,5.4vw,62px);line-height:1.04;font-weight:800;letter-spacing:-.03em;margin-top:16px}
.sub{color:#54627A;font-size:17.5px;margin-top:15px;max-width:44ch}
.acts{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}
.hero img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:16px;box-shadow:0 30px 60px -34px rgba(14,46,92,.5)}
.trust{display:flex;gap:24px;flex-wrap:wrap;margin-top:26px;font-size:14px;color:#54627A;font-weight:600}
.trust b{color:#1B6CF2}
section{padding:76px 0}
.eye{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#7B93B5}
h2{font-size:clamp(28px,4vw,44px);font-weight:800;letter-spacing:-.03em;line-height:1.08;margin-top:8px}
.lede{color:#54627A;font-size:16.5px;margin-top:12px;max-width:54ch}
.sym{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;margin-top:36px}
.sy{border:1px solid #E3E9F2;border-radius:14px;padding:22px;background:#fff}
.sy:hover{border-color:#1B6CF2;background:#F7FAFF}
.sy h3{font-size:17.5px;font-weight:700}
.sy p{color:#54627A;font-size:14.5px;margin-top:6px}
.sy .fix{margin-top:14px;font-size:13.5px;font-weight:700;color:#1B6CF2}
.cat{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:38px}
.cd{border:1px solid #E3E9F2;border-radius:16px;overflow:hidden;background:#fff}
.cd img{width:100%;aspect-ratio:4/3;object-fit:cover}
.cd div{padding:20px}
.cd h3{font-size:19px;font-weight:800}
.cd p{color:#54627A;font-size:14.5px;margin-top:6px}
.cd b{display:block;margin-top:14px;color:#0E2E5C;font-size:17px}
.band{background:#0E2E5C;color:#fff}
.band .w{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:30px;align-items:center;padding:52px 24px}
.band h3{font-size:27px;font-weight:800;letter-spacing:-.02em}
.band p{color:#B9CEEA;margin-top:8px}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px;margin-top:34px}
.rv{border:1px solid #E3E9F2;border-radius:14px;padding:22px}
.rv .st{color:#F0A32B;letter-spacing:2px}
.rv q{display:block;quotes:none;font-size:15.5px;margin:10px 0 14px}
.rv .who{display:flex;gap:10px;align-items:center;font-size:13.5px;font-weight:700;color:#54627A}
.rv .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
footer{background:#0B2246;color:#8FA9CC;padding:38px 0;font-size:13.5px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
</style></head><body>
<div class="top"><div class="w"><span><b>Same-day repair</b> · 7 days a week</span><span>(312) 555-0173</span></div></div>
<nav><div class="w nb"><div class="bd"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M3 29.5V15.5a13 13 0 0 1 26 0v14H3Z" fill="#1B6CF2"/><rect x="8" y="13" width="16" height="3" rx="1.2" fill="#fff"/><rect x="8" y="18" width="16" height="3" rx="1.2" fill="#fff" opacity=".85"/><rect x="8" y="23" width="16" height="3" rx="1.2" fill="#fff" opacity=".7"/></svg>Overhead Garage Door Co.</div>
<div class="nl"><a href="#r">Repairs</a><a href="#d">New doors</a><a href="#rev">Reviews</a></div>
<button class="btn">Book a tech</button></div></nav>

<div class="hero"><div class="w hg">
<div><span class="pill">Springs · Openers · New doors</span>
<h1>Door stuck? A tech can be there today.</h1>
<p class="sub">Broken springs, dead openers and off-track doors fixed in one visit, with the part on the truck.</p>
<div class="acts"><button class="btn">Book a tech</button><button class="btn o">Call (312) 555-0173</button></div>
<div class="trust"><span><b>★ 4.9</b> · 410 reviews</span><span><b>·</b> 2hr arrival window</span><span><b>·</b> Parts stocked</span></div>
</div>
<img src="${D[0]}" alt="">
</div></div>

<section id="r"><div class="w"><span class="eye">Repairs</span><h2>Tell us what it's doing.</h2>
<p class="lede">Most repairs are one of these four, and most are done inside an hour.</p>
<div class="sym">
<div class="sy"><h3>Loud bang, won't lift</h3><p>Torsion spring snapped. The door is now too heavy for the opener.</p><div class="fix">Spring pair from $265</div></div>
<div class="sy"><h3>Opener hums, door stays</h3><p>Stripped gear or a failed logic board in the motor head.</p><div class="fix">Repair from $180</div></div>
<div class="sy"><h3>Door off its track</h3><p>Bent track or broken roller, usually after a bump from a bumper.</p><div class="fix">Realign from $210</div></div>
<div class="sy"><h3>Reverses on its own</h3><p>Misaligned safety sensors or a limit setting drifting out of range.</p><div class="fix">Tune-up $119</div></div>
</div></div></section>

<section id="d" style="background:#F5F8FD"><div class="w"><span class="eye">New doors</span><h2>Doors we install.</h2>
<div class="cat">
<div class="cd"><img src="${D[2]}" alt=""><div><h3>Steel insulated</h3><p>R-16 double-layer steel, the workhorse for Midwest garages.</p><b>from $1,690 installed</b></div></div>
<div class="cd"><img src="${D[0]}" alt=""><div><h3>Carriage house</h3><p>Overlay carriage look on a modern sectional door with windows.</p><b>from $2,450 installed</b></div></div>
<div class="cd"><img src="${D[1]}" alt=""><div><h3>Smart opener</h3><p>Belt-drive, battery backup and phone control that actually works.</p><b>from $640 installed</b></div></div>
</div></div></section>

<div class="band"><div class="w">
<div><h3>Spring broke on a Sunday?</h3><p>We run a weekend crew. Same-day slots, no holiday surcharge.</p></div>
<div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end"><button class="btn">Book a tech</button><button class="btn" style="background:#fff;color:#0E2E5C">(312) 555-0173</button></div>
</div></div>

<section id="rev"><div class="w"><span class="eye">Reviews</span><h2>410 five-star calls.</h2>
<div class="revs">
<div class="rv"><div class="st">★★★★★</div><q>Called at 9, fixed by 12, and he showed me the old spring and why it went.</q><div class="who"><img src="${F[2]}" alt="">Hannah W. · Norwood Park</div></div>
<div class="rv"><div class="st">★★★★★</div><q>Quoted a new opener, then said mine only needed a gear kit. Saved me $400.</q><div class="who"><img src="${F[0]}" alt="">Derek A. · Skokie</div></div>
<div class="rv"><div class="st">★★★★★</div><q>New carriage door looks better than the render. Install was three hours.</q><div class="who"><img src="${F[1]}" alt="">Nina C. · Park Ridge</div></div>
</div></div></section>

<footer><div class="w fb"><span>Overhead Garage Door Co. · IL Lic. 104-9982</span><span>7 days · 7am–8pm</span><span>(312) 555-0173</span></div></footer>
</body></html>`;

/* ─────────────────────────  J · CLEARVIEW WINDOW & SIDING
   Layout: calm green/white, savings figures, product rows, financing card.   */
const clearview = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Clearview Window &amp; Siding</title>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
<style>${RESET}
body{font-family:'Inter Tight',system-ui,sans-serif;color:#14231D;background:#fff;line-height:1.62}
.w{max-width:1140px;margin:0 auto;padding:0 24px}
nav{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border-bottom:1px solid #E4EBE7}
.nb{display:flex;align-items:center;justify-content:space-between;height:80px;gap:20px}
.bd{display:flex;align-items:center;gap:10px;font-family:'Sora',sans-serif;font-weight:700;font-size:20px;letter-spacing:-.02em;color:#1D5C46}
.bd s{width:30px;height:30px;border-radius:50%;background:#2E8B65;text-decoration:none}
.nl{display:flex;gap:24px;font-size:15px;color:#5B6E66}
.nl a:hover{color:#1D5C46}
.btn{display:inline-block;background:#1D5C46;color:#fff;font-weight:600;font-size:15px;padding:13px 24px;border-radius:6px;border:0;cursor:pointer}
.btn:hover{background:#16472F}
.btn.o{background:#EAF3EE;color:#1D5C46}
.hero{padding:64px 0 60px;background:linear-gradient(180deg,#F3F8F5,#fff)}
.hg{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:46px;align-items:center}
.pill{display:inline-block;background:#DFEFE6;color:#1D5C46;font-weight:600;font-size:13px;padding:7px 14px;border-radius:100px}
h1{font-family:'Sora',sans-serif;font-size:clamp(38px,5.2vw,60px);line-height:1.06;font-weight:700;letter-spacing:-.03em;margin-top:16px}
.sub{color:#5B6E66;font-size:17.5px;margin-top:15px;max-width:45ch}
.acts{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}
.hero img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:14px}
.figs{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:20px;margin-top:32px;border-top:1px solid #DCE7E1;padding-top:22px}
.figs b{display:block;font-family:'Sora',sans-serif;font-size:26px;color:#1D5C46}
.figs span{font-size:13.5px;color:#5B6E66}
section{padding:76px 0}
.eye{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#7FA394}
h2{font-family:'Sora',sans-serif;font-size:clamp(28px,4vw,44px);font-weight:700;letter-spacing:-.03em;line-height:1.08;margin-top:8px}
.lede{color:#5B6E66;font-size:16.5px;margin-top:12px;max-width:54ch}
.rows{margin-top:38px;display:grid;gap:18px}
.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:28px;align-items:center;border:1px solid #E4EBE7;border-radius:16px;overflow:hidden;background:#fff}
.row img{width:100%;height:100%;min-height:230px;object-fit:cover}
.row .tx{padding:30px}
.row h3{font-family:'Sora',sans-serif;font-size:23px;font-weight:700}
.row p{color:#5B6E66;font-size:15.5px;margin-top:10px}
.row ul{margin-top:14px;display:grid;gap:8px;font-size:14.5px;color:#3C4F47}
.row li{display:flex;gap:10px}
.row li b{color:#2E8B65}
.row .pr{margin-top:16px;font-weight:600;color:#1D5C46}
.fin{background:#1D5C46;color:#fff;border-radius:18px;padding:40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:30px;align-items:center;margin-top:20px}
.fin h3{font-family:'Sora',sans-serif;font-size:28px;font-weight:700}
.fin p{color:#BFDACD;margin-top:10px;font-size:15.5px}
.fin .card{background:rgba(255,255,255,.1);border-radius:14px;padding:26px;text-align:center}
.fin .card b{display:block;font-family:'Sora',sans-serif;font-size:40px}
.revs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px;margin-top:34px}
.rv{border:1px solid #E4EBE7;border-radius:14px;padding:22px}
.rv .st{color:#E0A93F;letter-spacing:2px}
.rv q{display:block;quotes:none;font-size:15.5px;margin:10px 0 14px}
.rv .who{display:flex;gap:10px;align-items:center;font-size:13.5px;font-weight:600;color:#5B6E66}
.rv .who img{width:34px;height:34px;border-radius:50%;object-fit:cover}
.end{background:#F3F8F5;text-align:center}
footer{background:#12271F;color:#8FAB9E;padding:38px 0;font-size:13.5px}
.fb{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
</style></head><body>
<nav><div class="w nb"><div class="bd"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="flex:0 0 auto"><path d="M16 1.5 30.5 16 16 30.5 1.5 16 16 1.5Z" fill="#2E8B65"/><path d="M16 6.8 25.2 16 16 25.2 6.8 16 16 6.8Z" stroke="#fff" stroke-width="1.9" fill="none"/><path d="M16 6.8v18.4M6.8 16h18.4" stroke="#fff" stroke-width="1.9"/></svg>Clearview Window &amp; Siding</div>
<div class="nl"><a href="#p">Products</a><a href="#f">Financing</a><a href="#r">Reviews</a></div>
<button class="btn">Free in-home quote</button></div></nav>

<div class="hero"><div class="w hg">
<div><span class="pill">Windows · Siding · Trim</span>
<h1>A warmer house by the first cold snap.</h1>
<p class="sub">Replacement windows and fiber cement siding installed by our own crews, never subcontracted out.</p>
<div class="acts"><button class="btn">Free in-home quote</button><button class="btn o">See products</button></div>
<div class="figs">
<div><b>28%</b><span>average heating bill drop</span></div>
<div><b>1 day</b><span>typical window install</span></div>
<div><b>Lifetime</b><span>transferable warranty</span></div>
</div>
</div>
<img src="${W[2]}" alt="">
</div></div>

<section id="p"><div class="w"><span class="eye">Products</span><h2>Two things, done properly.</h2>
<p class="lede">We do not sell roofs, gutters or bathrooms. Windows and siding is the whole company.</p>
<div class="rows">
<div class="row"><img src="${W[1]}" alt="">
<div class="tx"><h3>Replacement windows</h3><p>Triple-pane vinyl and fiberglass units, foam-sealed and capped in one visit per room.</p>
<ul><li><b>✓</b>Argon filled, low-E coated glass</li><li><b>✓</b>Old units hauled away same day</li><li><b>✓</b>Interior trim restored, not left raw</li></ul>
<div class="pr">from $685 per window installed</div></div></div>
<div class="row"><img src="${W[0]}" alt="">
<div class="tx"><h3>Fiber cement siding</h3><p>James Hardie board with house wrap, flashing and factory colour that holds for decades.</p>
<ul><li><b>✓</b>Full tear-off and inspection of sheathing</li><li><b>✓</b>Rain screen detailing on exposed walls</li><li><b>✓</b>15 year finish, lifetime board warranty</li></ul>
<div class="pr">from $14 per sq ft installed</div></div></div>
</div></div></section>

<section id="f" style="background:#F3F8F5"><div class="w"><span class="eye">Financing</span><h2>Spread it over the winter.</h2>
<div class="fin">
<div><h3>0% for 18 months.</h3><p>Approved in about ten minutes, no prepayment penalty, and the rebate paperwork for energy credits is filed by us.</p></div>
<div class="card"><b>$149</b><span>per month · typical 8-window project</span><div style="margin-top:16px"><button class="btn" style="background:#fff;color:#1D5C46">Check my rate</button></div></div>
</div></div></section>

<section id="r"><div class="w"><span class="eye">Reviews</span><h2>Neighbours who stopped drafts.</h2>
<div class="revs">
<div class="rv"><div class="st">★★★★★</div><q>Eight windows in a single day and the trim looks better than what was there.</q><div class="who"><img src="${F[0]}" alt="">Robert K. · Downers Grove</div></div>
<div class="rv"><div class="st">★★★★★</div><q>Gas bill dropped almost a third the first winter. The upstairs is finally usable.</q><div class="who"><img src="${F[1]}" alt="">Meera J. · Naperville</div></div>
<div class="rv"><div class="st">★★★★★</div><q>They found rot behind the old siding and showed me photos before touching it.</q><div class="who"><img src="${F[2]}" alt="">Owen T. · Wheaton</div></div>
</div></div></section>

<section class="end"><div class="w"><h2>Get a real number, in your kitchen.</h2>
<p class="lede" style="margin:14px auto 0">One visit, measured, priced and left with you in writing. No four-hour sales pitch.</p>
<div style="margin-top:24px"><button class="btn">Book a free quote</button></div></div></section>

<footer><div class="w fb"><span>Clearview Window &amp; Siding · IL Lic. 104-0177</span><span>Mon–Sat 8am–6pm</span><span>(630) 555-0148</span></div></footer>
</body></html>`;

export const DEMOS = { summit, ironpeak, clearair, verdant, brightline, bramble, coppercoat, ironline, overhead, clearview };

export const POSTS = {
  plan: { cat: "Strategy", date: "Jul 28, 2026", read: 8, img: B+"hf_20260729_234439_dede903d-5f35-4f02-87dc-e390d5fd76df.png",
    title: "The local business marketing plan: 5 steps to a fuller calendar",
    html: `<p>Most owners do not have a lead problem. They have a focus problem. They run five channels at once and end up mediocre at all of them.</p>
<h3>1. Pick one customer, not "everyone local"</h3><p>The more specific you get about who you serve and what they need, the sharper every ad, page and follow-up becomes.</p>
<h3>2. Pick one channel and win it</h3><p>For most local businesses that starts with getting found on Google, because those people are searching with intent and ready to book.</p>
<h3>3. Make it stupid easy to contact you</h3><p>Every extra tap between a customer and you is a customer lost. Put click-to-call and click-to-text where a thumb lands.</p>
<h3>4. Follow up like the job depends on it</h3><p>Because it does. Most work is lost to silence, not to a better competitor. Reply fast, then keep following up.</p>
<h3>5. Turn every job into reviews and referrals</h3><p>Systemize the ask so it happens every time without you remembering. Do these five in order and you build a machine, not a scramble.</p>` },
  missed: { cat: "Leads", date: "Jul 19, 2026", read: 5, img: B+"hf_20260729_234443_dd24d2ac-ba38-4998-b563-b25352e5f28b.png",
    title: "Every missed call is a customer going to your competitor",
    html: `<p>You were with a client, under a sink, or on the shop floor. The phone rang, went to voicemail, and they called the next name on the list.</p>
<h3>Why small businesses miss so many calls</h3><p>It is the work, not carelessness. The fix is not "answer more", it is making sure a missed call still starts a conversation.</p>
<h3>Text back instantly</h3><p>The moment a call goes unanswered, an automatic text goes out: sorry I missed you, I am with a customer, what do you need? Now they are in a conversation instead of dialing someone else.</p>
<h3>The math is brutal</h3><p>Recover even a few missed calls a month and the system pays for itself several times over. Everything after that is profit you were already leaving on the table.</p>` },
  reviews: { cat: "Reputation", date: "Jul 10, 2026", read: 6, img: B+"hf_20260729_234447_9e62b987-2bbc-448f-b8c2-66f1ff6c3998.png",
    title: "How to get five-star reviews without ever feeling pushy",
    html: `<p>Your happiest customers would leave a review. They just forget, and you feel awkward reminding them.</p>
<h3>Ask at the peak</h3><p>The best moment is right when the work is finished and the customer is visibly pleased. An hour later the feeling fades. A day later it is gone.</p>
<h3>Make it one tap</h3><p>Send a text with a direct link to your review page. Every extra step loses half the people who intended to help you.</p>
<h3>Catch the unhappy ones first</h3><p>Ask how it went before you ask for a public review. If something went wrong you get the chance to fix it privately, which is how a one-star becomes a five-star.</p>
<h3>Do it every single time</h3><p>Reputation is not a campaign, it is a habit. Automate the ask so it happens on every completed job whether you remember or not.</p>` },
  crm: { cat: "Systems", date: "Jul 1, 2026", read: 7, img: D[1],
    title: "What a CRM actually does for a small contractor",
    html: `<p>A CRM is not enterprise software. For a contractor it is one list where every lead, quote and job lives, so nothing depends on you remembering.</p>
<h3>The sticky-note tax</h3><p>Leads in your texts, quotes in your email, follow-ups in your head. Every job you lose to silence is the tax you pay for that setup.</p>
<h3>What it replaces</h3><p>One place shows who called, what they wanted, what you quoted and what happens next. You stop re-asking customers questions they already answered.</p>
<h3>The part that makes money</h3><p>Automatic follow-up. A quote that goes quiet gets three polite nudges without you lifting a finger, and a chunk of those turn into signed work.</p>
<h3>Start small</h3><p>You do not need pipelines with fourteen stages. New lead, quoted, booked, done. That is enough to stop leaking jobs.</p>` },
  buyleads: { cat: "Leads", date: "Jun 24, 2026", read: 6, img: R[0],
    title: "Are paid lead platforms worth it? An honest answer",
    html: `<p>Lead marketplaces are not a scam. They are just an expensive way to rent customers you never get to keep.</p>
<h3>What you are actually buying</h3><p>A shared lead. The same homeowner is talking to three or four of your competitors, and the winner is usually whoever calls back first, not whoever does the best work.</p>
<h3>The real cost per job</h3><p>Take what you spent last month, divide it by jobs actually won. Most contractors are shocked by that number the first time they run it.</p>
<h3>Where they make sense</h3><p>Filling a genuinely empty week, or testing a new service area. Treat them as a stopgap, not a strategy.</p>
<h3>The alternative</h3><p>Own the asset. A site that ranks, a review profile that converts and a follow-up system means the second job from that customer costs you nothing.</p>` },
  agreements: { cat: "Strategy", date: "Jun 15, 2026", read: 6, img: H[2],
    title: "Service agreements: how to stop the cash-flow rollercoaster",
    html: `<p>Feast in summer, famine in February. Service agreements smooth that line out and make your business worth more if you ever sell it.</p>
<h3>Price it around one visit</h3><p>Two tune-ups a year, priority scheduling and a discount on repairs. Simple enough to explain in one breath at the kitchen table.</p>
<h3>Sell it at the end of the job</h3><p>Right after you have fixed their problem is the moment trust is highest. That is when a plan sounds like care, not an upsell.</p>
<h3>Automate the renewal</h3><p>Card on file, reminder text before every visit. Chasing renewals by hand is how good programs quietly die.</p>
<h3>What it buys you</h3><p>A booked calendar in the slow months and a customer who calls you first, forever.</p>` },
  changeorders: { cat: "Operations", date: "Jun 6, 2026", read: 5, img: C[2],
    title: "The change order process that stops you working for free",
    html: `<p>Scope creep does not arrive all at once. It arrives as five small favours that add up to a week you never billed.</p>
<h3>Say the words out loud</h3><p>"Happy to do that, it is extra, I will send it over." One sentence, said calmly, protects the whole job.</p>
<h3>Put it in writing the same day</h3><p>Description, price, new completion date. Memory is not a contract and neither is a text that says "sounds good".</p>
<h3>Get a signature before you start</h3><p>A tap on your phone is enough. Work that starts before approval is work you are gambling on.</p>
<h3>Review it at the end</h3><p>Walk the change orders with the customer before the final invoice. Surprises at invoicing are how good jobs end badly.</p>` },
  training: { cat: "Operations", date: "May 28, 2026", read: 8, img: E[2],
    title: "How to train a tech so the work looks like yours",
    html: `<p>You cannot clone yourself, but you can write down what you do. That is all a training program really is.</p>
<h3>Record the job, not the theory</h3><p>Film yourself doing the five jobs you run most. Ten minutes each, phone on a bucket. That is your first course.</p>
<h3>One checklist per job type</h3><p>What to bring, what to check, what to photograph, what to say to the customer. Checklists beat memory, especially at 6am.</p>
<h3>Ride along, then step back</h3><p>Watch two, help on two, supervise two, then let them run it. Most callbacks come from skipping that last step.</p>
<h3>Make the standard visible</h3><p>Photos of good work and bad work, side by side. People rise to a standard they can actually see.</p>` },
  qualify: { cat: "Leads", date: "May 19, 2026", read: 5, img: P[1],
    title: "Four questions that kill bad estimates before you drive",
    html: `<p>Unpaid estimates across town are the most expensive habit in this trade. A two-minute phone call fixes most of it.</p>
<h3>What exactly is happening?</h3><p>If they cannot describe the problem, ask for a photo. Photos sort the real jobs from the tyre kickers fast.</p>
<h3>When do you need it done?</h3><p>"Sometime this year" and "before Friday" are different businesses. Book the second one first.</p>
<h3>Who else is looking at it?</h3><p>Three bids is fine, you just want to know. It tells you whether to compete on speed or on trust.</p>
<h3>Does a range in this neighbourhood work for you?</h3><p>Give a ballpark on the phone. Sticker shock in a driveway wastes an hour you will never bill.</p>` },
  email: { cat: "Marketing", date: "May 10, 2026", read: 6, img: G[1],
    title: "The cheapest lead source you already own: your old customers",
    html: `<p>Everyone chases new leads while a list of people who already paid them sits untouched in a phone.</p>
<h3>Export the list</h3><p>Every customer from the last three years, name and number. That list is worth more than any ad account you will ever open.</p>
<h3>Send something useful, not a flyer</h3><p>A seasonal reminder that saves them money reads as service. A discount blast reads as desperation.</p>
<h3>Four sends a year is plenty</h3><p>One per season, tied to what actually breaks that time of year. That cadence keeps you top of mind without becoming noise.</p>
<h3>Track the callbacks</h3><p>Note which send produced work. Two years of that and you know exactly which month to hit send.</p>` },
  gbp: { cat: "SEO", date: "May 1, 2026", read: 7, img: W[2],
    title: "Your Google profile is your real homepage",
    html: `<p>Most customers decide before they ever reach your website. They decide in the map pack, on your profile, in about nine seconds.</p>
<h3>Categories and service area</h3><p>Primary category matched exactly to your main service, secondary ones for the rest, service area drawn where you actually work.</p>
<h3>Photos beat words</h3><p>Real job photos, uploaded regularly, from a phone. Stock imagery reads as fake to anyone who has hired a contractor before.</p>
<h3>Reviews with the service named</h3><p>When customers mention the job in their review, you rank for that job. Prompt them gently and it happens on its own.</p>
<h3>Answer every question and review</h3><p>Especially the bad ones, calmly. Prospects read your replies more carefully than the complaints.</p>` },
  pricing: { cat: "Strategy", date: "Apr 21, 2026", read: 7, img: C[0],
    title: "Stop pricing by the hour and start pricing the job",
    html: `<p>Hourly pricing punishes you for getting good at your trade. The faster you work, the less you earn. That is backwards.</p>
<h3>Know your real cost per day</h3><p>Truck, insurance, fuel, phone, software, unpaid estimates, the hours you spend quoting at night. Divide by billable days.</p>
<h3>Price outcomes, not minutes</h3><p>The customer is buying hot water tonight, not ninety minutes of your time. Quote the result with the risk built in.</p>
<h3>Give three options</h3><p>Good, better, best. Most people pick the middle, and the top option makes the middle look sensible.</p>
<h3>Raise it before you resent it</h3><p>If every job feels tight, your price is wrong. A ten percent increase loses very few customers and changes your year.</p>` },
  slow: { cat: "Strategy", date: "Apr 9, 2026", read: 6, img: V[1],
    title: "What to do in the slow season besides worry",
    html: `<p>The quiet weeks are not lost time. They are the only time you get to work on the business instead of in it.</p>
<h3>Call the last two years of customers</h3><p>Not a pitch, a check-in. A surprising share of them have been meaning to book something.</p>
<h3>Fix the front door</h3><p>Update photos, rewrite your service pages, get the booking form down to three fields. In August you will not have time.</p>
<h3>Book the maintenance work</h3><p>Tune-ups, inspections and small repairs exist to fill exactly these weeks. Offer them now, not when you are already busy.</p>
<h3>Write next season's plan</h3><p>Which services made money, which customers were painful, which channel produced the work. Decide before the phone starts ringing again.</p>` }
};
