// Product pages. Text lives here; machine names, features and specs come from site.js.
import { MACHINES, CATEGORIES, machine, machineSVG, machineCard, includedGrid, esc, writePage, slot, art, photo, PHOTOS, icon, crumbs, faqBlock, ctaBand, BASE_URL } from './lib.mjs';

const I = {
  screen: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M10 18h4"/>',
  keypad: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1"/>',
  brush: '<path d="M4 20l4-1L19 8l-3-3L5 16l-1 4zM14 7l3 3"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
  fork: '<path d="M8 3v8M6 3v5a2 2 0 0 0 4 0V3M8 11v10M16 3c-1.5 0-3 2-3 6h3v12"/>',
  tank: '<rect x="6" y="3" width="12" height="18" rx="3"/><path d="M6 12h12"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  snow: '<path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  cup: '<path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 11h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3"/>',
  coil: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="1.5"/><circle cx="14" cy="12" r="1.5"/><circle cx="10" cy="18" r="1.5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
};

const specRow = (k, v) => `<tr><th scope="row">${esc(k)}</th>${v.map(x => `<td class="${x === 'On enquiry' ? 'tbc' : ''}">${esc(x)}</td>`).join('')}</tr>`;
// Photo gallery: main photo + clickable thumbnails (first key is shown first)
function gallery(root, keys) {
  const first = PHOTOS[keys[0]];
  return `<div id="pdMain">${photo(root, { p: first, ratio: '4x5', eager: true, caption: first.cap })}</div>
        <div class="pd-thumbs" role="group" aria-label="Photos" style="grid-template-columns:repeat(${keys.length}, minmax(0, 1fr))">
          ${keys.map((k, i) => { const p = PHOTOS[k]; return `<button type="button" class="pd-thumb" aria-pressed="${i === 0}" aria-label="Show photo: ${esc(p.alt)}" data-photo="${k}"><img src="${root}${p.file}-sm.jpg" alt="" loading="lazy" width="${p.sw || 640}" height="${Math.round((p.sw || 640) * p.h / p.w)}"></button>`; }).join('')}
        </div>`;
}
const galleryScript = (root, keys) => `<script>
// Gallery: clicking a thumbnail swaps the main photo
const PH = ${JSON.stringify(Object.fromEntries(keys.map(k => [k, PHOTOS[k]])))};
document.querySelectorAll('.pd-thumb').forEach(b => b.addEventListener('click', () => {
  const p = PH[b.dataset.photo], fig = document.querySelector('#pdMain figure'), img = fig.querySelector('img');
  img.srcset = '${root}' + p.file + '-sm.jpg ' + (p.sw || 640) + 'w, ${root}' + p.file + '.jpg ' + p.w + 'w';
  img.src = '${root}' + p.file + '.jpg'; img.alt = p.alt;
  let cap = fig.querySelector('figcaption');
  if (p.cap) { if (!cap) { cap = document.createElement('figcaption'); cap.className = 'cap'; fig.appendChild(cap); } cap.textContent = p.cap; } else if (cap) cap.remove();
  document.querySelectorAll('.pd-thumb').forEach(x => x.setAttribute('aria-pressed', x === b));
}));
</script>`;

const productLd = (m, slug, desc) => ({
  '@context': 'https://schema.org', '@type': 'Product',
  name: m.name, description: desc, brand: { '@type': 'Brand', name: 'VNDR' }, category: 'Vending machines',
  url: BASE_URL + 'machines/' + slug + '/'
  // Prices are not published (visitors contact us for pricing), so there is no "offers" block.
});

/* =====================================================================
   RAMEN — flagship page (both models)
   ===================================================================== */
const RAMEN_GALLERY = ['ramenBlack', 'front', 'shelves', 'collect', 'water'];
function ramenPage() {
  const T = machine('ramen');
  const slug = 'ramen-vending-machine';
  const faqs = [
    { q: 'How much does a ramen vending machine cost?', a: [`Contact us for pricing. Every price includes shipping to your nearest port, the custom wrap, a Nayax card reader, online monitoring, setup help and warranty. <a href="../../contact/?machine=ramen">Ask for a quote</a> and we'll give you the full number up front.`] },
    { q: 'Do I need to connect the machine to a water supply?', a: ['The machine has its own independent water storage, so it\'s refilled rather than plumbed in. That gives you much more freedom over where it can go. Ask us about tank capacity and the refill routine.'] },
    { q: 'What products can I sell in a ramen vending machine?', a: ['Cup and bowl instant noodles are the core range. Think a mix of mild crowd-pleasers, spicy options, and vegetarian or vegan choices. The cutlery compartment means customers get a fork or chopsticks with their meal. Many operators also rotate a "featured" or premium noodle to keep regulars interested.'] },
    { q: 'Where do ramen vending machines work best?', a: ['Anywhere people are hungry, short on time and short on options: universities and student accommodation, hospitals, transport hubs, warehouses and distribution centres with shift workers, gyms, and late-night entertainment venues. See the <a href="#locations">locations section</a> above for what makes each one work.'] },
    { q: 'Can I put my own branding on the machine?', a: ['Yes, and the custom wrap is included. Use your vending business\'s brand, the venue\'s branding, or a design built around the product. A strong wrap is one of the easiest ways to make the machine stand out.'] },
    { q: 'Can I change the water temperature?', a: ['Yes. The hot water is temperature controlled, and you can adjust it directly on the machine.'] },
    { q: 'Can I check sales and stock remotely?', a: ['Yes. The machine includes online machine monitoring, so you can keep an eye on it without being there.'] },
    { q: 'Is a ramen vending machine profitable?', a: ['It can be, but no machine is profitable in the wrong location. Your results come down to foot traffic, how many sales you make per day, your selling price, product cost and any commission you pay the site. Use the <a href="#calculator">calculator on this page</a> to test scenarios, then talk to us about your location.'] },
    { q: 'Do you help with finding a location?', a: ['Yes. VNDR is built around the whole journey: machine, location, stock, launch, scale. We\'ll help you work out what makes a location worth pursuing and how to approach the business that owns it. Read our <a href="../../blog/how-to-find-vending-machine-locations/">guide to finding vending locations</a> to get started.'] },
    { q: 'Do you ship to my country?', a: ['We ship worldwide. Shipping to your nearest port is included in the price, and we can also deliver straight to your door. Every machine is set up for the power supply in your country.'] },
    { q: 'How do customers pay?', a: ['Every machine comes with a Nayax card reader for card, tap and phone payments. You can also choose a cash slot at no extra cost.'] },
    { q: 'What support do I get?', a: ['We help you set up, and you get a step-by-step booklet on how to run the machine. Every machine is covered by warranty, with ongoing support for maintenance.'] },
  ];
  const crumb = crumbs('../../', [['Home', 'index.html'], ['Machines', 'machines/'], ['Ramen vending machine']]);
  const faq = faqBlock(faqs);
  const desc = 'Ramen vending machine with touchscreen ordering and temperature-controlled hot water. Ships worldwide. Features, specs, best locations, what to stock, and FAQs.';

  const sv = (m, k) => k === 'Interface' ? m.interface : k === 'Temperature' ? m.temp : m.specs[k];

  writePage({
    pagePath: `machines/${slug}/`,
    active: 'machines',
    title: 'Ramen Vending Machine with Touchscreen & Hot Water | VNDR',
    description: desc,
    jsonld: [crumb.ld, faq.ld, productLd(T, slug, T.desc)],
    body: root => `
<!-- ===== HERO ===== -->
<section class="pd-hero">
  <div class="wrap">
    ${crumb.html}
    <div class="pd-grid">
      <div class="pd-gallery reveal">
        ${gallery(root, RAMEN_GALLERY)}
      </div>
      <div class="pd-info">
        <div class="eyebrow reveal">Specialty vending</div>
        <h1 class="reveal">Ramen vending machine.</h1>
        <p class="lede reveal">Hot noodles, served in seconds, at any hour. A specialty vending machine with an interactive touchscreen and an integrated hot-water system.</p>
        <dl class="pd-quick reveal">
          <div><dt>Ordering</dt><dd>Interactive touchscreen</dd></div>
          <div><dt>Serves</dt><dd>Cup &amp; bowl instant noodles</dd></div>
          <div><dt>Hot water</dt><dd>Temperature controlled, adjustable</dd></div>
          <div><dt>Payments</dt><dd>Nayax card reader, optional cash slot</dd></div>
          <div><dt>Branding</dt><dd>Custom wrap included</dd></div>
          <div><dt>Shipping</dt><dd>Worldwide</dd></div>
        </dl>
        <div class="pd-ctas reveal">
          <a href="${root}contact/?machine=ramen" class="btn btn-primary" data-machine="ramen">Contact us for pricing <span class="arrow">→</span></a>
          <a href="#specs" class="btn btn-ghost">Full specs</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== STATS ===== -->
<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="stats reveal">
      <div><b>Tap</b><span>to order on the touchscreen</span></div>
      <div><b>Hot</b><span>water station built into the machine</span></div>
      <div><b>24/7</b><span>sales potential, no staff needed</span></div>
      <div><b>1</b><span>machine to start your business</span></div>
    </div>
  </div>
</section>

<!-- ===== WHAT IS IT ===== -->
<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        <div class="eyebrow reveal">What is a ramen vending machine?</div>
        <h2 class="reveal">A hot meal, not just a snack.</h2>
        <p class="reveal">A ramen vending machine sells instant noodles <strong>and</strong> provides the hot water to make them. Customers choose their noodles, pay, collect the cup and fill it at the machine's built-in hot-water station. Cutlery is right there, so they can eat on the spot.</p>
        <p class="reveal">That turns a vending machine into a <strong>meal option</strong>. It's something people actively seek out when the cafeteria is closed, the shift runs late, or the nearest food is a drive away.</p>
        <p class="reveal">And because it's different from every snack and drink machine people walk past, it gets noticed, photographed and talked about.</p>
      </div>
      <div class="reveal">${photo(root, { p: PHOTOS.water, ratio: '4x5', pos: '50% 55%', caption: 'Built-in hot-water station' })}</div>
    </div>
  </div>
</section>

<!-- ===== CUSTOMER JOURNEY ===== -->
<section class="sec light">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">How it works for your customer</div>
      <h2 class="reveal">Four steps. About as easy as vending gets.</h2>
    </div>
    <div class="csteps">
      ${[
        ['Choose', 'They browse flavours and pick their noodles on the touchscreen.', { p: PHOTOS.front, pos: '72% 27%', zoom: 2.1 }],
        ['Pay', 'A quick tap of their card at the machine. No cashier, no queue.', { p: PHOTOS.front, pos: '88% 53%', zoom: 3 }],
        ['Collect', 'Their cup drops into the pick-up door, ready to go.', { p: PHOTOS.collect, pos: '50% 58%' }],
        ['Add hot water & enjoy', 'They fill the cup at the built-in hot-water station, grab cutlery and eat.', { p: PHOTOS.water, pos: '50% 62%' }]
      ].map(([h, p, ph], i) => `
      <div class="cstep reveal">
        ${photo(root, { ...ph, ratio: '4x3', sizes: '(max-width: 520px) 100vw, 25vw' })}
        <span class="n">0${i + 1}</span><h3>${h}</h3><p>${p}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ===== FEATURES ===== -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">Features</div>
      <h2 class="reveal">Built to run without you standing next to it.</h2>
    </div>
    <div class="fgrid reveal">
      ${[
        [I.screen, 'Interactive touchscreen', 'A large, bright ordering screen that makes buying feel modern and draws people over.'],
        [I.drop, 'Hot-water system', 'The machine provides the hot water, so customers walk away with a ready-to-eat meal.'],
        [I.tank, 'Independent water storage', 'Its own internal water supply, so it\'s refilled rather than plumbed in. That means more freedom over placement.'],
        [I.wifi, 'Online machine monitoring', 'Keep an eye on the machine remotely and plan your restocks.'],
        [I.brush, 'Custom branding / wrap', 'Wrap the machine in your brand, the venue\'s, or a design that makes it impossible to miss.'],
        [I.box, 'Product storage', 'Dedicated internal storage for your noodle range.'],
        [I.fork, 'Cutlery compartment', 'Forks or chopsticks right where customers need them.'],
        [I.eye, 'Made to be noticed', 'A specialty concept that stands out from every snack machine in the building.']
      ].map(([ic, h, p]) => `<div class="fitem">${icon(ic)}<h3>${h}</h3><p>${p}</p></div>`).join('')}
    </div>
  </div>
</section>

<!-- ===== FEATURE PHOTOS ===== -->
<section class="sec">
  <div class="wrap">
    <div class="split flip">
      <div>
        <div class="eyebrow reveal">Make it yours</div>
        <h2 class="reveal">A machine with a personality.</h2>
        <p class="reveal">Every ramen machine comes with a <strong>custom branded wrap</strong>, included in the price. Use it to build your own vending brand across multiple machines, to match a venue's look, or to go bold with a design built around the food.</p>
        <p class="reveal">A great wrap does real work: it pulls people across the room, makes the machine part of the venue rather than an afterthought, and gives you something worth posting about.</p>
        <p class="reveal">Take <strong>Right Away Ramen</strong>: their wrap carries their mascot, their website and a simple "Don't forget to tag us" with their Instagram handle. Every customer becomes a chance to be seen.</p>
        <a href="${root}contact/?machine=ramen" class="btn btn-ghost reveal">Ask about wraps</a>
      </div>
      <div class="reveal">${photo(root, { p: PHOTOS.collect, ratio: '4x5', pos: '50% 70%', caption: 'Wrap by Right Away Ramen' })}</div>
    </div>
  </div>
</section>

<!-- ===== WHY RAMEN ===== -->
<section class="sec light">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">Why ramen?</div>
      <h2 class="reveal">Why a ramen machine makes a strong first (or next) machine.</h2>
    </div>
    <div class="bcards">
      ${[
        ['It\'s a meal, not a snack', 'People buy a hot meal for different reasons than they buy a chocolate bar. It solves a real problem: "I\'m hungry and there\'s nothing open."'],
        ['It stands out', 'Most locations already have a snack or drinks machine. A ramen machine is different, which makes it easier to pitch to a site owner.'],
        ['Shelf-stable stock', 'Instant noodles keep for a long time compared with fresh food, so there\'s less waste and less pressure to restock daily.'],
        ['Late-night demand', 'It shines in places that run after hours: student housing, hospitals, shift work, transport and venues.'],
        ['Content magnet', 'People film things that surprise them. A ramen machine gets shared, which brings more customers to the machine.'],
        ['Easy to expand', 'Once one ramen machine is working, the same playbook applies to the next location.']
      ].map(([h, p]) => `<div class="bcard reveal"><h3>${h}</h3><p>${p}</p></div>`).join('')}
    </div>
  </div>
</section>

<!-- ===== LOCATIONS ===== -->
<section class="sec" id="locations">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">Where it works</div>
      <h2 class="reveal">The machine isn't the business. The location is.</h2>
      <p class="lede reveal">The best ramen locations combine foot traffic, a captive audience, real hunger and limited alternatives, especially outside normal hours.</p>
    </div>
    <div class="bcards">
      ${[
        ['Universities', 'Long days, tight budgets and late study sessions. Hot food between lectures is an easy sell.'],
        ['Student accommodation', 'Residents want food at 11pm without leaving the building.'],
        ['Hospitals', 'Staff on night shifts, visitors waiting for hours, and food outlets that close early.'],
        ['Warehouses & distribution centres', 'Shift workers, short breaks and often nothing nearby.'],
        ['Transport hubs', 'People waiting with time to kill and a reason to eat.'],
        ['Gyms & sports centres', 'Hungry members after training, especially later in the day.'],
        ['Entertainment venues', 'Late finishes and big crowds looking for something quick and hot.'],
        ['Hotels & apartments', 'Guests and residents who need food after the kitchen or shops have closed.']
      ].map(([h, p]) => `<div class="bcard reveal"><h3>${h}</h3><p>${p}</p></div>`).join('')}
    </div>
    <p class="reveal" style="margin-top:32px"><a class="btn btn-ghost" href="${root}blog/how-to-find-vending-machine-locations/">Read: how to find a great location →</a></p>
  </div>
</section>

<!-- ===== WHAT TO STOCK ===== -->
<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        <div class="eyebrow reveal">What to stock</div>
        <h2 class="reveal">Build a menu people come back for.</h2>
        <p class="reveal">Start with a small, proven range and let your sales data tell you what to keep. A balanced ramen menu usually includes:</p>
        <ul class="feat-list reveal" style="grid-template-columns:1fr">
          ${['<strong>Crowd-pleasers:</strong> mild chicken, beef or soy flavours that almost everyone will buy',
             '<strong>Spicy options:</strong> fire-noodle style cups have a loyal following',
             '<strong>Vegetarian &amp; vegan:</strong> so nobody is left out',
             '<strong>A premium pick:</strong> a higher-priced bowl for people who want something special',
             '<strong>A rotating "featured" noodle:</strong> keeps regulars curious'].map(x => `<li>${icon('<path d="M5 12l5 5 9-10"/>')}<span>${x}</span></li>`).join('')}
        </ul>
        <p class="reveal">Check every product works with the machine's cup size and hot-water dispensing before you stock it. We can help with that.</p>
      </div>
      <div class="reveal">${photo(root, { p: PHOTOS.shelves, ratio: '4x5', pos: '30% 40%', caption: 'A full ramen menu, Right Away Ramen' })}</div>
    </div>
  </div>
</section>

<!-- ===== CALCULATOR ===== -->
<section class="sec" id="calculator">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">Run the numbers</div>
      <h2 class="reveal">What could one ramen machine do?</h2>
      <p class="lede reveal">The sliders start with an example ramen scenario. Change them to match your location, pricing and product costs.</p>
    </div>
    <div id="calc" class="reveal"></div>
  </div>
</section>

<!-- ===== SPECS ===== -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Included</div><h2 class="reveal">Included with every machine.</h2></div>
    ${includedGrid()}
  </div>
</section>

<section class="sec" id="specs">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">Specifications</div>
      <h2 class="reveal">Specs.</h2>
    </div>
    <div class="table-wrap reveal">
      <table class="spec-table">
        <tbody>
          ${specRow('Interface', [T.interface])}
          ${specRow('Temperature', [T.temp])}
          ${Object.entries(T.specs).map(([k, v]) => specRow(k, [v])).join('')}
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ===== CARE ===== -->
<section class="sec light">
  <div class="wrap">
    <div style="max-width:720px">
      <div>
        <div class="eyebrow reveal">Running it</div>
        <h2 class="reveal">What looking after it involves.</h2>
        <p class="reveal">A ramen machine is simple to run, but it isn't hands-off. Expect a regular routine of:</p>
        <ul class="feat-list reveal" style="grid-template-columns:1fr">
          ${['<strong>Restocking</strong> noodles and cutlery based on what\'s selling',
             '<strong>Refilling the water</strong> in the independent water storage',
             '<strong>Keeping it clean:</strong> the dispensing area and exterior especially',
             '<strong>Checking in remotely</strong> so trips are planned, not guessed'].map(x => `<li>${icon('<path d="M5 12l5 5 9-10"/>')}<span>${x}</span></li>`).join('')}
        </ul>
        <p class="reveal">We'll walk you through the exact routine before your machine goes live.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== GALLERY ===== -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">Gallery</div>
      <h2 class="reveal">In the wild.</h2>
    </div>
    <div class="bcards reveal" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
      ${['front', 'shelves', 'collect', 'water'].map(k => photo(root, { p: PHOTOS[k], ratio: '4x5', sizes: '(max-width: 560px) 100vw, 25vw' })).join('')}
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="sec" id="faq">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow reveal">FAQ</div>
      <h2 class="reveal">Ramen vending machine questions.</h2>
    </div>
    ${faq.html}
  </div>
</section>

<!-- ===== RELATED ===== -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Keep reading</div><h2 class="reveal">Before you decide.</h2></div>
    <div class="rel reveal">
      <a href="${root}blog/ramen-vending-machines-guide/"><small>Guide</small><b>Ramen vending machines: the complete guide</b><span>How they work, where they sell, and what to know first.</span></a>
      <a href="${root}quiz/which-vending-machine/"><small>Quiz</small><b>Which vending machine is right for you?</b><span>Six questions, one recommendation.</span></a>
      <a href="${root}blog/how-much-does-it-cost-to-start-a-vending-business/"><small>Guide</small><b>What it costs to start a vending business</b><span>Every cost to plan for, beyond the machine.</span></a>
      <a href="${root}machines/"><small>Machines</small><b>See all machines</b><span>Snack and drinks machines too.</span></a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${ctaBand(root, { h: 'Start with one ramen machine.', p: 'Tell us about your location and we\'ll get you a full quote.', primary: ['Get pricing', 'contact/?machine=ramen'], secondary: ['Compare all machines', 'machines/'] })}
  </div>
</section>
`,
    image: PHOTOS.ramenBlack.file + '.jpg',
    scripts: root => `<script>
window.addEventListener('DOMContentLoaded', () => mountCalc(document.getElementById('calc'), { machine: 5997, sales: 12, price: 6.5, cost: 2.2, comm: 10 }));
</script>
${galleryScript(root, RAMEN_GALLERY)}`
  });
}

/* =====================================================================
   Standard product pages
   ===================================================================== */
const STANDARD = [
  {
    id: 'snack-chilled', slug: 'refrigerated-snack-vending-machine',
    photos: ['snackFront', 'snackHall', 'studioThree', 'darkKeypad', 'studioClose'],
    rangePhoto: 'snackFront',
    title: 'Refrigerated Snack Vending Machine | VNDR',
    h1: 'Refrigerated snack vending machine.',
    lede: 'Chilled snacks, fresh food and cold drinks in one machine. A bigger product range means more reasons to buy.',
    icon: I.snow,
    overview: [
      'A refrigerated snack machine keeps its whole cabinet chilled, which opens up products a standard snack machine can\'t carry: sandwiches, salads, yoghurt, chilled snacks and cold drinks, alongside the usual chocolate and chips.',
      'That makes it a strong fit for workplaces and sites where people want a proper lunch option, not just a treat. It does ask a little more of you: chilled and fresh products have shorter shelf lives, so stock rotation matters.'
    ],
    why: [
      ['Wider range', 'Fresh and chilled food lets you sell lunch, not just snacks.'],
      ['Higher-value sales', 'Meal items typically sell at higher prices than a chocolate bar.'],
      ['Fits more sites', 'Offices, hospitals and campuses often want a healthier, fresher option.'],
      ['One machine, two jobs', 'Chilled drinks and snacks from a single footprint.']
    ],
    stock: ['Sandwiches, wraps and salads', 'Yoghurt and dairy snacks', 'Chilled protein snacks', 'Chocolate and bars (chilling keeps them firm)', 'Cold cans and bottles'],
    locations: [['Offices', 'Lunch on site, without the walk.'], ['Hospitals', 'Fresh food for staff and visitors at all hours.'], ['Universities', 'Healthier options between classes.'], ['Gyms', 'Protein snacks and cold drinks.']],
    faqs: [
      { q: 'How is a refrigerated snack machine different from a standard one?', a: ['The whole cabinet is chilled, so you can sell fresh and perishable items like sandwiches, salads and dairy, as well as cold drinks. A <a href="../snack-vending-machine/">non-refrigerated snack machine</a> is limited to shelf-stable products.'] },
      { q: 'Does fresh food mean more work?', a: ['A little. Fresh items have shorter use-by dates, so you\'ll restock more often and rotate stock carefully. Many operators mix fresh items with longer-life chilled snacks to balance it out.'] },
      { q: 'How much does it cost?', a: ['Contact us for pricing. Every price includes shipping to your nearest port, a custom wrap, a Nayax card reader, online monitoring, setup help and warranty. <a href="../../contact/?machine=snack-chilled">Ask us for a quote</a>.'] },
      { q: 'Where does it work best?', a: ['Workplaces, hospitals, campuses and gyms: places where people want a real food option during the day.'] }
    ]
  },
  {
    id: 'snack', slug: 'snack-vending-machine',
    photos: ['snackHall', 'studioFront', 'studioLow', 'darkEdge', 'darkKeypad'],
    rangePhoto: 'snackFront',
    title: 'Snack Vending Machine (Non-Refrigerated) | VNDR',
    h1: 'Snack vending machine.',
    lede: 'The classic. Shelf-stable snacks, no refrigeration to run, and the easiest way to start a vending business.',
    icon: I.sun,
    overview: [
      'A non-refrigerated (ambient) snack machine sells products that don\'t need chilling: chips, chocolate, bars, nuts, lollies and even personal-care items. It\'s the machine most vending businesses start with, and for good reason.',
      'Products last a long time, there\'s no cooling system to maintain, and almost every location understands what it is. That makes it simpler to stock, simpler to run and simpler to pitch.'
    ],
    why: [
      ['Simple to run', 'No refrigeration, long shelf-life stock, fewer things to manage.'],
      ['Low waste', 'Shelf-stable products mean less spoiled stock.'],
      ['Easy to place', 'Site owners know exactly what a snack machine is.'],
      ['Great first machine', 'Learn the business with fewer moving parts, then add specialty machines.']
    ],
    stock: ['Chips and savoury snacks', 'Chocolate and bars', 'Nuts and trail mix', 'Lollies and gum', 'Personal-care items and essentials'],
    locations: [['Offices', 'Steady weekday demand.'], ['Warehouses', 'Snacks for every shift.'], ['Apartment buildings', 'Convenience without leaving the building.'], ['Entertainment venues', 'Impulse buys at peak times.']],
    faqs: [
      { q: 'Is a snack machine a good first vending machine?', a: ['For many people, yes. It\'s simple to run and products keep for a long time. Read <a href="../../blog/how-to-start-a-vending-machine-business/">how to start a vending business</a> for the full picture.'] },
      { q: 'Can I sell chocolate in a non-refrigerated machine?', a: ['Yes. Just keep in mind that very warm locations can affect chocolate. In hot spots, a <a href="../refrigerated-snack-vending-machine/">refrigerated snack machine</a> may be the better choice.'] },
      { q: 'How much does it cost?', a: ['Contact us for pricing. Every price includes shipping to your nearest port, a custom wrap, a Nayax card reader, online monitoring, setup help and warranty. <a href="../../contact/?machine=snack">Ask us for a quote</a>.'] },
      { q: 'Can I sell things other than snacks?', a: ['Yes. Many operators add personal-care items, phone accessories or other small essentials, as long as they fit the spirals.'] }
    ]
  },
  {
    id: 'drinks', slug: 'drink-vending-machine',
    photos: ['studioFront2', 'studioAngle', 'darkFront', 'darkAngle', 'darkPanel'],
    rangePhoto: 'studioClose',
    title: 'Drink Vending Machine | VNDR',
    h1: 'Drink vending machine.',
    lede: 'Cold drinks, high turnover, simple to stock. A refrigerated machine for water, soft drinks, energy drinks and protein shakes.',
    icon: I.snow,
    overview: [
      'A drink vending machine does one thing very well: sells cold drinks, fast. With a glass display front, customers can see exactly what\'s available, and drinks are one of the most consistent sellers in vending.',
      'It\'s a natural fit anywhere people get thirsty: gyms, sports facilities, warehouses and transport hubs. It also pairs well with a snack or ramen machine at the same site.'
    ],
    why: [
      ['Consistent demand', 'Drinks are an everyday purchase, not an occasional treat.'],
      ['Simple range', 'A focused product line is easy to manage and reorder.'],
      ['Visible stock', 'A glass front sells the product for you.'],
      ['Pairs well', 'Add it next to a snack or ramen machine for a mini food hub.']
    ],
    stock: ['Still and sparkling water', 'Soft drinks', 'Energy drinks', 'Sports drinks', 'Protein shakes and iced coffee'],
    locations: [['Gyms', 'Water, sports and protein drinks.'], ['Sports centres', 'Big crowds, thirsty players.'], ['Warehouses', 'Hydration for physical work.'], ['Transport hubs', 'Grab-and-go for travellers.']],
    faqs: [
      { q: 'What can I sell in a drink vending machine?', a: ['Cans and bottles: water, soft drinks, energy drinks, sports drinks, protein shakes and iced coffee. Check bottle sizes with us to make sure they suit the machine.'] },
      { q: 'How much does it cost?', a: ['Contact us for pricing. Every price includes shipping to your nearest port, a custom wrap, a Nayax card reader, online monitoring, setup help and warranty. <a href="../../contact/?machine=drinks">Ask us for a quote</a>.'] },
      { q: 'Should I get a drinks machine or a refrigerated snack machine?', a: ['If drinks are the main demand (gyms, sports venues), a dedicated drinks machine gives you more drink capacity. If you want food and drinks from one machine, look at the <a href="../refrigerated-snack-vending-machine/">refrigerated snack machine</a>. Not sure? Try the <a href="../../quiz/which-vending-machine/">machine quiz</a>.'] }
    ]
  }
];

function standardPage(p) {
  const m = machine(p.id);
  const cat = CATEGORIES.find(c => c.id === m.category);
  const crumb = crumbs('../../', [['Home', 'index.html'], ['Machines', 'machines/'], [m.name]]);
  const faq = faqBlock([...p.faqs,
    { q: 'Do you ship to my country?', a: ['We ship worldwide. Shipping to your nearest port is included in the price, and we can also deliver straight to your door. Every machine is set up for the power supply in your country.'] },
    { q: 'How do customers pay?', a: ['Every machine comes with a Nayax card reader for card, tap and phone payments. You can also choose a cash slot at no extra cost.'] },
    { q: 'What support do I get?', a: ['We help you set up, and you get a step-by-step booklet on how to run the machine. Every machine is covered by warranty, with ongoing support for maintenance.'] }]);
  const desc = `${m.short} ${p.lede.split('. ')[0].replace(/\.$/, '')}. Features, specs, best locations and FAQs.`.slice(0, 158);
  const others = MACHINES.filter(x => x.id !== m.id && x.id !== 'ramen-keypad').slice(0, 3);
  writePage({
    pagePath: `machines/${p.slug}/`,
    active: 'machines',
    title: p.title,
    description: desc,
    jsonld: [crumb.ld, faq.ld, productLd(m, p.slug, m.desc)],
    image: p.photos ? PHOTOS[p.photos[0]].file + '.jpg' : undefined,
    scripts: root => p.photos ? galleryScript(root, p.photos) : '',
    body: root => `
<section class="pd-hero">
  <div class="wrap">
    ${crumb.html}
    <div class="pd-grid">
      <div class="pd-gallery reveal">
        ${p.photos ? gallery(root, p.photos) : `${art(m.art, 'hero')}
        <div class="pd-thumbs">
          ${['Machine in a real location', 'Front close-up', 'Product display', 'Payment / interface'].map((h, i) =>
            slot({ ratio: '1x1', hint: h, file: `${root}images/${p.slug}/${i + 1}.jpg` })).join('')}
        </div>`}
      </div>
      <div class="pd-info">
        <div class="eyebrow reveal">${esc(cat.name)} vending · ${esc(m.tag)}</div>
        <h1 class="reveal">${esc(p.h1)}</h1>
        <p class="lede reveal">${esc(p.lede)}</p>
        <div class="pills reveal">
          <span class="pill">${icon(m.interface === 'Touchscreen' ? I.screen : I.keypad)}${esc(m.interface)}</span>
          <span class="pill">${icon(p.icon)}${esc(m.temp)}</span>
        </div>
        <ul class="feat-list reveal">${m.features.map(f => `<li>${icon('<path d="M5 12l5 5 9-10"/>')}${esc(f)}</li>`).join('')}</ul>
        <div class="pd-ctas reveal">
          <a href="${root}contact/?machine=${m.id}" class="btn btn-primary" data-machine="${m.id}">Contact us for pricing <span class="arrow">→</span></a>
          <a href="#specs" class="btn btn-ghost">Specs</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        <div class="eyebrow reveal">Overview</div>
        <h2 class="reveal">${esc(m.short)}</h2>
        ${p.overview.map(x => `<p class="reveal">${x}</p>`).join('')}
      </div>
      <div class="reveal">${photo(root, { p: PHOTOS[p.photos[1]], ratio: '4x5' })}</div>
    </div>
  </div>
</section>

<section class="sec light">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Why this machine</div><h2 class="reveal">What makes it work.</h2></div>
    <div class="bcards">${p.why.map(([h, x]) => `<div class="bcard reveal"><h3>${h}</h3><p>${x}</p></div>`).join('')}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split flip">
      <div>
        <div class="eyebrow reveal">What to stock</div>
        <h2 class="reveal">Products that sell.</h2>
        <ul class="feat-list reveal" style="grid-template-columns:1fr">${p.stock.map(x => `<li>${icon('<path d="M5 12l5 5 9-10"/>')}${esc(x)}</li>`).join('')}</ul>
        <p class="reveal muted">Start with a tight range, then let sales data guide what stays. <a href="${root}blog/what-to-sell-in-a-vending-machine/" style="color:var(--ink);text-decoration:underline">Read our stocking guide →</a></p>
      </div>
      <div class="reveal">${p.rangePhoto ? photo(root, { p: PHOTOS[p.rangePhoto], ratio: '4x5', pos: '50% 35%' }) : slot({ ratio: '4x5', hint: 'Product range photo', file: `${root}images/${p.slug}/range.jpg` })}</div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Best locations</div><h2 class="reveal">Where it sells.</h2></div>
    <div class="bcards">${p.locations.map(([h, x]) => `<div class="bcard reveal"><h3>${h}</h3><p>${x}</p></div>`).join('')}</div>
  </div>
</section>

<!-- ===== INCLUDED ===== -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Included</div><h2 class="reveal">Included with every machine.</h2></div>
    ${includedGrid()}
  </div>
</section>

<section class="sec" id="specs">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Specifications</div><h2 class="reveal">Specs.</h2></div>
    <div class="table-wrap reveal">
      <table class="spec-table">
        <tbody>
          ${specRow('Interface', [m.interface])}
          ${specRow('Temperature', [m.temp])}
          ${Object.entries(m.specs).map(([k, v]) => specRow(k, [v])).join('')}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">FAQ</div><h2 class="reveal">Questions.</h2></div>
    ${faq.html}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div class="eyebrow reveal">Other machines</div><h2 class="reveal">Compare options.</h2></div>
    <div class="rel reveal">
      ${others.map(o => `<a href="${root}${o.page}"><small>${esc(CATEGORIES.find(c => c.id === o.category).name)}</small><b>${esc(o.category === 'ramen' ? 'Ramen vending machines' : o.name)}</b><span>${esc(o.short)}</span></a>`).join('')}
      <a href="${root}quiz/which-vending-machine/"><small>Quiz</small><b>Which machine is right for you?</b><span>Answer six questions and get a recommendation.</span></a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${ctaBand(root, { h: `Ready to start with a ${cat.name.toLowerCase()} machine?`, p: 'Tell us about your location and we\'ll come back with pricing and advice.', primary: ['Get pricing', `contact/?machine=${m.id}`], secondary: ['All machines', 'machines/'] })}
  </div>
</section>
`
  });
}

/* =====================================================================
   Catalogue: machines/
   ===================================================================== */
function cataloguePage() {
  const crumb = crumbs('../', [['Home', 'index.html'], ['Machines']]);
  writePage({
    pagePath: 'machines/',
    active: 'machines',
    title: 'Vending Machines for Sale: Ramen, Snack & Drink | VNDR',
    description: 'Commercial vending machines for your vending business: a touchscreen ramen machine with hot water, refrigerated and non-refrigerated snack machines, and drink machines.',
    jsonld: [crumb.ld],
    body: root => `
<section class="p-hero">
  <div class="wrap">
    ${crumb.html}
    <div class="eyebrow reveal">The machines</div>
    <h1 class="reveal">Pick your machine. <span class="muted">Build from there.</span></h1>
    <p class="lede reveal">Ramen, snack and drinks. Every machine is chosen to be simple to run and easy to place, and to be the start of something bigger.</p>
    <p class="reveal" style="margin-top:28px"><a href="${root}quiz/which-vending-machine/" class="btn btn-ghost">Not sure? Take the 60-second quiz →</a></p>
  </div>
</section>

<div class="tabs-bar">
  <div class="wrap">
    <div class="tabs" id="tabs" role="group" aria-label="Filter machines by category">
      <button type="button" data-cat="all" aria-pressed="true">All machines <span>${MACHINES.length}</span></button>
      ${CATEGORIES.map(c => `<button type="button" data-cat="${c.id}" aria-pressed="false">${esc(c.name)} <span>${MACHINES.filter(m => m.category === c.id).length}</span></button>`).join('')}
    </div>
  </div>
</div>

<div class="wrap" id="catalogue">
  ${CATEGORIES.map((c, i) => {
    const list = MACHINES.filter(m => m.category === c.id);
    return `
  <section class="cat" id="${c.id}" data-cat="${c.id}" aria-labelledby="h-${c.id}">
    <div class="cat-head reveal">
      <span class="num">${String(i + 1).padStart(2, '0')} / ${list.length} ${list.length === 1 ? 'model' : 'models'}</span>
      <h2 id="h-${c.id}">${esc(c.name)}</h2>
      <p>${esc(c.blurb)}</p>
    </div>
    <div class="machine-grid">
      ${list.map(m => machineCard(m, root, 'cat')).join('')}
    </div>
  </section>`;
  }).join('')}
</div>

<section class="compare" id="compare">
  <div class="wrap">
    <div class="head">
      <div><div class="eyebrow reveal">Compare</div><h2 class="reveal">Every machine, side by side.</h2></div>
      <p class="lede reveal">Hot or cold. Chilled or ambient. Here's the quick version.</p>
    </div>
    <div class="table-wrap reveal">
      <table class="cmp">
        <thead><tr><th>Machine</th><th>Category</th><th>Interface</th><th>Temperature</th><th>Great for</th><th></th></tr></thead>
        <tbody>
          ${MACHINES.map(m => `<tr>
            <td><a href="${root}${m.page}">${esc(m.name)}</a></td>
            <td>${esc(CATEGORIES.find(c => c.id === m.category).name)}</td>
            <td>${esc(m.interface)}</td><td>${esc(m.temp)}</td>
            <td>${esc(m.specs['Ideal locations'].split(', ').slice(0, 3).join(', '))}</td>
            <td><a href="${root}contact/?machine=${m.id}" data-machine="${m.id}">Contact us for pricing</a></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div style="margin-top:120px">${ctaBand(root, { h: 'Not sure which machine?', p: 'Take the quiz, or tell us about your location and we\'ll help you choose.', primary: ['Take the quiz', 'quiz/which-vending-machine/'], secondary: ['Ask us', 'contact/'] })}</div>
  </div>
</section>
`,
    scripts: `<script>
const tabs = document.getElementById('tabs');
function filter(cat, scroll) {
  if (!CATEGORIES.some(c => c.id === cat)) cat = 'all';
  tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === cat));
  document.querySelectorAll('.cat').forEach(s => { s.hidden = cat !== 'all' && s.dataset.cat !== cat; });
  document.querySelectorAll('.cat .reveal').forEach(el => el.classList.add('in'));
  if (scroll) document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
}
tabs.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  history.replaceState(null, '', b.dataset.cat === 'all' ? location.pathname : '#' + b.dataset.cat);
  filter(b.dataset.cat, true);
});
if (location.hash) filter(location.hash.slice(1), false);
</script>`
  });
}


export function buildProducts() {
  cataloguePage();
  ramenPage();
  STANDARD.forEach(standardPage);
}
